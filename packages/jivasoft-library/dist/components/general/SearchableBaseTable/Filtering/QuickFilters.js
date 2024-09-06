"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickFilters = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _FilterFunctions = require("./FilterFunctions");
var _bs = require("react-icons/bs");
var _styles = require("../styles");
var _data2 = require("app/data");
var _DynamicSwitcher = require("../../DynamicSwitcher");
var _helpers = require("app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const QuickFilters = props => {
  const {
    criteria,
    setCriteria,
    quickFilters,
    setQuickFilters
  } = props;
  //tablestate from context
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [listState, listDispatch] = (0, _data.useList)();
  const [themeState] = (0, _data2.useAppTheme)();
  const [filterColumn, setFilterColumn] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    // console.log(filterColumn)
    if (filterColumn.filter) {
      // console.log(filterColumn)
      if (filterColumn.filter.id[0] === '1') {
        (0, _FilterFunctions.setFilters)(listState, listDispatch, filterColumn.column, '1');
        // removeFilter(filterColumn.column, '0', listState, listDispatch)
      }
      if (filterColumn.filter.id[0] === '0') {
        // removeFilter(filterColumn.column, '1', listState, listDispatch)
        (0, _FilterFunctions.setFilters)(listState, listDispatch, filterColumn.column, '0');
      }
    }
  }, [filterColumn]);

  // const addFilter = (colid, column) => {
  // }

  return false && quickFilters && listsState.columns && listsState.columns.map(i => i.quickfilter).includes(1) && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      alignItems: 'center'
    }
  }, listsState && listsState.columns && listsState.columns.map(column => column.quickfilter ? /*#__PURE__*/_react.default.createElement("div", {
    key: column.crudcolumnid,
    style: {
      padding: '0px 5px 5px 0px'
      // border: '1px solid red'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicSwitcher.DynamicSwitcher, {
    backgroundColor: (0, _helpers.LightenDarkenColor)(listState.themecolor, -50),
    color: themeState.currentTheme.text,
    selectedColor: themeState.currentTheme.successColorBase,
    width: 'auto',
    height: '20px',
    items: [{
      id: '1-' + column.crudcolumnid,
      label: 'filled'
    }, {
      id: '0-' + column.crudcolumnid,
      label: 'unfilled'
    }],
    handleParent: filter => setFilterColumn({
      filter: filter,
      column: column
    })
    // defaultValue={'1a'}
    // column
  })) : null), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, {
    style: {
      marginLeft: 'auto',
      cursor: 'pointer'
    },
    onClick: () => setQuickFilters(false)
  }, "Hide Filters"));
};
exports.QuickFilters = QuickFilters;