import React, { useContext, createContext, useReducer, useEffect } from 'react'

export const MapContext = createContext()

export const MapProvider = ({ children, initialState, reducer }) => {
  const [mapState, mapDispatch] = useReducer(reducer, initialState)
  // console.log('ListPrivider', initialState, mapState)
  // useEffect(() => {
  //   // console.log('this')
  //   if (initialState)
  //     mapDispatch({
  //       type: 'INITIALIZE_DATA',
  //       props: initialState
  //     })
  // }, [initialState])

  //provider
  return (
    <MapContext.Provider value={[mapState, mapDispatch]}>
      {children}
    </MapContext.Provider>
  )
}

export const useMap = () => {
  return useContext(MapContext)
}
