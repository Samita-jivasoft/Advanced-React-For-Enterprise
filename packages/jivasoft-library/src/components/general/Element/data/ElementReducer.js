export function elementReducer (state, action) {
  switch (action.type) {
    case 'INIT_ELEMENT':
      return { ...state, label: action.label, canedit: action.canedit }
    case 'TOGGLE_ISEDIT':
      return { ...state, isEdit: action.isEdit }
    case 'TOGGLE_ISREVIEW':
      return { ...state, isReview: action.isReview }

    case 'SET_REQUIREMENTS':
      return { ...state, remainingRequirements: action.requirements }
    case 'ADD_REQUIREMENTS':
      return {
        ...state,
        remainingRequirements: [
          ...state.remainingRequirements,
          ...action.requirements
        ]
      }
    case 'RESET_REQUIREMENTS':
      return { ...state, remainingRequirements: [] }
    case 'SET_VALUE':
      return { ...state, value: action.value }
    case 'SET_TEXTAREAVALUE':
      return { ...state, textareavalue: action.textareavalue }
    case 'SET_DEFAULTVALUE':
      return { ...state, defaultvalue: action.defaultvalue }
    case 'SET_OLDVALUES':
      return { ...state, ...action.values }
    case 'SET_VALUES':
      return { ...state, ...action.values }
    case 'SET_ACTION':
      return { ...state, action: action.action }
    case 'SET_HASH':
      return { ...state, hash: action.hash }

    case 'SET_MODAL':
      return { ...state, elementmodal: action.elementmodal }

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
