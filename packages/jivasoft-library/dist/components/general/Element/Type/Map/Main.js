"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeMap = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _Map = require("../../../Map");
var _helpers = require("./helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeMap = _ref => {
  let {} = _ref;
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    isEdit,
    masktype,
    value,
    defaultvalue,
    allowmultiplepicklistselections
  } = elementState;
  // useEffect(() => {
  //   console.log('elementState', elementState, defaultvalue)
  // }, [elementState])

  const [locations, setLocations] = (0, _react.useState)(elementState.locations ? elementState.locations : value ? value : defaultvalue ? defaultvalue : []);
  // console.log('locations', locations)
  const [searchQuery, setSearchQuery] = (0, _react.useState)(defaultvalue ? defaultvalue : '');
  const [searchResults, setSearchResults] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (typeof locations == 'object' && locations.length > 0) {
      var _formatLocationForDis2;
      elementDispatch({
        type: 'SET_VALUE',
        value: allowmultiplepicklistselections ? locations === null || locations === void 0 ? void 0 : locations.map(location => {
          var _formatLocationForDis;
          return (_formatLocationForDis = (0, _helpers.formatLocationForDisplay)(location, masktype)) === null || _formatLocationForDis === void 0 ? void 0 : _formatLocationForDis.value;
        }) : (_formatLocationForDis2 = (0, _helpers.formatLocationForDisplay)(locations[0], masktype)) === null || _formatLocationForDis2 === void 0 ? void 0 : _formatLocationForDis2.value
      });
    }
    elementDispatch({
      type: 'SET_VALUES',
      values: {
        locations: locations
      }
    });
  }, [locations]);
  return isEdit ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Map.Map, {
    locations: locations,
    getLocations: locations => setLocations(locations),
    allowMultiple: allowmultiplepicklistselections,
    searchQuery: searchQuery,
    getSearchResults: searchResults => setSearchResults(searchResults)
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, locations && locations.length > 0 ? typeof locations === 'string' ? locations : locations === null || locations === void 0 ? void 0 : locations.map((location, index) => {
    var _location$key, _formatLocationForDis3;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: (_location$key = location.key) !== null && _location$key !== void 0 ? _location$key : index,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, (_formatLocationForDis3 = (0, _helpers.formatLocationForDisplay)(location, masktype)) === null || _formatLocationForDis3 === void 0 ? void 0 : _formatLocationForDis3.display);
  }) : 'No Selections' // Render 'No Selections' if locations is an empty array
  );
};
exports.ElementTypeMap = ElementTypeMap;