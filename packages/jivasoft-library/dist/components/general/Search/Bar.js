"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _ = require(".");
var _Picklist = require("../Picklist");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchBar = _ref => {
  let {
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
  } = _ref;
  const [appState, appDispatch] = (0, _data.useApp)();
  const [themeState] = (0, _data.useAppTheme)();
  const [expand, setExpand] = (0, _react.useState)(false);
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const tagBackgroundRef = (0, _react.useRef)();
  const itemRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (showOverlay) {
      setShowSelectedItem(false);
    } else {
      setQuery('');
    }
  }, [showOverlay]);

  //handles closing the dropdown in the tag view if you click outside certain divs
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      if (tagBackgroundRef !== null && tagBackgroundRef !== void 0 && tagBackgroundRef.current && !tagBackgroundRef.current.contains(event.target) && itemRef !== null && itemRef !== void 0 && itemRef.current && !(itemRef !== null && itemRef !== void 0 && itemRef.current.contains(event.target))) {
        setExpand(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagBackgroundRef]);
  return /*#__PURE__*/_react.default.createElement(_.StyledSearchBarBackground, {
    viewWidth: viewWidth,
    itemSelected: (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && !showOverlay
  }, !allowMultipleSelect && /*#__PURE__*/_react.default.createElement(_Picklist.Picklist, {
    items: items,
    identifier: idIdentifier,
    selectedItems: selectedItems,
    validMinimum: 1,
    validMaximum: 1,
    allowMultipleSelections: true,
    disableDropdown: true,
    searchTerm: query,
    getSelectedItems: selected => setSelectedItems(selected),
    getSearchValue: value => setQuery(value),
    onInputClick: !showOverlay ? () => setShowOverlay(true) : null,
    onClick: selected => {
      handleItemSelect(selected);
      setQuery('');
    },
    placeholder: viewWidth > 500 ? placeholder : 'Search',
    searchKeys: [identifier],
    showFields: [identifier]
  }), allowMultipleSelect && /*#__PURE__*/_react.default.createElement(_Picklist.Picklist, {
    items: items,
    identifier: idIdentifier,
    selectedItems: selectedItems,
    validMinimum: 1,
    validMaximum: 999,
    allowMultipleSelections: true,
    disableDropdown: true,
    onInputClick: !showOverlay ? () => setShowOverlay(true) : null,
    getSelectedItems: selected => setSelectedItems(selected),
    searchTerm: query,
    getSearchValue: value => setQuery(value),
    onClick: selected => handleItemSelect(selected),
    placeholder: viewWidth > 500 ? placeholder : 'Search',
    searchKeys: [identifier],
    showFields: [identifier]
  }));
};

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
exports.SearchBar = SearchBar;