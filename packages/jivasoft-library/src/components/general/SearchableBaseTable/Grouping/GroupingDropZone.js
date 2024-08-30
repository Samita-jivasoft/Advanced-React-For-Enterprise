import React, { useEffect, useState } from 'react'
import { useList } from '../data'
import { FaCross, FaTimes, FaWindowClose } from 'react-icons/fa'
import { DynamicButtonV2, DynamicText } from '../../../general'
import { useAppTheme } from 'app/data'
import { LightenDarkenColor } from 'app/helpers'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { StyledSelectableText } from './styles'

export const GroupingDropZone = props => {
  const [listState, listDispatch] = useList()
  const { grouping, crudlistitems, expandedRowKeys } = listState
  const [themeState] = useAppTheme()

  const handleOnDragStart = (e, group, index) => {
    const idx = listState.columns
      .map(i => i.crudcolumnid.toLowerCase())
      .indexOf(group.crudcolumnid.toLowerCase())

    // console.log('idx', idx)
    // e.target.classList.add('dragging')
    e.dataTransfer.setData('colIdx', idx)
    e.dataTransfer.setData('remove', true)
    e.dataTransfer.setData('groupIdx', index)
  }
  const handleOnDragOver = e => {
    // console.log('dragover', e.target)
    e.preventDefault()
    document.getElementById('grouping_dropzone').style.background = 'lightgray'
    if (document.getElementById('grouping_text'))
      document.getElementById('grouping_text').style.background = 'lightgray'
  }
  const handleOnDragLeave = e => {
    e.preventDefault()
    e.target.style.background = '#ddd'
    document.getElementById('grouping_dropzone').style.background = '#ddd'
    if (document.getElementById('grouping_text'))
      document.getElementById('grouping_text').style.background = '#ddd'
  }
  const handleOnDropDropZone = e => {
    e.preventDefault()
    document.getElementById('grouping_dropzone').style.background = '#ddd'
    if (document.getElementById('grouping_text'))
      document.getElementById('grouping_text').style.background = '#ddd'
    var data = e.dataTransfer.getData('column')
    const column = listState.columns.filter(
      col => col.crudcolumnid.toLowerCase() === data && col
    )[0]
    // console.log('am i running again?')
    listDispatch({
      type: 'SET_GROUPS',
      currentGroups: [...grouping.groups, column]
    })
  }
  const handleOnDropOutside = e => {
    e.preventDefault()
    // console.log(e)
  }

  const removeGroup = (group, index) => {
    const newlist = [...grouping.groups]
    newlist.splice(index, 1)
    // console.log('newlist', newlist)
    listDispatch({
      type: 'SET_GROUPS',
      currentGroups: newlist
    })
  }

  const collectAllRowKeys = items => {
    let rowKeys = []

    items.forEach(item => {
      rowKeys.push(item.rowKey) // Add the current item's rowKey
      if (item.children && item.children.length > 0) {
        // Recursively collect rowKeys from children
        rowKeys = rowKeys.concat(collectAllRowKeys(item.children))
      }
    })

    return rowKeys
  }

  // Function to expand all rows
  const handleExpandAll = () => {
    // console.log('clicked expand all')
    // console.log('crudlistitems', crudlistitems)
    // console.log('grouping', grouping.data)
    // Helper function to recursively collect all rowKeys
    const allRowKeys = collectAllRowKeys(crudlistitems)
    // console.log('allRowKeys', allRowKeys)
    listDispatch({
      type: 'SET_EXPANDED_KEYS',
      expandedRowKeys: allRowKeys
    })
  }

  // Function to collapse all rows
  const handleCollapseAll = () => {
    // console.log('clicked collapse all')
    listDispatch({
      type: 'SET_EXPANDED_KEYS',
      expandedRowKeys: []
    })
  }

  return (
    <div>
      <div
        style={{
          // border: '1px solid red',
          border: '1px dashed #777',
          background: '#ddd',
          display: 'flex',
          padding: '5px',
          margin: '0px 0px 5px 0px'
        }}
        id='grouping_dropzone'
        className='grouping_dropzone'
        onDragOver={handleOnDragOver}
        onDragLeave={handleOnDragLeave}
        onDrop={handleOnDropDropZone}
      >
        {listState?.grouping?.groups?.length > 0 ? (
          grouping.groups.map((group, index) => (
            <div key={index + group.crudcolumnid}>
              <div
                id={index + '_' + group.crudcolumnid}
                draggable
                onDrop={handleOnDropOutside}
                onDragOver={handleOnDragOver}
                onDragStart={e => handleOnDragStart(e, group, index)}
                style={{
                  margin: index * 12 + 'px 0px 0px 0px'
                }}
              >
                <DynamicButtonV2
                  text={group.label}
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  type='default'
                  width={'fit-content'}
                  icon={
                    <FaTimes
                      style={{ paddingRight: '5px', cursor: 'pointer' }}
                      onClick={() => removeGroup(group, index)}
                    />
                  }
                  onClick={() => removeGroup(group, index)}
                />
              </div>
              {index !== grouping.groups.length - 1 && (
                <div
                  style={{
                    // border: '1px solid blue',
                    display: 'flex',
                    width: 'fit-content',
                    float: 'right'
                  }}
                >
                  <div
                    style={{
                      background: 'red',
                      display: 'flex',
                      width: '1px',
                      height: '6px'
                    }}
                  />
                  <div
                    style={{
                      background: 'red',
                      width: '10px',
                      height: '1px',
                      margin: 'auto 0 0 0'
                    }}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div
            id='grouping_text'
            style={{
              padding: '5px',
              textAlign: 'center',
              justifyContent: 'center',
              // backgroundColor: 'lightgray',
              width: '100%',
              textSize: '10px'
            }}
          >
            Drag a column header to group by that column
          </div>
        )}
      </div>
      {grouping?.groups?.length > 0 && (
        <div style={{ display: 'flex', padding: '0px 0px 5px' }}>
          {/* {console.log(expandedRowKeys, grouping?.data)} */}
          <StyledSelectableText
            style={{
              paddingRight: '12px',
              fontWeight:
                expandedRowKeys?.length ==
                collectAllRowKeys(grouping?.data)?.length
                  ? 'bold'
                  : 'normal'
            }}
            onClick={handleExpandAll}
          >
            Expand All
          </StyledSelectableText>
          <StyledSelectableText
            style={{
              fontWeight: expandedRowKeys?.length == 0 ? 'bold' : 'normal'
            }}
            onClick={handleCollapseAll}
          >
            Collapse All
          </StyledSelectableText>
        </div>
      )}
    </div>
  )
}
