import React from 'react'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { FaSearch } from 'react-icons/fa'
import { generateUUID } from 'app/helpers'
import {
  formatLocationDisplayString,
  getAddressString,
  handleSearch
} from '../helpers'
import { useMap } from '../data'
import { ResultsList } from './ResultsList'

// This is for backups useful code incase any of these services are down
export const BasicLocationSearch = props => {
  const { tryCount, setTryCount } = props
  const [mapState, mapDispatch] = useMap()
  const {
    locations,
    searchQuery,
    currentLocation,
    allowMultiple,
    placeholder
  } = mapState

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <input
          type='text'
          placeholder={placeholder}
          value={searchQuery}
          onChange={e =>
            mapDispatch({
              type: 'SET_SEARCH_QUERY',
              searchQuery: e.target.value
            })
          }
        />
        <DynamicButtonV2
          // text={'Search'}
          type={'chip'}
          onClick={() =>
            handleSearch(
              searchQuery,
              currentLocation,
              setTryCount,
              mapDispatch,
              tryCount
            )
          }
          icon={<FaSearch />}
        />
      </div>
      {searchQuery && <ResultsList />}
      {currentLocation?.place_id && (
        <>
          Current Location:
          <div
            key={currentLocation?.place_id + generateUUID()}
            style={{ marginLeft: '8px' }}
          >
            {getAddressString(currentLocation)?.string}
          </div>
        </>
      )}
      {formatLocationDisplayString(locations, allowMultiple)}
      {locations?.map(
        location =>
          location?.currentlocation != 1 && (
            <div
              key={location.name + generateUUID()}
              style={{ marginLeft: '8px' }}
            >
              {getAddressString(location)?.string}
            </div>
          )
      )}
      {locations?.length > 1 && <div>Get Directions</div>}
    </div>
  )
}
