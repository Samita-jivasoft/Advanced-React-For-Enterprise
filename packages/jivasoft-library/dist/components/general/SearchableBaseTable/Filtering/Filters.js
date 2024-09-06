"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filters = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _styles = require("./styles");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _data = require("../data");
var _FilterFunctions = require("./FilterFunctions");
var _helpers = require("./helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Filters = props => {
  var _listState$filters;
  const [listState, listDispatch] = (0, _data.useList)();
  return (listState === null || listState === void 0 ? void 0 : listState.filters) && /*#__PURE__*/_react.default.createElement(_styles.FiltersContainer, null, listState === null || listState === void 0 || (_listState$filters = listState.filters) === null || _listState$filters === void 0 ? void 0 : _listState$filters.map(item => item.Values.map(value => /*#__PURE__*/_react.default.createElement("div", {
    key: 'filter' + item + value,
    style: {
      display: 'flex',
      padding: '0px 5px 5px 0px',
      // border: '1px solid red',
      // height:'100%',
      // width: '100%',
      flexDirection: 'row'
      // height:'100px'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.themecolor,
    color: listState.textcolor,
    type: "chip",
    text: (0, _helpers.getChipLabel)(item === null || item === void 0 ? void 0 : item.Label, value),
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    onClick: () => (0, _FilterFunctions.removeFilter)(item, value, listState, listDispatch),
    iconPosition: "left"
  })))));
};
exports.Filters = Filters;