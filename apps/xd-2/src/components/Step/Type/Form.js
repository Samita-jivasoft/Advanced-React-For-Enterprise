import React, { memo, useEffect, useRef, useState } from 'react'
import { useApp, useAuth, useStep, useViewport } from 'app/data'
import { detectScroll, useSubmitButton } from 'app/helpers'
import { useMessages } from '@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js'
import { Layout, SkeletonLoader } from '@jivasoft/jivasoft-lib/dist/components'
import { StepContainerStyled } from './Styles'
import { getNavigation } from 'screens/Workflow/helpers/navigation'

export const StepTypeForm = props => {
  const { onScroll, isLoading, modal, createController, cancelController } =
    props
  const [stepState, stepDispatch] = useStep()
  const [authState] = useAuth()
  // const {  } = useWorkflowAbortController();
  const [, messageDispatch] = useMessages()
  const { submitButtonDisabled, disableSubmitButton, enableSubmitButton } =
    useSubmitButton()
  // console.log('FORM - submitButtonDisabled', submitButtonDisabled)

  const [appState, appDispatch] = useApp()
  const [isReview, setIsReview] = useState(false)
  const [state, setState] = useState([])
  function setStepState (data) {
    setState(data)
  }
  const [groups, setGroups] = useState()

  useEffect(() => {
    setGroups(stepState?.stepstate?.form?.[0]?.groups)
  }, [stepState?.stepstate?.form])

  useEffect(() => {
    // if(step.form[0].reviewrequired){
    //   stepDispatch({
    //     type: 'MODIFY_STEP_STATUS',
    //     stepstatus: {isreview:false},
    //   })
    // }
    // console.log('dispatiching..modify step data',state)
    // stepDispatch({
    //   type: 'SET_STEP',
    //   stepdata: state,

    // })
    // console.log(state.every((item) => item.isValid))
    // console.log('EVERY FORMELEMENT IS VALID: ',state.every((item) => item.isValid))
    // state.map((item) => console.log(
    //   "'"+item.label +"'", 'dt:' + item.element.datatype, 'mt:'+ item.element.masktype +'\n'+
    //   'isvalid:',item.isValid +'\n----------'
    // ))
    stepDispatch({
      type: 'SET_STEP',
      stepdata: state,
      stepisvalid: state.every(item => item.remainingRequirements.length === 0)
    })
    // if(state.every((item) => item.isValid)){
    //       stepDispatch({
    //         type: 'SET_STEP',
    //         stepdata: state,
    //         stepisvalid:true

    //       })

    // } else {

    //   stepDispatch({
    //     type: 'SET_STEP',
    //     stepdata: state,

    //     stepisvalid:false

    //   })
    // }
  }, [state])

  useEffect(() => {
    if (stepState.stepstatus) {
      if (stepState.stepstatus.isreview) {
        setIsReview(true)
      } else {
        setIsReview(false)
      }
    } else {
      setIsReview(false)
    }
  }, [stepState.stepstatus])

  // useEffect(() => {
  //   if (stepState.stepstatus) {
  //     if (stepState.stepstatus.isreview) {
  //       setIsReview(true)
  //     }
  //   } else{
  //     setIsReview(false)
  //   }
  // }, [stepState.stepdata])

  // useEffect(() => {
  //   if (!isReview) {
  //     stepDispatch({
  //       type: 'MODIFY_STEP_STATUS',
  //       stepstatus: null,
  //     })
  //   }
  // }, [isReview])
  function scrolling () {
    // console.log('scrolling thi')
  }
  const formStepRef = useRef()
  // const detectScroll = (ref,value) => {
  //   console.log(ref)
  //    if (formStepRef.current) {
  //      const { scrollTop, scrollHeight, clientHeight } = formStepRef.current;
  //      console.log(scrollTop);

  //      if (scrollTop + clientHeight === scrollHeight) {
  //      }
  //    }
  //  };

  // const renderedForm = React.useMemo(() => {
  //   return (<Form
  //     style={{width:'100% !important'}}
  //     isReview={!isReview}
  //     groups={stepState?.stepstate?.form?.[0]?.groups}
  //     setIsReview={setIsReview}
  //     parentState={state}
  //     reviewRequired={stepState.stepstate.form && stepState.stepstate.form[0].reviewrequired}
  //     setParentState={setStepState}
  //     formLabel={stepState.stepstate.form && stepState.stepstate.form[0].formname}
  //     formElements={stepState.stepstate.form && stepState.stepstate.form[0].formelements}
  //     onScroll={(e) => onScroll(e)}
  //   />)
  // }, [isReview, state, stepState])
  return (
    <StepContainerStyled
      type={'action'}
      style={{
        boxSizing: 'border-box',
        height: '100%',
        maxWidth: appState.currentWorkflowType === 'startup' ? '100%' : '100%',
        width: '100%',
        borderRadius: '5px'
      }}
    >
      <Layout
        actions={getNavigation(
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
          enableSubmitButton
        ).filter(item => {
          return item?.props?.isComponentNav || item?.props?.isSubmit
        })}
        isReview={!isReview}
        groups={groups}
        setIsReview={setIsReview}
        parentState={state}
        reviewRequired={
          stepState?.stepstate?.form &&
          stepState?.stepstate?.form?.[0]?.reviewrequired
        }
        setParentState={setStepState}
        formLabel={
          stepState.stepstate?.form && stepState?.stepstate?.form?.[0]?.formname
        }
        elements={
          stepState?.stepstate?.form &&
          stepState?.stepstate?.form?.[0]?.formelements
        }
        onScroll={e => onScroll(e)}
      />
    </StepContainerStyled>
  )
}
