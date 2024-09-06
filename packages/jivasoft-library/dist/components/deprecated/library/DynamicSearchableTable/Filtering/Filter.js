"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _AnimatedDynamicModal = require("../../AnimatedDynamicModal");
var _DynamicSwitcher = require("../../DynamicSwitcher");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _form = require("../../../form");
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _data2 = require("../data");
var _Filters = require("./Filters");
var _FilterFunctions = require("./FilterFunctions");
var _styles = require("./styles");
var _styles2 = require("../styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Filter = props => {
  const {
    criteria,
    setCriteria,
    parentState
  } = props;
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [themeState] = (0, _data.useAppTheme)();
  const [filterColumn, setFilterColumn] = (0, _react.useState)([]);
  const [elementInput, setElementInput] = (0, _react.useState)(parentState ? parentState : []);
  return /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.StyledHeaderButton, {
    onClick: () => setShowModal(true)
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFilter, {
    size: '15px'
  }), /*#__PURE__*/_react.default.createElement(_styles2.StyledHeaderText, null, "Filters")), showModal && /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: 'modal',
    themeColor: themeState.currentTheme.bg0,
    backgroundColor: themeState.currentTheme.id === 'light' ? themeState.currentTheme.bga3 : themeState.currentTheme.bgb3,
    fontColor: themeState.currentTheme.text,
    headerText: "Add a Filter"
    // headerItems={}
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
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalContent, null, /*#__PURE__*/_react.default.createElement(_DynamicSwitcher.DynamicSwitcher
  // backgroundColor={themeState.currentTheme.bga1}
  // color={themeState.currentTheme.text}
  , {
    selectedColor: themeState.currentTheme.bg0,
    width: 'auto',
    height: '40px',
    items: listsState.columns ? listsState.columns.map(x => {
      if (x.isfilter && x.formelement) {
        x.id = x.crudcolumnid;
        return x;
      }
    }).filter(n => n) : [],
    handleParent: filter => setFilterColumn(filter)
    // defaultValue={'1a'}
    // column
    // onClick={()=> alert('Hello')}
  }), /*#__PURE__*/_react.default.createElement(_styles.FormElementContent, null, filterColumn ? filterColumn.formelement && /*#__PURE__*/_react.default.createElement(_styles.FormElementContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '75%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px 0px 10px 0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_form.FormElement, {
    key: filterColumn.formelement[0].formelementid,
    element: filterColumn.formelement[0],
    setParentState: input => setElementInput(input),
    parentState: []
  }), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bg0,
    color: themeState.currentTheme.text,
    type: "default",
    text: "Add Filter",
    icon: "",
    onClick: () => (0, _FilterFunctions.setFilters)(filterColumn, elementInput, criteria, setCriteria),
    iconPosition: "left"
  })), /*#__PURE__*/_react.default.createElement(_Filters.Filters, {
    criteria: criteria,
    setCriteria: setCriteria
  })) : 'No Filter Selected'))));
};
exports.Filter = Filter;