import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useReducer
} from 'react'

export const ConfigurationContext = createContext()
export const ConfigurationProvider = ({ children, initialState, reducer }) => {
  const [configurationState, configurationDispatch] = useReducer(
    reducer,
    initialState
  )


  //provider
  return (
    <ConfigurationContext.Provider
      value={[configurationState, configurationDispatch]}
    >
      {children}
    </ConfigurationContext.Provider>
  )
}

export const useConfiguration = () => {
  return useContext(ConfigurationContext)
}
