import { authenticateHash } from 'app/api'
import { useAuth } from 'app/data'
import { useState } from 'react'
import { AnimatedError } from '@jivasoft/jivasoft-lib/dist/components'
/**
 * A custom hook to save step configuration.
 *
 * @param {Object} authState - Authentication state containing the token.
 * @param {Object} stepState - State related to the current step and workflow.
 * @return {Function} A function to trigger the save operation, along with the operation's status.
 */
export function useLogin (username, hash) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [, authDispatch] = useAuth()

  authenticateHash(username, null, null, hash).then(result => {
    if (result.error !== null) {
      setIsLoading(false)
      setError(
        <AnimatedError
          text={"We couldn't log you in right now. Please try again later."}
        />
      )
    } else {
      //succesful login
      authDispatch({ type: 'LOGIN_SUCCESS', token: result.apiData })
      setIsLoading(false)
      setSuccess(true)
    }
  })
  return { isLoading, error, success }
}

export default useLogin
