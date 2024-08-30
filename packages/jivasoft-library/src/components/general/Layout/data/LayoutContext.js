import React, { createContext, useContext, useReducer } from 'react'

const LayoutContext = createContext()
LayoutContext.displayName = 'LayoutContext';

export const useLayout = () => {
  return useContext(LayoutContext)
}
export const LayoutContextProvider = ({ children, initialState, reducer }) => {
  const [layoutState,layoutDispatch ] = useReducer(reducer, initialState)
  return (
    <LayoutContext.Provider value={[layoutState, layoutDispatch]}>
      {children}
    </LayoutContext.Provider>
  )
}
