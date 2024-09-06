"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = void 0;
var _react = _interopRequireDefault(require("react"));
var _Pre = require("./Pre");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Code = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("pre", null, /*#__PURE__*/_react.default.createElement("code", null, children));
};
exports.Code = Code;