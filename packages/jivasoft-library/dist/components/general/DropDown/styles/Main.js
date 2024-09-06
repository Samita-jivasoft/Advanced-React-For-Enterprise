"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsContainerWrapper = exports.ItemsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ItemsContainer = exports.ItemsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 2px solid green;\n  display: flex;\n  overflow-x: auto;\n  align-items: center;\n"])));
const ItemsContainerWrapper = exports.ItemsContainerWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  @media (max-width: 600px) {\n    position: fixed;\n    bottom: 0;\n    // z-index: 2;\n    background: ", ";\n    width: 100%;\n    left: 0;\n  }\n"])), props => props.backgroundColor ? props.backgroundColor : _ref => {
  let {
    theme
  } = _ref;
  return theme.bga3;
});