import React from 'react'
import { StyledListLoader } from './styles/List'

export const ListLoader = ({ animated }) => {
  return (
    <StyledListLoader animated={animated}>
      <div className='list'>
        <div className='line' />
        <div className='line' />
        <div className='line' />
        <div className='line' />
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>
    </StyledListLoader>
  )
}
