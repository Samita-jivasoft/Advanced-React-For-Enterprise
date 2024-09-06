"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noDecimal = exports.maxCharacters = exports.isModifierKey = exports.initValidation = exports.handlePaste = exports.handleKeyDown = exports.handleChange = exports.enforceFormat = exports.defaultValue = exports.copyCode = void 0;
exports.phoneNumberFormatter = phoneNumberFormatter;
exports.validatePhoneNumber = exports.validateInt = exports.validateFloat = exports.validateEmail = exports.validateDate = exports.validateCurrency = exports.validateCode = exports.validateBoolean = exports.validPhoneNumber = exports.validCurrency = exports.setZeros = exports.setPercision = exports.placeholder = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initValidation = (defaultvalue, element) => {
  switch (element.masktype || element.datatype) {
    case 'datelist':
      if (element.required === 0) return true;
    case 'email':
      if (validEmail.test(defaultvalue) && defaultvalue.length <= element.validmaximum && defaultvalue.length >= element.validminimum) return true;
      break;
    case 'phone':
      if (validPhoneNumber.test(defaultvalue)) return true;
      break;
    case 'money':
      if (validCurrency.test(defaultvalue) && defaultvalue <= element.validmaximum && defaultvalue >= element.validminimum) return true;
      break;
    case 'string':
      if (defaultvalue && typeof defaultvalue === 'string') return true;
      break;
    case 'int':
      if (defaultvalue && defaultvalue <= element.validmaximum && defaultvalue >= element.validminimum) return true;
      break;
    case 'float':
      var value = defaultvalue.toString();
      if (defaultvalue && defaultvalue <= element.validmaximum && defaultvalue >= element.validminimum && value.includes('.')) return true;
      break;
    case 'boolean':
      if ((defaultvalue === 1 || defaultvalue === 0) && defaultvalue) return true;
      break;
    case 'code':
      if (defaultvalue && defaultvalue.toString().length === element.CodeLength) return true;
      break;
    case 'date':
      return true;
      break;
    case 'picklist':
      return true;
      break;
    default:
      break;
  }
};
exports.initValidation = initValidation;
const handleChange = (event, element, setCompletedRequirements, setRemainingRequirements, percision) => {
  const {
    name,
    value,
    format
  } = event.target;
  const remainingRequirements = [];
  const completedRequirements = [];
  switch (name || element.datatype) {
    case 'email':
      validateEmail(value, element, remainingRequirements, completedRequirements);
      break;
    case 'phone':
      validatePhoneNumber(value, remainingRequirements, completedRequirements);
      break;
    case 'money':
      setPercision(event, percision);
      validateCurrency(value, element, remainingRequirements, completedRequirements);
      break;
    case 'date':
      validateDate(new Date(value).toISOString(), format, element, remainingRequirements, completedRequirements);
      break;
    case 'string':
      validateString(value, element, remainingRequirements, completedRequirements);
      break;
    case 'int':
      if (isNaN(value)) return false;
      validateInt(value, element, remainingRequirements, completedRequirements);
      break;
    case 'code':
      if (isNaN(value)) return false;
      validateCode(value, element, remainingRequirements, completedRequirements);
      break;
    case 'float':
      setPercision(event, percision);
      validateFloat(value, element, remainingRequirements, completedRequirements);
      break;
    case 'boolean':
      validateBoolean(value, element, remainingRequirements, completedRequirements);
      break;
    case 'picklist':
      break;
    default:
      break;
  }
  setCompletedRequirements(completedRequirements);
  setRemainingRequirements(remainingRequirements);
};

