export function buildResponse (appState, stepState, navItem) {
  let formelements = []
  let stepinputs = stepState?.stepstate?.stepinputs
    ? stepState?.stepstate?.stepinputs
    : []

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
      stepState?.stepdata?.forEach(item => {
        // Skip items with submit === 0
        if (item?.submit === 0) return

        // console.log('in here', item)
        let submitData
        switch (item.datatype.toLowerCase()) {
          // set element datatype specific fields
          case 'picklist':
            const submitselectoptions = Array.isArray(item.value)
              ? item.value.map(({ id }) => ({ id: id, selected: 1 }))
              : []
            submitData = {
              selectoptions: submitselectoptions
            }
            break
          case 'datelist':
            submitData = { datelist: item.datelist }
            break
          default:
            // Default case for other datatypes or if datatype is not provided
            // console.log('here', item.masktype)
            switch (item.masktype.toLowerCase()) {
              case 'password':
                submitData = {
                  hash: item.hash
                }
                break
              default:
                submitData = {
                  value: item.value
                }
                break
            }
            break
        }

        // set elements that are globally element specific
        formelements.push({
          datatype: item.datatype,
          saveparam: item.saveparam,
          ...submitData
        })

        if (item.requiredbystep === navItem.navigationid) {
          stepinputs.push({
            saveparam: item.fieldname, //required by BE for Step submission
            datatype: item.datatype,
            ...submitData
          })
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
      return putStepObj
  }
}
