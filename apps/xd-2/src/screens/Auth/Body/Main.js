import { md } from 'app/constants'
import { useViewport } from 'app/data'
import React from 'react'
// import { useHistory } from "react-router-dom";
// import { AuthRoutes } from "app/config";
// import { fakeAuth, AuthSignOut, AuthNotLoggedInMsg } from "./private";
// import { StyledAuthMain } from "../styles/AuthMainStyles";

import { StyledAuthBody } from '../styles/Body'
import { AuthBodyFormArea } from './FormArea/Main'
import { AuthBodyLinkArea } from './LinkArea'
import { AuthBodyRoutes } from './Routes'

export const AuthBody = () => {
  // let history = useHistory();
  const {viewWidth,viewHeight} = useViewport()
  return (
    <StyledAuthBody 
    backgroundColor={viewWidth<md?null:'white'}
    width={viewWidth<md?'90%':'40%'}
    height={viewWidth<md?'90%':null}

    >
      {/* <AuthBodyFormArea> */}
        <AuthBodyRoutes />
        
      {/* </AuthBodyFormArea> */}
      <AuthBodyLinkArea/>
    </StyledAuthBody>
  )
}
