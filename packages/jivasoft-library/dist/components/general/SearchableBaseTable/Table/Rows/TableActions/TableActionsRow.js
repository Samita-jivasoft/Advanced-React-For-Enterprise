"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableActionsRow = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("../../../data");
var _Filtering = require("../../../Filtering");
var _Searching = require("../../../Searching");
var _Grouping = require("../../../Grouping");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TableActionsRow = props => {
  var _listState$grouping;
  const {
    tableRef,
    setQuickFilters
  } = props;
  const [listState, listDispatch] = (0, _data.useList)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Filtering.QuickFilters, {
    setQuickFilters: setQuickFilters
  }), listState.searching === 1 && /*#__PURE__*/_react.default.createElement(_Searching.SearchField, {
    tableRef: tableRef
  }), /*#__PURE__*/_react.default.createElement(_Searching.SearchAll, null), /*#__PURE__*/_react.default.createElement(_Filtering.Filters, null), (listState === null || listState === void 0 || (_listState$grouping = listState.grouping) === null || _listState$grouping === void 0 ? void 0 : _listState$grouping.showgroups) && /*#__PURE__*/_react.default.createElement(_Grouping.GroupingDropZone, null));
};
exports.TableActionsRow = TableActionsRow;