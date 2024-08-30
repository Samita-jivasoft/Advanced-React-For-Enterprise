import { handleLocation } from '../helpers'
export const handleLocationSelection = async (
  e,
  locations,
  map,
  setPosition,
  setLocations,
  allowMultiple
) => {
  const { lat, lng } = e.latlng
  const position = { lat, lng }
  // console.log('e', e, map, e.type === 'locationfound' ? 15 : map.getZoom())
  const zoom = e.type === 'locationfound' ? 15 : map.getZoom()
  // console.log(locations)
  if (locations.length === 0) {
    // console.log('zoom', zoom, e.latlng)
    map.flyTo(e.latlng, zoom)
    setPosition(e.latlng)
  }

  await handleLocation(position, e, map, locations, setLocations, allowMultiple)
}

export const disableMapInteractions = map => {
  // console.log('map', map)
  if (map) {
    map.dragging.disable()
    map.scrollWheelZoom.disable()
    map.doubleClickZoom.disable()
    map.boxZoom.disable()
    map.keyboard.disable()
    map.touchZoom.disable()
  }
}

export const enableMapInteractions = map => {
  // console.log('map', map)
  if (map) {
    map.dragging.enable()
    map.scrollWheelZoom.enable()
    map.doubleClickZoom.enable()
    map.boxZoom.enable()
    map.keyboard.enable()
    map.touchZoom.enable()
  }
}

export function locatePosition (map, mapDispatch, location) {
  if (location) {
    map.flyTo(location.position, location.zoom)
    mapDispatch({
      type: 'SET_POSITION',
      position: location.position
    })
  }
}
