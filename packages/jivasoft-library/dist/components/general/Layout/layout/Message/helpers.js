"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capitalize = Capitalize;
exports.formatToSentenceCase = formatToSentenceCase;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.trim.js");
function formatToSentenceCase(inputString) {
  if (typeof inputString !== 'string') {
    return '';
  }
  const trimmedString = inputString.trim();
  if (trimmedString === '') {
    return '';
  }

  // Capitalize the first letter
  const formattedString = trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);

  // Check if the string ends with sentence-ending punctuation
  if (/[.!?]$/.test(formattedString)) {
    return formattedString;
  }

  // Check if the string ends with a question mark
  if (formattedString.endsWith('?')) {
    return formattedString;
  }

  // If neither sentence-ending punctuation nor question mark, add a period
  return formattedString + '.';
}
function Capitalize(inputString) {
  if (typeof inputString !== 'string') {
    return '';
  }
  const trimmedString = inputString.trim();
  if (trimmedString === '') {
    return '';
  }

  // Capitalize the first letter
  const formattedString = trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
  return formattedString;
}