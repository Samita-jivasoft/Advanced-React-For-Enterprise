import React, { useEffect, useState } from 'react'
import { useList } from '../../data'

export const SelectionCellColumn = props => {
  const { rowData, rowIndex, column } = props
  const [listState, listDispatch] = useList()

  const handleChange = e => {
    listDispatch({
      type: 'SET_MODIFIEDTABLE_SELECTED',
      selectedItemRowKey: rowData.rowKey,
      selectedInput: e.target.checked,
      selectedIndex: rowIndex
    })
  }

  return (
    <input
      id={rowData.rowKey + '_selection'}
      key={'checkbox'}
      type={'checkbox'}
      checked={rowData._selected}
      style={{ cursor: 'pointer' }}
      onChange={e => handleChange(e)}
      onClick={e => e.stopPropagation()}
    />
  )
}
