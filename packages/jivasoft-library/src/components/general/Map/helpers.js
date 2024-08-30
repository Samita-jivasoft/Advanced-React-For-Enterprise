import { generateUUID } from 'app/helpers'

export const setInitialProps = ({
  searchResults = [{ display_name: 'Type to search', place_id: 'initial' }],
  position = {
    lat: 39.8283,
    lng: -98.5795
  },
  currentLocation = null,
  disableMap = true,
  locations = [],
  markers = [],
  searchQuery = '',
  ...props
}) => ({
  ...props,
  searchResults,
  position,
  currentLocation,
  disableMap,
  locations,
  searchQuery,
  markers
})

export const handleSearch = async (
  searchQuery,
  currentLocation,
  setTryCount,
  mapDispatch,
  tryCount
) => {
  // console.log('searching...', currentLocation)
  if (currentLocation != null && currentLocation?.place_id) {
    try {
      const boundedValue = 20 + tryCount
      const response = await fetchReverseGeocoding(
        searchQuery,
        currentLocation,
        boundedValue,
        false
      )

      if (
        response?.length === 0 &&
        searchQuery &&
        response.title !== '500 Internal Server Error'
      ) {
        setTryCount(tryCount + 1)
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [
            {
              display_name: 'Searching... ',
              place_id: 'unselectable'
            }
          ]
        })
        return
      }

      setTryCount(0)
      const selectedLocation = {
        latitude: currentLocation.position.lat,
        longitude: currentLocation.position.lng
      }

      const resultsWithDistance = response?.map(result => {
        const calculatedDistance = calculateDistance(selectedLocation, {
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon)
        })

        return {
          ...result,
          calculated_distance: calculatedDistance,
          distance:
            ' ( Distance: ' +
            parseFloat(calculatedDistance.toFixed(1)) +
            ' miles )',
          display_name: result.display_name,
          place_id: result.place_id.toString()
        }
      })

      const sortedResults = resultsWithDistance.sort(
        (a, b) => a.calculated_distance - b.calculated_distance
      )

      if (!searchQuery) {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [
            { display_name: 'Type to search...', place_id: 'unselectable' }
          ]
        })
      } else if (sortedResults.length > 0) {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: sortedResults
        })
      } else {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [
            { display_name: 'Searching...', place_id: 'unselectable' }
          ]
        })
      }
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }
}

export const handleResultClick = async (
  result,
  locations,
  mapDispatch,
  allowmultiple
) => {
  console.log('handleResultClick', result)
  const position = {
    lat: result.lat,
    lng: result.lon
  }

  await handleLocation(
    position,
    result,
    null,
    locations,
    mapDispatch,
    allowmultiple
  )
}

export const handleLocation = async (
  position,
  e,
  map,
  locations,
  mapDispatch,
  allowmultiple
) => {
  // console.log(e.latlng.lat)
  let newLocation = {
    key: 'location-' + generateUUID(),
    zoom: e.type === 'locationfound' ? 15 : map ? map.getZoom() : 15,
    position: position,
    name: e?.display_name?.split(/[0-9]/)[0]?.trim().replace(/,/g, '') || '',
    currentlocation: e.type === 'locationfound' ? 1 : 0
  }
  // console.log('newLocation', newLocation)

  const isLocationAlreadySaved = locations.some(
    marker =>
      marker.position.lat === position.lat &&
      marker.position.lng === position.lng
  )

  if (!isLocationAlreadySaved || newLocation.currentlocation === 1) {
    try {
      // const data = await fetchReverseGeocoding(position)
      const data = await fetchReverseGeocoding('', newLocation, 10, true)
      const address = getAddressFromData(data)
      newLocation = { ...newLocation, ...address }
    } catch (error) {
      console.error('Error fetching location:', error)
    }

    // Call the function to handle adding the new location
    handleNewLocation(locations, newLocation, mapDispatch, allowmultiple)
  }
}

export const handleNewLocation = (
  locations,
  newLocation,
  mapDispatch,
  allowmultiple
) => {
  // console.log('handleOnClick', newLocation)
  if (newLocation?.currentLocation === 1) {
    mapDispatch({
      type: 'SET_CURRENT_LOCATION',
      currentLocation: newLocation
    })
  } else {
    // console.log('newLocation', newLocation)
    if (!allowmultiple) {
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: [newLocation]
      })
    } else {
      // If allowmultiple is true, just prepend the new location to the existing locations
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: [newLocation, ...locations]
      })
    }
  }
}

