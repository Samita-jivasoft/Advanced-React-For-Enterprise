import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext';

export const useAuth = () => {
  return useContext(AuthContext)
}
export const AuthContextProvider = ({ children, initialState, reducer }) => {
  const [authState, authDispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  )
}
