"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SheetList = exports.PopUp = exports.MiddleContainer = exports.ContentWrapper = exports.Container = exports.BodyItems = exports.Banner = exports.Background = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Background = exports.Background = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top:0;\n    left:0;\n    width: 100vw;\n    height:100vh;\n    //background: lime;\n    z-index:999\n\n"])));
const PopUp = exports.PopUp = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display:flex;\n    width:60%;\n    height:60%;\n    background-color: white;\n    flex-direction: column;\n    border: 2px solid ", ";\n    border-radius:10px;\n    overflow:hidden;\n"])), props => props.themeColor);
const ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction:column;\n    //background-color: red;\n    height:100%;\n    width: 100%;\n    justify-content:space-between;\n    z-index:0;\n"])));
const MiddleContainer = exports.MiddleContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    // border:2px solid red;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background: white;\n    flex-direction:column;\n    ", ";\n\n    overflow-y:scroll;\n   //padding:30px;\n    height:100%;\n    width: 100%\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.pane0;
});
const BodyItems = exports.BodyItems = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    // border:2px solid green;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    // height:100%;\n    // width:100%;\n"])));
const Banner = exports.Banner = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    // border:2px solid green;\n    display:flex;\n    flex-direction:column;\n    // position:sticky;\n    // top:0;\n    background-color: ", ";\n    color:white;\n"])), props => props.themeColor);

// styles for bottom sheet
const Container = exports.Container = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border:5px solid blue;\n    position: fixed;\n    z-index: 5;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    top:0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    background-color: rgba(0,0,0,", ");\n    visibility:", "\n    // transform: ", ";\n"])), props => props.opacity, props => props.visibility, props => props.visibility === 'hidden' ? "translateY(0%)" : "translateY(100%)");
const SheetList = exports.SheetList = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    // border:5px solid pink;\n    display:flex;\n    flex-direction: column;\n    background-color: white;\n    margin: 0;\n    padding: 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transform: translateY(", "%);\n"])), props => props.translate);