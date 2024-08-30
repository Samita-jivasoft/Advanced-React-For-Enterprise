import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { PublicRoute } from '../../../app/routes/PublicRoute'
import { ForgotPassword, Login } from './FormArea'
import { AuthWorkflowStepper } from '../WorkflowStepper'

export const AuthBodyRoutes = () => {
  return (
    <Routes>
      {/* <PublicRoute component={} path='/auth/login' exact /> */}
      {/* <PublicRoute component={ForgotPassword} path='/auth/forgot' exact /> */}
      {/* <Route
        path='/auth/login'
        element={
            <Login />
        }
      /> */}
      {/* <Route path={'/auth/login'}replace={true}  element={<Login/>} /> */}
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<AuthWorkflowStepper />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
