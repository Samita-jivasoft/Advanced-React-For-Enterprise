"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToolbarMenuBodyItem = exports.StyledToolbarMenuBody = exports.StyledToolbarMenu = exports.StyledToolbarItem = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledToolbarItem = exports.StyledToolbarItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:hover {\n    cursor: ", ";\n    border-radius: 14px;\n\n    /* Start the shake animation and make the animation last for 0.5 seconds */\n    animation: ", ";\n    /* When the animation is finished, start again */\n    animation-iteration-count: 1;\n    background: ", ";\n  }\n"])), _ref => {
  let {
    selected
  } = _ref;
  return selected ? null : 'pointer';
}, _ref2 => {
  var _theme$animation;
  let {
    theme,
    selected
  } = _ref2;
  return selected ? null : theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.path) === null || _theme$animation === void 0 ? void 0 : _theme$animation.shake;
}, _ref3 => {
  let {
    selected,
    theme
  } = _ref3;
  return selected ? null : theme.bg0;
});
const StyledToolbarMenu = exports.StyledToolbarMenu = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  ", ";\n  padding: 0px !important;\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.text;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.pane0;
});
const StyledToolbarMenuBody = exports.StyledToolbarMenuBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px;\n"])));
const StyledToolbarMenuBodyItem = exports.StyledToolbarMenuBodyItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", ";\n\n  padding: 10px;\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.panela1;
});