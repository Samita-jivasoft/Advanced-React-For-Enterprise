"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementReducer = elementReducer;
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function elementReducer(state, action) {
  switch (action.type) {
    case 'INIT_ELEMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        label: action.label,
        canedit: action.canedit
      });
    case 'TOGGLE_ISEDIT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isEdit: action.isEdit
      });
    case 'TOGGLE_ISREVIEW':
      return _objectSpread(_objectSpread({}, state), {}, {
        isReview: action.isReview
      });
    case 'SET_REQUIREMENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        remainingRequirements: action.requirements
      });
    case 'ADD_REQUIREMENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        remainingRequirements: [...state.remainingRequirements, ...action.requirements]
      });
    case 'RESET_REQUIREMENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        remainingRequirements: []
      });
    case 'SET_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        value: action.value
      });
    case 'SET_TEXTAREAVALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        textareavalue: action.textareavalue
      });
    case 'SET_DEFAULTVALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        defaultvalue: action.defaultvalue
      });
    case 'SET_OLDVALUES':
      return _objectSpread(_objectSpread({}, state), action.values);
    case 'SET_VALUES':
      return _objectSpread(_objectSpread({}, state), action.values);
    case 'SET_ACTION':
      return _objectSpread(_objectSpread({}, state), {}, {
        action: action.action
      });
    case 'SET_HASH':
      return _objectSpread(_objectSpread({}, state), {}, {
        hash: action.hash
      });
    case 'SET_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        elementmodal: action.elementmodal
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