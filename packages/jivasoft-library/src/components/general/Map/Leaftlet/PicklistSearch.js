import React, { useEffect, useRef, useState } from 'react'
import { Picklist } from '../../Picklist'
import { ErrorBoundary } from '../../ErrorBoundary'
import { BasicLocationSearch } from '../BasicLocationSearch'
import { StyledSearch } from './styles'
import { disableMapInteractions, enableMapInteractions } from './helpers'
import { useMap } from '../data'
import { handleResultClick } from '../helpers'

export const PicklistSearch = props => {
  const { searchRef, map } = props
  const [mapState, mapDispatch] = useMap()
  const { placeholder, searchResults, searchQuery, locations, allowMultiple } =
    mapState

  const handleClickedItem = item => {
    if (Number.isInteger(item.osm_id)) {
      console.log('in validation', item)
      // handleResultClick(item)
      handleResultClick(item, locations, mapDispatch, allowMultiple)
    } else {
      console.log('here', item)
    }
  }

  return (
    <StyledSearch
      ref={searchRef}
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
        disableMapInteractions(map)
      }}
    >
      <ErrorBoundary FallbackComponent={() => <BasicLocationSearch />}>
        <Picklist
          placeholder={placeholder ? placeholder : 'Search for locations'}
          // disable={false}
          items={searchResults}
          searchTerm={searchQuery}
          identifier={'place_id'}
          allowSelections={false}
          searchKeys={['display_name']}
          showFields={['display_name', 'distance']}
          onChange={value => {
            console.log('value', value)
            mapDispatch({
              type: 'SET_SEARCH_QUERY',
              searchQuery: value
            })
          }}
          onClick={handleClickedItem}
          closeOnSelected={true}
        />
      </ErrorBoundary>
    </StyledSearch>
  )
}
