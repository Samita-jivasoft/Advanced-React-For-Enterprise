import React from 'react'
import { MapProvider, mapReducer } from './data'
import { setInitialProps } from './helpers'
import { MapMain } from './Main'

export const Map = props => {
  // console.log('Wrapper props', props)
  return (
    <MapProvider initialState={setInitialProps(props)} reducer={mapReducer}>
      <MapMain {...props} initialProperties={setInitialProps(props)} />
    </MapProvider>
  )
}
