"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsToolbar = exports.TablesWrapper = exports.TablesContainer = exports.TableTypeWrapper = exports.StyledIconWrapper = exports.StyledHeaderText = exports.StyledHeaderButton = exports.SearchableTableContainer = exports.MainContainer = exports.ArrowsContainer = void 0;
var _theme = require("app/theme");
var _helpers = require("app/helpers");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// SortSearchableTables.js
const MainContainer = exports.MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: ", ";\n  height: ", ";\n"])), props => props.width ? props.width : '100%', props => props.height ? props.height : '100%');
const TablesContainer = exports.TablesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid blue;\n  display: flex;\n  width: 100%;\n  height: 100%;\n"])));
const TableTypeWrapper = exports.TableTypeWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid pink;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"])));
const TabsToolbar = exports.TabsToolbar = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid pink;\n  display: flex;\n  width: 100%;\n  height: 40px;\n  align-items: center;\n"])));
const TablesWrapper = exports.TablesWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: ", ";\n  // overflow: ", ";\n  width: 100%;\n  height: 100%;\n  gap: 20px;\n"])), props => props.horizontal ? 'column' : 'row', props => props.horizontal ? 'auto' : null);
const ArrowsContainer = exports.ArrowsContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  // border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: ", ";\n"])), props => props.headerColor ? props.headerColor : _ref => {
  let {
    theme
  } = _ref;
  return theme.bga3;
});

// SearchableTable.js
const SearchableTableContainer = exports.SearchableTableContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid yellow;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-right: ", ";\n  color: ", ";\n"])), props => props.padding ? '20px' : null, props => props.textColor ? props.textColor : _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
});

// SearchTable.js Filter.js Groups.js
const StyledHeaderButton = exports.StyledHeaderButton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  cursor: pointer;\n  padding: ", ";\n"])), props => props.padding ? props.padding : '0px 0px 0px 15px');
const StyledIconWrapper = exports.StyledIconWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  ", ";\n"])), _ref3 => {
  var _theme$interaction;
  let {
    theme
  } = _ref3;
  return theme === null || theme === void 0 || (_theme$interaction = theme.interaction) === null || _theme$interaction === void 0 ? void 0 : _theme$interaction.shiftUpOnHover;
});
const StyledHeaderText = exports.StyledHeaderText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n  padding: 0px 0px 0px 5px;\n"])));