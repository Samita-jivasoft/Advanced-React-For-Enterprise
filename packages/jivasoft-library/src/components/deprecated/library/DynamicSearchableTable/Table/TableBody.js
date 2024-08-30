import React from 'react'
import { useEffect, useState } from 'react'
import { getIdentifier } from '../HelperFunctions'
import { useLists } from '../data'
import { HoverDropDown } from '../HoverDropDown'
import { useAppTheme } from 'app/data'
import { Body } from './styles'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { CrudRowActions } from '../Crud'

export const TableBody = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    selection,
    setCheckAll,
    setSelected,
    selected,
    allColumns,
    itemFrom,
    list,
    searchResults,
    handleTransfer,
    setDetail,
    tableData,
    detailView,
    setShowDetailView,
    cols,
    dragOver,
    crudfunctions
  } = props
  const [listsState, listsDispatch] = useLists()
  const [themeState] = useAppTheme()

  const onSelect = (e, row) => {
    setCheckAll(false)
    if (e.target.checked) {
      setSelected([...selected, row])
    } else {
      var newArray = [...selected]
      var index = newArray.indexOf(row)
      if (index !== -1) {
        newArray.splice(index, 1)
        setSelected(newArray)
      }
    }
    if (
      tableData
        .map(
          i =>
            document.getElementById(
              getIdentifier(i, listsState.idcolumns) + 'input'
            ).checked
        )
        .every(e => e === true)
    )
      setCheckAll(true)
  }
  const [showOptions, setShowOptions] = useState({
    hoveredEl: -1
  })

  const getStatus = (index, status) => {
    // COMBINED
    //DARK
    switch (status.toLowerCase()) {
      case 'assigned':
        return themeState.currentTheme.assigned
        break
      case 'pending':
        return themeState.currentTheme.pending
        break
      case 'drafts':
        return themeState.currentTheme.drafts
        break
      case 'cut off':
      case 'cutoff':
      case 'cut-off':
      case 'flag':
      case 'flags':
        return themeState.currentTheme.cutoff
        break
      case 'incomplete':
        return themeState.currentTheme.incomplete
        break
      default:
        return index % 2
          ? themeState.currentTheme.id === 'light'
            ? themeState.currentTheme.bga3
            : themeState.currentTheme.bgb3
          : null
    }
  }

  // console.log('cols', cols)
  // console.log(tableData)
  // console.log('dragOver', dragOver)

  // console.log(searchResults.exclude.map(i => i.detailid).includes(row.detailid))
  return (
    <Body textColor={textColor}>
      {tableData && tableData.length > 0 ? (
        tableData.map((row, index) => (
          <tr
            id={'row' + getIdentifier(row, listsState.idcolumns)}
            key={'row' + getIdentifier(row, listsState.idcolumns) + index}
            style={{
              // border: '1px solid red',
              backgroundColor:  getStatus(
                index,
                row && row.status ? row.status : 'other'
              ),
              cursor: detailView ? 'pointer' : null,
              opacity:
                searchResults.exclude &&
                searchResults.exclude.length > 0 &&
                searchResults.exclude
                  .map(i => i.detailid)
                  .includes(row.detailid)
                  ? 0.4
                  : null
            }}
            onMouseDown={e => {
              // console.log(e.button)
              if (e.button === 2) {
              }
            }}
            onClick={() => {
              setDetail(row)
              setShowDetailView(true)
            }}
            onContextMenu={e => {
              e.preventDefault()
              console.log('right click', e)
            }}
          >
            {/*check boxes for selection*/}
            {selection && list.crudcanmoveto && (
              <td
                style={{
                  // border: '1px solid yellow',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                  // width: '50px'
                }}
              >
                <input
                  id={getIdentifier(row, listsState.idcolumns) + 'input'}
                  type={'checkbox'}
                  style={{ cursor: 'pointer' }}
                  onChange={e => onSelect(e, row)}
                />
              </td>
            )}
            {/* table items*/}
            {Object.entries(row)
              .filter(el => {
                return listsState.columns.some(f => {
                  return (
                    el[0].toLowerCase() === f.crudcolumnid.toLowerCase() &&
                    f.iscolumn
                  )
                })
              })
              .map(([key, value], idx) => {
                return (
                  <td
                    key={getIdentifier(row, listsState.idcolumns) + row + idx}
                    ref={ref =>
                      (allColumns[
                        getIdentifier(row, listsState.idcolumns) + key + value
                      ] = ref)
                    }
                    style={{
                      // width: '25%', //this makes the columns the same size
                      width: '100px',
                      // border: '1px solid blue',
                      overflow: 'hidden',
                      padding: '5px 20px 5px 10px',
                      borderLeft:
                        list.crudlistid +
                          cols.map(col => col.crudcolumnid.toLowerCase())[
                            idx
                          ] ===
                          dragOver && '2px solid red'
                    }}
                  >
                    {/* {console.log(row)} */}
                    {/* {console.log(cols.map(col => col.crudcolumnid.toLowerCase()))} */}
                    <span //span for resizing
                      style={{
                        // width:'fit-content',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        display: 'block'
                      }}
                    >
                      {
                        row[
                          cols.map(col => col.crudcolumnid.toLowerCase())[idx]
                        ]
                      }
                    </span>
                  </td>
                )
              })}
            {list.crudaction &&
              list.crudaction.length > 0 &&
              list.crudaction.map(action => action.peritem).includes(1) && (
                <td>
                  <CrudRowActions
                    list={list}
                    row={row}
                    crudfunctions={crudfunctions}
                  />
                </td>
              )}
            {list.actionlabel && (
              <td
                key={getIdentifier(row, listsState.idcolumns) + 'actionlabel'}
                style={{
                  // border: '1px solid purple',
                  height: '100%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  padding: '2px 0px 2px 0px'
                  // minWidth: '25px',
                  // resize: 'horizontal',
                  // overflow: 'auto'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={e => {
                    e.preventDefault()
                    setShowOptions({ hoveredEl: e.target.id })
                  }}
                >
                  <DynamicButtonV2
                    id={getIdentifier(row, listsState.idcolumns) + 'button'}
                    backgroundColor={themeState.currentTheme.bga3}
                    text={list.actionlabel}
                    type='default'
                    width={'fit-content'}
                    onClick={() => {
                      if (
                        (list.crudcanmoveto &&
                          list.crudcanmoveto.length === 1) ||
                        (list.crudcanmoveto &&
                          listsState.lists &&
                          listsState.lists.length < 3)
                      ) {
                        itemFrom(list.crudlistid)
                        handleTransfer([row])
                        listsDispatch({
                          type: 'REMOVE_FROM_LIST',
                          listid: list.crudlistid,
                          selected: [row]
                        })
                        // {console.log(list)}
                        listsDispatch({
                          type: 'ADD_TO_LIST',
                          listid: list.crudlistid,
                          selected: [row],
                          moveto: list.crudcanmoveto[0]
                        })
                        if (selected.includes(row)) {
                          selected.splice(
                            selected.findIndex(
                              i =>
                                getIdentifier(i, listsState.idcolumns) ===
                                getIdentifier(row, listsState.idcolumns)
                            ),
                            1
                          )
                        }
                      }
                    }}
                  />
                </div>
                {list.crudcanmoveto &&
                  list.crudcanmoveto.length > 1 &&
                  listsState.lists &&
                  listsState.lists.length > 2 &&
                  showOptions.hoveredEl ===
                    getIdentifier(row, listsState.idcolumns) + 'button' && (
                    <HoverDropDown
                      list={list}
                      itemFrom={itemFrom}
                      setShowOptions={setShowOptions}
                      handleTransfer={handleTransfer}
                      selected={[row]}
                      setSelected={setSelected}
                      setCheckAll={setCheckAll}
                    />
                  )}
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr
          style={{
            // border:'1px solid red',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            color: textColor ? textColor : themeState.currentTheme.text
          }}
        >
          <td>No items</td>
        </tr>
      )}
    </Body>
  )
}
