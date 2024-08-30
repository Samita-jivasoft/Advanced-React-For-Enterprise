import React, { createContext, useContext, useReducer } from 'react'

const StepContext = createContext()
StepContext.displayName = 'StepContext';

export const useStep = () => {
  return useContext(StepContext)
}
export const StepContextProvider = ({ children, initialState, reducer }) => {
  const [stepState,stepDispatch ] = useReducer(reducer, initialState)
  return (
    <StepContext.Provider value={[stepState, stepDispatch]}>
      {children}
    </StepContext.Provider>
  )
}
