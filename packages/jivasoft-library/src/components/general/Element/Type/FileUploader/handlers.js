export const getValidFileTypes = (filetypes, masktype) => {
  const definedFileTypes = masktype?.split('|')

  const shorthandMappings = {
    doc: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  }

  const allowedFileTypes = filetypes?.filter(type => {
    return definedFileTypes?.some(definedType => {
      // Use shorthandMappings if definedType is found
      const mappedType = shorthandMappings[definedType] || definedType
      return type.type === mappedType || type.type.includes(mappedType)
    })
  })

  return allowedFileTypes.length > 0 ? allowedFileTypes : filetypes
}

export function getFileDetails (base64String) {
  // Extracting the content type and the base64 data
  const parts = base64String.split(';base64,')
  const contentType = parts[0].split(':')[1]
  const base64Data = parts[1]

  // Converting the base64 data to binary
  const binaryData = atob(base64Data)

  // Getting the file name from the content disposition if available
  const contentDisposition = contentType.match(
    /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i
  )
  let filename = 'Unknown'
  if (contentDisposition && contentDisposition.length > 0) {
    filename = contentDisposition[0].split('=')[1].replace(/['"]/g, '')
  }

  const fileSizeInBytes = binaryData.length
  const fileSizeInKB = fileSizeInBytes / 1024

  return {
    filename: filename,
    size: fileSizeInBytes,
    // fileSizeInKB: fileSizeInKB,
    type: contentType
  }
}

export function getFiles (elementState, defaultvalue, filename, validFileTypes) {
  const downloadName = filename ? filename : 'uploaded_file'
  const fileData = defaultvalue ? getFileDetails(defaultvalue) : ''

  return elementState?.files
    ? elementState?.files?.map(file => {
        const fileData = getFileDetails(file.base64String)
        // console.log(file, fileData)
        return {
          ...fileData,
          ...file,
          downloadname: file.name ? file.name : downloadName
        }
      })
    : defaultvalue &&
      (defaultvalue != '' ||
        (defaultvalue != undefined && defaultvalue.length > 0))
    ? [
        {
          ...fileData,
          downloadname: downloadName,
          base64String: defaultvalue
        }
      ]
    : []
}

export const removeFile = (event, fileToRemove, setFiles) => {
  event.preventDefault()
  event.stopPropagation()
  setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove))
}

// FILE ACTIONS
export const downloadFile = (base64String, fileName, mimeType) => {
  const blob = base64StringToBlob(base64String, mimeType)
  const blobUrl = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = blobUrl
  link.download = fileName
  link.click()

  // Clean up after download
  URL.revokeObjectURL(blobUrl)
}

export const openFileInNewTab = base64String => {
  // console.log('base64String', base64String)
  const newTab = window.open()
  newTab.document.write(
    `<iframe src="${base64String}" style="width:100%;height:100%;" frameborder="0"></iframe>`
  )
  newTab.document.close()
  newTab.focus()
}

export const openImageInNewTab = (base64String, fileName) => {
  const newTab = window.open()
  newTab.document.write(`<img src="${base64String}" alt="${fileName}">`)
  newTab.document.close()
  newTab.focus()
}

export function getFileTypeAltName (fileData, validFileTypes) {
  if (fileData.name) {
    return fileData.name
  } else {
    const type = fileData?.type?.split('/')?.pop()
    // console.log('type', type)
    // console.log(file, validFileTypes)
    const fileType = validFileTypes.filter(filetype =>
      filetype?.type?.includes(type)
    )
    return (
      (fileData.downloadname ? fileData.downloadname : 'uploaded_file') +
      '.' +
      fileType[0]?.alt
    )
  }
}

// FILE BLOB
export const base64StringToBlob = (
  base64String,
  mimeType = 'application/octet-stream'
) => {
  const byteCharacters = atob(base64String.split(',')[1])
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

export function decodeBase64DataUrl (dataUrl) {
  // Split the data URL into its components
  const parts = dataUrl.split(',')

  // Extract the base64 encoded data
  const base64Data = parts[1]

  // Decode the base64 data
  const decodedData = atob(base64Data)

  return decodedData
}
