"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatetimePicker = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Datetimepicker = require("./Styles/Datetimepicker");
var _helpers = require("../../../../../../app/helpers");
var _Calendar = require("../../../../Calendar");
var _handlers = require("../../../handlers");
var _validation = require("../../../validation");
var _styles = require("../../Field/styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import { getMinDays } from '../../../../Calendar/helpers'

const DatetimePicker = props => {
  const timepickerref = (0, _react.useRef)(null);
  const [showPicker, setShowPicker] = (0, _react.useState)(false);
  const {
    dateTime,
    setDateTime,
    label,
    warning,
    mode = 'calendar',
    format = '##/##/##',
    validminimum,
    validmaximum,
    date,
    setDate
  } = props;
  // const [dateTime, setDatetime] = useState()
  const wrapperRef = (0, _react.useRef)(); // Create a ref
  const [clickPosition, setClickPosition] = (0, _react.useState)({
    x: 50,
    y: 50
  }); // Default to center
  const [lastValidDate, setLastValidDate] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {}, [dateTime]);

  //Previously: The isValidPart was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/validation

  //   function isValidPart(dateStr) {
  //     const parts = dateStr.split('/');

  //     if (parts[0]) {
  //         if (parts[0].length === 1 && !/^[0-1]$/.test(parts[0])) return false;
  //         if (parts[0].length === 2 && !/^(0[1-9]|1[0-2])$/.test(parts[0])) return false;
  //         if (parts[0].length > 2) return false; // Ensure month part doesn't exceed two digits
  //     }

  //     if (parts[1]) {
  //         if (parts[1].length === 1 && !/^[0-3]$/.test(parts[1])) return false;
  //         if (parts[1].length === 2) {
  //             const day = parseInt(parts[1], 10);
  //             if (day < 1 || day > 31) return false;

  //             if (parts[0].length === 2) {
  //                 const month = parseInt(parts[0], 10);
  //                 if (month === 2 && day > 29) return false; // Simplistic February check
  //                 if (day === 31 && ![1, 3, 5, 7, 8, 10, 12].includes(month)) return false;
  //             }
  //         }
  //         if (parts[1].length > 2) return false; // Ensure day part doesn't exceed two digits
  //     }

  //     // No need to validate year part for partial inputs like "MM/DD"

  //     return true;
  // }

  function handleInputChange(e) {
    const {
      value,
      selectionStart
    } = e.target;
    const cleanedValue = value;
    const formattedValue = (0, _handlers.enforceCustomFormat)(cleanedValue, format, selectionStart);
    e.target.value = formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue;
    const dateValue = new Date(formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue);
    const currentDate = new Date();
    const validMinimumDate = (0, _helpers.getMinDays)(validminimum);

    //TODO: REPLACE 0 WITH VALIDMINIMUM

    // const validMaximumDate = new Date(currentDate);
    // validMaximumDate.setDate(currentDate.getDate() + validmaximum);
    const newValue = e.target.value;
    if ((0, _helpers.isValidPart)(newValue)) {
      setDate(newValue);
      setLastValidDate(newValue);
    } else {
      // setDate(lastValidDate);
    }
    if (!(0, _validation.validateFormat)(formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.formattedValue, format)) {
      if (isNaN(dateValue.getTime()) || dateValue < validMinimumDate) {
        // If the date is not valid, or is outside the range of validMinimum and validMaximum
        setDateTime(validMinimumDate.toISOString());
      } else {
        setDateTime(dateValue.toISOString());
      }
    } else {
      if (dateTime) {
        setDate('');
        setDateTime();
      }
    }
  }
  function handleClick(event) {
    if (showPicker) {
      event.stopPropagation(); // Stop event propagation if the calendar is already displayed
      return; // Exit the function
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width * 100;
      const y = (event.clientY - rect.top) / rect.height * 100;
      setClickPosition({
        x,
        y
      });
      setShowPicker(true);
    }
  }
  function _onSelect(day) {
    setDateTime(new Date(day === null || day === void 0 ? void 0 : day.date).toISOString());
    setShowPicker(false);
  }
  (0, _react.useEffect)(() => {}, [dateTime]);
  if (mode === "guided-input") {
    return /*#__PURE__*/_react.default.createElement(_Datetimepicker.StyledDateInput, {
      placeholder: 'MM/DD/YY'
      // style={{color:}}
      ,
      value: date
      // value={dateTime && formatIsoStringToMMDDYY(dateTime)}
      ,

      valid: dateTime,
      onChange: handleInputChange
    });
  }
  return /*#__PURE__*/_react.default.createElement(_Datetimepicker.DatetimePickerStyled, {
    className: "DATETIMEPICKER",
    warning: warning,
    onClick: handleClick
  }, showPicker && /*#__PURE__*/_react.default.createElement(_Calendar.Calendar, {
    onSelect: day => _onSelect(day),
    animation: {
      origin: clickPosition
    },
    onClose: () => setShowPicker(false)
  }), /*#__PURE__*/_react.default.createElement(_fa.FaCalendar, {
    style: {
      paddingRight: 5
    }
  }), label);
};
exports.DatetimePicker = DatetimePicker;