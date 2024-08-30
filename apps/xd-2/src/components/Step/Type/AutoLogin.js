import { authenticateHash } from 'app/api'
import { useLogin } from 'app/auth'
import { useApp, useAuth, useStep } from 'app/data'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const StepTypeAutoLogin = React.memo(props => {
  const navigate = useNavigate()
  const location = useLocation()

  const { emailaddress, hash } =
    props.stepstate?.autologin?.[0]?.info?.[0] || {}


  const [, authDispatch] = useAuth()
  const [, appDispatch] = useApp()

  const [, stepDispatch] = useStep()

  useEffect(() => {
    navigate('/', { replace: true })
    stepDispatch({ type: 'CLEAR_STEP_DATA' })
    appDispatch({ type: 'UNSELECT_WORKFLOW' })

    authenticateHash(emailaddress, null, null, hash).then(result => {
      if (result.error !== null) {
      } else {
        //succesful login
        authDispatch({ type: 'LOGIN_SUCCESS', token: result.apiData })
      }
    })
  }, [navigate])

  return <div />
})
