"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnreviewedIcon = exports.ScrollButtonDiv = exports.ScrollButtonContainer = exports.ScreenScrollButton = exports.NeedsReviewIcon = exports.MainStyled = exports.MainOverflowDiv = exports.FlaggedIcon = exports.CompleteIcon = exports.ColumnStyledDiv = exports.ColumnScrollButton = exports.ColumnHeader = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bs = require("react-icons/bs");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const MainOverflowDiv = exports.MainOverflowDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100%;\n  box-sizing: border-box;\n  min-width: 200px;\n  // overflow: scroll;\n  // background: green;\n"])));
const MainStyled = exports.MainStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: 100%;\n  //columns.length should adjust this on smaller screens; one column means 100vw ;)\n  ", "\n  align-items: center;\n  justify-content: space-evenly;\n  //overflow: scroll;\n"])), props => {
  if (props.viewWidth < 925 && props.viewWidth >= 600) {
    return "width: 150vw;";
  } else if (props.viewWidth < 600 && props.viewWidth >= 450) {
    return "width:200vw;";
  } else if (props.viewWidth < 450) {
    return "width:250vw;";
  } else {
    return "width: 98vw;";
  }
});
const ColumnStyledDiv = exports.ColumnStyledDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  ", "\n  min-width: 20%;\n  border-radius:5px;\n  // border: solid 1px black;\n  background: ", ";\n  gap: 0%;\n  overflow-x: static;\n"])), props => {
  if (props.viewWidth < 850 && props.viewWidth >= 600) {
    return "width: 35%;";
  } else if (props.viewWidth < 600 && props.viewWidth >= 450) {
    return "width: 40%;";
  } else if (props.viewWidth < 450) {
    return "width: 45%;";
  } else {
    return "width: 24%;";
  }
}, _ref => {
  let {
    theme
  } = _ref;
  return theme.overlayDimmest;
});
const ColumnHeader = exports.ColumnHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5%;\n  width: 100%;\n  // border-radius: 0.5rem;\n  //background: ghostwhite;\n  // background: ", ";\n  color:", ";\n  font-size: calc(0.5rem + 0.5vmin);\n  font-weight: bold;\n  gap: 5%;\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.overlayDimmest;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
});
const ScrollButtonContainer = exports.ScrollButtonContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    width\n"])));
const ScrollButtonDiv = exports.ScrollButtonDiv = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 95%;\n  height: 5%;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  padding-top: 1%;\n"])));
const ColumnScrollButton = exports.ColumnScrollButton = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 2px solid #0e3e6c;\n  height: 90%;\n  width: 45%;\n  padding: 1%;\n  color: ", ";\n  border-radius: 8px;\n  font-size: calc((0.3rem) + 1vmin);\n"])), props => props.background, props => props.color);
const ScreenScrollButton = exports.ScreenScrollButton = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 2px solid #0e3e6c;\n  height: 90%;\n  width: 45%;\n  padding: 1%;\n  color: ", ";\n  border-radius: 8px;\n  font-size: calc((0.3rem) + 1vmin);\n"])), props => props.background, props => props.color);
const UnreviewedIcon = exports.UnreviewedIcon = (0, _styledComponents.default)(_bs.BsFillExclamationCircleFill)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: #ed2939;\n"])));
const FlaggedIcon = exports.FlaggedIcon = (0, _styledComponents.default)(_bs.BsFillFlagFill)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: orange;\n"])));
const NeedsReviewIcon = exports.NeedsReviewIcon = (0, _styledComponents.default)(_bs.BsFillExclamationTriangleFill)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: #feda75;\n"])));
const CompleteIcon = exports.CompleteIcon = (0, _styledComponents.default)(_bs.BsFillCheckCircleFill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: green;\n"])));