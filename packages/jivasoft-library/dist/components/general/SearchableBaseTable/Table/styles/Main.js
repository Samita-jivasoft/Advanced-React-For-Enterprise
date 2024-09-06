"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableElementWrapper = exports.TableContainer = exports.StyledTable = exports.RegularCell = exports.Loading = exports.HeaderAndTableContainer = exports.GlobalStyle = exports.ExpadingCell = exports.Empty = exports.AutoResizerWrapper = void 0;
var _reactBaseTable = _interopRequireWildcard(require("react-base-table"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const GlobalStyle = exports.GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .BaseTable.active-col-", " [data-col-idx=\"", "\"] {\n      // box-shadow: 0px 2px 4px 2px #eeeeee;\n      // background: rgba(229,229,229, .5);\n      border-left: 2px dashed #777;\n      border-right: 2px dashed #777;\n    }\n  .BaseTable.column-drop-zone-", " [data-col-idx=\"", "\"] {\n        background: red;\n      }\n  "])), props => props.column, props => props.column, props => props.column, props => props.column);
const StyledTable = exports.StyledTable = (0, _styledComponents.default)(_reactBaseTable.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .BaseTable__header {\n    overflow: ", " !important;\n  }\n  .BaseTable__header-row {\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n  }\n  .BaseTable__header-cell {\n    // border: 1px solid red;\n    border-right: ", ";\n    background-color: ", ";\n    display: flex;\n  }\n  .BaseTable__expand-icon {\n    padding: none;\n    margin: none;\n  }\n  .BaseTable__body {\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    // ", ";\n    ::-webkit-scrollbar {\n      -webkit-appearance: none !important;\n      background-color: #e3e3e3 !important;\n    }\n\n    ::-webkit-scrollbar:vertical {\n      width: 10px !important;\n    }\n\n    ::-webkit-scrollbar:horizontal {\n      height: 10px !important;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      border-radius: 10px !important;\n      border: 2px solid #e3e3e3 !important;\n      background-color: ", " !important;\n\n      &:hover {\n        background-color: #666 !important;\n      }\n    }\n    ::-webkit-resizer {\n      display: none !important;\n    }\n  }\n\n  .BaseTable__row {\n    background-color: ", ";\n    cursor: ", ";\n    &:hover,\n    &--hovered {\n      filter: ", ";\n    }\n  }\n\n  .BaseTable__row-cell {\n    border-right: ", ";\n  }\n  .row-index {\n    padding: 0px !important;\n  }\n  .expanding-row {\n    // background: red;\n    border-right: none !important;\n  }\n  .row-selected {\n    background-color: #e3e3e3;\n    border: 1px solid green;\n  }\n  .row-excluded {\n    opacity: 0.3;\n  }\n  .row-status-assigned {\n    background-color: ", ";\n  }\n  .row-status-pending {\n    background-color: ", ";\n  }\n  .row-status-drafts {\n    background-color: ", ";\n  }\n  .row-status-flags {\n    background-color: ", ";\n  }\n  .row-status-incomplete {\n    background-color: ", ";\n  }\n\n  .dragging {\n    // background: rgba(229,229,229, .5);\n    margin-right: 10px;\n    width: 100px;\n  }\n  .dropzone.dragover {\n    background-color: ", ";\n    border-left: 5px solid ", ";\n    // flex: none;\n    // width: 7.5px;\n    // height: 100%;\n\n    // &::before {\n    //   content: '';\n    //   border-left: 4px dotted #ccc;\n    //   display: block;\n    //   height: 20px;\n    //   margin: 15px 3px;\n    // }\n\n    // &:hover::before {\n    //   border-color: #888;\n    // }\n  }\n"])), _ref => {
  let {
    data
  } = _ref;
  return (data === null || data === void 0 ? void 0 : data.length) > 0 ? 'hidden' : 'auto';
}, props => props.themeColor, _ref2 => {
  let {
    textColor,
    theme
  } = _ref2;
  return textColor ? textColor : theme.text;
}, props => props.textSize, props => props.showVerticalGridLines && '1px solid #eeeeee', props => props.themeColor, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.id === 'light' ? null : theme.bgb3;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.text;
}, props => props.textSize, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.scrollable;
}, props => props.themeColor, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.id === 'light' ? null : theme.bgb3;
}, props => props.detailView ? 'pointer' : null, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.id === 'light' ? 'brightness(95%)' : 'brightness(70%)';
}, props => props.showVerticalGridLines && '1px solid #eeeeee', _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.assigned;
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.pending;
}, _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.drafts;
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.cutoff;
}, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.incomplete;
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.bgb3;
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.successColorBase;
});
const TableContainer = exports.TableContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  width: 100%;\n  height: 85%;\n  column-gap: 2%;\n  margin-bottom: 20px;\n"])));
const HeaderAndTableContainer = exports.HeaderAndTableContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  height: 100%;\n"])), props => props.showDetailView ? '50%' : '100%');
const AutoResizerWrapper = exports.AutoResizerWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 5px;\n  overflow: hidden;\n  border: none !important;\n  width: 100%;\n  height: 100%;\n"])), _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.id === 'light' ? theme.panela3 : theme.panelb3;
});
const TableElementWrapper = exports.TableElementWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  //add ellipsis??\n  // overflow: hidden;\n  // white-space: nowrap;\n  // text-overflow: ellipsis;\n\n  // border: 1px solid blue;\n  padding: 0px !important;\n  margin: 0px !important;\n  font-size: ", "!important;\n\n  .element-main * {\n    // border: 1px solid red;\n    font-weight: normal !important;\n    padding: 0px !important;\n    margin: 0px !important;\n    font-size: ", "!important;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  // .element *{\n  //   // transform: scale(90%);\n  //   font-weight: normal !important;\n  //   padding: 0px !important;\n  //   margin: 0px !important;\n  // }\n"])), props => props.fontSize, props => props.fontSize);
const ExpadingCell = exports.ExpadingCell = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  white-space: nowrap;\n  position: absolute;\n"])));
const RegularCell = exports.RegularCell = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  z-index: 2;\n"])));
const Empty = exports.Empty = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", ";\n  border-radius: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 16px;\n"])), _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.id === 'light' ? null : theme.bgb3;
});
const Loading = exports.Loading = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  // width:40%;\n  // display: flex;\n  justify-content: center;\n  padding-left: ", "px;\n  color: ", ";\n"])), _ref17 => {
  let {
    paddingLeft
  } = _ref17;
  return paddingLeft;
}, _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.text;
});