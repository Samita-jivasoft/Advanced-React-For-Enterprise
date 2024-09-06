"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormProps = getFormProps;
exports.getLayout = getLayout;
exports.getLayoutProps = getLayoutProps;
exports.getMessageProps = getMessageProps;
require("core-js/modules/es.object.assign.js");
var _layout = require("./layout");
var _react = _interopRequireDefault(require("react"));
var _helpers = require("./layout/Message/helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function getLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_layout.Form, _extends({
    className: 'layout-container'
  }, props));
}
function getMessageProps(props) {
  let {
    label
  } = props;
  // if (label) {
  //   props = { ...props, label: 'Message' }
  // }
  return props;
}
function getLayoutProps(props) {
  let {
    layout,
    elements,
    label,
    formElements
  } = props;
  let newProps;

  //consolidate elements

  //fix labels
  newProps = _objectSpread(_objectSpread({}, props), {}, {
    elements: formElements ? formElements : elements ? elements : [],
    label: label ? (0, _helpers.Capitalize)(label) : label
  });
  switch (layout) {
    case 'message':
      newProps = getMessageProps(newProps);
    default:
      return newProps;
  }
  return newProps;
}
function getFormProps(props) {
  console.log('props', props);
  let {
    layout,
    elements,
    label,
    formElements
  } = props;
  const formProps = {
    // elements: 
  };
  return formProps;
}