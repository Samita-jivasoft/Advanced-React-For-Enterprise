"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledUserGroupDiv = exports.StyledGroupModalBackground = exports.StyledGroupContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledGroupModalBackground = exports.StyledGroupModalBackground = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display : flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n"])));
const StyledGroupContainer = exports.StyledGroupContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n   align-items: center;\n  justify-content: space-evenly;\n  margin: auto;\n  height: auto;\n  width: 90%;\n  padding-bottom: 10px;\n  overflow-y: scroll;\n  //border: solid 1px red;\n"])));
const StyledUserGroupDiv = exports.StyledUserGroupDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: ", ";\n  width: 80%;\n  padding-left: 10px;\n  font-size: calc(1rem + 1vmin);\n  font-weight: bold;\n  margin: 5px 0px 5px 0px;\n  ", ";\n  border-radius: ", ";\n\n  &:hover{\n    ", ";\n    border-radius: ", ";\n    cursor: ", ";\n  }\n"])), props => props.viewWidth > 700 ? '65px' : '45px', props => props.theme.panela1, props => props.viewWidth > 700 ? '10px' : '30px', props => props.theme.panela3, props => props.viewWidth > 700 ? '10px' : '30px', props => props.notAllowed ? 'not-allowed' : 'pointer');