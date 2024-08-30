export function listReducer (state, action) {
  switch (action.type) {
    // case 'INITIALIZE_DATA':
    //   state['showList'] = action.showList
    //   state['items'] = action.items
    //   state['selectedItems'] = action.selectedItems
    //   return { ...state }
    case 'INITIALIZE_DATA':
      return { ...state, ...action.props }
    case 'SET_ITEMS_LIST':
      return { ...state, items: action.items }
    case 'SET_SHOW_LIST':
      return { ...state, showList: action.items }
    case 'SET_SELECTED_ITEMS':
      return { ...state, selectedItems: action.items }
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.searchTerm }
    case 'SET_ONFOCUS':
      return { ...state, focus: action.focus }
    case 'SET_PLACEHOLDER':
      return { ...state, placeholder: action.placeholder }
    default:
      return state
  }
}
