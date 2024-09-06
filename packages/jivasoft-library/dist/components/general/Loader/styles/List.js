"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledListLoader = void 0;
var _theme = require("app/theme");
var _animation = require("app/theme/constants/animation");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledListLoader = exports.StyledListLoader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100%;\n  opacity: 0;\n  animation: ", " 0.2s ease-out\n    ", " forwards;\n\n  .list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    ", ";\n    width: 96%;\n    margin-top: 30px;\n    height: 90%;\n    overflow-y: hidden;\n    border-radius: 5px;\n    justify-content: space-evenly;\n    //background: red;\n  }\n\n  .line {\n    height: 40px;\n    width: 90%;\n    ", ";\n    background-repeat: repeat-y;\n    border-radius: 5px;\n    background-size: 300px 100px;\n    background-border-radius: 10px;\n    background-position: 0 0;\n    ", ";\n  }\n"])), _animation.fadeInAnimation, _ref => {
  let {
    animated
  } = _ref;
  return animated ? '.3s' : null;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.id === 'light' ? (0, _theme.generateElement)({
    type: 'panel',
    color2: 'white',
    color1: 'white',
    border: '#f7f7f7',
    transparency: 0.5
  }) : theme.panelb1;
}, _ref3 => {
  let {
    animated
  } = _ref3;
  if (animated) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          opacity: 0.4;\n          background: linear-gradient(\n              to right,\n              lightgrey,\n              ", ",\n              70%,\n              white 100%\n            ),\n            lightgrey;\n        "])), _ref4 => {
      let {
        theme
      } = _ref4;
      return theme.bga2;
    });
  } else {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          background: rgba(0, 0, 0, 0.1);\n        "])));
  }
}, _ref5 => {
  var _theme$animation;
  let {
    theme
  } = _ref5;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.lowShine;
});