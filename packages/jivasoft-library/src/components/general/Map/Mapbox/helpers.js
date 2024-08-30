import React, { useCallback, useEffect } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl'
import { fetchIpInformation } from '../../../../app/helpers/location'

// Custom hook for handling geolocation
export const useGeolocation = (
  mapState,
  mapDispatch,
  setZoom,
  setLocationFetched
) => {
  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            position => resolve(position.coords),
            error => reject(error),
            {
              timeout: 10000, // Timeout after 10 seconds (adjust as needed)
              enableHighAccuracy: true
            }
          )
        })
        // console.log('get user position', position)
        // Dispatch position to map
        mapDispatch({
          type: 'SET_POSITION',
          position: { lat: position.latitude, lng: position.longitude }
        })
        setZoom(12)
        // Optionally fetch geocoding data or other actions here
        setLocationFetched(true) // Mark location as fetched
      } catch (error) {
        console.error('Error fetching geolocation:', error)
        if (mapState?.ip && mapState?.ipLocation) {
          mapDispatch({
            type: 'SET_POSITION',
            position: mapState?.ipLocation
          })
        } else {
          const ipInfo = await fetchIpInformation()
          if (ipInfo) {
            const { ip, location } = ipInfo
            mapDispatch({ type: 'SET_IP', ip })
            mapDispatch({ type: 'SET_IP_LOCATION', location })
            mapDispatch({
              type: 'SET_POSITION',
              position: location
            })
          }
        }
        setZoom(10)
        setLocationFetched(true) // Mark location fetch as complete even if failed
      }
    }
    fetchGeolocation()
  }, [])
}

export const initializeMap = (mapContainer, position, zoom) => {
  // const position = {
  //   lat: 39.8283,
  //   lng: -98.5795
  // }
  return new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/standard',
    center: [position.lng, position.lat], // Initial position
    zoom: zoom // Initial zoom
  })
}
export const addGeocoderControls = (
  map,
  mapState,
  mapDispatch,
  setNewLocation,
  geocoder
) => {
  const { position, placeholder, allowMultiple, searchQuery } = mapState
  setGeocoderSearchQuery(geocoder, searchQuery)
  // Add event listener to capture input changes
  const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder input')
  if (geocoderInput) {
    geocoderInput.addEventListener('input', e => {
      // Dispatch the search query to the state
      mapDispatch({
        type: 'SET_SEARCH_QUERY',
        searchQuery: e.target.value
      })
    })
  }

  // returns a feature
  geocoder.on('result', e => {
    // console.log('result', e)
    const { result } = e
    const features = { features: [result] }
    // console.log('features', features)
    updateLocation(
      features,
      result.center,
      setNewLocation,
      map,
      mapState,
      mapDispatch
    )
  })
}

export const addMapEventListeners = (
  map,
  setZoom,
  mapState,
  mapDispatch,
  setNewLocation,
  geocoder
) => {
  const { allowMultiple } = mapState

  // // Automatically trigger geolocation when the map loads
  // map.current.on('load', () => {
  //   geocoder.trigger()
  // })

  // onClick a point on the map set a marker
  // find closests features using mapbox api
  map.on('click', async e => {
    const { lng, lat } = e.lngLat
    fetchMapboxGeocoding(lng, lat)
      .then(data => {
        // console.log('Geocoding data:', data)
        updateLocation(
          data,
          [lng, lat],
          setNewLocation,
          map,
          mapState,
          mapDispatch
        )
      })
      .catch(error => {
        console.error('Error:', error)
        // Handle errors here
      })
  })

  // update the position the user has the map on
  map.on('move', () => {
    setZoom(map.getZoom().toFixed(2))
    mapDispatch({
      type: 'SET_POSITION',
      position: {
        lat: map.getCenter().lat,
        lng: map.getCenter().lng
      }
    })
  })
}

export const updateLocation = (
  data,
  coordinates,
  setNewLocation,
  map,
  mapState,
  mapDispatch
) => {
  const { features } = data
  const { locations, allowMultiple } = mapState
  const newLocation = {
    features: features,
    position: {
      lat: coordinates[1],
      lng: coordinates[0]
    },
    currentLocation: 0 // Assuming currentLocation is set to 0 for new locations
  }
  setNewLocation(newLocation)
}
export const addMarker = (map, coordinates, feature, mapState, mapDispatch) => {
  const { markers } = mapState
  // console.log('coordinates', coordinates)
  // console.log('map feature', feature)
  const poiTitle =
    feature.context.filter(info => info?.id?.includes('poi') && info)[0]
      ?.text ?? null
  // Create new marker with its Popup
  const marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${feature.properties.title || 'Location:'}</h3>
        ${poiTitle ? `<p>${poiTitle}</p>` : ''}
        <p>${feature.place_name}</p>`
      )
    )
    .addTo(map)

  mapDispatch({
    type: 'SET_MARKERS',
    markers: [...markers, marker]
  })
  // Add a class to the marker element for custom styling
  const markerElement = marker.getElement()
  markerElement.classList.add('marker')

  // Add custom attributes to the marker for identification
  markerElement.setAttribute('data-lng', coordinates[0])
  markerElement.setAttribute('data-lat', coordinates[1])

  // Add a click event listener to stop propagation and show the popup
  markerElement.addEventListener('click', e => {
    e.stopPropagation() // Prevent map click event
    marker.togglePopup() // Toggle the popup
  })

  // Add a mouseenter event listener to change the cursor to a pointer
  markerElement.addEventListener('mouseenter', () => {
    map.getCanvas().style.cursor = 'pointer'
  })

  // Add a mouseleave event listener to reset the cursor
  markerElement.addEventListener('mouseleave', () => {
    map.getCanvas().style.cursor = ''
  })

  return marker
}
/**
 * Adds markers to a map for a list of locations. Handles both cases where locations already have features or need to be geocoded.
 * Uses async functions to handle asynchronous operations like fetching geocoding data.
 *
 * @param {object} map - The map object where markers will be added.
 * @param {array} locations - An array of location objects containing position and features information.
 */
export const addExistingLocations = async (map, mapState, mapDispatch) => {
  const { locations } = mapState
  try {
    // Map through each location and handle marker addition
    await Promise.all(
      locations?.map(async location => {
        const { position, features } = location
        const data = !features
          ? await fetchMapboxGeocoding(position.lng, position.lat)
          : { features }
        addMarker(
          map,
          [position.lng, position.lat],
          data.features[0] ?? {},
          mapState,
          mapDispatch
        )
      })
    )
  } catch (error) {
    // Handle any errors that occur during marker addition or geocoding fetch
    console.error('Error adding existing locations:', error)
    // Consider notifying the user or logging more specific error details
  }
}

// Function to fit bounds to the locations
export const fitBoundsToLocations = (locations, map) => {
  if (locations?.length > 1 && map) {
    const bounds = new mapboxgl.LngLatBounds()
    locations?.forEach(location => {
      const { position } = location
      bounds.extend([position.lng, position.lat])
    })
    map.fitBounds(bounds, { padding: 50 })
  }
}

export async function fetchMapboxGeocoding (lng, lat) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch geocoding data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching Mapbox geocoding data:', error)
    return null
  }
}

export const setGeocoderSearchQuery = (geocoder, searchQuery) => {
  if (searchQuery) {
    const geocoderInput = document.querySelector(
      '.mapboxgl-ctrl-geocoder input'
    )
    if (geocoderInput) {
      geocoderInput.value = searchQuery
      geocoder.query(searchQuery)
    }
  }
}
