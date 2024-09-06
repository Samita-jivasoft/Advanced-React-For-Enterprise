"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableTable = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _data = require("app/data");
var _Crud = require("./Crud");
var _data2 = require("./data");
var _Table = require("./Table");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const SearchableTable = props => {
  const {
    list,
    children,
    setTableConfiguration,
    getTableConfiguration,
    tableConfiguration,
    selection,
    search,
    filters,
    detailView,
    grouping,
    refresh
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [listState, listDispatch] = (0, _data2.useList)();
  const [configurationState, configurationDispatch] = (0, _data2.useConfiguration)();
  const tableRef = /*#__PURE__*/(0, _react.createRef)();
  (0, _react.useEffect)(() => {
    var _list$tableConfigurat;
    // console.log('{ ...list, ...tableConfiguration }', {
    //   ...list,
    //   ...tableConfiguration
    // })
    listDispatch({
      type: 'INITIALIZE_DATA',
      // configuration: currentConfig,
      currentListProps: (_list$tableConfigurat = _objectSpread(_objectSpread({}, list), tableConfiguration)) !== null && _list$tableConfigurat !== void 0 ? _list$tableConfigurat : [],
      selection: selection,
      search: search,
      filters: filters,
      detailView: detailView,
      grouping: grouping,
      refresh: refresh
    });
  }, [list, setTableConfiguration]);
  (0, _react.useEffect)(() => {
    // console.log('SEARCHABLETABLE.js configurationState', configurationState.tableconfiguration)
    // console.log('SEARCHABLETABLE.js listState', listState)
    if (configurationState !== null && configurationState !== void 0 && configurationState.allowconfigurations) {
      configurationDispatch({
        type: 'UPDATE_CONFIGURATION',
        currentList: listState
      });
    }
  }, [listState, listsState]);
  (0, _react.useEffect)(() => {
    // console.log('configurationState', configurationState)
    if (configurationState !== null && configurationState !== void 0 && configurationState.allowconfigurations && configurationState.getTableConfiguration) {
      // getTableConfiguration(configurationState?.tableconfiguration)
      configurationState.getTableConfiguration(configurationState === null || configurationState === void 0 ? void 0 : configurationState.tableconfiguration);
    }
  }, [configurationState]);
  (0, _react.useEffect)(() => {
    if (tableRef !== null && tableRef !== void 0 && tableRef.current && listState.setrowposition === 1) {
      tableRef.current.scrollToRow(listState.viewableRows, 'start');
      listDispatch({
        type: 'RESET_ROW_POSITION',
        currentSetRowPosition: 0
      });
    }
    listDispatch({
      type: 'SET_COLUMNS',
      columns: listState === null || listState === void 0 ? void 0 : listState.columns.map(col => {
        return _objectSpread(_objectSpread({}, col), {}, {
          _width: (0, _Table.calculateColumnWidths)(tableRef, listState, listsState)
        });
      })
    });
  }, [viewWidth, viewHeight, listState.setrowposition, listState.crudlistitems]);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchableTableContainer, {
    horizontal: true,
    className: 'table-container'
    // padding={
    //   listIndex !== listsState?.lists?.length - 1 &&
    //   listsState.layout != 'tabs'
    // }
    //TODO: fix padding in respect to the number of to and from lists
  }, /*#__PURE__*/_react.default.createElement(_Table.Table, {
    tableRef: tableRef
  }), /*#__PURE__*/_react.default.createElement(_Crud.Crud, {
    children: children
  }));
};
exports.SearchableTable = SearchableTable;