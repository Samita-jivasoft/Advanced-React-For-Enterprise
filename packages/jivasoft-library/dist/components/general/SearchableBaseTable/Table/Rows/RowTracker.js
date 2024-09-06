"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowTracker = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _Tooltip = require("../../../Tooltip");
var _data = require("../../data");
var _data2 = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RowTracker = props => {
  const {
    tableRef
  } = props;
  const [listsState] = (0, _data.useLists)();
  const [listState] = (0, _data.useList)();
  const {
    crudlistitems,
    viewableRows
  } = listState;
  const getTableLength = items => {
    let count = 0;
    items === null || items === void 0 || items.forEach(item => {
      var _item$children;
      count += 1; // Count the current item
      if (item !== null && item !== void 0 && item.children && (item === null || item === void 0 || (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) > 0) {
        count += getTableLength(item === null || item === void 0 ? void 0 : item.children); // Recursively count children
      }
    });
    return count;
  };
  return ((viewableRows === null || viewableRows === void 0 ? void 0 : viewableRows.end) > 0 || (crudlistitems === null || crudlistitems === void 0 ? void 0 : crudlistitems.length) > 0) && /*#__PURE__*/_react.default.createElement("div", {
    className: "row_tracker",
    style: {
      display: 'flex',
      // border: '1px solid red',
      justifyContent: 'center',
      alignItems: 'center',
      // fontSize:'16px'
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "Showing Rows ", viewableRows === null || viewableRows === void 0 ? void 0 : viewableRows.start, " to ", viewableRows === null || viewableRows === void 0 ? void 0 : viewableRows.end, " of", ' ', getTableLength(crudlistitems)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid black',
      width: 'fit-content',
      height: 'fit-content'
    }
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    headerColor: listState.themecolor,
    themeColor: listState.themecolor,
    textColor: listState.textcolor,
    direction: 'bottom',
    content: 'Click to scroll to the top'
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2
  // color={listState.themecolor}
  , {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, null),
    onClick: () => {
      var _tableRef$current;
      return tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.scrollToTop(0);
    }
  }))));
};
exports.RowTracker = RowTracker;