"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypePDFViewer = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.typed-array.uint8-array.js");
require("core-js/modules/es.typed-array.fill.js");
require("core-js/modules/es.typed-array.set.js");
require("core-js/modules/es.typed-array.sort.js");
require("core-js/modules/es.typed-array.to-locale-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var _react = _interopRequireWildcard(require("react"));
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _ElementContext = require("../../data/ElementContext");
var _Viewer = require("./Viewer");
var _fa = require("react-icons/fa");
var _bs = require("react-icons/bs");
var _ai = require("react-icons/ai");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypePDFViewer = props => {
  const {
    base64String,
    height
  } = props;
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    defaultvalue,
    label
  } = elementState;
  // console.log('here', base64String)
  // console.log('defaultvalue', defaultvalue)
  // console.log('elementState', elementState)

  const [blobFile, setBlobFile] = (0, _react.useState)(base64String ? base64String.includes('data:application/pdf;base64,') ? base64String : 'data:application/pdf;base64,' + base64String : defaultvalue ? 'data:application/pdf;base64,' + defaultvalue : false);
  const [link, setLink] = (0, _react.useState)(elementState.link ? elementState.link : '');
  // console.log('blobFile', blobFile)
  // console.log('link', link)

  const [numPages, setNumPages] = (0, _react.useState)(null);
  const [pageNumber, setPageNumber] = (0, _react.useState)(1);
  (0, _react.useEffect)(() => {
    setNumPages(numPages);
  }, [numPages]);
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  function previousPage() {
    changePage(-1);
  }
  function nextPage() {
    changePage(1);
  }
  function downloadPDF() {
    const pdfName = link ? link.split('/').pop() : label ? label.replace(/ /g, '-') + '.pdf' : 'download.pdf';
    const createdLink = document.createElement('a');
    createdLink.href = blobFile || link;
    createdLink.download = pdfName;
    createdLink.click();
  }
  const isValidLink = link => {
    // Check if the link is a non-empty string
    if (typeof link === 'string' && link.trim() !== '') {
      // Use a regular expression to check for valid URL format
      const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/;
      if (urlPattern.test(link)) {
        return true;
      }
    }
    return false;
  };

  //TODO: move this outside for all components to use
  // Function to create a blob from the base64 data
  const createBlobFromBase64 = base64Data => {
    console.log(base64Data, base64Data);
    const byteCharacters = atob(base64Data.replace('data:application/pdf;base64,', ''));
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {
      type: 'application/pdf'
    });
  };
  const printPDF = () => {
    let windowUrl;
    let blobUrl;
    if (blobFile) {
      const blob = createBlobFromBase64(blobFile);
      if (blob) {
        // Create a URL for the blob
        blobUrl = URL.createObjectURL(blob);
        windowUrl = window.open(blobUrl);
      } else {
        // Handle the case where blob creation failed
        console.error('Failed to create a valid blob from blobFile.');
      }
    } else if (link) {
      // Verify that the link is valid
      if (isValidLink(link)) {
        windowUrl = window.open(link);
      } else {
        // Handle invalid link
        console.error('Invalid link:', link);
      }
    }
    if (windowUrl) {
      // Open a new window and print the content
      windowUrl.print();
      // Don't forget to revoke the URL after printing to release resources
      windowUrl.onafterprint = () => {
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
        }
      };
    } else {
      // Handle the case where neither a valid blob nor a valid link is available
      console.error('No valid file or link to print.');
    }

    //TRYING FOR SAME PAGE PRINT
    // // Create an <object> element and set its data attribute to the blob URL
    // const printObject = document.createElement('object')
    // printObject.data = blobUrl
    // printObject.style.display = 'none' // Hide the object element

    // // Append the object to the document body
    // document.body.appendChild(printObject)

    // // Trigger the print dialog
    // printObject.onload = () => {
    //   printObject.contentDocument.defaultView.print()
    //   // Remove the object element after printing
    //   document.body.removeChild(printObject)
    // }
  };
  return blobFile || link ? /*#__PURE__*/_react.default.createElement(_styles.DocumentViwerWrapper, {
    height: height
  }, (link || blobFile || numPages > 1) && !height && /*#__PURE__*/_react.default.createElement(_styles.Toolbar, null, numPages > 1 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      width: '100%',
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2
  // type={'chip'}
  // text={'Previous'}
  // backgroundColor={themeState.currentTheme.bg0}
  , {
    disabled: pageNumber <= 1
    // color={themeState.currentTheme.text}
    ,
    onClick: previousPage,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleLeft, {
      size: 20
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0px 30px 0px 30px'
    }
  }, "Page ", pageNumber || (numPages ? 1 : '--'), " of ", numPages || '--'), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2
  // type={'chip'}
  // text={'Next'}
  // backgroundColor={themeState.currentTheme.bg0}
  // color={themeState.currentTheme.text}
  , {
    disabled: pageNumber >= numPages,
    onClick: nextPage,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronCircleRight, {
      size: 20
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.Actions, null, (blobFile || link) && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    onClick: printPDF,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPrint, {
      size: 20
    })
  }), (blobFile || link) && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    onClick: downloadPDF,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaFileDownload, {
      size: 20
    })
  }), link && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    onClick: () => window.open(link, '_blank'),
    icon: /*#__PURE__*/_react.default.createElement(_bs.BsArrowsFullscreen, {
      size: 20
    })
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "hoverable-document"
  }, /*#__PURE__*/_react.default.createElement(_Viewer.Viewer, {
    setNumPages: setNumPages,
    setPageNumber: setPageNumber,
    file: blobFile || link,
    pageNumber: pageNumber,
    height: height
  }))) : /*#__PURE__*/_react.default.createElement("div", null, "We couldn't load this file.");
};
exports.ElementTypePDFViewer = ElementTypePDFViewer;