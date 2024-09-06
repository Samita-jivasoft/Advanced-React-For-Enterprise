"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _bs = require("react-icons/bs");
var _styles = require("./styles");
var _data2 = require("../data");
var _Element = require("../../Element");
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchField = props => {
  const {
    tableRef,
    showcaret
  } = props;
  const [listState, listDispatch] = (0, _data2.useList)();
  const [isPending, startTransition] = (0, _react.useTransition)();
  const handleChange = e => {
    var _tableRef$current;
    e.preventDefault();
    tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.scrollToRow(0, 'start');
    if (listState.crudlistitems.length > 0) {
      // startTransition puts searching to top priority
      startTransition(() => {
        listDispatch({
          type: 'SET_MODIFIED_TABLE',
          currentFilters: listState.filters,
          currentSearchColumns: listState.searchcolumns,
          currentSearchInput: e.target.value,
          currentSearchingState: !showcaret ? 1 : listState.searching
        });
      });
    }
  };
  const clearSearch = () => {
    // highlight(activeColumn, '')
    startTransition(() => {
      listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: listState.filters,
        currentSearchColumns: [],
        currentSearchInput: '',
        currentSearchingState: 0
      });
    });
  };
  return !showcaret && /*#__PURE__*/_react.default.createElement(_styles.SearchFieldContainer, {
    showcaret: showcaret
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: 'searchInput',
    type: 'search',
    placeholder: 'Search...',
    value: listState.searchinput,
    style: {
      width: '100%'
    },
    onChange: handleChange,
    autoFocus: showcaret !== false ? true : false
  }), showcaret !== false && /*#__PURE__*/_react.default.createElement(_bs.BsFillCaretUpFill, {
    style: {
      padding: '0px 0px 0px 5px',
      cursor: 'pointer'
    },
    size: '24px',
    onClick: () => clearSearch()
  }));
};
exports.SearchField = SearchField;