import React, { createContext ,useContext, useReducer } from 'react'

export const MenuContext = createContext()

export const useMenu = () => {
  return useContext(MenuContext)
}

export const MenuContextProvider = ({children, initialState, reducer}) =>{
  const [menuState, menuDispatch] = useReducer(reducer, initialState)
  return(
    <MenuContext.Provider value={[menuState, menuDispatch]}>
      {children}
    </MenuContext.Provider>
  )
}