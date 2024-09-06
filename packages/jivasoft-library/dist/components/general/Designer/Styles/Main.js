"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportTemplateButton = exports.ReportScrollDiv = exports.HeaderRowButton = exports.HeaderRow = exports.DesignerContainer = exports.DesignModalHeader = exports.DesignModalFooter = exports.DesignModalContainer = exports.DesignModalBody = exports.DesignModalBackground = exports.DesignCloseSymbol = exports.DesignButtonHeaderClose = exports.DesignButtonClose = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bs = require("react-icons/bs");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DesignerContainer = exports.DesignerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: scroll;\n  width: 100%;\n  background: red;\n"])));
const HeaderRow = exports.HeaderRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display:flex;\n  height: auto;\n  width: 100%;\n  padding: 10px 0 10px 5px;\n  background: ", ";\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.bga1;
});
const DesignModalBackground = exports.DesignModalBackground = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5) !important;\n  z-index: 1000;\n"])));
const DesignModalContainer = exports.DesignModalContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 25%;\n  max-height: 40%;\n  width: 40%;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #F0F3F4;\n  border-radius : 1%;\n"])));
const DesignModalHeader = exports.DesignModalHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  //background: red;\n  height: 35%;\n  width: 90%;\n  font-size: 1.25rem;\n  font-weight: semi-bold;\n  padding: 5% 5% 0% 5%;\n  align-items: center;\n  justify-content: space-between;\n"])));
const DesignModalBody = exports.DesignModalBody = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 45%;\n  max-height: 50%;\n  width: 95%;\n  //background: red;\n  padding: 10px 0% 5px 5%;\n  align-items: flex-start;\n  border-top: solid 1px #ccd3d2;\n  border-bottom: solid 1px #ccd3d2;\n  font-size: 1rem;\n  font-weight: bold;\n"])));
const ReportScrollDiv = exports.ReportScrollDiv = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  //row-gap: 5px;\n  width: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  //background: green;\n  height: auto;\n"])));
const ReportTemplateButton = exports.ReportTemplateButton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 90%;\n  height: 50px;\n  padding-left: 15px;\n  border: solid grey;\n  border-width: thin;\n"])));
const DesignModalFooter = exports.DesignModalFooter = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 35%;\n  width: 90%;\n  padding: 5% 5% 0% 5%;\n  align-items: flex-start;\n  justify-content: flex-end;\n  //background: purple;\n"])));
const DesignButtonHeaderClose = exports.DesignButtonHeaderClose = _styledComponents.default.button(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  background: transparent;\n  border: none;\n"])));
const DesignCloseSymbol = exports.DesignCloseSymbol = (0, _styledComponents.default)(_bs.BsX)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  color: #9c9a9a;\n  &: hover{\n    cursor : pointer;\n    color: #363636;\n  }\t\n"])));
const DesignButtonClose = exports.DesignButtonClose = _styledComponents.default.button(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  border-radius: 4px;\n  color: #262d2c;\n  border: 1px solid #ccd3d2;\n  &: hover{\n    cursor:pointer;\n    background: #262d2c;\n    color: #e5eceb;\n  }\n"])));
const HeaderRowButton = exports.HeaderRowButton = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px 15px 5px 15px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  color: ", ";\n  &: hover{\n    cursor:pointer;\n    background: #262d2c;\n    color: #e5eceb;\n  }\n"])), _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.bgb1;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.text;
});