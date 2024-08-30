import React, { useEffect, useMemo, useState } from 'react'
import { LightenDarkenColor } from 'app/helpers'
import { useLists } from '../data'
import { useList } from '../data'
import {
  Empty,
  Loading,
  StyledTable,
  TableContainer,
  AutoResizerWrapper,
  HeaderAndTableContainer
} from './styles'
import { useMenu } from 'app/data'
import { AutoResizer, Column } from 'react-base-table'
import 'react-base-table/styles.css'

import {
  CustomTableCells,
  generateActionButtons,
  getActionsWidth,
  handleRowExpand,
  showCrudActionsColumn,
  showSelection
} from './helpers'
import { SortElement } from '../Sorting'
import { DraggableColumn, SelectionCellColumn } from './Columns'
import { DetailView, RowActions, RowTracker, Toolbar } from './Rows'

export const Table = props => {
  const { tableRef } = props
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()
  const { expandedRowKeys } = listState
  // useEffect(() => {
  //   console.log('listState', listState)
  // }, [listState])
  const [menuState, menuDispatch] = useMenu()

  /* ROW ACTIONS */
  const generateRowClassName = () => {
    return ({ columns, rowData, rowIndex }) => {
      const { status, _searchresult } = rowData
      // console.log(rowData)
      // console.log(listState.label)
      let className = ''
      if (!_searchresult) {
        className += ' row-excluded'
      }

      if (status) {
        switch (status.toLowerCase()) {
          case 'assigned':
            className += ' row-status-assigned'
            break
          case 'pending':
            className += ' row-status-pending'
            break
          case 'drafts':
            className += ' row-status-drafts'
            break
          case 'cut off':
          case 'cutoff':
          case 'cut-off':
          case 'flag':
          case 'flags':
            className += ' row-status-flags'
            break
          case 'incomplete':
            className += ' row-status-incomplete'
            break
          default:
            className += ' row-dark-theme'
            break
        }
      }
      return className
    }
  }

  const rowClassName = useMemo(
    () => generateRowClassName(),
    [listState.searching, listState.crudlistitems]
  )

  const rowRenderer = ({
    isScrolling,
    cells,
    rowData,
    rowIndex,
    columns,
    ...rest
  }) => {
    // if (isScrolling) {
    //   return (
    //     <Loading
    //       paddingLeft={55}
    //     >
    //       Scrolling...
    //     </Loading>
    //   )
    // }
    if (isScrolling && menuState.clicked) {
      menuDispatch({ type: 'SET_MENUOBJECT', clicked: false })
    }
    return cells
  }

  useEffect(() => {
    if (listState?.crudlistitems?.length == 0) {
      const start = 0
      const end = 0
      listDispatch({
        type: 'SET_VIEWABLE_ROWS',
        currentViewableRows: {
          start,
          end
        }
      })
    }
  }, [listState.crudlistitems])

  const onRowsRendered = ({ startIndex, stopIndex }) => {
    const listLength = listState?.crudlistitems?.length
    const start = listLength > 0 ? startIndex + 1 : 0
    const end = listLength > 0 ? stopIndex + 1 : 0
    // console.log(listState.label, start, end)

    listDispatch({
      type: 'SET_VIEWABLE_ROWS',
      currentViewableRows: {
        start,
        end
      }
    })
  }

  const rowEventHandlers = {
    onContextMenu: ({ event, rowData }) => {
      // console.log('rowData', rowData)
      event.preventDefault()
      if (!rowData.children) {
        const concatenatedArray = generateActionButtons(
          rowData,
          listState,
          listsState,
          menuDispatch,
          listDispatch,
          listsDispatch
        )
        // console.log('concatenatedArray', concatenatedArray)
        const menuObject = {
          menuItems: concatenatedArray
        }
        if (concatenatedArray?.length > 0) {
          menuDispatch({
            type: 'SET_MENUOBJECT',
            object: menuObject,
            clicked: true,
            xCoord: event.clientX,
            yCoord: event.clientY
          })
        }
      }
    },
    onClick: ({ rowData, rowIndex, rowKey, event }) => {
      if (typeof event.target.className === 'string') {
        if (event.target.className.includes('openactions')) {
          listDispatch({
            type: 'SET_SHOW_ACTIONS',
            currentShowActions: 1
          })
        }
        if (event.target.className.includes('closeactions')) {
        }
        if (
          event.target &&
          !event.target.className.includes('selection') &&
          !event.target.className.includes('actions') &&
          !rowData.label
        ) {
          listState?.detailview?.active &&
            listDispatch({
              type: 'SET_DETAIL_VIEW',
              detailview: { ...listState.detailview, detail: rowData }
            })
        }
      }
    }
  }

  /* COLUMN ACTIONS */
  const onColumnResize = ({ column, width }) => {
    listDispatch({
      type: 'SET_COLUMNS',
      columns: listState.columns.map(col =>
        col.crudcolumnid.toLowerCase() === column.dataKey
          ? { ...col, _width: width }
          : col
      )
    })
  }

  // Recursive function to sort nodes and their children
  const sortTreeData = (data, sortBy) => {
    const sortNodes = nodes => {
      return nodes
        .sort((a, b) => SortElement(sortBy, a, b))
        .map(node => {
          if (node.children) {
            return {
              ...node,
              children: sortNodes(node.children) // Sort children recursively
            }
          }
          return node
        })
    }

    return sortNodes(data)
  }

  const onColumnSort = sortBy => {
    console.log('sortBy', sortBy)

    let sortedData = []
    if (listState.searching && listState.searchinput !== '') {
      const trueResults = listState.crudlistitems.filter(
        item => item._searchresult === true
      )
      const falseResults = listState.crudlistitems.filter(
        item => item._searchresult === false
      )

      const sortedTrueResults = sortTreeData(trueResults, sortBy)
      const sortedFalseResults = sortTreeData(falseResults, sortBy)

      sortedData = sortedTrueResults.concat(sortedFalseResults)
    } else {
      sortedData = sortTreeData(listState.crudlistitems, sortBy)
    }

    listDispatch({
      type: 'SET_SORT',
      currentSortInfo: sortBy,
      currentTableData: sortedData
    })
  }

  const columnCellRenderer = ({
    cellData,
    columns,
    column,
    columnIndex,
    rowData,
    rowIndex,
    container,
    isScrolling
  }) => (
    <CustomTableCells
      cellData={cellData}
      columns={columns}
      column={column}
      columnIndex={columnIndex}
      rowData={rowData}
      rowIndex={rowIndex}
      container={container}
    />
  )

  /* CELL ACTIONS */
  const [activeColumn, setActiveColumn] = useState('')
  const cellProps = ({ columns, column, columnIndex, rowData, rowIndex }) => ({
    'data-col-idx': columnIndex,
    onMouseEnter: e => {
      if (column.dataKey !== 'actions') {
        // console.log(columnIndex, column)
        // const table = tableRef.current.getDOMNode()
        // table.classList.add(`active-col-${columnIndex}`)
        // setActiveColumn(columnIndex)
        setActiveColumn(column.key)
      }
    },
    onMouseLeave: e => {
      // const table = tableRef.current.getDOMNode()
      // table.classList.remove(`active-col-${columnIndex}`)
      setActiveColumn('')
    }
  })

  // Initialize state variables for table width and height
  const [tableWidth, setTableWidth] = useState(500)
  const [tableHeight, setTableHeight] = useState(500)

  // Update the state when the table dimensions change
  const handleTableResize = ({ width, height }) => {
    setTableWidth(width)
    setTableHeight(height)
  }
  useEffect(() => {
    // console.log(tableWidth, tableHeight)
    listDispatch({
      type: 'SET_INITIAL_TABLE_PROPS',
      currentTableWidth: tableWidth,
      currentTableHeight: tableHeight
    })
  }, [tableWidth, tableHeight])

  // console.log(listState.label, listState)
  return (
    <TableContainer
      key={'tablecontainer'}
      className='toolbar-table-rowtracker-detailview-container'
    >
      <HeaderAndTableContainer
        showDetailView={
          listState?.detailview?.active &&
          listState?.detailview?.detail !== '' &&
          listsState?.lists?.length === 1
        }
      >
        <Toolbar tableRef={tableRef} />
        <AutoResizerWrapper
          id={'table-' + listState?.crudlistid}
          className='table_wrapper'
        >
          <AutoResizer
            className='table_auto_resizer'
            key={'autoresizer'}
            onResize={handleTableResize}
          >
            {({ width, height }) => (
              <StyledTable
                ref={tableRef}
                className='styled_table'
                rowKey={'rowKey'} //this is done in case theres duplicates in rowdata
                fixed
                selectable
                width={width}
                height={height}
                data={listState?.crudlistitems}
                sortBy={{
                  key: listState?.sortinfo?.key,
                  order: listState?.sortinfo?.order
                }}
                // overscanRowCount={20}
                onColumnSort={onColumnSort}
                onColumnResize={onColumnResize}
                onRowsRendered={onRowsRendered}
                rowRenderer={rowRenderer}
                rowClassName={rowClassName}
                rowEventHandlers={rowEventHandlers}
                cellProps={cellProps}
                emptyRenderer={
                  <Empty>There is no information to display</Empty>
                }
                useIsScrolling
                getScrollbarSize={() => 10}
                expandColumnKey={
                  listState?.grouping?.groups?.length > 0
                    ? listState.columns[0].crudcolumnid.toLowerCase()
                    : null
                }
                expandedRowKeys={expandedRowKeys}
                onRowExpand={({ expanded, rowKey }) => {
                  handleRowExpand(
                    expanded,
                    rowKey,
                    expandedRowKeys,
                    listDispatch
                  )
                }}
                // defaultExpandedRowKeys={['row-0']}
                rowHeight={listState?.rowheight}
                headerHeight={listState?.headerheight}
                textSize={listState?.textsize}
                themeColor={listState?.themecolor}
                textColor={listState?.textcolor}
                showVerticalGridLines={listState?.showverticalgridlines}
                detailView={listState?.detailview?.active}
              >
                {/* CHECKBOXES */}
                {showSelection(listState) && (
                  <Column
                    key={'selection'}
                    className={'selection'}
                    width={50}
                    flexShrink={0}
                    frozen={'left'}
                    onClick={e => e.stopPropogation()}
                    title={
                      <input
                        key={'checkAll'}
                        id={'checkAll' + listState.crudlistid}
                        type={'checkbox'}
                        style={{ cursor: 'pointer' }}
                        checked={listState.checkallitems}
                        onChange={e => {
                          // console.log('listState', listState)
                          listDispatch({
                            type: 'SET_CHECK_ALL_ITEMS',
                            currentCheckAllItems: !listState.checkallitems
                          })
                          listDispatch({
                            type: 'SET_MODIFIEDTABLE_SELECTED_ALL',
                            selectedInput: e.target.checked
                          })
                        }}
                      />
                    }
                    cellRenderer={({
                      rowData,
                      rowIndex,
                      column,
                      container
                    }) => (
                      <SelectionCellColumn
                        rowData={rowData}
                        rowIndex={rowIndex}
                        column={column}
                      />
                    )}
                  />
                )}
                {/* ROW INDEX */}
                {listState?.showrowindex && (
                  <Column
                    key={'row_index'}
                    width={40}
                    align='center'
                    flexShrink={0}
                    frozen={'left'}
                    title='#'
                    className={'row-index'}
                    cellRenderer={({ rowIndex }) => rowIndex + 1}
                  />
                )}
                {/* TABLEDATA */}
                {listState?.columns?.map((column, index) => (
                  <Column
                    tableRef={tableRef}
                    title={column?.label}
                    className={({ rowData }) =>
                      rowData?.label
                        ? ' expanding-row'
                        : column?.crudcolumnid.toLowerCase()
                    }
                    key={column?.crudcolumnid?.toLowerCase()}
                    dataKey={column?.crudcolumnid?.toLowerCase()}
                    formelement={column?.formelement}
                    width={
                      listState?.grouping?.groups?.length > 0 && index === 0
                        ? column._width + 10
                        : column._width
                    }
                    sortable={true}
                    resizable={true}
                    // minWidth={columnWidth}
                    style={{
                      // border: '1px solid red',
                      background:
                        listState?.searchcolumns?.includes(
                          column.crudcolumnid.toLowerCase()
                        ) && listState?.searching === 1
                          ? LightenDarkenColor(listState.themecolor, 40) + '90'
                          : column.crudcolumnid.toLowerCase() ===
                              activeColumn && 'rgba(229,229,229, .3)',
                      color:
                        listState?.searchcolumns?.includes(
                          column.crudcolumnid.toLowerCase()
                        ) && listState?.searching === 1
                          ? listState.textcolor
                          : null
                    }}
                    //TODO:
                    // if crudcolumid is there show up on all columns undefined or epty array
                    // if there is an array only show that table
                    hidden={column._hidden}
                    selection={listState?.selection}
                    headerRenderer={({
                      columns,
                      column,
                      columnIndex,
                      headerIndex,
                      container
                    }) => (
                      <DraggableColumn
                        column={column}
                        container={container}
                        columnIndex={columnIndex}
                      />
                    )}
                    cellRenderer={columnCellRenderer}
                    frozen={column._pinned && 'left'}
                  />
                ))}
                {/* CRUDACTIONS */}
                {showCrudActionsColumn(listState) && (
                  <Column
                    width={getActionsWidth(listState, listsState)}
                    key={'actions'}
                    dataKey='actions'
                    className={'openactions'}
                    frozen={'right'}
                    cellRenderer={({ rowData }) =>
                      !rowData.children && (
                        <RowActions item={rowData} type={'col'} />
                      )
                    }
                  />
                )}
              </StyledTable>
            )}
          </AutoResizer>
        </AutoResizerWrapper>
        <RowTracker tableRef={tableRef} />
      </HeaderAndTableContainer>
      <DetailView />
    </TableContainer>
  )
}
