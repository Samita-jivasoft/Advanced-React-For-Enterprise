"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeFileUploader = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _styles = require("./styles");
var _DisplayFiles = require("./DisplayFiles");
var _UploadArea = require("./UploadArea");
var _assets = require("./assets");
var _handlers = require("./handlers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeFileUploader = props => {
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
    filename,
    id,
    required,
    percision
  } = elementState;
  // useEffect(() => {
  //   console.log(elementState.label, elementState)
  //   console.log(getFiles(elementState, defaultvalue, filename, validFileTypes))
  // }, [elementState])
  const [horizontal, setHorizontal] = (0, _react.useState)(false);
  const [validFileTypes, setValidFileTypes] = (0, _react.useState)((0, _handlers.getValidFileTypes)(_assets.filetypes, masktype));
  //TODO: add check if BE defined file types correctly
  const [files, setFiles] = (0, _react.useState)((0, _handlers.getFiles)(elementState, defaultvalue, filename, validFileTypes));
  (0, _react.useEffect)(() => {
    // console.log('remainingRequirements', remainingRequirements)
    // console.log(label, 'files', files)
    if (isEdit) {
      var _files;
      elementDispatch({
        type: 'SET_VALUE',
        value: (files === null || files === void 0 ? void 0 : files.length) > 0 ? (_files = files[(files === null || files === void 0 ? void 0 : files.length) - 1]) === null || _files === void 0 ? void 0 : _files.base64String : ''
      });
      elementDispatch({
        type: 'SET_VALUES',
        values: {
          files: files
        }
      });
    }
  }, [files]);
  return isEdit ? /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    horizontal: horizontal,
    remainingRequirements: remainingRequirements
  }, /*#__PURE__*/_react.default.createElement(_UploadArea.UploadArea, {
    files: files,
    setFiles: setFiles,
    validFileTypes: validFileTypes,
    horizontal: horizontal
  }), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/_react.default.createElement(_DisplayFiles.DisplayFiles, {
    files: files,
    setFiles: setFiles,
    validFileTypes: validFileTypes
  })) : /*#__PURE__*/_react.default.createElement(_DisplayFiles.DisplayFiles, {
    files: files,
    setFiles: setFiles,
    validFileTypes: validFileTypes
  });
};
exports.ElementTypeFileUploader = ElementTypeFileUploader;