export const fetchReverseGeocoding = async (
  searchQuery,
  location,
  boundedValue,
  initial
) => {
  console.log(searchQuery, location, boundedValue, initial)
  const {
    city = '',
    state = '',
    position = {
      lat: '',
      lng: ''
    }
  } = location
  // console.log('location', location)
  const formattedSearchQuery = searchQuery.trim().replace(/\s+/g, '+')
  let formattedCity = ''
  let formattedState = ''

  if (boundedValue <= 25) {
    formattedCity = city.trim().replace(/\s+/g, '+')
    formattedState = state.trim().replace(/\s+/g, '+')
  }

  const formattedQuery = [formattedSearchQuery, formattedCity, formattedState]
    .filter(Boolean)
    .join(',')

  let url = ''
  if (initial) {
    url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}&bounded=${boundedValue}`
  } else {
    url = `https://nominatim.openstreetmap.org/search?format=json&q=${formattedQuery}&bounded=${boundedValue}`
  }
  // console.log('url', url)
  try {
    const response = await fetch(url)
    // console.log('response', response)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching reverse geocoding:', error)
    return null // or handle the error as needed
  }
}

export const getAddressFromData = data => {
  // console.log('data', data)
  const { place_id = '' } = data
  const {
    house_number = '',
    road = '',
    city = '',
    state = '',
    postcode = '',
    county = '',
    country = ''
  } = data.address || {}

  return {
    housenumber: house_number,
    road,
    city,
    state,
    postcode,
    county,
    country,
    place_id
  }
}
export const getAddressString = marker => {
  // Construct the address string based on marker properties
  const addressArray = [
    marker?.name,
    `${marker?.housenumber} ${marker?.road}`,
    `${marker?.city}, ${marker?.state}, ${marker?.postcode}`,
    `${marker?.county}, ${marker?.country}`
  ]

  // Remove empty elements and join the address components
  const formattedAddress = addressArray.filter(Boolean).join(', ')
  // console.log(formattedAddress)

  return {
    string: formattedAddress,
    encoded: encodeURIComponent(formattedAddress)
  }
}

// Function to get the user's current location
export function getUserLocation (callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        const userLocation = `${latitude},${longitude}`
        // Use the userLocation as needed, e.g., set it in state or call another function
        // console.log('User Location:', userLocation);
        callback(null, userLocation)
      },
      error => {
        console.error('Error getting user location:', error.message)
        callback(error, null)
      }
    )
  } else {
    console.error('Geolocation is not supported by this browser.')
    callback(new Error('Geolocation is not supported'), null)
  }
}
export const getGoogleMapsLink = (marker, currentlocation) => {
  // Construct the Google Maps link for directions
  // console.log(marker, currentlocation)
  const addressString = getAddressString(marker).string
  const encodedAddress = encodeURIComponent(addressString)
  // console.log('addressString', addressString)

  const currentLocationString = getAddressString(currentlocation).string
  const encodedCurrentAddress = encodeURIComponent(currentLocationString)

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodedCurrentAddress}&destination=${encodedAddress}`
  // console.log('Google Maps Link:', googleMapsLink)
  return googleMapsLink
}

// Function to calculate distance between two sets of coordinates
export const calculateDistance = (coord1, coord2) => {
  // console.log(coord1, coord2)
  const R = 3959 // Earth radius in miles
  const φ1 = (coord1.latitude * Math.PI) / 180 // φ, λ in radians
  const φ2 = (coord2.latitude * Math.PI) / 180
  const Δφ = ((coord2.latitude - coord1.latitude) * Math.PI) / 180
  const Δλ = ((coord2.longitude - coord1.longitude) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // Distance in miles
}

export function formatLocationDisplayString (locations, allowMultiple) {
  const filteredLocations = locations?.filter(
    location => location?.currentlocation !== 1
  )
  if (filteredLocations.length > 0) {
    return (
      'Location' +
      (allowMultiple && filteredLocations.length > 1 ? 's: ' : ': ')
    )
  } else {
    return ''
  }
}
