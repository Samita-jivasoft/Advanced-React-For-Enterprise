import React, { createContext, useContext, useReducer } from 'react'

const ElementContext = createContext()
ElementContext.displayName = 'ElementContext';

export const useElement = () => {
  return useContext(ElementContext)
}
export const ElementContextProvider = ({ children, initialState, reducer }) => {
  const [elementState,elementDispatch ] = useReducer(reducer, initialState)
  return (
    <ElementContext.Provider value={[elementState, elementDispatch]}>
      {children}
    </ElementContext.Provider>
  )
}
