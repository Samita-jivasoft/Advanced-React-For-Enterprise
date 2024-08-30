import React from 'react'
import { useList } from '../../../data'
import { StyledHeaderButton, StyledHeaderText, StyledIconWrapper } from '../../../styles'
import { FaCog } from 'react-icons/fa'
import { TableSettingsModal } from './TableSettingsModal'
export const TableSettingsButton = props => {
  const { tableRef } = props
  const [listState, listDispatch] = useList()

  return (
    <StyledHeaderButton
      padding={'0px 0px 0px 10px'}
      onClick={() => {
        listDispatch({
          type: 'SET_SHOW_TABLE_SETTINGS',
          currentTableSettings: 1
        })
      }}
    >
      <StyledIconWrapper>
      <FaCog size={'17px'} />
      {listState.tablewidth > 750 && (
        <StyledHeaderText>Table Settings</StyledHeaderText>
      )}
       </StyledIconWrapper>
      <TableSettingsModal tableRef={tableRef} />
     
    </StyledHeaderButton>
  )
}
