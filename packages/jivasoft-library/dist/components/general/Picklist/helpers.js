"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advancedItemValidation = advancedItemValidation;
exports.filterOptionsBySelected = filterOptionsBySelected;
exports.filterSelectedItemsNeedingValidation = filterSelectedItemsNeedingValidation;
exports.meetsCriteria = meetsCriteria;
exports.removeItem = removeItem;
exports.setInitialProps = setInitialProps;
exports.setIsDisabled = setIsDisabled;
exports.setPlaceholder = setPlaceholder;
exports.setSearchList = setSearchList;
exports.showSelectAll = showSelectAll;
exports.truncateflag = truncateflag;
exports.useOutsideAlerter = useOutsideAlerter;
exports.validateOption = validateOption;
exports.validateSelection = validateSelection;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _helpers = require("app/helpers");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Wrapper.js */
function meetsCriteria(allowSelections, allowMultipleSelections, validMaximum, validMinimum, selectedItems, items) {
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
  allowSelections && allowMultipleSelections && validMaximum !== undefined && validMinimum !== undefined && Array.isArray(selectedItems) && selectedItems.length > 0 && (selectedItems.length == validMinimum || selectedItems.length == validMaximum || selectedItems.length == items.length),
  // Criteria 2: If allowMultipleSelections is false and selectedItems is just one.
  allowSelections && !allowMultipleSelections && Array.isArray(selectedItems) && selectedItems.length === 1];
  // console.log(criteria)
  // Check if any of the criteria is true
  return criteria.some(criterion => criterion);
}
function setPlaceholder(items, allowAddingItems, placeholder, disabled, selectedItems, allowMultipleSelections, allowSelections, validMaximum, validMinimum) {
  if (disabled) {
    return 'No options available';
  }
  if (meetsCriteria(allowSelections, allowMultipleSelections, validMaximum, validMinimum, selectedItems, items)) {
    return '';
  }
  if (placeholder) {
    return placeholder;
  }
  if ((items === null || items === void 0 ? void 0 : items.length) > 0 && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) !== (items === null || items === void 0 ? void 0 : items.length)) {
    return allowAddingItems ? 'Type to search or add new item' : 'Type to search';
  }
  if ((items === undefined || (items === null || items === void 0 ? void 0 : items.length) < 1 || (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === (items === null || items === void 0 ? void 0 : items.length)) && allowAddingItems) {
    return 'Type to add new item';
  }
  return 'No options available';
}
function setIsDisabled(disable, items, allowAddingItems) {
  if (disable) {
    return true; // If disable is true, set isDisabled to true
  } else if (((items === null || items === void 0 ? void 0 : items.length) < 1 || !items) && !allowAddingItems) {
    return true; // If items length is less than 1 and adding items is not allowed, set isDisabled to true
  } else {
    return false; // Otherwise, set isDisabled to false
  }
}
function setInitialProps(props) {
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
  } = props;

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

  return _objectSpread(_objectSpread({}, props), {}, {
    items: items !== null && items !== void 0 ? items : [],
    selectedItems: selectedItems && selectedItems !== null && selectedItems !== void 0 && selectedItems.every(selectedItem => items === null || items === void 0 ? void 0 : items.some(item => item[identifier !== null && identifier !== void 0 ? identifier : 'id'] == selectedItem[identifier !== null && identifier !== void 0 ? identifier : 'id'])) ? selectedItems : [],
    showList: (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 ? items === null || items === void 0 ? void 0 : items.filter(item => !(selectedItems !== null && selectedItems !== void 0 && selectedItems.some(selectedItem => (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id) === (item === null || item === void 0 ? void 0 : item.id)))) : items !== null && items !== void 0 ? items : [],
    isDisabled: setIsDisabled(disable, items, allowAddingItems),
    showFields: showFields !== null && showFields !== void 0 ? showFields : ['label'],
    fieldsSeperator: fieldsSeperator !== null && fieldsSeperator !== void 0 ? fieldsSeperator : ['-'],
    searchKeys: searchKeys !== null && searchKeys !== void 0 ? searchKeys : ['label'],
    defaultPlaceholder: placeholder !== null && placeholder !== void 0 ? placeholder : '',
    placeholder: setPlaceholder(items, allowAddingItems, placeholder, setIsDisabled(disable, items, allowAddingItems), selectedItems, allowMultipleSelections, allowSelections, validMaximum, validMinimum),
    searchTerm: initialSearchTerm ? initialSearchTerm : searchTerm ? searchTerm : '',
    identifier: identifier !== null && identifier !== void 0 ? identifier : 'id',
    allowSelections: allowSelections && (allowSelections == 1 || allowSelections == true) || allowMultipleSelections && (allowMultipleSelections == 1 || allowMultipleSelections == true) ? true : false,
    allowMultipleSelections: allowMultipleSelections && (allowMultipleSelections == 1 || allowMultipleSelections == true) ? true : false,
    validMaximum: validMaximum !== null && validMaximum !== void 0 ? validMaximum : '',
    validMinimum: validMinimum !== null && validMinimum !== void 0 ? validMinimum : ''
  });
}

