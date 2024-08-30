import React from 'react'
import { useAppTheme } from 'app/data'
import { BiWindowClose } from 'react-icons/bi'

export const EmptyGeneric = props => {
  const [themeState] = useAppTheme()
  const { icon, message } = props
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        flexDirection: 'column',
        color: themeState.currentTheme.text
      }}
    >
      {icon || <BiWindowClose size={40} />}
      {message || 'Nothing to see here.'}
    </div>
  )
}
