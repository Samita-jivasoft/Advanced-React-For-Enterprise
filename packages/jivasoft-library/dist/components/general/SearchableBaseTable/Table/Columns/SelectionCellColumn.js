"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionCellColumn = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../../data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SelectionCellColumn = props => {
  const {
    rowData,
    rowIndex,
    column
  } = props;
  const [listState, listDispatch] = (0, _data.useList)();
  const handleChange = e => {
    listDispatch({
      type: 'SET_MODIFIEDTABLE_SELECTED',
      selectedItemRowKey: rowData.rowKey,
      selectedInput: e.target.checked,
      selectedIndex: rowIndex
    });
  };
  return /*#__PURE__*/_react.default.createElement("input", {
    id: rowData.rowKey + '_selection',
    key: 'checkbox',
    type: 'checkbox',
    checked: rowData._selected,
    style: {
      cursor: 'pointer'
    },
    onChange: e => handleChange(e),
    onClick: e => e.stopPropagation()
  });
};
exports.SelectionCellColumn = SelectionCellColumn;