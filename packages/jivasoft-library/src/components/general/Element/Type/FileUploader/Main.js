import React, { useEffect, useState } from 'react'
import { useElement } from '../../data/ElementContext'
import { MainContainer } from './styles'
import { DisplayFiles } from './DisplayFiles'
import { UploadArea } from './UploadArea'
import { filetypes } from './assets'
import { getFiles, getValidFileTypes } from './handlers'

export const ElementTypeFileUploader = props => {
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
    filename,
    id,
    required,
    percision
  } = elementState
  // useEffect(() => {
  //   console.log(elementState.label, elementState)
  //   console.log(getFiles(elementState, defaultvalue, filename, validFileTypes))
  // }, [elementState])
  const [horizontal, setHorizontal] = useState(false)

  const [validFileTypes, setValidFileTypes] = useState(
    getValidFileTypes(filetypes, masktype)
  )
  //TODO: add check if BE defined file types correctly
  const [files, setFiles] = useState(
    getFiles(elementState, defaultvalue, filename, validFileTypes)
  )

  useEffect(() => {
    // console.log('remainingRequirements', remainingRequirements)
    // console.log(label, 'files', files)
    if (isEdit) {
      elementDispatch({
        type: 'SET_VALUE',
        value: files?.length > 0 ? files[files?.length - 1]?.base64String : ''
      })
      elementDispatch({ type: 'SET_VALUES', values: { files: files } })
    }
  }, [files])

  return isEdit ? (
    <MainContainer
      horizontal={horizontal}
      remainingRequirements={remainingRequirements}
    >
      <UploadArea
        files={files}
        setFiles={setFiles}
        validFileTypes={validFileTypes}
        horizontal={horizontal}
      />
      {files?.length > 0 && (
        <DisplayFiles
          files={files}
          setFiles={setFiles}
          validFileTypes={validFileTypes}
        />
      )}
    </MainContainer>
  ) : (
    <DisplayFiles
      files={files}
      setFiles={setFiles}
      validFileTypes={validFileTypes}
    />
  )
}
