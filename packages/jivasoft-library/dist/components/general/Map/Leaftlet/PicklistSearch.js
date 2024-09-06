"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PicklistSearch = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Picklist = require("../../Picklist");
var _ErrorBoundary = require("../../ErrorBoundary");
var _BasicLocationSearch = require("../BasicLocationSearch");
var _styles = require("./styles");
var _helpers = require("./helpers");
var _data = require("../data");
var _helpers2 = require("../helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PicklistSearch = props => {
  const {
    searchRef,
    map
  } = props;
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    placeholder,
    searchResults,
    searchQuery,
    locations,
    allowMultiple
  } = mapState;
  const handleClickedItem = item => {
    if (Number.isInteger(item.osm_id)) {
      console.log('in validation', item);
      // handleResultClick(item)
      (0, _helpers2.handleResultClick)(item, locations, mapDispatch, allowMultiple);
    } else {
      console.log('here', item);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.StyledSearch, {
    ref: searchRef,
    onMouseEnter: () => {
      (0, _helpers.disableMapInteractions)(map);
      mapDispatch({
        type: 'SET_DISABLE_MAP',
        disable: true
      });
    },
    onClick: () => {
      mapDispatch({
        type: 'SET_DISABLE_MAP',
        disable: true
      });
      (0, _helpers.disableMapInteractions)(map);
    }
  }, /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, {
    FallbackComponent: () => /*#__PURE__*/_react.default.createElement(_BasicLocationSearch.BasicLocationSearch, null)
  }, /*#__PURE__*/_react.default.createElement(_Picklist.Picklist, {
    placeholder: placeholder ? placeholder : 'Search for locations'
    // disable={false}
    ,
    items: searchResults,
    searchTerm: searchQuery,
    identifier: 'place_id',
    allowSelections: false,
    searchKeys: ['display_name'],
    showFields: ['display_name', 'distance'],
    onChange: value => {
      console.log('value', value);
      mapDispatch({
        type: 'SET_SEARCH_QUERY',
        searchQuery: value
      });
    },
    onClick: handleClickedItem,
    closeOnSelected: true
  })));
};
exports.PicklistSearch = PicklistSearch;