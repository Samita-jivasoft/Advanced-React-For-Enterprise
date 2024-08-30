import { steptypes } from '@jivasoft/jivasoft-lib/dist/app/constants/stepTypes'

export function generateStepContext(stepDispatch, data) {
    stepDispatch({ type: 'CLEAR_STEP_DATA' })

    setTimeout(() => {
        const isStepType = Object.keys(data).filter((key) => {
            return steptypes.includes(key)
        })
        if (isStepType.length === 1) {
            stepDispatch({ type: 'SET_STEP', stepstatus: null, steptype: null, stepstate: null, stepid: null, workflowid: null })
            let stepstatus = null;
            switch (isStepType[0]) {
                //if that one type is a form...
                case ('form'):
                    if (data.form[0].reviewrequired === 1) {
                        stepstatus = { isreview: false }
                    }
                    break;
            }

            stepDispatch({ type: 'SET_STEP', stepstatus: stepstatus, steptype: isStepType[0], stepstate: data, stepid: data.stepid, workflowid: data.workflowid })
            
        } else {
            //handle multiple steptypes
            // stepDispatch({ type: 'SET_STEP', steptype: null, stepstate: data, stepid: data.stepid, workflowid: data.workflowid })

        }
    }, '0')
    //If there's one step type

}

