"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDisplayDate = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDisplayDate = exports.StyledDisplayDate = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 0 21%;\n  flex-direction: column;\n  border-radius: 20px;\n  flex: 1 0 21%;\n  position: relative;\n  text-align: center;\n  @media (max-width: 600px) {\n    border-radius: 100px;\n  }\n  border: 1px solid ", ";\n\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  //color:", ";\n  // color: ", ";\n  max-height: 100px;\n  max-width: 100px;\n  ", ";\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.overlayNeutral;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _ref3 => {
  let {
    selected
  } = _ref3;
  return selected ? _ref4 => {
    let {
      theme
    } = _ref4;
    return theme.text;
  } : _ref5 => {
    let {
      theme
    } = _ref5;
    return theme.textDarkest;
  };
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.panela1;
});