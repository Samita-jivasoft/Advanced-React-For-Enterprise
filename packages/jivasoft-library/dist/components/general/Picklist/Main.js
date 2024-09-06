"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PicklistMain = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _DynamicButtonV = require("../DynamicButtonV2");
var _styles = require("./styles");
var _helpers = require("./helpers");
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _SelectedItems = require("./SelectedItems");
var _ListDropDown = require("./ListDropDown");
var _data2 = require("./data");
var _useOutsideAlerter = require("../../../app/helpers/useOutsideAlerter");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PicklistMain = props => {
  const {
    initialProperties
  } = props;
  // console.log(props)
  const [listState, listDispatch] = (0, _data2.useList)();
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
    onChange: _onChange,
    onInputClick,
    disableDropdown = false,
    getSearchValue
  } = listState;

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

  const [themeState] = (0, _data.useAppTheme)();
  const ItemsRef = (0, _react.useRef)(null);
  const menuRef = (0, _react.useRef)(null);
  const inputRef = (0, _react.useRef)(null);
  const buttonRef = (0, _react.useRef)(null);

  // Define the action to perform when clicked outside
  const onClickOutside = () => {
    listDispatch({
      type: 'SET_ONFOCUS',
      focus: false
    });
    if (!allowSelections) {
      listDispatch({
        type: 'SET_SEARCH_TERM',
        searchTerm: ''
      });
    }
  };

  // Use the useOutsideAlerter hook
  (0, _useOutsideAlerter.useOutsideAlerter)([menuRef, inputRef, buttonRef], onClickOutside);

  // LIST SCROLLING
  (0, _react.useEffect)(() => {
    const component = ItemsRef === null || ItemsRef === void 0 ? void 0 : ItemsRef.current;
    // console.log(component)
    const handleScroll = () => {
      const componentRect = component === null || component === void 0 ? void 0 : component.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const componentTop = componentRect.top + scrollTop;
      const componentBottom = componentTop + componentRect.height;
      if (componentTop < scrollTop || componentBottom > scrollTop + windowHeight) {
        const scrollOptions = {
          top: 10000,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      }
    };
    component && window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [active, setActive] = (0, _react.useState)(0);
  const handleKeyDown = e => {
    var _showList$active, _showList$active2, _showList$active3;
    const key = e.key;
    switch (key) {
      case 'ArrowUp':
        if ((showList === null || showList === void 0 ? void 0 : showList.length) <= 1 && searchTerm == '') {
          listDispatch({
            type: 'SET_SHOW_LIST',
            items: (0, _helpers.filterOptionsBySelected)(selectedItems, items)
          });
        }
        if (active > 0) {
          setActive(active - 1);
        } else {
          setActive((showList === null || showList === void 0 ? void 0 : showList.length) - 1);
        }
        break;
      case 'ArrowDown':
        if ((showList === null || showList === void 0 ? void 0 : showList.length) <= 1 && searchTerm == '') {
          listDispatch({
            type: 'SET_SHOW_LIST',
            items: (0, _helpers.filterOptionsBySelected)(selectedItems, items)
          });
        }
        // console.log(showList[active])
        if (active < (showList === null || showList === void 0 ? void 0 : showList.length) - 1) {
          setActive(active + 1);
        } else {
          setActive(0);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (onSelect && (_showList$active = showList[active]) !== null && _showList$active !== void 0 && _showList$active.advancedflag && (_showList$active2 = showList[active]) !== null && _showList$active2 !== void 0 && _showList$active2.flag) {
          onSelect(showList[active]);
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: false
          });
        } else {
          (0, _helpers.validateSelection)(active, listState, listDispatch);
        }
        if ((_showList$active3 = showList[active]) !== null && _showList$active3 !== void 0 && _showList$active3.onClick) {
          var _showList$active4;
          (_showList$active4 = showList[active]) === null || _showList$active4 === void 0 || _showList$active4.onClick();
        }
        if (onClick) {
          onClick(showList[active]);
        }
        break;
      case 'Delete':
      case 'Backspace':
        // e.preventDefault()
        if (searchTerm === '' && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0) {
          (0, _helpers.removeItem)(selectedItems[(selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) - 1], listState, listDispatch);
        }
        break;
      default:
        break;
    }
  };
  (0, _react.useEffect)(() => {
    setActive(0);
  }, [showList]);
  (0, _react.useEffect)(() => {
    if (searchTerm != undefined) {
      (0, _helpers.setSearchList)(searchTerm, items, selectedItems, searchKeys, allowAddingItems, listDispatch, showList, identifier);
    }
    if (_onChange) {
      _onChange(searchTerm);
    }
  }, [searchTerm]);
  (0, _react.useEffect)(() => {
    listDispatch({
      type: 'SET_PLACEHOLDER',
      placeholder: (0, _helpers.setPlaceholder)(items, allowAddingItems, defaultPlaceholder, isDisabled, selectedItems, allowMultipleSelections, allowSelections, validMaximum, validMinimum)
    });
    if (getListItems) {
      getListItems(items);
    }
  }, [items, selectedItems]);
  (0, _react.useEffect)(() => {
    if (getSelectedItems) {
      getSelectedItems(selectedItems);
    }
  }, [selectedItems]);
  (0, _react.useEffect)(() => {
    if (getSearchValue) {
      getSearchValue(listState.searchTerm);
    }
  }, [listState.searchTerm]);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchContainerStyled, {
    onClick: () => onInputClick ? onInputClick() : null,
    className: 'main-picklist',
    remainingRequirements: remainingRequirements,
    expanded: !isDisabled && focus
  }, /*#__PURE__*/_react.default.createElement(_styles.MainInputContainer, {
    className: 'input-container',
    ref: inputRef,
    focus: focus,
    disable: isDisabled,
    selectedItems: selectedItems
  }, /*#__PURE__*/_react.default.createElement(_styles.SelectedItemsAndInputContainer, {
    className: "selecteditems-and-input"
    // onClick={() =>
    //   listDispatch({
    //     type: 'SET_ONFOCUS',
    //     focus: true
    //   })
    // }
  }, /*#__PURE__*/_react.default.createElement(_SelectedItems.SelectedItems, null), (selectedItems.length != items.length && (items === null || items === void 0 ? void 0 : items.length) > 0 || items.length == 0) && (!onInputClick || (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0) && /*#__PURE__*/_react.default.createElement(_styles.PickerElementInput, {
    id: "picklist-input",
    className: "picklist-input",
    type: "text",
    autoComplete: "off",
    disabled: isDisabled
    //onClick={()=> onInputClick ? onInputClick() : null}
    ,
    onFocus: () => {
      listDispatch({
        type: 'SET_ONFOCUS',
        focus: true
      });
    },
    placeholder: placeholder,
    onKeyDown: handleKeyDown,
    onChange: e => {
      if (_onChange) {
        _onChange(e.target.value);
      }
      listDispatch({
        type: 'SET_SEARCH_TERM',
        searchTerm: e.target.value
      });
      e.target.value != '' && listDispatch({
        type: 'SET_ONFOCUS',
        focus: true
      });
    },
    value: searchTerm,
    maxLength: "60"
  })), !isDisabled && /*#__PURE__*/_react.default.createElement(_styles.Actions, {
    className: "actions-container"
  }, ((selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 || searchTerm != '') && focus &&
  /*#__PURE__*/
  // Check if there are selected labels
  _react.default.createElement(_DynamicButtonV.DynamicButtonV2
  // text={'Clear All'}
  , {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimesCircle, {
      "data-testid": "clear-button"
    }),
    onClick: e => {
      e.stopPropagation();
      listDispatch({
        type: 'SET_SELECTED_ITEMS',
        items: []
      });
      listDispatch({
        type: 'SET_SHOW_LIST',
        items: items
      });
      listDispatch({
        type: 'SET_SEARCH_TERM',
        searchTerm: ''
      });
      if (_onChange) {
        _onChange('');
      }
    }
  }), allowAddingItems && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPlus, {
      "data-testid": "plus-icon"
    }),
    onClick: () => {
      // console.log('here', showList[active])
      if (showList[active] && searchTerm) {
        (0, _helpers.validateSelection)(showList[active], listState, listDispatch);
      }
    }
  }), !isDisabled && (items === null || items === void 0 ? void 0 : items.length) > 0 && (showList === null || showList === void 0 ? void 0 : showList.length) > 0 && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    icon: focus ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, {
      "data-testid": "chevron-up-icon"
    }) : /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, {
      "data-testid": "chevron-down-icon"
    }),
    onClick: () => {
      if (onInputClick) {
        onInputClick();
      } else {
        if (focus) {
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: false
          });
        } else {
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: true
          });
        }
      }
    },
    color: themeState.currentTheme.text
  }))), !disableDropdown && /*#__PURE__*/_react.default.createElement(_ListDropDown.ListDropDown, {
    menuRef: menuRef,
    active: active,
    setActive: setActive,
    ItemsRef: ItemsRef
  }), (0, _helpers.showSelectAll)(allowMultipleSelections, validMaximum, items, focus, showList, searchTerm, allowSelections) && /*#__PURE__*/_react.default.createElement(_styles.SelectAllStyled, {
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    text: 'Select All',
    onClick: () => {
      if (allowSelections) {
        listDispatch({
          type: 'SET_SELECTED_ITEMS',
          items: items
        });
        listDispatch({
          type: 'SET_SHOW_LIST',
          items: []
        });
        listDispatch({
          type: 'SET_ONFOCUS',
          focus: false
        });
      }
    }
  })));
};
exports.PicklistMain = PicklistMain;