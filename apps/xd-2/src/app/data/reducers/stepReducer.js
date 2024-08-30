import { getUserContext, login } from 'app/api'
import { theme } from 'app/globalStyles'
import { useState } from 'react'
import { cookies } from '..'

// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'
// let user = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).user
//   : ''

export const initialStepState = {
  //our local changes
  stepdata: null,
  //the og state
  stepstate: null,
  //local status updates
  stepstatus: null,
  //steptype
  steptype: null,
  stepid: null,
  workflowid: null,
  localstatus: {},
  stepisvalid: null
}

export function stepReducer (state, action) {
  switch (action.type) {
    case 'UPDATE_STEP_TYPE':
      return { ...state, steptype: action.steptype }

    case 'RESET_STEP':
      return initialStepState
    case 'CLEAR_STEP_DATA':
      return {
        ...state,
        stepdata: null,
        stepstate: null,
        stepstatus: null,
        steptype: null,
        stepid: null,
        workflowid: null,
        localstatus: {},
        stepisvalid: false
      }
    case 'MODIFY_STEP_DATA':
      return { ...state, stepdata: action.stepdata }
    case 'MODIFY_STEP_STATUS':
      return { ...state, stepstatus: action.stepstatus }
    case 'MODIFY_STEP_AND_WORKFLOW_IDS':
      return { ...state, stepid: action.stepid, workflowid: action.workflowid }
    case 'SET_STEP':
      //options to modify stepid, workflowid,
      return {
        ...state,
        stepdata: action.stepdata,
        stepisvalid:
          action.stepisvalid !== undefined
            ? action.stepisvalid
            : state.stepisvalid,
        stepstatus:
          action.stepstatus !== undefined
            ? action.stepstatus
            : state.stepstatus,
        steptype:
          action.steptype !== undefined ? action.steptype : state.steptype,
        stepstate:
          action.stepstate !== undefined ? action.stepstate : state.stepstate,
        stepid: action.stepid !== undefined ? action.stepid : state.stepid,
        workflowid:
          action.workflowid !== undefined ? action.workflowid : state.workflowid
      }
    case 'SET_STATUS':
      return {
        ...state,
        stepstatus: action.localstatus ? action.localstatus : state.localstatus
      }

    case 'UPDATE_CRUD_ELEMENTS':
      // Ensure crud exists and has at least one item.
      if (state.stepstate?.crud?.length > 0) {
        // Deep clone the first item to avoid mutations if it exists
        const firstCrudItem = { ...state.stepstate.crud[0] }

        // Only set formelements to an empty array if the property exists,
        // otherwise, keep the original firstCrudItem properties
        if (firstCrudItem.hasOwnProperty('formelements')) {
          firstCrudItem.formelements = action.formelements
        }

        // Construct the new state with the potentially updated firstCrudItem,
        // ensuring the rest of the crud array remains unchanged.
        const newState = {
          ...state,
          stepstate: {
            ...state.stepstate,
            crud: [firstCrudItem, ...state.stepstate.crud.slice(1)]
          }
        }
        return newState
      }
      return state
    default:
      return { ...state }
  }
}
