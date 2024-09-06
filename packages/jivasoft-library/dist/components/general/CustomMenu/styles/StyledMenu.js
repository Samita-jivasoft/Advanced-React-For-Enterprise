"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenuDiv = void 0;
var _theme = require("app/theme");
var _helpers = require("../../../../app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const SubMenuDiv = exports.SubMenuDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: solid 1px blue;\n  display: ", ";\n  position: ", ";\n  left: ", ";\n  display: flex;\n  position: absolute;\n  align-items: center;\n  list-style: none;\n  justify-content: flex-start;\n  flex-direction: column;\n  z-index: 210;\n  ", ";\n  ", ";\n  font-size: 0.8rem;\n  border-radius: 8px;\n  //border-bottom-left-radius: 0px;\n  //border-top-left-radius: 0px;\n  padding: 0px !important;\n  max-width: 500px;\n  // min-width: 150px;\n  width: fit-content;\n"])), props => props.display, props => props.position, props => props.left, _ref => {
  let {
    textColor,
    theme
  } = _ref;
  return textColor ? textColor : theme.text;
}, _ref2 => {
  let {
    backgroundColor,
    theme
  } = _ref2;
  return backgroundColor ? (0, _theme.generateElement)({
    type: 'pane',
    color1: backgroundColor,
    color2: (0, _helpers.LightenDarkenColor)(backgroundColor, 100),
    border: (0, _helpers.LightenDarkenColor)(backgroundColor, 200),
    transparency: 0.3
  }) : theme.panea1;
});