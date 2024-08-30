import React, { useEffect, useState, useRef } from 'react'
import { useApp, useAuth, useStep, useSuspend } from 'app/data'
import {
  SkeletonLoader,
  LoaderSpinner
} from '@jivasoft/jivasoft-lib/dist/components'
import { useScroll } from '@jivasoft/jivasoft-lib/dist/app/data/context/ScrollContext'
import { steptypes } from '@jivasoft/jivasoft-lib/dist/app/constants/stepTypes'
import { StepTypeMainStyled } from './styles/Main'
import { StepTypeForm, StepTypeSorter } from './Type'
import { StepTypeList } from './Type/List'
import { getMetaConfig, saveMetaConfig } from 'app/api'
import { StepTypeReport } from './Type'
import { StepTypeAutoLogin } from './Type/AutoLogin'

export const Step = props => {
  const { scrollState, scrollDispatch } = useScroll() //Added
  useEffect(() => {
    return () => {
      scrollDispatch({ type: 'SET_SCROLL_Y', payload: 0 })
    }
  }, [scrollDispatch])
  const {
    setScrollTopY,
    isLoading,
    modal,
    cancelController,
    createController
  } = props
  const [configIsLoading] = useState(false)
  const [, setStepType] = useState([])

  const [initialConfig, setInitialConfig] = useState()
  const [gotInitialConfig] = useState(false)

  const [authState] = useAuth()
  const [appState] = useApp()
  const [stepState] = useStep()
  const { value, value2 } = useSuspend()
  const imageRef = value2

  //Updated onScroll to update the context
  function onScroll (e) {
    var y = e.currentTarget.scrollTop
    // console.log('Inside scroll')
    const currentScrollY = e?.currentTarget ? e?.currentTarget?.scrollTop : -1

    currentScrollY !== -1 && setScrollTopY&& setScrollTopY(currentScrollY)
    if (currentScrollY !== -1) {
      scrollDispatch({ type: 'SET_SCROLL_Y', payload: currentScrollY })
    }
  }

  async function asyncSetConfig (config) {
    saveMetaConfig(authState.token, {
      step: [
        {
          workflowid: stepState?.workflowid,
          stepid: stepState?.stepid,
          value: config
        }
      ]
    })
  }
  useEffect(() => {
    if (initialConfig) {
      setInitialConfig()
    }
  }, [])

  let renderedStep = React.useMemo(() => {
    if (stepState?.stepstate) {
      let currentStep
      const isStepType = Object.keys(stepState.stepstate).filter(key => {
        return steptypes.includes(key)
      })
      if (isStepType.length === 1) {
        setStepType(isStepType)
      } else {
        throw 'Step contains multiples'
      }
      currentStep = isStepType?.[0]?.toLowerCase()

      return (
        <>
          {currentStep === 'form' && (
            <StepTypeForm
              createController={createController}
              cancelController={cancelController}
              isLoading={isLoading}
              step={stepState.stepstate}
              onScroll={e => onScroll(e)}
            />
          )}
          {currentStep === 'crud' && (
            <StepTypeList
              createController={createController}
              cancelController={cancelController}
              initialConfig={initialConfig}
              setInitialConfig={setInitialConfig}
              isLoading={isLoading}
              stepState={stepState.stepstate}
            />
          )}
          {currentStep === 'report' && (
            <StepTypeReport stepstate={stepState.stepstate} />
          )}
          {currentStep === 'autologin' && (
            <StepTypeAutoLogin stepstate={stepState.stepstate} />
          )}
        </>
      )
    } else {
      return <div />
    }
  }, [appState?.currentWorkflow, stepState, isLoading, initialConfig])
  return (
    <StepTypeMainStyled modal={modal} ref={imageRef}>
      {configIsLoading && <LoaderSpinner size={30} />}
      {!isLoading ? (
        stepState?.stepstate ? (
          renderedStep
        ) : (
          <SkeletonLoader type={'list'} />
        )
      ) : (
        <SkeletonLoader animated={isLoading} type={'list'} />
      )}
    </StepTypeMainStyled>
  )
}
