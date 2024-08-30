export const handleDragOver = (event, setDragging) => {
  event.preventDefault()
  setDragging(true)
}

export const handleDragLeave = (event, setDragging) => {
  event.preventDefault()
  setDragging(false)
}

export const handleDrop = (
  event,
  setDragging,
  setFiles,
  validFileTypes,
  files,
  validmaximum
) => {
  event.preventDefault()
  setDragging(false)
  const droppedFiles = Array.from(event.dataTransfer.files)
  // console.log('droppedFiles', droppedFiles[0])

  if (droppedFiles.length > 0) {
    if (
      handleAddFiles(
        setFiles,
        files,
        validmaximum,
        droppedFiles,
        validFileTypes
      )
    ) {
      return
    }

    // Handle dropped files
    const readerPromises = Array.from(droppedFiles).map(file => {
      return readFileAsBase64(file, validFileTypes)
    })

    // After all promises are resolved, update the state
    Promise.all(readerPromises).then(fileDataArray => {
      setFiles(prevFiles => [...prevFiles, ...fileDataArray])
    })
  }
}

export const openFileExplorer = () => {
  // console.log('clicked')
  // Trigger the file input
  document.getElementById('fileInput').click()
}
export const handleFileUpload = (
  event,
  setFiles,
  validFileTypes,
  files,
  validmaximum
) => {
  const selectedFiles = Array.from(event.target.files)

  if (selectedFiles.length > 0) {
    if (
      handleAddFiles(
        setFiles,
        files,
        validmaximum,
        selectedFiles,
        validFileTypes
      )
    ) {
      return
    }

    // Read the files as Base64
    const readerPromises = selectedFiles.map(file =>
      readFileAsBase64(file, validFileTypes)
    )

    // After all promises are resolved, update the state
    Promise.all(readerPromises).then(fileDataArray => {
      setFiles(prevFiles => [...prevFiles, ...fileDataArray])
    })
  }
}

// Utility function to handle common logic for adding files
const handleAddFiles = (
  setFiles,
  files,
  validmaximum,
  selectedFiles,
  validFileTypes
) => {
  const totalFiles = files.length + selectedFiles.length
  // console.log('totalFiles', totalFiles)

  if (validmaximum && totalFiles > validmaximum) {
    // Handle the case where the limit is exceeded (replace the last files)
    // console.log(
    //   'Replacing the last files. You can only upload up to ${validmaximum} files.'
    // )

    //TODO: fix this, its allowing adding all selectedFiles even if validmax is 5
    // Determine how many files to replace
    // console.log(files.length, selectedFiles.length)
    const filesToReplace = Math.min(validmaximum, selectedFiles.length)
    // console.log('filesToReplace', filesToReplace)
    // console.log(selectedFiles)

    // Read the selected files as Base64
    const readerPromises = selectedFiles
      ?.slice(0, filesToReplace)
      ?.map(file => readFileAsBase64(file, validFileTypes))

    // After all promises are resolved, update the state
    Promise.all(readerPromises).then(fileDataArray => {
      setFiles(prevFiles => {
        // Replace the last files with the new selected files
        const newFiles = [
          ...prevFiles?.slice(0, validmaximum - filesToReplace),
          ...fileDataArray
        ]
        return newFiles
      })
    })

    return true // Indicate that the limit was exceeded
  }

  return false // Indicate that the limit was not exceeded
}

// Utility function to read a file as Base64
const readFileAsBase64 = (file, validFileTypes) => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = function () {
      // Check if the file type is allowed
      if (isFileTypeAllowed(file, validFileTypes)) {
        // Resolve with an object containing file information
        resolve({
          name: file.name,
          type: file.type,
          size: file.size,
          base64String: reader.result
        })
      } else {
        // Resolve with null for disallowed files
        // resolve(null);
      }
    }
    reader.readAsDataURL(file)
  })
}

// Utility function to check if file type is allowed
export const isFileTypeAllowed = (file, validFileTypes) => {
  return validFileTypes.some(type => file.type.includes(type.type.trim()))
}
