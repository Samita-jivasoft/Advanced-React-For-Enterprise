"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicSearchableTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _data = require("./data");
var _SortSearchableTables = require("./SortSearchableTables");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DynamicSearchableTable = props => {
  return /*#__PURE__*/_react.default.createElement(_data.ListsProvider, {
    initialState: _data.initialState,
    reducer: _data.listsReducer
  }, /*#__PURE__*/_react.default.createElement(_SortSearchableTables.SortSearchableTables, props));
};

// DynamicSearchableTable.defaultProps = {
//   filters: true,
//   selection: true,
//   search: true
// }
exports.DynamicSearchableTable = DynamicSearchableTable;