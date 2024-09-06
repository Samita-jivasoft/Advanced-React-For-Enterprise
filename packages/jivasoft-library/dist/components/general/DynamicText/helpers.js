"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTag = getTag;
exports.highlightText = highlightText;
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.split.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function highlightText(highlight, text) {
  // Get segments that match the highlight
  const regex = new RegExp("(".concat(highlight, ")"), 'gi');
  const segments = text === null || text === void 0 ? void 0 : text.split(regex);

  // Wrap matches in <mark> element
  const highlightedText = segments.map((segment, i) => regex.test(segment) ? /*#__PURE__*/_react.default.createElement("mark", {
    key: i
  }, segment) : segment);
  return highlightedText;
}

//get HTML tag based on variant - good for SEO & accessibility features in the future
//Unsure if this is effective or just unecessary abstraction, time will tell...
function getTag(variant) {
  const variantToTagMap = {
    header1: 'h1',
    header2: 'h2',
    header3: 'h3',
    subheader1: 'h4',
    subheader2: 'h5',
    subheader3: 'h6',
    body1: 'p',
    body2: 'p',
    body3: 'p'
  };
  return variantToTagMap[variant];
}