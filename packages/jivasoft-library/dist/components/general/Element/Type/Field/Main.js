"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeField = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _bs = require("react-icons/bs");
var _fa = require("react-icons/fa");
var _helpers = require("./helpers");
var _ElementContext = require("../../data/ElementContext");
var _validation = require("./validation");
var _styles = require("./styles");
var _handlers = require("./handlers");
var _handlers2 = require("../../handlers");
var _helpers2 = require("../../helpers");
var _Display = require("./Display");
var _Map = require("./../../../Map");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeField = _ref => {
  var _masktype$toLowerCase3;
  let {} = _ref;
  //const {requirementsMeet, setRequirementsMeet} = props;
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    value,
    required,
    percision,
    precision,
    format,
    salt
  } = elementState;
  // console.log('elementState', elementState)
  const [fieldValue, setFieldValue] = (0, _react.useState)(value);
  const [valid, setValid] = (0, _react.useState)(false);
  const [currentFormat, setCurrentFormat] = (0, _react.useState)();
  let formats = Array.isArray(format) ? format : [format];
  (0, _react.useEffect)(() => {
    setValid((0, _helpers2.isValid)(remainingRequirements));
  }, [remainingRequirements]);
  // const regexString = format.replace(/#/g, '\\d').replace(/-/g, '\\-');
  // const regex = new RegExp(`^${regexString}$`);

  (0, _react.useEffect)(() => {
    if (format && value) {
      // Apply the mask to the raw input value
      const cleanedValue = value.replace(/\D/g, ''); // Remove any non-digit characters
      const formattedValue = (0, _handlers2.enforceCustomFormat)(cleanedValue, format, value.length);
      setCurrentFormat(formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.currentFormat);
      elementDispatch({
        type: 'SET_VALUE',
        value: formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue
      });
    }
  }, []);
  function replaceChar10(value) {
    var _masktype$toLowerCase;
    return masktype !== null && masktype !== void 0 && (_masktype$toLowerCase = masktype.toLowerCase()) !== null && _masktype$toLowerCase !== void 0 && _masktype$toLowerCase.includes('textarea') ? value.replaceAll('char(10)', '\n') : value;
  }
  function replaceNewLineChar(value) {
    var _masktype$toLowerCase2;
    return masktype !== null && masktype !== void 0 && (_masktype$toLowerCase2 = masktype.toLowerCase()) !== null && _masktype$toLowerCase2 !== void 0 && _masktype$toLowerCase2.includes('textarea') ? value.replaceAll('\n', 'char(10)') : value;
  }
  const [showPassword, setShowPassword] = (0, _react.useState)(false);
  const FieldType = masktype === 'textarea' ? _styles.TextArea : _styles.InputField;
  if (remainingRequirements) return isEdit ? /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    className: "INPUT-CONTAINER"
  }, (formats === null || formats === void 0 ? void 0 : formats.length) > 1 && currentFormat && value && /*#__PURE__*/_react.default.createElement(_styles.CurrentFormatContainerStyled, null, currentFormat), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
    className: "INPUT-WRAPPER"
  }, /*#__PURE__*/_react.default.createElement(FieldType, {
    className: "INPUT-FIELD",
    valid: valid,
    masktype: masktype,
    placeholder: (0, _helpers.placeholder)(elementState),
    type: (0, _helpers.getInputType)(datatype, masktype, showPassword),
    value: replaceChar10(value)
    //VALUE CHANGE
    ,
    onChange: e => {
      if (format) {
        // Apply the mask to the raw input value
        const {
          value,
          selectionStart
        } = e.target;
        const cleanedValue = value; // Remove any non-digit characters
        const formattedValue = (0, _handlers2.enforceCustomFormat)(cleanedValue, format, selectionStart);
        setCurrentFormat(formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.currentFormat);
        elementDispatch({
          type: 'SET_VALUE',
          value: formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue
        });
      } else {
        if (masktype === 'signature') {
          e.target.value = (0, _handlers.signatureFormatter)(e);
        }
        elementDispatch({
          type: 'SET_VALUE',
          value: replaceNewLineChar(e.target.value)
        });
      }
    }
    //CUSTOM HANDLERS
    ,
    onBlur: e => {
      masktype === 'phone' && (0, _handlers.phoneNumberFormatter)(e);
      (masktype === 'money' || datatype === 'float' || datatype === 'int') && (0, _handlers.setZeros)(e, required, datatype, percision ? percision : precision ? precision : masktype == 'money' ? 2 : 6, validminimum);
      if (masktype === 'password') {
        elementDispatch({
          type: 'SET_HASH',
          hash: (0, _handlers.passwordHashFormatter)(e.target.value, salt)
        });
      }
      elementDispatch({
        type: 'SET_VALUE',
        value: replaceNewLineChar(e.target.value)
      });
    },
    onKeyDown: e => {
      masktype === 'phone' && (0, _handlers.enforceFormat)(e);
      datatype === 'int' && (0, _handlers.noDecimal)(e);
      elementDispatch({
        type: 'SET_VALUE',
        value: replaceNewLineChar(e.target.value)
      });
    },
    onKeyUp: e => {
      masktype === 'phone' && (0, _handlers.phoneNumberFormatter)(e);
      elementDispatch({
        type: 'SET_VALUE',
        value: replaceNewLineChar(e.target.value)
      });
    }
    // maxlength={maxCharacters}
  }), /*#__PURE__*/_react.default.createElement(_styles.InnerWrapper, {
    className: "INNER-WRAPPER",
    onClick: e => e.stopPropagation(),
    valid: valid
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '10px',
      display: 'flex',
      cursor: 'pointer'
    }
  }, masktype == 'password' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showPassword ? /*#__PURE__*/_react.default.createElement(_fa.FaEyeSlash, {
    onClick: () => setShowPassword(!showPassword)
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaEye, {
    onClick: () => setShowPassword(!showPassword)
  })))), (masktype === null || masktype === void 0 || (_masktype$toLowerCase3 = masktype.toLowerCase()) === null || _masktype$toLowerCase3 === void 0 ? void 0 : _masktype$toLowerCase3.includes('location')) && /*#__PURE__*/_react.default.createElement(_Map.Map, null)) : /*#__PURE__*/_react.default.createElement(_Display.ElementTypeFieldDisplay, {
    className: "field-display"
  });
  // return (
  //   <InputContainerStyled
  //   isEdit={isEdit}
  //     value={value}
  //     type={'string'}
  //     placeholder={placeholder(elementState)}
  //     onInput={e => {
  //       //update context's value property with each keystroke
  //       elementDispatch({ type: 'SET_VALUE', value: e.target.value })
  //     }}

  //     onKeyDown={()=>{
  //       // console.log("hello");

  //     }}

  //     onKeyUp={
  //       masktype === 'phone' ? e => phoneNumberFormatter(e) : null
  //     }
  //     disabled={isEdit === 0 ? 1 : 0}
  //   />
  // )
};
exports.ElementTypeField = ElementTypeField;
{
  /* {defaultvalue &&
        initValidation(defaultvalue, props) &&
        remainingRequirements.length === 0 &&
        completedRequirements.length === 0 ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null}
      {!defaultvalue &&
        datatype === 'date' &&
        remainingRequirements.length === 0 &&
        completedRequirements.length === 0 ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null}
      {required ? (
        remainingRequirements.length === 0 &&
          completedRequirements.length !== 0 ? (
          <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
        ) : null
      ) : (remainingRequirements.length === 0 &&
        completedRequirements.length !== 0) ||
        !formElementValue.value ? (
        <FaCheckCircle size={20} style={{ color: 'green' }}></FaCheckCircle>
      ) : null} */
}
// ElementTypeField.defaultProps = {}