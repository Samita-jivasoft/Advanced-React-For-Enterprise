"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TBody = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TBody = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("tbody", null, children);
};
exports.TBody = TBody;