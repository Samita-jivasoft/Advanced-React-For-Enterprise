"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableBaseTable = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireWildcard(require("react"));
var _SortSearchableTables = require("./SortSearchableTables");
var _data = require("./data");
var _helpers = require("./helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SearchableBaseTable = props => {
  const {
    data,
    setTableConfiguration,
    getTableConfiguration,
    onSave,
    filters = true,
    selection = false,
    search = true,
    refresh = false,
    detailView = true
  } = props;
  // console.log('MAIN.js setTableConfiguration', setTableConfiguration)
  // console.log(
  //   'MAIN.js initialconfig',
  //   getInitialConfigurations(
  //     setTableConfiguration,
  //     data,
  //     getTableConfiguration
  //   )
  // )
  // console.log('data', data)

  return /*#__PURE__*/_react.default.createElement(_data.ListsProvider, {
    initialState: _data.initialLists,
    reducer: _data.listsReducer
  }, /*#__PURE__*/_react.default.createElement(_data.ConfigurationProvider, {
    initialState: (0, _helpers.getInitialConfigurations)(setTableConfiguration, data, getTableConfiguration, onSave),
    reducer: _data.configurationReducer
  }, /*#__PURE__*/_react.default.createElement(_SortSearchableTables.SortSearchableTables, _extends({}, props, {
    tableConfiguration: (0, _helpers.getInitialConfigurations)(setTableConfiguration, data, getTableConfiguration, onSave)
  }))));
};
exports.SearchableBaseTable = SearchableBaseTable;