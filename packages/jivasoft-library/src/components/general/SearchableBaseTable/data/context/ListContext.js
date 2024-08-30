import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useReducer
} from 'react'

export const ListContext = createContext()

export const ListProvider = ({ children, initialState, reducer }) => {
  const [listState, listDispatch] = useReducer(reducer, initialState)
  // console.log('LISTCONTEXT.js initialState', initialState)

  //provider
  return (
    <ListContext.Provider value={[listState, listDispatch]}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = () => {
  return useContext(ListContext)
}
