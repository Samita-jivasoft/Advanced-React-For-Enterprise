import React from 'react'
import { IoMdRefreshCircle } from 'react-icons/io'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { useViewport } from 'app/data'
import { useList } from '../data'

export const RefreshListButton = () => {
  const [listState] = useList()

  return (
    <StyledHeaderButton
      padding={'0px 0px 0px 10px'}
      onClick={listState.refresh}
    >
      <IoMdRefreshCircle size={'20px'} />
      {listState.tablewidth > 750 && (
        <StyledHeaderText>Refresh List</StyledHeaderText>
      )}
    </StyledHeaderButton>
  )
}
