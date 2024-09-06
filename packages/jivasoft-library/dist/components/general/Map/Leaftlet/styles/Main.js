"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSearch = exports.StyledControllerButton = exports.StyledBottomController = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledBottomController = exports.StyledBottomController = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 20px;\n  // top: 100px;\n  right: 10px; \n  z-index: 1000;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  border-radius: 4px;\n  width: 30px;\n  height: fit-content;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
const StyledControllerButton = exports.StyledControllerButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // z-index: 1000;\n  background-color: white;\n  border: 0px;\n  width: 100%;\n  height: 33px;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n"])));
const StyledSearch = exports.StyledSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  position: absolute;\n  display: flex;\n  // top: 10px;\n  margin: 10px;\n  z-index: 1000;\n  border-radius: 6px;\n  cursor: pointer !important;\n  width: 100%;\n  max-width: calc(100% - 70px); \n\n  &:hover {\n    brightness: filter(50%);\n  }\n"])));