"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Element = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _bs = require("react-icons/bs");
var _fa = require("react-icons/fa");
var _Validate = require("./Validate");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Element = props => {
  const {
    datatype,
    masktype,
    AllowPast,
    Format,
    validminimum = 0,
    validmaximum = 200,
    MinCharacters = 0,
    MaxCharacters = 200,
    CodeLength,
    required,
    canedit,
    formelementid,
    defaultvalue,
    Copy,
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props;
  const [percision, setPercision] = (0, _react.useState)(masktype === 'money' ? 2 : 6);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: datatype === 'float' || datatype === 'int' ? 'number' : datatype,
    step: masktype === 'money' ? '0.01' : datatype === 'float' ? '0.000001' : null,
    name: masktype,
    onInput: datatype === 'float' || masktype === 'money' ? e => (0, _Validate.maxCharacters)(e, percision) : null,
    onChange: e => {
      (0, _Validate.handleChange)(e, props, setCompletedRequirements, setRemainingRequirements, percision);
      setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
        value: datatype === 'date' ? new Date(e.target.value).toISOString() : masktype === 'phone' ? e.target.value.substring(0, 16) : e.target.value
      }));
    },
    placeholder: (0, _Validate.placeholder)(props),
    defaultValue: (0, _Validate.defaultValue)(props, percision),
    format: Format,
    min: datatype === 'date' && AllowPast === 0 ? defaultvalue ? new Date(defaultvalue).toISOString().split('T')[0] : new Date().toISOString().split('T')[0] : validminimum,
    max: validmaximum,
    onBlur: masktype === 'money' || datatype === 'float' || datatype === 'int' ? e => (0, _Validate.setZeros)(e, required, datatype, percision, validminimum, formElementValue, setFormElementValue, setCompletedRequirements, setRemainingRequirements) : null,
    onKeyDown: masktype === 'phone' ? e => (0, _Validate.enforceFormat)(e) : datatype === 'int' ? e => (0, _Validate.noDecimal)(e) : null,
    onKeyUp: masktype === 'phone' ? e => (0, _Validate.phoneNumberFormatter)(e) : null,
    required: required,
    disabled: canedit === 0 ? 1 : 0
  }), defaultvalue && (0, _Validate.initValidation)(defaultvalue, props) && remainingRequirements.length === 0 && completedRequirements.length === 0 ? /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null, !defaultvalue && datatype === 'date' && remainingRequirements.length === 0 && completedRequirements.length === 0 ? /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null, required ? remainingRequirements.length === 0 && completedRequirements.length !== 0 ? /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null : remainingRequirements.length === 0 && completedRequirements.length !== 0 || !formElementValue.value ? /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null);
};

// Element.defaultProps = {
//   validminimum: 0,
//   validmaximum: 200,
//   MinCharacters: 0,
//   MaxCharacters: 200
// }
exports.Element = Element;