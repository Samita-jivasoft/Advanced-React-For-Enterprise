export const initialWorkflowState = {
  nav: [],
  stepId: '',
  stepType: '',
  workflowId: ''
}

export function workflowReducer (state, action) {
  const nav = []
  const [stepId, stepType, workflowId] = ''
  switch (action.type) {
    case 'WORKFLOW_INIT':
      return {
        ...state,
        nav: nav,
        stepId: stepId,
        stepType: stepType,
        workflowId: workflowId
      }

    default:
      return { ...state, }
  }
}
