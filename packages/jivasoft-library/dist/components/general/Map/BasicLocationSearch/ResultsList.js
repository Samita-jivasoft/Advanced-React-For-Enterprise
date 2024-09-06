"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultsList = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _helpers = require("app/helpers");
var _data = require("../data");
var _styles = require("./styles");
var _helpers2 = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ResultsList = props => {
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    searchResults,
    searchQuery,
    allowMultiple,
    locations
  } = mapState;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      padding: '10px'
    }
  }, searchResults.length > 0 && searchQuery != '' ? searchResults.map(result => /*#__PURE__*/_react.default.createElement(_styles.StyledList, {
    key: result.place_id + (0, _helpers.generateUUID)(),
    onMouseOver: e => console.log('result', result),
    onClick: e => {
      console.log('here', e);
      e.preventDefault();
      e.stopPropagation();
      console.log('onClick result', result);
      // handleResultClick(result, locations, mapDispatch, allowMultiple)
    }
  }, result === null || result === void 0 ? void 0 : result.display_name, result === null || result === void 0 ? void 0 : result.distance)) : 'Searching...');
};
exports.ResultsList = ResultsList;