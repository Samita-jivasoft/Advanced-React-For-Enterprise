import React, { useEffect } from 'react'
import { ExpadingCell, Loading, TableElementWrapper } from './styles'
import 'react-texty/styles.css'
import { useList } from '../data'
import { Element } from '../../Element'
import { formatIsoStringToMMDDYYYY } from '../../../../app/helpers'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { DynamicText } from '../../DynamicText'
/* // Constant variable that calculates the size of cruditems  
const perItemActionsTotal =
    listState?.crudaction && listState.crudlistitems
      ? listState.crudaction.filter(action => action.peritem)
          .length +
        listState.crudlistitems.filter(
          action => action.crudaction
        ).length
      : 1
*/
export const normalizeDataSent = (row, action, listState) => {
  const normalizedRow = { ...row }
  delete normalizedRow.rowKey
  listState.crudfunctions &&
    listState.crudfunctions(normalizedRow, action, listState.idcolumn)
}

export function showSelection (listState) {
  // console.log('listState', listState)
  return (
    (listState?.selection &&
      listState?.crudlistitems?.length > 0 &&
      !(
        listState?.grouping?.groups && listState?.grouping?.data?.length > 1
      )) ||
    listState?.canmoveto?.length > 0
  )
}

export const generateButton = (row, action, listState) => (
  <DynamicButtonV2
    className='actions'
    key={action.label}
    text={action.label}
    backgroundColor={listState.buttoncolor}
    color={listState.textcolor}
    type='default'
    width={'100%'}
    onClick={e => {
      e.stopPropagation()
      normalizeDataSent(row, action, listState)
    }}
  />
)
export const generateButtonsForRow = (row, listState) => {
  // console.log("listState", listState.label, listState.crudaction);
  return (
    listState?.crudaction
      ?.filter(action => action.peritem || action.peritem === '1')
      ?.map(action => {
        if (
          row?.crudactionid?.includes(action?.crudactionid) ||
          row.crudactionid === '' ||
          !row.crudactionid
        ) {
          return generateButton(row, action, listState)
        }
        return null
      })
      .filter(Boolean) ?? []
  )
}
export const generateActionButtons = (
  item,
  listState,
  listsState,
  menuDispatch,
  listDispatch,
  listsDispatch
) => {
  // per item actions
  const actions = (item?.crudaction || []).map(action =>
    generateButton(item, action, listState)
  )

  // listState crudactions
  const peritems = generateButtonsForRow(item, listState)
  let concatenatedArray = [...peritems, ...actions]

  // get canmoveto submenu
  if (
    listState.canmoveto &&
    listState.canmoveto.length > 0 &&
    listsState?.fromlists?.length + listsState?.tolists?.length > 2
  ) {
    var moveObject = listState?.canmoveto?.map(i => {
      return (
        <div key={'crudcanmoveto' + i.tocrudlistid}>
          {listsState?.fromlists?.map(
            x =>
              x.crudlistid === i.tocrudlistid && (
                <DynamicButtonV2
                  className={x.crudlistid + 'action'}
                  key={'crudcanmoveto' + i.tocrudlistid}
                  text={x.label}
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  width={'100%'}
                  onClick={e => {
                    e.stopPropagation()
                    menuDispatch({ type: 'SET_MENUOBJECT', clicked: false })
                    if (listState?.detailview?.active) {
                      listDispatch({
                        type: 'SET_DETAIL_VIEW',
                        detailview: {
                          ...listState.detailview,
                          detail: ''
                        }
                      })
                    }
                    if (item) {
                      listsDispatch({
                        type: 'REMOVE_FROM_LIST',
                        listid: listState.crudlistid,
                        selected: [item],
                        cruditems: listState.crudlistitems,
                        list: 'fromlists'
                      })
                      listsDispatch({
                        type: 'ADD_TO_LIST',
                        listid: listState.crudlistid,
                        selected: [item],
                        moveto: i.tocrudlistid
                      })
                      if (listState.checkallitems) {
                        listDispatch({
                          type: 'SET_CHECK_ALL_ITEMS',
                          currentCheckAllItems: false
                        })
                      }
                    }
                  }}
                />
              )
          )}
          {listsState.tolists.map(
            x =>
              x.crudlistid === i.tocrudlistid && (
                <DynamicButtonV2
                  className='actions'
                  key={'crudcanmoveto' + i.tocrudlistid}
                  text={x.label}
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  width={'100%'}
                  onClick={e => {
                    e.stopPropagation()
                    menuDispatch({ type: 'SET_MENUOBJECT', clicked: false })
                    if (listState?.detailview?.active) {
                      listDispatch({
                        type: 'SET_DETAIL_VIEW',
                        detailview: {
                          ...listState.detailview,
                          detail: ''
                        }
                      })
                    }
                    if (item) {
                      listsDispatch({
                        type: 'REMOVE_FROM_LIST',
                        listid: listState.crudlistid,
                        selected: [item],
                        cruditems: listState.crudlistitems,
                        list: 'tolists'
                      })
                      listsDispatch({
                        type: 'ADD_TO_LIST',
                        listid: listState.crudlistid,
                        selected: [item],
                        moveto: i.tocrudlistid
                      })
                      if (listState.checkallitems) {
                        listDispatch({
                          type: 'SET_CHECK_ALL_ITEMS',
                          currentCheckAllItems: false
                        })
                      }
                    }
                  }}
                />
              )
          )}
        </div>
      )
    })

    concatenatedArray?.push({
      label: 'Move',
      subMenuItems: moveObject
    })
  }

  return concatenatedArray
}

