import {
  SearchBar,
  SearchOverlay,
  StyledSearchDiv,
  StyledMainDiv,
  StyledClearButton,
  StyledCrossIcon
} from '.'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from 'app/data/context/AppContext'
import { useAppTheme, useViewport } from 'app/data'
import { FaBars, FaHome, FaSearch, FaTimes } from 'react-icons/fa'
import { DynamicButtonV2 } from '../DynamicButtonV2'
import { ErrorBoundary } from '../ErrorBoundary'

//container for all Agency Search features and components
export const Search = ({
  icons = [],
  items = [],
  groups = [],
  overlayActive = false,
  onSelect = () => null,
  unSelect = () => null,
  placeholder = 'Search',
  idIdentifier = 'id',
  identifierKey = ['friendlyname', 'name'],
  defaultValues = [],
  allowAlphabetical = false,
  showDefaultOverlay = false,
  allowMultipleSelect = false
}) => {
  const [themeState] = useAppTheme()
  const { viewWidth } = useViewport()
  const [appState, appDispatch] = useApp()
  const [identifier, setIdentifier] = useState('')
  const [pinnedAgency, setPinnedAgency] = useState([])
  const [depCategory, setDepCategory] = useState('all')
  const [selectedItems, setSelectedItems] = useState([])
  const [showSelectedItem, setShowSelectedItem] = useState(false)
  const [query, setQuery] = useState(
    selectedItems ? selectedItems[0]?.[identifier] : ''
  )
  const [initialValuesSet, setInitialValuesSet] = useState(false)
  const [showOverlay, setShowOverlay] = useState(
    showDefaultOverlay ? showDefaultOverlay : false
  )

  //Set the search items state through the prop items
  useEffect(() => {
    if (items?.length > 0) {
      if (items?.length === 1) {
        setSelectedItems([items[0]])
        onSelect([items[0]])
        setShowSelectedItem(true)
      }
    }
  }, [items])

  //For the initial opening, set initialvalueset to true, so for the multiple select search, the default
  //value is not set again if it exists, everytime the overlay is shown
  useEffect(() => {
    if (showOverlay) {
      if (!initialValuesSet) {
        setInitialValuesSet(true)
      }
    } else {
      setDepCategory('all')
    }
    if (overlayActive) {
      overlayActive(showOverlay)
    }
  }, [showOverlay])

  //If the defaultValues prop is populated, set the selected items, when the overlay is opened for the first time
  useEffect(() => {
    if (initialValuesSet && allowMultipleSelect) {
      const itemIds = defaultValues[0]?.ids?.split(',')
      const defaultItems = []
      if (
        itemIds?.length > 0 &&
        allowMultipleSelect &&
        selectedItems?.length === 0
      ) {
        for (let i = 0; i < itemIds?.length; i++) {
          for (let j = 0; j < items?.length; j++) {
            if (itemIds[i] === items[j]?.[idIdentifier]) {
              defaultItems.push(items[j])
            }
          }
        }
        setSelectedItems(defaultItems)
      }
    }
    if (items.length > 0 && identifierKey.length > 0) {
      for (const keyVal of identifierKey) {
        if (items[0].hasOwnProperty(keyVal?.toLowerCase())) {
          setIdentifier(keyVal?.toLowerCase())
        }
      }
    }
  }, [initialValuesSet])

  //Populate the selected items state if the state is empty and default value prop is populated
  function populateSelectedItems (groupItems, allowMultipleSelect) {
    const itemIds = groupItems?.ids?.split(',')
    const newItems = []
    if (itemIds?.length > 0 && allowMultipleSelect) {
      for (let i = 0; i < itemIds?.length; i++) {
        for (let j = 0; j < items?.length; j++) {
          if (itemIds[i] === items[j]?.[idIdentifier]) {
            newItems.push(items[j])
          }
        }
      }
      appDispatch({ type: 'UNSET_MODAL' })
      setSelectedItems(newItems)
    } else if (!allowMultipleSelect && itemIds?.length === 1) {
      for (let i = 0; i < items?.length; i++) {
        if (itemIds[0] === items[i]?.[idIdentifier]) {
          appDispatch({ type: 'UNSET_MODAL' })
          handleItemSelect(items[i])
        }
      }
    }
  }

  //useeffect to handle when selected tags are being removed
  useEffect(() => {
    if (initialValuesSet) {
      //runs the unselect function if the item is remove when the overlay is hidden for
      //the single select mode
      if (!allowMultipleSelect && !showOverlay && selectedItems?.length === 0) {
        unSelect(selectedItems)
      }

      //runs the onselect, when an item is selected for the first time or changed
      //during the singe select
      if (!allowMultipleSelect && selectedItems?.length > 0) {
        onSelect(selectedItems)
      }

      //runs the onselect function for when items are removed from the picklist when the overlay
      //is hidden
      if (allowMultipleSelect && !showOverlay && selectedItems?.length > 0) {
        onSelect(selectedItems)
      }

      //runs the unselect function for when items fully removed from the picklist when the overlay
      //is hidden
      if (allowMultipleSelect && !showOverlay && selectedItems?.length === 0) {
        setShowSelectedItem(false)
        unSelect(selectedItems)
      }
    }
  }, [selectedItems])

  //if the prop changes, reset the selected items and don't show any selectiosn
  useEffect(() => {
    setSelectedItems([])
    setShowSelectedItem(false)
    unSelect()
  }, [allowMultipleSelect])

  function handlePinnedAgency (agencyObj, itemId) {
    if (pinnedAgency) {
      for (var i = 0; i < pinnedAgency?.length; i++) {
        if (pinnedAgency[i]?.[idIdentifier] === itemId) {
          const newAgencyList = pinnedAgency.filter(
            item => item?.[idIdentifier] !== itemId
          )
          setPinnedAgency(newAgencyList)
          return
        }
      }
    }
    setPinnedAgency(pinnedAgency => [...pinnedAgency, agencyObj])
    return
  }

  //function that decides what steps to take when item is selected based on the props
  function handleItemSelect (item) {
    if (allowMultipleSelect) {
      if (
        !selectedItems.some(obj => obj?.[idIdentifier] === item?.[idIdentifier])
      ) {
        //add the item to the selecteditems
        setSelectedItems([...selectedItems, item])
      } else {
        //Remove the item from the selecteditems if its clicked again
        const indexOfItem = selectedItems?.findIndex(
          obj => obj?.[idIdentifier] === item?.[idIdentifier]
        )
        let selectedItemsCopy = JSON?.parse(JSON?.stringify(selectedItems))
        selectedItemsCopy?.splice(indexOfItem, 1)
        setSelectedItems(selectedItemsCopy)
      }
    } else {
      if (
        selectedItems?.length === 0 ||
        item?.[idIdentifier] !== selectedItems[0]?.[idIdentifier]
      ) {
        setSelectedItems([item])
        setShowSelectedItem(true)
        setShowOverlay(false)
      } else {
        setSelectedItems([])
        setShowSelectedItem(false)
      }
    }
  }

  //function thats closed when closing the overlay to determine which function should run based on the
  //number of selected items
  function handleItemFunctionCall (selectedItems) {
    if (selectedItems?.length > 0 && allowMultipleSelect) {
      onSelect(selectedItems)
    } else {
      unSelect(selectedItems)
    }
  }

  return (
    // appState.agencies.length || Agencies.length > 1 &&
    <>
      {appState['modal'] && appState['modal']}
      <StyledMainDiv
        className='main-search-container'
        background={showOverlay ? themeState?.currentTheme?.pane0 : 'null'}
        position={showOverlay ? 'fixed' : 'relative'}
        height={showOverlay ? '100vh' : null}
        padding={showOverlay ? '1rem' : null}
        zIndex={showOverlay ? 100 : 0}
      >
        <StyledSearchDiv>
          <ErrorBoundary>
            <SearchBar
              items={items}
              query={query}
              setQuery={setQuery}
              identifier={identifier}
              placeholder={placeholder}
              showOverlay={showOverlay}
              idIdentifier={idIdentifier}
              selectedItems={selectedItems}
              setShowOverlay={setShowOverlay}
              setDepCategory={setDepCategory}
              setSelectedItems={setSelectedItems}
              showSelectedItem={showSelectedItem}
              handleItemSelect={handleItemSelect}
              allowMultipleSelect={allowMultipleSelect}
              setShowSelectedItem={setShowSelectedItem}
            />

            {showOverlay && (
              <div style={{ position: 'absolute', right: 0 }}>
                <DynamicButtonV2
                  color={'white'}
                  backgroundColor={themeState?.currentTheme?.dangerColor}
                  icon={<FaTimes />}
                  onClick={e => {
                    setShowOverlay(false)
                    setDepCategory('all')
                    handleItemFunctionCall(selectedItems)
                    //setShowSelectedItem(false)
                  }}
                ></DynamicButtonV2>
              </div>
            )}
          </ErrorBoundary>
        </StyledSearchDiv>

        {showOverlay && (
          <ErrorBoundary>
            <SearchOverlay
              items={items}
              icons={icons}
              query={query}
              groups={groups}
              identifier={identifier}
              showOverlay={showOverlay}
              depCategory={depCategory}
              idIdentifier={idIdentifier}
              pinnedAgency={pinnedAgency}
              selectedItems={selectedItems}
              setShowOverlay={setShowOverlay}
              setDepCategory={setDepCategory}
              setPinnedAgency={setPinnedAgency}
              setSelectedItems={setSelectedItems}
              handleItemSelect={handleItemSelect}
              allowAlphabetical={allowAlphabetical}
              handlePinnedAgency={handlePinnedAgency}
              allowMultipleSelect={allowMultipleSelect}
              setShowSelectedItem={setShowSelectedItem}
              populateSelectedItems={populateSelectedItems}
            />
          </ErrorBoundary>
        )}
      </StyledMainDiv>
    </>
  )
}