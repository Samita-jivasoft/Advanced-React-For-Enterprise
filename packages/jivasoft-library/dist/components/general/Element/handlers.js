"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enforceCustomFormat = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
const enforceCustomFormat = (value, formatOrFormats, cursorPosition) => {
  const isPipeDelimitedString = typeof formatOrFormats === 'string' && formatOrFormats.includes('|');
  const formats = isPipeDelimitedString ? formatOrFormats.split('|') : [formatOrFormats];
  const sortedFormats = [...formats].sort((a, b) => a.length - b.length);
  let bestFit = {
    formattedValue: "",
    score: -1,
    format: ""
  };
  sortedFormats.forEach(format => {
    let formattedValue = "";
    let valueIndex = 0;
    let formatIndex = 0;
    let score = 0;
    while (valueIndex < value.length && formatIndex < format.length) {
      const formatChar = format[formatIndex];
      const valueChar = value[valueIndex];
      if (formatChar === '#') {
        if (/\d/.test(valueChar)) {
          // Check if the character is a digit
          formattedValue += valueChar;
          score++;
        } else {
          // Skip non-digit characters
          valueIndex++;
          continue;
        }
        valueIndex++;
        formatIndex++;
      } else {
        if (valueChar === formatChar) {
          // User input matches the delimiter, use it
          formattedValue += valueChar;
          valueIndex++;
        } else if (formattedValue.length === formatIndex) {
          // Add delimiter if it's not manually entered
          formattedValue += formatChar;
        }
        formatIndex++;
      }
    }
    if (score > bestFit.score) {
      bestFit = {
        formattedValue,
        score,
        format
      };
    }
  });

  // Adjust cursor position to stay within bounds
  cursorPosition = Math.min(cursorPosition, bestFit.formattedValue.length);
  return {
    formattedValue: bestFit.formattedValue,
    currentFormat: bestFit.format,
    cursorPosition
  };
};
exports.enforceCustomFormat = enforceCustomFormat;