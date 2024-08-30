import React from 'react'
import { HeaderRow, StyledRightSide, StyledRow } from './styles'
import { TableActionButtons, TableActionsRow } from './TableActions'
import { useList, useLists } from '../../data'
import { DynamicSwitcher } from '../../../DynamicSwitcher'

export const Toolbar = props => {
  const { tableRef } = props
  const [listState, listDispatch] = useList()
  const [listsState, listsDispatch] = useLists()
  const { crudlistid, label, filters, search } = listState

  return (
    (label || filters || search) && (
      <HeaderRow id={'header-' + crudlistid}>
        <StyledRow>
          {listsState.layout == 'tabs' &&
          listsState.tolists.length + listsState.fromlists.length > 1 ? null : (
            <div>{label}</div>
          )}
          <StyledRightSide>
            <TableActionButtons tableRef={tableRef} />
          </StyledRightSide>
        </StyledRow>
        <TableActionsRow tableRef={tableRef} />
      </HeaderRow>
    )
  )
}
