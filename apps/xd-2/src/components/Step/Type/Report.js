import { useEffect, useRef, useState } from 'react'
import { useApp } from 'app/data/context/AppContext'
import { Viewer, Designer } from '@grapecity/activereports-react'
import '../styles/Report.css'
import {
  DynamicButtonV2,
  AnimatedErrorPane
} from '@jivasoft/jivasoft-lib/dist/components'
import { FaSync, FaPrint, FaDownload } from 'react-icons/fa'
import { Core, PdfExport } from '@grapecity/activereports'

// async function loadData(){
//   const headers = new Headers();

//   const dataRequest = new Request(
//    "https://demodata.grapecity.com/northwind/api/v1/Products",
//    {
//       headers: headers
//    }
//   );

//   const response = await fetch(dataRequest);
//   const data = await response.json();

//   return data;
// }
//format the string of number to look like a phone number
function formatPhoneNumber (phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

//Function that retrieves the report template
async function loadReport () {
  let reportResponse
  try {
    reportResponse = await fetch('InvoiceTemplate.json')
  } catch (error) {
    console.log('Error, Could not fetch the report template')
  }
  const report = await reportResponse.json()
  //console.log('report : ',report)
  return report
}

export const StepTypeReport = props => {
  const { stepstate } = props

  const [appState, appDispatch] = useApp()
  const [openReportStatus, setOpenReportStatus] = useState(false)

  if (stepstate?.report) {
    // //Inititalize a deep copy of the report stepstate data
    var reportData = JSON?.parse(JSON?.stringify(stepstate?.report))

    // //Inititalize a date object of the dates values and the last detail item
    var accountManagerNumber = formatPhoneNumber(reportData[0].accountmanager)

    var statementDate = new Date(reportData[0].statementdate)
    var dueDate = new Date(reportData[0].duedate)
    var lastDetail = reportData[0].details.find(
      detailItem => detailItem.item === 'Total'
    )

    // //Get the substring of the date values and amount of value of the last detail item
    reportData[0].accountmanager = accountManagerNumber
    reportData[0].statementdate = statementDate.toISOString().substring(0, 10)
    reportData[0].duedate = dueDate.toISOString().substring(0, 10)
    reportData[0].amountDue = lastDetail?.amount
  }
  // //Inititalize a useref for the viewer component
  const viewerRef = useRef()

  const pdfExportSettings = {
    title: '',
    author: '',
    keywords: 'export, report',
    subject: 'Report',
    pdfVersion: '1.4'
  }

  // //Dispaly a modal if the stepstate.report is null or undefined
  useEffect(() => {
    if (
      !stepstate.report ||
      stepstate.report === undefined ||
      stepstate.report === null
    ) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: (
          <AnimatedErrorPane
            onClose={() => {
              appDispatch({ type: 'UNSET_MODAL' })
            }}
            text={`Sorry, We couldn't load this invoice report.`}
          />
        )
      })
    }
  }, [])

  async function openReport () {
    //const data = await loadData()
    const report = await loadReport()
    report.DataSources[0].ConnectionProperties.ConnectString =
      'jsondata=' + JSON.stringify(reportData)
    viewerRef.current.Viewer.open(report)
  }

  async function printReport () {
    const report = new Core.PageReport()
    const printReport = await loadReport()

    printReport.DataSources[0].ConnectionProperties.ConnectString =
      'jsondata=' + JSON.stringify(reportData)

    await report.load(printReport)
    const doc = await report.run()
    //viewerRef.current.Viewer.open(report)
    doc.print()
  }

  async function downloadReport () {
    const report = new Core.PageReport()
    const downloadReport = await loadReport()
    downloadReport.DataSources[0].ConnectionProperties.ConnectString =
      'jsondata=' + JSON.stringify(reportData)

    await report.load(downloadReport)
    const doc = await report.run()
    const result = await PdfExport.exportDocument(doc, pdfExportSettings)
    result.download('InvoiceReport')
  }

  //useeffect that retrived the report and then opens the report through the viewer ref
  useEffect(() => {
    openReport()
  }, [])

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'scroll' }}>
      <DynamicButtonV2
        text={'Reload Report'}
        onClick={() => {
          openReport()
        }}
        icon={<FaSync />}
      />
      <div id='viewer-host'>
        <Viewer
          ref={viewerRef}
          //report={{ Uri: 'report.rdlx-json' }}

          sidebarVisible={false}
          toolbarVisible={false}
          viewMode={'Continuous'}
        />
      </div>
      <DynamicButtonV2
        text={'Print Report'}
        onClick={() => {
          printReport()
        }}
        icon={<FaPrint />}
      />
      <DynamicButtonV2
        text={'Download Report'}
        onClick={() => {
          downloadReport()
        }}
        icon={<FaDownload />}
      />
    </div>
  )
}
