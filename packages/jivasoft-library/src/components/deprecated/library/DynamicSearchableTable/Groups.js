import React from 'react'
import { useState } from 'react'
import { VscGroupByRefType } from 'react-icons/vsc'
import { GroupsContainer, StyledHeaderButton, StyledHeaderText } from './styles'
export const Groups = props => {
  const {} = props
  const [showGroups, setShowGroups] = useState(false)

  return (
    <StyledHeaderButton onClick={() => setShowGroups(true)}>
      <VscGroupByRefType size={'20px'} />
      <StyledHeaderText>Groups</StyledHeaderText>
    </StyledHeaderButton>
  )
}
