import React, { useEffect, useState } from 'react'
import { useElement } from '../../data/ElementContext'
import { Map } from '../../../Map'
import { formatLocationForDisplay, getValue } from './helpers'

export const ElementTypeMap = ({}) => {
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    isEdit,
    masktype,
    value,
    defaultvalue,
    allowmultiplepicklistselections
  } = elementState
  // useEffect(() => {
  //   console.log('elementState', elementState, defaultvalue)
  // }, [elementState])

  const [locations, setLocations] = useState(
    elementState.locations
      ? elementState.locations
      : value
      ? value
      : defaultvalue
      ? defaultvalue
      : []
  )
  // console.log('locations', locations)
  const [searchQuery, setSearchQuery] = useState(
    defaultvalue ? defaultvalue : ''
  )
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (typeof locations == 'object' && locations.length > 0) {
      elementDispatch({
        type: 'SET_VALUE',
        value: allowmultiplepicklistselections
          ? locations?.map(
              location => formatLocationForDisplay(location, masktype)?.value
            )
          : formatLocationForDisplay(locations[0], masktype)?.value
      })
    }
    elementDispatch({
      type: 'SET_VALUES',
      values: { locations: locations }
    })
  }, [locations])

  return isEdit ? (
    <div
      style={{
        // border: '1px solid red',
        width: '100%'
      }}
    >
      <Map
        locations={locations}
        getLocations={locations => setLocations(locations)}
        allowMultiple={allowmultiplepicklistselections}
        searchQuery={searchQuery}
        getSearchResults={searchResults => setSearchResults(searchResults)}
      />
    </div>
  ) : (
    <div style={{ width: '100%' }}>
      {
        locations && locations.length > 0
          ? typeof locations === 'string'
            ? locations
            : locations?.map((location, index) => (
                <div
                  key={location.key ?? index}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {formatLocationForDisplay(location, masktype)?.display}
                </div>
              ))
          : 'No Selections' // Render 'No Selections' if locations is an empty array
      }
    </div>
  )
}
