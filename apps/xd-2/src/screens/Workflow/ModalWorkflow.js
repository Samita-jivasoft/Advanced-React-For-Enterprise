import { useAppTheme, useHeader } from 'app/data'
import { useApp } from 'app/data/context/AppContext'
import { useStep, useAuth } from 'app/data'
import { Step } from 'components'
import React, { memo, useEffect, useRef, useState } from 'react'
import {
  FaBars,
  FaBeer,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaTimes
} from 'react-icons/fa'
import {
  StyledWorkflow,
  StyledWorkflowBody,
  StyledWorkflowHeader
} from './styles'
import { WorkflowPrerequisite } from './Prerequisite'
import { putMeta } from 'app/api/meta'
import { generateStepContext } from './helpers/step'
import {
  AnimatedErrorPane
} from '@jivasoft/jivasoft-lib/dist/components'

export const ModalWorkflow = React.memo(props => {
  const { workflow, setScrollTopY } = props
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

  const [navState, setNavState] = useState([])
  const [appState, appDispatch] = useApp()
  const [, headerDispatch] = useHeader()
  const [stepState, stepDispatch] = useStep()
  const [themeState, dispatch] = useAppTheme()

  async function callPutMeta () {
    setIsLoading(true)
    let putWorkflowObj = {
      step: [
        {
          workflowid: appState.currentModalWorkflow.workflowid,
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
    putMeta(authState.token, putWorkflowObj).then(result => {
      setIsLoading(false)

      if (result.error !== null) {
        //sad path
        // if (appState.currentAgency.agencyid) {
        //     setWorkflowError(
        //         <AnimatedErrorPane
        //             text={"We couldn't load this Workflow"}
        //             detail={
        //                 result.error.message
        //             }
        //         />)
        // } else {
        //     setWorkflowError(
        //         <AnimatedErrorPane
        //             text={"We're having trouble loading this Agency."}
        //             detail={
        //                 result.error.message
        //             }
        //         />)
        // }\
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
        appDispatch({
          type: 'SET_MODAL',
          currentModal: (
            <AnimatedErrorPane
              onClose={() => {
                appDispatch({ type: 'UNSET_MODAL' })
              }}
              header={appState?.currentModalWorkflow?.friendlyname}
              text={"We can't load this right now. Please try again later."}
              detail={result.error.message}
            />
          )
        })
      } else {
        //happy path
        // appDispatch({
        //     type: 'UNSET_MODAL',

        // })
        generateStepContext(stepDispatch, result.apiData)
      }
    })
  }
  async function getWorkflow () {
    if (workflowError) {
      setWorkflowError(false)
    }

    callPutMeta()

    // handleSetWorkflow()
  }

  useEffect(() => {
    //initialize the workflow locally, if there is one
    if (appState.currentModalWorkflow && !appState.isSuspended) {
      //TODO this condition will depend upon appState.currentModalWorkflow.prerequisite?? or something that lets me know to ask for more data

      //    TODO, HANDLE NO INVALID PUTOWORKFLOWOBJ PROPERTIES/FORMAT/ETC

      //TODO: make agencyRequired actually dynamic
      const agencyRequired = true

      if (appState.currentAgency && agencyRequired) {
        if (prerequisite) {
          setPrerequisite(false)
        }
        callPutMeta()
      } else {
        setPrerequisite(<WorkflowPrerequisite />)
      }
    }
    //

    //get the stepTypeState from the backend with workflowID
  }, [appState.currentModalWorkflow, appState.currentAgency])
  // useEffect(() => {
  //     if (!appState.currentAgency) {
  //         setPrerequisite(<WorkflowPrerequisite />)
  //     } else {
  //         setPrerequisite(false)
  //     }
  // }, [appState.currentAgency])

  // useEffect(() => {
  //     if (workflowState) {
  //         //call getStep Endpoint with workflowid
  //         setStepState(apiResult)
  //     }
  // }, [workflowState])

  // useEffect(() => {
  //     //if there's a step in context, and it ever changes.... update the global header
  //  console.log('stepstatus-------->',stepState.stepstatus)
  // }, [stepState])
  useEffect(() => {
    //if there's a step in context, and it ever changes.... update the global header
    if (appState.currentModalWorkflow) {
      if (stepState.stepid) {
        headerDispatch({
          type: 'SET_HEADER',
          title: appState?.currentModalWorkflow?.friendlyname
          // size:'normal'
        })
      }
    }
  }, [appState?.currentModalWorkflow?.friendlyname])
  useEffect(() => {
    if (appState.currentModalWorkflow) {
      if (stepState.stepid) {
        headerDispatch({
          type: 'SET_HEADER',
          title: appState?.currentModalWorkflow?.friendlyname
          // size:'normal'
        })
      }
    }
  }, [appState?.currentModalWorkflow?.friendlyname])
  // useEffect(()=>{
  //     console.log('stepState is changing', stepState.stepstate)

  // },[stepState])
  // useEffect(() => {

  //     if (step.workflowid) {
  //         // stepDispatch({ type: 'CLEAR_STEP_DATA' })
  //         const isStepType = Object.keys(step).filter((key) => {
  //             return appState.steptypes.includes(key)
  //         })
  //         stepDispatch({type:'UPDATE_STEP_TYPE', steptype:isStepType[0]})
  //         appDispatch({
  //             type: 'SET_HEADER',
  //             title: appState.currentModalWorkflow.friendlyname,
  //             // size:'normal'
  //         })
  //     }
  // }, [step])
  function getNavIcon (label) {
    switch (label) {
      case 'Next':
        return <FaChevronRight />
      case 'Back':
        return <FaChevronLeft />
      default:
        return null
    }
  }
  const handleSetWorkflow = () => {
    setIsLoading(true)
    // Dispatch an action that triggers an asynchronous operation
    // appDispatch({
    //     type: 'SET_MODAL',
    //     currentModal: (
    //         <APIModal
    //             duration={10000}
    //             apiCall={() => handleSetWorkflow()}
    //             cancel={() => {
    //                 appDispatch({ type: 'UNSELECT_WORKFLOW' })
    //                 appDispatch({ type: 'UNSET_MODAL' })

    //                 stepDispatch({ type: 'CLEAR_STEP_DATA' })
    //             }}
    //             message={"This is taking longer than expected."}
    //         />
    //     )
    // })
    // stepDispatch({ type: 'CLEAR_STEP_DATA' })
    // console.log("clearing...")

    // setTimeout(() => {
    //     console.log("calling...")

    //     // Dispatch the 'SET_CONTEXT' action with the new value
    //   }, 10);
  }
  useEffect(() => {
    setScrollTopY(0)
  }, [stepState.stepid])
  // useEffect(() => {
  //     console.log(stepState)
  //     if (stepState.stepid) {
  //         setNavState(getNavigation(stepState.stepstate.navigation, appState, stepState, stepDispatch, authState.token, appDispatch))

  //     } else{
  //         setNavState([])
  //     }

  // }, [stepState])
  //    useEffect(()=>{
  //     console.log('Lo, this state hath changed!')
  //    },[stepState.stepisvalid])
  // useEffect(() => {

  //     if (isLoading) {

  //         appDispatch({
  //             type: 'SET_MODAL',
  //             currentModal: (
  //                 <APIModal
  //                     duration={10000}
  //                     apiCall={() => handleSetWorkflow()}
  //                     cancel={() => {
  //                         appDispatch({ type: 'UNSELECT_WORKFLOW' })
  //                         appDispatch({ type: 'UNSET_MODAL' })

  //                         stepDispatch({ type: 'CLEAR_STEP_DATA' })
  //                     }}
  //                     message={"This is taking longer than expected."}
  //                 />
  //             )
  //         })
  //     } else {
  //         appDispatch({
  //             type: 'UNSET_MODAL',

  //         })
  //     }
  // }, [isLoading])

  return (
    <StyledWorkflow
    //onScroll={(event)=>onScroll(event)}
    >
      {/* <StyledWorkflowHeader>
                {navState}
            </StyledWorkflowHeader> */}
      {/* <div style={{width:'100%',height:'10%',background:'green',boxSizing:"border-box",margin:10}}/> */}
      {workflowError}
      {/* {isLoading && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SkeletonLoader /></div>} */}
      {prerequisite ? (
        prerequisite
      ) : (
        <Step
          modal={true}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          setScrollTopY={setScrollTopY}
        />
      )}

      {/* <Step step={'Sorter'}/> */}
    </StyledWorkflow>
  )
})
