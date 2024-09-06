"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadReport = downloadReport;
exports.formatPhoneNumber = formatPhoneNumber;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
var _activereportsReact = require("@grapecity/activereports-react");
var _activereports = require("@grapecity/activereports");
const pdfExportSettings = {
  title: '',
  author: '',
  keywords: 'export, report',
  subject: 'Report',
  pdfVersion: '1.4'
};

//format the string of number to look like a phone number
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

//Function to download the report onto the user's computer
async function downloadReport(designerRef, info) {
  if (designerRef.current) {
    const reportInfo = await designerRef.current.getReport();
    const report = new _activereports.Core.PageReport();
    await report.load(reportInfo.definition);
    const doc = await report.run();
    const result = await _activereports.PdfExport.exportDocument(doc, pdfExportSettings);
    result.download(reportInfo.displayName);
  }
}