

export const initialStepState = {
  stepdata: null,
  stepstate: null,
  stepstatus: null,
  steptype: null,
  stepid: null,
  workflowid: null,
}

export function stepReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_STEP_TYPE':
      return { ...state, steptype: action.steptype }
    case 'CLEAR_STEP_DATA':
      return { ...state, stepdata: null, stepstatus: null, steptype: null }
    case 'MODIFY_STEP_DATA':
      return { ...state, stepdata: action.stepdata }
    case 'MODIFY_STEP_STATUS':
      return { ...state, stepstatus: action.stepstatus }
    case 'MODIFY_STEP_AND_WORKFLOW_IDS':
      return { ...state, stepid: action.stepid, workflowid: action.workflowid }

    default:
      return { ...state }
  }
}
