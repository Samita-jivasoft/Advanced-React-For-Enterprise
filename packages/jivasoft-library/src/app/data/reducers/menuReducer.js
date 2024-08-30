import React from "react";

export const initialMenuState = {
  menuObject: {},
  ref:null,
  clicked: false,
  coordinates: {x:null,y:null}
}

export function menuReducer(state,action){
  switch(action.type) {

    case 'SET_MENUOBJECT':
      state['menuObject'] = action.object;
      state['clicked'] = action.clicked;
      state['ref'] = action.ref;
      state['coordinates'].x = action.xCoord;
      state['coordinates'].y = action.yCoord;
      return {...state}

    case 'SET_CLICKED':
      state['clicked'] = action.clicked;
      state['coordinates'].x = action.xCoord;
      state['coordinates'].y = action.yCoord;
      return{...state};

    case 'SET_COORDINATES':
      state['coordinates'].x = action.xCoord;
      state['coordinates'].y = action.yCoord;
      return {...state}
      
    default:
      return {...state}
  }
}