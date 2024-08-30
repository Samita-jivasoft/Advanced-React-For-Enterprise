import React, { createContext, useContext, useReducer } from 'react'

const UIContext = createContext()
UIContext.displayName = 'UIContext'
export const useUI = () => {
  return useContext(UIContext)
}
export const UIContextProvider = ({ children, initialState, reducer }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)
  return (
    <UIContext.Provider value={[uiState, uiDispatch]}>
      {children}
    </UIContext.Provider>
  )
}
