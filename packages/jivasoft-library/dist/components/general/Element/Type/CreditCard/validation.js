"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreditCardValidation = getCreditCardValidation;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _helpers = require("../../helpers");
const validateFormat = (inputValue, format) => {
  const isPipeDelimitedString = typeof format === 'string' && format.includes('|');
  const formats = isPipeDelimitedString ? format.split('|') : [format];
  // Remove any non-digit characters from the input value
  const cleanedValue = inputValue.replace(/\D/g, "");
  for (const format of formats) {
    let valueIndex = 0;
    let isValid = true;

    // Loop through each character in the format and check if it matches the input value
    for (let i = 0; i < format.length; i++) {
      const formatChar = format[i];
      if (formatChar === "#") {
        if (!/\d/.test(cleanedValue[valueIndex])) {
          isValid = false;
          break;
        }
        valueIndex++;
      } else if (cleanedValue[valueIndex - 1] === "-" && formatChar === "-") {
        continue;
      } else if (formatChar === "-") {
        if (inputValue[i] !== formatChar) {
          isValid = false;
          break;
        }
      }
    }

    // Check if there are any extra characters in the cleaned value beyond the format length
    if (cleanedValue.slice(valueIndex).length > 0) {
      isValid = false;
    }
    if (isValid) {
      return false; // Return false when the input value matches the format
    }
  }
  return (formats === null || formats === void 0 ? void 0 : formats.length) === 1 ? "Must be ".concat(formats[0]) : "Must be one of ".concat(formats.join(",  "));
};
function getCreditCardValidation(_ref) {
  let {
    datatype,
    mincharacters,
    maxcharacters,
    validminimum,
    validmaximum,
    masktype,
    value
  } = _ref;
  switch (value === null || value === void 0 ? void 0 : value[0]) {
    case '3':
      return validateFormat(value, "####-######-#####");
    default:
      return validateFormat(value, "####-####-####-####");
      break;
  }
}