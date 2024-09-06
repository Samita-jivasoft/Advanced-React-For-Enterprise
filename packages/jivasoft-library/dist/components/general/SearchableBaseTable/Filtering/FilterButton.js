"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("../data");
var _styles = require("../styles");
var _fa = require("react-icons/fa");
var _FilterModal = require("./FilterModal");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FilterButton = props => {
  const [listState, listDispatch] = (0, _data.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => {
      listDispatch({
        type: 'SET_SHOW_FILTERS_MODAL',
        currentFiltersModal: 1
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledIconWrapper, null, /*#__PURE__*/_react.default.createElement(_fa.FaFilter, {
    size: '15px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Filters")), /*#__PURE__*/_react.default.createElement(_FilterModal.FilterModal, null));
};
exports.FilterButton = FilterButton;