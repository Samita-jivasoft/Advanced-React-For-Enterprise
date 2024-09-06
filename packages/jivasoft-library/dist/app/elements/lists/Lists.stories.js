"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ULBasicCircles = exports.ULBasic = exports.OLBasic = exports.DLBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _UL = require("./UL");
var _ULCircles = require("./ULCircles");
var _OL = require("./OL");
var _DL = require("./DL");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ULBasic = () => /*#__PURE__*/_react.default.createElement(_UL.UL, null, /*#__PURE__*/_react.default.createElement("li", null, "One"), /*#__PURE__*/_react.default.createElement("li", null, "Two"));
exports.ULBasic = ULBasic;
const ULBasicCircles = () => /*#__PURE__*/_react.default.createElement(_ULCircles.ULCircles, null, /*#__PURE__*/_react.default.createElement("li", null, "One"), /*#__PURE__*/_react.default.createElement("li", null, "Two"));
exports.ULBasicCircles = ULBasicCircles;
const OLBasic = () => /*#__PURE__*/_react.default.createElement(_OL.OL, null, /*#__PURE__*/_react.default.createElement("li", null, "One"), /*#__PURE__*/_react.default.createElement("li", null, "Two"));
exports.OLBasic = OLBasic;
const DLBasic = () => /*#__PURE__*/_react.default.createElement(_DL.DL, null, /*#__PURE__*/_react.default.createElement("dt", null, "Beast of Bodmin"), /*#__PURE__*/_react.default.createElement("dd", null, "A large feline inhabiting Bodmin Moor."), /*#__PURE__*/_react.default.createElement("dt", null, "Morgawr"), /*#__PURE__*/_react.default.createElement("dd", null, "A sea serpent."), /*#__PURE__*/_react.default.createElement("dt", null, "Owlman"), /*#__PURE__*/_react.default.createElement("dd", null, "A giant owl-like creature."));
exports.DLBasic = DLBasic;
var _default = exports.default = {
  component: _UL.UL,
  title: 'Elements'
};