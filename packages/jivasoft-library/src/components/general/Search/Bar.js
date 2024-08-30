import React, { useEffect, useState, useRef } from 'react'
import { useApp, useAppTheme, useViewport } from 'app/data'
import { StyledSearchBarBackground } from '.'
import { Picklist } from '../Picklist'

export const SearchBar = ({
  items,
  query,
  setQuery,
  identifier,
  showOverlay,
  placeholder,
  idIdentifier,
  selectedItems,
  setShowOverlay,
  setDepCategory,
  setSelectedItems,
  showSelectedItem,
  handleItemSelect,
  allowMultipleSelect,
  setShowSelectedItem
}) => {
  const [appState, appDispatch] = useApp()
  const [themeState] = useAppTheme()
  const [expand, setExpand] = useState(false)
  const { viewWidth } = useViewport()
  const tagBackgroundRef = useRef()
  const itemRef = useRef()

  useEffect(() => {
    if (showOverlay) {
      setShowSelectedItem(false)
    } else {
      setQuery('')
    }
  }, [showOverlay])

  //handles closing the dropdown in the tag view if you click outside certain divs
  useEffect(() => {
    function handleClickOutside (event) {
      if (
        tagBackgroundRef?.current &&
        !tagBackgroundRef.current.contains(event.target) &&
        itemRef?.current &&
        !itemRef?.current.contains(event.target)
      ) {
        setExpand(false)
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [tagBackgroundRef])

  return (
    <StyledSearchBarBackground
      viewWidth={viewWidth}
      itemSelected={selectedItems?.length > 0 && !showOverlay}
    >
      {/** single select Picklist shown when the overlay is hidden with the tag */}
      {!allowMultipleSelect && (
        <Picklist
          items={items}
          identifier={idIdentifier}
          selectedItems={selectedItems}
          validMinimum={1}
          validMaximum={1}
          allowMultipleSelections={true}
          disableDropdown={true}
          searchTerm={query}
          getSelectedItems={selected => setSelectedItems(selected)}
          getSearchValue={value => setQuery(value)}
          onInputClick={!showOverlay ? () => setShowOverlay(true) : null}
          onClick={selected => {
            handleItemSelect(selected)
            setQuery('')
          }}
          placeholder={viewWidth > 500 ? placeholder : 'Search'}
          searchKeys={[identifier]}
          showFields={[identifier]}
        />
      )}

      {/** Picklist shown when the overlay is hidden with the tags */}
      {allowMultipleSelect && (
        <Picklist
          items={items}
          identifier={idIdentifier}
          selectedItems={selectedItems}
          validMinimum={1}
          validMaximum={999}
          allowMultipleSelections={true}
          disableDropdown={true}
          onInputClick={!showOverlay ? () => setShowOverlay(true) : null}
          getSelectedItems={selected => setSelectedItems(selected)}
          searchTerm={query}
          getSearchValue={value => setQuery(value)}
          onClick={selected => handleItemSelect(selected)}
          placeholder={viewWidth > 500 ? placeholder : 'Search'}
          searchKeys={[identifier]}
          showFields={[identifier]}
        />
      )}
    </StyledSearchBarBackground>
  )
}

//removes the items from the selected item state while in the tag format
// function removeItem(item)
// {
//   //Remove the item from the selecteditems if its clicked again
//   const indexOfItem = selectedItems?.findIndex((obj) => obj.id === item.id)
//   let selectedItemsCopy = JSON?.parse(JSON?.stringify(selectedItems))
//   selectedItemsCopy?.splice(indexOfItem,1)
//   setSelectedItems(selectedItemsCopy)
// }

//handles the actions for when you can multiple selection avaliable
// function handleMultipleItemSelect(){
//   if(selectedItems?.length > 0)
//   {
//     setShowOverlay(false)
//     setShowSelectedItem(true)
//     setDepCategory('all')
//     onSelect(selectedItems)
//   }
// }

//  {!allowMultipleSelect && !showSelectedItem && showOverlay &&
//     <StyledSearchBar
//       viewWidth={viewWidth}
//       autoComplete='off'
//       onClick={() => {
//         // appDispatch({type:'APPSTATE_HIDE_NAV'})
//         setShowOverlay(true)
//         setShowSelectedItem(false)
//         handleShowOverlay(showSelectedItem, setDepCategory)
//       }}
//       value={showSelectedItem ? selectedItems?.[identifier] : query ? query : ''}
//       placeholder={viewWidth > 500 ? placeholder : 'Search'}
//       type='search'
//       onChange={e => {
//         if (showSelectedItem) {
//           setShowSelectedItem(false)
//         }
//         setQuery(e.target.value)
//       }}
//       id='AgencySearchBar'
//     />
//   }

// {!showSelectedItem && showOverlay && selectedItems?.length > 0 && (
//   <>
//     {allowMultipleSelect && selectedItems?.length > 0 && showOverlay &&
//       <DynamicButtonV2
//         backgroundColor={themeState?.currentTheme?.bgb1}
//         type={'default'}
//         onClick={()=>setSelectedItems([])}
//         text={'Clear'}
//         size={viewWidth < 800 ? 'Default' : 'LG'}
//       />
//     }
//     <StyledMultipleItemsDiv
//       onClick={()=>setShowOverlay(true)}
//       ref={tagBackgroundRef}
//       viewWidth={viewWidth}
//       showOverlay={showOverlay}
//     >
//       {selectedItems?.length > 0 && selectedItems?.map((item)=>{
//         return(
//           <StyledItemTagDiv
//             key={item?.id}
//             onClick={(e)=>e.stopPropagation()}
//           >
//             {item?.[identifier]}
//             <StyledTagCrossMark
//               onClick={(e) => {e.stopPropagation(); removeItem(item) }}
//             />
//           </StyledItemTagDiv>
//         )
//       })}
//       <StyledSearchBar
//         minWidth={125}
//         viewWidth={viewWidth}
//         width={selectedItems?.length > 0 && 'auto'}
//         autoComplete='off'
//         onClick={() => {
//           // appDispatch({type:'APPSTATE_HIDE_NAV'})
//           setShowOverlay(true)
//           setShowSelectedItem(false)
//           //populateSelectedItems()
//           handleShowOverlay(showSelectedItem, setDepCategory)
//         }}
//         value={showSelectedItem ? selectedItems?.[identifier] : query}
//         placeholder={viewWidth > 500 ? placeholder : 'Search'}
//         //placeholder={viewWidth > 500 ? 'Search for an Agency' : 'Search Agencies'}
//         type='search'
//         onChange={e => {
//           if (showSelectedItem) {
//             setShowSelectedItem(false)
//           }
//           handleItemSearch(e.target.value)
//         }}
//         id='AgencySearchBar'
//       />
//     </StyledMultipleItemsDiv>
//     {allowMultipleSelect && selectedItems?.length > 0 && showOverlay &&
//       <DynamicButtonV2
//         backgroundColor={themeState?.currentTheme.bgb1}
//         onClick={()=>handleMultipleItemSelect()}
//         icon={<FaCheck style={{color:'green'}}/>}
//         size={viewWidth < 800 ? 'Default' : 'LG'}
//       />
//     }
//   </>
// )}
