import { Viewer, Designer } from '@grapecity/activereports-react';
import { Core, PdfExport } from "@grapecity/activereports"

const pdfExportSettings = {
  title: '',
  author: '',
  keywords: 'export, report',
  subject: 'Report',
  pdfVersion: '1.4'
}

//format the string of number to look like a phone number
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

//Function to download the report onto the user's computer
export async function downloadReport(designerRef, info){
  if(designerRef.current)
  {
    const reportInfo = await designerRef.current.getReport()
    const report = new Core.PageReport();
    await report.load(reportInfo.definition)
    const doc = await report.run();
    const result = await PdfExport.exportDocument(doc, pdfExportSettings)
    result.download(reportInfo.displayName)
  }
}
