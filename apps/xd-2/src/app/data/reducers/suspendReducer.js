import { useState } from "react";

export const initialSuspendState = {
  suspendState:[]
}

export function suspendReducer(state,action){
  switch(action.type){
    case 'PUSH':{
      return {...state, suspendState:[...state.suspendState, action.payload]};
    }
    case 'POP':{
      return {...state, suspendState: state.suspendState.filter((_,i)=>
        i != state.suspendState.length-1)}
    }
    case 'REMOVE_STATE':{
      var index = action.payload;
      var copyState = state.suspendState
      copyState.splice(action.payload)
      return{...state, suspendState:[...copyState]}
    }
    case 'DELETE_ALL':{
      return {...state,suspendState:[]};
    }
    default:
      return initialSuspendState;
  }
}