/* Generic Fuctions */
exports.handleChange = handleChange;
const defaultValue = (element, percision) => {
  if (element.datatype === 'date') {
    if (element.defaultvalue) return new Date(element.defaultvalue).toISOString().split('T')[0];
    return new Date().toISOString().split('T')[0];
  }
  return element.defaultvalue;
};
exports.defaultValue = defaultValue;
const placeholder = element => {
  if (element.masktype === 'email') return 'example@email.com';
  if (element.masktype === 'phone') return '(XXX) XXX - XXXX';
  if (element.masktype === 'money') return '$0.00';
  if (element.datatype === 'boolean') return 'true or false';
  return !element.masktype ? 'Enter ' + element.label : null;
};
exports.placeholder = placeholder;
const noDecimal = e => {
  if (e.key === '.') {
    e.preventDefault();
  }
};
exports.noDecimal = noDecimal;
const maxCharacters = (e, percision) => {
  let int;
  if (e.target.value.includes('.')) int = e.target.value.substring(0, e.target.value.indexOf('.'));else int = e.target.value;
  if (e.target.value.length > percision + int.length + 1) {
    e.target.value = e.target.value.substring(0, percision + int.length + 1);
  }
};
exports.maxCharacters = maxCharacters;
const setPercision = (e, percision) => {
  const fixed = parseFloat(e.target.value).toFixed(percision).toString();
  if (fixed.length < parseFloat(e.target.value).toString().length) {
    e.target.value = fixed;
  }
};
exports.setPercision = setPercision;
const setZeros = (e, required, datatype, percision, validminimum, formElementValue, setFormElementValue, setCompletedRequirements, setRemainingRequirements) => {
  const remainingRequirements = [];
  const completedRequirements = [];
  let int, dec, addDec;
  if (datatype === 'int') {
    if (!e.target.value && required) {
      //set defaults
      if (validminimum) e.target.value = validminimum;else e.target.value = '0';
    } else {
      //set input
      if (!e.target.value) e.target.value = '';else e.target.value = e.target.value;
    }
  } else {
    if (!e.target.value.includes('.')) {
      if (!e.target.value) {
        int = '0';
        addDec = '.';
        for (let i = 0; i < percision; i++) {
          addDec += '0';
        }
        if (required) {
          if (validminimum) e.target.value = validminimum + addDec;else e.target.value = int + addDec;
        } else e.target.value = '';
      } else {
        int = e.target.value;
        addDec = '.';
        for (let i = 0; i < percision; i++) {
          addDec += '0';
        }
        e.target.value = int + addDec;
      }
    } else {
      int = e.target.value.substring(0, e.target.value.indexOf('.'));
      dec = e.target.value.substring(e.target.value.indexOf('.'), e.target.value.length);
      for (let i = dec.length - 1; i < percision; i++) {
        dec += '0';
      }
      e.target.value = int + dec;
    }
  }
  if (parseInt(e.target.value) >= parseInt(e.target.min) && parseInt(e.target.value) <= parseInt(e.target.max) || !required && !e.target.value) {
    setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
      value: e.target.value,
      isValid: true
    }));
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), ' ', /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + e.target.min + ' to ' + e.target.max), ' '));
  } else {
    setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
      value: e.target.value,
      isValid: false
    }));
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), ' ', /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + e.target.min + ' to ' + e.target.max), ' '));
  }
  setCompletedRequirements(completedRequirements);
  setRemainingRequirements(remainingRequirements);
};

/* Valdiate Email */
exports.setZeros = setZeros;
const validEmail = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateEmail = (value, element, remainingRequirements, completedRequirements) => {
  validEmail.test(value) ? completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid'), ' ')) : remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaTimes, null), ' ', /*#__PURE__*/React.createElement("b", null, 'Enter a valid email in the example@email.com format'), ' '));
  var min = element.validminimum || 0;
  var max = element.validmaximum || 200;
  if (value.length <= max && value.length >= min) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, min + ' to ' + max + ' characters'), ' '));
  } else remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, min + ' to ' + max + ' characters'), ' '));
};

/* Valdiate Phone Number */
exports.validateEmail = validateEmail;
const validPhoneNumber = exports.validPhoneNumber = RegExp(/^\(?\d{3}\)?[\s]{0,2}[-]?\d{3}[\s]{0,2}[-]?[\s]{0,2}\d{4,5}$/);
const validatePhoneNumber = (value, remainingRequirements, completedRequirements) => {
  validPhoneNumber.test(value.substring(0, 16)) ? completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid Phone Number'), ' ')) : remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Invalid Phone Number'), ' '));
};
/* Format Phone Number */
exports.validatePhoneNumber = validatePhoneNumber;
function phoneNumberFormatter(event) {
  if (isModifierKey(event)) return;
  const target = event.target;
  const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);
  if (input.length > 6) {
    target.value = "(".concat(zip, ") ").concat(middle, " - ").concat(last);
  } else if (input.length > 3) {
    target.value = "(".concat(zip, ") ").concat(middle);
  } else if (input.length > 0) {
    target.value = "(".concat(zip);
  }
}
// Input must be of a valid number format or a modifier key, and not longer than ten digits
const enforceFormat = event => {
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};
/* Helper Functions for phoneNumberFormatter and enforceFormat*/
exports.enforceFormat = enforceFormat;
const isNumericInput = event => {
  const key = event.keyCode;
  return key >= 48 && key <= 57 ||
  // Allow number line
  key >= 96 && key <= 105 // Allow number pad
  ;
};
const isModifierKey = event => {
  const key = event.keyCode;
  return event.shiftKey === true || key === 35 || key === 36 ||
  // Allow Shift, Home, End
  key === 8 || key === 9 || key === 13 || key === 46 ||
  // Allow Backspace, Tab, Enter, Delete
  key > 36 && key < 41 ||
  // Allow left, up, right, down
  // Allow Ctrl/Command + A,C,V,X,Z
  (event.ctrlKey === true || event.metaKey === true) && (key === 65 || key === 67 || key === 86 || key === 88 || key === 90);
};

/* Valdiate Date */
exports.isModifierKey = isModifierKey;
const validateDate = (value, format, element, remainingRequirements, completedRequirements) => {
  if (value) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid Date')));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Invalid Date')));
  }
};

