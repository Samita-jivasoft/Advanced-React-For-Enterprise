import React, { createContext, useContext, useReducer } from 'react'

const FormContext = createContext()
FormContext.displayName = 'FormContext'

export const useForm = () => {
  return useContext(FormContext)
}
export const FormContextProvider = ({ children, initialState, reducer }) => {
  const [formState, formDispatch] = useReducer(reducer, initialState)
  return (
    <FormContext.Provider value={[formState, formDispatch]}>
      {children}
    </FormContext.Provider>
  )
}
