"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchAll = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("../data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SearchAll = props => {
  const [listState, listDispatch] = (0, _data.useList)();
  return listState.searching === 1 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      padding: '0px 0px 5px 0px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    style: {
      cursor: 'pointer'
    },
    onChange: e => {
      e.target.checked ? listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: listState.filters,
        currentSearchColumns: listState.columns.map(col => col.crudcolumnid.toLowerCase()),
        currentSearchInput: listState.searchinput,
        currentSearchingState: listState.searching
      }) : listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: listState.filters,
        currentSearchColumns: [],
        currentSearchInput: listState.searchinput,
        currentSearchingState: listState.searching
      });
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, "Search All Columns"));
};
exports.SearchAll = SearchAll;