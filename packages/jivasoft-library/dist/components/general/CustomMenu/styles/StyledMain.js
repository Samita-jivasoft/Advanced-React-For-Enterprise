"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDiv = exports.MenuContextOverlay = exports.MenuContainer = void 0;
var _theme = require("app/theme");
var _helpers = require("../../../../app/helpers");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MenuContextOverlay = exports.MenuContextOverlay = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  top: ", ";\n  left: ", ";\n  height: ", ";\n  width: ", ";\n  pointer-events: all;\n  z-index: 998;\n"])), props => props.top + 'px', props => props.left + 'px', props => props.height + 'px', props => props.width + 'px');
const MenuContainer = exports.MenuContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  //min-height: 350px;\n  //min-width: 250px;\n  width: auto;\n  //background: red;\n  //padding: 5px;\n  z-index: 999;\n  position: absolute;\n  ", "\n"])), _ref => {
  let {
    top,
    left
  } = _ref;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    top: ", ";\n    left: ", ";\n  "])), top, left);
});
const MenuDiv = exports.MenuDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: 1px solid red;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  z-index: 999;\n  ", ";\n  ", ";\n  flex-wrap: wrap !important;\n  padding: 0px !important;\n  overflow-x: hide;\n  font-size: 0.8rem;\n  border-radius: 8px;\n  width: fit-content;\n  max-width: 250px;\n  ", "\n"])), _ref2 => {
  let {
    textColor,
    theme
  } = _ref2;
  return textColor ? textColor : theme.text;
}, _ref3 => {
  let {
    backgroundColor,
    theme
  } = _ref3;
  return backgroundColor ? (0, _theme.generateElement)({
    type: 'pane',
    color1: backgroundColor,
    color2: (0, _helpers.LightenDarkenColor)(backgroundColor, 100),
    border: (0, _helpers.LightenDarkenColor)(backgroundColor, 200),
    transparency: 0.3
  }) : theme.panea1;
}, _ref4 => {
  let {
    top,
    left
  } = _ref4;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n  "])), top, left);
});