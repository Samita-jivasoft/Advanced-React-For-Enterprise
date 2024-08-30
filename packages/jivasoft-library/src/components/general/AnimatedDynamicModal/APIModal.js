import React, { useState, useEffect } from 'react'
import { AnimatedDynamicModal } from './Main'
import { LoaderSpinner } from '../Loader/Spinner'
import { useAppTheme } from 'app/data'

export const APIModal = props => {
  const {
    isDismissable,
    clicked,
    backdrop,
    message,
    duration = 10000,
    apiCall,
    cancel,
    children
  } = props
  // if (!clicked) { return null }
  const [themeState] = useAppTheme()

  const [text, setText] = useState('')
  useEffect(() => {
    if (text !== '') {
      setText('')
    }
    setTimeout(() => {
      setText(message)
    }, duration)
  }, [])

  // Set the duration for displaying the "Cancel" message in milliseconds
  // const duration = 1000; // 5 seconds

  // Make the API call with a timeout

  // Show "Cancel" message after the specified duration

  // Handle the API call response

  return (
    <AnimatedDynamicModal
      backgroundColor={themeState.currentTheme.bga2}
      type={'modal'}
      height={250}
      width={250}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItems: text !== '' ? 'flex-start' : 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LoaderSpinner />
        </div>
        {text && (
          <div
            style={{
              fontSize: '.7rem',
              color: themeState.currentTheme.text,
              marginTop: 10,
              width: '100%',
              textAlign: 'center'
            }}
          >
            {message}
          </div>
        )}
        {apiCall && (
          <div
            onClick={() => apiCall()}
            style={{
              fontSize: '.7rem',
              cursor: 'pointer',

              textDecoration: 'underline',
              color: themeState.currentTheme.text,
              marginTop: 10,
              width: '100%',
              textAlign: 'center'
            }}
          >
            {'Try Again'}
          </div>
        )}
        {cancel && (
          <div
            onClick={() => cancel()}
            style={{
              cursor: 'pointer',
              fontSize: '.7rem',
              textDecoration: 'underline',
              color: themeState.currentTheme.text,
              marginTop: 10,
              width: '100%',
              textAlign: 'center'
            }}
          >
            {'Cancel'}
          </div>
        )}
      </div>
      {children}
    </AnimatedDynamicModal>
  )
}
