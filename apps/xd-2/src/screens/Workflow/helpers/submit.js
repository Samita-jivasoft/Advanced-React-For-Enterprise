export function buildResponse (appState, stepState, navItem) {
  let formelements = []
  let stepinputs = stepState?.stepstate?.stepinputs
    ? stepState?.stepstate?.stepinputs
    : []

  // console.log('stepstate',stepState)
  let putStepObj = {
    step: [
      {
        workflowid: stepState.workflowid,
        stepid: stepState?.stepid,
        navigation: [navItem],
        agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
      }
    ]
  }

  switch (stepState.steptype) {
    case 'form':
      stepState?.stepdata?.map(item => {
        //If the item is submit:1 or submit:undefined, submit it...
        //submit===0, don't submit the element
        if (item?.submit != 0) {
          if (item.datatype === 'picklist') {
            const submitselectoptions = Array.isArray(item.value)
              ? item.value.map(({ id }) => ({ id: id, selected: 1 }))
              : []
            formelements.push({
              selectoptions: submitselectoptions,
              datatype: item.datatype,
              saveparam: item.saveparam
            })
            //if requiredbystep (UUID) exsists save element
            if (item.requiredbystep === navItem.navigationid) {
              stepinputs.push({
                saveparam: item.fieldname, //required by BE for Step submission
                datatype: item.datatype,
                selectoptions: submitselectoptions //input value from picklist FormElement
              })
            }
          } else if (item.datelist) {
            formelements.push({
              datelist: item.datelist,
              datatype: item.datatype,
              saveparam: item.saveparam
            })
            if (item.requiredbystep === navItem.navigationid) {
              stepinputs.push({
                saveparam: item.fieldname, //required by BE for Step submission
                datatype: item.datatype,
                datelist: item.datelist //input value from datelist FormElement
              })
            }
          } else {
            formelements.push({
              value: item.value,
              datatype: item.datatype,
              saveparam: item.saveparam
            })
            if (item.requiredbystep === navItem.navigationid) {
              stepinputs.push({
                saveparam: item.fieldname, //required by BE for Step submission
                datatype: item.datatype,
                value: item.value // input value from standard FormElement
              })
            }
          }
        }
      })

      // formelements
      putStepObj['step'][0]['form'] = [{ formelements: formelements }]

      // stepinputs
      putStepObj['step'][0]['stepinputs'] = stepinputs

      // let response = {
      //     "step": [
      //         {
      //             "workflowid": stepState.workflowid,
      //             "stepid": stepState.stepid,
      //             "navigation": [navItem],
      //             'agencyid': appState.currentAgency ? appState.currentAgency.agencyid : null,
      //             "form": [{
      //                 'formelements': formelements
      //             }]
      //         }
      //     ]
      // };
      // console.log('=============>>>>>',response)
      return putStepObj
    case 'crud':
      putStepObj['step'][0]['crud'] = stepState.stepstate.crud
      putStepObj['step'][0]['crud'][0]['changeditems'] = stepState.stepdata
      return putStepObj

    default:
      return null
  }
}
