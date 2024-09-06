"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterModal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _fa = require("react-icons/fa");
var _data2 = require("../data");
var _Filters = require("./Filters");
var _FilterFunctions = require("./FilterFunctions");
var _styles = require("./styles");
var _styles2 = require("../styles");
var _AnimatedDynamicModal = require("../../AnimatedDynamicModal");
var _DynamicSwitcher = require("../../DynamicSwitcher");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _helpers = require("app/helpers");
var _Element = require("../../Element");
var _theme = require("app/theme");
var _styledComponents = require("styled-components");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const FilterModal = props => {
  var _getBestContrastColor2, _listState$columns$, _filterColumn$formele, _filterColumn$formele2, _getBestContrastColor3, _filterColumn$formele3;
  const {
    criteria,
    setCriteria,
    parentState
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [listState, listDispatch] = (0, _data2.useList)();
  const [themeState] = (0, _data.useAppTheme)();
  const [items, setItems] = (0, _react.useState)((0, _FilterFunctions.getItems)(listState));
  const [filterColumn, setFilterColumn] = (0, _react.useState)();
  const [elementInput, setElementInput] = (0, _react.useState)(parentState ? parentState : []);
  const [currentThemeColor, setCurrentThemeColor] = (0, _react.useState)(listState.themecolor);
  const [currentTextColor, setCurrentTextColor] = (0, _react.useState)(listState.textcolor);
  const [modalBackgroundColor, setModalBackgroundColor] = (0, _react.useState)(themeState.currentTheme.id === 'light' ? (0, _helpers.LightenDarkenColor)(listState.themecolor, 200) : themeState.currentTheme.bgb3);
  (0, _react.useEffect)(() => {
    var _listState$themecolor, _getBestContrastColor;
    const currentColor = (_listState$themecolor = listState.themecolor) !== null && _listState$themecolor !== void 0 ? _listState$themecolor : themeState.currentTheme.bg0;
    setCurrentThemeColor(currentColor);
    const normalizeColor = (0, _helpers.standardizeColor)(currentColor);
    setModalBackgroundColor(themeState.currentTheme.id === 'light' ? (0, _helpers.LightenDarkenColor)(normalizeColor, 200) : themeState.currentTheme.bgb3);
    const textColor = (_getBestContrastColor = (0, _theme.getBestContrastColor)(normalizeColor, (0, _theme.generateColorShades)(normalizeColor, 6))) !== null && _getBestContrastColor !== void 0 ? _getBestContrastColor : 'black';
    // console.log('textColor', textColor)
    if (textColor != '#FFFFFF') setCurrentTextColor(textColor);else setCurrentTextColor('black');
  }, [listState.themecolor, listState.buttoncolor, listState.textcolor]);
  return listState.showfiltersmodal === 1 && /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: 'modal',
    headerColor: listState.themecolor,
    themeColor: listState.themecolor,
    backgroundColor: modalBackgroundColor,
    fontColor: listState.textcolor,
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
    onClose: () => {
      listDispatch({
        type: 'SET_SHOW_FILTERS_MODAL',
        currentTableSettings: 0
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalContent, null, /*#__PURE__*/_react.default.createElement(_DynamicSwitcher.DynamicSwitcher, {
    backgroundColor: (_getBestContrastColor2 = (0, _theme.getBestContrastColor)(currentTextColor, (0, _theme.generateColorShades)(currentTextColor, 6))) !== null && _getBestContrastColor2 !== void 0 ? _getBestContrastColor2 : 'black',
    color: currentTextColor,
    selectedColor: currentThemeColor,
    width: 'auto',
    height: '40px',
    items: items,
    handleParent: filter => {
      setFilterColumn(filter);
      // console.log('filter', filter)
      setElementInput([]);
    },
    defaultValue: listState === null || listState === void 0 || (_listState$columns$ = listState.columns[0]) === null || _listState$columns$ === void 0 ? void 0 : _listState$columns$.id
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
  }, /*#__PURE__*/_react.default.createElement(_Element.Element, {
    isReview: true,
    key: (_filterColumn$formele = filterColumn === null || filterColumn === void 0 || (_filterColumn$formele2 = filterColumn.formelement[0]) === null || _filterColumn$formele2 === void 0 ? void 0 : _filterColumn$formele2.formelementid) !== null && _filterColumn$formele !== void 0 ? _filterColumn$formele : 'filter-element',
    css: (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                          .element-header {\n                            // border: 1px solid red !important;\n                            justify-content: center !important;\n                            color: ", ";\n                          }\n                          .element-body {\n                            justify-content: center !important;\n                          }\n                          .canedit-0-isEdit-true {\n                            // border: 1px solid red !important;\n                            justify-content: center !important;\n                            width: fit-content;\n                          }\n                        "])), (_getBestContrastColor3 = (0, _theme.getBestContrastColor)(modalBackgroundColor, (0, _theme.generateColorShades)(currentTextColor, 10))) !== null && _getBestContrastColor3 !== void 0 ? _getBestContrastColor3 : 'black'),
    element: (_filterColumn$formele3 = filterColumn === null || filterColumn === void 0 ? void 0 : filterColumn.formelement[0]) !== null && _filterColumn$formele3 !== void 0 ? _filterColumn$formele3 : {
      selectoptions: '',
      required: 0,
      label: filterColumn.label,
      masktype: '',
      datatype: 'string',
      canedit: 1
    },
    setParentState: input => setElementInput(input),
    parentState: []
  }), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    text: "Add Filter",
    icon: "",
    onClick: () => (0, _FilterFunctions.setFilters)(listState, listDispatch, filterColumn, elementInput[elementInput.length - 1].value),
    iconPosition: "left"
  })), /*#__PURE__*/_react.default.createElement(_Filters.Filters, null)) : 'No Filter Selected')));
};
exports.FilterModal = FilterModal;