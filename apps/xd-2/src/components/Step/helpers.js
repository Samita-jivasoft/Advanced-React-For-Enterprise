import {
  APIModal,
  AnimatedErrorPane,
  DynamicButtonV2,
  LoaderSpinner
} from '@jivasoft/jivasoft-lib/dist/components'
import { StepTypeForm, StepTypeSorter } from './Type'
import { StepTypeList } from './Type/List'
import { getMetaConfig, putMeta } from 'app/api'
import { Core, PdfExport } from '@grapecity/activereports'
import { generateStepContext } from 'screens/Workflow/helpers/step'
export function determineStepType (stepType, step) {
  switch (stepType) {
    case 'form':
      return <StepTypeForm step={step} />
    case 'sorter':
      return <StepTypeSorter step={step} />
    case 'crud':
      return <StepTypeList step={step} />
    default:
      return (
        <div>
          <LoaderSpinner />
        </div>
      )
  }
}

// export function getStepConfig (token, stepState) {
//   let stepconfig = stepState?.stepstate?.feconfig ?? -1
//   let workflowid = stepState?.workflowid ?? null
//   let stepid = stepState?.stepid ?? null
//   let data = {
//     step: [
//       {
//         workflowid: workflowid,
//         stepid: stepid
//       }
//     ]
//   }

//   if (stepconfig === 1) {
//     return getMetaConfig(token, data).then(result => {
//       console.log(result.apiData)

//       // if (result.error == null) {
//       //   // console.log('got:', result.apiData)
//       //   // setInitialConfig(result.apiData)
//       //   return({
//       //     value: result?.apiData?.value,
//       //     endtime: result?.apiData?.endtime,
//       //     starttime: result?.apiData?.starttime,
//       //     workflowid: workflowid,
//       //     stepid: stepid
//       //   })

//       // } else {
//       //   console.log('could not retrieve Step config')
//       //   return({
//       //     value: '',
//       //     endtime: null,
//       //     starttime: null,
//       //     workflowid: workflowid,
//       //     stepid: stepid
//       //   })

//       // }
//     })
//   }
//   // there is no saved configuration
//   // possible to send a configuration
//   // else if (stepconfig === 0) {
//   //   return({
//   //     value: '',
//   //     endtime: null,
//   //     starttime: null,
//   //     workflowid: workflowid,
//   //     stepid: stepid
//   //   })
//   // } else if (stepconfig === -1) {
//   //   //no config, no possibility of config
//   //   return(null)
//   // }
// }

export function getStep (
  row,
  cruditem,
  idcolumn,
  createController,
  cancelController,
  appState,
  appDispatch,
  stepState,
  stepDispatch,
  authState,
  headerDispatch
) {
  let putWorkflowObj

  if (cruditem?.peritem === 1) {
    putWorkflowObj = {
      step: [
        {
          workflowid: cruditem?.workflowid,
          stepid: '',
          agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
          navigation: []
        }
      ]
    }
    // putWorkflowObj[idcolumn] = cruditem[idcolumn]
    // console.log(putWorkflowObj)

    putWorkflowObj.step[0]['id'] = row[idcolumn?.toLowerCase()]
  } else {
    putWorkflowObj = {
      step: [
        {
          workflowid: cruditem?.workflowid,
          stepid: '',
          agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
          navigation: []
        }
      ]
    }
  }
  appDispatch({
    type: 'SET_MODAL',
    currentModal: (
      <APIModal
        duration={15000}
        // apiCall={() => handleSetWorkflow()}
        cancel={() => {
          // appDispatch({ type: 'UNSELECT_WORKFLOW' })
          // appDispatch({ type: 'UNSET_MODAL' })
          cancelController && cancelController()
          // stepDispatch({ type: 'CLEAR_STEP_DATA' })
        }}
        message={'This is taking longer than expected.'}
      />
    )
  })
  // console.log('Im in this workflow',appState.currentWorkflow.workflowid)
  const controller = createController()

  putMeta(authState.token, putWorkflowObj, controller.signal).then(result => {
    // setIsLoading(false)
    appDispatch({
      type: 'UNSET_MODAL'
    })
    if (result.error !== null) {
      appDispatch({ type: 'UNSELECT_WORKFLOW' })
      headerDispatch({ type: 'RESET_HEADER' })
      stepDispatch({ type: 'CLEAR_STEP_DATA' })
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedErrorPane
            onClose={() => {
              appDispatch({ type: 'UNSET_MODAL' })
            }}
            header={appState.currentWorkflow.friendlyname}
            text={"We can't load this right now. Please try again later."}
            detail={result.error.message}
          />
        )
      })
      //TODO: implement message dispatch to message context
      // messageDispatch({type:'ADD_MESSAGE',message:{message:"We can't load this right now. Please try again later.",detail:result?.error?.message}})
    } else {
      //happy path
      generateStepContext(stepDispatch, result.apiData)
      //   appDispatch({
      //     type: 'SELECT_WORKFLOW',
      //     currentWorkflow: result.apiData,

      // })
    }
  })
}
export function getStepAction (
  row,
  cruditem,
  idcolumn,
  createController,
  cancelController,
  appState,
  appDispatch,
  stepState,
  stepDispatch,
  authState,
  action,
  headerDispatch
) {
  let putWorkflowObj

  if (cruditem?.peritem === 1) {
    putWorkflowObj = {
      step: [
        {
          workflowid: cruditem?.workflowid,
          stepid: '',
          agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
          navigation: []
        }
      ]
    }
    // putWorkflowObj[idcolumn] = cruditem[idcolumn]
    // console.log(putWorkflowObj)

    putWorkflowObj.step[0]['id'] = row[idcolumn?.toLowerCase()]
  } else {
    putWorkflowObj = {
      step: [
        {
          workflowid: cruditem?.workflowid,
          stepid: '',
          agencyids:
            appState?.currentWorkflow?.agencyrequired == 2
              ? appState.currentAgency
                ? appState.currentAgency.map(agency => agency.agencyid)
                : null
              : null,
          agencyid: appState.currentAgency
            ? appState.currentAgency[0].agencyid
            : null,
          navigation: []
        }
      ]
    }
  }
  appDispatch({
    type: 'SET_MODAL',
    currentModal: (
      <APIModal
        duration={15000}
        // apiCall={() => handleSetWorkflow()}
        cancel={() => {
          // appDispatch({ type: 'UNSELECT_WORKFLOW' })
          // appDispatch({ type: 'UNSET_MODAL' })
          cancelController && cancelController()
          // stepDispatch({ type: 'CLEAR_STEP_DATA' })
        }}
        message={'This is taking longer than expected.'}
      />
    )
  })
  // console.log('Im in this workflow',appState.currentWorkflow.workflowid)
  const controller = createController()

  putMeta(authState.token, putWorkflowObj, controller.signal).then(result => {
    // setIsLoading(false)
    appDispatch({
      type: 'UNSET_MODAL'
    })
    if (result.error !== null) {
      appDispatch({ type: 'UNSELECT_WORKFLOW' })
      headerDispatch({ type: 'RESET_HEADER' })
      stepDispatch({ type: 'CLEAR_STEP_DATA' })
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedErrorPane
            onClose={() => {
              appDispatch({ type: 'UNSET_MODAL' })
            }}
            header={appState.currentWorkflow.friendlyname}
            text={"We can't load this right now. Please try again later."}
            detail={result.error.message}
          />
        )
      })
      //TODO: implement message dispatch to message context
      // messageDispatch({type:'ADD_MESSAGE',message:{message:"We can't load this right now. Please try again later.",detail:result?.error?.message}})
    } else {
      //happy path
      // stepDispatch({type:'SET_CRUDITEM_TYPE', stepcase:181})
      switch (action) {
        case 'print':
          PrintInvoiceReport(result.apiData)
          break
        case 'download':
          DownloadInvoiceReport(result.apiData)

          break
        default:
          break
      }
      // generateStepContext(stepDispatch, result.apiData)
      //   appDispatch({
      //     type: 'SELECT_WORKFLOW',
      //     currentWorkflow: result.apiData,

      // })
    }
  })
}

