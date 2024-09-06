"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = void 0;
exports.listsReducer = listsReducer;
require("core-js/modules/web.dom-collections.iterator.js");
var _HelperFunctions = require("../HelperFunctions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialState = exports.initialState = {
  lists: [],
  idcolumns: [],
  columns: [],
  searchInput: ''
};
function listsReducer(state, action) {
  const currList = [...state.lists];
  // console.log(currList.map(i => i.crudlistid))
  switch (action.type) {
    case 'SET_SEARCH_INPUT':
      state['searchInput'] = action.input;
      return _objectSpread({}, state);
    case 'INITIALIZE_DATA':
      state['lists'] = action.currentLists;
      state['idcolumns'] = action.currentIdColumns;
      state['columns'] = action.currentColumns;
      return _objectSpread({}, state);
    case 'UPDATE_LISTS':
      state['lists'] = action.currentLists;
      return _objectSpread({}, state);
    case 'REMOVE_FROM_LIST':
      const fromList = currList.find(id => id.crudlistid === action.listid).crudlistitems;
      action.selected.map(i => {
        if (fromList.findIndex(x => (0, _HelperFunctions.getIdentifier)(x, state.idcolumns) === (0, _HelperFunctions.getIdentifier)(i, state.idcolumns)) !== -1) {
          fromList.splice(fromList.findIndex(x => (0, _HelperFunctions.getIdentifier)(x, state.idcolumns) === (0, _HelperFunctions.getIdentifier)(i, state.idcolumns)), 1);
        }
      });
      const updateRemoved = currList.map(obj => {
        if (obj.crudlistid === action.listid) {
          return _objectSpread(_objectSpread({}, obj), {}, {
            crudlistitems: fromList
          });
        }
        return obj;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        lists: updateRemoved
      });
    case 'ADD_TO_LIST':
      if (state['lists'].length > 1) {
        // console.log(currList)
        console.log(currList.find(id => id.crudlistid === action.moveto.crudcanmovetoid));
        const toList = currList.find(id => id.crudlistid === action.moveto.crudcanmovetoid).crudlistitems;
        const updatedToList = toList.concat(action.selected);
        const newLists = currList.map(obj => {
          if (obj.crudlistid === action.moveto.crudcanmovetoid) {
            return _objectSpread(_objectSpread({}, obj), {}, {
              crudlistitems: updatedToList
            });
          }
          return obj;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          lists: newLists
        });
      }
      return state;
    case 'UPDATE_COLUMNS':
      state['columns'] = action.currentColumns;
      return _objectSpread({}, state);
    default:
      return state;
  }
}