import React, { useEffect, useState } from 'react'
import { useMap } from './data'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet.fullscreen/Control.FullScreen.css'
import { MapWrapper } from './styles'
import { MapContainer } from 'react-leaflet'
import { MapControls } from './Leaftlet'
import { handleSearch } from './helpers'
import { BasicLocationSearch } from './BasicLocationSearch'
import { Mapbox } from './Mapbox'
import { fetchIpInformation } from '../../../app/helpers/location'

export const MapMain = props => {
  const {} = props
  const [mapState, mapDispatch] = useMap()
  const {
    locations,
    position,
    searchQuery,
    searchResults,
    getLocations,
    allowMultiple,
    getSearchResults,
    currentLocation
  } = mapState

  // useEffect(() => {
  //   console.log('mapState', mapState)
  // }, [mapState])

  const [timeoutId, setTimeoutId] = useState(null)
  const [tryCount, setTryCount] = useState(0)

  const fetchAndSetIpLocation = async mapDispatch => {
    const ipInfo = await fetchIpInformation()
    if (ipInfo) {
      const { ip, location } = ipInfo
      mapDispatch({ type: 'SET_IP', ip })
      mapDispatch({ type: 'SET_IP_LOCATION', location })
    }
  }

  useEffect(() => {
    // Fetch IP and location on mount
    fetchAndSetIpLocation(mapDispatch)
  }, [])

  useEffect(() => {
    // console.log('locations', locations)
    getLocations && getLocations(locations)
  }, [locations])

  useEffect(() => {
    getSearchResults && getSearchResults(searchResults)
  }, [searchResults])

  useEffect(() => {
    // console.log('searchQuery', searchQuery)
    if (
      searchQuery &&
      searchResults?.filter(res => !res.place_id.includes('unselectable'))
        .length < 1
    ) {
      mapDispatch({
        type: 'SET_SEARCH_RESULTS',
        searchResults: [
          {
            display_name: 'Press enter to refresh...',
            place_id: 'unselectable'
          }
        ]
      })
      handleSearch(
        searchQuery,
        currentLocation,
        setTryCount,
        mapDispatch,
        tryCount
      )
    }
    if (!searchQuery) {
      mapDispatch({
        type: 'SET_SEARCH_RESULTS',
        searchResults: [
          { display_name: 'Type to search...', place_id: 'unselectable' }
        ]
      })
    }
  }, [searchQuery])

  useEffect(() => {
    // Clear the timeout when unmounting or when searchResults change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return (
    <div style={{ width: '100%' }}>
      {/* <BasicLocationSearch
        {...props}
        tryCount={tryCount}
        setTryCount={setTryCount}
      /> */}
      <MapWrapper>
        {/* <MapContainer center={position} zoom={5}>
          <MapControls {...props} />
        </MapContainer> */}
        <Mapbox {...props} />
      </MapWrapper>
    </div>
  )
}
