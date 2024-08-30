import React, { useState } from 'react'
import { MdOutlineUploadFile } from 'react-icons/md'
import { useAppTheme } from 'app/data'
import { FileTypesString, UploadAreaContainer } from './styles'
import { useElement } from '../../../../Element/data/ElementContext'
import { DynamicButtonV2 } from '../../../../DynamicButtonV2'
import {
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileUpload,
  openFileExplorer
} from './handlers'

export const UploadArea = props => {
  const { files, setFiles, validFileTypes, horizontal } = props
  const [themeState] = useAppTheme()
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
  const [dragging, setDragging] = useState(false)

  return (
    <>
      <UploadAreaContainer
        isDragging={dragging}
        onDragOver={event => handleDragOver(event, setDragging)}
        onDrop={event =>
          handleDrop(
            event,
            setDragging,
            setFiles,
            validFileTypes,
            files,
            validmaximum
          )
        }
        onDragLeave={event => handleDragLeave(event, setDragging)}
        horizontal={horizontal}
      >
        <MdOutlineUploadFile
          size={60}
          style={{ margin: '20px 0px 16px 0px' }}
        />
        <div style={{ marginBottom: '8px' }}>{'Drag and drop files here'}</div>
        <div style={{ marginBottom: '8px' }}>{'- OR -'}</div>
        <DynamicButtonV2
          backgroundColor={themeState.currentTheme.bg0}
          color={themeState.currentTheme.text}
          text={'Browse Files'}
          type={'chip'}
          // size={''}
          // icon={''}
          onClick={() => openFileExplorer()}
          // iconPosition={''}
          // disabled={''}
          // width={''}
        />
        <input
          type='file'
          id='fileInput'
          style={{ display: 'none' }}
          onChange={event =>
            handleFileUpload(
              event,
              setFiles,
              validFileTypes,
              files,
              validmaximum
            )
          }
          multiple
        ></input>
      </UploadAreaContainer>
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '10px'
        }}
      >
        <FileTypesString>
          {validFileTypes.length === 1
            ? validFileTypes[0].alt
              ? validFileTypes[0].alt[0].toUpperCase()
              : validFileTypes[0].type.toUpperCase()
            : validFileTypes
                .map(type =>
                  type.alt ? type.alt[0].toUpperCase() : type.type.toUpperCase()
                )
                .join(', ')
                .replace(/,([^,]*)$/, ' and$1 ') + 'files.'}
        </FileTypesString>
        <FileTypesString style={{ fontSize: '10px' }}>
          Max number of files:{' '}
          {files.length > 0 ? files.length + '/' + validmaximum : validmaximum}
        </FileTypesString>
      </div>
    </>
  )
}
