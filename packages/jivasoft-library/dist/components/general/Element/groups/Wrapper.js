"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Element = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Main = require("../styles/Main");
var _Status = require("./Status");
var _Header = require("./Header");
var _ElementContext = require("../data/ElementContext");
var _ElementReducer = require("../data/ElementReducer");
var _Main2 = require("../Main");
var _validation = require("../validation");
var _helpers = require("../../../../app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import { useAppTheme } from 'app/data'
// import { DANGER_COLOR } from 'app/globalStyles'
// import { DateSelector } from '../../general'
// import { FaCheck, FaCheckCircle, FaTimes } from 'react-icons/fa'
// import { BooleanElement } from './BooleanElement'
// import { CodeElement } from './types/CodeElement'
// import { DateTimeElement } from './DateTimeElement'
// import { Element } from './Element'
// import { PickerElement } from './PickerElement'
// import { initValidation } from './Validate'
// import { TextAreaElement } from './TextAreaElement'
// import { getDefaultValue, getElement } from '../validation/helpers'
const Element = _ref => {
  let {
    element,
    style,
    parentState,
    setParentState,
    isEdit,
    isReview,
    css
  } = _ref;
  // useEffect(() => {
  //   console.log('ELEMENT MAIN parentState', parentState)
  // },[parentState])

  // useEffect(() => {
  //   console.log('ELEMENT MAIN', element)
  //   // console.log(isEdit, isReview)
  // }, [element])
  //PROPS
  //must contain at least a key and an element
  // const { key, parentState, setParentState } = props
  // //generic element object properties
  // const {
  //   datatype,     //required
  //   masktype,     //required
  //   canedit,      //optional
  //   defaultvalue, //optional
  //   group,        //optional
  //   label,        //optional
  //   sequence,     //optional
  //   hidden,        //optional

  //   required,
  //   validminimum,
  //   validmaximum,
  //   mincharacters,
  //   maxcharacters,

  // } = props.element

  //STATE
  // const [element,setElement] = useState(props.element)
  const [value, setValue] = (0, _react.useState)(); //getDefaultValue
  const [isValid, setIsValid] = (0, _react.useState)(); //getIsValid

  const [remainingRequirements, setRemainingRequirements] = (0, _react.useState)([]);
  const [completedRequirements, setCompletedRequirements] = (0, _react.useState)([]);

  // const computedElement = getElement(datatype, masktype);

  //maintains userinput (when applicable)
  // const [formElementValue, setFormElementValue] = useState({
  //   element: props.element,
  //   value: getDefaultValue(datatype, defaultvalue),
  //   // formelementid: formelementid ? formelementid : null,
  //   // label: label ? label : null,
  //   isValid: required == 1 && defaultvalue ? true : required == 1 && !defaultvalue ? false : true
  // })

  // const [themeState,] = useAppTheme()

  // function setLocalISO(date) {
  //   let currDate = new Date(date);
  //   var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
  //   return isoDateTime

  // }

  // function getDefaultValue(element, datatype, defaultvalue) {
  //   let formElementDefault;
  //   switch (datatype) {
  //     case 'datetime':
  //       try {

  //         new Date(defaultvalue).toISOString()
  //         formElementDefault = defaultvalue;
  //       } catch (error) {
  //         formElementDefault = setLocalISO(new Date().toLocaleString())
  //       }

  //       break;
  //     case 'time':
  //       formElementDefault = ''
  //       break;
  //     case 'datelist':
  //       formElementDefault = defaultvalue ? defaultvalue : []
  //       break;
  //     case 'boolean':
  //     case 'checkbox':
  //       formElementDefault = defaultvalue ? parseInt(defaultvalue, 10) : 0
  //       break;
  //     case 'float':
  //       formElementDefault = defaultvalue ? parseFloat(defaultvalue)
  //         .toFixed(2)
  //         .toString() : ''
  //       break;
  //     case 'picklist':
  //       formElementDefault = defaultvalue ? '' : ''
  //       break;
  //     default:
  //       formElementDefault = defaultvalue ? defaultvalue : ''
  //       break;

  //   }
  //   return formElementDefault

  // }

  // function setDateListElement(dateArray) {
  //   if (dateArray.length > 0) {
  //     setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: true })
  //   } else {
  //     if (required == 1) {
  //       setFormElementValue({ element: props.element, value: dateArray, datelist: dateArray, formelementid: formelementid, label: label, isValid: false })
  //     } else {
  //       setFormElementValue({ element: props.element, value: [], formelementid: formelementid, label: label, isValid: true })
  //     }
  //   }

  // }

  // function setPickerElement(pickerValue) {
  //   // console.log(props.element.label, pickerValue.length)
  //   //if allowmultipulepicklistselections:1 allow selectioptions to be >1 else, replace with new selected option
  //   let canSelectMulti = props.element.allowmultiplepicklistselections;
  //   if (pickerValue.length > 0) {
  //     if (pickerValue.length >= validminimum) {
  //       setFormElementValue({
  //         selectoptions: pickerValue,
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: true
  //       })
  //     }
  //     else {
  //       setFormElementValue({
  //         selectoptions: pickerValue,
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: false
  //       })
  //     }
  //   } else {
  //     if (required === 1) {
  //       setFormElementValue({
  //         selectoptions: [],
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: false,
  //       })
  //     } else {
  //       // setFormElementValue({ element: props.element, value: pickerValue.label, formelementid: formelementid, label: label, isValid: true })
  //       setFormElementValue({
  //         selectoptions: [],
  //         element: props.element, value: "", formelementid: formelementid, label: label, isValid: true,
  //       })
  //     }
  //   }

  // }

  // useEffect(() => {
  //   //Update the parentState with each change of formElementValue
  //   setParentState(state => [
  //     ...state.filter(e => {
  //       return e.formelementid !== formElementValue.formelementid
  //     }),
  //     value
  //   ])
  // }, [value])

  // useEffect(() => {

  //   if (datatype !== 'picklist' && datatype !== 'boolean' && datatype !== 'checkbox') {
  //     if (
  //       (defaultvalue &&
  //         initValidation(defaultvalue, props.element) &&
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length === 0) ||
  //       datatype === 'checkbox' || datatype === 'boolean' ||
  //       datatype === 'datetime'
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })
  //     else setFormElementValue({ ...formElementValue, isValid: false })

  //     //check if validation has been done and its only valid
  //     if (
  //       completedRequirements.length !== 0 &&
  //       remainingRequirements.length === 0
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })

  //     if (
  //       !defaultvalue &&
  //       datatype === 'checkbox' || datatype === 'boolean' || datatype === 'datetime' || (datatype === 'datelist' && required !== 1) &&
  //       remainingRequirements.length === 0 &&
  //       completedRequirements.length === 0
  //     )
  //       setFormElementValue({ ...formElementValue, isValid: true })

  //     if (required === 1) {
  //       if (
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length !== 0
  //       )
  //         setFormElementValue({ ...formElementValue, isValid: true })
  //     } else {
  //       if (
  //         (remainingRequirements.length === 0 &&
  //           completedRequirements.length !== 0) ||
  //         !formElementValue.value
  //       )
  //         setFormElementValue({ ...formElementValue, isValid: true })
  //     }
  //   }
  // }, [remainingRequirements])

  //status
  // <div style={{ width: '100%' }}>
  //       {required && remainingRequirements.length !== 0 ? (
  //         <RemainingRecsStyled>
  //           {/* <FaTimes />
  //           <b>{'Field is required'}</b> */}
  //         </RemainingRecsStyled>
  //       ) : null}
  //       {required &&
  //         remainingRequirements.length === 0 &&
  //         completedRequirements.length === 0 ? (
  //         <RemainingRecsStyled>
  //           {/* <FaTimes />
  //           <b>{'Field is required'}</b> */}
  //         </RemainingRecsStyled>
  //       ) : null}
  //       {!required && value.length === 0 ? null : (
  //         <div style={{ width: '100%' }}>{remainingRequirements}</div>
  //       )}
  //       {remainingRequirements.length === 0 ? null : (
  //         <div style={{ width: '100%' }}>{completedRequirements}</div>
  //       )}
  //     </div>
  // <InputContainerStyled
  //     style={{ display: hidden == 1 ? 'none' : 'flex' }}
  //     value={value}
  //     isValid={isValid}
  //   >
  //       <ElementHeader/>
  //     {/* {computedElement} */}
  //     <StatusStyled>

  //     </StatusStyled>
  //   </InputContainerStyled>
  // console.log(element.label, ': ', getDefaultValue(element))
  // console.log(element.label, getDefaultValue(element))
  return /*#__PURE__*/_react.default.createElement(_ElementContext.ElementContextProvider, {
    initialState: _objectSpread(_objectSpread({}, element), {}, {
      //supporting old format 'formelementid
      formelementid: element !== null && element !== void 0 && element.formelementid ? element === null || element === void 0 ? void 0 : element.formelementid : element !== null && element !== void 0 && element.id ? element === null || element === void 0 ? void 0 : element.id : (0, _helpers.generateUUID)(),
      id: element !== null && element !== void 0 && element.formelementid ? element === null || element === void 0 ? void 0 : element.formelementid : element !== null && element !== void 0 && element.id ? element === null || element === void 0 ? void 0 : element.id : (0, _helpers.generateUUID)(),
      remainingRequirements: [],
      value: (0, _validation.getDefaultValue)(element),
      style: style,
      css: css
    }),
    reducer: _ElementReducer.elementReducer
  }, /*#__PURE__*/_react.default.createElement(_Main2.ElementMain, {
    css: css,
    isReview: isReview,
    isEdit: isEdit,
    parentState: parentState,
    setParentState: setParentState
  }));
};
exports.Element = Element;