export function showCrudActionsColumn (listState) {
  const hasCrudListItems = listState?.crudlistitems?.length > 0
  const hasPerItemActions = listState?.crudaction?.some(
    action => action.peritem == 1
  )
  const canMoveTo = listState?.canmoveto?.length > 0
  const hasItemCrudActions = listState?.crudlistitems?.some(
    item => item.crudaction
  )
  return (
    hasCrudListItems && (hasPerItemActions || canMoveTo || hasItemCrudActions)
  )
}

// This function checks if any items in crudlistitems has the crudactionid property
// to map through which action buttons should correspond with that row
export const checkMultiplePerItemActions = listState => {
  // Helper function to get actions by ID
  const getActionsByIds = (ids, actions) => {
    return ids?.map(id => actions?.find(action => action?.crudactionid === id))
  }

  // Process each crudlistitem
  const itemsWithMultiplePerItemActions = listState?.crudlistitems?.map(
    item => {
      // Split the crudaction string into an array of IDs
      const actionIds = item?.crudactionid?.split('|')
      // console.log('item', item.crudaction)

      // Get the corresponding action objects
      const actions = getActionsByIds(actionIds, listState?.crudaction)

      // Count actions with peritem === 1
      const perItemCount = actions?.filter(
        action => action?.peritem == 1
      )?.length

      const hasItemCrudAction = item?.crudaction?.filter(
        action => action?.peritem == 1
      )?.length
      // console.log('hasItemCrudAction', hasItemCrudAction)

      // Check if there's more than one action with peritem === 1
      return (
        perItemCount > 1 || item?.crudactionid === '' || hasItemCrudAction > 1
      )
    }
  )

  return itemsWithMultiplePerItemActions
}

export function getActionsWidth (listState, listsState) {
  //Calculate and estimated size for a list with only one button and no canmovetos
  // For the global buttons find the first / only button to get an estimated length
  const getGlobalActions =
    listState?.crudaction
      ?.map(action => action?.peritem == 1 && action?.label)
      .filter(n => n) ?? 0
  const getGlobalActionButtonLabel = getGlobalActions[0]?.length ?? 0
  // Find the first item with a crudaction array, get the first crudaction in the array and get the label
  const getItemsWithActions =
    listState?.crudlistitems?.filter(item => item?.crudaction) ?? 0
  const getItemActionButtonLabel =
    listState?.crudlistitems?.find(item => item?.crudaction?.length > 0)
      ?.crudaction[0]?.label?.length ?? 0
  // console.log('calculating width', getGlobalActions, getGlobalActions?.length, getItemsWithActions, getItemsWithActions?.length)
  const padding = 8
  const estimatelength =
    (getGlobalActionButtonLabel
      ? getGlobalActionButtonLabel
      : getItemActionButtonLabel ?? 0) *
      padding +
    40
  const moreThanOneAction =
    getGlobalActions?.length + getItemsWithActions?.length

  // console.log('here', checkMultiplePerItemActions(listState), estimatelength, moreThanOneAction, listState.canmoveto)
  if (
    checkMultiplePerItemActions(listState)?.includes(true) ||
    moreThanOneAction > 1 ||
    listState?.canmoveto
  )
    return 50
  else if (estimatelength > 180) return 180
  else return estimatelength
}

export function calculateColumnWidths (tableRef, listState, listsState) {
  const numberOfCols =
    listState?.columns?.length == 0 ? 1 : listState?.columns?.length
  const pinnedCols =
    listState?.columns?.filter(col => col._pinned)?.length * 110
  const selection = showSelection(listState) ? 50 : 0
  const showrowindex = listState.showrowindex ? 50 : 0
  const crudactionswidth =
    showCrudActionsColumn(listState) && getActionsWidth(listState, listsState)
  // console.log(pinnedCols)

  const tableWidth = tableRef?.current?.props?.width || 500
  const leftFrozen =
    tableRef?.current?.leftTable?.bodyRef?.props?.width ||
    pinnedCols + selection + showrowindex
  const rightFrozen =
    tableRef?.current?.rightTable?.props?.width || crudactionswidth

  const colTotal = tableWidth - leftFrozen - rightFrozen
  const calculatedWidth =
    colTotal > numberOfCols * 110
      ? (colTotal / numberOfCols) * (listState.headerheight > 60 ? 2 : 1)
      : 110 * (listState.headerheight > 60 ? 2 : 1)

  return Math.floor(calculatedWidth)
}

