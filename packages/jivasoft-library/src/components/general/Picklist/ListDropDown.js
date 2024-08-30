import React from 'react'
import { useAppTheme } from 'app/data'
import { DropdownStyled, ListContainer, RowStyled } from './styles'
import { truncateflag, validateSelection } from './helpers'
import { useList } from './data'
import { CalendarIcon } from '../Element/Type/CalendarIcon'

export const ListDropDown = props => {
  const { menuRef, active, setActive, ItemsRef } = props
  const [listState, listDispatch] = useList()
  const {
    isDisabled,
    mode,
    focus,
    showList,
    selectedItems,
    items,
    showFields,
    fieldsSeperator,
    identifier,
    allowMultipleSelections,
    allowSelections,
    onSelect,
    onClick,
    searchKeys,
    closeOnSelected,
    onChange
  } = listState
  const [themeState] = useAppTheme()

  function getPicklistMode (mode) {
    switch (mode) {
      case 'date':
        //TODO: backlog make this work with canedit:2
        return (
          <div
            className='date-picklist'
            style={{
              width: '100%',
              padding: 10,
              background: themeState.currentTheme.bga2,
              boxSizing: 'border-box',
              justifyContent: items?.length <= 4 ? 'center' : 'flex-start',
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '4px',
              overflow: 'scroll'
            }}
          >
            {items?.map((item, index) => {
              return (
                <CalendarIcon
                  key={item?.[identifier] + index}
                  onclick={() => {
                    listDispatch({
                      type: 'SET_SHOW_LIST',
                      items: []
                    })
                  }}
                  date={item.label}
                />
              )
            })}
          </div>
        )
      default:
        return (
          <DropdownStyled
            className='default-picklist-ListDropDown'
            ref={ItemsRef}
            height={
              showList?.length * 30 > 200
                ? 200
                : Math.max(showList?.length * 30, 100)
            }
            itemCount={showList?.length}
            itemSize={30}
            // width={500}
          >
            {Row}
          </DropdownStyled>
        )
    }
  }

  const Row = ({ index, style }) => (
    <RowStyled
      active={active == index ? true : false}
      option={showList[index]}
      identifier={identifier}
      key={index}
      style={style}
      // onClick={showList[index].onClick}
      onMouseEnter={() => {
        setActive(index)
        // console.log(showList[index])
        if (showList[index].onMouseEnter) {
          // console.log(showList[index])
          showList[index].onMouseEnter()
        }
      }}
      newitem={showList[index].newitem}
      onClick={e => {
        if (
          onSelect &&
          showList[index]?.advancedflag &&
          showList[index]?.flag
        ) {
          // console.log('onSelect', onSelect)
          onSelect(showList[index])
          listDispatch({ type: 'SET_ONFOCUS', focus: false })
        } else {
          // console.log('here')
          validateSelection(index, listState, listDispatch)
        }
        if (onClick) {
          onClick(showList[index])
        }
        if (showList[index]?.onClick) {
          showList[index]?.onClick()
        }
        if (closeOnSelected) {
          listDispatch({ type: 'SET_ONFOCUS', focus: false })
        }
      }}
    >
      {showFields.map(
        (field, i) =>
          showList[index][field] !== '' && (
            <React.Fragment key={i}>
              {i !== 0 &&
                !showList[index][identifier]?.includes('unselectable') &&
                ' ' + fieldsSeperator + ' '}
              {showList[index].newitem && '-------- '}
              {showList[index][field]}
              {showList[index].newitem && ' --------'}
              {showList[index].flag &&
                ' - ' + truncateflag(showList[index].flag)}
            </React.Fragment>
          )
      )}

      {/*TODO: Remove Items flag to check what row can be removed??? */}
      {/* {active === index && (
        <div
          style={{
            border: '1px solid red',
            // width:'100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <FaTimes />
        </div>
      )} */}
    </RowStyled>
  )

  return (
    !isDisabled &&
    focus &&
    showList?.length > 0 && (
      <ListContainer className={'list-container'} ref={menuRef}>
        {/* Show Dropdown if there are items */}
        {getPicklistMode(mode)}
      </ListContainer>
    )
  )
}
