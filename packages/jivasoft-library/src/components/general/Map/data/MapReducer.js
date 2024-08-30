export function mapReducer (state, action) {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return { ...state, ...action.props }
    case 'SET_IP':
      return { ...state, ip: action.ip }
    case 'SET_IP_LOCATION':
      return { ...state, ipLocation: action.location }
    case 'SET_CURRENT_LOCATION':
      return { ...state, currentLocation: action.currentLocation }
    case 'SET_LOCATIONS':
      return { ...state, locations: action.locations }
    case 'SET_MARKERS':
      return { ...state, markers: action.markers }
    case 'ADD_LOCATION':
      let updatedLocations
      if (!state.allowMultiple) {
        // If allowMultiple is false, replace the existing locations with the new one
        updatedLocations = [action.location]
      } else {
        // If allowMultiple is true, append the new location to the existing locations
        updatedLocations = [...state.locations, action.location]
      }
      return { ...state, locations: updatedLocations }
    case 'SET_POSITION':
      return { ...state, position: action.position }
    case 'SET_DISABLE_MAP':
      return { ...state, disableMap: action.disable }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.searchQuery }
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.searchResults }
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.searchTerm }
    case 'SET_PLACEHOLDER':
      return { ...state, placeholder: action.placeholder }
    default:
      return state
  }
}
