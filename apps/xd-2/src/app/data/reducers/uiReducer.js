export const initialUIState = {
  showNav: false,
  navExpanded: false,
  showSearch: false
}

export function uiReducer (state, action) {
  switch (action.type) {
    case 'SET_UI':
      state['showNav'] =
        action.showNav != undefined ? action.showNav : state.showNav
      state['navExpanded'] =
        action.navExpanded != undefined ? action.navExpanded : state.navExpanded
      state['showSearch'] =
        action.showSearch != undefined ? action.showSearch : state.showSearch
      // console.log('SET_UI', state)
      return { ...state }
    default:
      return state
  }
}
