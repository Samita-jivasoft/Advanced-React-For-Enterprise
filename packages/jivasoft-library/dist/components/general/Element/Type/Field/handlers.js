"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noDecimal = exports.isModifierKey = exports.enforceFormat = void 0;
exports.passwordHashFormatter = passwordHashFormatter;
exports.phoneNumberFormatter = phoneNumberFormatter;
exports.signatureFormatter = exports.setZeros = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Input must be of a valid number format or a modifier key, and not longer than ten digits
const enforceFormat = event => {
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};
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
exports.isModifierKey = isModifierKey;
const noDecimal = e => {
  if (e.key === '.') {
    e.preventDefault();
  }
};

//
exports.noDecimal = noDecimal;
const signatureFormatter = event => {
  const capitalizedValue = event.target.value.replace(/\b\w/g, char => char.toUpperCase());
  return capitalizedValue;
};
exports.signatureFormatter = signatureFormatter;
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
function passwordHashFormatter(password, salt) {
  if (salt) {
    var hash = _cryptoJs.default.SHA256(password + salt);
    return hash === null || hash === void 0 ? void 0 : hash.toString();
  } else {
    return password;
  }
}
const setZeros = (e, required, datatype, precision, validminimum
// elementDispatch
// formElementValue,
// setFormElementValue,
// setCompletedRequirements,
// setRemainingRequirements
) => {
  // elementDispatch({type:'RESET_REQUIREMENTS'})

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
        for (let i = 0; i < precision; i++) {
          addDec += '0';
        }
        if (required) {
          if (validminimum) e.target.value = validminimum + addDec;else e.target.value = int + addDec;
        } else e.target.value = '';
      } else {
        int = e.target.value;
        addDec = '.';
        for (let i = 0; i < precision; i++) {
          addDec += '0';
        }
        e.target.value = int + addDec;
      }
    } else {
      int = e.target.value.substring(0, e.target.value.indexOf('.'));
      dec = e.target.value.substring(e.target.value.indexOf('.'), e.target.value.length);
      for (let i = dec.length - 1; i < precision; i++) {
        dec += '0';
      }
      while (dec.length - 1 > precision) {
        dec = dec.slice(0, -1); // Remove the last character from the string
      }
      e.target.value = int + dec;
    }
  }
};
exports.setZeros = setZeros;