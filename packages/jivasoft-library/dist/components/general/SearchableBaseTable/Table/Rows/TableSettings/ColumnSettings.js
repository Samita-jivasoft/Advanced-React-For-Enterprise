"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnSettings = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../../../data");
var _styles = require("./styles");
var _md = require("react-icons/md");
var _data2 = require("app/data");
var _helpers = require("../../helpers");
var _bs = require("react-icons/bs");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ColumnSettings = props => {
  var _listState$columns, _listState$columns2;
  const [listState, listDispatch] = (0, _data.useList)();
  const [themeState] = (0, _data2.useAppTheme)();
  const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
  const [draggedOverIndex, setDraggedOverIndex] = (0, _react.useState)(null);
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.target.classList.add('dragging');
  };
  const handleDragEnd = (e, index) => {
    e.target.style.opacity = '1';
    e.target.classList.remove('dragging');
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOverIndex(index);
    //TODO: add animation to moving columns
  };
  const handleDrop = (e, targetIndex) => {
    const newColumns = [...listState.columns];
    const [draggedColumn] = newColumns.splice(draggedIndex, 1);
    newColumns.splice(targetIndex, 0, draggedColumn);
    listDispatch({
      type: 'SET_COLUMNS',
      columns: newColumns
    });
    setDraggedOverIndex(null);
  };
  return (listState === null || listState === void 0 || (_listState$columns = listState.columns) === null || _listState$columns === void 0 ? void 0 : _listState$columns.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Settings, {
    themeColor: listState.themecolor
  }, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Column Settings:"), /*#__PURE__*/_react.default.createElement(_styles.SortableList, {
    className: "sortable-list"
  }, (listState === null || listState === void 0 || (_listState$columns2 = listState.columns) === null || _listState$columns2 === void 0 ? void 0 : _listState$columns2.length) > 0 && listState.columns.map((column, index) => {
    var _column$crudlistids, _column$crudlistids2;
    return (column === null || column === void 0 ? void 0 : column.iscolumn) === 1 && ((column === null || column === void 0 || (_column$crudlistids = column.crudlistids) === null || _column$crudlistids === void 0 ? void 0 : _column$crudlistids.some(id => id.crudlistid === listState.crudlistid)) || !(column !== null && column !== void 0 && column.crudlistids) || (column === null || column === void 0 || (_column$crudlistids2 = column.crudlistids) === null || _column$crudlistids2 === void 0 ? void 0 : _column$crudlistids2.length) === 0) && /*#__PURE__*/_react.default.createElement(_styles.ColumnRow, {
      className: "item",
      key: column.crudcolumnid,
      themeColor: listState.themecolor,
      draggable: true,
      onDragStart: e => handleDragStart(e, index),
      onDragEnd: e => handleDragEnd(e, index),
      onDragOver: e => handleDragOver(e, index),
      onDragEnter: e => e.preventDefault(),
      onDrop: e => handleDrop(e, index)
    }, /*#__PURE__*/_react.default.createElement(_styles.RowDetails, {
      className: "details"
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        paddingRight: '10px'
      }
    }, /*#__PURE__*/_react.default.createElement(_md.MdDragIndicator, {
      color: themeState.currentTheme.bgb2
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      checked: column._hidden == 1 ? 0 : 1,
      onChange: () => (0, _helpers.HandleHiddenColumn)(column.crudcolumnid, listState, listDispatch)
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '4px'
      }
    }, column.label)), /*#__PURE__*/_react.default.createElement(_bs.BsFillPinAngleFill, {
      color: column._pinned ? themeState.currentTheme.successColorBase : themeState.currentTheme.bg0,
      onClick: () => (0, _helpers.HandlePinnedColumn)(column.crudcolumnid, listState, listDispatch)
    })));
  })));
};
exports.ColumnSettings = ColumnSettings;