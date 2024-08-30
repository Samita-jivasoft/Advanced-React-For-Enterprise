import React, {createContext, useContext, useReducer, useRef} from 'react'

const SuspendContext = createContext()

export const useSuspend = () =>{
  return useContext(SuspendContext)
}

export const SuspendContextProvider = ({children, initialState, reducer}) =>{
  const imageRef = useRef()
  const [suspendState, suspendDispatch] = useReducer(reducer, initialState)
  return(
    <SuspendContext.Provider value={{value : [suspendState, suspendDispatch], value2 : imageRef}}>
      {children}
    </SuspendContext.Provider>
  )
}