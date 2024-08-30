import React, { useEffect } from 'react'
import {
  StyledHeaderButton,
  StyledHeaderText,
  StyledIconWrapper
} from '../styles'
import { FaSearch } from 'react-icons/fa'
import { useList } from '../data'
import { useLists } from '../data'
import { useViewport } from 'app/data'

export const SearchButton = props => {
  const { tableRef } = props
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()

  const initSearch = () => {
    tableRef?.current?.scrollToRow(0, 'start')
    listDispatch({
      type: 'SET_SEARCH',
      searchColumns:
        listsState && listsState.columns && listsState.columns.length > 0
          ? [listsState.columns[0].crudcolumnid.toLowerCase()]
          : [],
      searchInput: '',
      searchingState: 1
    })
  }

  return (
    <StyledHeaderButton onClick={() => listState.crudlistitems && initSearch()}>
      <StyledIconWrapper>
        <FaSearch size={'15px'} />
        {listState.tablewidth > 750 && (
          <StyledHeaderText>Search</StyledHeaderText>
        )}
      </StyledIconWrapper>
    </StyledHeaderButton>
  )
}
