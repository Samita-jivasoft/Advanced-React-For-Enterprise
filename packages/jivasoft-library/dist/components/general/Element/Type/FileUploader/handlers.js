"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64StringToBlob = void 0;
exports.decodeBase64DataUrl = decodeBase64DataUrl;
exports.downloadFile = void 0;
exports.getFileDetails = getFileDetails;
exports.getFileTypeAltName = getFileTypeAltName;
exports.getFiles = getFiles;
exports.removeFile = exports.openImageInNewTab = exports.openFileInNewTab = exports.getValidFileTypes = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.typed-array.uint8-array.js");
require("core-js/modules/es.typed-array.fill.js");
require("core-js/modules/es.typed-array.set.js");
require("core-js/modules/es.typed-array.sort.js");
require("core-js/modules/es.typed-array.to-locale-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const getValidFileTypes = (filetypes, masktype) => {
  const definedFileTypes = masktype === null || masktype === void 0 ? void 0 : masktype.split('|');
  const shorthandMappings = {
    doc: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };
  const allowedFileTypes = filetypes === null || filetypes === void 0 ? void 0 : filetypes.filter(type => {
    return definedFileTypes === null || definedFileTypes === void 0 ? void 0 : definedFileTypes.some(definedType => {
      // Use shorthandMappings if definedType is found
      const mappedType = shorthandMappings[definedType] || definedType;
      return type.type === mappedType || type.type.includes(mappedType);
    });
  });
  return allowedFileTypes.length > 0 ? allowedFileTypes : filetypes;
};
exports.getValidFileTypes = getValidFileTypes;
function getFileDetails(base64String) {
  // Extracting the content type and the base64 data
  const parts = base64String.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const base64Data = parts[1];

  // Converting the base64 data to binary
  const binaryData = atob(base64Data);

  // Getting the file name from the content disposition if available
  const contentDisposition = contentType.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i);
  let filename = 'Unknown';
  if (contentDisposition && contentDisposition.length > 0) {
    filename = contentDisposition[0].split('=')[1].replace(/['"]/g, '');
  }
  const fileSizeInBytes = binaryData.length;
  const fileSizeInKB = fileSizeInBytes / 1024;
  return {
    filename: filename,
    size: fileSizeInBytes,
    // fileSizeInKB: fileSizeInKB,
    type: contentType
  };
}
function getFiles(elementState, defaultvalue, filename, validFileTypes) {
  var _elementState$files;
  const downloadName = filename ? filename : 'uploaded_file';
  const fileData = defaultvalue ? getFileDetails(defaultvalue) : '';
  return elementState !== null && elementState !== void 0 && elementState.files ? elementState === null || elementState === void 0 || (_elementState$files = elementState.files) === null || _elementState$files === void 0 ? void 0 : _elementState$files.map(file => {
    const fileData = getFileDetails(file.base64String);
    // console.log(file, fileData)
    return _objectSpread(_objectSpread(_objectSpread({}, fileData), file), {}, {
      downloadname: file.name ? file.name : downloadName
    });
  }) : defaultvalue && (defaultvalue != '' || defaultvalue != undefined && defaultvalue.length > 0) ? [_objectSpread(_objectSpread({}, fileData), {}, {
    downloadname: downloadName,
    base64String: defaultvalue
  })] : [];
}
const removeFile = (event, fileToRemove, setFiles) => {
  event.preventDefault();
  event.stopPropagation();
  setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
};

// FILE ACTIONS
exports.removeFile = removeFile;
const downloadFile = (base64String, fileName, mimeType) => {
  const blob = base64StringToBlob(base64String, mimeType);
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName;
  link.click();

  // Clean up after download
  URL.revokeObjectURL(blobUrl);
};
exports.downloadFile = downloadFile;
const openFileInNewTab = base64String => {
  // console.log('base64String', base64String)
  const newTab = window.open();
  newTab.document.write("<iframe src=\"".concat(base64String, "\" style=\"width:100%;height:100%;\" frameborder=\"0\"></iframe>"));
  newTab.document.close();
  newTab.focus();
};
exports.openFileInNewTab = openFileInNewTab;
const openImageInNewTab = (base64String, fileName) => {
  const newTab = window.open();
  newTab.document.write("<img src=\"".concat(base64String, "\" alt=\"").concat(fileName, "\">"));
  newTab.document.close();
  newTab.focus();
};
exports.openImageInNewTab = openImageInNewTab;
function getFileTypeAltName(fileData, validFileTypes) {
  if (fileData.name) {
    return fileData.name;
  } else {
    var _fileData$type, _fileType$;
    const type = fileData === null || fileData === void 0 || (_fileData$type = fileData.type) === null || _fileData$type === void 0 || (_fileData$type = _fileData$type.split('/')) === null || _fileData$type === void 0 ? void 0 : _fileData$type.pop();
    // console.log('type', type)
    // console.log(file, validFileTypes)
    const fileType = validFileTypes.filter(filetype => {
      var _filetype$type;
      return filetype === null || filetype === void 0 || (_filetype$type = filetype.type) === null || _filetype$type === void 0 ? void 0 : _filetype$type.includes(type);
    });
    return (fileData.downloadname ? fileData.downloadname : 'uploaded_file') + '.' + ((_fileType$ = fileType[0]) === null || _fileType$ === void 0 ? void 0 : _fileType$.alt);
  }
}

// FILE BLOB
const base64StringToBlob = exports.base64StringToBlob = function base64StringToBlob(base64String) {
  let mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'application/octet-stream';
  const byteCharacters = atob(base64String.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], {
    type: mimeType
  });
};
function decodeBase64DataUrl(dataUrl) {
  // Split the data URL into its components
  const parts = dataUrl.split(',');

  // Extract the base64 encoded data
  const base64Data = parts[1];

  // Decode the base64 data
  const decodedData = atob(base64Data);
  return decodedData;
}