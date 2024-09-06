"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormElement = void 0;
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _theme = require("app/theme");
var _general = require("../../general");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _BooleanElement = require("./BooleanElement");
var _CodeElement = require("./CodeElement");
var _DateTimeElement = require("./DateTimeElement");
var _Element = require("./Element");
var _SearchDropdown = require("./SearchDropdown");
var _Main = require("./styles/Main");
var _Validate = require("./Validate");
var _TextAreaElement = require("./TextAreaElement");
var _helpers = require("../../../app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const FormElement = props => {
  //.290
  const {
    label,
    datatype,
    masktype,
    AllowPast,
    Format,
    validminimum,
    validmaximum,
    MinCharacters,
    MaxCharacters,
    CodeLength,
    required,
    canedit,
    formelementid,
    defaultvalue,
    Copy,
    selectoptions,
    hidden
  } = props.element;
  const [remainingRequirements, setRemainingRequirements] = (0, _react.useState)([]);
  const [completedRequirements, setCompletedRequirements] = (0, _react.useState)([]);
  const [themeState] = (0, _data.useAppTheme)();
  const {
    parentState,
    setParentState
  } = props;
  const [formElementValue, setFormElementValue] = (0, _react.useState)({
    element: props.element,
    value: getDefaultValue(datatype, defaultvalue),
    formelementid: formelementid ? formelementid : null,
    label: label ? label : null,
    isValid: required == 1 && defaultvalue ? true : required == 1 && !defaultvalue ? false : true
  });
  // useEffect(()=>{
  // },[formElementValue.isValid])

  //Previously: The setLocalISO was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/format

  // function setLocalISO(date) {
  //   let currDate = new Date(date);
  //   var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
  //   return isoDateTime

  // }
  function getDefaultValue(datatype, defaultvalue) {
    let formElementDefault;
    switch (datatype) {
      case 'datetime':
        try {
          new Date(defaultvalue).toISOString();
          formElementDefault = defaultvalue;
        } catch (error) {
          formElementDefault = (0, _helpers.setLocalISO)(new Date().toLocaleString());
        }
        break;
      case 'time':
        formElementDefault = '';
        break;
      case 'datelist':
        formElementDefault = defaultvalue ? defaultvalue : [];
        break;
      case 'boolean':
      case 'checkbox':
        formElementDefault = defaultvalue ? parseInt(defaultvalue, 10) : 0;
        break;
      case 'float':
        formElementDefault = defaultvalue ? parseFloat(defaultvalue).toFixed(2).toString() : '';
        break;
      case 'picklist':
        formElementDefault = defaultvalue ? '' : '';
        break;
      default:
        formElementDefault = defaultvalue ? defaultvalue : '';
        break;
    }
    return formElementDefault;
  }
  function setDateListElement(dateArray) {
    if (dateArray.length > 0) {
      setFormElementValue({
        element: props.element,
        value: dateArray,
        datelist: dateArray,
        formelementid: formelementid,
        label: label,
        isValid: true
      });
    } else {
      if (required == 1) {
        setFormElementValue({
          element: props.element,
          value: dateArray,
          datelist: dateArray,
          formelementid: formelementid,
          label: label,
          isValid: false
        });
      } else {
        setFormElementValue({
          element: props.element,
          value: [],
          formelementid: formelementid,
          label: label,
          isValid: true
        });
      }
    }
  }
  function setPickerElement(pickerValue) {
    // console.log(props.element.label, pickerValue.length)
    //if allowmultipulepicklistselections:1 allow selectioptions to be >1 else, replace with new selected option
    let canSelectMulti = props.element.allowmultiplepicklistselections;
    if (pickerValue.length > 0) {
      setFormElementValue({
        selectoptions: pickerValue,
        element: props.element,
        value: "",
        formelementid: formelementid,
        label: label,
        isValid: true
      });
    } else {
      if (required === 1) {
        setFormElementValue({
          selectoptions: [],
          element: props.element,
          value: "",
          formelementid: formelementid,
          label: label,
          isValid: false
        });
      } else {
        // setFormElementValue({ element: props.element, value: pickerValue.label, formelementid: formelementid, label: label, isValid: true })
        setFormElementValue({
          selectoptions: [],
          element: props.element,
          value: "",
          formelementid: formelementid,
          label: label,
          isValid: true
        });
      }
    }
  }
  (0, _react.useEffect)(() => {
    // if (datatype === 'datelist')
    // const parentCopy = [...parentState]
    // console.log('parentCopy',parentCopy)
    // const index = parentCopy.findIndex(
    //   obj => obj.formelementid === formElementValue.formelementid
    // )
    // if (index !== -1) {
    //   parentCopy[index].value = formElementValue.value
    // } else {
    //   parentCopy.push(formElementValue)
    // }
    // setParentState(parentCopy)
    setParentState(state => [...state.filter(e => {
      return e.formelementid !== formElementValue.formelementid;
    }), formElementValue]);

    // if (formElementValue.element.datatype === 'picklist') { console.log(formElementValue) }
  }, [formElementValue]);
  (0, _react.useEffect)(() => {
    if (datatype !== 'picklist' && datatype !== 'boolean' && datatype !== 'checkbox') {
      if (defaultvalue && (0, _Validate.initValidation)(defaultvalue, props.element) && remainingRequirements.length === 0 && completedRequirements.length === 0 || datatype === 'checkbox' || datatype === 'boolean' || datatype === 'datetime') setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
        isValid: true
      }));else setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
        isValid: false
      }));

      //check if validation has been done and its only valid
      if (completedRequirements.length !== 0 && remainingRequirements.length === 0) setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
        isValid: true
      }));
      if (!defaultvalue && datatype === 'checkbox' || datatype === 'boolean' || datatype === 'datetime' || datatype === 'datelist' && required !== 1 && remainingRequirements.length === 0 && completedRequirements.length === 0) setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
        isValid: true
      }));
      if (required === 1) {
        if (remainingRequirements.length === 0 && completedRequirements.length !== 0) setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
          isValid: true
        }));
      } else {
        if (remainingRequirements.length === 0 && completedRequirements.length !== 0 || !formElementValue.value) setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
          isValid: true
        }));
      }
    }
  }, [remainingRequirements]);
  return /*#__PURE__*/_react.default.createElement(_Main.InputContainerStyled, {
    style: {
      display: hidden == 1 ? 'none' : 'flex'
    },
    value: formElementValue.value,
    isValid: formElementValue.isValid
  }, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, label, required === 1 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      left: 0,
      paddingLeft: 10,
      width: 'fit-content',
      paddingRight: '2px',
      fontWeight: 'lighter',
      textAlign: 'center',
      color: themeState.currentTheme.dangerColor,
      fontWeight: 'bold',
      fontSize: '2rem'
    }
  }, "           ", '*')), masktype === 'code' ? /*#__PURE__*/_react.default.createElement(_CodeElement.CodeElement, _extends({}, props.element, {
    setRemainingRequirements: setRemainingRequirements,
    setCompletedRequirements: setCompletedRequirements,
    remainingRequirements: remainingRequirements,
    completedRequirements: completedRequirements,
    setFormElementValue: setFormElementValue,
    formElementValue: formElementValue
  })) : datatype === 'boolean' || datatype === 'checkbox' ? /*#__PURE__*/_react.default.createElement(_BooleanElement.BooleanElement, _extends({}, props.element, {
    setRemainingRequirements: setRemainingRequirements,
    setCompletedRequirements: setCompletedRequirements,
    remainingRequirements: remainingRequirements,
    completedRequirements: completedRequirements,
    setFormElementValue: setFormElementValue,
    formElementValue: formElementValue
  })) : datatype === 'picklist' ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_SearchDropdown.SearchDropdown, {
    defaultValue: defaultvalue,
    data: formElementValue.selectoptions,
    allowmultiplepicklistselections: Boolean(props.element.allowmultiplepicklistselections),
    setData: data => setPickerElement(data),
    list: selectoptions ? selectoptions : []
  }), formElementValue.isValid && /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: themeState.currentTheme.successColor
    }
  })) : datatype === 'datelist' ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_general.DateSelector, {
    dateArray: formElementValue.value,
    setDateArray: data => setDateListElement(data),
    masktype: masktype
  }), formElementValue.isValid && /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: themeState.currentTheme.successColor
    }
  }), " ") : datatype === 'time' || datatype == 'datetime' ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_DateTimeElement.DateTimeElement, _extends({}, props.element, {
    setFormElementValue: setFormElementValue,
    formElementValue: formElementValue
    // required={required}
    // duration={datatype === 'time' ? true : false}
    ,
    setRemainingRequirements: setRemainingRequirements,
    setCompletedRequirements: setCompletedRequirements,
    remainingRequirements: remainingRequirements,
    completedRequirements: completedRequirements
  }))), formElementValue.isValid && /*#__PURE__*/_react.default.createElement(_fa.FaCheckCircle, {
    size: 20,
    style: {
      color: themeState.currentTheme.successColor
    }
  })) : masktype === 'textarea' ? /*#__PURE__*/_react.default.createElement(_TextAreaElement.TextAreaElement, {
    row: 20,
    column: 20,
    canedit: canedit,
    minLength: validminimum,
    maxLength: validmaximum,
    formElementValue: formElementValue,
    setFormElementValue: setFormElementValue
  }) : /*#__PURE__*/_react.default.createElement(_Element.Element, _extends({}, props.element, {
    setRemainingRequirements: setRemainingRequirements,
    setCompletedRequirements: setCompletedRequirements,
    remainingRequirements: remainingRequirements,
    completedRequirements: completedRequirements,
    setFormElementValue: setFormElementValue,
    formElementValue: formElementValue
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, required && remainingRequirements.length !== 0 ? /*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null) : null, required && remainingRequirements.length === 0 && completedRequirements.length === 0 ? /*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null) : null, !required && formElementValue.value.length === 0 ? null : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, remainingRequirements), remainingRequirements.length === 0 ? null : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, completedRequirements)));
};
exports.FormElement = FormElement;