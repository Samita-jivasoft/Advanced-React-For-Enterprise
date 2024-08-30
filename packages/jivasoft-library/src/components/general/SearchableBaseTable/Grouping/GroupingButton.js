import React from 'react'
import { useState } from 'react'
import { VscGroupByRefType } from 'react-icons/vsc'
import { StyledHeaderButton, StyledHeaderText, StyledIconWrapper } from '../styles'
import { useViewport } from 'app/data'
import { useList } from '../data'

export const GroupingButton = props => {
  const {} = props
  const [listState, listDispatch] = useList()

  return (
    <StyledHeaderButton
      padding={'0px 0px 0px 15px'}
      onClick={() =>
        listDispatch({
          type: 'SET_SHOW_GROUPS',
          currentShowGroups: !listState.grouping.showgroups
        })
      }
    >
      <StyledIconWrapper>
      <VscGroupByRefType size={'20px'} />
      {listState.tablewidth > 750 && (
        <StyledHeaderText>Groups</StyledHeaderText>
      )}
      </StyledIconWrapper>
    </StyledHeaderButton>
  )
}
