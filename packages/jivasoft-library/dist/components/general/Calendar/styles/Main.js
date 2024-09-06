"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodayButton = exports.TableContainer = exports.StyledTable = exports.StyledHeader = exports.StyledDropdown = exports.StyledDayDetailHeader = exports.StyledDayDetail = exports.StyledDay = exports.StyledCalendar = exports.RowContainer = exports.EditIcon = exports.Counter = exports.ArrowButton = void 0;
var _constants = require("app/constants");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _animation = require("../../../../app/theme/constants/animation");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const StyledCalendar = exports.StyledCalendar = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n/* Positioning logic */\nposition:", ";\nbox-sizing:border-box;\nbackground-color: #fff;\n\nz-index: 1000;\nbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\nwidth: ", ";\n  height: ", ";\noverflow-y: auto; // Ensure contents don't overflow\noverflow-x:hidden;\ndisplay: flex;      // Turn this into a flex container\nflex-direction: column;  // Stack children vertically\n\n\npadding:10px;\nborder-radius:10px;\nalign-items:center;\nuser-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n\n  @media (max-width: ", "px) { // use the sm breakpoint value you've defined\n    position: ", ";\n    left:0;\n    z-index: 1001; // Ensure it's above the blur background\n  }\n\n  ", "\n"])), props => {
  var _props$styles, _props$styles2;
  return props !== null && props !== void 0 && (_props$styles = props.styles) !== null && _props$styles !== void 0 && _props$styles.position ? props === null || props === void 0 || (_props$styles2 = props.styles) === null || _props$styles2 === void 0 ? void 0 : _props$styles2.position : 'absolute';
}, props => {
  var _props$styles3, _props$styles4;
  return props !== null && props !== void 0 && (_props$styles3 = props.styles) !== null && _props$styles3 !== void 0 && _props$styles3.width ? props === null || props === void 0 || (_props$styles4 = props.styles) === null || _props$styles4 === void 0 ? void 0 : _props$styles4.width : '300px';
}, props => {
  var _props$styles5, _props$styles6;
  return props !== null && props !== void 0 && (_props$styles5 = props.styles) !== null && _props$styles5 !== void 0 && _props$styles5.height ? props === null || props === void 0 || (_props$styles6 = props.styles) === null || _props$styles6 === void 0 ? void 0 : _props$styles6.height : '300px';
}, _constants.sm, props => {
  var _props$styles7, _props$styles8;
  return props !== null && props !== void 0 && (_props$styles7 = props.styles) !== null && _props$styles7 !== void 0 && _props$styles7.position ? props === null || props === void 0 || (_props$styles8 = props.styles) === null || _props$styles8 === void 0 ? void 0 : _props$styles8.position : 'fixed';
}, _ref => {
  let {
    animateDay
  } = _ref;
  if (animateDay) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      overflow-y:hidden;\n      "])));
  }
});
const StyledTable = exports.StyledTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  overflow: auto;\n  align-items:center;\n  position:relative;\n\n  border-collapse: separate;  // Separate the borders\n  border-spacing: 5px;        // Add spacing between cells\n"])));
const EditIcon = exports.EditIcon = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top:-10px; // adjust as needed\n  right: 0px; // adjust as needed\n  background: #fff;\n  border-radius: 50%;\n  color:black;\n  height:25px;\n  align-items:center;\n  justify-content:center;\n  width:25px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  display:none;\n\n  z-index:999;\n  font-size: 15px; // or other desired size\n  &:hover {\n    color:  #007AFF;\n    background-color: #f6f6f6;\n\n  }\n"])));
const StyledDayDetailHeader = exports.StyledDayDetailHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nposition:relative;\nbackground:  #007AFF;\nflex-direction:column;\nheight:150px;\nborder-radius:20px;\nalign-items:center;\njustify-content:flex-start;\ndisplay:flex;\ncolor:white;\nfont-size:20px;\nfont-weight:bold;\nanimation: ", " 0.5s forwards, ", " 8s ease-in-out infinite;\n\nwidth:150px;\n"])), _animation.fadeInScaledAnimation, _animation.breatheAnimation);
const StyledDay = exports.StyledDay = _styledComponents.default.td(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  text-align: center;\n  position: relative;\n  ", ";\n  height:100%;\n  opacity:", ";\n  overflow: visible; // ensure child elements aren't cut off\n  &:hover .dayWrapper > ", " {\n    opacity:", ";\n\n    display:", ";\n\n  }\n  // &:hover.selected .dayWrapper > ", " {\n  //   opacity: 1;\n  //   display:flex;\n\n  // }\n  .dayWrapper{\n    width:100%;\n    justify-content:flex-start;\n    text-align:left;\n    margin-left:5px;\n    margin-top:5px;\n    box-sizing:border-box;\n    position:absolute;\n    top:0px;\n    left:0px;\n  }\n  .timeWrapper{\n    opacity:.7;\n    font-weight:normal!important;\n    display:flex;\n    justify-content:flex-end;\n    font-size:12px !important;\n    flex-direction:column;\n    height:100%;\n    width:100%;\n  }\n\n\n\n  cursor:", ";\n  height: 14.28%; // 100% divided by 7 (for 7 rows)\n  padding: 5px;\n  margin: 5px; // Add margin to space out the days\n  transition: background-color 0.3s;\n  background-color: #f5f5f5;\n  border-radius: 6px;\n\n\n\n\n  &.disabled {\n    color: #777; // Darker text color for non-current month dates\n    background-color: #e0e0e0; // Darker background color for non-current month dates\n  }\n\n  &.disabled.selected {\n    background-color: #0259b8; // Darker selected background for non-current month dates\n    color: #fff;\n  }\n  &.today {\n    font-weight: bold;\n    color:#009AFF;\n    border:1px solid #009AFF;\n  }\n\n  &.selected {\n\n    background-color: #007AFF;\n    color: #fff;\n  }\n  ", "\n\n\n  &.animate {\n    pointer-events:none;\n    animation: ", " 0.5s forwards !important;\n    z-index:999;\n  }\n\n"])), _ref2 => {
  let {
    enabled,
    theme
  } = _ref2;
  return enabled ? theme.selectable : null;
}, _ref3 => {
  let {
    enabled
  } = _ref3;
  return enabled ? 1 : .4;
}, EditIcon, _ref4 => {
  let {
    enabled
  } = _ref4;
  return enabled ? 1 : 0;
}, _ref5 => {
  let {
    enabled
  } = _ref5;
  return enabled ? 'flex' : 'hidden';
}, EditIcon, _ref6 => {
  let {
    enabled
  } = _ref6;
  return enabled ? 'pointer' : null;
}, _ref7 => {
  let {
    animateDay
  } = _ref7;
  if (animateDay) {
    return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      z-index:0;\n\n      "])));
  }
}, _animation.scaleAnimation);
const RowContainer = exports.RowContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n height:100%;\n margin-top:10px;\n width:8px;\n opacity:1;\n\n display:flex;\n flex-direction:column;\n justify-content:space-around;\n\n width: 25px;\n\n @media (max-width: ", "px) {\n  display:none;\n\n}\n"])), _constants.sm);
const TableContainer = exports.TableContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative; // this will be the anchor for absolutely positioned children\n  width: 100%;\n  height: 100%;\n  display:flex;\n  flex-direction:row;\n"])));
const StyledHeader = exports.StyledHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n  height:10%;\n  width:100%;\n\n  font-size: 12px;\n  position: relative; // to position the CloseButton absolutely within it\n"])));
const ArrowButton = exports.ArrowButton = _styledComponents.default.button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: #888;\n  transition: color 0.3s;\n\n  &:hover {\n    color: #555;\n  }\n"])));
const StyledDropdown = exports.StyledDropdown = _styledComponents.default.select(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  font-weight: bold;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  outline: none; // to remove the focus outline for better aesthetics\n\n  &:hover {\n    background-color: #f0f0f0; // subtle hover effect\n  }\n"])));
const CloseButton = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 35px;\n  height: 35px;\n\n  border-radius: 50%; // makes it circular\n  background-color: #eee;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #ddd;\n  }\n"])));
const TodayButton = exports.TodayButton = _styledComponents.default.button(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: #f5f5f5;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  color: #007BFF;\n  height: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 6px;\n  ", ";\n\n\n"])), _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.selectable;
});
// const TodayButton = styled.div`
//   background-color: #007BFF; // You can adjust this as per your design preference
//   color: #fff;
//   font-size: 8px; // Adjust for your desired size
//   padding: 2px 4px;
//   border-radius: 3px;
//   margin-bottom: 5px; // Space between the banner and the date
//   text-align: center;
//   width: 100%;
// `;
const fadeIn = (0, _styledComponents.keyframes)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
const StyledDayDetail = exports.StyledDayDetail = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  top: 0;\n  left: 0;\n  opacity: 0; // Start with an opacity of 0\n  animation: ", " 0.2s forwards; // Use the fade-in animation\n  position: absolute;\n  height: 100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-around;\n  align-items:center;\n\n  width: 100%;\n  ", ";\n  z-index: 999;\n"])), fadeIn, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.panea3;
});
const Counter = exports.Counter = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  background-color: #007AFF; // color of selected background\n  padding: 5px 10px;\n  display:flex;\n  font-weight:bold;\n  align-items:center;\n  ", ";\n  justify-content:center;\n  border-radius: 5px;\n  animation: ", " 0.3s ease-in-out forwards;\n  color:white;\n\n  &:hover {\n    background-color: ", ";; // color of selected background\n    > svg{\n            display:flex;\n    }\n\n  }\n\n  & > svg { // Targeting the FaTimes icon (or any direct child SVG of Counter)\n    display:none;\n    transition: display 0.5s ease-in-out; // Smooth transition for the opacity\n\n}\n\n\n"])), _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.selectable;
}, fadeIn, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.dangerColor;
});