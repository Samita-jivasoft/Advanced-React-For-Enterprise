export function formReducer (state, action) {
  switch (action.type) {
    case 'SET_ELEMENTS':
      return { ...state, elements: action.elements }
    default:
      return { ...state }
  }
}
