"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapMain = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("./data");
require("leaflet/dist/leaflet.css");
require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
require("leaflet-defaulticon-compatibility");
require("leaflet.fullscreen/Control.FullScreen.css");
var _styles = require("./styles");
var _reactLeaflet = require("react-leaflet");
var _Leaftlet = require("./Leaftlet");
var _helpers = require("./helpers");
var _BasicLocationSearch = require("./BasicLocationSearch");
var _Mapbox = require("./Mapbox");
var _location = require("../../../app/helpers/location");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MapMain = props => {
  const {} = props;
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    locations,
    position,
    searchQuery,
    searchResults,
    getLocations,
    allowMultiple,
    getSearchResults,
    currentLocation
  } = mapState;

  // useEffect(() => {
  //   console.log('mapState', mapState)
  // }, [mapState])

  const [timeoutId, setTimeoutId] = (0, _react.useState)(null);
  const [tryCount, setTryCount] = (0, _react.useState)(0);
  const fetchAndSetIpLocation = async mapDispatch => {
    const ipInfo = await (0, _location.fetchIpInformation)();
    if (ipInfo) {
      const {
        ip,
        location
      } = ipInfo;
      mapDispatch({
        type: 'SET_IP',
        ip
      });
      mapDispatch({
        type: 'SET_IP_LOCATION',
        location
      });
    }
  };
  (0, _react.useEffect)(() => {
    // Fetch IP and location on mount
    fetchAndSetIpLocation(mapDispatch);
  }, []);
  (0, _react.useEffect)(() => {
    // console.log('locations', locations)
    getLocations && getLocations(locations);
  }, [locations]);
  (0, _react.useEffect)(() => {
    getSearchResults && getSearchResults(searchResults);
  }, [searchResults]);
  (0, _react.useEffect)(() => {
    // console.log('searchQuery', searchQuery)
    if (searchQuery && (searchResults === null || searchResults === void 0 ? void 0 : searchResults.filter(res => !res.place_id.includes('unselectable')).length) < 1) {
      mapDispatch({
        type: 'SET_SEARCH_RESULTS',
        searchResults: [{
          display_name: 'Press enter to refresh...',
          place_id: 'unselectable'
        }]
      });
      (0, _helpers.handleSearch)(searchQuery, currentLocation, setTryCount, mapDispatch, tryCount);
    }
    if (!searchQuery) {
      mapDispatch({
        type: 'SET_SEARCH_RESULTS',
        searchResults: [{
          display_name: 'Type to search...',
          place_id: 'unselectable'
        }]
      });
    }
  }, [searchQuery]);
  (0, _react.useEffect)(() => {
    // Clear the timeout when unmounting or when searchResults change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, null, /*#__PURE__*/_react.default.createElement(_Mapbox.Mapbox, props)));
};
exports.MapMain = MapMain;