"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshListButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _io = require("react-icons/io");
var _styles = require("../styles");
var _data = require("app/data");
var _data2 = require("../data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RefreshListButton = () => {
  const [listState] = (0, _data2.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    padding: '0px 0px 0px 10px',
    onClick: listState.refresh
  }, /*#__PURE__*/_react.default.createElement(_io.IoMdRefreshCircle, {
    size: '20px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Refresh List"));
};
exports.RefreshListButton = RefreshListButton;