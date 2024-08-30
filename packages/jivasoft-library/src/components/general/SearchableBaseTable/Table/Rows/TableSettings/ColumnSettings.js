import React, { useState } from 'react'
import { useList } from '../../../data'
import {
  ColumnRow,
  RowDetails,
  Settings,
  SettingsHeader,
  SortableList
} from './styles'
import { MdDragIndicator } from 'react-icons/md'
import { useAppTheme } from 'app/data'
import { HandleHiddenColumn, HandlePinnedColumn } from '../../helpers'
import { BsFillPinAngleFill } from 'react-icons/bs'

export const ColumnSettings = props => {
  const [listState, listDispatch] = useList()
  const [themeState] = useAppTheme()

  const [draggedIndex, setDraggedIndex] = useState(null)
  const [draggedOverIndex, setDraggedOverIndex] = useState(null)

  const handleDragStart = (e, index) => {
    setDraggedIndex(index)
    e.target.classList.add('dragging')
  }

  const handleDragEnd = (e, index) => {
    e.target.style.opacity = '1'
    e.target.classList.remove('dragging')
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    setDraggedOverIndex(index)
    //TODO: add animation to moving columns
  }

  const handleDrop = (e, targetIndex) => {
    const newColumns = [...listState.columns]
    const [draggedColumn] = newColumns.splice(draggedIndex, 1)
    newColumns.splice(targetIndex, 0, draggedColumn)

    listDispatch({
      type: 'SET_COLUMNS',
      columns: newColumns
    })
    setDraggedOverIndex(null)
  }

  return (
    listState?.columns?.length > 0 && (
      <Settings themeColor={listState.themecolor}>
        <SettingsHeader>Column Settings:</SettingsHeader>
        <SortableList className='sortable-list'>
          {listState?.columns?.length > 0 &&
            listState.columns.map(
              (column, index) =>
                column?.iscolumn === 1 &&
                (column?.crudlistids?.some(
                  id => id.crudlistid === listState.crudlistid
                ) ||
                  !column?.crudlistids ||
                  column?.crudlistids?.length === 0) && (
                  <ColumnRow
                    className='item'
                    key={column.crudcolumnid}
                    themeColor={listState.themecolor}
                    draggable
                    onDragStart={e => handleDragStart(e, index)}
                    onDragEnd={e => handleDragEnd(e, index)}
                    onDragOver={e => handleDragOver(e, index)}
                    onDragEnter={e => e.preventDefault()}
                    onDrop={e => handleDrop(e, index)}
                  >
                    <RowDetails className='details'>
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          alignItems: 'center',
                          paddingRight: '10px'
                        }}
                      >
                        <MdDragIndicator color={themeState.currentTheme.bgb2} />
                        <input
                          type='checkbox'
                          checked={column._hidden == 1 ? 0 : 1}
                          onChange={() =>
                            HandleHiddenColumn(
                              column.crudcolumnid,
                              listState,
                              listDispatch
                            )
                          }
                        />
                        <div style={{ paddingLeft: '4px' }}>{column.label}</div>
                      </div>
                      <BsFillPinAngleFill
                        color={
                          column._pinned
                            ? themeState.currentTheme.successColorBase
                            : themeState.currentTheme.bg0
                        }
                        onClick={() =>
                          HandlePinnedColumn(
                            column.crudcolumnid,
                            listState,
                            listDispatch
                          )
                        }
                      />
                    </RowDetails>
                  </ColumnRow>
                )
            )}
        </SortableList>
      </Settings>
    )
  )
}
