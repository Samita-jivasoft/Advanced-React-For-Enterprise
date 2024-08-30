import { getMetaConfig, saveMetaConfig } from 'app/api'


export function setStepConfig(token,stepState, initialConfig, newConfigs){
  let stepconfig = stepState?.stepstate?.feconfig ?? -1
  let workflowid = stepState?.workflowid ?? null
  let stepid = stepState?.stepid ?? null
  let data = {
    step: [
      {
        workflowid: workflowid,
        stepid: stepid
      }
    ]
  }
  let configObj = {
    workflowid: stepState?.workflowid,
    stepid: stepState?.stepid,
    starttime:
      initialConfig?.starttime ,
    endtime:
      initialConfig?.endtime ,
    // value: JSON.stringify(newConfigs?.value ?? null)
    value: JSON.stringify(initialConfig?.value ?? null)

  }
     saveMetaConfig(token, { step: [configObj] }).then(result => {
      if (result.error == null) {
        console.log('save config ', result.apiData)
        console.log({ step: [configObj] })
        //we're good
      } else {
        //something went wrong
        //you might wanna show people the error.message here
      }
    })
}

export function getStepConfig(token,stepState){
  let stepconfig = stepState?.stepstate?.feconfig ?? -1
  let workflowid = stepState?.workflowid ?? null
  let stepid = stepState?.stepid ?? null
  let data = {
    step: [
      {
        workflowid: workflowid,
        stepid: stepid
      }
    ]
  }

  if (stepconfig === 1) {
    return getMetaConfig(token, data).then(result => {
    
      if (result.error == null) {

        // let configuration={
        //   value: result?.apiData?.value,
        //   endtime: result?.apiData?.endtime,
        //   starttime: result?.apiData?.starttime,
        //   workflowid: workflowid,
        //   stepid: stepid
        // }
        // // setInitialConfig(result.apiData)
        //         console.log('configuration',configuration)

        return(result?.apiData?.configuration?.[0])

        
      } else {
        // console.log('getMetaConfig error, returning :',{
        //   value: '',
        //   endtime: null,
        //   starttime: null,
        //   workflowid: workflowid,
        //   stepid: stepid
        // })
        return({
          value: '',
          endtime: null,
          starttime: null,
          workflowid: workflowid,
          stepid: stepid
        })

      }
    })

  }
  // there is no saved configuration
  // possible to send a configuration
  else if (stepconfig === 0) {
    // console.log('stepconfig supported, but not returned returning: ',
    // {
    //   value: '',
    //   endtime: null,
    //   starttime: null,
    //   workflowid: workflowid,
    //   stepid: stepid
    // })
    return({
      value: '',
      endtime: null,
      starttime: null,
      workflowid: workflowid,
      stepid: stepid
    })
  } else if (stepconfig === -1) {
    //no config, no possibility of config
    return(null)
  }
}