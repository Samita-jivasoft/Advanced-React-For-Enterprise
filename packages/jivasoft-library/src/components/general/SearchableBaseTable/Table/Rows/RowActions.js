import React, { useEffect, useRef } from 'react'
import { useMenu } from 'app/data'
import { useList, useLists } from '../../data'
import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import {
  checkMultiplePerItemActions,
  generateActionButtons,
  generateButton,
  generateButtonsForRow
} from '../helpers'
import { FaEllipsisH } from 'react-icons/fa'

export const RowActions = props => {
  const { item, type } = props
  // console.log('item', item) 
  const [, menuDispatch] = useMenu()
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()

  const concatenatedArray = generateActionButtons(
    item,
    listState,
    listsState,
    menuDispatch,
    listDispatch,
    listsDispatch
  )

  const menuObject = {
    menuItems: concatenatedArray
  }
  // console.log("menuObject", menuObject);

  const hasMoveAction = concatenatedArray?.some(
    item => item?.label?.toLowerCase() === 'move'
  )
  const showEllipsis = () => {
    const hasMultipleActions = concatenatedArray?.length > 1
    const hasMultiplePerItemActions =
      checkMultiplePerItemActions(listState)?.includes(true) &&
      concatenatedArray?.length > 0

    return hasMultipleActions || hasMultiplePerItemActions || hasMoveAction
  }

  return type == 'detail-view' &&
    concatenatedArray.length < 3 &&
    !hasMoveAction ? (
    concatenatedArray.map((button, index) => (
      <div
        key={index}
        style={{
          // border: "1px solid black",
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: concatenatedArray.length - 1 == index ? '5px' : '10px'
        }}
      >
        {button}
      </div>
    ))
  ) : showEllipsis() ? (
    <div
      className='div-ellipsis-actions'
      key={'crudactions' + item.crudcolumnid}
      style={{
        borderRadius: '7px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'end',
        padding: 6
      }}
    >
      <FaEllipsisH
        className='ellipsis-actions'
        size={20}
        style={{ cursor: 'pointer' }}
        onClick={event => {
          event.stopPropagation()
          menuDispatch({
            type: 'SET_MENUOBJECT',
            object: menuObject,
            clicked: true,
            xCoord: event.clientX,
            yCoord: event.clientY
          })
        }}
      />
    </div>
  ) : (
    concatenatedArray[0]
  )
}
