import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  Legend,
  FieldGroup,
  Label,
  HelperButtonSizeXS,
  FieldSet
} from 'components'
import { setNew } from 'app/api'
import { FaTimes, FaCheck } from 'react-icons/fa'
import cryptojs from 'crypto-js'
import { AnimatedError } from '@jivasoft/jivasoft-lib/dist/components'

export function ResetPassword ({ email, passwordSalt }) {
  // const auth = useAuth()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validPasswordMessage, setValidPasswordMessage] = useState(null)

  const [remainingRequirements, setRemainingRequirements] = useState('')
  const [completedRequirements, setCompletedRequirements] = useState('')

  const [redirect, setRedirect] = useState(false)
  const [reqs, setReqs] = useState({
    minlength: 8,
    maxlength: 32,
    minuppercase: 1,
    minlowercase: 1,
    minspecialchar: 1,
    minnumber: 1
  })
  const [buttonState, setButtonState] = useState(false)

  useEffect(() => {
    if (reqs) {
      formValidation()
    }
  }, [password, confirmPassword, reqs])

  function stringContainsSpecial (string) {
    return /[^A-Z a-z0-9]/.test(string)
  }
  function stringContainsLower (str) {
    return /[a-z]/.test(str)
  }
  function stringContainsUpper (str) {
    return /[A-Z]/.test(str)
  }
  function stringContainsNumber (string) {
    return /\d/.test(string)
  }
  function formValidation () {
    const remainingRequirements = []
    const completedRequirements = []
    const remainingErrors = []
    if (password.length < reqs.minlength) {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes /> <b>{reqs.minlength + ' or more characters'}</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck /> <b>{reqs.minlength + ' or more characters'}</b>
        </div>
      )
    }

    if (password.localeCompare(confirmPassword) || password === '') {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes /> <b>Password and confirmation match</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck /> <b>Password and confirmation match</b>
        </div>
      )
    }

    if (!stringContainsNumber(password)) {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes /> <b>Contains at least one number</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck /> <b>Contains at least one number</b>
        </div>
      )
    }
    if (!stringContainsSpecial(password)) {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes />{' '}
          <b>Contains at least one special character e.g., ! @ # ? ]</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',

            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck />{' '}
          <b>Contains at least one special character e.g., ! @ # ? ]</b>
        </div>
      )
    }

    if (!stringContainsLower(password)) {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes /> <b>Contains at least one lower case character</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck /> <b>Contains at least one lower case character</b>
        </div>
      )
    }
    if (!stringContainsUpper(password)) {
      remainingRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'maroon'
          }}
        >
          <FaTimes /> <b>Contains at least one upper case character</b>
        </div>
      )
    } else {
      completedRequirements.push(
        <div
          style={{
            fontSize: '.8rem',
            flexDirection: 'row',
            display: 'flex',
            color: 'skyblue'
          }}
        >
          <FaCheck /> <b>Contains at least one upper case character</b>
        </div>
      )
    }
    setRemainingRequirements(remainingRequirements)
    setCompletedRequirements(completedRequirements)
  }
  const requirementObject = errorMessage => {
    return (<FaTimes></FaTimes>), { errorMessage }
  }

  function handleSubmit (e) {
    e.preventDefault()
    setValidPasswordMessage('Loading...')
    if (
      completedRequirements.length === Object.getOwnPropertyNames(reqs).length
    ) {
      var hash = cryptojs.SHA256(password + passwordSalt)
      var passwordHash = hash.toString()
      setNew(email, passwordHash, passwordSalt).then(result => {
        setRedirect(true)
      })
      //do try to submit
    } else {
      setValidPasswordMessage(
        <AnimatedError
          text={'Your new password does not fulfill all password requirements'}
        />
      )
    }
  }
  function nextFunc () {}

  return redirect ? (
    <Navigate to='/login' replace />
  ) : (
    <>
      {' '}
      <form style={{ width: '100%' }}>
        <FieldSet>
          <Legend>Recover Password</Legend>

          <br></br>
          <FieldGroup>
            <input
              type='password'
              name='password'
              placeholder='Enter your new password'
              alertMessage='Alert message text'
              onClick={() => setValidPasswordMessage(null)}
              onChange={event => setPassword(event.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <input
              type='password'
              name='password'
              placeholder='Confirm your new password'
              alertMessage='Alert message text'
              onClick={() => setValidPasswordMessage(null)}
              onChange={event => setConfirmPassword(event.target.value)}
            />
          </FieldGroup>

          <br></br>

          {validPasswordMessage && validPasswordMessage}
        </FieldSet>
      </form>
      <HelperButtonSizeXS disabled={buttonState} onClick={e => handleSubmit(e)}>
        Change my password
      </HelperButtonSizeXS>
      {!validPasswordMessage && (
        <div style={{ width: '100%' }}>
          <div>{remainingRequirements}</div>
          <div>{completedRequirements}</div>
        </div>
      )}
    </>
  )
}
