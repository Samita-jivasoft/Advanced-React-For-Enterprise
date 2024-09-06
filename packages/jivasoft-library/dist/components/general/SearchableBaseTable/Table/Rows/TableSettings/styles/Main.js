"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableList = exports.SettingsHeader = exports.Settings = exports.Section = exports.RowDetails = exports.ColumnRow = void 0;
var _theme = require("app/theme");
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Settings = exports.Settings = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  // padding-bottom: 20px;\n  margin-bottom: 20px;\n  font-weight: normal; !important;\n  font-size: 14; !important;\n"])), _ref => {
  let {
    themeColor,
    theme
  } = _ref;
  return themeColor ? (0, _theme.generateElement)({
    type: 'panel',
    color1: themeColor,
    color2: (0, _helpers.LightenDarkenColor)(themeColor, 40),
    border: (0, _helpers.LightenDarkenColor)(themeColor, -10),
    transparency: 0.5
  }) : theme.neoOverlayPanel0;
});
const Section = exports.Section = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px 0px 10px 0px;\n"])));
const SettingsHeader = exports.SettingsHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  font-weight: bold;\n  font-size: 25;\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 10px;\n"])));
const SortableList = exports.SortableList = _styledComponents.default.ul(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"])));
const ColumnRow = exports.ColumnRow = _styledComponents.default.li(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n  // ", ";\n  // width: 100%;\n  cursor: move;\n  display: flex;\n  padding: 5px !important;\n\n  \n  .draggable {\n    padding: 1rem;\n    background-color: white;\n    border: 1px solid black;\n    cursor: move;\n  }\n\n  .draggable.dragging {\n    opacity: 0.5;\n  }\n"])), _ref2 => {
  let {
    themeColor,
    theme
  } = _ref2;
  return themeColor ? (0, _theme.generateElement)({
    type: 'panel',
    color1: themeColor,
    color2: (0, _helpers.LightenDarkenColor)(themeColor, 40),
    border: (0, _helpers.LightenDarkenColor)(themeColor, -10),
    transparency: 0.5
  }) : theme.panel0;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.selectable;
});
const RowDetails = exports.RowDetails = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n"])));