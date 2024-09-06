"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemePanel = exports.StyledColorPicker = exports.RecentlySelectedContainer = exports.ColorsContainer = exports.ColorRange = exports.ColorPreview = exports.ColorPickerContainer = exports.ColorGroupContainer = exports.ColorGroup = exports.ColorContainer = void 0;
var _theme = require("app/theme");
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledColorPicker = exports.StyledColorPicker = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  width: fit-content;\n"])), _ref => {
  let {
    themeColor,
    theme
  } = _ref;
  return themeColor ? (0, _theme.generateElement)({
    type: 'pane',
    color1: themeColor,
    color2: (0, _helpers.LightenDarkenColor)(themeColor, 40),
    border: (0, _helpers.LightenDarkenColor)(themeColor, -10),
    transparency: 0.9
  }) : theme.neoOverlayPanel0;
});
//TODO: when generating themes add it here
// selectedColor
//   ? generateElement({
//       type: 'panel',
//       color1: getBestContrastColor(
//         selectedColor,
//         generateColorShades(selectedColor, 6)
//       ),
//       color2: LightenDarkenColor(
//         getBestContrastColor(
//           selectedColor,
//           generateColorShades(selectedColor, 6)
//         ),
//         40
//       ),
//       border: LightenDarkenColor(
//         getBestContrastColor(
//           selectedColor,
//           generateColorShades(selectedColor, 6)
//         ),
//         -10
//       ),
//       // transparency: 0.9
//       shadowType: 'neumorphic-overlay',

//     })
//   :

const ColorPickerContainer = exports.ColorPickerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  ", "\n  width: 100%;\n  max-width: 400px;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  padding: 0px !important;\n"])), _ref2 => {
  let {
    theme,
    selectedColor
  } = _ref2;
  return theme.id == 'dark' ? theme.panelb3 : theme.panela3;
});
const ColorPreview = exports.ColorPreview = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  // justify-content: space-between;\n  padding: 20px;\n"])), _ref3 => {
  let {
    background
  } = _ref3;
  return background;
}, _ref4 => {
  let {
    color
  } = _ref4;
  return color;
});
const ColorsContainer = exports.ColorsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  // background: white;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  padding: 10px;\n"])));
const ColorGroupContainer = exports.ColorGroupContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  padding: 0px 0px 10px 0px;\n"])));
const ColorGroup = exports.ColorGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n"])));
const ColorRange = exports.ColorRange = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n"])));
const ColorContainer = exports.ColorContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  // border: 1px solid red;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  background: ", ";\n  border-radius: 4px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  margin-bottom: 4px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.selectable;
}, _ref6 => {
  let {
    color
  } = _ref6;
  return color;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.bg0;
});
const RecentlySelectedContainer = exports.RecentlySelectedContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  align-items: center;\n  // justify-content: center;\n"])));
const ThemePanel = exports.ThemePanel = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  width:50px;\n  height: 50px;\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.panel0;
});