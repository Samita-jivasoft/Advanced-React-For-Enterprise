"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicLocationSearch = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DynamicButtonV = require("../../DynamicButtonV2");
var _fa = require("react-icons/fa");
var _helpers = require("app/helpers");
var _helpers2 = require("../helpers");
var _data = require("../data");
var _ResultsList = require("./ResultsList");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// This is for backups useful code incase any of these services are down
const BasicLocationSearch = props => {
  var _getAddressString;
  const {
    tryCount,
    setTryCount
  } = props;
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    locations,
    searchQuery,
    currentLocation,
    allowMultiple,
    placeholder
  } = mapState;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: placeholder,
    value: searchQuery,
    onChange: e => mapDispatch({
      type: 'SET_SEARCH_QUERY',
      searchQuery: e.target.value
    })
  }), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2
  // text={'Search'}
  , {
    type: 'chip',
    onClick: () => (0, _helpers2.handleSearch)(searchQuery, currentLocation, setTryCount, mapDispatch, tryCount),
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaSearch, null)
  })), searchQuery && /*#__PURE__*/_react.default.createElement(_ResultsList.ResultsList, null), (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.place_id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Current Location:", /*#__PURE__*/_react.default.createElement("div", {
    key: (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.place_id) + (0, _helpers.generateUUID)(),
    style: {
      marginLeft: '8px'
    }
  }, (_getAddressString = (0, _helpers2.getAddressString)(currentLocation)) === null || _getAddressString === void 0 ? void 0 : _getAddressString.string)), (0, _helpers2.formatLocationDisplayString)(locations, allowMultiple), locations === null || locations === void 0 ? void 0 : locations.map(location => {
    var _getAddressString2;
    return (location === null || location === void 0 ? void 0 : location.currentlocation) != 1 && /*#__PURE__*/_react.default.createElement("div", {
      key: location.name + (0, _helpers.generateUUID)(),
      style: {
        marginLeft: '8px'
      }
    }, (_getAddressString2 = (0, _helpers2.getAddressString)(location)) === null || _getAddressString2 === void 0 ? void 0 : _getAddressString2.string);
  }), (locations === null || locations === void 0 ? void 0 : locations.length) > 1 && /*#__PURE__*/_react.default.createElement("div", null, "Get Directions"));
};
exports.BasicLocationSearch = BasicLocationSearch;