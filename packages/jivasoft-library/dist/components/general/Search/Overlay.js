"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchOverlay = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _ = require(".");
var _framerMotion = require("framer-motion");
var _react = _interopRequireWildcard(require("react"));
var _DynamicButtonV = require("../DynamicButtonV2");
var _AppContext = require("app/data/context/AppContext");
var _data = require("app/data");
var _go = require("react-icons/go");
var _ErrorBoundary = require("../ErrorBoundary");
var _fa = require("react-icons/fa6");
var _DropDown = require("../DropDown");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchOverlay = _ref => {
  let {
    icons,
    query,
    items,
    groups,
    identifier,
    showOverlay,
    depCategory,
    pinnedAgency,
    idIdentifier,
    selectedItems,
    setShowOverlay,
    setDepCategory,
    setSelectedItems,
    handleItemSelect,
    allowAlphabetical,
    handlePinnedAgency,
    allowMultipleSelect,
    setShowSelectedItem,
    populateSelectedItems
  } = _ref;
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //state to control whether the list view should be shown
  const [listView, setListView] = (0, _react.useState)(false);
  const scrollRef = (0, _react.useRef)([]);
  const numOfItemsRequired = 15;
  const listViewRequirments = 18;
  const [themeState] = (0, _data.useAppTheme)();
  //state var that holds the filtered item results from the function
  const [filteredItems, setFilteredItems] = (0, _react.useState)([]);
  //Variable that get the number of the items
  const itemCount = items ? items === null || items === void 0 ? void 0 : items.length : 0;

  //Function that returns the items's based on the query or returns the entire list if no query was given
  const filterItems = (query, items, categoryType) => {
    var _query$trim;
    if ((categoryType === null || categoryType === void 0 ? void 0 : categoryType.toLowerCase()) !== 'all' && (categoryType === null || categoryType === void 0 ? void 0 : categoryType.toLowerCase()) !== '') {
      const departments = items.filter(item => {
        var _item$identifier, _query;
        var itemName = item !== null && item !== void 0 && item[identifier] ? item === null || item === void 0 || (_item$identifier = item[identifier]) === null || _item$identifier === void 0 ? void 0 : _item$identifier.toLowerCase() : '';
        if (!query) {
          query = '';
        }
        var queryLowerCase = ((_query = query) === null || _query === void 0 ? void 0 : _query.length) > 0 ? query.toLowerCase() : '';
        return itemName === null || itemName === void 0 ? void 0 : itemName.includes(queryLowerCase);
      });
      return departments.filter(item => {
        var _item$type;
        return (item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.toLowerCase()) === (categoryType === null || categoryType === void 0 ? void 0 : categoryType.toLowerCase());
      });
    }

    //if there is no query, return the list sorted alphabetically
    if (!query) {
      items.sort(function (a, b) {
        if (a !== null && a !== void 0 && a[identifier] && b !== null && b !== void 0 && b[identifier]) {
          var _a$identifier, _b$identifier;
          return a === null || a === void 0 || (_a$identifier = a[identifier]) === null || _a$identifier === void 0 ? void 0 : _a$identifier.toLowerCase().localeCompare(b === null || b === void 0 || (_b$identifier = b[identifier]) === null || _b$identifier === void 0 ? void 0 : _b$identifier.toLowerCase());
        } else if (a !== null && a !== void 0 && a.friendlyname && b !== null && b !== void 0 && b.friendlyname) {
          var _a$friendlyname, _b$friendlyname;
          return a === null || a === void 0 || (_a$friendlyname = a.friendlyname) === null || _a$friendlyname === void 0 ? void 0 : _a$friendlyname.toLowerCase().localeCompare(b === null || b === void 0 || (_b$friendlyname = b.friendlyname) === null || _b$friendlyname === void 0 ? void 0 : _b$friendlyname.toLowerCase());
        } else if (a !== null && a !== void 0 && a.name && b !== null && b !== void 0 && b.name) {
          var _a$name, _b$name;
          return a === null || a === void 0 || (_a$name = a.name) === null || _a$name === void 0 ? void 0 : _a$name.toLowerCase().localeCompare(b === null || b === void 0 || (_b$name = b.name) === null || _b$name === void 0 ? void 0 : _b$name.toLowerCase());
        } else {
          return items;
        }
      });
      return items;
    }
    if (!((_query$trim = query.trim()) !== null && _query$trim !== void 0 && _query$trim.length)) {
      items.sort(function (a, b) {
        if (a !== null && a !== void 0 && a[identifier] && b !== null && b !== void 0 && b[identifier]) {
          var _a$identifier2, _b$identifier2;
          return a === null || a === void 0 || (_a$identifier2 = a[identifier]) === null || _a$identifier2 === void 0 ? void 0 : _a$identifier2.toLowerCase().localeCompare(b === null || b === void 0 || (_b$identifier2 = b[identifier]) === null || _b$identifier2 === void 0 ? void 0 : _b$identifier2.toLowerCase());
        } else {
          var _a$name2, _b$name2;
          return a === null || a === void 0 || (_a$name2 = a.name) === null || _a$name2 === void 0 ? void 0 : _a$name2.toLowerCase().localeCompare(b === null || b === void 0 || (_b$name2 = b.name) === null || _b$name2 === void 0 ? void 0 : _b$name2.toLowerCase());
        }
      });
      return items;
    }
    return items === null || items === void 0 ? void 0 : items.filter(item => {
      var _query2;
      var itemName = item !== null && item !== void 0 && item[identifier] ? item === null || item === void 0 ? void 0 : item[identifier].toLowerCase() : '';
      var queryLowerCase = (_query2 = query) === null || _query2 === void 0 ? void 0 : _query2.toLowerCase();
      return itemName === null || itemName === void 0 ? void 0 : itemName.includes(queryLowerCase);
    });
  };

  //Function that scrolls to the letter section
  function scrollToSection(letter) {
    if (scrollRef !== null && scrollRef !== void 0 && scrollRef.current) {
      var _scrollRef$current$le;
      scrollRef === null || scrollRef === void 0 || (_scrollRef$current$le = scrollRef.current[letter]) === null || _scrollRef$current$le === void 0 || _scrollRef$current$le.scrollIntoView({
        behaviour: 'smooth',
        block: 'start'
      });
    }
  }

  //function called to dispatch the modal for the item groups
  function showGroupModal(groups, populateSelectedItems) {
    appDispatch({
      type: 'SET_MODAL',
      currentModal: /*#__PURE__*/_react.default.createElement(_.GroupModal, {
        groups: groups,
        allowMultipleSelect: allowMultipleSelect,
        populateSelectedItems: populateSelectedItems
      })
    });
  }

  //useeffect that runs the filter items function to return the items based on the query or department category changing
  (0, _react.useEffect)(() => {
    let resultItems = filterItems(query, items, depCategory);
    setFilteredItems([...resultItems]);
  }, [query, depCategory]);
  const pinnedFilteredAgency = filterItems(query, pinnedAgency, depCategory);
  (0, _react.useEffect)(() => {
    if ((filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.length) > 0 && itemCount > 20) {
      var _filteredItems$;
      const firstAgencyLetter = (_filteredItems$ = filteredItems[0]) === null || _filteredItems$ === void 0 || (_filteredItems$ = _filteredItems$[identifier]) === null || _filteredItems$ === void 0 ? void 0 : _filteredItems$.charAt(0);
      scrollToSection(firstAgencyLetter === null || firstAgencyLetter === void 0 ? void 0 : firstAgencyLetter.toLowerCase());
    }
  }, [filteredItems]);

  //Scrolls to the first item in the list
  (0, _react.useEffect)(() => {
    if (itemCount > numOfItemsRequired) {
      var _filteredItems$2;
      var firstItemLetter = (_filteredItems$2 = filteredItems[0]) === null || _filteredItems$2 === void 0 || (_filteredItems$2 = _filteredItems$2[identifier]) === null || _filteredItems$2 === void 0 ? void 0 : _filteredItems$2.charAt(0);
      scrollToSection(firstItemLetter === null || firstItemLetter === void 0 ? void 0 : firstItemLetter.toLowerCase());
    }
    if (itemCount > listViewRequirments) {
      setListView(true);
    }
  }, []);

  //Items sorted and shown in an alphabetical sections
  const AlphabeticalView = () => {
    return alphabets.map(letter => {
      var _filteredItems$filter;
      const letterCount = filteredItems === null || filteredItems === void 0 || (_filteredItems$filter = filteredItems.filter(item => {
        var _item$identifier2;
        return (item === null || item === void 0 || (_item$identifier2 = item[identifier]) === null || _item$identifier2 === void 0 ? void 0 : _item$identifier2.charAt(0).toLowerCase()) === letter;
      })) === null || _filteredItems$filter === void 0 ? void 0 : _filteredItems$filter.length;
      return letterCount > 0 && /*#__PURE__*/_react.default.createElement(_.StyledItemContainer, {
        listView: listView,
        ref: _ref2 => scrollRef.current[letter] = _ref2,
        key: letter
      }, /*#__PURE__*/_react.default.createElement(_.StyledLetterHeader, {
        paddingLeft: viewWidth < 700 ? 30 : 0
      }, letter === null || letter === void 0 ? void 0 : letter.toUpperCase()), /*#__PURE__*/_react.default.createElement(_.StyledItemIconContainer, {
        listView: listView,
        viewWidth: viewWidth
      }, (filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.length) > 0 && (filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.map((item, i) => {
        var _item$identifier3, _item$friendlyname;
        if (item !== null && item !== void 0 && item[identifier] ? (item === null || item === void 0 || (_item$identifier3 = item[identifier]) === null || _item$identifier3 === void 0 || (_item$identifier3 = _item$identifier3.charAt(0)) === null || _item$identifier3 === void 0 ? void 0 : _item$identifier3.toLowerCase()) === letter : (item === null || item === void 0 || (_item$friendlyname = item.friendlyname) === null || _item$friendlyname === void 0 || (_item$friendlyname = _item$friendlyname.charAt(0)) === null || _item$friendlyname === void 0 ? void 0 : _item$friendlyname.toLowerCase()) === letter) {
          return /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, {
            key: (item === null || item === void 0 ? void 0 : item[idIdentifier]) || i
          }, /*#__PURE__*/_react.default.createElement(_.SearchResult, {
            item: item,
            icons: icons,
            hideAgency: true,
            listView: listView,
            identifier: identifier,
            idIdentifier: idIdentifier,
            pinnedAgency: pinnedAgency,
            selectedItems: selectedItems,
            setShowOverlay: setShowOverlay,
            handleItemSelect: handleItemSelect,
            handlePinnedAgency: handlePinnedAgency,
            setShowSelectedItem: setShowSelectedItem
          }));
        }
      }))));
    });
  };

  //The normal view with the item icon in a rows
  const NormalView = () => {
    return /*#__PURE__*/_react.default.createElement(_.StyledItemPosition, null, (filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.length) > 0 && (filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, {
        key: (item === null || item === void 0 ? void 0 : item[idIdentifier]) || i
      }, /*#__PURE__*/_react.default.createElement(_.SearchResult, {
        item: item,
        icons: icons,
        hideAgency: true,
        listView: listView,
        identifier: identifier,
        idIdentifier: idIdentifier,
        pinnedAgency: pinnedAgency,
        selectedItems: selectedItems,
        setShowOverlay: setShowOverlay,
        handleItemSelect: handleItemSelect,
        handlePinnedAgency: handlePinnedAgency,
        setShowSelectedItem: setShowSelectedItem
      }));
    })));
  };
  const ActionButtons = () => {
    var _themeState$currentTh;
    return /*#__PURE__*/_react.default.createElement(_.StyledActionButtonBackground, null, /*#__PURE__*/_react.default.createElement(_.StyledActionButtonContainer, null, allowMultipleSelect && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && showOverlay && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      backgroundColor: themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.bgb1,
      type: 'default',
      onClick: () => setSelectedItems([]),
      text: 'Clear',
      size: 'Default'
    })));
  };
  return /*#__PURE__*/_react.default.createElement(_.StyledSearchOverlay, {
    animate: 'visible'
  }, /*#__PURE__*/_react.default.createElement(_.StyledBannerDiv, null, /*#__PURE__*/_react.default.createElement(_.StyledButtonPosition, null, /*#__PURE__*/_react.default.createElement(_.StyledRadioLabel, null, /*#__PURE__*/_react.default.createElement(_.StyledRadioInput, {
    type: "radio",
    value: "all",
    checked: depCategory === 'all',
    name: "agency_select",
    onChange: e => setDepCategory(e.target.value)
  }), "All \xA0"), icons === null || icons === void 0 ? void 0 : icons.map(obj => {
    return /*#__PURE__*/_react.default.createElement(_.StyledRadioLabel, {
      key: obj === null || obj === void 0 ? void 0 : obj.name
    }, /*#__PURE__*/_react.default.createElement(_.StyledRadioInput, {
      type: "radio",
      value: obj === null || obj === void 0 ? void 0 : obj.name,
      checked: depCategory === (obj === null || obj === void 0 ? void 0 : obj.name),
      name: "agency_select",
      onChange: e => setDepCategory(e === null || e === void 0 ? void 0 : e.target.value)
    }), obj === null || obj === void 0 ? void 0 : obj.name, " \xA0");
  }), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    type: "DEFAULT",
    size: "DEFAULT",
    text: listView ? 'Card View' : 'List View',
    icon: /*#__PURE__*/_react.default.createElement(_go.GoArrowSwitch, null),
    iconPosition: 'left',
    onClick: () => setListView(!listView),
    width: 'auto'
  }), (groups === null || groups === void 0 ? void 0 : groups.length) > 0 && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    type: "DEFAULT",
    size: "DEFAULT",
    text: viewWidth > 700 ? 'Select Group' : 'Group',
    width: 'auto',
    onClick: () => showGroupModal(groups, populateSelectedItems)
  })), viewWidth > 525 && itemCount > numOfItemsRequired && /*#__PURE__*/_react.default.createElement(_.StyledAlphabetHeader, null, alphabets === null || alphabets === void 0 ? void 0 : alphabets.map(letter => {
    var _filteredItems$filter2;
    const letterCount = filteredItems === null || filteredItems === void 0 || (_filteredItems$filter2 = filteredItems.filter(item => {
      var _item$identifier4;
      return (item === null || item === void 0 || (_item$identifier4 = item[identifier]) === null || _item$identifier4 === void 0 || (_item$identifier4 = _item$identifier4.charAt(0)) === null || _item$identifier4 === void 0 ? void 0 : _item$identifier4.toLowerCase()) === letter;
    })) === null || _filteredItems$filter2 === void 0 ? void 0 : _filteredItems$filter2.length;
    return /*#__PURE__*/_react.default.createElement(_.StyledAlphabetLetterDiv, {
      key: letter,
      exists: letterCount > 0,
      onClick: e => {
        e.preventDefault();
        letterCount > 0 && scrollToSection(letter);
      }
    }, letter === null || letter === void 0 ? void 0 : letter.toUpperCase());
  }))), /*#__PURE__*/_react.default.createElement(_.StyledItemScrollingDiv, null, viewWidth <= 525 && /*#__PURE__*/_react.default.createElement(_.StyledSideLetterContainer, null, alphabets === null || alphabets === void 0 ? void 0 : alphabets.map(letter => {
    var _filteredItems$filter3;
    const letterCount = filteredItems === null || filteredItems === void 0 || (_filteredItems$filter3 = filteredItems.filter(item => {
      var _item$identifier5;
      return (item === null || item === void 0 || (_item$identifier5 = item[identifier]) === null || _item$identifier5 === void 0 || (_item$identifier5 = _item$identifier5.charAt(0)) === null || _item$identifier5 === void 0 ? void 0 : _item$identifier5.toLowerCase()) === letter;
    })) === null || _filteredItems$filter3 === void 0 ? void 0 : _filteredItems$filter3.length;
    return /*#__PURE__*/_react.default.createElement(_.StyledSideLetterDiv, {
      key: letter,
      exists: letterCount > 0,
      onClick: () => letterCount > 0 && scrollToSection(letter)
    }, letter === null || letter === void 0 ? void 0 : letter.toUpperCase());
  })), itemCount > numOfItemsRequired && allowAlphabetical ? /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/_react.default.createElement(AlphabeticalView, null)) : /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/_react.default.createElement(NormalView, null))));
};
exports.SearchOverlay = SearchOverlay;