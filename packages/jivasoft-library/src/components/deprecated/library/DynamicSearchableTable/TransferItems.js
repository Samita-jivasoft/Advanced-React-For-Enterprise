import React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useLists } from './data/ListsContext'
import { SelectedContainer, TransferItemsContainer } from './styles'
import { HoverDropDown } from './HoverDropDown'
import { useAppTheme } from 'app/data'

export const TransferItems = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    list,
    selected,
    itemFrom,
    handleTransfer,
    setSelected,
    setCheckAll,
    setTableData
  } = props
  const [listsState, listsDispatch] = useLists()
  const [showOptions, setShowOptions] = useState(false)
  const [themeState] = useAppTheme()

  const onClick = () => {
    if (selected && list.crudcanmoveto) {
      itemFrom(list.crudlistid)
      handleTransfer(selected)
      setSelected([])
      setCheckAll(false)
      listsDispatch({
        type: 'REMOVE_FROM_LIST',
        listid: list.crudlistid,
        selected: selected
      })
      listsDispatch({
        type: 'ADD_TO_LIST',
        listid: list.crudlistid,
        selected: selected,
        moveto: list.crudcanmoveto[0]
      })
      setTableData(list.crudlistitems)
    }
    else {
      alert('NO CAN MOVE TO LIST')
    }
  }

  return (
    <div
      style={{
        // border: '1px solid red',
        // width: '100%',
        display: 'flex',
        color: textColor ? textColor : themeState.currentTheme.text,
        justifyContent: list.type === 'tolist' ? 'flex-end' : null
      }}
    >
      {list.type === 'fromlist' ? (
        <SelectedContainer showOptions={showOptions}>
          <TransferItemsContainer
            onMouseOver={() => {
              setShowOptions(true)
            }}
            onClick={() => onClick()}
          >
            <span />
            Add {selected.length}/{list.crudlistitems.length}
            <FaArrowRight />
          </TransferItemsContainer>
          {list.crudcanmoveto &&
            list.crudcanmoveto.length > 1 &&
            listsState.lists.length > 2 &&
            showOptions && (
              <HoverDropDown
                list={list}
                toTheSide={true}
                multi={'multi'}
                itemFrom={itemFrom}
                handleTransfer={handleTransfer}
                selected={selected}
                setSelected={setSelected}
                setCheckAll={setCheckAll}
              />
            )}
        </SelectedContainer>
      ) : (
        <SelectedContainer
          showOptions={showOptions}
          style={{ justifyContent: 'right' }}
        >
          {list.crudcanmoveto.length > 1 &&
            listsState.lists.length > 2 &&
            showOptions && (
              <HoverDropDown
                list={list}
                toTheSide={true}
                multi={'multi'}
                itemFrom={itemFrom}
                handleTransfer={handleTransfer}
                selected={selected}
                setSelected={setSelected}
                setCheckAll={setCheckAll}
              />
            )}
          <TransferItemsContainer
            onMouseOver={() => {
              setShowOptions(true)
            }}
            onClick={() => onClick()}
          >
            <FaArrowLeft />
            Remove {selected.length}/{list.crudlistitems.length}
            <span />
          </TransferItemsContainer>
        </SelectedContainer>
      )}
    </div>
  )
}
