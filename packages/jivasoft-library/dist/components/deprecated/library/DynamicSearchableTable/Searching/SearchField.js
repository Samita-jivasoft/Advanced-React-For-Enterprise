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
var _data2 = require("../data");
var _HelperFunctions = require("../HelperFunctions");
var _Sorting = require("../Sorting");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchField = props => {
  const {
    list,
    tableData,
    sortInfo,
    setTableData,
    activeColumn,
    setOpenSearch,
    setCheckAll,
    setSearchColumn
  } = props;
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [isPending, startTransition] = (0, _react.useTransition)();
  const [themeState] = (0, _data.useAppTheme)();
  const handleChange = e => {
    e.preventDefault();
    if (tableData.length > 0) {
      // console.log('in here')
      /* THIS SETS THE PRIORITY HIGHER TO UPDATE */
      startTransition(() => {
        listsDispatch({
          type: 'SET_SEARCH_INPUT',
          input: e.target.value
        });
      });

      /* THIS  MAKES SEARCH INPUT LAG BECAUSE UPDATING THE TABLE AND INPUT ARE THE SAME PRIORITY*/
      // listsDispatch({
      //   type: 'SET_SEARCH_INPUT',
      //   action: e.target.value
      // })
    }
  };
  const clearSearch = () => {
    setOpenSearch(false);
    if (tableData.length > 0) {
      setCheckAll(false);
      (0, _HelperFunctions.highlight)(activeColumn, '');
      setSearchColumn([]);
      startTransition(() => {
        listsDispatch({
          type: 'SET_SEARCH_INPUT',
          input: ''
        });
      });
      setTableData((0, _Sorting.handleSorting)(tableData, sortInfo.sortField, sortInfo.sortOrder));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.SearchFieldContainer, null, /*#__PURE__*/_react.default.createElement("input", {
    id: 'searchInput',
    type: 'search',
    placeholder: 'Search...',
    style: {
      width: '100%'
    },
    onChange: e => handleChange(e),
    autoFocus: true
  }), /*#__PURE__*/_react.default.createElement(_bs.BsFillCaretUpFill, {
    style: {
      padding: '0px 0px 0px 5px',
      cursor: 'pointer'
    },
    size: '24px',
    onClick: () => clearSearch()
  }));
};
exports.SearchField = SearchField;