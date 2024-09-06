"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeElement = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _general = require("../../general");
var _CalendarIcon = require("./CalendarIcon");
var _DateTimeElement = require("./styles/DateTimeElement");
var _helpers = require("../../../app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DateTimeElement = props => {
  const {
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
    setRemainingRequirements,
    setCompletedRequirements,
    remainingRequirements,
    completedRequirements,
    setFormElementValue,
    formElementValue
  } = props;
  let duration = datatype === 'time' ? true : false;
  function generateDefaultValue() {
    switch (datatype) {
      case 'datetime':
        return formElementValue.value;
      case 'time':
        const time = new Date(formElementValue.value).toLocaleTimeString('en', {
          timeStyle: 'short',
          hour12: false,
          timeZone: 'UTC'
        });
        return time;
      default:
        return new Date();
    }
  }
  const [dateValue, setDateValue] = (0, _react.useState)(generateDefaultValue(formElementValue.value, datatype));

  // function setLocalISO(date) {
  //   let currDate = new Date(date);
  //   var isoDateTime = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000)).toISOString();
  //   return isoDateTime

  // }
  (0, _react.useEffect)(() => {
    if (datatype !== 'time') {
      try {
        new Date(dateValue).toISOString();
        setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
          value: dateValue,
          isValid: true
        }));
      } catch (error) {
        if (required === '1') {
          setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
            value: '',
            isValid: false
          }));
        } else {
          setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
            value: dateValue,
            isValid: true
          }));
        }
      }
    }
  }, [dateValue]);
  return /*#__PURE__*/_react.default.createElement(_DateTimeElement.DateTimeElementContainer, {
    duration: duration
  }, datatype === 'datetime' && masktype !== 'time' && /*#__PURE__*/_react.default.createElement(_CalendarIcon.CalendarIcon, {
    handleParent: datetime => {
      // let defaultdatetime = new Date(defaultvalue)
      // let isodate = datetime.toISOString()
      let date = new Date(datetime.replace(/-/g, '\/').replace(/T.+/, ''));
      if (!masktype || masktype === 'datetime') {
        // let date = new Date(datetime)
        const time = new Date(dateValue).toLocaleTimeString('en', {
          timeStyle: 'short',
          hour12: false,
          timeZone: 'UTC'
        });
        date.setHours(time === null || time === void 0 ? void 0 : time.split(':')[0], time.split(':')[1], 0);
        if (((time === null || time === void 0 ? void 0 : time.split(':')[0]) == '24' || (time === null || time === void 0 ? void 0 : time.split(':')[0]) == '00') && (time === null || time === void 0 ? void 0 : time.split(':')[0]) == '24' || (time === null || time === void 0 ? void 0 : time.split(':')[0]) == '00') {
          date.setDate(date.getDate() - 1);
        }
      }
      setDateValue((0, _helpers.setLocalISO)(date));
    },
    date: dateValue
  }), masktype !== 'date' && /*#__PURE__*/_react.default.createElement(_general.TimePicker, {
    duration: duration,
    defaultValue: duration ? null : dateValue,
    handleParent: value => {
      if (value) {
        if (duration) {
          let checkValue = value.split(':');
          if (!checkValue[1] && checkValue[0]) {
            if (required) {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: checkValue[0] + ':00',
                isValid: true
              }));
            } else {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: '',
                isValid: true
              }));
            }
          } else if (!checkValue[0] && checkValue[1]) {
            if (required === 1) {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: '00:' + checkValue[1],
                isValid: true
              }));
            } else {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: '',
                isValid: true
              }));
            }
          } else if (!checkValue[0] && !checkValue[1]) {
            if (required) {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: checkValue[0] + '00:00',
                isValid: true
              }));
            } else {
              setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
                value: '',
                isValid: true
              }));
            }
          } else {
            setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
              value: value,
              isValid: true
            }));
          }
        } else {
          // // generateNewValue()
          // let isodate =dateValue.toISOString()
          let date = new Date(dateValue.replace(/-/g, '\/').replace(/T.+/, ''));
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
          setDateValue((0, _helpers.setLocalISO)(date));

          // setDateValue()

          // const time = new Date(formElementValue.value).toLocaleTimeString('en',
          //   { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
          // let date = new Date(value).setTime(new Date(time));
          // setValue(new Date(date).toISOString())
          // setFormElementValue({
          //   ...formElementValue,
          //   value: value,
          //   isValid: true
          // })
        }
        //   let time = value.match(/\d\d:\d\d/);

        //   setDateTime({ ...dateTime, endtime: time[0] })
      }
    },
    canedit: 1
  }), duration && formElementValue.value !== '' && /*#__PURE__*/_react.default.createElement(_DateTimeElement.SelectedItemStyled, {
    onClick: () => {
      if (required === 1) {
        setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
          value: '',
          isValid: false
        }));
      } else {
        setFormElementValue(_objectSpread(_objectSpread({}, formElementValue), {}, {
          value: '',
          isValid: true
        }));
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    style: {
      marginRight: 5
    }
  }), formElementValue.value));
};
exports.DateTimeElement = DateTimeElement;