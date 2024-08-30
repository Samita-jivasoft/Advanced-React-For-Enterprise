import { useAuth, useViewport } from 'app/data/context'
import React, { useState, useRef, wait } from 'react'

import {
  FieldGroup,
  FieldSet,
  HelperButtonSizeREG,
  HelperButtonSizeSM,
  HelperButtonSizeXS
} from 'components'
import { authenticateHash, loginGetSalt } from 'app/api'
import { PRIMARY_COLOR } from 'app/globalStyles'
import { IconEdsHat, IconEdsLogo } from 'app/brand'
import { md } from 'app/constants'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useSetErrorMessage from '@jivasoft/jivasoft-lib/dist/app/helpers/useSetErrorMessage.js'
import { AnimatedError } from '@jivasoft/jivasoft-lib/dist/components'

export function Login () {
  const [authState, authDispatch] = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState(null)
  const setErrorMessage = useSetErrorMessage()
  const { viewWidth } = useViewport()
  const navigate = useNavigate()

  {
    /* <motion.div
			style={{ color: "red" }}
			animate={{ scale: [1, 1.2, 1] }}
			tansition={{ duration: 0.6, times: [0.25, 0.25] }}
		>
			{loginError}
		</motion.div> */
  }

  function handleLogin (e) {
    e.preventDefault()
    setIsLoading(true)

    loginGetSalt(username, password).then(result => {
      if (result.error !== null) {
        setIsLoading(false)
        // setLoginError(
        //   <AnimatedError
        //     text={"We couldn't log you in right now. Please try again later."}
        //   />
        // )
        setErrorMessage(result.error)
      } else {
        authenticateHash(username, password, result.apiData).then(result => {
          if (result.error !== null) {
            setIsLoading(false)
            setErrorMessage(result.error)
            // setLoginError(
            //   <AnimatedError
            //     text={
            //       "We couldn't log you in right now. Please try again later."
            //     }
            //   />
            // )
          } else {
            //succesful login
            navigate('/')

            authDispatch({ type: 'LOGIN_SUCCESS', token: result.apiData })
            setIsLoading(false)
          }
        })
      }
    })
  }

  return (
    <>
      <form style={{ width: '100%' }}>
        {viewWidth < md && (
          <div
            style={{
              width: '100%',
              height: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <IconEdsHat
              height={'4rem'}
              width={'4rem'}
              background={PRIMARY_COLOR}
            />
          </div>
        )}
        <FieldSet>
          <div>Log in</div>

          <FieldGroup>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              onClick={() => loginError && setLoginError(null)}
              onChange={event => setUsername(event.target.value)}
            />
          </FieldGroup>
          <FieldGroup>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Enter your password'
                onClick={() => loginError && setLoginError(null)}
                onChange={event => setPassword(event.target.value)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    handleLogin(e)
                  }
                }}
              />
              <div
                style={{
                  // border: '1px solid red',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '10px',
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
          </FieldGroup>
          {/* <FieldGroupLoginCheckbox classes='fieldgroup-checkbox'>
          <div className='checkbox-left'>
            <Label>
              Remember me
              <input
                type='checkbox'
                name='remember'
                className='form-input-checkbox'
              />
              <span class='checkmark'></span>
            </Label>
          </div>
        </FieldGroupLoginCheckbox> */}
          <FieldGroup></FieldGroup>
        </FieldSet>
      </form>
      {!isLoading && (
        <HelperButtonSizeXS onClick={e => handleLogin(e)}>
          Login
        </HelperButtonSizeXS>
      )}
      {isLoading && 'Loading...'}
      {!isLoading && loginError}
    </>
  )

  //   <div
  //       onClick={() => {
  //         appDisaptch({ type: 'LOGIN' })
  //         console.log(appState)
  //       }}
  //       style={{
  //         height: 100,
  //         width: 100,
  //         backgroundColor: 'red'
  //       }}
  //     >
  //       hi
  //     </div>

  // const [loading, setLoading] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // let isTyping = false;
  // let history = useHistory();
  // let location = useLocation();
  // const loadingRef = useRef(null);

  // const [loginError, setLoginError] = useState(<b>Invalid username or password</b>);
  // const loginErrorMessage = (
  // 	<motion.div
  // 		style={{ color: "red" }}
  // 		animate={{ scale: [1, 1.2, 1] }}
  // 		tansition={{ duration: 0.6, times: [0.25, 0.25] }}
  // 	>
  // 		{loginError}
  // 	</motion.div>
  // );

  // const auth = useAuth();

  // let { from } = location.state || { from: { pathname: "/workspace" } };

  // const loginFunc = e => {
  // 	e.preventDefault();
  // 	setLoading(<b>Signing you in...</b>);
  // 	auth.signIn(username, password, () => updateLoadText());
  // };

  // const updateLoadText = () => {
  // 	if (cookies.get("token") == null) {
  // 		//handle empty user or pass
  // 		if (username == "") {
  // 			//setLoginError("Please enter a username")
  // 		}
  // 		if (password == "") {
  // 			//setLoginError("Please enter a password")
  // 		}

  // 		setLoading(loginErrorMessage);
  // 		//TODO: componentize this for consistent Error
  // 	} else {
  // 		setLoading("Signing you in...");
  // 	}
  // };

  // return (
  // 	<Form>
  // 		<Fieldset>
  // 			<Legend>Login</Legend>
  // 			<FieldGroup>
  // 				<input
  // 					type="text"
  // 					name="username"
  // 					placeholder="Enter your username"
  // 					alertMessage="Alert message text"
  // 					onClick={() => setLoading("")}
  // 					onChange={event => setUsername(event.target.value)}
  // 				/>
  // 			</FieldGroup>
  // 			<FieldGroup>
  // 				<input
  // 					type="password"
  // 					name="password"
  // 					placeholder="Enter your password"
  // 					onClick={() => setLoading("")}
  // 					alertMessage="Alert message text"
  // 					onChange={event => setPassword(event.target.value)}
  // 				/>
  // 			</FieldGroup>
  // 			<FieldGroupLoginCheckbox classes="fieldgroup-checkbox">
  // 				<div className="checkbox-left">
  // 					<Label>
  // 						Remember me
  // 						<input
  // 							type="checkbox"
  // 							name="remember"
  // 							className="form-input-checkbox"
  // 						/>
  // 						<span class="checkmark"></span>
  // 					</Label>
  // 				</div>
  // 			</FieldGroupLoginCheckbox>
  // 			<FieldGroup>
  // 				<button
  // 					className="button-secondary button-pill"
  // 					onClick={e => loginFunc(e)}
  // 				>
  // 					Login
  // 				</button>
  // 				<div>{loading}</div>
  // 			</FieldGroup>
  // 		</Fieldset>
  // 	</Form>
  // );
}
