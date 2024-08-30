import React from 'react'
import {
  DefaultFile,
  DisplayFilesContainer,
  FileLink,
  FilePreview,
  FilePreviewContainer,
  PreviewArea
} from './styles'
import { useElement } from '../../data/ElementContext'
import { ElementHeaderStyled } from '../../styles/Main'
import { IoRemoveCircle } from 'react-icons/io5'
import { ElementTypePDFViewer } from '../PDFViewer'
import {
  downloadFile,
  getFileTypeAltName,
  openFileInNewTab,
  openImageInNewTab,
  removeFile
} from './handlers'
import { filetypes } from './assets'

export const DisplayFiles = props => {
  const { files, setFiles, validFileTypes } = props
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    validmaximum,
    allowmultiplefiles,
    allowmultiplepicklistselections,
    // files,
    onClick,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision
  } = elementState

  //TODO: add support for allowmultipleselections
  const getFileTypePreview = (fileData, index) => {
    const { base64String, name, file, downloadname } = fileData
    // console.log(fileData)
    if (base64String) {
      switch (true) {
        case base64String?.startsWith('data:application/pdf'):
          return {
            content: (
              <ElementTypePDFViewer
                key={index}
                base64String={base64String}
                height={50}
              />
            ),
            opener: () => {
              openFileInNewTab(base64String)
            }
          }
        case base64String?.startsWith('data:image/'):
          return {
            content: (
              <img
                key={index}
                src={base64String}
                alt={name + '-' + index}
                style={{
                  display: 'flex',
                  maxHeight: '50px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            ),
            opener: () => {
              openImageInNewTab(base64String, name)
            }
          }
        case base64String?.startsWith('data:application/msword'):
        case base64String?.startsWith(
          'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ):
        default:
          return {
            content: filetypes.map(
              (type, index) =>
                base64String?.split(',')[0]?.includes(type.type) && (
                  <div key={index + '_' + type?.name}>{type.icon}</div>
                )
            ),
            opener: () => null
          }
      }
    }
  }

  return (
    <DisplayFilesContainer>
      {isEdit && (
        <ElementHeaderStyled style={{ marginBottom: '10px' }}>
          {'Uploaded Files'.toUpperCase()}
        </ElementHeaderStyled>
      )}
      <PreviewArea>
        {/* 
          TODO: remove the weird check when BE allows multiple files to be returned
                this is soley for UI, we can only return one value and its always going to be
                the first item in the files array
        */}
        {files?.length > 0 &&
          (isEdit ? files : [files[0]]).map((fileData, index) => (
            <FilePreviewContainer
              key={index}
              isEdit={isEdit}
              href={fileData.base64String}
              target='_blank'
              rel='noopener noreferrer'
              onClick={event => {
                event.preventDefault()
                if (getFileTypePreview(fileData, index)?.opener()) {
                  // console.log('do this twice?')
                  getFileTypePreview(fileData, index).opener()
                }
                // console.log('fileData', fileData)x
                downloadFile(
                  fileData.base64String,
                  getFileTypeAltName(fileData, validFileTypes)
                )
              }}
            >
              {isEdit && (
                <IoRemoveCircle
                  size={20}
                  color={'red'}
                  className='removeIcon'
                  onClick={event => removeFile(event, fileData, setFiles)}
                />
              )}
              <FilePreview key={index + '_' + fileData?.name}>
                {getFileTypePreview(fileData, index)?.content}
              </FilePreview>
              {/* {console.log('fileData', fileData)} */}
              <FileLink>
                <span>{getFileTypeAltName(fileData, validFileTypes)}</span>
              </FileLink>
              {fileData?.size && (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1px solid red',
                    fontSize: '14px'
                  }}
                >
                  {fileData.size > 1024 * 1024
                    ? `${(fileData.size / 1024 / 1024).toFixed(2)} MB`
                    : `${(fileData.size / 1024).toFixed(2)} KB`}
                </div>
              )}
            </FilePreviewContainer>
          ))}
        {!isEdit && files.length == 0 && 'No files selected'}
      </PreviewArea>
    </DisplayFilesContainer>
  )
}
