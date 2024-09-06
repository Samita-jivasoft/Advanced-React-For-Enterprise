"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshList = void 0;
var _react = _interopRequireDefault(require("react"));
var _io = require("react-icons/io");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RefreshList = () => {
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, null, /*#__PURE__*/_react.default.createElement(_io.IoMdRefreshCircle, {
    size: '20px'
  }), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Refresh List"));
};
exports.RefreshList = RefreshList;