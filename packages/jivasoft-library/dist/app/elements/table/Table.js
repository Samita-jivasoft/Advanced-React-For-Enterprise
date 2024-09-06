"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Table = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("table", null, children);
};
exports.Table = Table;