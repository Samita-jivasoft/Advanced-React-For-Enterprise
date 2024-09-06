"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viewer = void 0;
var _reactPdf = require("react-pdf");
var _react = _interopRequireDefault(require("react"));
require("react-pdf/dist/esm/Page/AnnotationLayer.css");
require("react-pdf/dist/esm/Page/TextLayer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';

const Viewer = _ref => {
  let {
    setNumPages,
    setPageNumber,
    pageNumber,
    file,
    height
  } = _ref;
  // uncomment this when trying to test a doc
  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   'pdfjs-dist/build/pdf.worker.min.js',
  //   import.meta.url
  // ).toString()

  // console.log('file', file)
  return /*#__PURE__*/_react.default.createElement(_reactPdf.Document, {
    file: file,
    onLoadSuccess: _ref2 => {
      let {
        numPages
      } = _ref2;
      setNumPages(numPages);
      setPageNumber(1);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactPdf.Page, {
    pageNumber: pageNumber || 1,
    width: null,
    height: height !== null && height !== void 0 ? height : null
  }));
};
exports.Viewer = Viewer;