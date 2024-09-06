"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickFiltersButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("app/data");
var _data2 = require("../data");
var _fa = require("react-icons/fa");
var _styles = require("../styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const QuickFiltersButton = props => {
  const {
    setQuickFilters
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [listState] = (0, _data2.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => setQuickFilters(true)
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFilter, {
    size: '15px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Quick Filters"));
};
exports.QuickFiltersButton = QuickFiltersButton;