"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableType = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("./data");
var _styles = require("./styles");
var _SearchableTable = require("./SearchableTable");
var _data2 = require("app/data");
var _TableView = require("./TableView");
var _helpers = require("./helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TableType = props => {
  const {
    type,
    headerColor,
    textColor,
    crudfunctions,
    setTableConfiguration,
    tableConfiguration
  } = props;
  const [themeState] = (0, _data2.useAppTheme)();
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [configurationState, configurationDispatch] = (0, _data.useConfiguration)();
  // console.log(listsState)
  const [listType, setListType] = (0, _react.useState)(type === "tolist" ? listsState.tolists : listsState.fromlists);
  (0, _react.useEffect)(() => {
    setListType(type === "tolist" ? listsState.tolists : listsState.fromlists);
  }, [listsState]);
  return (listType === null || listType === void 0 ? void 0 : listType.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.TableTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_TableView.TableView, _extends({}, props, {
    listType: listType,
    setListType: setListType
  })), /*#__PURE__*/_react.default.createElement(_styles.TablesWrapper, {
    horizontal: listsState.layout == "tabs"
  }, listType.map((i, index) => {
    // console.log(
    //   'TABLETYPE.js initialTableStates LISTREDUCER initialState still gets out of date',
    //   setInitialState(
    //     i.crudlistid,
    //     initialListState,
    //     configurationState,
    //     tableConfiguration,
    //     listsState,
    //     headerColor,
    //     themeState,
    //     textColor,
    //     crudfunctions
    //   )
    // )
    if ((listsState === null || listsState === void 0 ? void 0 : listsState.layout) === "tabs" && i !== null && i !== void 0 && i.activetab) {
      return /*#__PURE__*/_react.default.createElement(_data.ListProvider, {
        key: "provider" + i.crudlistid,
        initialState: (0, _helpers.setInitialState)(i.crudlistid, _data.initialListState, configurationState, tableConfiguration, listsState, headerColor, themeState, textColor, crudfunctions),
        reducer: _data.listReducer
      }, /*#__PURE__*/_react.default.createElement(_SearchableTable.SearchableTable, _extends({}, props, {
        key: i.crudlistid,
        list: i,
        listIndex: index,
        tableConfiguration: (0, _helpers.setInitialState)(i.crudlistid, _data.initialListState, configurationState, tableConfiguration, listsState, headerColor, themeState, textColor, crudfunctions)
      })));
    }
    if ((listsState === null || listsState === void 0 ? void 0 : listsState.layout) != "tabs") {
      return /*#__PURE__*/_react.default.createElement(_data.ListProvider, {
        key: "provider" + i.crudlistid,
        initialState: (0, _helpers.setInitialState)(i.crudlistid, _data.initialListState, configurationState, tableConfiguration, listsState, headerColor, themeState, textColor, crudfunctions),
        reducer: _data.listReducer
      }, /*#__PURE__*/_react.default.createElement(_SearchableTable.SearchableTable, _extends({}, props, {
        key: i.crudlistid,
        list: i,
        listIndex: index,
        tableConfiguration: (0, _helpers.setInitialState)(i.crudlistid, _data.initialListState, configurationState, tableConfiguration, listsState, headerColor, themeState, textColor, crudfunctions)
      })));
    }
  })));
};
exports.TableType = TableType;