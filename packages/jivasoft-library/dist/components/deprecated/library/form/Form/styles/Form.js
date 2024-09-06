"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormStyledHeader = exports.FormStyled = void 0;
var _theme = require("app/theme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const FormStyledHeader = exports.FormStyledHeader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index:300;\n", ";\npadding:0px !important;\nborder:0px !important;\nborder-radius:0px !important;\ncolor: ", ";\ntop:0;\nposition:sticky;\nfont-weight:900;\ntext-align:center;\n\n //border-top-left-radius:", ";\n// border-top-right-radius:", ";\n\n// border-bottom: 1px solid ", ";\nwidth:100%;\n font-size:.8rem; \n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.panea3;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bg0;
});
const FormStyled = exports.FormStyled = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ndisplay:flex;\nborder-radius:4px;\n// margin-top:100px;\ncolor: ", ";\n// padding-bottom:20px;\n//  border:2px solid ", ";\nbox-sizing:border-box;\n// padding:", ";\n// position:relative;\nheight:100%;\nwidth:100%;\n\n// max-width:650px;\n// display: flex;\nflex-direction: column;\n// flex-wrap: wrap;\n// max-height: 1000px;\n// border-radius:", ";\n// border-bottom-left-radius:", ";\n// border-bottom-right-radius:", ";\nbox-shadow: ", ";\noverflow-y:scroll;\noverflow-x:hidden;\n// flex-wrap:column wrap;\nalign-items:center;\n// justify-content:center;\n  @media (max-width: 600px) {\n      // border-bottom-left-radius: 40px;\n      // border-bottom-right-radius: 40px;\n      // border-radius:", ";\n    }\n  \n  // overflow:auto;\n// display:flex;\n// flex-direction:column;\n// wrap:flex-wrap;\n// justify-content:center;\n// align-items:center;\n  \n}\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.text;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.bga3;
}, _theme.DEFAULT_UI_PADDING, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.navShade;
}, _theme.MOBILE_UI_BORDERRADIUS);