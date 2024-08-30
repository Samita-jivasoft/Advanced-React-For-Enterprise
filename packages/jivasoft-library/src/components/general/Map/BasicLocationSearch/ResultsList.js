import React from 'react'
import { generateUUID } from 'app/helpers'
import { useMap } from '../data'
import { StyledList } from './styles'
import { handleResultClick } from '../helpers'

export const ResultsList = props => {
  const [mapState, mapDispatch] = useMap()
  const { searchResults, searchQuery, allowMultiple, locations } = mapState

  return (
    <div
      style={{
        // border: '1px solid red',
        padding: '10px'
      }}
    >
      {searchResults.length > 0 && searchQuery != ''
        ? searchResults.map(result => (
            <StyledList
              key={result.place_id + generateUUID()}
              onMouseOver={e => console.log('result', result)}
              onClick={e => {
                console.log('here', e)
                e.preventDefault()
                e.stopPropagation()
                console.log('onClick result', result)
                // handleResultClick(result, locations, mapDispatch, allowMultiple)
              }}
            >
              {result?.display_name}
              {result?.distance}
            </StyledList>
          ))
        : 'Searching...'}
    </div>
  )
}
