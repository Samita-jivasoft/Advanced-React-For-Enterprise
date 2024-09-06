"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortSearchableTables = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _SearchableTable = require("./SearchableTable");
var _data = require("./data");
var _TableType = require("./TableType");
var _Seperator = require("./Seperator");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SortSearchableTables = props => {
  const {
    width,
    height,
    data,
    handleParent,
    getChangedItems,
    tableConfiguration,
    setTableConfiguration,
    getTableConfiguration
  } = props;

  //dispatch to global state with lists
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [configurationState, configurationDispatch] = (0, _data.useConfiguration)();
  (0, _react.useEffect)(() => {
    listsDispatch({
      type: 'INITIALIZE_DATA',
      data: data
    });
  }, [data]);
  (0, _react.useEffect)(() => {
    // console.log('configurationState', configurationState)
    // console.log('tableConfig', tableConfiguration)
    if (configurationState !== null && configurationState !== void 0 && configurationState.allowconfigurations) configurationDispatch({
      type: 'INITIALIZE_DATA',
      configurations: tableConfiguration
    });
  }, [setTableConfiguration]);
  (0, _react.useEffect)(() => {
    if (getChangedItems) {
      getChangedItems(listsState === null || listsState === void 0 ? void 0 : listsState.changeditems);
    }
  }, [listsState.changeditems]);
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    className: 'main-container',
    width: width,
    height: height
  }, data ? /*#__PURE__*/_react.default.createElement(_styles.TablesContainer, null, /*#__PURE__*/_react.default.createElement(_TableType.TableType, _extends({}, props, {
    type: 'fromlist'
  })), /*#__PURE__*/_react.default.createElement(_Seperator.Seperator, props), /*#__PURE__*/_react.default.createElement(_TableType.TableType, _extends({}, props, {
    type: 'tolist'
  }))) : /*#__PURE__*/_react.default.createElement(_data.ListProvider, {
    key: 'default',
    initialState: _data.initialListState,
    reducer: _data.listReducer
  }, /*#__PURE__*/_react.default.createElement(_SearchableTable.SearchableTable, _extends({}, props, {
    key: 'default',
    list: ''
  }))));
};
exports.SortSearchableTables = SortSearchableTables;