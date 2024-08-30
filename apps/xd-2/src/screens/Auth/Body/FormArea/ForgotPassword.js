// import React, { useState, useEffect } from 'react'
// import { Link, NavLink } from "react-router-dom";
// import { Form, Fieldset, Legend, FieldGroup, Label } from "app/common";
// import { useAuth, resetPassword } from "app/data";
// import {} from "app/data/";
// import {ConfirmCode, ForgotSplash, ResetPassword} from '.'

// export function ForgotPassword (e) {
	
//   return <div></div> // const auth = useAuth();
  // const [nextState, setNextState]= useState("FORGOT")
  // const [optional, setOptional] = useState("");

  // const RenderedComponent = () =>{
  // 	function handleChange(newNextState,newOptional){
  // 		setNextState(newNextState)
  // 		setOptional(newOptional)
  // 	}
  // 	console.log(nextState)

  // 	return (nextState=="FORGOT")? <ForgotSplash value={nextState} email={optional} onChange={handleChange}/> :
  // 	(nextState=="CONFIRM")? <ConfirmCode value={nextState} email={optional} onChange={handleChange}/> : <ResetPassword value={nextState} email={optional} onChange={handleChange}/>

  // }

  // return (
  // 	<RenderedComponent/>
  // );
// }

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Form, Fieldset, Legend, FieldGroup, Label } from 'app/common'
import { useAuth, resetPassword } from 'app/data'
import {} from 'app/data/'
import { ConfirmCode, ForgotSplash, ResetPassword } from '.'


export function ForgotPassword (e) {
	// const auth = useAuth()
	const [nextState, setNextState] = useState('FORGOT')
	const [email, setEmail] = useState('')
	const [passwordSalt, setPasswordSalt] = useState('')

	const RenderedComponent = () => {
		function handleChange (newNextState, newOptional) {
			setNextState(newNextState)
		}

		return nextState == 'FORGOT' ? (
			<ForgotSplash
				value={nextState}
				email={email}
				setEmail={setEmail}
				onChange={handleChange}
			/>
		) : nextState == 'CONFIRM' ? (
			<ConfirmCode
				value={nextState}
				email={email}
				setPasswordSalt={setPasswordSalt}
				onChange={handleChange}
			/>
		) : (
			<ResetPassword
				passwordSalt={passwordSalt}
				value={nextState}
				email={email}
				onChange={handleChange}
			/>
		)
	}

	return <RenderedComponent />
}
