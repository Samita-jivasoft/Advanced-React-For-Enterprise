"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailView = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _data = require("../../data");
var _data2 = require("app/data");
var _RowActions = require("./RowActions");
var _styles = require("./styles");
var _Layout = require("../../../Layout");
var _styledComponents = require("styled-components");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DetailView = props => {
  var _listState$detailview3, _document, _document2, _listState$detailview8, _listState$crudaction, _Object$keys, _listState$detailview9, _listState$detailview10;
  const [themeState] = (0, _data2.useAppTheme)();
  const [collapse, setCollapse] = (0, _react.useState)(false);
  const {
    viewWidth,
    viewHeight
  } = (0, _data2.useViewport)();
  const [listState, listDispatch] = (0, _data.useList)();
  const [listsState, listsDispatch] = (0, _data.useLists)();

  // get current FormElements based on listState.detailview that changes based on row clicked
  const [formElements, setFormElements] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    var _listState$detailview;
    const formelements = [];
    // console.log(listState.detailview.detail)
    if (listState !== null && listState !== void 0 && (_listState$detailview = listState.detailview) !== null && _listState$detailview !== void 0 && _listState$detailview.detail) {
      var _Object$entries, _listState$detailview2;
      Object === null || Object === void 0 || (_Object$entries = Object.entries(listState === null || listState === void 0 || (_listState$detailview2 = listState.detailview) === null || _listState$detailview2 === void 0 ? void 0 : _listState$detailview2.detail)) === null || _Object$entries === void 0 || _Object$entries.map(el => listsState === null || listsState === void 0 ? void 0 : listsState.columns.map(f => {
        if (el[0] === f.crudcolumnid.toLowerCase() && f.iscolumn && f.formelement && f.formelement.length > 0) {
          f.formelement[0]["defaultvalue"] = el[1];
          f.formelement[0]["canedit"] = 0;
          // f.formelement[0]['canedit'] = 0
          return formelements.push(f.formelement[0]);
        }
      }));
      setFormElements(formelements);
    }
  }, [listState === null || listState === void 0 || (_listState$detailview3 = listState.detailview) === null || _listState$detailview3 === void 0 ? void 0 : _listState$detailview3.detail]);

  // needs to be a function to rerender formElements
  function FormComponent(props) {
    return /*#__PURE__*/_react.default.createElement(_Layout.Layout, {
      css: (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          .FORM {\n            color: ", ";\n          }\n          .scroll-to-top {\n            background: ", ";\n            color: ", ";\n          }\n          .element-body {\n            color: ", ";\n          }\n        "])), listState.textcolor, listState.textcolor, listState.themecolor, listState.textcolor),
      layout: "form",
      elements: props.formElements
    });
  }
  (0, _react.useEffect)(() => {
    if (viewWidth < 750) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [viewWidth]);
  function showDetailView() {
    var _listState$detailview4, _listState$detailview5, _listsState$tolists, _listsState$fromlists, _listState$detailview6, _Object$entries2, _listState$detailview7;
    return (listState === null || listState === void 0 || (_listState$detailview4 = listState.detailview) === null || _listState$detailview4 === void 0 ? void 0 : _listState$detailview4.active) && (listState === null || listState === void 0 || (_listState$detailview5 = listState.detailview) === null || _listState$detailview5 === void 0 ? void 0 : _listState$detailview5.detail) !== "" && ((listsState === null || listsState === void 0 || (_listsState$tolists = listsState.tolists) === null || _listsState$tolists === void 0 ? void 0 : _listsState$tolists.length) + (listsState === null || listsState === void 0 || (_listsState$fromlists = listsState.fromlists) === null || _listsState$fromlists === void 0 ? void 0 : _listsState$fromlists.length) === 1 || (listsState === null || listsState === void 0 ? void 0 : listsState.layout) === "tabs") && (listState === null || listState === void 0 || (_listState$detailview6 = listState.detailview) === null || _listState$detailview6 === void 0 ? void 0 : _listState$detailview6.detail) && (Object === null || Object === void 0 || (_Object$entries2 = Object.entries(listState === null || listState === void 0 || (_listState$detailview7 = listState.detailview) === null || _listState$detailview7 === void 0 ? void 0 : _listState$detailview7.detail)) === null || _Object$entries2 === void 0 ? void 0 : _Object$entries2.map(el => listsState === null || listsState === void 0 ? void 0 : listsState.columns.some(f => el[0] === f.crudcolumnid.toLowerCase() && f.iscolumn && f.formelement && f.formelement.length > 0)).some(Boolean));
  }
  return showDetailView() && /*#__PURE__*/_react.default.createElement(_styles.DetailViewContainer, {
    className: "container_detailview",
    themeColor: listState.themecolor,
    textColor: listState.textcolor,
    style: {
      width: collapse ? "100%" : "50%",
      height: ((_document = document) === null || _document === void 0 || (_document = _document.getElementById("table-" + listState.crudlistid)) === null || _document === void 0 ? void 0 : _document.clientHeight) + "px",
      position: collapse ? "absolute" : "relative",
      right: collapse ? 0 : null,
      marginTop: ((_document2 = document) === null || _document2 === void 0 || (_document2 = _document2.getElementById("header-" + listState.crudlistid)) === null || _document2 === void 0 ? void 0 : _document2.clientHeight) + "px"
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailViewHeader, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: "flex",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      paddingRight: "10px"
    }
  }, "Detail View"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: "1px solid red",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginLeft: "auto",
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: "1px solid black",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      overflowX: "auto"
    }
  }, (listState === null || listState === void 0 || (_listState$detailview8 = listState.detailview) === null || _listState$detailview8 === void 0 ? void 0 : _listState$detailview8.detail) && (listState === null || listState === void 0 || (_listState$crudaction = listState.crudaction) === null || _listState$crudaction === void 0 ? void 0 : _listState$crudaction.length) > 0 && ((_Object$keys = Object.keys(listState === null || listState === void 0 || (_listState$detailview9 = listState.detailview) === null || _listState$detailview9 === void 0 ? void 0 : _listState$detailview9.detail)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 && /*#__PURE__*/_react.default.createElement(_RowActions.RowActions, {
    item: listState === null || listState === void 0 || (_listState$detailview10 = listState.detailview) === null || _listState$detailview10 === void 0 ? void 0 : _listState$detailview10.detail,
    type: "detail-view"
  })), collapse && viewWidth > 750 && (collapse ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, {
    onClick: () => setCollapse(false),
    style: {
      cursor: "pointer"
    }
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, {
    onClick: () => setCollapse(true),
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/_react.default.createElement(_fa.FaTimesCircle, {
    size: "18px",
    style: {
      paddingLeft: "5px",
      cursor: "pointer"
    },
    onClick: () => listDispatch({
      type: "SET_DETAIL_VIEW",
      detailview: _objectSpread(_objectSpread({}, listState.detailview), {}, {
        detail: ""
      })
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles.DetailViewBody, {
    textColor: listState.textcolor
  }, /*#__PURE__*/_react.default.createElement(FormComponent, {
    formElements: formElements
  })));
};
exports.DetailView = DetailView;