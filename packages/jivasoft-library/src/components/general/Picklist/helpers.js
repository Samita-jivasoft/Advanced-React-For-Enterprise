import { generateUUID } from 'app/helpers'
import React, { useEffect } from 'react'
import { FaFlag } from 'react-icons/fa'

/* Wrapper.js */
export function meetsCriteria (
  allowSelections,
  allowMultipleSelections,
  validMaximum,
  validMinimum,
  selectedItems,
  items
) {
  // console.log(
  //   allowSelections,
  //   allowMultipleSelections,
  //   validMaximum,
  //   validMinimum,
  //   selectedItems,
  //   items
  // )
  const criteria = [
    // Criteria 1: If allowSelections, allowMultipleSelections, and selectedItems
    // are within the validMaximum and validMinimum range.
    allowSelections &&
      allowMultipleSelections &&
      validMaximum !== undefined &&
      validMinimum !== undefined &&
      Array.isArray(selectedItems) &&
      selectedItems.length > 0 &&
      (selectedItems.length == validMinimum ||
        selectedItems.length == validMaximum ||
        selectedItems.length == items.length),

    // Criteria 2: If allowMultipleSelections is false and selectedItems is just one.
    allowSelections &&
      !allowMultipleSelections &&
      Array.isArray(selectedItems) &&
      selectedItems.length === 1
  ]
  // console.log(criteria)
  // Check if any of the criteria is true
  return criteria.some(criterion => criterion)
}

export function setPlaceholder (
  items,
  allowAddingItems,
  placeholder,
  disabled,
  selectedItems,
  allowMultipleSelections,
  allowSelections,
  validMaximum,
  validMinimum
) {
  if (disabled) {
    return 'No options available'
  }

  if (
    meetsCriteria(
      allowSelections,
      allowMultipleSelections,
      validMaximum,
      validMinimum,
      selectedItems,
      items
    )
  ) {
    return ''
  }

  if (placeholder) {
    return placeholder
  }

  if (items?.length > 0 && selectedItems?.length !== items?.length) {
    return allowAddingItems
      ? 'Type to search or add new item'
      : 'Type to search'
  }

  if (
    (items === undefined ||
      items?.length < 1 ||
      selectedItems?.length === items?.length) &&
    allowAddingItems
  ) {
    return 'Type to add new item'
  }

  return 'No options available'
}

export function setIsDisabled (disable, items, allowAddingItems) {
  if (disable) {
    return true // If disable is true, set isDisabled to true
  } else if ((items?.length < 1 || !items) && !allowAddingItems) {
    return true // If items length is less than 1 and adding items is not allowed, set isDisabled to true
  } else {
    return false // Otherwise, set isDisabled to false
  }
}
export function setInitialProps (props) {
  const {
    items,
    disable,
    allowAddingItems,
    showFields,
    fieldsSeperator,
    searchKeys,
    placeholder,
    searchTerm,
    initialSearchTerm,
    identifier,
    allowMultipleSelections,
    selectedItems,
    allowSelections,
    validMaximum,
    validMinimum
  } = props

  // console.log(
  //   'selectedItems',
  //   selectedItems,
  //   selectedItems?.every(selectedItem =>
  //     items?.some(
  //       item => item[identifier ?? 'id'] == selectedItem[identifier ?? 'id']
  //     )
  //   )
  // )
  // console.log(
  //   'showList',
  //   selectedItems
  //     ? items?.filter(
  //         item =>
  //           !selectedItems?.some(selectedItem => selectedItem?.id === item?.id)
  //       )
  //     : []
  // )

  return {
    ...props,
    items: items ?? [],
    selectedItems:
      selectedItems &&
      selectedItems?.every(selectedItem =>
        items?.some(
          item => item[identifier ?? 'id'] == selectedItem[identifier ?? 'id']
        )
      )
        ? selectedItems
        : [],
    showList:
      selectedItems?.length > 0
        ? items?.filter(
            item =>
              !selectedItems?.some(
                selectedItem => selectedItem?.id === item?.id
              )
          )
        : items ?? [],
    isDisabled: setIsDisabled(disable, items, allowAddingItems),
    showFields: showFields ?? ['label'],
    fieldsSeperator: fieldsSeperator ?? ['-'],
    searchKeys: searchKeys ?? ['label'],
    defaultPlaceholder: placeholder ?? '',
    placeholder: setPlaceholder(
      items,
      allowAddingItems,
      placeholder,
      setIsDisabled(disable, items, allowAddingItems),
      selectedItems,
      allowMultipleSelections,
      allowSelections,
      validMaximum,
      validMinimum
    ),
    searchTerm: initialSearchTerm
      ? initialSearchTerm
      : searchTerm
      ? searchTerm
      : '',
    identifier: identifier ?? 'id',
    allowSelections:
      (allowSelections && (allowSelections == 1 || allowSelections == true)) ||
      (allowMultipleSelections &&
        (allowMultipleSelections == 1 || allowMultipleSelections == true))
        ? true
        : false,
    allowMultipleSelections:
      allowMultipleSelections &&
      (allowMultipleSelections == 1 || allowMultipleSelections == true)
        ? true
        : false,
    validMaximum: validMaximum ?? '',
    validMinimum: validMinimum ?? ''
  }
}

