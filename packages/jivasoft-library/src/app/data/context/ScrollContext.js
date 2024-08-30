import React, { createContext, useContext, useReducer, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
}

export const ScrollContextProvider = ({ children, initialState, reducer }) => {
  const [scrollState, scrollDispatch] = useReducer(reducer, initialState);
  
  return (
    <ScrollContext.Provider value={{ scrollState, scrollDispatch }}>
      {children}
    </ScrollContext.Provider>
  );
}

