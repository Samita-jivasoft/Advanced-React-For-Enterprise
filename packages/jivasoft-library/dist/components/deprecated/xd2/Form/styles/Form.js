"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormStyledHeader = exports.FormStyled = void 0;
var _globalStyles = require("app/globalStyles");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const FormStyledHeader = exports.FormStyledHeader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index:2;\nborder:0px !important;\nborder-radius:0px !important;\n", ";\ncolor: ", ";\ntop:0;\nposition:sticky;\nfont-weight:900;\ntext-align:center;\n\n //border-top-left-radius:", ";\n// border-top-right-radius:", ";\n\nwidth:100%;\n font-size:1rem; \n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.paneb1;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _globalStyles.DEFAULT_UI_BORDERRADIUS, _globalStyles.DEFAULT_UI_BORDERRADIUS);
const FormStyled = exports.FormStyled = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ndisplay:flex;\n// margin-top:100px;\ncolor: ", ";\n// padding-bottom:20px;\n//  border:1px solid ", ";\nbox-sizing:border-box;\n// padding:", ";\nposition:relative;\nheight:100%;\nwidth:100%;\n\n// display: flex;\nflex-direction: column;\n// flex-wrap: wrap;\n// max-height: 1000px;\n// border-radius:", ";\n// border-bottom-left-radius:", ";\n// border-bottom-right-radius:", ";\n\n// box-shadow: ", ";\noverflow-y:scroll;\noverflow-x:hidden;\n// flex-wrap:column wrap;\nalign-items:center;\n// justify-content:center;\n  @media (max-width: 600px) {\n      // border-bottom-left-radius: 40px;\n      // border-bottom-right-radius: 40px;\n      // border-radius:", ";\n    }\n  \n  // overflow:auto;\n// display:flex;\n// flex-direction:column;\n// wrap:flex-wrap;\n// justify-content:center;\n// align-items:center;\n  \n}\n"])), _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.bg0;
}, _globalStyles.DEFAULT_UI_PADDING, _globalStyles.DEFAULT_UI_BORDERRADIUS, _globalStyles.DEFAULT_UI_BORDERRADIUS, _globalStyles.DEFAULT_UI_BORDERRADIUS, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.navShade;
}, _globalStyles.MOBILE_UI_BORDERRADIUS);