"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomPopup = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLeaflet = require("react-leaflet");
var _helpers = require("../helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomPopup = props => {
  var _marker$position, _marker$position2;
  const {
    marker,
    currentLocation
  } = props;
  // console.log(marker, currentLocation)
  return /*#__PURE__*/_react.default.createElement(_reactLeaflet.Popup, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Address"), ":", marker.name && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), marker.name), /*#__PURE__*/_react.default.createElement("a", {
    href: (0, _helpers.getGoogleMapsLink)(marker, currentLocation),
    target: "_blank",
    rel: "noopener noreferrer"
  }, (marker.housenumber || marker.road) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), marker.housenumber, " ", marker.road), (marker.city || marker.state || marker.postcode) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), marker.city && marker.city + ', ', marker.state && marker.state + ', ', marker.postcode && marker.postcode), (marker.county || marker.country) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), marker.county && marker.county + ', ', marker.country && marker.country)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("b", null, "Lat"), ": ", marker === null || marker === void 0 || (_marker$position = marker.position) === null || _marker$position === void 0 ? void 0 : _marker$position.lat, " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("b", null, "Lng"), ": ", marker === null || marker === void 0 || (_marker$position2 = marker.position) === null || _marker$position2 === void 0 ? void 0 : _marker$position2.lng, " ", /*#__PURE__*/_react.default.createElement("br", null)));
};
exports.CustomPopup = CustomPopup;
var _default = exports.default = CustomPopup;