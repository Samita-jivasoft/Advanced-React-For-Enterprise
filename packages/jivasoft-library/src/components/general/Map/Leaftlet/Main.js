import React, { useEffect, useRef, useState } from 'react'
import { Marker, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet.fullscreen/Control.FullScreen.css'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import { PicklistSearch } from './PicklistSearch'
import { BottomController } from './BottomController'
import { handleLocation } from '../helpers'
import { enableMapInteractions, locatePosition } from './helpers'
import { useOutsideAlerter } from '../../../../app/helpers/useOutsideAlerter'
import { useMap } from '../data'
import CustomPopup from './CustomPopup'

export const  MapControls = props => {
  const [mapState, mapDispatch] = useMap()
  const { locations, allowMultiple, position, currentLocation, disableMap } =
    mapState
  const searchRef = useRef(null)
  const bottomController = useRef(null)
  const onClickOutside = () => {
    // console.log('clicked outside searchRef')
    mapDispatch({
      type: 'SET_DISABLE_MAP',
      disable: false
    })
    enableMapInteractions(map)
  }
  useOutsideAlerter([searchRef, bottomController], onClickOutside)

  const handleLocationSelection = async e => {
    // console.log('here?? ', e)
    const { lat, lng } = e.latlng
    const position = { lat, lng }
    // console.log('e', e, map, e.type === 'locationfound' ? 15 : map.getZoom())
    const zoom = e.type === 'locationfound' ? 15 : map.getZoom()
    // console.log(locations)
    if (locations.length === 0) {
      // console.log('zoom', zoom, e.latlng)
      map.flyTo(e.latlng, zoom)
      mapDispatch({
        type: 'SET_POSITION',
        position: e.latlng
      })
    }

    await handleLocation(
      position,
      e,
      map,
      locations,
      mapDispatch,
      allowMultiple
    )
  }

  const map = useMapEvents({
    locationfound: handleLocationSelection,
    // mouseout: e => {
    //   console.log(e)
    // },
    click: e => {
      // console.log('mapclicked', disableMap, e)
      if (!disableMap) {
        handleLocationSelection(e)
      }
    },
    dragend: e => {
      mapDispatch({
        type: 'SET_POSITION',
        position: e.target.getCenter()
      })
    }
  })
  useEffect(() => {
    // console.log('here in map')
    if (locations.length === 0) {
      map.locate()
    } else {
      locatePosition(map, mapDispatch, locations[0])
    }
  }, [map, locations])

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <PicklistSearch {...props} map={map} searchRef={searchRef} /> */}
      <FullscreenControl position='topright' />
      <BottomController map={map} bottomController={bottomController} />
      {locations?.map(marker => (
        <Marker key={marker?.key} position={marker?.position} draggable>
          <CustomPopup marker={marker} currentLocation={currentLocation} />
        </Marker>
      ))}
    </>
  )
}
