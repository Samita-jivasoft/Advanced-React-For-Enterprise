"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrudItemsContainer = exports.CrudItem = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// CrudListActions.js
const CrudItemsContainer = exports.CrudItemsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  width: 100%;\n  display: flex;\n  justifycontent: ", ";\n"])), props => props.listType === 'tolist' ? 'flex-end' : null);
const CrudItem = exports.CrudItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n"])));