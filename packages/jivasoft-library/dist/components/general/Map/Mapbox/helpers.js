"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMarker = exports.addMapEventListeners = exports.addGeocoderControls = exports.addExistingLocations = void 0;
exports.fetchMapboxGeocoding = fetchMapboxGeocoding;
exports.useGeolocation = exports.updateLocation = exports.setGeocoderSearchQuery = exports.initializeMap = exports.fitBoundsToLocations = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _mapboxGlGeocoder = _interopRequireDefault(require("@mapbox/mapbox-gl-geocoder"));
var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));
var _location = require("../../../../app/helpers/location");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Custom hook for handling geolocation
const useGeolocation = (mapState, mapDispatch, setZoom, setLocationFetched) => {
  (0, _react.useEffect)(() => {
    const fetchGeolocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(position => resolve(position.coords), error => reject(error), {
            timeout: 10000,
            // Timeout after 10 seconds (adjust as needed)
            enableHighAccuracy: true
          });
        });
        // console.log('get user position', position)
        // Dispatch position to map
        mapDispatch({
          type: 'SET_POSITION',
          position: {
            lat: position.latitude,
            lng: position.longitude
          }
        });
        setZoom(12);
        // Optionally fetch geocoding data or other actions here
        setLocationFetched(true); // Mark location as fetched
      } catch (error) {
        console.error('Error fetching geolocation:', error);
        if (mapState !== null && mapState !== void 0 && mapState.ip && mapState !== null && mapState !== void 0 && mapState.ipLocation) {
          mapDispatch({
            type: 'SET_POSITION',
            position: mapState === null || mapState === void 0 ? void 0 : mapState.ipLocation
          });
        } else {
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
            mapDispatch({
              type: 'SET_POSITION',
              position: location
            });
          }
        }
        setZoom(10);
        setLocationFetched(true); // Mark location fetch as complete even if failed
      }
    };
    fetchGeolocation();
  }, []);
};
exports.useGeolocation = useGeolocation;
const initializeMap = (mapContainer, position, zoom) => {
  // const position = {
  //   lat: 39.8283,
  //   lng: -98.5795
  // }
  return new _mapboxGl.default.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/standard',
    center: [position.lng, position.lat],
    // Initial position
    zoom: zoom // Initial zoom
  });
};
exports.initializeMap = initializeMap;
const addGeocoderControls = (map, mapState, mapDispatch, setNewLocation, geocoder) => {
  const {
    position,
    placeholder,
    allowMultiple,
    searchQuery
  } = mapState;
  setGeocoderSearchQuery(geocoder, searchQuery);
  // Add event listener to capture input changes
  const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder input');
  if (geocoderInput) {
    geocoderInput.addEventListener('input', e => {
      // Dispatch the search query to the state
      mapDispatch({
        type: 'SET_SEARCH_QUERY',
        searchQuery: e.target.value
      });
    });
  }

  // returns a feature
  geocoder.on('result', e => {
    // console.log('result', e)
    const {
      result
    } = e;
    const features = {
      features: [result]
    };
    // console.log('features', features)
    updateLocation(features, result.center, setNewLocation, map, mapState, mapDispatch);
  });
};
exports.addGeocoderControls = addGeocoderControls;
const addMapEventListeners = (map, setZoom, mapState, mapDispatch, setNewLocation, geocoder) => {
  const {
    allowMultiple
  } = mapState;

  // // Automatically trigger geolocation when the map loads
  // map.current.on('load', () => {
  //   geocoder.trigger()
  // })

  // onClick a point on the map set a marker
  // find closests features using mapbox api
  map.on('click', async e => {
    const {
      lng,
      lat
    } = e.lngLat;
    fetchMapboxGeocoding(lng, lat).then(data => {
      // console.log('Geocoding data:', data)
      updateLocation(data, [lng, lat], setNewLocation, map, mapState, mapDispatch);
    }).catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  });

  // update the position the user has the map on
  map.on('move', () => {
    setZoom(map.getZoom().toFixed(2));
    mapDispatch({
      type: 'SET_POSITION',
      position: {
        lat: map.getCenter().lat,
        lng: map.getCenter().lng
      }
    });
  });
};
exports.addMapEventListeners = addMapEventListeners;
const updateLocation = (data, coordinates, setNewLocation, map, mapState, mapDispatch) => {
  const {
    features
  } = data;
  const {
    locations,
    allowMultiple
  } = mapState;
  const newLocation = {
    features: features,
    position: {
      lat: coordinates[1],
      lng: coordinates[0]
    },
    currentLocation: 0 // Assuming currentLocation is set to 0 for new locations
  };
  setNewLocation(newLocation);
};
exports.updateLocation = updateLocation;
const addMarker = (map, coordinates, feature, mapState, mapDispatch) => {
  var _feature$context$filt, _feature$context$filt2;
  const {
    markers
  } = mapState;
  // console.log('coordinates', coordinates)
  // console.log('map feature', feature)
  const poiTitle = (_feature$context$filt = (_feature$context$filt2 = feature.context.filter(info => {
    var _info$id;
    return (info === null || info === void 0 || (_info$id = info.id) === null || _info$id === void 0 ? void 0 : _info$id.includes('poi')) && info;
  })[0]) === null || _feature$context$filt2 === void 0 ? void 0 : _feature$context$filt2.text) !== null && _feature$context$filt !== void 0 ? _feature$context$filt : null;
  // Create new marker with its Popup
  const marker = new _mapboxGl.default.Marker().setLngLat(coordinates).setPopup(new _mapboxGl.default.Popup({
    offset: 25
  }).setHTML("<h3>".concat(feature.properties.title || 'Location:', "</h3>\n        ").concat(poiTitle ? "<p>".concat(poiTitle, "</p>") : '', "\n        <p>").concat(feature.place_name, "</p>"))).addTo(map);
  mapDispatch({
    type: 'SET_MARKERS',
    markers: [...markers, marker]
  });
  // Add a class to the marker element for custom styling
  const markerElement = marker.getElement();
  markerElement.classList.add('marker');

  // Add custom attributes to the marker for identification
  markerElement.setAttribute('data-lng', coordinates[0]);
  markerElement.setAttribute('data-lat', coordinates[1]);

  // Add a click event listener to stop propagation and show the popup
  markerElement.addEventListener('click', e => {
    e.stopPropagation(); // Prevent map click event
    marker.togglePopup(); // Toggle the popup
  });

  // Add a mouseenter event listener to change the cursor to a pointer
  markerElement.addEventListener('mouseenter', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Add a mouseleave event listener to reset the cursor
  markerElement.addEventListener('mouseleave', () => {
    map.getCanvas().style.cursor = '';
  });
  return marker;
};
/**
 * Adds markers to a map for a list of locations. Handles both cases where locations already have features or need to be geocoded.
 * Uses async functions to handle asynchronous operations like fetching geocoding data.
 *
 * @param {object} map - The map object where markers will be added.
 * @param {array} locations - An array of location objects containing position and features information.
 */
exports.addMarker = addMarker;
const addExistingLocations = async (map, mapState, mapDispatch) => {
  const {
    locations
  } = mapState;
  try {
    // Map through each location and handle marker addition
    await Promise.all(locations === null || locations === void 0 ? void 0 : locations.map(async location => {
      var _data$features$;
      const {
        position,
        features
      } = location;
      const data = !features ? await fetchMapboxGeocoding(position.lng, position.lat) : {
        features
      };
      addMarker(map, [position.lng, position.lat], (_data$features$ = data.features[0]) !== null && _data$features$ !== void 0 ? _data$features$ : {}, mapState, mapDispatch);
    }));
  } catch (error) {
    // Handle any errors that occur during marker addition or geocoding fetch
    console.error('Error adding existing locations:', error);
    // Consider notifying the user or logging more specific error details
  }
};

// Function to fit bounds to the locations
exports.addExistingLocations = addExistingLocations;
const fitBoundsToLocations = (locations, map) => {
  if ((locations === null || locations === void 0 ? void 0 : locations.length) > 1 && map) {
    const bounds = new _mapboxGl.default.LngLatBounds();
    locations === null || locations === void 0 || locations.forEach(location => {
      const {
        position
      } = location;
      bounds.extend([position.lng, position.lat]);
    });
    map.fitBounds(bounds, {
      padding: 50
    });
  }
};
exports.fitBoundsToLocations = fitBoundsToLocations;
async function fetchMapboxGeocoding(lng, lat) {
  try {
    const response = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(lng, ",").concat(lat, ".json?access_token=").concat(_mapboxGl.default.accessToken));
    if (!response.ok) {
      throw new Error('Failed to fetch geocoding data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Mapbox geocoding data:', error);
    return null;
  }
}
const setGeocoderSearchQuery = (geocoder, searchQuery) => {
  if (searchQuery) {
    const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder input');
    if (geocoderInput) {
      geocoderInput.value = searchQuery;
      geocoder.query(searchQuery);
    }
  }
};
exports.setGeocoderSearchQuery = setGeocoderSearchQuery;