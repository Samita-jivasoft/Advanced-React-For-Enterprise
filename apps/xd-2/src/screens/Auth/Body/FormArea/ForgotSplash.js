import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Form, Fieldset, Legend, FieldGroup, Label } from 'app/common'
import {
  FieldGroup,
  FieldSet,
  HelperButtonSizeSM,
  HelperButtonSizeXS,
  Label,
  Legend
} from 'components'
import { AnimatedError, APIModal } from '@jivasoft/jivasoft-lib/dist/components'
import { resetPassword } from 'app/api'

export function ForgotSplash (props) {
  const [email, setEmail] = useState('')
  const [emailValidationText, setEmailValidationText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  function handleForgot (e) {
    setIsLoading(true)
    e.preventDefault()
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!email || regex.test(email) === false) {
      setIsLoading(false)

      setEmailValidationText(
        <AnimatedError
          text={'Invalid Email format '}
          detail={'(Example: ex@example.com)'}
        />
      )
      return false
    } else {
      resetPassword(email).then(result => {
        setIsLoading(false)
        if (result.apiData) {
          props.onChange('CONFIRM')
          props.setEmail(email)
        } else {
          setEmailValidationText(
            <AnimatedError
              detail={result.error.message}
              text={'There was an unexpected Error'}
            />
          )
        }
      })
    }
    return true
  }
  return (
    <>
      {isLoading && <APIModal />}
      <form style={{ width: '100%' }}>
        <FieldSet>
          <Legend>Recover Password</Legend>

          <FieldGroup>
            <input
              type='text'
              name='username'
              placeholder='Enter your email'
              onClick={() =>
                emailValidationText === '' && setEmailValidationText('')
              }
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleForgot(e)
                }
              }}
              onChange={event => {
                // emailValidationText && setEmailValidationText('')
                setEmail(event.target.value)
              }}
            />
          </FieldGroup>
          <FieldGroup>
            <div>{emailValidationText}</div>
          </FieldGroup>
        </FieldSet>
      </form>
      <HelperButtonSizeXS onClick={e => handleForgot(e)}>
        Email me a recovery code
      </HelperButtonSizeXS>
    </>
  )
}