/* Main.js */
//TODO make this a generic helper function
export function useOutsideAlerter (
  menuRef,
  inputRef,
  buttonRef,
  listDispatch,
  allowSelections
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside (event) {
      // console.log(
      //   // !menuRef?.current?.contains(event.target),
      //   !inputRef?.current?.contains(event.target),
      //   !buttonRef?.current?.contains(event.target)
      // )
      if (
        !menuRef?.current?.contains(event.target) &&
        !inputRef?.current?.contains(event.target) &&
        !buttonRef?.current?.contains(event.target)
      ) {
        // console.log('You clicked outside of me!')
        listDispatch({
          type: 'SET_ONFOCUS',
          focus: false
        })
        if (!allowSelections)
          listDispatch({
            type: 'SET_SEARCH_TERM',
            searchTerm: ''
          })
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])
}

export function setSearchList (
  searchTerm,
  items,
  selectedItems,
  searchKeys,
  allowAddingItems,
  listDispatch,
  showList,
  identifier
) {
  const searchList =
    items?.filter(
      item =>
        !selectedItems?.some(selectedItem => selectedItem?.id === item?.id)
    ) ?? []

  const match =
    searchList?.filter(element =>
      searchKeys.some(key =>
        element[key]?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    ) ?? []

  if (match.length == 0 && allowAddingItems) {
    if (searchTerm) {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: [
          {
            newitem: true,
            [identifier]: 'new_item_' + generateUUID(),
            label: 'Add ' + searchTerm
          },
          { [identifier]: 'unselectable', label: 'No Results' }
        ]
      })
    } else {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: [
          // {
          //   [identifier]: 'unselectable',
          //   label: 'Type to add new item'
          // }
        ]
      })
    }
  } else if (searchTerm && match.length > 0 && allowAddingItems) {
    const existingItemIndex = showList?.findIndex(
      item => item.label === searchTerm
    )
    if (existingItemIndex !== -1) {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: match
      })
    } else {
      match.unshift({
        newitem: true,
        [identifier]: 'new_item_' + generateUUID(),
        label: 'Add ' + searchTerm
      })
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: match
      })
    }
  } else {
    listDispatch({
      type: 'SET_SHOW_LIST',
      items: match.length === 0 ? items : match
    })
  }
}

export function advancedItemValidation (item) {
  return (
    (item?.advancedflag == 1 && item?.validated == 1) || item?.advancedflag != 1
  )
}
export function filterSelectedItemsNeedingValidation (selectedItems) {
  return selectedItems?.filter(item => advancedItemValidation(item) && item)
}

