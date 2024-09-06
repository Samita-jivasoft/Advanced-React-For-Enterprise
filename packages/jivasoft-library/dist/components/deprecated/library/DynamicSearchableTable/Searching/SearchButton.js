"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("../styles");
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SearchButton = props => {
  const {
    list,
    firstColumn,
    setOpenSearch,
    setSearchColumn
  } = props;
  const initSearch = () => {
    setOpenSearch(true);
    setSearchColumn([firstColumn]);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    onClick: () => initSearch()
  }, /*#__PURE__*/_react.default.createElement(_fa.FaSearch, {
    size: '15px'
  }), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Search"));
};
exports.SearchButton = SearchButton;