"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeElement = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _components = require("@jivasoft/jivasoft-lib/dist/components");
var _react = require("react");
var _fa = require("react-icons/fa");
var _Validate = require("./Validate");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib'
const CodeElement = props => {
  const {
    CodeLength,
    required,
    defaultvalue,
    datatype,
    masktype,
    canedit,
    Copy,
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props;
  var codeDefault;
  const [strCode, setStrCode] = (0, _react.useState)(defaultvalue ? codeDefault = defaultvalue.toString().split('') : new Array(CodeLength).fill(''));
  const [copied, copy] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    (0, _Validate.validateCode)(strCode, CodeLength, setCompletedRequirements, setRemainingRequirements);
    setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
      value: strCode.toString().replace(/,/g, '').replace(/\s/g, '')
    }));
  }, [strCode]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      // border:'2px solid red',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, strCode.map((data, index) => {
    return /*#__PURE__*/React.createElement("input", {
      style: {
        width: '28px'
      },
      className: "otp-field",
      type: datatype,
      name: masktype
      // defaultValue={data}
      ,
      maxLength: "1",
      key: index,
      value: data,
      onFocus: e => e.target.select(),
      onChange: e => (0, _Validate.handleChange)(e, null, setCompletedRequirements, setRemainingRequirements, null),
      onPaste: e => (0, _Validate.handlePaste)(e, strCode, setStrCode, CodeLength),
      onKeyDown: e => (0, _Validate.handleKeyDown)(e, index, strCode, CodeLength, setStrCode, copy),
      disabled: canedit === 0 ? 1 : 0
    });
  }), remainingRequirements.length === 0 && completedRequirements.length !== 0 ? /*#__PURE__*/React.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null, !required && strCode.toString().replace(/\s/g, '') === new Array(CodeLength).fill('').toString() ? /*#__PURE__*/React.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: 'green'
    }
  }) : null), Copy === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100px'
    }
  }, /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    onClick: e => (0, _Validate.copyCode)(e, strCode, CodeLength, copy),
    text: 'Copy Code',
    color: 'black',
    backgroundColor: 'white'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, copied)) : null);
};
exports.CodeElement = CodeElement;