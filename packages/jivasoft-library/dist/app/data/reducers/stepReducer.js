"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialStepState = void 0;
exports.stepReducer = stepReducer;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialStepState = exports.initialStepState = {
  stepdata: null,
  stepstate: null,
  stepstatus: null,
  steptype: null,
  stepid: null,
  workflowid: null
};
function stepReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_STEP_TYPE':
      return _objectSpread(_objectSpread({}, state), {}, {
        steptype: action.steptype
      });
    case 'CLEAR_STEP_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        stepdata: null,
        stepstatus: null,
        steptype: null
      });
    case 'MODIFY_STEP_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        stepdata: action.stepdata
      });
    case 'MODIFY_STEP_STATUS':
      return _objectSpread(_objectSpread({}, state), {}, {
        stepstatus: action.stepstatus
      });
    case 'MODIFY_STEP_AND_WORKFLOW_IDS':
      return _objectSpread(_objectSpread({}, state), {}, {
        stepid: action.stepid,
        workflowid: action.workflowid
      });
    default:
      return _objectSpread({}, state);
  }
}