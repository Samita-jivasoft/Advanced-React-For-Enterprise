"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMaps = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const GoogleMaps = props => {
  const [selectedLocation, setSelectedLocation] = (0, _react.useState)({
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  });
  return /*#__PURE__*/_react.default.createElement(MapContainer, null, /*#__PURE__*/_react.default.createElement(GoogleMapReact, {
    bootstrapURLKeys: {
      key: ''
    } //requires api key
    ,
    defaultCenter: selectedLocation.center,
    defaultZoom: selectedLocation.zoom,
    yesIWantToUseGoogleMapApiInternals: true
  }, /*#__PURE__*/_react.default.createElement(Marker, {
    lat: 59.955413,
    lng: 30.337844
  }, "'Hello'")));
};
exports.GoogleMaps = GoogleMaps;