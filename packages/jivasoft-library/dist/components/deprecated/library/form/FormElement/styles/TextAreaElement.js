"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const TextAreaStyled = exports.TextAreaStyled = _styledComponents.default.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid\n    ", " !important;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  // color: isMatch;\n  padding: 15;\n  max-width: 100%;\n  resize: ", ";\n  height: 120px;\n  font-weight: bold;\n  white-space: pre-wrap;\n  // -ms-overflow-style: none;  /* Internet Explorer 10+ */\n  // scrollbar-width: none;  /* Firefox */\n  // ::-webkit-scrollbar {\n  //   display: none;  /* Safari and Chrome */\n  // }\n  ", "\n"])), props => props.isValid ? props.theme.successColor : props.theme.dangerColor, props => props.isValid ? props.theme.successColor : props.theme.text, props => props.canEdit, _ref => {
  let {
    theme
  } = _ref;
  return theme.neoEmbedPanelb1;
});