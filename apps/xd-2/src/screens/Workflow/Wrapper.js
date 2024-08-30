import React from 'react'
import { WorkflowMain } from "./Main"
import { WorkflowContextAggregate } from './data'

export const Workflow = React.memo(props => {
    
    return (
        <WorkflowContextAggregate>
           <WorkflowMain 
           {...props}
           />
        </WorkflowContextAggregate>
    )
})
