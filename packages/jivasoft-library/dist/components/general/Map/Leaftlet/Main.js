"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapControls = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactLeaflet = require("react-leaflet");
require("leaflet/dist/leaflet.css");
require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
require("leaflet-defaulticon-compatibility");
require("leaflet.fullscreen/Control.FullScreen.css");
var _reactLeafletFullscreen = require("react-leaflet-fullscreen");
var _PicklistSearch = require("./PicklistSearch");
var _BottomController = require("./BottomController");
var _helpers = require("../helpers");
var _helpers2 = require("./helpers");
var _useOutsideAlerter = require("../../../../app/helpers/useOutsideAlerter");
var _data = require("../data");
var _CustomPopup = _interopRequireDefault(require("./CustomPopup"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MapControls = props => {
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    locations,
    allowMultiple,
    position,
    currentLocation,
    disableMap
  } = mapState;
  const searchRef = (0, _react.useRef)(null);
  const bottomController = (0, _react.useRef)(null);
  const onClickOutside = () => {
    // console.log('clicked outside searchRef')
    mapDispatch({
      type: 'SET_DISABLE_MAP',
      disable: false
    });
    (0, _helpers2.enableMapInteractions)(map);
  };
  (0, _useOutsideAlerter.useOutsideAlerter)([searchRef, bottomController], onClickOutside);
  const handleLocationSelection = async e => {
    // console.log('here?? ', e)
    const {
      lat,
      lng
    } = e.latlng;
    const position = {
      lat,
      lng
    };
    // console.log('e', e, map, e.type === 'locationfound' ? 15 : map.getZoom())
    const zoom = e.type === 'locationfound' ? 15 : map.getZoom();
    // console.log(locations)
    if (locations.length === 0) {
      // console.log('zoom', zoom, e.latlng)
      map.flyTo(e.latlng, zoom);
      mapDispatch({
        type: 'SET_POSITION',
        position: e.latlng
      });
    }
    await (0, _helpers.handleLocation)(position, e, map, locations, mapDispatch, allowMultiple);
  };
  const map = (0, _reactLeaflet.useMapEvents)({
    locationfound: handleLocationSelection,
    // mouseout: e => {
    //   console.log(e)
    // },
    click: e => {
      // console.log('mapclicked', disableMap, e)
      if (!disableMap) {
        handleLocationSelection(e);
      }
    },
    dragend: e => {
      mapDispatch({
        type: 'SET_POSITION',
        position: e.target.getCenter()
      });
    }
  });
  (0, _react.useEffect)(() => {
    // console.log('here in map')
    if (locations.length === 0) {
      map.locate();
    } else {
      (0, _helpers2.locatePosition)(map, mapDispatch, locations[0]);
    }
  }, [map, locations]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLeaflet.TileLayer, {
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), /*#__PURE__*/_react.default.createElement(_reactLeafletFullscreen.FullscreenControl, {
    position: "topright"
  }), /*#__PURE__*/_react.default.createElement(_BottomController.BottomController, {
    map: map,
    bottomController: bottomController
  }), locations === null || locations === void 0 ? void 0 : locations.map(marker => /*#__PURE__*/_react.default.createElement(_reactLeaflet.Marker, {
    key: marker === null || marker === void 0 ? void 0 : marker.key,
    position: marker === null || marker === void 0 ? void 0 : marker.position,
    draggable: true
  }, /*#__PURE__*/_react.default.createElement(_CustomPopup.default, {
    marker: marker,
    currentLocation: currentLocation
  }))));
};
exports.MapControls = MapControls;