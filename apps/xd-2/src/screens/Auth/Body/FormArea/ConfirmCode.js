import React, { useState } from 'react'
import {
  FieldSet,
  Legend,
  FieldGroup,
  Label,
  HelperButtonSizeXS
} from 'components'
import { AnimatedError, APIModal } from '@jivasoft/jivasoft-lib/dist/components'
import { validateCode } from 'app/api'

export function ConfirmCode (props) {
  // const auth = useAuth();
  const [code, setCode] = useState('')
  const [validationText, setValidationText] = useState('')
  const [reqs, setReqs] = useState()
  const [isLoading, setIsLoading] = useState(false)
  function handleSubmit (e) {
    setIsLoading(true)
    e.preventDefault()
    setValidationText('Validating...')
    validateCode(props.email, code).then(result => {
      setIsLoading(false)

      if (result.apiData) {
        props.setPasswordSalt(result.apiData.payload.passwordsalt)
        props.onChange('RECOVER')
      } else {
        setValidationText(
          <AnimatedError text={"We couldn't validate your code"} />
        )
      }
    })
    // submit(props.email,code).then(result => nextFunc(result));
  }

  function nextFunc (response) {
    // if(!response.response.data.ok){
    // getPasswordRequirements().then(result => setReqs(result));
    // }
    // setValidationText(response.response.data.message)
  }
  // 5b4ca0a8-1e20-42e5-b944-2e2107c02bd5

  return (
    <>
      {isLoading && <APIModal />}
      <form style={{ width: '100%' }}>
        <FieldSet>
          <Legend>Recover Password</Legend>
          <div style={{ fontSize: '.8rem', width: '100%' }}>
            A recovery code was sent to your email. Please enter it below.
          </div>
          <br></br>

          <FieldGroup>
            <input
              type='text'
              name='username'
              placeholder='Enter reset code'
              alertMessage='Alert message text'
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleSubmit(e)
                }
              }}
              onChange={event => {
                validationText && setValidationText('')
                setCode(event.target.value)
              }}
            />

            <div>{validationText && validationText}</div>
          </FieldGroup>
        </FieldSet>
      </form>
      <HelperButtonSizeXS onClick={e => handleSubmit(e)}>
        Verify code
      </HelperButtonSizeXS>
    </>
  )
}
