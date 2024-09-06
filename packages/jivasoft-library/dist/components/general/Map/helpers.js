"use strict";

require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchReverseGeocoding = exports.calculateDistance = void 0;
exports.formatLocationDisplayString = formatLocationDisplayString;
exports.getGoogleMapsLink = exports.getAddressString = exports.getAddressFromData = void 0;
exports.getUserLocation = getUserLocation;
exports.setInitialProps = exports.handleSearch = exports.handleResultClick = exports.handleNewLocation = exports.handleLocation = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _helpers = require("app/helpers");
const _excluded = ["searchResults", "position", "currentLocation", "disableMap", "locations", "markers", "searchQuery"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
const setInitialProps = _ref => {
  let {
      searchResults = [{
        display_name: 'Type to search',
        place_id: 'initial'
      }],
      position = {
        lat: 39.8283,
        lng: -98.5795
      },
      currentLocation = null,
      disableMap = true,
      locations = [],
      markers = [],
      searchQuery = ''
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return _objectSpread(_objectSpread({}, props), {}, {
    searchResults,
    position,
    currentLocation,
    disableMap,
    locations,
    searchQuery,
    markers
  });
};
exports.setInitialProps = setInitialProps;
const handleSearch = async (searchQuery, currentLocation, setTryCount, mapDispatch, tryCount) => {
  // console.log('searching...', currentLocation)
  if (currentLocation != null && currentLocation !== null && currentLocation !== void 0 && currentLocation.place_id) {
    try {
      const boundedValue = 20 + tryCount;
      const response = await fetchReverseGeocoding(searchQuery, currentLocation, boundedValue, false);
      if ((response === null || response === void 0 ? void 0 : response.length) === 0 && searchQuery && response.title !== '500 Internal Server Error') {
        setTryCount(tryCount + 1);
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [{
            display_name: 'Searching... ',
            place_id: 'unselectable'
          }]
        });
        return;
      }
      setTryCount(0);
      const selectedLocation = {
        latitude: currentLocation.position.lat,
        longitude: currentLocation.position.lng
      };
      const resultsWithDistance = response === null || response === void 0 ? void 0 : response.map(result => {
        const calculatedDistance = calculateDistance(selectedLocation, {
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon)
        });
        return _objectSpread(_objectSpread({}, result), {}, {
          calculated_distance: calculatedDistance,
          distance: ' ( Distance: ' + parseFloat(calculatedDistance.toFixed(1)) + ' miles )',
          display_name: result.display_name,
          place_id: result.place_id.toString()
        });
      });
      const sortedResults = resultsWithDistance.sort((a, b) => a.calculated_distance - b.calculated_distance);
      if (!searchQuery) {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [{
            display_name: 'Type to search...',
            place_id: 'unselectable'
          }]
        });
      } else if (sortedResults.length > 0) {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: sortedResults
        });
      } else {
        mapDispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [{
            display_name: 'Searching...',
            place_id: 'unselectable'
          }]
        });
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }
};
exports.handleSearch = handleSearch;
const handleResultClick = async (result, locations, mapDispatch, allowmultiple) => {
  console.log('handleResultClick', result);
  const position = {
    lat: result.lat,
    lng: result.lon
  };
  await handleLocation(position, result, null, locations, mapDispatch, allowmultiple);
};
exports.handleResultClick = handleResultClick;
const handleLocation = async (position, e, map, locations, mapDispatch, allowmultiple) => {
  var _e$display_name;
  // console.log(e.latlng.lat)
  let newLocation = {
    key: 'location-' + (0, _helpers.generateUUID)(),
    zoom: e.type === 'locationfound' ? 15 : map ? map.getZoom() : 15,
    position: position,
    name: (e === null || e === void 0 || (_e$display_name = e.display_name) === null || _e$display_name === void 0 || (_e$display_name = _e$display_name.split(/[0-9]/)[0]) === null || _e$display_name === void 0 ? void 0 : _e$display_name.trim().replace(/,/g, '')) || '',
    currentlocation: e.type === 'locationfound' ? 1 : 0
  };
  // console.log('newLocation', newLocation)

  const isLocationAlreadySaved = locations.some(marker => marker.position.lat === position.lat && marker.position.lng === position.lng);
  if (!isLocationAlreadySaved || newLocation.currentlocation === 1) {
    try {
      // const data = await fetchReverseGeocoding(position)
      const data = await fetchReverseGeocoding('', newLocation, 10, true);
      const address = getAddressFromData(data);
      newLocation = _objectSpread(_objectSpread({}, newLocation), address);
    } catch (error) {
      console.error('Error fetching location:', error);
    }

    // Call the function to handle adding the new location
    handleNewLocation(locations, newLocation, mapDispatch, allowmultiple);
  }
};
exports.handleLocation = handleLocation;
const handleNewLocation = (locations, newLocation, mapDispatch, allowmultiple) => {
  // console.log('handleOnClick', newLocation)
  if ((newLocation === null || newLocation === void 0 ? void 0 : newLocation.currentLocation) === 1) {
    mapDispatch({
      type: 'SET_CURRENT_LOCATION',
      currentLocation: newLocation
    });
  } else {
    // console.log('newLocation', newLocation)
    if (!allowmultiple) {
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: [newLocation]
      });
    } else {
      // If allowmultiple is true, just prepend the new location to the existing locations
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: [newLocation, ...locations]
      });
    }
  }
};
exports.handleNewLocation = handleNewLocation;
const fetchReverseGeocoding = async (searchQuery, location, boundedValue, initial) => {
  console.log(searchQuery, location, boundedValue, initial);
  const {
    city = '',
    state = '',
    position = {
      lat: '',
      lng: ''
    }
  } = location;
  // console.log('location', location)
  const formattedSearchQuery = searchQuery.trim().replace(/\s+/g, '+');
  let formattedCity = '';
  let formattedState = '';
  if (boundedValue <= 25) {
    formattedCity = city.trim().replace(/\s+/g, '+');
    formattedState = state.trim().replace(/\s+/g, '+');
  }
  const formattedQuery = [formattedSearchQuery, formattedCity, formattedState].filter(Boolean).join(',');
  let url = '';
  if (initial) {
    url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(position.lat, "&lon=").concat(position.lng, "&bounded=").concat(boundedValue);
  } else {
    url = "https://nominatim.openstreetmap.org/search?format=json&q=".concat(formattedQuery, "&bounded=").concat(boundedValue);
  }
  // console.log('url', url)
  try {
    const response = await fetch(url);
    // console.log('response', response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reverse geocoding:', error);
    return null; // or handle the error as needed
  }
};
exports.fetchReverseGeocoding = fetchReverseGeocoding;
const getAddressFromData = data => {
  // console.log('data', data)
  const {
    place_id = ''
  } = data;
  const {
    house_number = '',
    road = '',
    city = '',
    state = '',
    postcode = '',
    county = '',
    country = ''
  } = data.address || {};
  return {
    housenumber: house_number,
    road,
    city,
    state,
    postcode,
    county,
    country,
    place_id
  };
};
exports.getAddressFromData = getAddressFromData;
const getAddressString = marker => {
  // Construct the address string based on marker properties
  const addressArray = [marker === null || marker === void 0 ? void 0 : marker.name, "".concat(marker === null || marker === void 0 ? void 0 : marker.housenumber, " ").concat(marker === null || marker === void 0 ? void 0 : marker.road), "".concat(marker === null || marker === void 0 ? void 0 : marker.city, ", ").concat(marker === null || marker === void 0 ? void 0 : marker.state, ", ").concat(marker === null || marker === void 0 ? void 0 : marker.postcode), "".concat(marker === null || marker === void 0 ? void 0 : marker.county, ", ").concat(marker === null || marker === void 0 ? void 0 : marker.country)];

  // Remove empty elements and join the address components
  const formattedAddress = addressArray.filter(Boolean).join(', ');
  // console.log(formattedAddress)

  return {
    string: formattedAddress,
    encoded: encodeURIComponent(formattedAddress)
  };
};

