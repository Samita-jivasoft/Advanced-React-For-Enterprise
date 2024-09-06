"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDiv = exports.ModalContainer = exports.CloseIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ai = require("react-icons/ai");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ModalContainer = exports.ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(255,255,255,0.01);\n    backdrop-filter: blur(5px);\n"])));
const ModalDiv = exports.ModalDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-Content: center;\n    background: white;\n    ", "\n    padding-bottom: 5%; \n    min-width: 40vw;\n    background-color: rgba(14,62,108,0.9);\n    border-radius: 1rem;\n    border: solid 3px #1763AD;\n    color: white;\n    position: relative;\n    font-size: calc(1rem + 1vmin);\n    gap: 3%;\n"])), props => {
  if (props.viewWidth < 800 && props.viewWidth >= 600) {
    return "height: 60%; width: 60%;";
  } else if (props.viewWidth < 600 && props.viewWidth >= 400) {
    return "height: 60%; width: 70%;";
  } else if (props.viewWidth < 400) {
    return "height: 60%; width: 80%;";
  } else {
    return "height: 60%; width: 60%;";
  }
});
const CloseIcon = exports.CloseIcon = (0, _styledComponents.default)(_ai.AiFillCloseCircle)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    height: calc(1rem + 1vmin);\n    width: calc(1rem + 1vmin);\n    background: black;\n    border-radius: 1rem;\n    color: red;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    transition: 0.5s ease in;\n    &: hover{\n        height: calc(1.5rem + 1vmin);\n        width: calc(1.5rem + 1vmin);\n        top: -15px;\n        right: -15px;\n    }\n"])));