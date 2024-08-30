import React from 'react'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { FaSearch } from 'react-icons/fa'

export const SearchButton = props => {
  const { list, firstColumn, setOpenSearch, setSearchColumn } = props

  const initSearch = () => {
    setOpenSearch(true)
    setSearchColumn([firstColumn])
  }

  return (
    <StyledHeaderButton onClick={() => initSearch()}>
      <FaSearch size={'15px'} />
      <StyledHeaderText>Search</StyledHeaderText>
    </StyledHeaderButton>
  )
}