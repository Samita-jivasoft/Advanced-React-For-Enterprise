"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeDatetimePicker = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _ = require("../../..");
var _styles = require("./styles");
var _ElementContext = require("../../data/ElementContext");
var _handlers = require("./handlers");
var _data = require("app/data");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _DateCalendar = require("@mui/x-date-pickers/DateCalendar");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeDatetimePicker = props => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    datatype,
    masktype,
    remainingRequirements,
    isEdit,
    required,
    value,
    interval
  } = elementState;

  // useEffect(() => {
  //   console.log(elementState.label, elementState)
  // }, [elementState])
  let duration = datatype === 'time' ? true : false;
  const [themeState] = (0, _data.useAppTheme)();
  const [dateValue, setDateValue] = (0, _react.useState)(value ? (0, _handlers.generateDefaultValue)(value, datatype) : null);
  const timepickerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (datatype !== 'time') {
      try {
        elementDispatch({
          type: 'SET_VALUE',
          value: dateValue
        });
      } catch (error) {
        if (required === '1') {
          elementDispatch({
            type: 'SET_VALUE',
            value: ''
          });
        } else {
          elementDispatch({
            type: 'SET_VALUE',
            value: dateValue
          });
        }
      }
    }
    console.log('dateValue', dateValue);
  }, [dateValue]);
  const [showCalendar, setShowCalendar] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'DATETIMEPICKER',
    style: {
      flexDirection: 'row',
      display: 'flex',
      width: '100%'
    }
  }, isEdit && datatype === 'datetime' && masktype !== 'time' && /*#__PURE__*/_react.default.createElement("input", {
    style: {
      visibility: 'hidden',
      position: 'absolute'
    },
    value: dateValue ? dateValue : '',
    onChange: e => (0, _handlers.handleDateChangeHTML)(e.target.value, dateValue, setDateValue, masktype),
    ref: timepickerRef,
    type: 'date'
  }), !dateValue && /*#__PURE__*/_react.default.createElement(_styles.DateTimeElementContainer, {
    className: 'initial-time-container',
    isEdit: isEdit,
    value: dateValue,
    remainingRequirements: remainingRequirements,
    style: {
      pointerEvents: isEdit ? null : 'none',
      marginRight: 10
    },
    duration: duration,
    onClick: () => {
      setShowCalendar(true);
      // console.log('here', new Date().toLocaleString())
      // !dateValue && setDateValue(new Date().toLocaleString())
      !dateValue && masktype !== 'time' && datatype === 'datetime' && timepickerRef.current.showPicker();
      // this is fine
      !dateValue && masktype == 'time' && setDateValue((0, _handlers.setLocalISO)(new Date()).toString());
    }
  }, isEdit && !dateValue && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '1rem',
      marginRight: 10
    }
  }, datatype === 'datetime' ? masktype === 'date' || masktype === 'datetime' || masktype === '' ? /*#__PURE__*/_react.default.createElement(_fa.FaCalendar, null) : /*#__PURE__*/_react.default.createElement(_fa.FaClock, null) : /*#__PURE__*/_react.default.createElement(_fa.FaClock, null)), isEdit && !dateValue && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '1rem'
    }
  }, 'Select a ' + (masktype ? masktype === 'datetime' ? 'date' : masktype : datatype === 'datetime' ? 'date' : datatype))), (dateValue || value) && (masktype === 'date' || masktype == 'datetime' || datatype == 'datetime' && masktype == '') && /*#__PURE__*/_react.default.createElement(_styles.DateTimeElementContainer, {
    className: 'second?-time-container',
    isEdit: isEdit,
    value: dateValue,
    remainingRequirements: remainingRequirements,
    style: {
      pointerEvents: isEdit ? null : 'none',
      marginRight: 10
    },
    duration: duration,
    onClick: () => {
      !dateValue && setDateValue(new Date().toLocaleString());
      !dateValue && masktype !== 'time' && datatype === 'datetime' && timepickerRef.current.showPicker()(!dateValue && masktype == 'time') && setDateValue((0, _handlers.setLocalISO)(new Date()).toString());
    }
  }, isEdit && !duration && dateValue && /*#__PURE__*/_react.default.createElement(_.DynamicButtonV2, {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    color: themeState.currentTheme.text,
    onClick: () => {
      setDateValue(null);
      setShowCalendar(false);
    }
  }), datatype === 'datetime' && masktype !== 'time' && dateValue && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontWeight: '800',
      fontSize: '1.3rem',
      marginRight: 10
    }
  }, dateValue === null || dateValue === void 0 ? void 0 : dateValue.split('T')[0])), (dateValue || value) && (masktype === 'time' || datatype == 'time' || masktype == 'datetime' || datatype == 'datetime' && masktype == '') && /*#__PURE__*/_react.default.createElement(_styles.DateTimeElementContainer, {
    className: 'timepicker-container',
    isEdit: isEdit,
    value: dateValue,
    remainingRequirements: remainingRequirements,
    style: {
      pointerEvents: isEdit ? null : 'none'
    },
    duration: duration,
    onClick: () => {
      // !dateValue && setDateValue(new Date().toLocaleString())
      !dateValue && (masktype === 'date' || datatype == 'datetime' && (masktype === '' || masktype == 'date')) && timepickerRef.current.showPicker();
      !dateValue && masktype == 'time' && setDateValue((0, _handlers.setLocalISO)(new Date()).toString());
    }
  }, isEdit ? masktype !== 'date' && dateValue && /*#__PURE__*/_react.default.createElement(_.TimePicker, {
    interval: interval,
    duration: duration,
    defaultValue: duration ? null : dateValue,
    handleParent: value => {
      if (value) {
        if (duration) {
          let checkValue = value.split(':');
          if (!checkValue[1] && checkValue[0]) {
            if (required) {
              elementDispatch({
                type: 'SET_VALUE',
                value: checkValue[0] + ':00'
              });
            } else {
              elementDispatch({
                type: 'SET_VALUE',
                value: ''
              });
            }
          } else if (!checkValue[0] && checkValue[1]) {
            if (required === 1) {
              elementDispatch({
                type: 'SET_VALUE',
                value: '00:' + checkValue[1]
              });
            } else {
              elementDispatch({
                type: 'SET_VALUE',
                value: ''
              });
            }
          } else if (!checkValue[0] && !checkValue[1]) {
            if (required) {
              elementDispatch({
                type: 'SET_VALUE',
                value: checkValue[0] + '00:00'
              });
            } else {
              elementDispatch({
                type: 'SET_VALUE',
                value: ''
              });
            }
          } else {
            elementDispatch({
              type: 'SET_VALUE',
              value: value
            });
          }
        } else {
          // // generateNewValue()
          // let isodate =dateValue.toISOString()
          let date = new Date(dateValue.replace(/-/g, '/').replace(/T.+/, ''));
          const time = new Date(value).toLocaleTimeString('en', {
            timeStyle: 'short',
            hour12: false,
            timeZone: 'UTC'
          });
          // date.setTime(time)
          date.setHours(time === null || time === void 0 ? void 0 : time.split(':')[0], time.split(':')[1], 0);
          if (masktype !== 'time' && datatype !== 'time') {
            if ((time === null || time === void 0 ? void 0 : time.split(':')[0]) == '24' || (time === null || time === void 0 ? void 0 : time.split(':')[0]) == '00') {
              date.setDate(date.getDate() - 1);
            }
          }
          // setDateValue(setLocalISO(date))
        }
      }
    },
    canedit: 1
  }) : masktype !== 'date' && value && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontWeight: '800',
      fontSize: '1rem'
    }
  }, (0, _handlers.getDisplayTime)(value, masktype, datatype)), duration && isEdit && value !== '' && /*#__PURE__*/_react.default.createElement(_styles.SelectedItemStyled, {
    onClick: () => {
      if (required === 1) {
        elementDispatch({
          type: 'SET_VALUE',
          value: ''
        });
      } else {
        elementDispatch({
          type: 'SET_VALUE',
          value: ''
        });
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    style: {
      marginRight: 5
    }
  }), value)));
};

// {isEdit &&
//   datatype === 'datetime' &&
//   masktype !== 'time' &&
//   showCalendar && (
//     <CalendarContainer className={'calendar-container'} isEdit={isEdit}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           value={dateValue ? dayjs(dateValue) : null}
//           onChange={value => {
//             // console.log('value', value)
//             handleDateChange(
//               value,
//               dateValue,
//               setDateValue,
//               masktype,
//               setShowCalendar
//             )
//           }}
//           showDaysOutsideCurrentMonth
//         />
//         {/* <DatePicker
//   value={dayjs(dateValue)}
//   onChange={value =>
//     handleDateChange(
//       value,
//       dateValue,
//       setDateValue,
//       masktype,
//       setShowCalendar
//     )
//   }
//   showDaysOutsideCurrentMonth
// /> */}
//       </LocalizationProvider>
//     </CalendarContainer>
//   )}
exports.ElementTypeDatetimePicker = ElementTypeDatetimePicker;