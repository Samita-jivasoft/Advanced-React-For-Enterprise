// src/Map.js
import React, { useRef, useEffect, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { useMap } from '../data'
import { handleNewLocation } from '../helpers'
import {
  addExistingLocations,
  addGeocoderControls,
  addMapEventListeners,
  addMarker,
  fitBoundsToLocations,
  initializeMap,
  setGeocoderSearchQuery,
  useGeolocation
} from './helpers'
import { MapboxContainer } from './styles'
import { RemoveMarkersControl } from './RemoveMarkersControl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useAccessToken } from '../../../../app/data/context/AccessTokenContext'

export const Mapbox = props => {
  const { mapboxAccessToken } = useAccessToken()
  const [mapState, mapDispatch] = useMap()
  const {
    position,
    locations,
    allowMultiple,
    placeholder,
    searchQuery,
    setSearchQuery,
    markers
  } = mapState
  // useEffect(() => {
  //   console.log('mapState', mapState)
  // }, [mapState])
  // useEffect(() => {
  //   console.log('locations', locations)
  // }, [locations])
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [zoom, setZoom] = useState(4) // Zoom level to show the entire country
  const [locationFetched, setLocationFetched] = useState(false)
  const [newLocation, setNewLocation] = useState({})
  useEffect(() => {
    // console.log('newLocation??')
    const { position, features } = newLocation
    if (position) {
      const markerExists = markers.some(
        marker =>
          marker._lngLat.lng === position.lng &&
          marker._lngLat.lat === position.lat
      )

      if (!markerExists) {
        handleNewLocation(locations, newLocation, mapDispatch, allowMultiple)

        // If allowMultiple is false, remove all existing markers before adding the new one
        if (!allowMultiple) {
          markers.forEach(marker => marker.remove())
          mapDispatch({ type: 'SET_MARKERS', markers: [] })
        }

        // Add the new marker
        addMarker(map.current, position, features[0], mapState, mapDispatch)
      }
    }
  }, [newLocation])

  const [removeMarkers, setRemoveMarkers] = useState(false)
  useEffect(() => {
    // console.log('remove clicked', markers, locations)
    if (removeMarkers) {
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: []
      })
      markers.forEach(marker => {
        marker.remove()
      })
      mapDispatch({ type: 'SET_MARKERS', markers: [] })
      setRemoveMarkers(false)
    }
  }, [removeMarkers])

  useEffect(() => {
    // console.log('locations updated??', markers, locations)
    // console.log('markers', markers)
    if (map.current) {
      const control = map.current._controls.find(
        ctrl => ctrl instanceof RemoveMarkersControl
      )
      if (control) {
        control.update(locations.length > 0)
      }
    }
  }, [locations])

  useGeolocation(mapState, mapDispatch, setZoom, setLocationFetched)

  useEffect(() => {
    if (!mapboxAccessToken) {
      console.error('Mapbox access token is required')
      return
    }
    mapboxgl.accessToken = mapboxAccessToken

    if (!map.current && locationFetched) {
      // Initialize the map
      map.current = initializeMap(mapContainer, position, zoom)
      // Add basic controls to the map
      map.current.addControl(new mapboxgl.FullscreenControl())
      map.current.addControl(new mapboxgl.NavigationControl())
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        }),
        'bottom-right'
      )
      // Add custom remove markers control
      const removeMarkersControl = new RemoveMarkersControl(() => {
        setRemoveMarkers(true)
      }, locations.length > 0)
      // Add custom remove markers control
      map.current.addControl(removeMarkersControl, 'bottom-right')

      // Initialize geocoder
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        collapsed: true,
        placeholder: placeholder ?? null,
        marker: false,
        types:
          'country,region,place,postcode,locality,neighborhood,address,poi',
        proximity: {
          longitude: position.lng,
          latitude: position.lat
        }
      })
      map.current.addControl(geocoder, 'top-left')
      // Add geocoder controls to the map
      addGeocoderControls(
        map.current,
        mapState,
        mapDispatch,
        setNewLocation,
        geocoder
      )
      // Add event listeners to the map
      addMapEventListeners(
        map.current,
        setZoom,
        mapState,
        mapDispatch,
        setNewLocation,
        geocoder
      )
      // Initialize default locations already saved
      if (typeof locations === 'string') {
        setGeocoderSearchQuery(geocoder, locations)
      } else if (locations?.length > 0) {
        // console.log('doing this?')
        addExistingLocations(map.current, mapState, mapDispatch)
        fitBoundsToLocations(locations, map.current)
      }
    }
  }, [locationFetched, mapState])

  return (
    <MapboxContainer>
      {/* <CenterTracker>
        Longitude: {position.lng.toFixed(4)} | Latitude: {position.lat.toFixed(4)} | Zoom: {zoom}
      </CenterTracker> */}
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </MapboxContainer>
  )
}
