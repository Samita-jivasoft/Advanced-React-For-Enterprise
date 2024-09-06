"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSettingsButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("../../../data");
var _styles = require("../../../styles");
var _fa = require("react-icons/fa");
var _TableSettingsModal = require("./TableSettingsModal");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TableSettingsButton = props => {
  const {
    tableRef
  } = props;
  const [listState, listDispatch] = (0, _data.useList)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    padding: '0px 0px 0px 10px',
    onClick: () => {
      listDispatch({
        type: 'SET_SHOW_TABLE_SETTINGS',
        currentTableSettings: 1
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledIconWrapper, null, /*#__PURE__*/_react.default.createElement(_fa.FaCog, {
    size: '17px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Table Settings")), /*#__PURE__*/_react.default.createElement(_TableSettingsModal.TableSettingsModal, {
    tableRef: tableRef
  }));
};
exports.TableSettingsButton = TableSettingsButton;