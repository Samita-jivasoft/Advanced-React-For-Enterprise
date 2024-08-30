import React from 'react'
import { useLists } from './data/ListsContext'

export const HoverDropDown = props => {
  const {
    list,
    itemFrom,
    multi,
    handleTransfer,
    setShowOptions,
    selected,
    setSelected,
    toTheSide,
    setCheckAll
  } = props

  const [listsState, listsDispatch] = useLists()
  return (
    <div
      style={{
        border: '1px solid dimgray',
        display: toTheSide ? 'flex' : 'block',
        flexDirection: toTheSide ? 'column' : null,
        flexGrow: 1,
        position: toTheSide ? null : 'absolute',
        right: toTheSide ? null : 0,
        left: toTheSide ? null : 'auto',
        boxShadow:
          '0 10px 15px -3px rgba(46, 41, 51, 0.08), 0 4px 6px -2px rgba(71, 63, 79, 0.16)',
        zIndex: 9999,
        minWidth: 'min-content',
        backgroundColor: '#fff',
        borderRadius: '5px',
        overflow: 'hidden'
      }}
      onMouseLeave={e => {
        e.preventDefault()
        setShowOptions && setShowOptions({ hoveredEl: -1 })
      }}
    >
      {list.crudcanmoveto.map(i => {
        return (
          <div key={'crudcanmoveto' + i}>
            {listsState.lists.map(x =>
              x.crudlistid === i ? (
                <div
                  key={x}
                  id={
                    multi + 'from' + list.crudlistid + 'moveto' + x.crudlistid
                  }
                  style={{
                    cursor: 'pointer',
                    padding: '5px'
                    // border: '1px solid dimgray',
                  }}
                  onMouseOver={() => {
                    document.getElementById(
                      multi + 'from' + list.crudlistid + 'moveto' + x.crudlistid
                    ).style.backgroundColor = '#F5F5F5'
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      multi + 'from' + list.crudlistid + 'moveto' + x.crudlistid
                    ).style.backgroundColor = 'white'
                  }}
                  onClick={() => {
                    console.log(selected)
                    if (selected) {
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
                        moveto: x.crudlistid
                      })
                    }
                  }}
                >
                  {console.log(
                    multi + 'from' + list.crudlistid + 'moveto' + x.crudlistid
                  )}
                  {x.label}
                </div>
              ) : null
            )}
          </div>
        )
      })}
    </div>
  )
}
