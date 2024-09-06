"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLocationForDisplay = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Converts a geographic coordinate to DMS (degrees, minutes, seconds) format.
 *
 * @param {number} coordinate - The coordinate to convert.
 * @param {string} type - The type of coordinate ('lat' or 'lng').
 * @returns {string} The coordinate in DMS format.
 */
const convertToDMS = (coordinate, type) => {
  const absCoordinate = Math.abs(coordinate);
  const degrees = Math.floor(absCoordinate);
  const minutes = Math.floor((absCoordinate - degrees) * 60);
  const seconds = ((absCoordinate - degrees - minutes / 60) * 3600).toFixed(2);
  const direction = coordinate >= 0 ? type === 'lat' ? 'N' : 'E' : type === 'lat' ? 'S' : 'W';
  return "".concat(degrees, "\xB0 ").concat(minutes, "' ").concat(seconds, "\" ").concat(direction);
};

/**
 * Formats a location object for display based on the mask type.
 *
 * @param {Object} location - The location object containing address and geographic information.
 * @param {string} masktype - The type of formatting to apply. Can be 'coordinate', 'zip', or 'address'.
 * @returns {Object} An object with `display` and `value` properties formatted according to the mask type.
 */
const formatLocationForDisplay = (location, masktype) => {
  const {
    position,
    // The geographic coordinates (latitude and longitude)
    housenumber,
    // House number of the address
    road,
    // Road or street name
    city,
    // City name
    state,
    // State name
    postcode,
    // Postal code
    county,
    // County name
    country,
    // Country name
    features // Array of Additional features from Mapbox, such as POIs
  } = location;
  const {
    lat,
    lng
  } = position;

  // Variables to hold different types of features extracted from the features array
  let featureAddress, featurePOI, featureNeighborhood, featurePostcode, featurePlace, featureDistrict, featureRegion, featureCountry;

  // If features are provided, map them to specific feature types
  if (features) {
    /**
     * Array of feature IDs to map
     * @type {Array<string>}
     */
    const ids = ['address', 'neighborhood', 'postcode', 'place', 'district', 'region', 'country', 'poi'];
    const featuresMap = {};

    // Iterate through each feature and match it to the corresponding id
    features.forEach(feature => {
      ids.forEach(id => {
        if (feature.id.includes(id)) {
          featuresMap[id] = feature;
        }
      });
    });

    // Assign mapped features to respective variables
    featureAddress = featuresMap['address'];
    featurePOI = featuresMap['poi'];
    featureNeighborhood = featuresMap['neighborhood'];
    featurePostcode = featuresMap['postcode'];
    featurePlace = featuresMap['place'];
    featureDistrict = featuresMap['district'];
    featureRegion = featuresMap['region'];
    featureCountry = featuresMap['country'];
  }

  // Switch case to handle different mask types
  switch (masktype.toLowerCase()) {
    case 'coordinate':
      // Convert position (latitude and longitude) to DMS format
      const formattedLat = convertToDMS(lat, 'lat');
      const formattedLng = convertToDMS(lng, 'lng');
      return {
        display: "".concat(formattedLat, ", ").concat(formattedLng),
        value: lat + ',' + lng + '|' + "".concat(formattedLat, ", ").concat(formattedLng)
      };
    case 'zip':
      // Handle zip mask type, extract postcode or relevant feature text
      let zipValue;
      if (featurePostcode || featurePOI) {
        var _featurePostcode$text, _featurePostcode, _featurePOI;
        zipValue = (_featurePostcode$text = (_featurePostcode = featurePostcode) === null || _featurePostcode === void 0 ? void 0 : _featurePostcode.text) !== null && _featurePostcode$text !== void 0 ? _featurePostcode$text : (_featurePOI = featurePOI) === null || _featurePOI === void 0 || (_featurePOI = _featurePOI.context) === null || _featurePOI === void 0 ? void 0 : _featurePOI.filter(feature => {
          var _feature$id;
          return (feature === null || feature === void 0 || (_feature$id = feature.id) === null || _feature$id === void 0 ? void 0 : _feature$id.includes('postcode')) && feature;
        })[0].text;
      } else {
        zipValue = typeof postcode === 'string' && /^\d{5}$/.test(postcode) ? postcode : 'N/A';
      }
      return {
        display: zipValue,
        value: lat + ',' + lng + '|' + zipValue
      };
    case 'address':
      // Handle address mask type, format address string from features or components
      let addressString;
      if (featureAddress || featurePOI || featurePlace || featureNeighborhood) {
        var _ref, _ref2, _featureAddress$place, _featureAddress, _featurePOI2, _featureNeighborhood, _featurePlace;
        addressString = (_ref = (_ref2 = (_featureAddress$place = (_featureAddress = featureAddress) === null || _featureAddress === void 0 ? void 0 : _featureAddress.place_name) !== null && _featureAddress$place !== void 0 ? _featureAddress$place : (_featurePOI2 = featurePOI) === null || _featurePOI2 === void 0 ? void 0 : _featurePOI2.place_name) !== null && _ref2 !== void 0 ? _ref2 : (_featureNeighborhood = featureNeighborhood) === null || _featureNeighborhood === void 0 ? void 0 : _featureNeighborhood.place_name) !== null && _ref !== void 0 ? _ref : (_featurePlace = featurePlace) === null || _featurePlace === void 0 ? void 0 : _featurePlace.place_name;
      } else {
        const addressComponents = [housenumber === null || housenumber === void 0 ? void 0 : housenumber.trim(), road === null || road === void 0 ? void 0 : road.trim(), city === null || city === void 0 ? void 0 : city.trim(), state === null || state === void 0 ? void 0 : state.trim(), postcode === null || postcode === void 0 ? void 0 : postcode.trim(), county === null || county === void 0 ? void 0 : county.trim(), country === null || country === void 0 ? void 0 : country.trim()];
        const validAddressComponents = addressComponents === null || addressComponents === void 0 ? void 0 : addressComponents.filter(component => component !== '');
        if ((validAddressComponents === null || validAddressComponents === void 0 ? void 0 : validAddressComponents.length) > 0) {
          var _addressString;
          if (housenumber && road) {
            // If both house number and road are present, concatenate them without a comma
            addressString = "".concat(housenumber, " ").concat(road, ", ").concat(validAddressComponents.slice(2).join(', '));
          } else {
            // Otherwise, join the non-empty components with a comma
            addressString = validAddressComponents === null || validAddressComponents === void 0 ? void 0 : validAddressComponents.join(', ');
          }
          const googleMapsLink = "https://www.google.com/maps?q=".concat((_addressString = addressString) === null || _addressString === void 0 ? void 0 : _addressString.replace(/\s+/g, '+'));
        }
      }
      return {
        display: /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, addressString),
        value: lat + ',' + lng + '|' + addressString
      };
      break;
    default:
      return {
        display: location,
        value: lat + ',' + lng + '|' + location
      };
  }
};
exports.formatLocationForDisplay = formatLocationForDisplay;