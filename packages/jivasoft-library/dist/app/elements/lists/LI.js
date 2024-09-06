"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LI = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LI = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("li", null, children);
};
exports.LI = LI;