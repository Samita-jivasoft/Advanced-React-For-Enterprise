import React, { useState } from 'react'
import { MdDragIndicator } from 'react-icons/md'
import { useAppTheme } from 'app/data'
import { DraggableColumnStyled, GlobalStyle } from './styles'
import { useList } from '../../data'
import { HandleSelectedSearchColumns } from '../helpers'

export const DraggableColumn = props => {
  const { column } = props
  // console.log('column', column)
  // console.log('container', container)

  const [listState, listDispatch] = useList()
  const [themeState] = useAppTheme()
  const [activeColumn, setActiveColumn] = useState('')

  const handleDragStart = e => {
    const { id } = e.target
    const idx = listState.columns
      .map(i => listState.crudlistid + i.crudcolumnid.toLowerCase())
      .indexOf(id)
    // console.log('starting index', idx, column)
    e.target.classList.add('dragging')
    e.dataTransfer.setData('colIdx', idx)
    e.dataTransfer.setData('column', column.key)
  }
  const handleOnDragEnd = e => {
    e.target.classList.remove('dragging')
  }
  const handleDragOver = e => {
    e.preventDefault()
  }
  const handleDragEnter = e => {
    const { id } = e.target
    // TODO: place ghost column here
    if (e.target.classList.contains('dropzone')) {
      e.target.classList.add('dragover')
    }
    if (e.target.classList.contains('grouping_dropzone')) {
      console.log('here')
    }
  }
  const handleOnDragLeave = e => {
    if (e.target.classList.contains('dropzone')) {
      e.target.classList.remove('dragover')
    }
  }
  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0])
    return this
  }
  const handleOnDrop = e => {
    if (e.target.id) {
      if (e.target.classList.contains('dropzone')) {
        e.target.classList.remove('dragover')
      }
      // console.log('good')
      const { id } = e.target
      // console.log('move left of', id)
      const droppedColIdx = listState.columns
        .map(i => listState.crudlistid + i.crudcolumnid.toLowerCase())
        .indexOf(id)
      // console.log('dropped at', droppedColIdx)
      const draggedColIdx = e.dataTransfer.getData('colIdx')
      draggedColIdx > droppedColIdx
        ? listDispatch({
            type: 'SET_COLUMNS',
            columns: listState.columns.move(draggedColIdx, droppedColIdx)
          })
        : listDispatch({
            type: 'SET_COLUMNS',
            columns: listState.columns.move(draggedColIdx, droppedColIdx - 1)
          })

      const groupIndex = e.dataTransfer.getData('groupIdx')
      if (e.dataTransfer.getData('remove')) {
        const newlist = [...listState.grouping.groups]
        newlist.splice(groupIndex, 1)
        listDispatch({
          type: 'SET_GROUPS',
          currentGroups: newlist
        })
      }
    }
  }

  return (
    <DraggableColumnStyled
      id={listState.crudlistid + column.key.toLowerCase()}
      className='dropzone'
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      onDragEnter={handleDragEnter}
      onDragEnd={handleOnDragEnd}
      onClick={e => {
        e.stopPropagation()
        listState.searching &&
          HandleSelectedSearchColumns(
            column.key.toLowerCase(),
            listState,
            listDispatch
          )
      }}
    >
      {column.title}
      <MdDragIndicator
        style={{
          cursor: 'grab',
          textSize: parseInt(listState?.textsize?.split('px')[0]) + 5 + 'px',
          overflow: 'visible'
        }}
      />
    </DraggableColumnStyled>
  )
}
