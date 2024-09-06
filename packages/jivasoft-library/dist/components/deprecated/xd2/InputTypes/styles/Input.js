"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainerStyled = void 0;
var _globalStyles = require("app/globalStyles");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const InputContainerStyled = exports.InputContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  padding: ", ";\n  // margin: ", ";\n  flex-direction: column;\n  border-radius: 10px;\n  @media (max-width: 600px) {\n    border-radius: 30px;\n\n  }\n\n  input{\n    // -webkit-box-shadow: 5px 5px 15px 5px #000000; \n    // box-shadow: 5px 5px 15px 5px #000000;\n    border-radius: 5px;\n\n    border:0px;\n    @media (max-width: 600px) {\n        border-radius: 40px;\n      }\n      padding:", ";\n      margin:10px;\n  }\n\n  label {\n    color: ", ";\n\n    font-weight: bold;\n  }\n"])), _globalStyles.DEFAULT_UI_PADDING, _globalStyles.DEFAULT_UI_MARGIN, _globalStyles.DEFAULT_UI_PADDING, _ref => {
  let {
    theme
  } = _ref;
  return theme.textDarkest;
});