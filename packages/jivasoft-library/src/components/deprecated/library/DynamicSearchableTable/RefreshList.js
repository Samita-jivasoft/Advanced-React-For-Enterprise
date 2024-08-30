import React from 'react'
import { IoMdRefreshCircle } from 'react-icons/io'
import { GroupsContainer, StyledHeaderButton, StyledHeaderText } from './styles'

export const RefreshList = () => {
  return (
    <StyledHeaderButton >
      <IoMdRefreshCircle size={'20px'}/>
      <StyledHeaderText>Refresh List</StyledHeaderText>
    </StyledHeaderButton>
  )
}