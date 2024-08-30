import { useState } from "react"

export function generateUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function getInitials (label) {
  const regex = /((?:\s|^)\w)/g

  const matchStr = label?.match(regex)

  // Handle the case where there's only one match
  if (matchStr.length === 1) {
    return <>{matchStr[0].trim()}</>
  }

  // Extract the first and last characters and trim any whitespace
  const initials = [matchStr[0], matchStr[matchStr.length - 1]].map(s =>
    s.trim()
  )

  return <>{initials.join('')}</>
}

export function useSubmitButton () {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const disableSubmitButton = () => {
    setSubmitButtonDisabled(true)
  }

  const enableSubmitButton = () => {
    setSubmitButtonDisabled(false)
  }
  // console.log('HOOK submitButtonDisabled', submitButtonDisabled)
  return { submitButtonDisabled, disableSubmitButton, enableSubmitButton }
}
