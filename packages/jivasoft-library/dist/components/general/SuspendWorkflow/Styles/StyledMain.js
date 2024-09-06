"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkflowCounterDiv = exports.WorkflowButton = exports.StickySideDiv = exports.ScrollImgDiv = exports.RightIcon = exports.OverlayDiv = exports.ModalDiv = exports.ModalButton = exports.LeftIcon = exports.ImgModal = exports.ImgDiv = exports.FooterDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bs = require("react-icons/bs");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const OverlayDiv = exports.OverlayDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay: flex;\nposition: absolute;\npointer-events: none;\nz-index: 2;\nheight: 100%;\nwidth: 100%;\nalign-items: flex-end;\noverflow-x: scroll;\njustify-content: flex-end;\n"])));
const FooterDiv = exports.FooterDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: auto;\n  width: 100%;\n  padding-right: 10%;\n  pointer-events: none;\n  rgba: (0,0,0,0.0);\n  //background: red;\n  bottom: 0;\n  //right:0;\n"])));
const WorkflowButton = exports.WorkflowButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  //position: fixed;\n  z-index: 2;\n  height: 50px;\n  width: 80px;\n  background: ", ";\n  color: ", ";\n  border-radius: 8px;\n  border: none;\n  pointer-events: auto;\n  //right: 0;\n  //bottom: 0;\n  margin: 0px 5px 5px 0px;\n  &: hover{\n    cursor: pointer;\n    transform: scale(0.95);\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.bgb2;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
});
const ImgModal = exports.ImgModal = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margn-right: auto;\n  justify-content: flex-start; \n  align-self: flex-end;  \n  position: relative;\n  height: 150px;\n  width: ", ";\n  bottom: 0;\n  border-radius: 10px 0 0 10px;\n  pointer-events: auto;\n  margin-bottom: 7%;\n  background: ", ";\n  paddingx: 0% 5% 0% 0%;\n  white-space: nowrap;\n  transition: width .5s ease-in-out;\n"])), props => props.width + '%', _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.bg0;
});
const ScrollImgDiv = exports.ScrollImgDiv = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 90%;\n  width: auto;\n  //background: red;\n  paddingx: 0% 5% 0% 0%;\n  pointer-events: auto;\n  overflow-x: scroll;\n"])));
const WorkflowCounterDiv = exports.WorkflowCounterDiv = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  color: ", ";\n  border-radius: 50%;\n  //border: solid .5px black;\n  z-index: 10;\n  top: -10px;\n  left: -10px;\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.overlayBrightest;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
});
const StickySideDiv = exports.StickySideDiv = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  //background: red;\n  height: 100%;\n  width: 30px;\n  position: sticky;\n"])));
const LeftIcon = exports.LeftIcon = (0, _styledComponents.default)(_bs.BsChevronLeft)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height: 30px;\n  width: auto;\n  color: ", ";\n  &: hover {\n    cursor: pointer;\n    transform: scale(1.25);\n  }\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
});
const RightIcon = exports.RightIcon = (0, _styledComponents.default)(_bs.BsChevronRight)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 30px;\n  width: auto;\n  color: ", ";\n  &: hover{\n    cursor: pointer;\n    transform: scale(1.25);\n  }\n"])), _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text;
});
const ImgDiv = exports.ImgDiv = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nheight: 95%;\nwidth: 10%;\n//background: red;\nmin-width: 150px;\noverflow-x: scroll;\npadding-left: 2px;\npadding-right: 2px;\nopacity: ", ";\n//border: solid 2px red;\n&: hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  opacity: 1;\n}\n"])), props => props.opacity + '%');
const ModalDiv = exports.ModalDiv = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  //flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  justify-content: space-evenly;\n  //background: blue;\n"])));
const ModalButton = exports.ModalButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  height: 70px;\n  width: auto;\n  padding: 0% 5% 0% 5%;\n  font-size: 2rem;\n  font-weight: bold;\n  min-width: 80px;\n  border-radius: 10px;\n  &: hover{\n    cursor: pointer;\n    transform: scale(0.95);\n  }\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.bgb3;
});