//retrieves the report template for the invoice report
async function loadReport () {
  const reportResponse = await fetch('InvoiceTemplate.json')
  const report = await reportResponse.json()
  //console.log('report : ',report)
  return report
}

export async function PrintInvoiceReport (stepstate) {
  if (stepstate?.report) {
    // //Inititalize a deep copy of the report step data
    var reportData = JSON.parse(JSON.stringify(stepstate?.report))
    // //Inititalize a date object of the dates values and the last detail item
    var statementDate = new Date(reportData[0].statementdate)
    var dueDate = new Date(reportData[0].duedate)
    var lastDetail = reportData[0].details.find(
      detailItem => detailItem.item === 'Total'
    )
    // //Get the substring of the date values and amount of value of the last detail item
    reportData[0].statementdate = statementDate.toISOString().substring(0, 10)
    reportData[0].duedate = dueDate.toISOString().substring(0, 10)
    reportData[0].amountDue = lastDetail?.amount

    const report = new Core.PageReport()
    const printReport = await loadReport()

    printReport.DataSources[0].ConnectionProperties.ConnectString =
      'jsondata=' + JSON.stringify(reportData)

    await report.load(printReport)
    const doc = await report.run()
    doc.print()
  }
}

export async function DownloadInvoiceReport (stepstate) {
  if (stepstate.report) {
    // //Inititalize a deep copy of the report stepstate data
    var reportData = JSON.parse(JSON.stringify(stepstate?.report))
    // //Inititalize a date object of the dates values and the last detail item
    var statementDate = new Date(reportData[0].statementdate)
    var dueDate = new Date(reportData[0].duedate)
    var lastDetail = reportData[0].details.find(
      detailItem => detailItem.item === 'Total'
    )
    // //Get the substring of the date values and amount of value of the last detail item
    reportData[0].statementdate = statementDate.toISOString().substring(0, 10)
    reportData[0].duedate = dueDate.toISOString().substring(0, 10)
    reportData[0].amountDue = lastDetail?.amount

    const pdfExportSettings = {
      title: '',
      author: '',
      keywords: 'export, report',
      subject: 'Report',
      pdfVersion: '1.4'
    }

    const report = new Core.PageReport()
    const downloadReport = await loadReport()
    downloadReport.DataSources[0].ConnectionProperties.ConnectString =
      'jsondata=' + JSON.stringify(reportData)

    await report.load(downloadReport)
    const doc = await report.run()
    const result = await PdfExport.exportDocument(doc, pdfExportSettings)
    result.download('InvoiceReport')
  }
}
