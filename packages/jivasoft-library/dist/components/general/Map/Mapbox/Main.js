"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mapbox = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));
require("mapbox-gl/dist/mapbox-gl.css");
require("@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css");
var _data = require("../data");
var _helpers = require("../helpers");
var _helpers2 = require("./helpers");
var _styles = require("./styles");
var _RemoveMarkersControl = require("./RemoveMarkersControl");
var _mapboxGlGeocoder2 = _interopRequireDefault(require("@mapbox/mapbox-gl-geocoder"));
var _AccessTokenContext = require("../../../../app/data/context/AccessTokenContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// src/Map.js

const Mapbox = props => {
  const {
    mapboxAccessToken
  } = (0, _AccessTokenContext.useAccessToken)();
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    position,
    locations,
    allowMultiple,
    placeholder,
    searchQuery,
    setSearchQuery,
    markers
  } = mapState;
  // useEffect(() => {
  //   console.log('mapState', mapState)
  // }, [mapState])
  // useEffect(() => {
  //   console.log('locations', locations)
  // }, [locations])
  const mapContainer = (0, _react.useRef)(null);
  const map = (0, _react.useRef)(null);
  const [zoom, setZoom] = (0, _react.useState)(4); // Zoom level to show the entire country
  const [locationFetched, setLocationFetched] = (0, _react.useState)(false);
  const [newLocation, setNewLocation] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    // console.log('newLocation??')
    const {
      position,
      features
    } = newLocation;
    if (position) {
      const markerExists = markers.some(marker => marker._lngLat.lng === position.lng && marker._lngLat.lat === position.lat);
      if (!markerExists) {
        (0, _helpers.handleNewLocation)(locations, newLocation, mapDispatch, allowMultiple);

        // If allowMultiple is false, remove all existing markers before adding the new one
        if (!allowMultiple) {
          markers.forEach(marker => marker.remove());
          mapDispatch({
            type: 'SET_MARKERS',
            markers: []
          });
        }

        // Add the new marker
        (0, _helpers2.addMarker)(map.current, position, features[0], mapState, mapDispatch);
      }
    }
  }, [newLocation]);
  const [removeMarkers, setRemoveMarkers] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // console.log('remove clicked', markers, locations)
    if (removeMarkers) {
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: []
      });
      markers.forEach(marker => {
        marker.remove();
      });
      mapDispatch({
        type: 'SET_MARKERS',
        markers: []
      });
      setRemoveMarkers(false);
    }
  }, [removeMarkers]);
  (0, _react.useEffect)(() => {
    // console.log('locations updated??', markers, locations)
    // console.log('markers', markers)
    if (map.current) {
      const control = map.current._controls.find(ctrl => ctrl instanceof _RemoveMarkersControl.RemoveMarkersControl);
      if (control) {
        control.update(locations.length > 0);
      }
    }
  }, [locations]);
  (0, _helpers2.useGeolocation)(mapState, mapDispatch, setZoom, setLocationFetched);
  (0, _react.useEffect)(() => {
    if (!mapboxAccessToken) {
      console.error('Mapbox access token is required');
      return;
    }
    _mapboxGl.default.accessToken = mapboxAccessToken;
    if (!map.current && locationFetched) {
      // Initialize the map
      map.current = (0, _helpers2.initializeMap)(mapContainer, position, zoom);
      // Add basic controls to the map
      map.current.addControl(new _mapboxGl.default.FullscreenControl());
      map.current.addControl(new _mapboxGl.default.NavigationControl());
      map.current.addControl(new _mapboxGl.default.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }), 'bottom-right');
      // Add custom remove markers control
      const removeMarkersControl = new _RemoveMarkersControl.RemoveMarkersControl(() => {
        setRemoveMarkers(true);
      }, locations.length > 0);
      // Add custom remove markers control
      map.current.addControl(removeMarkersControl, 'bottom-right');

      // Initialize geocoder
      const geocoder = new _mapboxGlGeocoder2.default({
        accessToken: _mapboxGl.default.accessToken,
        mapboxgl: _mapboxGl.default,
        collapsed: true,
        placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : null,
        marker: false,
        types: 'country,region,place,postcode,locality,neighborhood,address,poi',
        proximity: {
          longitude: position.lng,
          latitude: position.lat
        }
      });
      map.current.addControl(geocoder, 'top-left');
      // Add geocoder controls to the map
      (0, _helpers2.addGeocoderControls)(map.current, mapState, mapDispatch, setNewLocation, geocoder);
      // Add event listeners to the map
      (0, _helpers2.addMapEventListeners)(map.current, setZoom, mapState, mapDispatch, setNewLocation, geocoder);
      // Initialize default locations already saved
      if (typeof locations === 'string') {
        (0, _helpers2.setGeocoderSearchQuery)(geocoder, locations);
      } else if ((locations === null || locations === void 0 ? void 0 : locations.length) > 0) {
        // console.log('doing this?')
        (0, _helpers2.addExistingLocations)(map.current, mapState, mapDispatch);
        (0, _helpers2.fitBoundsToLocations)(locations, map.current);
      }
    }
  }, [locationFetched, mapState]);
  return /*#__PURE__*/_react.default.createElement(_styles.MapboxContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: mapContainer,
    style: {
      width: '100%',
      height: '100%'
    }
  }));
};
exports.Mapbox = Mapbox;