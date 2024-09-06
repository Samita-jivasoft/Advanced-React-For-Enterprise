"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Table = require("./Table");
var _tags = require("./tags");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TableBasic = () => /*#__PURE__*/_react.default.createElement(_Table.Table, null, /*#__PURE__*/_react.default.createElement(_tags.THead, null, /*#__PURE__*/_react.default.createElement(_tags.TR, null, /*#__PURE__*/_react.default.createElement(_tags.TH, null, "Title one"), /*#__PURE__*/_react.default.createElement(_tags.TH, null, "Title two"))), /*#__PURE__*/_react.default.createElement(_tags.TBody, null, /*#__PURE__*/_react.default.createElement(_tags.TR, null, /*#__PURE__*/_react.default.createElement(_tags.TD, null, "one"), /*#__PURE__*/_react.default.createElement(_tags.TD, null, "two")), /*#__PURE__*/_react.default.createElement(_tags.TR, null, /*#__PURE__*/_react.default.createElement(_tags.TD, null, "one"), /*#__PURE__*/_react.default.createElement(_tags.TD, null, "two")), /*#__PURE__*/_react.default.createElement(_tags.TR, null, /*#__PURE__*/_react.default.createElement(_tags.TD, null, "one"), /*#__PURE__*/_react.default.createElement(_tags.TD, null, "two")), /*#__PURE__*/_react.default.createElement(_tags.TR, null, /*#__PURE__*/_react.default.createElement(_tags.TD, null, "one"), /*#__PURE__*/_react.default.createElement(_tags.TD, null, "two"))));
exports.TableBasic = TableBasic;
var _default = exports.default = {
  component: _Table.Table,
  title: "Elements"
};