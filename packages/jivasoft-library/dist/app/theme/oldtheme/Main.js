"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = GlobalStyles;
var _react = _interopRequireDefault(require("react"));
var _HtmlBody = require("./Defaults/HtmlBody");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { Normalize } from "../vendors";
// import { HtmlBodyStyles } from "./HtmlBody";
// import { AStyled, ButtonStyles } from "../actions";
// import { HRStyles, ImgStyled } from "../atoms";
// import {
// 	BlockquoteStyles,
// 	CodeStyles,
// 	FigureStyles,
// 	FormFieldStyles,
// 	ListStyles,
// 	TableStyles
// } from "../elements";
// import { FontStyles, HeadingsStyles, TextStyles } from "../typography";

function GlobalStyles() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HtmlBody.HtmlBody, null));
}