import React, { useEffect, useState } from 'react'

import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import { useElement } from '../../data/ElementContext'
import { Viewer } from './Viewer'
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
  FaFileDownload,
  FaPrint
} from 'react-icons/fa'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { Actions, DocumentViwerWrapper, Toolbar } from './styles'

export const ElementTypePDFViewer = props => {
  const { base64String, height } = props
  const [elementState, elementDispatch] = useElement()
  const { defaultvalue, label } = elementState
  // console.log('here', base64String)
  // console.log('defaultvalue', defaultvalue)
  // console.log('elementState', elementState)

  const [blobFile, setBlobFile] = useState(
    base64String
      ? base64String.includes('data:application/pdf;base64,')
        ? base64String
        : 'data:application/pdf;base64,' + base64String
      : defaultvalue
      ? 'data:application/pdf;base64,' + defaultvalue
      : false
  )

  const [link, setLink] = useState(elementState.link ? elementState.link : '')
  // console.log('blobFile', blobFile)
  // console.log('link', link)

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    setNumPages(numPages)
  }, [numPages])

  function changePage (offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage () {
    changePage(-1)
  }

  function nextPage () {
    changePage(1)
  }

  function downloadPDF () {
    const pdfName = link
      ? link.split('/').pop()
      : label
      ? label.replace(/ /g, '-') + '.pdf'
      : 'download.pdf'

    const createdLink = document.createElement('a')
    createdLink.href = blobFile || link
    createdLink.download = pdfName
    createdLink.click()
  }

  const isValidLink = link => {
    // Check if the link is a non-empty string
    if (typeof link === 'string' && link.trim() !== '') {
      // Use a regular expression to check for valid URL format
      const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/
      if (urlPattern.test(link)) {
        return true
      }
    }
    return false
  }

  //TODO: move this outside for all components to use
  // Function to create a blob from the base64 data
  const createBlobFromBase64 = base64Data => {
    console.log(base64Data, base64Data)
    const byteCharacters = atob(
      base64Data.replace('data:application/pdf;base64,', '')
    )
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: 'application/pdf' })
  }
  const printPDF = () => {
    let windowUrl
    let blobUrl

    if (blobFile) {
      const blob = createBlobFromBase64(blobFile)
      if (blob) {
        // Create a URL for the blob
        blobUrl = URL.createObjectURL(blob)
        windowUrl = window.open(blobUrl)
      } else {
        // Handle the case where blob creation failed
        console.error('Failed to create a valid blob from blobFile.')
      }
    } else if (link) {
      // Verify that the link is valid
      if (isValidLink(link)) {
        windowUrl = window.open(link)
      } else {
        // Handle invalid link
        console.error('Invalid link:', link)
      }
    }

    if (windowUrl) {
      // Open a new window and print the content
      windowUrl.print()
      // Don't forget to revoke the URL after printing to release resources
      windowUrl.onafterprint = () => {
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl)
        }
      }
    } else {
      // Handle the case where neither a valid blob nor a valid link is available
      console.error('No valid file or link to print.')
    }

    //TRYING FOR SAME PAGE PRINT
    // // Create an <object> element and set its data attribute to the blob URL
    // const printObject = document.createElement('object')
    // printObject.data = blobUrl
    // printObject.style.display = 'none' // Hide the object element

    // // Append the object to the document body
    // document.body.appendChild(printObject)

    // // Trigger the print dialog
    // printObject.onload = () => {
    //   printObject.contentDocument.defaultView.print()
    //   // Remove the object element after printing
    //   document.body.removeChild(printObject)
    // }
  }

  return blobFile || link ? (
    <DocumentViwerWrapper height={height}>
      {(link || blobFile || numPages > 1) && !height && (
        <Toolbar>
          {numPages > 1 && (
            <div
              style={{
                // border: '1px solid red',
                width: '100%',
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <DynamicButtonV2
                // type={'chip'}
                // text={'Previous'}
                // backgroundColor={themeState.currentTheme.bg0}
                disabled={pageNumber <= 1}
                // color={themeState.currentTheme.text}
                onClick={previousPage}
                icon={<FaChevronCircleLeft size={20} />}
              />

              <div style={{ padding: '0px 30px 0px 30px' }}>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </div>
              <DynamicButtonV2
                // type={'chip'}
                // text={'Next'}
                // backgroundColor={themeState.currentTheme.bg0}
                // color={themeState.currentTheme.text}
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                icon={<FaChevronCircleRight size={20} />}
              />
            </div>
          )}
          <Actions>
            {(blobFile || link) && (
              <DynamicButtonV2
                onClick={printPDF}
                icon={<FaPrint size={20} />}
              />
            )}
            {(blobFile || link) && (
              <DynamicButtonV2
                onClick={downloadPDF}
                icon={<FaFileDownload size={20} />}
              />
            )}
            {link && (
              <DynamicButtonV2
                onClick={() => window.open(link, '_blank')}
                icon={<BsArrowsFullscreen size={20} />}
              />
            )}
          </Actions>
        </Toolbar>
      )}
      <div className='hoverable-document'>
        <Viewer
          setNumPages={setNumPages}
          setPageNumber={setPageNumber}
          file={blobFile || link}
          pageNumber={pageNumber}
          height={height}
        />
      </div>
    </DocumentViwerWrapper>
  ) : (
    <div>We couldn't load this file.</div>
  )
}
