"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportDesignerMain = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _activereportsReact = require("@grapecity/activereports-react");
var _activereports = require("@grapecity/activereports");
require("./Styles/Designer.css");
var _ = require(".");
var _DynamicButtonV = require("../DynamicButtonV2");
var _md = require("react-icons/md");
var _fa = require("react-icons/fa");
var _data = require("app/data");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ReportDesignerMain = props => {
  const {
    data,
    report,
    getReport,
    reportName
  } = _objectSpread({}, props);
  const designerRef = (0, _react.useRef)();
  const viewerRef = (0, _react.useRef)();
  const counter = (0, _react.useRef)(0);
  const [designerVisible, setDesignerVisible] = (0, _react.useState)(true);
  const [reportStorage, setReportStorage] = (0, _react.useState)(new Map());
  const [themeState] = (0, _data.useAppTheme)();
  const [designerState, designerDispatch] = (0, _.useDesigner)();

  //useeffect that sets the data into the 
  (0, _react.useEffect)(() => {
    if (designerRef.current && report !== null && report !== undefined && (report === null || report === void 0 ? void 0 : report.length) !== 0) {
      data[0].phoneNumber = (0, _.formatPhoneNumber)(data[0].phoneNumber);
      report.DataSources[0].ConnectionProperties.ConnectString = "jsondata=" + JSON.stringify(data);
    }
  }, []);

  //saves the report definition by saving it in context
  const onSave = function onSave(info) {
    if (getReport) {
      getReport(info.definition);
    }
    designerDispatch({
      type: 'SET_REPORT',
      report: info.definition
    });
    designerDispatch({
      type: 'SET_REPORT_NAME',
      report: info.displayName
    });
    return Promise.resolve({
      displayName: info.displayName
    });
  };

  //saves the report definition by saving it in context
  async function onSaveAsReport(info) {
    const reportId = info.id || "".concat(info.displayName).concat(counter.current++);
    const reportName = "".concat(info.displayName);
    const newReportInfo = await designerRef.current.getReport();
    const reportDefinition = newReportInfo === null || newReportInfo === void 0 ? void 0 : newReportInfo.definition;
    designerDispatch({
      type: 'SET_REPORT',
      report: info.definition
    });
    designerDispatch({
      type: 'SET_REPORT_NAME',
      report: info.displayName
    });
    if (getReport) {
      getReport(info.definition);
    }
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    return Promise.resolve({
      id: reportId,
      displayName: reportName
    });
  }

  //Allows teh user to view the report preview in the viewer component
  const onReportPreview = async report => {
    var _viewerRef$current;
    setDesignerVisible(false);
    const reportInfo = await designerRef.current.getReport();
    const userReport = new _activereports.Core.PageReport();
    await userReport.load(reportInfo === null || reportInfo === void 0 ? void 0 : reportInfo.definition);
    (_viewerRef$current = viewerRef.current) === null || _viewerRef$current === void 0 || _viewerRef$current.Viewer.open(userReport);
    return Promise.resolve();
  };
  return /*#__PURE__*/React.createElement(_.DesignerContainer, null, !designerVisible && /*#__PURE__*/React.createElement(_.HeaderRow, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bgb3,
    text: 'Edit in Designer',
    onClick: () => setDesignerVisible(true),
    icon: /*#__PURE__*/React.createElement(_md.MdEdit, null)
  }), /*#__PURE__*/React.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bgb3,
    text: 'Download Report',
    onClick: () => (0, _.downloadReport)(designerRef),
    icon: /*#__PURE__*/React.createElement(_fa.FaCloudDownloadAlt, null)
  }))), /*#__PURE__*/React.createElement("div", {
    id: "designer-host",
    style: {
      display: designerVisible ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(_activereportsReact.Designer, {
    report: {
      definition: report,
      displayName: reportName
    },
    ref: designerRef,
    onRender: onReportPreview,
    onSave: onSave,
    onSaveAs: onSaveAsReport
  })), /*#__PURE__*/React.createElement("div", {
    id: "viewer-host",
    style: {
      display: designerVisible ? "none" : "block"
    }
  }, /*#__PURE__*/React.createElement(_activereportsReact.Viewer, {
    ref: viewerRef
  })));
};
exports.ReportDesignerMain = ReportDesignerMain;