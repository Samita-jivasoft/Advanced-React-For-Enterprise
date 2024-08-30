export const initialHeaderState = {
  title: '',
  items: [],
  rightIcons: [],
  subText: '',
  preText: '',
  size: 'normal'
}

export function headerReducer (state, action) {
  switch (action.type) {
    case 'SET_HEADER':
      state['title'] = action.title ?? state.title
      state['items'] = action.items ?? state.items
      state['rightIcons'] = action.rightIcons ?? state.rightIcons
      state['subText'] = action.subText ?? state.subText
      state['size'] = action.size ?? state.size
      return { ...state }
    case 'RESET_HEADER':
      return {
        title: '',
        items: [],
        rightIcons: [],
        subText: '',
        preText: '',
        size: 'normal'
      }
    default:
      return state
  }
}