export function validateSelection (index, listState, listDispatch) {
  const {
    items,
    allowSelections,
    allowAddingItems,
    allowMultipleSelections,
    showList,
    searchTerm,
    identifier,
    selectedItems,
    validMaximum
  } = listState
  // console.log('listState', listState)
  let selectedItem =
    allowAddingItems && showList?.some(item => item?.newitem)
      ? {
          newitem: true,
          [identifier]: 'new_item_' + generateUUID(),
          label: searchTerm
        }
      : showList[index]

  if (!advancedItemValidation(selectedItem)) {
    selectedItem = { ...selectedItem, validated: 0 }
  }

  // console.log('selectedItem', selectedItem)
  if (allowSelections) {
    if (validateOption(selectedItem, identifier)) {
      if (allowMultipleSelections) {
        const newList = [...selectedItems]
        if (newList?.length >= validMaximum) {
          newList[newList.length - 1] = selectedItem
        } else {
          newList.push(selectedItem)
        }
        listDispatch({ type: 'SET_SELECTED_ITEMS', items: newList })
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: filterOptionsBySelected(newList, items)
        })
        if (items?.length === newList?.length) {
          listDispatch({ type: 'SET_ONFOCUS', focus: false })
        }
      } else {
        listDispatch({
          type: 'SET_SELECTED_ITEMS',
          items: [selectedItem]
        })
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: filterOptionsBySelected([selectedItem], items)
        })
        listDispatch({ type: 'SET_ONFOCUS', focus: false })
      }

      listDispatch({ type: 'SET_SEARCH_TERM', searchTerm: '' })
      if (!items.some(item => item[identifier] === selectedItem[identifier])) {
        // console.log('adding', selectedItem)
        // console.log('here', [...items, selectedItem])
        delete selectedItem.newitem
        listDispatch({
          type: 'SET_ITEMS_LIST',
          items: [...items, selectedItem]
        })
      }
    }
  } else {
    if (allowAddingItems) {
      if (!items?.some(item => item[identifier] === selectedItem[identifier])) {
        // console.log('adding', selectedItem)
        // console.log('here', [...items, selectedItem])
        delete selectedItem.newitem
        listDispatch({
          type: 'SET_ITEMS_LIST',
          items: [...items, selectedItem]
        })
        listDispatch({ type: 'SET_SHOW_LIST', items: [...items, selectedItem] })

        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: ''
        })
      } else {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: selectedItem.label
        })
      }
    } else {
      if (!allowSelections) {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: selectedItem.label
        })
      } else {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: searchTerm
        })
      }
    }
  }
}

export function removeItem (item, listState, listDispatch) {
  const { selectedItems, showList, identifier } = listState
  listDispatch({
    type: 'SET_SELECTED_ITEMS',
    items: selectedItems?.filter(
      selected => selected[identifier] != item[identifier]
    )
  })
  const filteredShowList = showList?.filter(
    item => !item[identifier]?.includes('unselectable')
  )
  listDispatch({
    type: 'SET_SHOW_LIST',
    items: [...filteredShowList, item]
  })
  listDispatch({
    type: 'SET_ONFOCUS',
    focus: true
  })
}

export function filterOptionsBySelected (value, options) {
  return value?.length > 0
    ? options?.filter(
        option => !value?.some(selected => option?.id == selected?.id)
      )
    : options
}

export function validateOption (option, identifier) {
  // console.log(!option.id.includes('unselectable'))
  // console.log(option.label !== '')
  // console.log(option.label !== undefined)
  // console.log(options.some(op => op.id === option.id))
  return (
    option?.label !== '' &&
    option?.label !== undefined &&
    !option[identifier].includes('unselectable')
  )
}
export function showSelectAll (
  allowMultipleSelections,
  validMaximum,
  items,
  focus,
  showList,
  searchTerm,
  allowSelections
) {
  return (
    allowSelections &&
    allowMultipleSelections == true &&
    validMaximum >= items?.length &&
    showList?.length > 0 &&
    items?.length > 0 &&
    focus
  )
}

/* ListDropDown.js */
export function truncateflag (str) {
  if (str.length > 50) {
    return str.substring(0, 50 - 3) + '...'
  } else {
    return str
  }
}
