"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Blockquote = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("blockquote", null, /*#__PURE__*/_react.default.createElement("q", null, children), /*#__PURE__*/_react.default.createElement("cite", null, "Mario Mecaroni"));
};
exports.Blockquote = Blockquote;