import React from 'react'
import { useAppTheme } from 'app/data'
import { useRef, useState } from 'react'
import { ColumnSorting } from '../Sorting/ColumnSorting'
import { getIdentifier, highlight } from '../HelperFunctions'
import { useLists } from '../data'

export const TableHead = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    list,
    selection,
    openSearch,
    checkAll,
    setCheckAll,
    setSelected,
    selected,
    searchResults,
    searchColumn,
    setSearchColumn,
    allColumns,
    sortInfo,
    setSortInfo,
    tableData,
    setTableData,
    setDragOver,
    cols,
    setCols,
    dragOver
  } = props

  const [listsState, listsDispatch] = useLists()
  const [themeState] = useAppTheme()

  const onCheckAll = () => {
    if (checkAll) {
      setSelected([])
      tableData &&
        tableData.map(
          i =>
            (document.getElementById(
              getIdentifier(i, listsState.idcolumns) + 'input'
            ).checked = false)
        )
      setCheckAll(false)
    } else {
      setCheckAll(true)
      if (openSearch && listsState.searchInput) {
        searchResults.results.map(
          i =>
            !document.getElementById(
              getIdentifier(i, listsState.idcolumns) + 'input'
            ).checked && selected.push(i)
        )
        searchResults.results.map(
          i =>
            (document.getElementById(
              getIdentifier(i, listsState.idcolumns) + 'input'
            ).checked = true)
        )
      } else {
        tableData &&
          tableData.map(
            i =>
              !document.getElementById(
                getIdentifier(i, listsState.idcolumns) + 'input'
              ).checked && selected.push(i)
          )
        tableData &&
          tableData.map(
            i =>
              (document.getElementById(
                getIdentifier(i, listsState.idcolumns) + 'input'
              ).checked = true)
          )
      }
    }
  }

  // as soon as you remove a column, the results should clear
  const handleSelectedColumns = (idcolumn, columnClicked) => {
    // console.log(idcolumn + columnClicked, searchColumn)
    if (searchColumn.includes(columnClicked)) {
      const removeColumn = searchColumn.filter(i => i !== columnClicked)
      // console.log('in head, removing clicked column***', columnClicked)
      // console.log('column remaining***', removeColumn)
      highlight(
        Object.entries(allColumns)
          .map(i =>
            [columnClicked]
              .map(x => (i[0].includes(x) ? i[1] : null))
              .filter(n => n)
          )
          .filter(e => e.length),
        ''
      )
      setSearchColumn(removeColumn)
    } else {
      const addColumn = [...searchColumn, columnClicked]
      setSearchColumn(addColumn)
    }
  }

  const handleDragStart = e => {
    const { id } = e.target
    // console.log('drag start', id)
    const idx = cols
      .map(i => list.crudlistid + i.crudcolumnid.toLowerCase())
      .indexOf(id)
    // console.log('starting index', idx)
    e.dataTransfer.setData('colIdx', idx)
  }
  const handleDragOver = e => {
    e.preventDefault()
  }
  const handleDragEnter = e => {
    const { id } = e.target
    // console.log('id', id)
    setDragOver(id)
  }
  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0])
    return this
  }
  const handleOnDrop = e => {
    if (e.target.id) {
      // console.log('good')
      const { id } = e.target
      // console.log('move left of', id)
      const droppedColIdx = cols
        .map(i => list.crudlistid + i.crudcolumnid.toLowerCase())
        .indexOf(id)
      // console.log('dropped at', droppedColIdx)
      const draggedColIdx = e.dataTransfer.getData('colIdx')
      // console.log('dragged from', draggedColIdx)
      draggedColIdx > droppedColIdx
        ? setCols(cols.move(draggedColIdx, droppedColIdx))
        : setCols(cols.move(draggedColIdx, droppedColIdx - 1))
      setDragOver('')
    }
  }

  return (
    <thead
      id={'table_header_' + list.crudlistid}
      style={{
        // border:'1px solid white',
        width: '100%',
        position: 'sticky',
        top: 0,
        background: themeState.currentTheme.bg0,
        height: '40px',
        zIndex: 1
      }}
    >
      <tr
        style={{
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {selection && tableData && tableData.length > 0 && list.crudcanmoveto && (
          <th
            key={'checkAllInput'}
            style={{
              // border:'1px solid red',
              padding: '0px 10px 0px 10px'
            }}
          >
            <input
              id={'checkAll'}
              type={'checkbox'}
              checked={checkAll}
              style={{ cursor: 'pointer' }}
              onChange={() => onCheckAll()}
            />
          </th>
        )}
        {cols.map(x => {
          return (
            x.iscolumn && (
              <th
                key={list.crudlistid + x.crudcolumnid.toLowerCase()}
                id={list.crudlistid + x.crudcolumnid.toLowerCase()}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                onDragEnter={handleDragEnter}
                style={{
                  // border: '1px solid blue',
                  cursor: openSearch ? 'pointer' : 'grab',
                  whiteSpace: 'nowrap',
                  padding: '0px 20px 0px 5px',
                  borderLeft:
                    list.crudlistid + x.crudcolumnid.toLowerCase() ===
                      dragOver && '2px solid red',
                  background: searchColumn.includes(
                    x.crudcolumnid.toLowerCase()
                  )
                    ? 'yellow'
                    : null,
                  color: searchColumn.includes(x.crudcolumnid.toLowerCase())
                    ? 'black'
                    : null
                  // resize: 'horizontal',
                  // overflow: 'auto',
                  // minWidth: '25px',
                  // maxWidth:'200px',
                  // width: '100px'
                }}
                onClick={e => {
                  // console.log(e.target.style = 'sticky')
                  openSearch &&
                    handleSelectedColumns(
                      list.crudlistid,
                      x.crudcolumnid.toLowerCase()
                    )
                }}
              >
                <span //span maybe for resizing
                  id={'span-' + list.crudlistid + x.crudcolumnid.toLowerCase()}
                  style={{
                    // width: 'fit-content',
                    // border: '1px solid red',
                    // display: 'flex',
                    textAlign: 'start',
                    // userSelect: 'none',
                    // whiteSpace: 'nowrap',
                    // textOverflow: 'ellipsis',
                    // overflow: 'hidden',
                    // display: 'block'
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block'
                  }}
                  onClick={e => {
                    e.preventDefault()
                  }}
                >
                  <ColumnSorting
                    column={x}
                    tableData={tableData}
                    openSearch={openSearch}
                    sortInfo={sortInfo}
                    searchColumn={searchColumn}
                    setSortInfo={setSortInfo}
                    setTableData={setTableData}
                  />
                  {x.label}
                </span>
              </th>
            )
          )
        })}
        {list.crudaction &&
          list.crudaction.map(i => i.peritem).includes(1) &&
          list.crudaction.length > 0 && (
            <th
              id={list.crudaction.crudactionid}
              style={{
                // border: '1px solid blue',
                // width:'fit-content',
                // cursor: 'pointer',
                // whiteSpace: 'nowrap',
                padding: '2px 20px 2px 5px'
                // resize: 'horizontal',
                // overflow: 'auto',
                // minWidth: '25px'
              }}
            ></th>
          )}
        {list.actionlabel && (
          <th
            id={list.actionlabel}
            style={{
              // border: '1px solid purple',
              // width: '80px',
              padding: '0px 10px 0px 10px'
              // minWidth:'25px',
              // resize: 'horizontal',
              // overflow: 'auto'
            }}
          >
            Actions
          </th>
        )}
      </tr>
    </thead>
  )
}
