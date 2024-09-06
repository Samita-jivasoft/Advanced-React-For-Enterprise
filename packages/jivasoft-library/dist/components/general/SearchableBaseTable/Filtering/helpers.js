"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChipLabel = getChipLabel;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getChipLabel(label, value) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
  const match = value.match(regex);
  if (match) {
    const formatted = "".concat(match[2], "-").concat(match[3], "-").concat(match[1]);
    return formatted;
  } else {
    return value;
  }
}