import { getTypographyScale, theme } from 'app/theme'

export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'

export const initialThemeState = {
  currentTheme: theme.light
  // currentColor: [],
  // currentScheme: ''
}

export function themeReducer (state, action) {
  switch (action.type) {
    case 'setTheme':
      return { ...state, currentTheme: action.currentTheme }

    case 'setTypographyScale':
      let scale = getTypographyScale(action.currentViewWidth)
        return {...state, currentTheme: {...theme[state.currentTheme.id], typography:scale }}
    case 'updateTheme':
      return {
        ...state,
        currentTheme: {
          ...theme[state.currentTheme.id],
          ...action.currentTheme
        }
      }
    case 'toggleTheme': {
      const newThemeKey = state.currentTheme.id === 'dark' ? 'light' : 'dark'
      return { ...state, currentTheme: theme[newThemeKey] }
    }
    default:
      throw new Error()
  }
}
