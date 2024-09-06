"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filetypes = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//TODO: add valid filetypes here
const filetypes = exports.filetypes = [{
  type: 'application/pdf',
  alt: ['pdf'],
  icon: /*#__PURE__*/_react.default.createElement(_styles.DefaultFileIconContainer, {
    color: "red"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFilePdf, null))
}, {
  type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  alt: ['docx'],
  icon: /*#__PURE__*/_react.default.createElement(_styles.DefaultFileIconContainer, {
    color: "#2b579a"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFileWord, null))
}, {
  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  alt: ['xlsx'],
  icon: /*#__PURE__*/_react.default.createElement(_styles.DefaultFileIconContainer, {
    color: "#217346"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFileExcel, null))
},
// { type: 'pptx', icon: <FaFilePowerpoint size={50} color='#d24726' /> },
{
  type: 'image/jpeg',
  alt: ['jpeg'],
  icon: /*#__PURE__*/_react.default.createElement(_styles.DefaultFileIconContainer, null, /*#__PURE__*/_react.default.createElement(_fa.FaFileImage, null))
}, {
  type: 'image/png',
  alt: ['png'],
  icon: /*#__PURE__*/_react.default.createElement(_styles.DefaultFileIconContainer, null, /*#__PURE__*/_react.default.createElement(_fa.FaFileImage, null))
}
// {
//   type: 'csv',
//   icon: <FaFileCsv size={50} color={themeState.currentTheme.bg0} />
// },
// {
//   type: 'txt',
//   icon: <FaFileAlt size={50} color={themeState.currentTheme.bg0} />
// },
// {
//   type: 'application/zip',
//   alt: ['zip'],
//   icon: <BsFileZipFill size={50} color={themeState.currentTheme.bg0} />
// }
];