"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericLoaderWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _theme = require("app/theme");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const genericBG = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 5px;\n"])), _ref => {
  let {
    theme
  } = _ref;
  return "linear-gradient(110deg, ".concat(theme.bga3, " 8%, ").concat(theme.bga2, " 18%, ").concat(theme.bga1, " 33%)");
});
const GenericLoaderWrapper = exports.GenericLoaderWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .background {\n    min-width: 100px;\n    min-height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    ", ";\n\n    div {\n      border-radius: 5px;\n    }\n  }\n\n  .foreground {\n    p,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,span {\n      ", ";\n      background-size: 200% 100%;\n      min-height: 30px;\n      min-width: 10px;\n      margin-bottom: ", ";\n      ", ";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: ", ";\n      font-size: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.id === "light" ? (0, _theme.generateElement)({
    type: "panel",
    color2: "white",
    color1: "white",
    border: "#f7f7f7",
    transparency: 0.5
  }) : theme.panelb1;
}, genericBG, _theme.DEFAULT_UI_MARGIN, _ref3 => {
  var _theme$animation;
  let {
    theme
  } = _ref3;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.shineX;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme === null || theme === void 0 ? void 0 : theme.disabledText;
}, _ref5 => {
  var _theme$typography;
  let {
    theme
  } = _ref5;
  return theme === null || theme === void 0 || (_theme$typography = theme.typography) === null || _theme$typography === void 0 || (_theme$typography = _theme$typography.body) === null || _theme$typography === void 0 ? void 0 : _theme$typography.b7;
}, _theme.DEFAULT_UI_MARGIN, _theme.DEFAULT_UI_MARGIN);