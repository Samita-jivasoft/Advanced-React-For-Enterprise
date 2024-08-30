import { Document, Page, pdfjs } from 'react-pdf'
import React from 'react'

// import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
export const Viewer = ({
  setNumPages,
  setPageNumber,
  pageNumber,
  file,
  height
}) => {
  // uncomment this when trying to test a doc
  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   'pdfjs-dist/build/pdf.worker.min.js',
  //   import.meta.url
  // ).toString()

  // console.log('file', file)
  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => {
        setNumPages(numPages)
        setPageNumber(1)
      }}
    >
      {/* <Outline onItemClick={({itemPageNumber}) => setPageNumber(itemPageNumber)} /> */}
      <Page pageNumber={pageNumber || 1} width={null} height={height ?? null} />
    </Document>
  )
}
