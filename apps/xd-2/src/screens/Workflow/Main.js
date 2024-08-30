import React, { memo, useEffect, useRef, useState } from 'react'
import { useApp, useStep, useAuth, useAppTheme, useHeader } from 'app/data'
import { useMessages } from '@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js'
import {
  AnimatedErrorPane,
  AnimatedDynamicModal,
  APIModal
} from '@jivasoft/jivasoft-lib/dist/components'
import { Step } from 'components'
import {
  StyledWorkflow,
  StyledWorkflowBody,
  StyledWorkflowHeader,
  StyledModalWorkflow
} from './styles'
import { WorkflowPrerequisite } from './Prerequisite'
import { putMeta } from 'app/api/meta'
import { getNavigation } from './helpers/navigation'
import { generateStepContext } from './helpers/step'
import { generateUUID, useSubmitButton } from 'app/helpers'
import { useWorkflowAbortController } from './data'

export const WorkflowMain = props => {
  const { viewWidth, workflow, setScrollTopY } = props
  const [, messageDispatch] = useMessages()
  const [authState] = useAuth()
  const [workflowError, setWorkflowError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // state that manages whether or not a workflow will display
  // messaging and means of fulfilling some requirement that must be met before
  // the initialization f the workflow
  const [prerequisite, setPrerequisite] = useState(false)

  const [workflowState, setWorkflowState] = useState({
    name: null,
    friendlyname: null,
    workflowid: null,
    description: null
  })

  //TODO: take out navState
  const [navState, setNavState] = useState([])
  const [appState, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()
  const [stepState, stepDispatch] = useStep()
  const [themeState, dispatch] = useAppTheme()
  // const [workflowApiState, workflowApiDispatch] = useWorkflowApi();
  const { createController, cancelController } = useWorkflowAbortController()
  const { submitButtonDisabled, disableSubmitButton, enableSubmitButton } =
    useSubmitButton()

  async function callPutMeta () {
    // workflowApiDispatch({ type: 'START_CONTROLLER',controller:controller,id:id })

    setIsLoading(true)
    const controller = createController()
    let putWorkflowObj = {
      step: [
        {
          workflowid: appState.currentWorkflow.workflowid,
          stepid: '',
          agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
          navigation: []
        }
      ]
    }
    putMeta(authState.token, putWorkflowObj, controller.signal).then(result => {
      setIsLoading(false)

      if (result.error !== null) {
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
        if (!result.cancelled) {
          appDispatch({
            type: 'SET_MODAL',
            currentModal: (
              <AnimatedErrorPane
                onClose={() => {
                  appDispatch({ type: 'UNSET_MODAL' })
                }}
                header={appState?.currentWorkflow?.friendlyname}
                text={"We can't load this right now. Please try again later."}
                detail={result.error.message}
              />
            )
          })
        } else {
          appDispatch({
            type: 'UNSET_MODAL'
          })
        }
      } else {
        //happy path
        appDispatch({
          type: 'UNSET_MODAL'
        })
        generateStepContext(stepDispatch, result.apiData)
      }
    })
  }

  function generateCall () {
    let agencyRequired = appState.currentWorkflow?.agencyrequired

    if (appState?.currentWorkflow) {
      if (agencyRequired == 0 || !agencyRequired) {
        if (prerequisite) {
          setPrerequisite(false)
        }
        callPutMeta()
      } else if (agencyRequired == 1) {
        if (!appState.currentAgency) {
          setPrerequisite(<WorkflowPrerequisite />)
        } else {
          if (prerequisite) {
            setPrerequisite(false)
          }
          callPutMeta()
        }
      } else if (agencyRequired == 2) {
        if (!appState.currentAgency || appState.currentAgency?.length <= 1) {
          setPrerequisite(<WorkflowPrerequisite />)
        } else {
          if (prerequisite) {
            setPrerequisite(false)
          }
          callPutMeta()
        }
      }
    }
  }
  useEffect(() => {
    //handle agencyrequired
    generateCall()
  }, [appState.currentWorkflow, appState?.currentAgency])

  useEffect(() => {
    setScrollTopY && setScrollTopY(0)
  }, [stepState.stepid])
  useEffect(() => {
    if (stepState.stepid) {
      setNavState(
        getNavigation(
          stepState?.stepstate?.navigation,
          appState,
          stepState,
          stepDispatch,
          authState.token,
          appDispatch,
          messageDispatch,
          createController,
          cancelController,
          submitButtonDisabled,
          disableSubmitButton,
          enableSubmitButton,
          headerDispatch
        )
      )
    } else {
      setNavState([])
    }
  }, [stepState?.stepstate, stepState?.stepdata, submitButtonDisabled])
  useEffect(() => {
    if (!appState?.currentWorkflow) {
      stepDispatch({ type: 'CLEAR_STEP_DATA' })

      setNavState([])
    }
    if (isLoading) {
      setNavState([])
    }
  }, [appState?.currentWorkflow, isLoading])
  useEffect(() => {
    // appState?.currentWorkflowType === 'startup'||stepState?.stepstate?.modal == 1
    if (
      appState?.currentWorkflowType === 'startup' ||
      stepState?.stepstate?.modal == 1
    ) {
      headerDispatch({
        type: 'SET_HEADER',
        items: []
        // size:'normal'
      })
      setTimeout(() => {
        appDispatch({
          type: 'SET_WORKFLOW_MODAL',
          currentWorkflow: (
            <AnimatedDynamicModal
              type={
                appState.currentWorkflowType === 'startup' ? 'fullscreen' : null
              }
              themeColor={themeState.currentTheme.bga1}
              headerItems={navState}
              headerText={appState?.currentWorkflow?.friendlyname}
            >
              {prerequisite ? (
                prerequisite
              ) : (
                <Step
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  setScrollTopY={setScrollTopY}
                />
              )}
            </AnimatedDynamicModal>
          )
        })
      }, '0')
    } else {
      if (appState.currentWorkflowModal) {
        appDispatch({
          type: 'UNSET_WORKFLOW_MODAL'
        })
      }
    }
  }, [
    appState.currentWorkflow,
    appState?.currentAgency,
    stepState?.stepid,
    stepState?.stepstate,
    navState
  ])
  useEffect(() => {
    if (navState) {
      headerDispatch({
        type: 'SET_HEADER',
        items: navState
        // size:'normal'
      })
    } else {
      headerDispatch({
        type: 'SET_HEADER',
        items: []
        // size:'normal'
      })
    }
  }, [navState])
  useEffect(() => {
    let timeoutId

    if (isLoading) {
      // Set a timeout for when to display the modal (e.g., after 3 seconds)
      timeoutId = setTimeout(() => {
        appDispatch({
          type: 'SET_MODAL',
          currentModal: (
            <APIModal
              cancel={() => {
                // workflowApiDispatch({ type: 'ABORT_CONTROLLER',controller:new AbortController() })
                cancelController()
              }}
            />
          )
        })
      }, 3000) // 3000 milliseconds (adjust as needed)
    } else {
      // If isLoading becomes false, clear the timeout (cancel the modal)
      clearTimeout(timeoutId)
      appDispatch({
        type: 'UNSET_MODAL'
      })
    }

    // Clean up the timeout when the component unmounts or when isLoading changes
    return () => clearTimeout(timeoutId)
  }, [isLoading])

  return (
    stepState?.stepstate?.modal !== 1 &&
    appState.currentWorkflowType !== 'startup' &&
    appState?.currentWorkflow?.workflowid && (
      <StyledWorkflow workflow={workflow}>
        {workflowError}
        {prerequisite ? (
          prerequisite
        ) : (
          <Step
            createController={createController}
            workflow={workflow}
            cancelController={cancelController}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setScrollTopY={setScrollTopY}
          />
        )}
      </StyledWorkflow>
    )
  )
}
