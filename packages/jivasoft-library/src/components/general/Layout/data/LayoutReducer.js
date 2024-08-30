

export function layoutReducer(state, action) {
  switch (action.type) {
    case 'SET_CSS':
      return { ...state, css: action.css, }
    default:
      return { ...state }
  }
}
