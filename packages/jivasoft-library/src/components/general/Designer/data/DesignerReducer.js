import React from "react";

export const initialDesignerState = {
  report:[],
  reportName:''
}

export function designerReducer(state,action){
  switch(action.type){
    case 'SET_REPORT':
      state['report'] = action.report;
      return {...state}
    case 'SET_REPORT_NAME':
      state['reportName'] = action.name;
      return {...state}
    default:
      return {...state}
  }

}