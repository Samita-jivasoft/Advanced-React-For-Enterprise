"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listReducer = listReducer;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function listReducer(state, action) {
  switch (action.type) {
    // case 'INITIALIZE_DATA':
    //   state['showList'] = action.showList
    //   state['items'] = action.items
    //   state['selectedItems'] = action.selectedItems
    //   return { ...state }
    case 'INITIALIZE_DATA':
      return _objectSpread(_objectSpread({}, state), action.props);
    case 'SET_ITEMS_LIST':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items
      });
    case 'SET_SHOW_LIST':
      return _objectSpread(_objectSpread({}, state), {}, {
        showList: action.items
      });
    case 'SET_SELECTED_ITEMS':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItems: action.items
      });
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.searchTerm
      });
    case 'SET_ONFOCUS':
      return _objectSpread(_objectSpread({}, state), {}, {
        focus: action.focus
      });
    case 'SET_PLACEHOLDER':
      return _objectSpread(_objectSpread({}, state), {}, {
        placeholder: action.placeholder
      });
    default:
      return state;
  }
}