import React from "react";

export const initialWorkflowApiState = {
 controller:null,
 id:null,
}

export function workflowApiReducer(state,action){
  switch(action.type) {

    case 'START_CONTROLLER':
      state['controller'] = action.controller;
      state['id'] = action.id
      return {...state}

    case 'ABORT_CONTROLLER':
      console.log('aborting old controller.')

      state['controller']?.abort();
      state['controller'] = action.controller;
      return{...state};

    case 'SET_COORDINATES':
      state['coordinates'].x = action.xCoord;
      state['coordinates'].y = action.yCoord;
      return {...state}

    case 'SET_DISPATCHED':
      state['dispatched'] = action.dispatch;
      return {...state}
      
    default:
      return {...state}
  }
}