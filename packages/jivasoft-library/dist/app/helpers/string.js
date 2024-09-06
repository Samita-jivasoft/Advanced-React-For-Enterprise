"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.formatToSentenceCase = formatToSentenceCase;
exports.getCharacterCountWithNewLines = getCharacterCountWithNewLines;
exports.getIconInitials = getIconInitials;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
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
function capitalize(inputString) {
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
function getIconInitials(string) {
  var _ref, _initials$join;
  const regex = /((?:\s|^)\w)/g;
  const matchStr = string === null || string === void 0 ? void 0 : string.match(regex);

  // Handle the case where there's only one match
  if ((matchStr === null || matchStr === void 0 ? void 0 : matchStr.length) === 1) {
    var _matchStr$;
    return "  ".concat(matchStr === null || matchStr === void 0 || (_matchStr$ = matchStr[0]) === null || _matchStr$ === void 0 ? void 0 : _matchStr$.trim(), "  ");
  }

  // Extract the first and last characters and trim any whitespace
  const initials = (_ref = [matchStr === null || matchStr === void 0 ? void 0 : matchStr[0], matchStr === null || matchStr === void 0 ? void 0 : matchStr[(matchStr === null || matchStr === void 0 ? void 0 : matchStr.length) - 1]]) === null || _ref === void 0 ? void 0 : _ref.map(s => s === null || s === void 0 ? void 0 : s.trim());
  return initials === null || initials === void 0 || (_initials$join = initials.join('')) === null || _initials$join === void 0 ? void 0 : _initials$join.toUpperCase();
}

/**
 * Calculates the character count of a string, treating each 'char(10)' as a single character.
 *
 * @param {string} string - The input string that may contain 'char(10)' substrings.
 * @returns {number} - The total character count with 'char(10)' treated as a single character.
 */
function getCharacterCountWithNewLines(string) {
  // Count occurrences of 'char(10)'
  let countChar10 = (string.match(/char\(10\)/g) || []).length;
  // Remove all instances of 'char(10)'
  let cleanedValue = string.replace(/char\(10\)/g, '');
  // Calculate the total length
  return cleanedValue.length + countChar10;
}