/* Vaidate Strings */
exports.validateDate = validateDate;
const validateString = (value, element, remainingRequirements, completedRequirements) => {
  var min = element.validminimum || 0;
  var max = element.validmaximum || 200;
  if (value.length <= max && value.length >= min) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, min + ' to ' + max + ' characters'), ' '));
  } else remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, min + ' to ' + max + ' characters'), ' '));
  if (typeof value === 'string' && value) completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid'), ' '));else remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Field Empty'), ' '));
};

/* Validate Integers */
const validateInt = (value, element, remainingRequirements, completedRequirements) => {
  var min = element.validminimum || 0;
  var max = element.validmaximum || 200;
  if (value <= max && value >= min || !element.required && !value) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  }
};

/* Validate Floats */
exports.validateInt = validateInt;
const validateFloat = (value, element, remainingRequirements, completedRequirements) => {
  var min = element.validminimum || 0;
  var max = element.validmaximum || 200;
  if (value <= max && value >= min && value || !element.required && !value) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  }
};

/* Valdiate Currency */
exports.validateFloat = validateFloat;
const validCurrency = exports.validCurrency = RegExp(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/);
const validateCurrency = (value, element, remainingRequirements, completedRequirements) => {
  var min = element.validminimum || 0.0;
  var max = element.validmaximum || 200.0;
  if (value <= max && value >= min || !element.required && !value) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid range is ' + min + ' to ' + max), ' '));
  }
};

/* Validate Booleans*/
exports.validateCurrency = validateCurrency;
const validateBoolean = (value, element, remainingRequirements, completedRequirements) => {
  if (value === '1' || value === '0') {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid Boolean'), ' '));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid Boolean'), ' '));
  }
};

/* Validate Codes */
exports.validateBoolean = validateBoolean;
const handleKeyDown = (e, index, otp, CodeLength, setOtp, copy) => {
  copy('');
  const {
    nextSibling,
    previousSibling
  } = e.target;
  const pressedKey = e.key;
  switch (pressedKey) {
    case 'Backspace':
    case 'Delete':
      {
        e.preventDefault();
        setOtp([...otp.map((d, idx) => idx === index ? ' ' : d)]);
        previousSibling && previousSibling.focus();
        break;
      }
    case 'ArrowLeft':
      {
        e.preventDefault();
        previousSibling.focus();
        break;
      }
    case 'ArrowRight':
      {
        e.preventDefault();
        nextSibling.focus();
        break;
      }
    default:
      {
        // Ignore all special keys if it is not numeric
        if (/^[0-9]$/i.test(e.key)) {
          e.preventDefault();
          setOtp([...otp.map((d, idx) => idx === index ? e.key : d)]);
          if (index < CodeLength - 1) nextSibling.focus();
        }
        break;
      }
  }
};
exports.handleKeyDown = handleKeyDown;
const handlePaste = (e, otp, setOtp, CodeLength, setError) => {
  e.preventDefault();
  const pastedData = e.clipboardData.getData('text/plain').trim().split('');
  if (pastedData) {
    let nextFocusIndex = 0;
    const updatedOTPValues = [...otp];
    // console.log('len' + pastedData.length)
    if (pastedData.length < CodeLength) setError('ERROR: Inlivad Code\n');
    updatedOTPValues.forEach((val, index) => {
      // console.log('len' + pastedData.length)
      // console.log('CodeLength' + CodeLength)
      if (index <= CodeLength) {
        const changedValue = pastedData.shift() || val;
        // console.log(changedValue)
        if (changedValue) {
          updatedOTPValues[index] = changedValue;
          nextFocusIndex = index;
        }
      }
    });
    setOtp(updatedOTPValues);
  }
};
exports.handlePaste = handlePaste;
const validateCode = (otp, codeLength, setCompletedRequirements, setRemainingRequirements) => {
  const remainingRequirements = [];
  const completedRequirements = [];
  var x = otp.filter(function (str) {
    return /\S/.test(str);
  });
  if (x.length === codeLength) {
    completedRequirements.push(/*#__PURE__*/React.createElement(_Main.CompletedRecsStyled, null, ' ', /*#__PURE__*/React.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/React.createElement("b", null, 'Valid code'), ' '));
  } else {
    remainingRequirements.push(/*#__PURE__*/React.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/React.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/React.createElement("b", null, 'Fields should not be empty '), ' '));
  }
  setCompletedRequirements(completedRequirements);
  setRemainingRequirements(remainingRequirements);
};
exports.validateCode = validateCode;
const copyCode = (event, otp, codeLength, copy) => {
  otp = otp.filter(function (str) {
    return /\S/.test(str);
  });
  if (otp.length !== codeLength) {
    copy('Code could not be copied');
  } else {
    navigator.clipboard.writeText(otp.join(''));
    return copy('Copied Code! ' + otp.join(''));
  }
};
exports.copyCode = copyCode;