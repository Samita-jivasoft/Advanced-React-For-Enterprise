import React from 'react'
import { PicklistMain } from './Main'
import { ListProvider, listReducer } from './data'
import { setInitialProps } from './helpers'

export const Picklist = props => {
  // console.log('Wrapper props', props)
  return (
    <ListProvider initialState={setInitialProps(props)} reducer={listReducer}>
      <PicklistMain {...props} initialProperties={setInitialProps(props)} />
    </ListProvider>
  )
}
