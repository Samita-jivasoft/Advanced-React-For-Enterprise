"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateListSelector = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _general = require("../../../../../general");
var _AppContext = require("app/data/context/AppContext");
var _helpers = require("../../../../../../app/helpers");
var _ = require(".");
var _CalendarIcon = require("../../CalendarIcon");
var _Datepicker = require("./Datepicker");
var _Datetimepicker = require("./Styles/Datetimepicker");
var _ElementContext = require("../../../data/ElementContext");
var _ai = require("react-icons/ai");
var _bs = require("react-icons/bs");
var _bi = require("react-icons/bi");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DateListSelector = _ref => {
  var _dateTime$startdate, _dateTime$enddate;
  let {
    isEdit,
    remainingRequirements,
    timeFormat = true,
    masktype = 'date',
    dateArray = [],
    setDateArray = () => {
      console.log('I need a Set data function!');
    },
    defaultValue = [],
    twelvehr,
    timePerDate,
    startDateText,
    setStartDateText,
    endDateText,
    setEndDateText
  } = _ref;
  //State to store the dates and time input
  const [open, setOpen] = (0, _react.useState)(false);
  const [showRow, setShowRow] = (0, _react.useState)(false);

  //State to store the array of dates: dateArray to represent the data being sent back and tempArr used in functions and to show
  const [disable, setDisable] = (0, _react.useState)(true);
  const [dateTime, _setDateTime] = (0, _react.useState)();
  const [dateWarning, setDateWarning] = (0, _react.useState)(true);
  const [timeWarning, setTimeWarning] = (0, _react.useState)(false);
  const [dtArray, setDtArray] = (0, _react.useState)(dateArray);
  //const [masktype, setMaskType] = useState('')

  const [elementState] = (0, _ElementContext.useElement)();
  const {
    value,
    validminimum,
    validmaximum
  } = elementState;
  const [, appDispatch] = (0, _AppContext.useApp)();
  var timeout;

  // useEffect(() => {
  //   if (defaultValue.length > 0 && defaultValue !== undefined) {
  //     setDtArray([...defaultValue])
  //   }
  // }, [])

  //Previously: The fillDates was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calculation

  //Here filldates accepts three parameters isoStart, isoEnd, and timePerDate, where 
  //timePerDate is a prop in the case of DateListSelector

  // function fillDates(isoStart, isoEnd, timePerDate) {
  //   const startDate = new Date(isoStart);
  //   let endDate;

  //   if (isoEnd && !isNaN(new Date(isoEnd).getTime())) {
  //     endDate = new Date(isoEnd);
  //   } else {
  //     return [{
  //       date: startDate.toISOString(),
  //       startdate: startDate.toISOString(),
  //       enddate: startDate.toISOString(),
  //       starttime: timePerDate?.starttime,
  //       endtime: timePerDate?.endtime,
  //     }];
  //   }

  //   let objArr = [];
  //   const endDateStr = endDate.toISOString().split('T')[0];

  //   while (startDate.toISOString().split('T')[0] <= endDateStr) {
  //     objArr.push({
  //       date: startDate.toISOString(),
  //       startdate: startDate.toISOString(),
  //       enddate: startDate.toISOString(),
  //       starttime: timePerDate?.starttime,
  //       endtime: timePerDate?.endtime,
  //     });

  //     startDate.setDate(startDate.getDate() + 1);
  //   }

  //   return objArr;
  // }

  (0, _react.useEffect)(() => {
    if ((dateArray === null || dateArray === void 0 ? void 0 : dateArray.length) == 0) {
      if (dateTime !== null && dateTime !== void 0 && dateTime.starttime) {
        _setDateTime({
          startime: null,
          enddate: null
        });
      }
    }
  }, [dateArray]);
  (0, _react.useEffect)(() => {
    // console.log("changing======>",dateTime)
    if (dateTime !== null && dateTime !== void 0 && dateTime.startdate) {
      setDateArray((0, _helpers.fillDates)(dateTime.startdate, dateTime.enddate, timePerDate));
    } else {
      if (dateTime !== null && dateTime !== void 0 && dateTime.enddate) {
        const today = new Date();
        setDateArray((0, _helpers.fillDates)(today.toISOString(), dateTime.enddate, timePerDate));
      } else {
        setDateArray([]);
      }

      // setDateTime({ ...dateTime, enddate:undefined  })
    }
  }, [dateTime]);

  //if the user removes all the dates in the modal, show the picker and clear out the datetime values
  // useEffect(() => {
  //   // console.log(dtArray)
  //   if (dtArray.length === 0) {
  //     setShowRow(false)
  //     setDateTime({
  //       startdate: null,
  //       enddate: null,
  //       starttime: null,
  //       endtime: null
  //     })
  //   } else {
  //     setShowRow(true)
  //   }
  //   setDateArray([...dtArray])
  // }, [dtArray])

  //Previously: The formatDate was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/format

  //formats the dates
  // function formatDate(dateVar, timeVar) {
  //   var mL = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December'
  //   ]
  //   var year = dateVar.slice(0, 4)
  //   var month = dateVar.slice(5, 7)
  //   month = parseInt(month) - 1
  //   var day = dateVar.slice(8, 10)
  //   var dateString = ''

  //   if (timeVar) {
  //     dateString = 'January ' + 1 + ', ' + year + ' ' + timeVar + ' UTC'
  //   } else {
  //     var dummyTime = '16:00:00'
  //     dateString =
  //       mL[month] + ' ' + day + ', ' + year + ' ' + dummyTime + ' UTC'
  //   }
  //   const dateObj = new Date(dateString)
  //   var gmtHours = -dateObj.getTimezoneOffset() / 60

  //   return dateObj
  // }

  (0, _react.useEffect)(() => {
    appDispatch({
      type: 'SET_MODAL',
      currentModal: open && /*#__PURE__*/_react.default.createElement(_.DateRange, {
        setOpen: setOpen,
        masktype: masktype,
        dtArray: dtArray,
        timeFormat: timeFormat,
        formatDate: _helpers.formatDatePart,
        defaultValue: defaultValue,
        setDtArray: setDtArray
      })
    });
  }, [open]);
  const [themeState] = (0, _data.useAppTheme)();
  return /*#__PURE__*/_react.default.createElement(_.MainContainer, {
    className: "DATES-MAIN",
    isEdit: isEdit,
    remainingRequirements: remainingRequirements
  }, /*#__PURE__*/_react.default.createElement(_Datepicker.DatetimePicker, {
    date: startDateText,
    setDate: setStartDateText,
    endDateText: endDateText,
    setEndDateText: setEndDateText,
    validminimum: validminimum,
    mode: 'guided-input',
    warning: dateWarning,
    dateTime: dateTime === null || dateTime === void 0 ? void 0 : dateTime.startdate,
    label: dateTime !== null && dateTime !== void 0 && dateTime.startdate ? dateTime === null || dateTime === void 0 || (_dateTime$startdate = dateTime.startdate) === null || _dateTime$startdate === void 0 ? void 0 : _dateTime$startdate.split('T')[0] : 'Select a Date',
    setDateTime: datetime => {
      _setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
        startdate: datetime
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_.TimeDividerIcon, null), /*#__PURE__*/_react.default.createElement(_Datepicker.DatetimePicker, {
    date: endDateText,
    setDate: setEndDateText,
    validminimum: validminimum,
    mode: 'guided-input',
    warning: dateWarning,
    dateTime: dateTime === null || dateTime === void 0 ? void 0 : dateTime.enddate,
    label: dateTime !== null && dateTime !== void 0 && dateTime.enddate ? dateTime === null || dateTime === void 0 || (_dateTime$enddate = dateTime.enddate) === null || _dateTime$enddate === void 0 ? void 0 : _dateTime$enddate.split('T')[0] : 'Select a Date',
    setDateTime: datetime => {
      _setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
        enddate: datetime
      }));
    }
  }));
};

// DateListSelector.defaultProps = {
//   masktype: 'date',
//   dateArray: [],
//   setDateArray: () => {
//     console.log('I need a Set data function!')
//   },
//   timeFormat: true,
//   defaultValue: []
// }
exports.DateListSelector = DateListSelector;