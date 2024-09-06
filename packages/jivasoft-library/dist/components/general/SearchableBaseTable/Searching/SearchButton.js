"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../styles");
var _fa = require("react-icons/fa");
var _data = require("../data");
var _data2 = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchButton = props => {
  const {
    tableRef
  } = props;
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [listState, listDispatch] = (0, _data.useList)();
  const initSearch = () => {
    var _tableRef$current;
    tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.scrollToRow(0, 'start');
    listDispatch({
      type: 'SET_SEARCH',
      searchColumns: listsState && listsState.columns && listsState.columns.length > 0 ? [listsState.columns[0].crudcolumnid.toLowerCase()] : [],
      searchInput: '',
      searchingState: 1
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => listState.crudlistitems && initSearch()
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledIconWrapper, null, /*#__PURE__*/_react.default.createElement(_fa.FaSearch, {
    size: '15px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Search")));
};
exports.SearchButton = SearchButton;