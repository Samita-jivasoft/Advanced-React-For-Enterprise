"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLocationSelection = exports.enableMapInteractions = exports.disableMapInteractions = void 0;
exports.locatePosition = locatePosition;
require("core-js/modules/es.promise.js");
var _helpers = require("../helpers");
const handleLocationSelection = async (e, locations, map, setPosition, setLocations, allowMultiple) => {
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
    setPosition(e.latlng);
  }
  await (0, _helpers.handleLocation)(position, e, map, locations, setLocations, allowMultiple);
};
exports.handleLocationSelection = handleLocationSelection;
const disableMapInteractions = map => {
  // console.log('map', map)
  if (map) {
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.touchZoom.disable();
  }
};
exports.disableMapInteractions = disableMapInteractions;
const enableMapInteractions = map => {
  // console.log('map', map)
  if (map) {
    map.dragging.enable();
    map.scrollWheelZoom.enable();
    map.doubleClickZoom.enable();
    map.boxZoom.enable();
    map.keyboard.enable();
    map.touchZoom.enable();
  }
};
exports.enableMapInteractions = enableMapInteractions;
function locatePosition(map, mapDispatch, location) {
  if (location) {
    map.flyTo(location.position, location.zoom);
    mapDispatch({
      type: 'SET_POSITION',
      position: location.position
    });
  }
}