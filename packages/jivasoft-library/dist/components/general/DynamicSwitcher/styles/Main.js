"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledUnorderedList = exports.StyledListItem = exports.MainContainer = exports.Item = void 0;
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px !important;\n  font-weight: bold;\n  padding: 2px !important;\n  overflow: hidden;\n  color: ", ";\n  flex-direction: ", ";\n  background-color: ", ";\n  width: ", ";\n  height: ", ";\n  cursor: pointer;\n"])), props => {
  var _props$labelTextColor;
  return (_props$labelTextColor = props.labelTextColor) !== null && _props$labelTextColor !== void 0 ? _props$labelTextColor : 'rgba(255, 255, 255, 0.5)';
}, props => props.column ? 'column' : null, _ref => {
  let {
    backgroundColor,
    theme
  } = _ref;
  return backgroundColor ? backgroundColor === 'none' ? null : backgroundColor : theme.bgb3;
}, props => props.width ? props.width : '100%', props => props.height ? props.height : '100%');
const StyledUnorderedList = exports.StyledUnorderedList = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%; //important\n  line-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  flex-direction: ", ";\n  overflow-y: ", ";\n  overflow-x: ", ";\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"])), props => props.column ? 'column' : 'row', props => props.check ? !props.column ? 'hidden' : 'auto' : null, props => props.check ? props.column ? 'hidden' : 'auto' : null);
const StyledListItem = exports.StyledListItem = _styledComponents.default.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid white;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%; // important\n  height: 100%; // important\n  padding-left: ", ";\n  padding-right: ", ";\n  // color: rgba(255, 255, 255, 0.5);\n"])), props => props.column ? null : '10px', props => props.column ? null : '10px');
const Item = exports.Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: ", ";\n  padding: 0 10px;\n  width: ", "; // important\n  height: ", "; // important\n  color: ", ";\n\n  &: hover {\n    // overflow: hidden;\n    border-radius: 4px;\n    color: ", ";\n    background: ", ";\n"])), _ref2 => {
  let {
    column,
    item
  } = _ref2;
  return column && item !== null && item !== void 0 && item.label ? 'flex-start' : 'center';
}, _ref3 => {
  let {
    itemWidth
  } = _ref3;
  return itemWidth !== null && itemWidth !== void 0 ? itemWidth : '100%';
}, _ref4 => {
  let {
    itemHeight
  } = _ref4;
  return itemHeight !== null && itemHeight !== void 0 ? itemHeight : '100%';
}, _ref5 => {
  let {
    theme,
    item,
    selected,
    color
  } = _ref5;
  return (selected === null || selected === void 0 ? void 0 : selected.id) === (item === null || item === void 0 ? void 0 : item.id) ? color && color !== 'none' ? color : theme.text : null;
}, _ref6 => {
  let {
    color,
    theme
  } = _ref6;
  return color !== null && color !== void 0 ? color : theme.text;
}, _ref7 => {
  let {
    themeColor,
    theme,
    item,
    selected
  } = _ref7;
  const isSelected = (item === null || item === void 0 ? void 0 : item.id) === (selected === null || selected === void 0 ? void 0 : selected.id);
  if (themeColor === 'none' || isSelected) {
    return null;
  }
  return (0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(themeColor), -50) || theme.bgb2;
});