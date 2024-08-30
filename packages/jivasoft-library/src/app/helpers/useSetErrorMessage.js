import { useMessages } from '../data/context/MessageContext'
import { generateUUID } from 'app/helpers'

function useSetErrorMessage () {
  const [messageState, messageDispatch] = useMessages()

  const setErrorMessage = error => {
    console.log('The error', error)
    let status = error?.status

    let message = {
      type: 'errorBanner',
      formelements: [
        {
          label: 'Error',
          id: generateUUID(),
          status: 'error',
          message: ''
        }
      ],
      duration: null,
      id: generateUUID()
    }

    switch (status) {
      case 406:
        message.formelements[0].message =
          "We couldn't find an account with that email address. Please check and Try again."
        break
      case 401:
        message.formelements[0].message =
          'Incorrect Password. Try again with the correct password or Reset your password below. '
        break
      default:
        message.formelements[0].message =
          "We couldn't log you in right now. Please try again later."
        break
    }

    messageDispatch({ type: 'ADD_MESSAGE', message })
  }

  return setErrorMessage
}
export default useSetErrorMessage
