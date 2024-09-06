"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadArea = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _md = require("react-icons/md");
var _data = require("app/data");
var _styles = require("./styles");
var _ElementContext = require("../../../../Element/data/ElementContext");
var _DynamicButtonV = require("../../../../DynamicButtonV2");
var _handlers = require("./handlers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const UploadArea = props => {
  const {
    files,
    setFiles,
    validFileTypes,
    horizontal
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
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
  const [dragging, setDragging] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UploadAreaContainer, {
    isDragging: dragging,
    onDragOver: event => (0, _handlers.handleDragOver)(event, setDragging),
    onDrop: event => (0, _handlers.handleDrop)(event, setDragging, setFiles, validFileTypes, files, validmaximum),
    onDragLeave: event => (0, _handlers.handleDragLeave)(event, setDragging),
    horizontal: horizontal
  }, /*#__PURE__*/_react.default.createElement(_md.MdOutlineUploadFile, {
    size: 60,
    style: {
      margin: '20px 0px 16px 0px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, 'Drag and drop files here'), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, '- OR -'), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bg0,
    color: themeState.currentTheme.text,
    text: 'Browse Files',
    type: 'chip'
    // size={''}
    // icon={''}
    ,
    onClick: () => (0, _handlers.openFileExplorer)()
    // iconPosition={''}
    // disabled={''}
    // width={''}
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    id: "fileInput",
    style: {
      display: 'none'
    },
    onChange: event => (0, _handlers.handleFileUpload)(event, setFiles, validFileTypes, files, validmaximum),
    multiple: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.FileTypesString, null, validFileTypes.length === 1 ? validFileTypes[0].alt ? validFileTypes[0].alt[0].toUpperCase() : validFileTypes[0].type.toUpperCase() : validFileTypes.map(type => type.alt ? type.alt[0].toUpperCase() : type.type.toUpperCase()).join(', ').replace(/,([^,]*)$/, ' and$1 ') + 'files.'), /*#__PURE__*/_react.default.createElement(_styles.FileTypesString, {
    style: {
      fontSize: '10px'
    }
  }, "Max number of files:", ' ', files.length > 0 ? files.length + '/' + validmaximum : validmaximum)));
};
exports.UploadArea = UploadArea;