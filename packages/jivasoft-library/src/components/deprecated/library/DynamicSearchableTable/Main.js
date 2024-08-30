import React from 'react'
import { initialState, ListsProvider, listsReducer } from './data'
import { SortSearchableTables } from './SortSearchableTables'

export const DynamicSearchableTable = props => {
  return (
    <ListsProvider initialState={initialState} reducer={listsReducer}>
      <SortSearchableTables {...props} />
    </ListsProvider>
  )
}

// DynamicSearchableTable.defaultProps = {
//   filters: true,
//   selection: true,
//   search: true
// }
