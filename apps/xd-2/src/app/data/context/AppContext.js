import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()
AppContext.displayName = 'AppContext';

export const useApp = () => {
  return useContext(AppContext)
}
export const AppContextProvider = ({ children, initialState, reducer }) => {
  const [appState, appDispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={[appState, appDispatch]}>
      {children}
    </AppContext.Provider>
  )
}
