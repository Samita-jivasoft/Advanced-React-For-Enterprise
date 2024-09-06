"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardLoader = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledCardLoader = exports.StyledCardLoader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #ddd;\n    min-height: 100vh;\n    padding: 30px;\n  }\n\n  .cards {\n    display: flex;\n  }\n\n  .card {\n    margin: 10px;\n    width: 300px;\n    background: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n\n    .image {\n      img {\n        max-width: 100%;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n      }\n    }\n\n    .content {\n      padding: 20px 30px;\n    }\n  }\n\n  .card.is-loading {\n    .image,\n    h2,\n    p {\n      background: #eee;\n      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);\n      border-radius: 5px;\n      background-size: 200% 100%;\n      ", ";\n    }\n\n    .image {\n      height: 200px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    h2 {\n      height: 30px;\n    }\n    p {\n      height: 70px;\n    }\n  }\n"])), _ref => {
  var _theme$animation;
  let {
    theme
  } = _ref;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.emphasis) === null || _theme$animation === void 0 ? void 0 : _theme$animation.shineX;
});