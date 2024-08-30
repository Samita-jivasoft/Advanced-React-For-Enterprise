export const initialScrollState = {
    scrollY: 0
  };
  
  export function scrollReducer(state, action) {
    switch(action.type) {
      case 'SET_SCROLL_Y': {
        return { ...state, scrollY: action.payload };
      }
      case 'RESET_SCROLL': {
        return { ...state, scrollY: 0 };
      }
      default:
        return state;
    }
  }
  