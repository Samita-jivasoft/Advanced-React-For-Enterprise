import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useReducer
} from 'react'

export const ListsContext = createContext()

export const ListsProvider = ({ children, initialState, reducer }) => {
  const [listsState, listsDispatch] = useReducer(reducer, initialState)
  //provider
  return (
    <ListsContext.Provider value={[listsState, listsDispatch]} style={{border:'1px solid red'}}>
      {children}
    </ListsContext.Provider>
  )
}

export const useLists = () => {
  return useContext(ListsContext)
}
 