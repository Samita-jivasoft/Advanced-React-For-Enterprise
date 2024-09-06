"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _ = require(".");
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _AppContext = require("app/data/context/AppContext");
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../DynamicButtonV2");
var _ErrorBoundary = require("../ErrorBoundary");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//container for all Agency Search features and components
const Search = _ref => {
  var _selectedItems$, _themeState$currentTh, _themeState$currentTh2;
  let {
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
  } = _ref;
  const [themeState] = (0, _data.useAppTheme)();
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  const [identifier, setIdentifier] = (0, _react.useState)('');
  const [pinnedAgency, setPinnedAgency] = (0, _react.useState)([]);
  const [depCategory, setDepCategory] = (0, _react.useState)('all');
  const [selectedItems, setSelectedItems] = (0, _react.useState)([]);
  const [showSelectedItem, setShowSelectedItem] = (0, _react.useState)(false);
  const [query, setQuery] = (0, _react.useState)(selectedItems ? (_selectedItems$ = selectedItems[0]) === null || _selectedItems$ === void 0 ? void 0 : _selectedItems$[identifier] : '');
  const [initialValuesSet, setInitialValuesSet] = (0, _react.useState)(false);
  const [showOverlay, setShowOverlay] = (0, _react.useState)(showDefaultOverlay ? showDefaultOverlay : false);

  //Set the search items state through the prop items
  (0, _react.useEffect)(() => {
    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
      if ((items === null || items === void 0 ? void 0 : items.length) === 1) {
        setSelectedItems([items[0]]);
        onSelect([items[0]]);
        setShowSelectedItem(true);
      }
    }
  }, [items]);

  //For the initial opening, set initialvalueset to true, so for the multiple select search, the default
  //value is not set again if it exists, everytime the overlay is shown
  (0, _react.useEffect)(() => {
    if (showOverlay) {
      if (!initialValuesSet) {
        setInitialValuesSet(true);
      }
    } else {
      setDepCategory('all');
    }
    if (overlayActive) {
      overlayActive(showOverlay);
    }
  }, [showOverlay]);

  //If the defaultValues prop is populated, set the selected items, when the overlay is opened for the first time
  (0, _react.useEffect)(() => {
    if (initialValuesSet && allowMultipleSelect) {
      var _defaultValues$;
      const itemIds = (_defaultValues$ = defaultValues[0]) === null || _defaultValues$ === void 0 || (_defaultValues$ = _defaultValues$.ids) === null || _defaultValues$ === void 0 ? void 0 : _defaultValues$.split(',');
      const defaultItems = [];
      if ((itemIds === null || itemIds === void 0 ? void 0 : itemIds.length) > 0 && allowMultipleSelect && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0) {
        for (let i = 0; i < (itemIds === null || itemIds === void 0 ? void 0 : itemIds.length); i++) {
          for (let j = 0; j < (items === null || items === void 0 ? void 0 : items.length); j++) {
            var _items$j;
            if (itemIds[i] === ((_items$j = items[j]) === null || _items$j === void 0 ? void 0 : _items$j[idIdentifier])) {
              defaultItems.push(items[j]);
            }
          }
        }
        setSelectedItems(defaultItems);
      }
    }
    if (items.length > 0 && identifierKey.length > 0) {
      for (const keyVal of identifierKey) {
        if (items[0].hasOwnProperty(keyVal === null || keyVal === void 0 ? void 0 : keyVal.toLowerCase())) {
          setIdentifier(keyVal === null || keyVal === void 0 ? void 0 : keyVal.toLowerCase());
        }
      }
    }
  }, [initialValuesSet]);

  //Populate the selected items state if the state is empty and default value prop is populated
  function populateSelectedItems(groupItems, allowMultipleSelect) {
    var _groupItems$ids;
    const itemIds = groupItems === null || groupItems === void 0 || (_groupItems$ids = groupItems.ids) === null || _groupItems$ids === void 0 ? void 0 : _groupItems$ids.split(',');
    const newItems = [];
    if ((itemIds === null || itemIds === void 0 ? void 0 : itemIds.length) > 0 && allowMultipleSelect) {
      for (let i = 0; i < (itemIds === null || itemIds === void 0 ? void 0 : itemIds.length); i++) {
        for (let j = 0; j < (items === null || items === void 0 ? void 0 : items.length); j++) {
          var _items$j2;
          if (itemIds[i] === ((_items$j2 = items[j]) === null || _items$j2 === void 0 ? void 0 : _items$j2[idIdentifier])) {
            newItems.push(items[j]);
          }
        }
      }
      appDispatch({
        type: 'UNSET_MODAL'
      });
      setSelectedItems(newItems);
    } else if (!allowMultipleSelect && (itemIds === null || itemIds === void 0 ? void 0 : itemIds.length) === 1) {
      for (let i = 0; i < (items === null || items === void 0 ? void 0 : items.length); i++) {
        var _items$i;
        if (itemIds[0] === ((_items$i = items[i]) === null || _items$i === void 0 ? void 0 : _items$i[idIdentifier])) {
          appDispatch({
            type: 'UNSET_MODAL'
          });
          handleItemSelect(items[i]);
        }
      }
    }
  }

  //useeffect to handle when selected tags are being removed
  (0, _react.useEffect)(() => {
    if (initialValuesSet) {
      //runs the unselect function if the item is remove when the overlay is hidden for
      //the single select mode
      if (!allowMultipleSelect && !showOverlay && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0) {
        unSelect(selectedItems);
      }

      //runs the onselect, when an item is selected for the first time or changed
      //during the singe select
      if (!allowMultipleSelect && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0) {
        onSelect(selectedItems);
      }

      //runs the onselect function for when items are removed from the picklist when the overlay
      //is hidden
      if (allowMultipleSelect && !showOverlay && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0) {
        onSelect(selectedItems);
      }

      //runs the unselect function for when items fully removed from the picklist when the overlay
      //is hidden
      if (allowMultipleSelect && !showOverlay && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0) {
        setShowSelectedItem(false);
        unSelect(selectedItems);
      }
    }
  }, [selectedItems]);

  //if the prop changes, reset the selected items and don't show any selectiosn
  (0, _react.useEffect)(() => {
    setSelectedItems([]);
    setShowSelectedItem(false);
    unSelect();
  }, [allowMultipleSelect]);
  function handlePinnedAgency(agencyObj, itemId) {
    if (pinnedAgency) {
      for (var i = 0; i < (pinnedAgency === null || pinnedAgency === void 0 ? void 0 : pinnedAgency.length); i++) {
        var _pinnedAgency$i;
        if (((_pinnedAgency$i = pinnedAgency[i]) === null || _pinnedAgency$i === void 0 ? void 0 : _pinnedAgency$i[idIdentifier]) === itemId) {
          const newAgencyList = pinnedAgency.filter(item => (item === null || item === void 0 ? void 0 : item[idIdentifier]) !== itemId);
          setPinnedAgency(newAgencyList);
          return;
        }
      }
    }
    setPinnedAgency(pinnedAgency => [...pinnedAgency, agencyObj]);
    return;
  }

  //function that decides what steps to take when item is selected based on the props
  function handleItemSelect(item) {
    if (allowMultipleSelect) {
      if (!selectedItems.some(obj => (obj === null || obj === void 0 ? void 0 : obj[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]))) {
        //add the item to the selecteditems
        setSelectedItems([...selectedItems, item]);
      } else {
        //Remove the item from the selecteditems if its clicked again
        const indexOfItem = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.findIndex(obj => (obj === null || obj === void 0 ? void 0 : obj[idIdentifier]) === (item === null || item === void 0 ? void 0 : item[idIdentifier]));
        let selectedItemsCopy = JSON === null || JSON === void 0 ? void 0 : JSON.parse(JSON === null || JSON === void 0 ? void 0 : JSON.stringify(selectedItems));
        selectedItemsCopy === null || selectedItemsCopy === void 0 || selectedItemsCopy.splice(indexOfItem, 1);
        setSelectedItems(selectedItemsCopy);
      }
    } else {
      var _selectedItems$2;
      if ((selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0 || (item === null || item === void 0 ? void 0 : item[idIdentifier]) !== ((_selectedItems$2 = selectedItems[0]) === null || _selectedItems$2 === void 0 ? void 0 : _selectedItems$2[idIdentifier])) {
        setSelectedItems([item]);
        setShowSelectedItem(true);
        setShowOverlay(false);
      } else {
        setSelectedItems([]);
        setShowSelectedItem(false);
      }
    }
  }

  //function thats closed when closing the overlay to determine which function should run based on the
  //number of selected items
  function handleItemFunctionCall(selectedItems) {
    if ((selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && allowMultipleSelect) {
      onSelect(selectedItems);
    } else {
      unSelect(selectedItems);
    }
  }
  return (
    /*#__PURE__*/
    // appState.agencies.length || Agencies.length > 1 &&
    _react.default.createElement(_react.default.Fragment, null, appState['modal'] && appState['modal'], /*#__PURE__*/_react.default.createElement(_.StyledMainDiv, {
      className: "main-search-container",
      background: showOverlay ? themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.pane0 : 'null',
      position: showOverlay ? 'fixed' : 'relative',
      height: showOverlay ? '100vh' : null,
      padding: showOverlay ? '1rem' : null,
      zIndex: showOverlay ? 100 : 0
    }, /*#__PURE__*/_react.default.createElement(_.StyledSearchDiv, null, /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/_react.default.createElement(_.SearchBar, {
      items: items,
      query: query,
      setQuery: setQuery,
      identifier: identifier,
      placeholder: placeholder,
      showOverlay: showOverlay,
      idIdentifier: idIdentifier,
      selectedItems: selectedItems,
      setShowOverlay: setShowOverlay,
      setDepCategory: setDepCategory,
      setSelectedItems: setSelectedItems,
      showSelectedItem: showSelectedItem,
      handleItemSelect: handleItemSelect,
      allowMultipleSelect: allowMultipleSelect,
      setShowSelectedItem: setShowSelectedItem
    }), showOverlay && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        right: 0
      }
    }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      color: 'white',
      backgroundColor: themeState === null || themeState === void 0 || (_themeState$currentTh2 = themeState.currentTheme) === null || _themeState$currentTh2 === void 0 ? void 0 : _themeState$currentTh2.dangerColor,
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
      onClick: e => {
        setShowOverlay(false);
        setDepCategory('all');
        handleItemFunctionCall(selectedItems);
        //setShowSelectedItem(false)
      }
    })))), showOverlay && /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/_react.default.createElement(_.SearchOverlay, {
      items: items,
      icons: icons,
      query: query,
      groups: groups,
      identifier: identifier,
      showOverlay: showOverlay,
      depCategory: depCategory,
      idIdentifier: idIdentifier,
      pinnedAgency: pinnedAgency,
      selectedItems: selectedItems,
      setShowOverlay: setShowOverlay,
      setDepCategory: setDepCategory,
      setPinnedAgency: setPinnedAgency,
      setSelectedItems: setSelectedItems,
      handleItemSelect: handleItemSelect,
      allowAlphabetical: allowAlphabetical,
      handlePinnedAgency: handlePinnedAgency,
      allowMultipleSelect: allowMultipleSelect,
      setShowSelectedItem: setShowSelectedItem,
      populateSelectedItems: populateSelectedItems
    }))))
  );
};
exports.Search = Search;