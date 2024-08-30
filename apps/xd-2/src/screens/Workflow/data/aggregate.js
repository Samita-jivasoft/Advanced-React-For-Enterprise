import React from 'react'
import {
  WorkflowAbortControllerProvider,
  WorkflowApiContextProvider
} from './abortControllerContext'
//import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib'
import {
  DynamicButtonV2,
  ErrorBoundary,
  ErrorFallback
} from '@jivasoft/jivasoft-lib/dist/components'
import { FaTimes } from 'react-icons/fa'
import { useApp, useHeader } from 'app/data'

export const WorkflowContextAggregate = ({ children }) => {
  const [, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()

  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <ErrorFallback
          button={
            <DynamicButtonV2
              text={'Close this workflow'}
              icon={<FaTimes />}
              color={'white'}
              onClick={() => {
                appDispatch({ type: 'UNSELECT_WORKFLOW' })
                headerDispatch({ type: 'RESET_HEADER' })
              }}
            />
          }
          title={"We're having trouble loading this Workflow"}
        />
      )}
    >
      <WorkflowAbortControllerProvider>
        {children}
      </WorkflowAbortControllerProvider>
    </ErrorBoundary>
  )
}
