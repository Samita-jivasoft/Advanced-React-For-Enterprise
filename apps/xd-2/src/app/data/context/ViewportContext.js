import React, {useContext, useEffect, useState, createContext} from 'react';

export const ViewportContext = createContext();

export const ViewPortProvider = ({children}) => {
  //logic for calculating viewport size

  const [viewWidth, setWidth] = useState(window.innerWidth)
  const [viewHeight, setHeight] = useState(window.innerHeight)

  const handleWindowResize = () =>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  //useEffect to listen for changes in size
    useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //provider 
  return (
    <ViewportContext.Provider value ={{viewWidth, viewHeight}}>
      {children}
    </ViewportContext.Provider>
  )
}

//useViewport, custom hook that utilizes context to 
export const useViewport = () => {
  const {viewWidth, viewHeight} = useContext(ViewportContext)
  return{viewWidth, viewHeight}
}