import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLists } from '../data'
import { useAppTheme } from 'app/data'
import { useList } from '../data'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { HoverDropDown } from './HoverDropDown'
import { SelectedContainer } from './styles'

export const TransferItems = props => {
  const [themeState] = useAppTheme()

  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()

  const [showOptions, setShowOptions] = useState(false)
  const [selecteditems, setSelecteditems] = useState([])

  useEffect(() => {
    if (listState.crudlistitems) {
      setSelecteditems([
        ...listState.crudlistitems.filter(row => row._selected === true)
      ])
    }
  }, [listState.crudlistitems])

  return (
    selecteditems?.length > 0 &&
    listState?.canmoveto?.length > 0 && (
      <div
        onMouseLeave={() => {
          setShowOptions(false)
        }}
        style={{
          // border: '1px solid red',
          // paddingBottom: '10px',
          display: 'flex',
          color: themeState.currentTheme.text,
          justifyContent: listState.type === 'tolist' ? 'flex-end' : null
        }}
      >
        {listState.type === 'fromlist' && (
          <SelectedContainer showOptions={showOptions}>
            {listState?.crudlistitems?.length > 0 && (
              <div
                style={{ paddingBottom: '10px' }}
                onMouseOver={() => {
                  setShowOptions(true)
                }}
              >
                <DynamicButtonV2
                  text={
                    'Move ' +
                    selecteditems?.length +
                    '/' +
                    listState?.crudlistitems?.length +
                    ' to...'
                  }
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  type='default'
                  width={'fit-content'}
                  // icon={<FaArrowRight />}
                  iconPosition={'right'}
                  onClick={e => e.preventDefault()}
                />
              </div>
            )}
            {listState?.canmoveto && showOptions && (
              <HoverDropDown
                toTheSide={true}
                selecteditems={selecteditems}
                setShowOptions={setShowOptions}
              />
            )}
          </SelectedContainer>
        )}
        {listState.type === 'tolist' && (
          <SelectedContainer
            showOptions={showOptions}
            style={{ justifyContent: 'right' }}
          >
            {listState?.crudlistitems?.length > 0 && (
              <div
                style={{ paddingBottom: '10px' }}
                onMouseOver={() => {
                  setShowOptions(true)
                }}
              >
                <DynamicButtonV2
                  text={
                    'Move ' +
                    selecteditems?.length +
                    '/' +
                    listState?.crudlistitems?.length +
                    ' to...'
                  }
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  type='default'
                  width={'fit-content'}
                  // icon={<FaArrowRight />}
                  iconPosition={'right'}
                  onClick={e => e.preventDefault()}
                />
              </div>
            )}
            {listState?.crudcanmoveto?.length > 1 &&
              listsState?.tolists?.length > 2 &&
              showOptions && (
                <HoverDropDown
                  toTheSide={true}
                  selecteditems={selecteditems}
                  setShowOptions={setShowOptions}
                />
              )}
          </SelectedContainer>
        )}
      </div>
    )
  )
}
