import React, { createContext, useContext, useReducer } from 'react'

const WorkflowContext = createContext()
WorkflowContext.displayName = 'WorkflowContext';

export const useWorkflow = () => {
  return useContext(WorkflowContext)
}
export const WorkflowContextProvider = ({ children, initialState, reducer }) => {
  const [workflowState, workflowDispatch] = useReducer(reducer, initialState)
  return (
    <WorkflowContext.Provider value={[workflowState, workflowDispatch]}>
      {children}
    </WorkflowContext.Provider>
  )
}
