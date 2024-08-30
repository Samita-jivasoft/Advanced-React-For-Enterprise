import React from 'react'
import { StyledFormLoader } from './styles'

export const FormLoader = () => {
  return (
    <StyledFormLoader>
      <div className='cards'>
        <div className='card is-loading'>
          <div className='content'>
            <h2></h2>
            <p></p>
            <h2></h2>
            <p></p>
            <h2></h2>
            <p></p>
            <h2></h2>
            <p></p>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </StyledFormLoader>
  )
}