// Function to get the user's current location
exports.getAddressString = getAddressString;
function getUserLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        latitude,
        longitude
      } = position.coords;
      const userLocation = "".concat(latitude, ",").concat(longitude);
      // Use the userLocation as needed, e.g., set it in state or call another function
      // console.log('User Location:', userLocation);
      callback(null, userLocation);
    }, error => {
      console.error('Error getting user location:', error.message);
      callback(error, null);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
    callback(new Error('Geolocation is not supported'), null);
  }
}
const getGoogleMapsLink = (marker, currentlocation) => {
  // Construct the Google Maps link for directions
  // console.log(marker, currentlocation)
  const addressString = getAddressString(marker).string;
  const encodedAddress = encodeURIComponent(addressString);
  // console.log('addressString', addressString)

  const currentLocationString = getAddressString(currentlocation).string;
  const encodedCurrentAddress = encodeURIComponent(currentLocationString);
  const googleMapsLink = "https://www.google.com/maps/dir/?api=1&origin=".concat(encodedCurrentAddress, "&destination=").concat(encodedAddress);
  // console.log('Google Maps Link:', googleMapsLink)
  return googleMapsLink;
};

// Function to calculate distance between two sets of coordinates
exports.getGoogleMapsLink = getGoogleMapsLink;
const calculateDistance = (coord1, coord2) => {
  // console.log(coord1, coord2)
  const R = 3959; // Earth radius in miles
  const φ1 = coord1.latitude * Math.PI / 180; // φ, λ in radians
  const φ2 = coord2.latitude * Math.PI / 180;
  const Δφ = (coord2.latitude - coord1.latitude) * Math.PI / 180;
  const Δλ = (coord2.longitude - coord1.longitude) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in miles
};
exports.calculateDistance = calculateDistance;
function formatLocationDisplayString(locations, allowMultiple) {
  const filteredLocations = locations === null || locations === void 0 ? void 0 : locations.filter(location => (location === null || location === void 0 ? void 0 : location.currentlocation) !== 1);
  if (filteredLocations.length > 0) {
    return 'Location' + (allowMultiple && filteredLocations.length > 1 ? 's: ' : ': ');
  } else {
    return '';
  }
}