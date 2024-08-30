import React from 'react'
import { useList } from '../data'
import {
  StyledHeaderButton,
  StyledHeaderText,
  StyledIconWrapper
} from '../styles'
import { FaFilter } from 'react-icons/fa'
import { FilterModal } from './FilterModal'
export const FilterButton = props => {
  const [listState, listDispatch] = useList()

  return (
    <StyledHeaderButton
      onClick={() => {
        listDispatch({
          type: 'SET_SHOW_FILTERS_MODAL',
          currentFiltersModal: 1
        })
      }}
    >
      <StyledIconWrapper>
        <FaFilter size={'15px'} />
        {listState.tablewidth > 750 && (
          <StyledHeaderText>Filters</StyledHeaderText>
        )}
      </StyledIconWrapper>
      <FilterModal />
    </StyledHeaderButton>
  )
}
