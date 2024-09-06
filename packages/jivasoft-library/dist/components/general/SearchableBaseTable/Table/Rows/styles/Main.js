"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRow = exports.StyledRightSide = exports.HeaderRow = exports.DetailViewHeader = exports.DetailViewContentContainer = exports.DetailViewContainer = exports.DetailViewBody = void 0;
var _theme = require("app/theme");
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const HeaderRow = exports.HeaderRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid yellow;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"])));
const StyledRow = exports.StyledRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  font-weight: bold;\n  align-items: center;\n  padding: 0px 0px 5px 0px;\n"])));
const StyledRightSide = exports.StyledRightSide = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n  // margin:10px;\n  // height: 100%;\n"])));
const DetailViewContainer = exports.DetailViewContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: 1px solid pink;\n  ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: 0px 0px 0px 0px !important;\n  // margin: 0px 0px 0px 0px !important;\n  box-sizing: border-box;\n  z-index: 2;\n"])), _ref => {
  let {
    themeColor,
    theme
  } = _ref;
  return themeColor ? theme.id === 'light' ? (0, _theme.generateElement)({
    type: 'panel',
    color1: themeColor,
    color2: (0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(themeColor), 40),
    border: (0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(themeColor), -10),
    transparency: 0.5
  }) : theme.panelb3 : theme.id === 'light' ? theme.panela3 : theme.panelb3;
}, _ref2 => {
  let {
    textColor
  } = _ref2;
  return textColor;
});
const DetailViewContentContainer = exports.DetailViewContentContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  // margin: 10px;\n"])));
const DetailViewHeader = exports.DetailViewHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  font-weight: bold;\n  box-sizing: border-box;\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n"])));
const DetailViewBody = exports.DetailViewBody = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  overflow: auto;\n  margin-bottom: 20px;\n  // height: 100%;\n"])));