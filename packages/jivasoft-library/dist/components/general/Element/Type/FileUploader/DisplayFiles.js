"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayFiles = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _ElementContext = require("../../data/ElementContext");
var _Main = require("../../styles/Main");
var _io = require("react-icons/io5");
var _PDFViewer = require("../PDFViewer");
var _handlers = require("./handlers");
var _assets = require("./assets");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DisplayFiles = props => {
  const {
    files,
    setFiles,
    validFileTypes
  } = props;
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
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
  } = elementState;

  //TODO: add support for allowmultipleselections
  const getFileTypePreview = (fileData, index) => {
    const {
      base64String,
      name,
      file,
      downloadname
    } = fileData;
    // console.log(fileData)
    if (base64String) {
      switch (true) {
        case base64String === null || base64String === void 0 ? void 0 : base64String.startsWith('data:application/pdf'):
          return {
            content: /*#__PURE__*/_react.default.createElement(_PDFViewer.ElementTypePDFViewer, {
              key: index,
              base64String: base64String,
              height: 50
            }),
            opener: () => {
              (0, _handlers.openFileInNewTab)(base64String);
            }
          };
        case base64String === null || base64String === void 0 ? void 0 : base64String.startsWith('data:image/'):
          return {
            content: /*#__PURE__*/_react.default.createElement("img", {
              key: index,
              src: base64String,
              alt: name + '-' + index,
              style: {
                display: 'flex',
                maxHeight: '50px',
                width: 'auto',
                height: 'auto'
              }
            }),
            opener: () => {
              (0, _handlers.openImageInNewTab)(base64String, name);
            }
          };
        case base64String === null || base64String === void 0 ? void 0 : base64String.startsWith('data:application/msword'):
        case base64String === null || base64String === void 0 ? void 0 : base64String.startsWith('data:application/vnd.openxmlformats-officedocument.wordprocessingml.document'):
        default:
          return {
            content: _assets.filetypes.map((type, index) => {
              var _base64String$split$;
              return (base64String === null || base64String === void 0 || (_base64String$split$ = base64String.split(',')[0]) === null || _base64String$split$ === void 0 ? void 0 : _base64String$split$.includes(type.type)) && /*#__PURE__*/_react.default.createElement("div", {
                key: index + '_' + (type === null || type === void 0 ? void 0 : type.name)
              }, type.icon);
            }),
            opener: () => null
          };
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DisplayFilesContainer, null, isEdit && /*#__PURE__*/_react.default.createElement(_Main.ElementHeaderStyled, {
    style: {
      marginBottom: '10px'
    }
  }, 'Uploaded Files'.toUpperCase()), /*#__PURE__*/_react.default.createElement(_styles.PreviewArea, null, (files === null || files === void 0 ? void 0 : files.length) > 0 && (isEdit ? files : [files[0]]).map((fileData, index) => {
    var _getFileTypePreview2;
    return /*#__PURE__*/_react.default.createElement(_styles.FilePreviewContainer, {
      key: index,
      isEdit: isEdit,
      href: fileData.base64String,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: event => {
        var _getFileTypePreview;
        event.preventDefault();
        if ((_getFileTypePreview = getFileTypePreview(fileData, index)) !== null && _getFileTypePreview !== void 0 && _getFileTypePreview.opener()) {
          // console.log('do this twice?')
          getFileTypePreview(fileData, index).opener();
        }
        // console.log('fileData', fileData)x
        (0, _handlers.downloadFile)(fileData.base64String, (0, _handlers.getFileTypeAltName)(fileData, validFileTypes));
      }
    }, isEdit && /*#__PURE__*/_react.default.createElement(_io.IoRemoveCircle, {
      size: 20,
      color: 'red',
      className: "removeIcon",
      onClick: event => (0, _handlers.removeFile)(event, fileData, setFiles)
    }), /*#__PURE__*/_react.default.createElement(_styles.FilePreview, {
      key: index + '_' + (fileData === null || fileData === void 0 ? void 0 : fileData.name)
    }, (_getFileTypePreview2 = getFileTypePreview(fileData, index)) === null || _getFileTypePreview2 === void 0 ? void 0 : _getFileTypePreview2.content), /*#__PURE__*/_react.default.createElement(_styles.FileLink, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _handlers.getFileTypeAltName)(fileData, validFileTypes))), (fileData === null || fileData === void 0 ? void 0 : fileData.size) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid red',
        fontSize: '14px'
      }
    }, fileData.size > 1024 * 1024 ? "".concat((fileData.size / 1024 / 1024).toFixed(2), " MB") : "".concat((fileData.size / 1024).toFixed(2), " KB")));
  }), !isEdit && files.length == 0 && 'No files selected'));
};
exports.DisplayFiles = DisplayFiles;