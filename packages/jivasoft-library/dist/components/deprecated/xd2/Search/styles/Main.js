"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSearchDivMobile = exports.StyledSearchDiv = exports.StyledMainDiv = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledMainDiv = exports.StyledMainDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    display: flex;\n    flex-direction: column;\n    width:100%;\n    height:", ";\n    overflow:auto;\n    align-items:center;\n     position:", ";\n    top:0;\n    z-index:", ";\n    right:0;\n    padding:", ";\n     ", ";\n    // background:green;\n"])), props => props.height, props => props.position, props => props.zIndex, props => props.padding, props => props.background);
const StyledSearchDiv = exports.StyledSearchDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  // height: 10vh;\n  width: 100%;\n\n\n  justify-content: center;\n  align-items: center;\n"])));
const StyledSearchDivMobile = exports.StyledSearchDivMobile = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n&:hover {\n    \n  cursor:pointer;\n  border-radius:14px;\n\n\n  /* Start the shake animation and make the animation last for 0.5 seconds */\n  ", ";\n  \n  /* When the animation is finished, start again */\n  animation-iteration-count: 1;\n  background:", ";\n}\n\n"])), _ref => {
  var _theme$animation;
  let {
    theme
  } = _ref;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.path) === null || _theme$animation === void 0 ? void 0 : _theme$animation.shakeX;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.bg0;
});