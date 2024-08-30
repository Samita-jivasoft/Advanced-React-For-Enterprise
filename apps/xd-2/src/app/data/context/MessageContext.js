import React, { createContext, useContext, useReducer } from 'react'

const MessageContext = createContext()
MessageContext.displayName = 'MessageContext';

export const useMessages = () => {
  return useContext(MessageContext)
}
export const MessageContextProvider = ({ children, initialState, reducer }) => {
  const [messageState, messageDispatch] = useReducer(reducer, initialState)
  return (
    <MessageContext.Provider value={[messageState, messageDispatch]}>
      {children}
    </MessageContext.Provider>
  )
}
