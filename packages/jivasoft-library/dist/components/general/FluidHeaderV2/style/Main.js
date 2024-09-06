"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTitleBox = exports.StyledDynamicHeader = exports.StyledBanner = exports.ItemsContainerWrapper = exports.ItemsContainer = exports.CenterItemsStyled = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _framerMotion = require("framer-motion");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledDynamicHeader = exports.StyledDynamicHeader = (0, _styledComponents.default)(_framerMotion.motion.section)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    // border: 2px solid maroon;\n    //display: ", ";\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 100%; \n    height: ", ";\n    //top: ", ";\n    //bottom:0;\n    // height:5vh;\n    // min-height:50px;\n    padding : 0 10px 0 10px;\n    position:relative;\n    justify-content:center;\n    box-sizing:border-box;\n    color: ", ";\n    background-color: ", ";\n    transition: height .25s ease-in-out;\n    '\n"])), props => props.display ? 'flex' : 'none', props => props.height, props => props.top ? '0' : '-100px', props => props.color, props => props.backgroundColor);
const StyledBanner = exports.StyledBanner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    // border: 2px solid pink;\n    flex-direction: column;\n    position:relative;\n    display: flex;\n    // padding: 5px;\n"])));
const StyledTitleBox = exports.StyledTitleBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n// border: 2px solid red;\ndisplay: flex;\njustify-content:center;\n// padding:5px;\nflex:1;\n"])));
const CenterItemsStyled = exports.CenterItemsStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    // border: 2px solid teal;\n    font-size: 0.8rem;\n    flex:1;\n    // width:50%;\n"])));
const ItemsContainer = exports.ItemsContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    // border: 2px solid green;\n    display: flex;\n    justify-content:center;\n    // padding:5px;\n    align-items:center;\n    flex:1;\n    flex-wrap:wrap;\n    overflow-x:auto;\n    gap: .5rem;\n"])));
const ItemsContainerWrapper = exports.ItemsContainerWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\npadding-bottom:10px;\n@media (max-width:600px){\n    position:fixed;\n    bottom:0;z-index:99;\n    background:", ";width:100%;left:0;\n\n}\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.bgb3;
});