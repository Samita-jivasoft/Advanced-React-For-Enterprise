"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _TableActions = require("./TableActions");
var _data = require("../../data");
var _DynamicSwitcher = require("../../../DynamicSwitcher");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Toolbar = props => {
  const {
    tableRef
  } = props;
  const [listState, listDispatch] = (0, _data.useList)();
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const {
    crudlistid,
    label,
    filters,
    search
  } = listState;
  return (label || filters || search) && /*#__PURE__*/_react.default.createElement(_styles.HeaderRow, {
    id: 'header-' + crudlistid
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledRow, null, listsState.layout == 'tabs' && listsState.tolists.length + listsState.fromlists.length > 1 ? null : /*#__PURE__*/_react.default.createElement("div", null, label), /*#__PURE__*/_react.default.createElement(_styles.StyledRightSide, null, /*#__PURE__*/_react.default.createElement(_TableActions.TableActionButtons, {
    tableRef: tableRef
  }))), /*#__PURE__*/_react.default.createElement(_TableActions.TableActionsRow, {
    tableRef: tableRef
  }));
};
exports.Toolbar = Toolbar;