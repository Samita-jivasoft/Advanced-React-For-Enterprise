"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockquoteBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Blockquote = require("./Blockquote");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BlockquoteBasic = () => /*#__PURE__*/_react.default.createElement(_Blockquote.Blockquote, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum praesentium obcaecati neque minima quaerat deserunt consectetur repudiandae perferendis cumque.");
exports.BlockquoteBasic = BlockquoteBasic;
var _default = exports.default = {
  component: _Blockquote.Blockquote,
  title: 'Elements'
};