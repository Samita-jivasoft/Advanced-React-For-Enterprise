"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialMessageState = void 0;
exports.messageReducer = messageReducer;
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'

const initialMessageState = exports.initialMessageState = {
  messages: []
};
function messageReducer(state, action) {
  switch (action.type) {
    case 'REMOVE_MESSAGE':
      var copyMessages = state.messages;
      var index = copyMessages.findIndex(item => (item === null || item === void 0 ? void 0 : item.id) === (action === null || action === void 0 ? void 0 : action.id));
      //console.log(index)
      if (index !== -1) {
        copyMessages.splice(index, 1);
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: [...state.messages]
      });
    case 'ADD_MESSAGE':
      console.log('Message is added');
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: [...state.messages, action.message]
      });
    case 'CLEAR_MESSAGE':
      if (initialMessageState.messages.length > 0) {
        return _objectSpread(_objectSpread({}, state), {}, {
          messages: []
        });
      } else {
        return _objectSpread({}, state);
      }
    default:
      console.log('message context error');
      return _objectSpread({}, state);
  }
}