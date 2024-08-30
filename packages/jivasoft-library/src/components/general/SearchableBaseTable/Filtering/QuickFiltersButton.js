import React from 'react'
import { useViewport } from 'app/data'
import { useList } from '../data'
import { FaFilter } from 'react-icons/fa'
import { StyledHeaderButton, StyledHeaderText } from '../styles'

export const QuickFiltersButton = props => {
  const { setQuickFilters } = props
  const { viewWidth, viewHeight } = useViewport()
  const [listState] = useList()

  return (
    <StyledHeaderButton onClick={() => setQuickFilters(true)}>
      <FaFilter size={'15px'} />
      {listState.tablewidth > 750 && (
        <StyledHeaderText>Quick Filters</StyledHeaderText>
      )}
    </StyledHeaderButton>
  )
}
