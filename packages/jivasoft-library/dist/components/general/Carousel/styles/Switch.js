"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSwitchDiv = exports.StyledRightIcon = exports.StyledLeftIcon = exports.StyledClearButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _ai = require("react-icons/ai");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledSwitchDiv = exports.StyledSwitchDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display:flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 80vh;\n    width: 70vw;\n    column-gap:5vh;\n    background:beige;\n    overflow:hidden;\n"])));
const StyledClearButton = exports.StyledClearButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: pink;\n    display:flex;\n    outline:none;\n    align-items:center;\n    justify-content:center;\n    border:none;\n    height: 20px;\n    width: 20px;\n"])));
const StyledLeftIcon = exports.StyledLeftIcon = (0, _styledComponents.default)(_ai.AiOutlineLeft)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ncolor: black;\nfont-size:100px;\n\n// transitions: .4s;\npadding:1%;\n&: hover{\n    cursor:pointer;\n    color:red;\n}\n"])));
const StyledRightIcon = exports.StyledRightIcon = (0, _styledComponents.default)(_ai.AiOutlineRight)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: black;\n    font-size:100px;\n\n    // transitions: .4s;\n    padding:1%;\n    &: hover{\n        cursor:pointer;\n        color:red;\n    }\n"])));