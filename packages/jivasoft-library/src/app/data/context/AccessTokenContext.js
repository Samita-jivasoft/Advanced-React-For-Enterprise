import React, { createContext, useContext } from 'react'

const AccessTokenContext = createContext()

export const AccessTokenProvider = ({ children, tokens }) => {
  return (
    <AccessTokenContext.Provider value={tokens}>
      {children}
    </AccessTokenContext.Provider>
  )
}

export const useAccessToken = () => useContext(AccessTokenContext)
