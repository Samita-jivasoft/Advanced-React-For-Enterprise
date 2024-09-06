"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = Calendar;
exports.default = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _constants = require("app/constants");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _DynamicText = require("../DynamicText");
var _Layout = require("../Layout");
var _Main = require("./styles/Main");
var _Element = require("../Element");
var _Input = require("../Input");
var _framerMotion = require("framer-motion");
var _helpers = require("../../../app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Calendar(props) {
  var _Date5, _Date6, _Date7, _Date8;
  const {
    masktype,
    validminimum,
    animation,
    styles,
    onClose,
    onSelect,
    selected,
    dateTime,
    timePerDate,
    interval,
    twelvehr
  } = props;
  const today = new Date();
  const [animateDay, setAnimateDay] = (0, _react.useState)(null);
  const [selectedDate, setSelectedDate] = (0, _react.useState)();
  const initializeDate = () => {
    if (selected) {
      // If selected is an array, use the first date. Otherwise, use selected.date.

      const date = Array.isArray(selected) ? (selected === null || selected === void 0 ? void 0 : selected.length) > 0 ? new Date(selected[0].date) : today : new Date(selected.date);
      // return {
      //     month: date.getUTCMonth(),
      //     year: date.getUTCFullYear()
      return {
        month: date.getUTCMonth(),
        year: date.getUTCFullYear()
      };
      // };
    }
    // If no selected date, use the current month and year
    return {
      month: today.getUTCMonth(),
      year: today.getUTCFullYear()
    };
  };
  // const initializeDate = () => {
  //   if (Array.isArray(selected) && selected.length > 0) {
  //     // If selected is an array, use the first date
  //     const firstDate = new Date(selected[0].date);
  //     return {
  //       month: firstDate.getMonth(),
  //       year: firstDate.getFullYear()
  //     };
  //   } else if (selected && typeof selected === 'object') {
  //     // If selected is an object, use its date
  //     const date = new Date(selected.date);
  //     return {
  //       month: date.getMonth(),
  //       year: date.getFullYear()
  //     };
  //   }
  //   // Default to current month and year
  //   return {
  //     month: today.getMonth(),
  //     year: today.getFullYear()
  //   };
  // };

  const initialDate = initializeDate();
  const previousSelectedRef = (0, _react.useRef)(null);
  const [currentMonth, setCurrentMonth] = (0, _react.useState)(initialDate.month);
  const [currentYear, setCurrentYear] = (0, _react.useState)(initialDate.year);
  const [shouldUpdateMonth, setShouldUpdateMonth] = (0, _react.useState)(true);
  const numberOfSelectedDays = Array.isArray(selected) ? selected.length : selected ? 1 : 0;
  const [selectedStartDate, setSelectedStartDate] = (0, _react.useState)(null);
  const [selectedEndDate, setselectedEndDate] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    // if (dateTime && Array.isArray(selected)) {
    //   const updatedSelected = selected.map(dateObj => ({
    //     ...dateObj,
    //     starttime: new Date(timePerDate?.starttime)?.toISOString(),
    //     endtime: new Date(timePerDate?.endtime)?.toISOString()
    //   }));
    //   onSelect && onSelect(updatedSelected);
    // } else if (dateTime && selected) {
    //   const updatedSelected = {
    //     ...selected,
    //     starttime: new Date(timePerDate?.starttime)?.toISOString(),
    //     endtime: new Date(timePerDate?.endtime)?.toISOString()
    //   };
    //   onSelect && onSelect(updatedSelected);
    // }
  }, [dateTime]);
  (0, _react.useEffect)(() => {
    if (dateTime && Array.isArray(selected)) {
      const updatedSelected = selected.map(dateObj => _objectSpread(_objectSpread({}, dateObj), {}, {
        starttime: timePerDate !== null && timePerDate !== void 0 && timePerDate.starttime ? timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime : dateObj === null || dateObj === void 0 ? void 0 : dateObj.starttime,
        endtime: timePerDate !== null && timePerDate !== void 0 && timePerDate.endtime ? timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime : dateObj === null || dateObj === void 0 ? void 0 : dateObj.endtime
      }));
      onSelect && onSelect(updatedSelected);
    } else if (dateTime && selected) {
      const updatedSelected = _objectSpread(_objectSpread({}, selected), {}, {
        starttime: timePerDate !== null && timePerDate !== void 0 && timePerDate.starttime ? timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime : selected === null || selected === void 0 ? void 0 : selected.starttime,
        endtime: timePerDate !== null && timePerDate !== void 0 && timePerDate.endtime ? timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime : selected === null || selected === void 0 ? void 0 : selected.endtime
      });
      onSelect && onSelect(updatedSelected);
    }
  }, [timePerDate]);
  (0, _react.useEffect)(() => {
    if (Array.isArray(selected) && selected.length > 0) {
      const sortedDates = [...selected].sort((a, b) => new Date(a.date) - new Date(b.date));
      setSelectedStartDate(sortedDates[0].date);
      setselectedEndDate(sortedDates[sortedDates.length - 1].date);
    } else if (selected) {
      setSelectedStartDate(selected.date);
      setselectedEndDate(selected.date);
    } else {
      setSelectedStartDate(null);
      setselectedEndDate(null);
    }
  }, [selected]);
  (0, _react.useEffect)(() => {
    if (props.onDateRangeChange) {
      props.onDateRangeChange({
        selectedStartDate,
        selectedEndDate
      });
    }
  }, [selectedStartDate, selectedEndDate]);
  (0, _react.useEffect)(() => {
    let newSelectedDate;
    if (Array.isArray(selected) && selected.length > 0) {
      newSelectedDate = selected[0].date;
    } else if (selected) {
      newSelectedDate = selected.date;
    }
    if (previousSelectedRef.current === newSelectedDate) {
      return; // exit if the selected date hasn't changed
    }
    previousSelectedRef.current = newSelectedDate;

    //Previously: The extractMonthYear was explicitly defined in the file,
    //Now: The function is moved to helpers/datetime/calulation

    // Helper function to extract month and year from a date string
    // const extractMonthYear = dateStr => {
    //   const date = new Date(dateStr);
    //   return { month: date.getUTCMonth(), year: date.getUTCFullYear() };
    // };

    // Check if selected is a range or a single date

    let selectedMonthYear;
    if (Array.isArray(selected)) {
      if ((selected === null || selected === void 0 ? void 0 : selected.length) > 0) {
        selectedMonthYear = (0, _helpers.extractMonthYear)(selected[0].date);
      } else {
        return;
      }
    } else if (selected) {
      selectedMonthYear = (0, _helpers.extractMonthYear)(selected.date);
    } else {
      return; // Exit if no selected date
    }
    const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
    const sixDaysBeforeLast = new Date(currentYear, currentMonth, lastDayOfCurrentMonth.getDate() - 6);

    // Compare with currentMonth and currentYear
    // Extract the day from the selectedMonthYear
    const selectedDay = new Date(selectedMonthYear.year, selectedMonthYear.month, 1).getDate();
    // Check if the selected date is earlier than the current month and year
    if (selectedMonthYear.year < currentYear || selectedMonthYear.year === currentYear && selectedMonthYear.month < currentMonth && selectedDay >= sixDaysBeforeLast.getDate()) {
      setCurrentMonth(selectedMonthYear.month);
      setCurrentYear(selectedMonthYear.year);
    }
    // Check if the selected date is later than the current month and year, but not within the last 6 days
    else if (selectedMonthYear.year > currentYear || selectedMonthYear.year === currentYear && selectedMonthYear.month > currentMonth && selectedDay <= sixDaysBeforeLast.getDate()) {
      setCurrentMonth(selectedMonthYear.month);
      setCurrentYear(selectedMonthYear.year);
    }
    if (!shouldUpdateMonth) return;
    setShouldUpdateMonth(false);
  }, [selected, currentMonth, currentYear]);
  const handlePrevMonth = e => {
    e.preventDefault();
    if (currentMonth === 0) {
      // January
      setCurrentYear(prevYear => prevYear - 1);
      setCurrentMonth(11); // December
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1);
    }
    setShouldUpdateMonth(false);
  };
  const handleNextMonth = e => {
    e.preventDefault();
    if (currentMonth === 11) {
      // December
      setCurrentYear(prevYear => prevYear + 1);
      setCurrentMonth(0); // January
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1);
    }
    setShouldUpdateMonth(false);
  };
  const calendarRef = (0, _react.useRef)(null); // Create a ref
  const [checkedDays, setCheckedDays] = (0, _react.useState)({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false
  });
  const [checkedRows, setCheckedRows] = (0, _react.useState)({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const handleRowCheckboxChange = rowIndex => {
    // Set the minimum valid date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize current date to start of the day
    const minValidDate = (0, _helpers.getMinDays)(validminimum);
    // Determine which days are in the given row
    const daysForRow = allDays.slice(rowIndex * 7, rowIndex * 7 + 7);
    const currentMonthDaysForRow = daysForRow.filter(d => {
      // Filter out days that are not within validMin days of today or later
      return d.getUTCMonth() === currentMonth && d >= minValidDate;
    });

    // Check if all days from the current month in the row are selected
    const allCurrentMonthDaysSelected = currentMonthDaysForRow.every(day => isSelected(day));
    let newSelected;
    if (allCurrentMonthDaysSelected) {
      // If all days in this row of the current month are selected, deselect them.
      newSelected = Array.isArray(selected) ? selected.filter(item => !currentMonthDaysForRow.some(d => d.toISOString().slice(0, 10) === item.date.slice(0, 10))) : [];
    } else {
      // If not all days are selected, select them, ensuring not to select already selected dates.
      const daysNotAlreadySelected = currentMonthDaysForRow.filter(day => !selected.some(selectedDay => day.toISOString().slice(0, 10) === selectedDay.date.slice(0, 10)));
      newSelected = Array.isArray(selected) ? [...selected, ...daysNotAlreadySelected.map(d => ({
        date: d.toISOString(),
        startdate: d.toISOString(),
        enddate: d.toISOString(),
        starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
        endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
      }))] : daysNotAlreadySelected.map(d => ({
        date: d.toISOString(),
        startdate: d.toISOString(),
        enddate: d.toISOString(),
        starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
        endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
      }));
    }
    onSelect && onSelect(newSelected);
  };
  const handleCheckboxChange = day => {
    const dayIndex = daysInWeek.indexOf(day);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize current date to start of the day
    const minValidDate = (0, _helpers.getMinDays)(validminimum);
    const daysForDayOfWeek = allDays.filter(d => d.getUTCDay() === dayIndex && d >= minValidDate && d.getUTCMonth() === currentMonth);
    let newSelected = Array.isArray(selected) ? [...selected] : [];

    // Check if any day in this column is currently not selected
    const anyDayNotSelected = daysForDayOfWeek.some(day => !newSelected.some(item => item.date.slice(0, 10) === day.toISOString().slice(0, 10)));
    if (anyDayNotSelected) {
      // Select all days in this column
      daysForDayOfWeek.forEach(day => {
        const dayStr = day.toISOString().slice(0, 10);
        if (!newSelected.some(item => item.date.slice(0, 10) === dayStr)) {
          newSelected.push({
            date: day.toISOString(),
            startdate: day.toISOString(),
            enddate: day.toISOString(),
            starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
            endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
          });
        }
      });
    } else {
      // Deselect all days in this column
      newSelected = newSelected.filter(item => !daysForDayOfWeek.some(d => d.toISOString().slice(0, 10) === item.date.slice(0, 10)));
    }
    onSelect && onSelect(newSelected);
  };
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      // If the ref exists and the click is outside the calendar, hide the calendar
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onClose && onClose();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup: remove the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [calendarRef]);

  //Previously: The isToday was explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calulation

  // const isToday = (day) => {
  //   const today = new Date();
  //   return day.getDate() === today.getDate() &&
  //     day.getMonth() === today.getMonth() &&
  //     day.getFullYear() === today.getFullYear();
  // };

  const isSelected = day => {
    //YYYY-MM-DDD
    const dayStr = day.toISOString().slice(0, 10);
    // If selected is an array
    if (Array.isArray(selected)) {
      const matchedItem = selected.find(item => item.date.slice(0, 10) === dayStr);
      return matchedItem;
    }
    // If selected is a single object
    else if (selected) {
      if (selected.date.slice(0, 10) === dayStr) {
        return selected;
      }
    }
    return null;
  };
  (0, _react.useEffect)(() => {
    (props === null || props === void 0 ? void 0 : props.onDetail) && (props === null || props === void 0 ? void 0 : props.onDetail(animateDay));
  }, [animateDay]);
  const handleEditIconClick = (day, e) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize current date to start of the day
    const minValidDate = (0, _helpers.getMinDays)(validminimum);

    // if (day < minValidDate?.toISOString()) {
    //   // Clicked day is earlier than validMin days from today, don't allow selection
    //   return;
    // }
    e.stopPropagation();
    if (day >= (minValidDate === null || minValidDate === void 0 ? void 0 : minValidDate.toISOString())) {
      if (!isSelected(new Date(day))) {
        handleDayClick(new Date(day));
      }
      setAnimateDay(day); // Set the day to be animated
    } else {
      if (isSelected(new Date(day))) {
        setAnimateDay(day); // Set the day to be animated
      }
    }
  };
  const handleDayClick = day => {
    const minValidDate = (0, _helpers.getMinDays)(validminimum);
    if (day < minValidDate) {
      // Clicked day is earlier than validMin days from today, don't allow selection
      return;
    }
    const dayStr = day.toISOString().slice(0, 10);
    // If selected is an array
    if (Array.isArray(selected)) {
      if (isSelected(day)) {
        const newSelected = selected.filter(item => item.date.slice(0, 10) !== dayStr);
        onSelect && onSelect(newSelected);
      } else {
        //javascript below only adds start and end time properties if they exist in the timePerDate set by the parent
        const newSelected = [...selected, _objectSpread(_objectSpread({
          date: day.toISOString(),
          startdate: day.toISOString(),
          enddate: day.toISOString()
        }, (timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime) && {
          starttime: timePerDate.starttime
        }), (timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime) && {
          endtime: timePerDate.endtime
        })];
        onSelect && onSelect(newSelected);
      }
    }
    // If selected is a single object
    else if (selected) {
      if (isSelected(day)) {
        onSelect && onSelect(null);
      } else {
        onSelect && onSelect({
          date: day.toISOString(),
          startdate: day.toISOString(),
          enddate: day.toISOString(),
          starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
          endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
        });
      }
    }
    // If no selection yet
    else {
      onSelect && onSelect({
        date: day.toISOString(),
        startdate: day.toISOString(),
        enddate: day.toISOString(),
        starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
        endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
      });
    }
  };
  (0, _react.useEffect)(() => {
    if (selectedDate) {
      onSelect && onSelect(selectedDate);
    }
  }, [selectedDate]);
  const initialYear = new Date().getFullYear();
  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthStart = new Date(currentYear, currentMonth, 1);
  const monthEnd = new Date(currentYear, currentMonth + 1, 0);
  const startDate = new Date(monthStart);
  startDate.setDate(startDate.getDate() - monthStart.getDay());
  let days = [];
  const handleMonthChange = e => {
    setCurrentMonth(Number(e.target.value));
  };
  const handleYearChange = e => {
    setCurrentYear(Number(e.target.value));
  };
  let day = new Date(startDate);
  const allDays = [];
  while (day <= monthEnd) {
    allDays.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  (0, _react.useEffect)(() => {
    const newCheckedDays = {};
    daysInWeek.forEach(day => {
      const dayIndex = daysInWeek.indexOf(day);
      // Consider only days in the current month for the check
      const daysForDayOfWeekInCurrentMonth = allDays.filter(d => d.getUTCDay() === dayIndex && d.getUTCMonth() === currentMonth);
      const selectedDaysForDayOfWeek = daysForDayOfWeekInCurrentMonth.filter(d => isSelected(d));

      // If all days for this day of the week in the current month are selected, set it to true, otherwise false
      newCheckedDays[day] = selectedDaysForDayOfWeek.length === daysForDayOfWeekInCurrentMonth.length;
    });
    const newCheckedRows = {};
    for (let i = 0; i < 6; i++) {
      // For 6 weeks
      const daysForRow = allDays.slice(i * 7, i * 7 + 7);
      const selectedDaysForRow = daysForRow.filter(d => isSelected(d));

      // If all days for this row are selected, set it to true, otherwise false
      newCheckedRows[i] = selectedDaysForRow.length === daysForRow.length;
    }

    // Check if there's any difference between newCheckedRows and checkedRows
    const isDifferent = Object.keys(newCheckedRows).some(row => newCheckedRows[row] !== checkedRows[row]);
    if (isDifferent) {
      setCheckedRows(newCheckedRows);
    }
    // Check if there's any difference between newCheckedDays and checkedDays
    const rowsIsDifferent = Object.keys(newCheckedDays).some(day => newCheckedDays[day] !== checkedDays[day]);
    if (rowsIsDifferent) {
      setCheckedDays(newCheckedDays);
    }
  }, [allDays, selected, checkedDays, checkedRows, currentMonth]);
  const dayCells = allDays.map((d, i) => {
    const selectedDetails = isSelected(d);

    // Extract the time portions
    // Assuming selectedDetails.endtime is a valid date string or timestamp

    const startTime = selectedDetails !== null && selectedDetails !== void 0 && selectedDetails.starttime ? (0, _helpers.getUTCTime)(selectedDetails === null || selectedDetails === void 0 ? void 0 : selectedDetails.starttime, twelvehr) : '';
    const endTime = selectedDetails !== null && selectedDetails !== void 0 && selectedDetails.endtime ? (0, _helpers.getUTCTime)(selectedDetails === null || selectedDetails === void 0 ? void 0 : selectedDetails.endtime, twelvehr) : '';
    const dayClass = "".concat(d.getUTCMonth() === currentMonth ? '' : 'disabled', " \n    ").concat(isSelected(d) ? 'selected' : '', "\n    ").concat((0, _helpers.isToday)(d) ? 'today' : '', "\n    ").concat(animateDay === d.toISOString() ? 'animate' : '');
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize current date to start of the day
    const minValidDate = (0, _helpers.getMinDays)(validminimum);
    return /*#__PURE__*/_react.default.createElement(_Main.StyledDay, {
      enabled: d.toISOString() >= (0, _helpers.getMinDays)(validminimum).toISOString(),
      animateDay: animateDay,
      key: "".concat(i, "-").concat(d.toISOString()),
      delay: i,
      className: dayClass,
      onClick: () => handleDayClick(d)
    }, true && /*#__PURE__*/_react.default.createElement("div", {
      className: "dayWrapper"
    }, /*#__PURE__*/_react.default.createElement(_Main.EditIcon, {
      onClick: e => handleEditIconClick(d.toISOString(), e)
    }, /*#__PURE__*/_react.default.createElement(_fa.FaPen, null)), d.getUTCDate()), /*#__PURE__*/_react.default.createElement("div", {
      className: "timeWrapper"
    }, /*#__PURE__*/_react.default.createElement("div", null, startTime), /*#__PURE__*/_react.default.createElement("div", null, endTime)));
  });

  // Chunk dayCells into rows for rendering
  const rows = [];
  for (let i = 0; i < dayCells.length; i += 7) {
    rows.push(/*#__PURE__*/_react.default.createElement("tr", {
      style: {
        position: 'relative'
      },
      key: i
    }, dayCells.slice(i, i + 7)));
  }
  const rowBoxes = [];
  for (let i = 0; i < dayCells.length; i += 7) {
    rowBoxes.push(/*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '100%'
      },
      onClick: () => handleRowCheckboxChange(i / 7)
    }, /*#__PURE__*/_react.default.createElement("input", {
      style: {
        cursor: 'pointer'
      },
      type: "checkbox",
      checked: checkedRows[i / 7] || false,
      readOnly: true
    })));
  }
  const targetDate = selected.find(d => {
    var _d$date;
    // Extract only the date part from each ISO string
    const dDatePart = (_d$date = d.date) === null || _d$date === void 0 ? void 0 : _d$date.split('T')[0];
    const animateDatePart = animateDay === null || animateDay === void 0 ? void 0 : animateDay.split('T')[0];

    // Compare the date parts
    return dDatePart === animateDatePart;
  });
  const detailStartTime = animateDay ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.starttime : '';
  const detailEndTime = animateDay ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.endtime : '';
  const updateDateTimes = (date, property) => {
    const updatedDates = selected.map(d => {
      if (d.date === (targetDate === null || targetDate === void 0 ? void 0 : targetDate.date)) {
        return _objectSpread(_objectSpread({}, d), {}, {
          [property]: date
        });
      }
      return d;
    });

    // Update the state
    onSelect(updatedDates);
  };
  const renderedDetail = (0, _react.useMemo)(() => {
    var _Date, _Date2, _Date3, _Date4;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Main.StyledDayDetail, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, {
      size: 30,
      color: 'rgba(0,0,0,.5)',
      onClick: () => {
        setAnimateDay();
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      onClick: () => {
        setAnimateDay();
      },
      style: {
        width: '100%',
        color: 'rgba(0,0,0,.5)',
        fontWeight: 'bold',
        fontSize: '1.5rem'
      }
    }, monthNames[(_Date = new Date(animateDay)) === null || _Date === void 0 ? void 0 : _Date.getMonth()], ' ', (_Date2 = new Date(animateDay)) === null || _Date2 === void 0 ? void 0 : _Date2.getFullYear())), /*#__PURE__*/_react.default.createElement(_Main.StyledDayDetailHeader, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: 10,
        width: '100%',
        boxSizing: 'border-box',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        textAlign: 'center',
        background: 'rgba(0,0,0,.1)'
      }
    }, daysInWeek[(_Date3 = new Date(animateDay)) === null || _Date3 === void 0 ? void 0 : _Date3.getDay()]), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        fontSize: 40
      }
    }, (_Date4 = new Date(animateDay)) === null || _Date4 === void 0 ? void 0 : _Date4.getDate()))), /*#__PURE__*/_react.default.createElement("div", {
      className: "TIMEPICKERS",
      style: {
        // border: '1px solid red',
        flexDirection: 'row',
        display: 'flex',
        marginTop: '20px',
        width: '100%',
        justifyContent: 'space-around'
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        opacity: 0.7,
        fontWeight: 550,
        fontSize: '.66rem'
      }
    }, "Start Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
      interval: interval,
      defaultValue: targetDate !== null && targetDate !== void 0 && targetDate.starttime ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.starttime : animateDay === null || animateDay === void 0 ? void 0 : animateDay.starttime,
      twelvehr: twelvehr,
      handleParent: value => {
        if (value) {
          updateDateTimes(value, 'starttime');
        }
      },
      canedit: 1
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        opacity: 0.7,
        fontWeight: 550,
        fontSize: '.66rem'
      }
    }, "End Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
      interval: interval,
      twelvehr: twelvehr,
      defaultValue: targetDate !== null && targetDate !== void 0 && targetDate.endtime ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.endtime : animateDay === null || animateDay === void 0 ? void 0 : animateDay.endtime,
      handleParent: value => {
        if (value) {
          updateDateTimes(value, 'endtime');
        }
      },
      canedit: 1
    })))));
  }, [animateDay]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Main.StyledCalendar, {
    animateDay: animateDay,
    styles: styles,
    ref: calendarRef,
    animation: animation
  }, /*#__PURE__*/_react.default.createElement(_Main.StyledHeader, null, /*#__PURE__*/_react.default.createElement(_Main.ArrowButton, {
    onClick: e => handlePrevMonth(e)
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, null)), /*#__PURE__*/_react.default.createElement(_Main.StyledDropdown, {
    value: currentMonth,
    onChange: e => handleMonthChange(e)
  }, monthNames.map((month, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: month,
    value: index
  }, month))), /*#__PURE__*/_react.default.createElement(_Main.StyledDropdown, {
    value: currentYear,
    onChange: handleYearChange
  }, Array.from({
    length: 151
  }, (_, i) => initialYear - 100 + i).map(year => /*#__PURE__*/_react.default.createElement("option", {
    key: year,
    value: year
  }, year))), /*#__PURE__*/_react.default.createElement(_Main.ArrowButton, {
    onClick: handleNextMonth
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null)), numberOfSelectedDays > 0 && /*#__PURE__*/_react.default.createElement(_Main.Counter, {
    onClick: () => onSelect && onSelect([])
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
    style: {
      marginRight: 5
    }
  }), numberOfSelectedDays, " Selected")), /*#__PURE__*/_react.default.createElement(_Main.TableContainer, null, /*#__PURE__*/_react.default.createElement(_Main.RowContainer, null, rowBoxes), /*#__PURE__*/_react.default.createElement(_Main.StyledTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, daysInWeek.map(day => /*#__PURE__*/_react.default.createElement("th", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => handleCheckboxChange(day),
    key: day
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checkedDays[day] || false,
    readOnly: true
  }), day)))), /*#__PURE__*/_react.default.createElement("tbody", null, rows))), (currentMonth !== new Date().getMonth() || currentYear !== new Date().getFullYear()) && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      padding: 5,
      boxSizing: 'border-box',
      bottom: 0,
      justifyContent: 'flex-end',
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.TodayButton, {
    onClick: () => {
      const today = new Date();
      setCurrentMonth(today.getMonth());
      setCurrentYear(today.getFullYear());
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaArrowLeft, null), "Back to Today")), props.children, animateDay && /*#__PURE__*/_react.default.createElement(_Main.StyledDayDetail, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, {
    size: 30,
    color: 'rgba(0,0,0,.5)',
    onClick: () => {
      setAnimateDay();
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      setAnimateDay();
    },
    style: {
      width: '100%',
      color: 'rgba(0,0,0,.5)',
      fontWeight: 'bold',
      fontSize: '1.5rem'
    }
  }, monthNames[(_Date5 = new Date(animateDay)) === null || _Date5 === void 0 ? void 0 : _Date5.getMonth()], ' ', (_Date6 = new Date(animateDay)) === null || _Date6 === void 0 ? void 0 : _Date6.getFullYear())), /*#__PURE__*/_react.default.createElement(_Main.StyledDayDetailHeader, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 10,
      width: '100%',
      boxSizing: 'border-box',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      textAlign: 'center',
      background: 'rgba(0,0,0,.1)'
    }
  }, daysInWeek[(_Date7 = new Date(animateDay)) === null || _Date7 === void 0 ? void 0 : _Date7.getDay()]), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 40
    }
  }, (_Date8 = new Date(animateDay)) === null || _Date8 === void 0 ? void 0 : _Date8.getDate()))), masktype == 'datetime' && /*#__PURE__*/_react.default.createElement("div", {
    className: "TIMEPICKERS",
    style: {
      // border: '1px solid red',
      flexDirection: 'row',
      display: 'flex',
      marginTop: '20px',
      width: '100%',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "Start Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
    interval: interval,
    defaultValue: targetDate !== null && targetDate !== void 0 && targetDate.starttime ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.starttime : animateDay === null || animateDay === void 0 ? void 0 : animateDay.starttime,
    twelvehr: twelvehr,
    handleParent: value => {
      if (value) {
        updateDateTimes(value, 'starttime');
      }
    },
    canedit: 1
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "End Time"), /*#__PURE__*/_react.default.createElement(_Input.TimePicker, {
    interval: interval,
    twelvehr: twelvehr,
    defaultValue: targetDate !== null && targetDate !== void 0 && targetDate.endtime ? targetDate === null || targetDate === void 0 ? void 0 : targetDate.endtime : animateDay === null || animateDay === void 0 ? void 0 : animateDay.endtime,
    handleParent: value => {
      if (value) {
        updateDateTimes(value, 'endtime');
      }
    },
    canedit: 1
  }))))));
}
var _default = exports.default = Calendar;