/* Main.js */
//TODO make this a generic helper function
function useOutsideAlerter(menuRef, inputRef, buttonRef, listDispatch, allowSelections) {
  (0, _react.useEffect)(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      var _menuRef$current, _inputRef$current, _buttonRef$current;
      // console.log(
      //   // !menuRef?.current?.contains(event.target),
      //   !inputRef?.current?.contains(event.target),
      //   !buttonRef?.current?.contains(event.target)
      // )
      if (!(menuRef !== null && menuRef !== void 0 && (_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(event.target)) && !(inputRef !== null && inputRef !== void 0 && (_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.contains(event.target)) && !(buttonRef !== null && buttonRef !== void 0 && (_buttonRef$current = buttonRef.current) !== null && _buttonRef$current !== void 0 && _buttonRef$current.contains(event.target))) {
        // console.log('You clicked outside of me!')
        listDispatch({
          type: 'SET_ONFOCUS',
          focus: false
        });
        if (!allowSelections) listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: ''
        });
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
}
function setSearchList(searchTerm, items, selectedItems, searchKeys, allowAddingItems, listDispatch, showList, identifier) {
  var _items$filter, _searchList$filter;
  const searchList = (_items$filter = items === null || items === void 0 ? void 0 : items.filter(item => !(selectedItems !== null && selectedItems !== void 0 && selectedItems.some(selectedItem => (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id) === (item === null || item === void 0 ? void 0 : item.id))))) !== null && _items$filter !== void 0 ? _items$filter : [];
  const match = (_searchList$filter = searchList === null || searchList === void 0 ? void 0 : searchList.filter(element => searchKeys.some(key => {
    var _element$key;
    return (_element$key = element[key]) === null || _element$key === void 0 || (_element$key = _element$key.toLowerCase()) === null || _element$key === void 0 ? void 0 : _element$key.includes(searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.toLowerCase());
  }))) !== null && _searchList$filter !== void 0 ? _searchList$filter : [];
  if (match.length == 0 && allowAddingItems) {
    if (searchTerm) {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: [{
          newitem: true,
          [identifier]: 'new_item_' + (0, _helpers.generateUUID)(),
          label: 'Add ' + searchTerm
        }, {
          [identifier]: 'unselectable',
          label: 'No Results'
        }]
      });
    } else {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: [
          // {
          //   [identifier]: 'unselectable',
          //   label: 'Type to add new item'
          // }
        ]
      });
    }
  } else if (searchTerm && match.length > 0 && allowAddingItems) {
    const existingItemIndex = showList === null || showList === void 0 ? void 0 : showList.findIndex(item => item.label === searchTerm);
    if (existingItemIndex !== -1) {
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: match
      });
    } else {
      match.unshift({
        newitem: true,
        [identifier]: 'new_item_' + (0, _helpers.generateUUID)(),
        label: 'Add ' + searchTerm
      });
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: match
      });
    }
  } else {
    listDispatch({
      type: 'SET_SHOW_LIST',
      items: match.length === 0 ? items : match
    });
  }
}
function advancedItemValidation(item) {
  return (item === null || item === void 0 ? void 0 : item.advancedflag) == 1 && (item === null || item === void 0 ? void 0 : item.validated) == 1 || (item === null || item === void 0 ? void 0 : item.advancedflag) != 1;
}
function filterSelectedItemsNeedingValidation(selectedItems) {
  return selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.filter(item => advancedItemValidation(item) && item);
}
function validateSelection(index, listState, listDispatch) {
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
  } = listState;
  // console.log('listState', listState)
  let selectedItem = allowAddingItems && showList !== null && showList !== void 0 && showList.some(item => item === null || item === void 0 ? void 0 : item.newitem) ? {
    newitem: true,
    [identifier]: 'new_item_' + (0, _helpers.generateUUID)(),
    label: searchTerm
  } : showList[index];
  if (!advancedItemValidation(selectedItem)) {
    selectedItem = _objectSpread(_objectSpread({}, selectedItem), {}, {
      validated: 0
    });
  }

  // console.log('selectedItem', selectedItem)
  if (allowSelections) {
    if (validateOption(selectedItem, identifier)) {
      if (allowMultipleSelections) {
        const newList = [...selectedItems];
        if ((newList === null || newList === void 0 ? void 0 : newList.length) >= validMaximum) {
          newList[newList.length - 1] = selectedItem;
        } else {
          newList.push(selectedItem);
        }
        listDispatch({
          type: 'SET_SELECTED_ITEMS',
          items: newList
        });
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: filterOptionsBySelected(newList, items)
        });
        if ((items === null || items === void 0 ? void 0 : items.length) === (newList === null || newList === void 0 ? void 0 : newList.length)) {
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: false
          });
        }
      } else {
        listDispatch({
          type: 'SET_SELECTED_ITEMS',
          items: [selectedItem]
        });
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: filterOptionsBySelected([selectedItem], items)
        });
        listDispatch({
          type: 'SET_ONFOCUS',
          focus: false
        });
      }
      listDispatch({
        type: 'SET_SEARCH_TERM',
        searchTerm: ''
      });
      if (!items.some(item => item[identifier] === selectedItem[identifier])) {
        // console.log('adding', selectedItem)
        // console.log('here', [...items, selectedItem])
        delete selectedItem.newitem;
        listDispatch({
          type: 'SET_ITEMS_LIST',
          items: [...items, selectedItem]
        });
      }
    }
  } else {
    if (allowAddingItems) {
      if (!(items !== null && items !== void 0 && items.some(item => item[identifier] === selectedItem[identifier]))) {
        // console.log('adding', selectedItem)
        // console.log('here', [...items, selectedItem])
        delete selectedItem.newitem;
        listDispatch({
          type: 'SET_ITEMS_LIST',
          items: [...items, selectedItem]
        });
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: [...items, selectedItem]
        });
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: ''
        });
      } else {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: selectedItem.label
        });
      }
    } else {
      if (!allowSelections) {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: selectedItem.label
        });
      } else {
        listDispatch({
          type: 'SET_SEARCH_TERM',
          searchTerm: searchTerm
        });
      }
    }
  }
}
function removeItem(item, listState, listDispatch) {
  const {
    selectedItems,
    showList,
    identifier
  } = listState;
  listDispatch({
    type: 'SET_SELECTED_ITEMS',
    items: selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.filter(selected => selected[identifier] != item[identifier])
  });
  const filteredShowList = showList === null || showList === void 0 ? void 0 : showList.filter(item => {
    var _item$identifier;
    return !((_item$identifier = item[identifier]) !== null && _item$identifier !== void 0 && _item$identifier.includes('unselectable'));
  });
  listDispatch({
    type: 'SET_SHOW_LIST',
    items: [...filteredShowList, item]
  });
  listDispatch({
    type: 'SET_ONFOCUS',
    focus: true
  });
}
function filterOptionsBySelected(value, options) {
  return (value === null || value === void 0 ? void 0 : value.length) > 0 ? options === null || options === void 0 ? void 0 : options.filter(option => !(value !== null && value !== void 0 && value.some(selected => (option === null || option === void 0 ? void 0 : option.id) == (selected === null || selected === void 0 ? void 0 : selected.id)))) : options;
}
function validateOption(option, identifier) {
  // console.log(!option.id.includes('unselectable'))
  // console.log(option.label !== '')
  // console.log(option.label !== undefined)
  // console.log(options.some(op => op.id === option.id))
  return (option === null || option === void 0 ? void 0 : option.label) !== '' && (option === null || option === void 0 ? void 0 : option.label) !== undefined && !option[identifier].includes('unselectable');
}
function showSelectAll(allowMultipleSelections, validMaximum, items, focus, showList, searchTerm, allowSelections) {
  return allowSelections && allowMultipleSelections == true && validMaximum >= (items === null || items === void 0 ? void 0 : items.length) && (showList === null || showList === void 0 ? void 0 : showList.length) > 0 && (items === null || items === void 0 ? void 0 : items.length) > 0 && focus;
}

/* ListDropDown.js */
function truncateflag(str) {
  if (str.length > 50) {
    return str.substring(0, 50 - 3) + '...';
  } else {
    return str;
  }
}