/* COLUMN functions */
// as soon as you remove a column, the results should clear
export function HandleSelectedSearchColumns (
  columnClicked,
  listState,
  listDispatch
) {
  if (listState.searchcolumns.includes(columnClicked)) {
    const removeColumn = listState.searchcolumns.filter(
      i => i !== columnClicked
    )
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: listState.filters,
      currentSearchColumns: removeColumn,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    })
  } else {
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: listState.filters,
      currentSearchColumns: [...listState.searchcolumns, columnClicked],
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    })
  }
}

// set/unset pinned columns
export function HandlePinnedColumn (columnid, listState, listDispatch) {
  let columns = JSON.parse(JSON.stringify(listState.columns))
  columns.map(col => {
    if (col.crudcolumnid === columnid) {
      col['_pinned'] = !col._pinned
    }
  })
  listDispatch({
    type: 'SET_COLUMNS',
    columns: columns
  })
}

// set/unset hidden columns
export function HandleHiddenColumn (columnid, listState, listDispatch) {
  let columns = JSON.parse(JSON.stringify(listState.columns))
  columns.map(col => {
    if (col.crudcolumnid === columnid) {
      col['_hidden'] = !col._hidden
    }
  })
  listDispatch({
    type: 'SET_COLUMNS',
    columns: columns
  })
}

function formatCellData (cell, cellData) {
  if (cellData == undefined || cellData === 'undefined') {
    return ''
  }
  if (cell['datatype'] === 'datetime') {
    const dateFormatted = formatIsoStringToMMDDYYYY(cellData)
    if (cell['masktype'] === 'date') {
      return dateFormatted
    }
    if (cell['masktype'] === '') {
      const timePart = (
        cellData?.split('T')[1]?.replace(/:(\d{2})(Z)?$/, '') || ''
      ).substr(0, 5)
      return `${dateFormatted} ${timePart}`
    }
    if (cell['masktype'] === 'time') {
      return cellData?.split('T')[1]?.replace(/:(\d{2})(Z)?$/, '') || ''
    }
  }
  return cellData
}

export const CustomTableCells = ({
  cellData,
  columns,
  column,
  columnIndex,
  rowData,
  rowIndex,
  container,
  isScrolling
}) => {
  // console.log('cellData', cellData)
  const [listState] = useList()

  /* GROUPING ROWS */
  if (
    rowData.label &&
    (columns[0].key === 'selection' ? columnIndex === 1 : columnIndex === 0)
  ) {
    return (
      <ExpadingCell
        style={{
          marginLeft: `${(rowData.level + 1) * 20}px`
        }}
      >
        {rowData.label}
      </ExpadingCell>
    )
  } else {
    //TODO: custom cells based on form elements column.columnElement[0]
    let cell = JSON.parse(JSON.stringify(column?.formelement?.[0] ?? {}))
    cell['canedit'] = 0
    cell['label'] = ''
    cell['defaultvalue'] = cellData
    // console.log('HERE', formatCellData(cell, cellData))
    const cellText = formatCellData(cell, cellData)?.toString()
    // console.log('cellText', cellText)
    return (
      <DynamicText
        highlight={
          listState?.searchcolumns?.includes(column.key.toLowerCase()) &&
          listState?.searching === 1
            ? listState?.searchinput
            : ''
        }
        textWrap={false}
        tooltipStyle={{
          color: listState.textcolor,
          background: listState.themecolor,
          fontSize: '12px'
        }}
      >
        {cellText}
        {/* TODO: Implement for Elements - have elements do the dynamicText themeselves  */}
        {/* <TableElementWrapper
          fontSize={listState.textsize}
          className='table-cell-element-wrapper'
          css={css`
          .element-main {
            padding: 0px !important;
            margin: 0px !important;
          }
        `}
        >
          <Element
         
            element={cell}
          />
        </TableElementWrapper> */}
      </DynamicText>
    )
  }
}

export const handleRowExpand = (
  expanded,
  rowKey,
  expandedRowKeys,
  listDispatch
) => {
  let newExpandedRowKeys

  if (expanded) {
    // Add the rowKey if the row is expanded and not already in the list
    newExpandedRowKeys = [...expandedRowKeys, rowKey]
  } else {
    // Remove the rowKey if the row is collapsed
    newExpandedRowKeys = expandedRowKeys.filter(key => key !== rowKey)
  }

  // Dispatch the updated expandedRowKeys
  listDispatch({
    type: 'SET_EXPANDED_KEYS',
    expandedRowKeys: newExpandedRowKeys
  })
}
