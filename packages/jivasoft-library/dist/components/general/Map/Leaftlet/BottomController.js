"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomController = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa6");
var _styles = require("./styles");
var _data = require("../data");
var _helpers = require("./helpers");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BottomController = props => {
  var _currentLocation$posi, _currentLocation$posi2;
  const {
    map,
    bottomController
  } = props;
  const [mapState, mapDispatch] = (0, _data.useMap)();
  const {
    locations,
    currentLocation,
    position
  } = mapState;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledBottomController, {
    ref: bottomController,
    onMouseEnter: () => {
      (0, _helpers.disableMapInteractions)(map);
      mapDispatch({
        type: 'SET_DISABLE_MAP',
        disable: true
      });
    },
    onClick: () => {
      mapDispatch({
        type: 'SET_DISABLE_MAP',
        disable: true
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledControllerButton, {
    style: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
    },
    onClick: e => {
      (0, _helpers.locatePosition)(map, mapDispatch, currentLocation);
    }
  }, (currentLocation && (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.position) != null || position && position != null) && (currentLocation === null || currentLocation === void 0 || (_currentLocation$posi = currentLocation.position) === null || _currentLocation$posi === void 0 ? void 0 : _currentLocation$posi.lat) == (position === null || position === void 0 ? void 0 : position.lat) && (currentLocation === null || currentLocation === void 0 || (_currentLocation$posi2 = currentLocation.position) === null || _currentLocation$posi2 === void 0 ? void 0 : _currentLocation$posi2.lng) == (position === null || position === void 0 ? void 0 : position.lng) ? /*#__PURE__*/_react.default.createElement(_md.MdMyLocation, {
    style: {
      color: 'blue'
    }
  }) : /*#__PURE__*/_react.default.createElement(_md.MdLocationSearching, null)), /*#__PURE__*/_react.default.createElement(_styles.StyledControllerButton, null, locations.length > 0 ? /*#__PURE__*/_react.default.createElement(_md.MdLocationOff, {
    onClick: () => {
      mapDispatch({
        type: 'SET_LOCATIONS',
        locations: []
      });
      (0, _helpers.locatePosition)(map, mapDispatch, currentLocation);
    }
  }) : /*#__PURE__*/_react.default.createElement(_md.MdLocationOn, {
    onClick: () => {
      // console.log(locations.filter(loc => loc.currentlocation == 1))
      if (currentLocation) {
        mapDispatch({
          type: 'SET_LOCATIONS',
          locations: [currentLocation]
        });
      }
      (0, _helpers.locatePosition)(map, mapDispatch, currentLocation);
    }
  })));
};
exports.BottomController = BottomController;