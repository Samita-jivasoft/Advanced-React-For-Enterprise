import React, { useContext, createContext, useReducer, useEffect } from 'react'

export const ListContext = createContext()

export const ListProvider = ({ children, initialState, reducer }) => {
  const [listState, listDispatch] = useReducer(reducer, initialState)
  // console.log('ListPrivider', initialState, listState)
  useEffect(() => {
    // console.log('this')
    if (initialState)
      listDispatch({
        type: 'INITIALIZE_DATA',
        props: initialState
      })
  }, [initialState])

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
