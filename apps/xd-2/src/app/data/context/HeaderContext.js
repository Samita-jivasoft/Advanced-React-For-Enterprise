import React, { createContext, useContext, useReducer } from 'react'

const HeaderContext = createContext()
HeaderContext.displayName = 'HeaderContext'

export const useHeader = () => {
  return useContext(HeaderContext)
}
export const HeaderContextProvider = ({ children, initialState, reducer }) => {
  const [headerState, headerDispatch] = useReducer(reducer, initialState)
  return (
    <HeaderContext.Provider value={[headerState, headerDispatch]}>
      {children}
    </HeaderContext.Provider>
  )
}
