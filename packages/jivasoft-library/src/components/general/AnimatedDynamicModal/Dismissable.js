import React from 'react'
import { FaTimes, FaTimesCircle } from 'react-icons/fa'

export const Dismissable = props => {
  const { setClicked } = props
  return (
    <FaTimesCircle
      data-testid= {'close-button'}
      key={'dismissable'}
      size={15}
      style={{
        // border: '1px solid red',
        cursor: 'pointer',
        // padding: '0px 0px 0px 10px'
      }}
      onClick={() => setClicked(false)}
    />
  )
}
