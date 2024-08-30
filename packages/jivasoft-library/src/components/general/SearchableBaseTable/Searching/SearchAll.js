import React from 'react'
import { useList } from '../data'

export const SearchAll = props => {
  const [listState, listDispatch] = useList()
  return (
    listState.searching === 1 && (
      <div style={{ display: 'flex', padding: '0px 0px 5px 0px' }}>
        <input
          type='checkbox'
          style={{ cursor: 'pointer' }}
          onChange={e => {
            e.target.checked
              ? listDispatch({
                  type: 'SET_MODIFIED_TABLE',
                  currentFilters: listState.filters,
                  currentSearchColumns: listState.columns.map(col =>
                    col.crudcolumnid.toLowerCase()
                  ),
                  currentSearchInput: listState.searchinput,
                  currentSearchingState: listState.searching
                })
              : listDispatch({
                  type: 'SET_MODIFIED_TABLE',
                  currentFilters: listState.filters,
                  currentSearchColumns: [],
                  currentSearchInput: listState.searchinput,
                  currentSearchingState: listState.searching
                })
          }}
        />
        <div>Search All Columns</div>
      </div>
    )
  )
}
