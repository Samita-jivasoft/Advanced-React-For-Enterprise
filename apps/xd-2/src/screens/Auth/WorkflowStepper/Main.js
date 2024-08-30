import React, { useEffect, useState } from 'react'
import { Workflow } from 'screens/Workflow'
import { AuthWorkflowStepperStyled } from './styles'
import { Navigate } from 'react-router-dom'
import { useApp, useAppTheme, useHeader, useStep } from 'app/data'
import {
  DynamicFlexHeader,
  APIModal
} from '@jivasoft/jivasoft-lib/dist/components'

export const AuthWorkflowStepper = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [appState, appDispatch] = useApp()
  const [stepState, stepDispatch] = useStep()
  const [scrollTopY, setScrollTopY] = useState(0)

  const [headerState, headerDispatch] = useHeader()
  const [themeState] = useAppTheme()
  useEffect(() => {
    setIsLoading(true)
    appDispatch({
      type: 'SELECT_WORKFLOW',
      currentWorkflow: {
        name: 'Customer Registration',
        friendlyname: 'Customer Registration',
        workflowid: 'E9842D21-CCB2-45C0-8A3C-B1DFDD9E37C6',
        description: 'Register your account as a Customer.',
        agencyrequired: 0,
        steptype: 'form',
        sequence: 1
      }
    })
    headerDispatch({
      type: 'SET_HEADER',
      title: 'Customer Registration'
      // items:
      // size:'normal'
    })
  }, [])

  useEffect(() => {
    if (stepState.stepid) {
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [stepState.stepid])

  return !appState.currentWorkflow && !isLoading ? (
    <Navigate to='/login' replace />
  ) : (
    <AuthWorkflowStepperStyled>
      {isLoading && <APIModal />}
      <DynamicFlexHeader
        enableScrollResize={true}
        size={headerState.size}
        title={headerState.title}
        height={58}
        backgroundColor={themeState.currentTheme.bg0}
        rightIcons={headerState.rightIcons}
        items={headerState.items}
        // leftIcons={<FaArrowLeft />}
        position={'flex-start'}
      />

      <Workflow
        setScrollTopY={setScrollTopY}
        workflow={appState?.currentWorkflow}
      />
    </AuthWorkflowStepperStyled>
  )
}
