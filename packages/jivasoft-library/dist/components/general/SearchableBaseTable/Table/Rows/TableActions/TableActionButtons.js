"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableActionButtons = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../../../data");
var _Searching = require("../../../Searching");
var _Filtering = require("../../../Filtering");
var _Grouping = require("../../../Grouping");
var _TableSettings = require("../TableSettings");
var _TableSettingsButton = require("../TableSettings/TableSettingsButton");
var _Crud = require("../../../Crud");
var _TableView = require("../../TableView");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableActionButtons = props => {
  var _listState$grouping, _listState$grouping2;
  const {
    tableRef,
    refresh
  } = props;
  // show quickFilters
  const [listState] = (0, _data.useList)();
  const [listsState] = (0, _data.useLists)();
  const [configurationState, configurationDispatch] = (0, _data.useConfiguration)();
  const [quickFilters, setQuickFilters] = (0, _react.useState)(true);

  //TODO: remove !listState.grouping when grouping plays well with searching and filtering
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(listState !== null && listState !== void 0 && listState.searching) && !(listState !== null && listState !== void 0 && (_listState$grouping = listState.grouping) !== null && _listState$grouping !== void 0 && _listState$grouping.showgroups) && /*#__PURE__*/_react.default.createElement(_Searching.SearchButton, {
    tableRef: tableRef
  }), !quickFilters && false && /*#__PURE__*/_react.default.createElement(_Filtering.QuickFiltersButton, {
    setQuickFilters: setQuickFilters
  }), (listState === null || listState === void 0 ? void 0 : listState.filters) && !(listState !== null && listState !== void 0 && (_listState$grouping2 = listState.grouping) !== null && _listState$grouping2 !== void 0 && _listState$grouping2.showgroups) && /*#__PURE__*/_react.default.createElement(_Filtering.FilterButton, null), (listState === null || listState === void 0 ? void 0 : listState.grouping) && (listState === null || listState === void 0 ? void 0 : listState.searching) != 1 && (listState === null || listState === void 0 ? void 0 : listState.showfiltersmodal) != 1 && /*#__PURE__*/_react.default.createElement(_Grouping.GroupingButton, null), (listState === null || listState === void 0 ? void 0 : listState.refresh) && /*#__PURE__*/_react.default.createElement(_Crud.RefreshListButton, null), /*#__PURE__*/_react.default.createElement(_TableSettingsButton.TableSettingsButton, {
    tableRef: tableRef
  }), (configurationState === null || configurationState === void 0 ? void 0 : configurationState.onSave) && /*#__PURE__*/_react.default.createElement(_TableSettings.SaveSettingsButton, {
    themeColor: listState.themecolor,
    textColor: listState.textcolor
  }), false && /*#__PURE__*/_react.default.createElement(_TableView.Modal, {
    tableRef: tableRef
  }));
};
exports.TableActionButtons = TableActionButtons;