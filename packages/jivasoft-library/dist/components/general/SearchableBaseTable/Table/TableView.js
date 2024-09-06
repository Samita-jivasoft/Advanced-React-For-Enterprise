"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _md = require("react-icons/md");
var _data = require("../data");
var _styles = require("../styles");
var _data2 = require("app/data");
var _AnimatedDynamicModal = require("../../AnimatedDynamicModal");
var _helpers = require("app/helpers");
var _Main = require("./Main");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Modal = props => {
  const {
    tableRef
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data2.useViewport)();
  const [themeState] = (0, _data2.useAppTheme)();
  const [listState, listDispatch] = (0, _data.useList)();
  const [showModal, setShowModal] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    padding: '0px 0px 0px 10px',
    onClick: () => showModal ? setShowModal(false) : setShowModal(true)
  }, /*#__PURE__*/_react.default.createElement(_md.MdOpenInFull, {
    size: '17px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Refresh List")), showModal && /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: 'modal',
    width: viewWidth - 50,
    height: viewHeight - 200,
    headerColor: listState.themecolor,
    backgroundColor: themeState.currentTheme.id === 'light' ? (0, _helpers.LightenDarkenColor)(listState.themecolor, 200) : themeState.currentTheme.bgb3,
    fontColor: listState.textcolor,
    headerText: listState.label
    // headerItems={

    // }
    // bodyText={}
    // bodyDropDown={true} //if true else no drop down
    // footer={1}
    // footerText='Specifies the title for the footer'
    // footerItems='I can have buttons, text, icons'
    ,
    dismissable: true //true, false, 1, 0
    // delay={5000} //in milliseconds
    ,
    onClose: () => setShowModal(false)
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: 'expanded_table_modal_body',
    style: {
      border: '1px solid red',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '0px 0px 0px 10px'
      // fontWeight:'normal !important'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.Table, {
    tableRef: tableRef
  }))));
};
exports.Modal = Modal;