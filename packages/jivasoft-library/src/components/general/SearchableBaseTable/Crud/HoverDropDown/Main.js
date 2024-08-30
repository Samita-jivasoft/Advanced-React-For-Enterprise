import React from 'react'
import { useList } from '../../data'
import { useLists } from '../../data'
import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import { StyledDropDown } from './styles'

export const HoverDropDown = props => {
  const { setShowOptions, toTheSide, selecteditems } = props
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()

  return (
    <StyledDropDown
      style={{
        display: toTheSide ? 'flex' : 'block',
        flexDirection: toTheSide ? 'column' : null,
        position: toTheSide ? null : 'absolute',
        right: toTheSide ? null : 0,
        left: toTheSide ? null : 'auto'
      }}
      onMouseLeave={e => {
        e.preventDefault()
        setShowOptions && setShowOptions({ hoveredEl: -1 })
      }}
    >
      {listState.canmoveto.map(i => {
        return (
          <div key={'crudcanmoveto' + i.tocrudlistid}>
            {listsState?.tolists?.map(
              x =>
                x.crudlistid === i.tocrudlistid && (
                  <DynamicButtonV2
                    key={'crudcanmoveto' + i.tocrudlistid}
                    text={x.label}
                    backgroundColor={listState.buttoncolor}
                    color={listState.textcolor}
                    // width={'fit-content'}
                    onClick={() => {
                      if (selecteditems) {
                        listsDispatch({
                          type: 'REMOVE_FROM_LIST',
                          listid: listState.crudlistid,
                          selected: selecteditems,
                          cruditems: listState.crudlistitems,
                          list: 'tolists'
                        })
                        listsDispatch({
                          type: 'ADD_TO_LIST',
                          listid: listState.crudlistid,
                          selected: selecteditems,
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
            {listsState?.fromlists?.map(
              x =>
                x.crudlistid === i.tocrudlistid && (
                  <DynamicButtonV2
                    key={'crudcanmoveto' + i.tocrudlistid}
                    text={x.label}
                    backgroundColor={listState.buttoncolor}
                    color={listState.textcolor}
                    // width={'fit-content'}
                    onClick={() => {
                      if (selecteditems) {
                        listsDispatch({
                          type: 'REMOVE_FROM_LIST',
                          listid: listState.crudlistid,
                          selected: selecteditems,
                          cruditems: listState.crudlistitems,
                          list: 'fromlists'
                        })
                        listsDispatch({
                          type: 'ADD_TO_LIST',
                          listid: listState.crudlistid,
                          selected: selecteditems,
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
      })}
    </StyledDropDown>
  )
}
