import { useViewport } from 'app/data/context'
import { useMessages } from "@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js";
import { md } from 'app/constants'
import React, { useContext, useEffect } from 'react'
import { AuthBody } from './Body'
import { AuthHeader } from './Header'
import {
  StyledAuthContainer,
  StyledAuthWrapper,
  StyledAuthGrid
} from './styles'
import { Workflow } from 'screens/Workflow'
import { useApp } from 'app/data/context/AppContext'
import { AuthWorkflowStepper } from './WorkflowStepper'
import { AuthAbortControllerProvider } from './data'
import { WorkspaceMessages } from 'screens/Workspace/Messages'
// import { StyledScreen, StyledWrapper, StyledGrid } from "./styles";
// import { AuthHeader } from "./Header";
// import { AuthMain } from "./Main";

// export * from "./Header";
// export * from "./Main";

export const Auth = authState => {
  const { viewWidth, viewHeight } = useViewport()
  const [appState] = useApp()
  const [messageState, messageDispatch] = useMessages()

  return (
    <AuthAbortControllerProvider>
      <StyledAuthContainer className='auth-container'>
        {/* <AuthWorkflowStepper/> */}
        {appState['modal'] && appState['modal']}
        {appState['currentWorkflowModal'] && appState['currentWorkflowModal']}
        {messageState?.messages?.length > 0 && <WorkspaceMessages />}

        <StyledAuthWrapper
          className='auth-wrapper'
          height={viewWidth < md ? '100vh' : '70%'}
          width={viewWidth < md ? '100vw' : '70%'}
          flexDirection={viewWidth < md ? 'column' : 'row'}
        >
          {viewWidth > md && <AuthHeader />}
          <AuthBody />
        </StyledAuthWrapper>
      </StyledAuthContainer>
    </AuthAbortControllerProvider>
  )
}
