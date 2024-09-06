"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDynamicButtonV2 = void 0;
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDynamicButtonV2 = exports.StyledDynamicButtonV2 = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  max-width: 150px;\n  cursor: pointer;\n  width: ", ";\n\n  border: ", ";\n  // default styles\n  border-radius: ", ";\n  font-weight: ", ";\n\n  // based on size\n  padding: ", ";\n  height: ", ";\n  font-size: ", ";\n  color: ", " !important;\n  background: ", ";\n\n  ", ";\n  ", "\n"])), props => props.width ? props.width : null, props => props !== null && props !== void 0 && props.stroke ? '1px solid ' + (props === null || props === void 0 ? void 0 : props.color) : null, props => props.mobile ? '2rem' : '.2rem', props => props.mobile ? 'bold' : 'normal', props => props.mobile ? '0 0.5rem' : '0 0.5rem', props => props.mobile ? '2.6rem' : '1.8rem', props => props.mobile ? '1.2' : '0.8rem', _ref => {
  let {
    disabled,
    color,
    theme
  } = _ref;
  return disabled ? theme.grey600Base : color !== null && color !== void 0 ? color : theme.text;
}, _ref2 => {
  let {
    disabled,
    backgroundColor,
    theme
  } = _ref2;
  return disabled ? theme.grey700Base : "-webkit-linear-gradient(45deg,".concat(backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : null, ",").concat((0, _helpers.LightenDarkenColor)((0, _helpers.standardizeColor)(backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : null), 60), ");");
}, _ref3 => {
  var _theme$animation;
  let {
    theme,
    animate
  } = _ref3;
  return animate && (theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.lowPulse);
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.selectable;
});