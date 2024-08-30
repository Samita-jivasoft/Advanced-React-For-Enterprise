import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { StyledBottomController, StyledControllerButton } from './styles'
import { useMap } from '../data'
import { disableMapInteractions, locatePosition } from './helpers'
import {
  MdLocationOff,
  MdLocationOn,
  MdLocationSearching,
  MdMyLocation
} from 'react-icons/md'

export const BottomController = props => {
  const { map, bottomController } = props
  const [mapState, mapDispatch] = useMap()
  const { locations, currentLocation, position } = mapState

  return (
    <StyledBottomController
      ref={bottomController}
      onMouseEnter={() => {
        disableMapInteractions(map)
        mapDispatch({
          type: 'SET_DISABLE_MAP',
          disable: true
        })
      }}
      onClick={() => {
        mapDispatch({
          type: 'SET_DISABLE_MAP',
          disable: true
        })
      }}
    >
      <StyledControllerButton
        style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }}
        onClick={e => {
          locatePosition(map, mapDispatch, currentLocation)
        }}
      >
        {((currentLocation && currentLocation?.position != null) ||
          (position && position != null)) &&
        currentLocation?.position?.lat == position?.lat &&
        currentLocation?.position?.lng == position?.lng ? (
          <MdMyLocation style={{ color: 'blue' }} />
        ) : (
          <MdLocationSearching />
        )}
      </StyledControllerButton>
      <StyledControllerButton>
        {locations.length > 0 ? (
          <MdLocationOff
            onClick={() => {
              mapDispatch({
                type: 'SET_LOCATIONS',
                locations: []
              })
              locatePosition(map, mapDispatch, currentLocation)
            }}
          />
        ) : (
          <MdLocationOn
            onClick={() => {
              // console.log(locations.filter(loc => loc.currentlocation == 1))
              if (currentLocation) {
                mapDispatch({
                  type: 'SET_LOCATIONS',
                  locations: [currentLocation]
                })
              }
              locatePosition(map, mapDispatch, currentLocation)
            }}
          />
        )}
      </StyledControllerButton>
    </StyledBottomController>
  )
}
