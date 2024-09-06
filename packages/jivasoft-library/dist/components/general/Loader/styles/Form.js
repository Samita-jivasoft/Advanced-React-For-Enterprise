"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFormLoader = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledFormLoader = exports.StyledFormLoader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100%;\n    max-width: 650px;\n    width: 100%;\n    padding: 30px;\n  }\n\n  .cards {\n    display: flex;\n  }\n\n  .card {\n    margin: 10px;\n    max-width: 650px;\n    width: 100vw;\n    height: 100%;\n    background-color: ", ";\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n\n    .image {\n      img {\n        max-width: 100%;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n      }\n    }\n\n    .content {\n      padding: 20px 30px;\n    }\n  }\n\n  .card.is-loading {\n    .image,\n    h2,\n    p {\n      background: #eee;\n      background: linear-gradient(\n        110deg,\n        ", " 8%,\n        ", " 18%,\n        ", " 33%\n      );\n      border-radius: 5px;\n      background-size: 200% 100%;\n      ", ";\n    }\n\n    .image {\n      height: 200px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n\n    h2 {\n      height: 30px;\n    }\n\n    p {\n      height: 70px;\n    }\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.id == 'light' ? theme.bga3 : theme.bgb1;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.bga3;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bga2;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.bga1;
}, _ref5 => {
  var _theme$animation;
  let {
    theme
  } = _ref5;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.shineX;
});