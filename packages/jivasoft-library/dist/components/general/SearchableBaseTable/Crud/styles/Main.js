"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferItemsContainer = exports.SelectedContainer = exports.CrudItemsContainer = exports.CrudItem = exports.CrudActionsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// TransferItems.js
const SelectedContainer = exports.SelectedContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: 100%;\n  // cursor:pointer;\n"])));
const TransferItemsContainer = exports.TransferItemsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  // width: fit-content;\n  height: fit-content;\n  padding: 5px;\n  border-radius: 5px;\n  white-space: no-wrap;\n  overflow: hidden;\n  cursor: pointer;\n"])));
const CrudActionsContainer = exports.CrudActionsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  padding-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  // height: '30%;\n  overflow: auto;\n"])));
const CrudItemsContainer = exports.CrudItemsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  justifycontent: ", ";\n  padding-bottom: 10px;\n"])), props => props.listType === 'tolist' ? 'flex-end' : null);
const CrudItem = exports.CrudItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n"])));