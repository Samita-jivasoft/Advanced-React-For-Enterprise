"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReducer = mapReducer;
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function mapReducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return _objectSpread(_objectSpread({}, state), action.props);
    case 'SET_IP':
      return _objectSpread(_objectSpread({}, state), {}, {
        ip: action.ip
      });
    case 'SET_IP_LOCATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        ipLocation: action.location
      });
    case 'SET_CURRENT_LOCATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentLocation: action.currentLocation
      });
    case 'SET_LOCATIONS':
      return _objectSpread(_objectSpread({}, state), {}, {
        locations: action.locations
      });
    case 'SET_MARKERS':
      return _objectSpread(_objectSpread({}, state), {}, {
        markers: action.markers
      });
    case 'ADD_LOCATION':
      let updatedLocations;
      if (!state.allowMultiple) {
        // If allowMultiple is false, replace the existing locations with the new one
        updatedLocations = [action.location];
      } else {
        // If allowMultiple is true, append the new location to the existing locations
        updatedLocations = [...state.locations, action.location];
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        locations: updatedLocations
      });
    case 'SET_POSITION':
      return _objectSpread(_objectSpread({}, state), {}, {
        position: action.position
      });
    case 'SET_DISABLE_MAP':
      return _objectSpread(_objectSpread({}, state), {}, {
        disableMap: action.disable
      });
    case 'SET_SEARCH_QUERY':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchQuery: action.searchQuery
      });
    case 'SET_SEARCH_RESULTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchResults: action.searchResults
      });
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.searchTerm
      });
    case 'SET_PLACEHOLDER':
      return _objectSpread(_objectSpread({}, state), {}, {
        placeholder: action.placeholder
      });
    default:
      return state;
  }
}