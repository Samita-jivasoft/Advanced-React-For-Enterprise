import React, { createContext, useContext, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext()


export const ThemeContextProvider = ({ children, initialState, reducer }) => {
  const [themeState, dispatch] = useReducer(reducer, initialState)
  return (
    <ThemeProvider theme={themeState.currentTheme}>
      <ThemeContext.Provider value={[themeState, dispatch]}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
export const useAppTheme = () => {
  return useContext(ThemeContext)
}
