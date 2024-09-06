"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = exports.FormElementContent = exports.FormElementContainer = exports.FiltersContainer = exports.FilterContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// Filter.js
const FilterContainer = exports.FilterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  // border: 1px solid white;\n"])));
const ModalContent = exports.ModalContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin-left: 10px;\n"])));
const FormElementContent = exports.FormElementContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  // align-items: center;\n"])));
const FormElementContainer = exports.FormElementContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid blue;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  // align-items: center;\n  // justify-content: center;\n"])));
// QuickFilters.js
// Filters.js
const FiltersContainer = exports.FiltersContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 2px solid black;\n  display: flex;\n  align-content: flex-start;\n  width: 100%;\n  // overflow-wrap:anywhere\n"])));