"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Code = require("./Code");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CodeBasic = () => /*#__PURE__*/_react.default.createElement(_Code.Code, null, "$ npm start");
exports.CodeBasic = CodeBasic;
var _default = exports.default = {
  component: _Code.Code,
  title: 'Widgets'
};