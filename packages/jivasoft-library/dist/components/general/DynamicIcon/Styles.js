"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicIconStyled = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _constants = require("app/theme/constants");
var _helpers = require("./helpers");
var _theme = require("app/theme");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DynamicIconStyled = exports.DynamicIconStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin: ", ";\n  ", ";\n  ", "\n\n  border-radius: ", ";\n  .icon-background-svg {\n    border-radius: ", ";\n    position: absolute;\n    z-index: ", ";\n    aspect-ratio: 1/1;\n\n    rect {\n      width: ", ";\n      height: ", ";\n      fill: ", ";\n      \n    }\n  }\n\n  .icon-wrapper {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .main-icon {\n    z-index: ", ";\n    font-size: ", ";\n    color: ", ";\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))\n        }\n  }\n  .icon-badge {\n    position: absolute;\n    ", "\n    background-color: ", ";\n   \n    ", "\n    \n    border-radius: ", ";\n    ", ";\n  }\n  \n  \n    \n\n  .icon-status {\n    position: absolute;\n    transform: translate(100%, 70%);\n    z-index: ", ";\n    font-weight: bolder;\n    width: ", ";\n    height: ", ";   \n    padding: ", ";\n    background-color: ", ";\n    border: ", " solid\n      ", ";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    font-size: 1rem;\n    \n  }\n\n  .icon-initials {\n    position: absolute;\n    display: flex; \n    z-index: ", ";\n  \n    padding: ", ";\n    border-radius: ", ";\n    font-weight: bold;\n    color: ", " ;\n    min-width: 2rem;\n    min-height: 2rem;\n    justify-content: center; \n    align-items: center; \n    font-size: ", ";\n\n    ", "\n  \n"])), _ref => {
  var _theme$typography, _theme$typography2;
  let {
    theme,
    background
  } = _ref;
  return background && "\n  width: ".concat(theme === null || theme === void 0 || (_theme$typography = theme.typography) === null || _theme$typography === void 0 || (_theme$typography = _theme$typography.scalevalue) === null || _theme$typography === void 0 ? void 0 : _theme$typography.sc10, ";\n  height: ").concat(theme === null || theme === void 0 || (_theme$typography2 = theme.typography) === null || _theme$typography2 === void 0 || (_theme$typography2 = _theme$typography2.scalevalue) === null || _theme$typography2 === void 0 ? void 0 : _theme$typography2.sc10, ";\n");
}, _constants.DEFAULT_UI_PADDING, _ref2 => {
  let {
    theme,
    background
  } = _ref2;
  return background && theme.selectable;
}, _ref3 => {
  let {
    background
  } = _ref3;
  return background && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n"])), (0, _theme.getShadows)(' ', 'neumorphic-overlay'));
}, _constants.DEFAULT_UI_PADDING, _constants.DEFAULT_UI_PADDING, _ref4 => {
  var _theme$zIndexes;
  let {
    theme
  } = _ref4;
  return theme === null || theme === void 0 || (_theme$zIndexes = theme.zIndexes) === null || _theme$zIndexes === void 0 ? void 0 : _theme$zIndexes.workflow;
}, _ref5 => {
  var _theme$typography3;
  let {
    theme
  } = _ref5;
  return theme === null || theme === void 0 || (_theme$typography3 = theme.typography) === null || _theme$typography3 === void 0 || (_theme$typography3 = _theme$typography3.scalevalue) === null || _theme$typography3 === void 0 ? void 0 : _theme$typography3.sc11;
}, _ref6 => {
  var _theme$typography4;
  let {
    theme
  } = _ref6;
  return theme === null || theme === void 0 || (_theme$typography4 = theme.typography) === null || _theme$typography4 === void 0 || (_theme$typography4 = _theme$typography4.scalevalue) === null || _theme$typography4 === void 0 ? void 0 : _theme$typography4.sc11;
}, _ref7 => {
  let {
    backgroundColor
  } = _ref7;
  return backgroundColor;
}, _ref8 => {
  var _theme$zIndexes2;
  let {
    theme
  } = _ref8;
  return theme === null || theme === void 0 || (_theme$zIndexes2 = theme.zIndexes) === null || _theme$zIndexes2 === void 0 ? void 0 : _theme$zIndexes2.workflow;
}, _ref9 => {
  var _theme$typography5;
  let {
    theme
  } = _ref9;
  return theme === null || theme === void 0 || (_theme$typography5 = theme.typography) === null || _theme$typography5 === void 0 || (_theme$typography5 = _theme$typography5.scalevalue) === null || _theme$typography5 === void 0 ? void 0 : _theme$typography5.sc5;
}, _ref10 => {
  let {
    iconFill
  } = _ref10;
  return iconFill;
}, _ref11 => {
  let {
    badgePosition
  } = _ref11;
  return (0, _helpers.getBadgePositionStyles)(badgePosition);
}, _ref12 => {
  let {
    badgeContent,
    badgeBackgroundColor
  } = _ref12;
  return badgeContent ? badgeBackgroundColor : "none";
}, _ref13 => {
  let {
    badgeContent,
    background,
    type,
    status,
    backgroundColor
  } = _ref13;
  return badgeContent && (type || status) ? "border: ".concat(_constants.DEFAULT_UI_BORDERRADIUS, " solid ").concat(background ? backgroundColor : "white", ";") : "border: none;";
}, _ref14 => {
  let {
    badgeContent
  } = _ref14;
  return badgeContent && badgeContent.length === 1 ? "50%" : "1.25em";
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.iconBadge;
}, _ref16 => {
  var _theme$zIndexes3;
  let {
    theme
  } = _ref16;
  return theme === null || theme === void 0 || (_theme$zIndexes3 = theme.zIndexes) === null || _theme$zIndexes3 === void 0 ? void 0 : _theme$zIndexes3.workflowOverlay;
}, _ref17 => {
  var _theme$typography6;
  let {
    theme
  } = _ref17;
  return theme === null || theme === void 0 || (_theme$typography6 = theme.typography) === null || _theme$typography6 === void 0 || (_theme$typography6 = _theme$typography6.body) === null || _theme$typography6 === void 0 ? void 0 : _theme$typography6.b6;
}, _ref18 => {
  var _theme$typography7;
  let {
    theme
  } = _ref18;
  return theme === null || theme === void 0 || (_theme$typography7 = theme.typography) === null || _theme$typography7 === void 0 || (_theme$typography7 = _theme$typography7.body) === null || _theme$typography7 === void 0 ? void 0 : _theme$typography7.b6;
}, _constants.DEFAULT_UI_BORDERRADIUS, props => props.iconFill, _constants.DEFAULT_UI_BORDERRADIUS, _ref19 => {
  let {
    background,
    backgroundColor
  } = _ref19;
  return background ? backgroundColor : "white";
}, _ref20 => {
  var _theme$zIndexes4;
  let {
    theme
  } = _ref20;
  return theme === null || theme === void 0 || (_theme$zIndexes4 = theme.zIndexes) === null || _theme$zIndexes4 === void 0 ? void 0 : _theme$zIndexes4.workflowOverlay;
}, _constants.DEFAULT_UI_BORDERRADIUS, _constants.DEFAULT_UI_BORDERRADIUS, _ref21 => {
  let {
    iconFill
  } = _ref21;
  return (0, _theme.LightenDarkenColor)(iconFill, -70);
}, _ref22 => {
  var _theme$typography8;
  let {
    theme
  } = _ref22;
  return theme === null || theme === void 0 || (_theme$typography8 = theme.typography) === null || _theme$typography8 === void 0 || (_theme$typography8 = _theme$typography8.body) === null || _theme$typography8 === void 0 ? void 0 : _theme$typography8.b6;
}, _ref23 => {
  let {
    theme,
    type,
    status,
    iconLabel
  } = _ref23;
  return iconLabel ? !type && !status ? "\n         ".concat(theme.iconInitialAlt, "\n        color: ").concat(theme === null || theme === void 0 ? void 0 : theme.text, ";\n        &:hover {\n          color: ").concat(theme === null || theme === void 0 ? void 0 : theme.grey700Base, ";\n          };\n        }\n      ") : theme.iconInitial : "\n          \" \"\n        ";
});