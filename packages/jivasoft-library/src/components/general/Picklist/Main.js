import React, { useEffect, useRef, useState } from 'react'
import { DynamicButtonV2 } from '../DynamicButtonV2'
import {
  Actions,
  SelectedItemsAndInputContainer,
  MainInputContainer,
  PickerElementInput,
  SearchContainerStyled,
  SelectAllStyled
} from './styles'
import {
  filterOptionsBySelected,
  removeItem,
  setPlaceholder,
  setSearchList,
  showSelectAll,
  validateSelection
} from './helpers'
import { useAppTheme } from 'app/data'
import {
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaTimesCircle
} from 'react-icons/fa'
import { SelectedItems } from './SelectedItems'
import { ListDropDown } from './ListDropDown'
import { useList } from './data'
import { useOutsideAlerter } from '../../../app/helpers/useOutsideAlerter'

export const PicklistMain = props => {
  const { initialProperties } = props
  // console.log(props)
  const [listState, listDispatch] = useList()
  const {
    mode,
    allowMultipleSelections,
    allowAddingItems,
    remainingRequirements,
    validMaximum,
    validMinimum,
    placeholder,
    searchKeys,
    searchFields,
    showList,
    selectedItems,
    items = [],
    isDisabled,
    focus,
    searchTerm,
    getListItems,
    identifier,
    getSelectedItems,
    allowSelections,
    defaultPlaceholder,
    onSelect,
    onClick,
    onChange,
    onInputClick,
    disableDropdown = false,
    getSearchValue
  } = listState

  // useEffect(() => {
  //   console.log('listState', listState)
  // }, [listState])

  // useEffect(() => {
  //   if (initialProperties)
  //     listDispatch({
  //       type: 'INITIALIZE_DATA',
  //       props: initialProperties
  //     })
  // }, [initialProperties])

  const [themeState] = useAppTheme()
  const ItemsRef = useRef(null)
  const menuRef = useRef(null)
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  // Define the action to perform when clicked outside
  const onClickOutside = () => {
    listDispatch({
      type: 'SET_ONFOCUS',
      focus: false
    })
    if (!allowSelections) {
      listDispatch({
        type: 'SET_SEARCH_TERM',
        searchTerm: ''
      })
    }
  }

  // Use the useOutsideAlerter hook
  useOutsideAlerter([menuRef, inputRef, buttonRef], onClickOutside)

  // LIST SCROLLING
  useEffect(() => {
    const component = ItemsRef?.current
    // console.log(component)
    const handleScroll = () => {
      const componentRect = component?.getBoundingClientRect()
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight

      const componentTop = componentRect.top + scrollTop
      const componentBottom = componentTop + componentRect.height

      if (
        componentTop < scrollTop ||
        componentBottom > scrollTop + windowHeight
      ) {
        const scrollOptions = {
          top: 10000,
          behavior: 'smooth'
        }
        window.scrollTo(scrollOptions)
      }
    }
    component && window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [active, setActive] = useState(0)
  const handleKeyDown = e => {
    const key = e.key
    switch (key) {
      case 'ArrowUp':
        if (showList?.length <= 1 && searchTerm == '') {
          listDispatch({
            type: 'SET_SHOW_LIST',
            items: filterOptionsBySelected(selectedItems, items)
          })
        }
        if (active > 0) {
          setActive(active - 1)
        } else {
          setActive(showList?.length - 1)
        }
        break
      case 'ArrowDown':
        if (showList?.length <= 1 && searchTerm == '') {
          listDispatch({
            type: 'SET_SHOW_LIST',
            items: filterOptionsBySelected(selectedItems, items)
          })
        }
        // console.log(showList[active])
        if (active < showList?.length - 1) {
          setActive(active + 1)
        } else {
          setActive(0)
        }
        break
      case 'Enter':
        e.preventDefault()
        if (
          onSelect &&
          showList[active]?.advancedflag &&
          showList[active]?.flag
        ) {
          onSelect(showList[active])
          listDispatch({ type: 'SET_ONFOCUS', focus: false })
        } else {
          validateSelection(active, listState, listDispatch)
        }
        if (showList[active]?.onClick) {
          showList[active]?.onClick()
        }
        if (onClick) {
          onClick(showList[active])
        }
        break
      case 'Delete':
      case 'Backspace':
        // e.preventDefault()
        if (searchTerm === '' && selectedItems?.length > 0) {
          removeItem(
            selectedItems[selectedItems?.length - 1],
            listState,
            listDispatch
          )
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    setActive(0)
  }, [showList])

  useEffect(() => {
    if (searchTerm != undefined) {
      setSearchList(
        searchTerm,
        items,
        selectedItems,
        searchKeys,
        allowAddingItems,
        listDispatch,
        showList,
        identifier
      )
    }
    if (onChange) {
      onChange(searchTerm)
    }
  }, [searchTerm])

  useEffect(() => {
    listDispatch({
      type: 'SET_PLACEHOLDER',
      placeholder: setPlaceholder(
        items,
        allowAddingItems,
        defaultPlaceholder,
        isDisabled,
        selectedItems,
        allowMultipleSelections,
        allowSelections,
        validMaximum,
        validMinimum
      )
    })
    if (getListItems) {
      getListItems(items)
    }
  }, [items, selectedItems])

  useEffect(() => {
    if (getSelectedItems) {
      getSelectedItems(selectedItems)
    }
  }, [selectedItems])

  useEffect(() => {
    if (getSearchValue) {
      getSearchValue(listState.searchTerm)
    }
  }, [listState.searchTerm])

  return (
    <SearchContainerStyled
      onClick={() => (onInputClick ? onInputClick() : null)}
      className={'main-picklist'}
      remainingRequirements={remainingRequirements}
      expanded={!isDisabled && focus}
    >
      <MainInputContainer
        className={'input-container'}
        ref={inputRef}
        focus={focus}
        disable={isDisabled}
        selectedItems={selectedItems}
      >
        <SelectedItemsAndInputContainer
          className='selecteditems-and-input'
          // onClick={() =>
          //   listDispatch({
          //     type: 'SET_ONFOCUS',
          //     focus: true
          //   })
          // }
        >
          <SelectedItems />
          {((selectedItems.length != items.length && items?.length > 0) ||
            items.length == 0) &&
            (!onInputClick || selectedItems?.length === 0) && (
              <PickerElementInput
                id='picklist-input'
                className='picklist-input'
                type='text'
                autoComplete='off'
                disabled={isDisabled}
                //onClick={()=> onInputClick ? onInputClick() : null}
                onFocus={() => {
                  listDispatch({
                    type: 'SET_ONFOCUS',
                    focus: true
                  })
                }}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                onChange={e => {
                  if (onChange) {
                    onChange(e.target.value)
                  }
                  listDispatch({
                    type: 'SET_SEARCH_TERM',
                    searchTerm: e.target.value
                  })
                  e.target.value != '' &&
                    listDispatch({
                      type: 'SET_ONFOCUS',
                      focus: true
                    })
                }}
                value={searchTerm}
                maxLength='60'
              />
            )}
        </SelectedItemsAndInputContainer>
        {!isDisabled && (
          <Actions className='actions-container'>
            {(selectedItems?.length > 0 || searchTerm != '') &&
              focus && ( // Check if there are selected labels
                <DynamicButtonV2
                  // text={'Clear All'}
                  icon={<FaTimesCircle data-testid='clear-button' />}
                  onClick={e => {
                    e.stopPropagation()
                    listDispatch({
                      type: 'SET_SELECTED_ITEMS',
                      items: []
                    })
                    listDispatch({
                      type: 'SET_SHOW_LIST',
                      items: items
                    })

                    listDispatch({
                      type: 'SET_SEARCH_TERM',
                      searchTerm: ''
                    })
                    if (onChange) {
                      onChange('')
                    }
                  }}
                />
              )}
            {allowAddingItems && (
              <DynamicButtonV2
                icon={<FaPlus data-testid='plus-icon' />}
                onClick={() => {
                  // console.log('here', showList[active])
                  if (showList[active] && searchTerm) {
                    validateSelection(showList[active], listState, listDispatch)
                  }
                }}
              />
            )}
            {!isDisabled && items?.length > 0 && showList?.length > 0 && (
              <DynamicButtonV2
                icon={
                  focus ? (
                    <FaChevronUp data-testid='chevron-up-icon' />
                  ) : (
                    <FaChevronDown data-testid='chevron-down-icon' />
                  )
                }
                onClick={() => {
                  if (onInputClick) {
                    onInputClick()
                  } else {
                    if (focus) {
                      listDispatch({
                        type: 'SET_ONFOCUS',
                        focus: false
                      })
                    } else {
                      listDispatch({
                        type: 'SET_ONFOCUS',
                        focus: true
                      })
                    }
                  }
                }}
                color={themeState.currentTheme.text}
              />
            )}
          </Actions>
        )}
      </MainInputContainer>
      {!disableDropdown && (
        <ListDropDown
          menuRef={menuRef}
          active={active}
          setActive={setActive}
          ItemsRef={ItemsRef}
        />
      )}
      {showSelectAll(
        allowMultipleSelections,
        validMaximum,
        items,
        focus,
        showList,
        searchTerm,
        allowSelections
      ) && (
        <SelectAllStyled ref={buttonRef}>
          <DynamicButtonV2
            text={'Select All'}
            onClick={() => {
              if (allowSelections) {
                listDispatch({
                  type: 'SET_SELECTED_ITEMS',
                  items: items
                })
                listDispatch({
                  type: 'SET_SHOW_LIST',
                  items: []
                })
                listDispatch({
                  type: 'SET_ONFOCUS',
                  focus: false
                })
              }
            }}
          />
        </SelectAllStyled>
      )}
    </SearchContainerStyled>
  )
}
