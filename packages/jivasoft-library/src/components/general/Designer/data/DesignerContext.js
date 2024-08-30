import React, {createContext, useContext, useReducer} from "react";

export const DesignerContext = createContext()

export const useDesigner = () =>{
  return useContext(DesignerContext)
}

export const DesignerContextProvider = ({children, initialState, reducer}) =>{
  const [designerState, designerDispatch] = useReducer(reducer, initialState)
  return(
    <DesignerContext.Provider value={[designerState, designerDispatch]}>
      {children}
    </DesignerContext.Provider>
  )
}