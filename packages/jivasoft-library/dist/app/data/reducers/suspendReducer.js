"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialSuspendState = void 0;
exports.suspendReducer = suspendReducer;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialSuspendState = exports.initialSuspendState = {
  suspendState: []
};
function suspendReducer(state, action) {
  switch (action.type) {
    case 'PUSH':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          suspendState: [...state.suspendState, action.payload]
        });
      }
    case 'POP':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          suspendState: state.suspendState.filter((_, i) => i != state.suspendState.length - 1)
        });
      }
    case 'REMOVE_STATE':
      {
        var index = action.payload;
        var copyState = state.suspendState;
        copyState.splice(action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          suspendState: copyState
        });
      }
    case 'RETURN_LAST':
      {}
    case 'DELETE_ALL':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          suspendState: []
        });
      }
    default:
      return initialSuspendState;
  }
}