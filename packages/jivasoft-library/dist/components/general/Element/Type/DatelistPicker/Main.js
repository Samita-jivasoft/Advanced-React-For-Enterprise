"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areAllTimesSame = exports.ElementTypeDatelistPicker = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _DateRangeSelector = require("./DateRangeSelector");
var _ElementContext = require("../../data/ElementContext");
var _react = _interopRequireWildcard(require("react"));
var _Display = require("../../../Display");
var _Calendar = require("../../../Calendar");
var _TimePicker = require("../../../Input/TimePicker");
var _fa = require("react-icons/fa");
var _DynamicButtonV = require("../../../DynamicButtonV2");
var _TimeRangeSelector = require("./TimeRangeSelector");
var _helpers = require("../../../../../app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const areAllTimesSame = data => {
  if (data.length === 0) return false;
  const firstStartTime = data[0].starttime;
  const firstEndTime = data[0].endtime;
  return data.every(item => item.starttime === firstStartTime && item.endtime === firstEndTime);
};
exports.areAllTimesSame = areAllTimesSame;
const ElementTypeDatelistPicker = () => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const [startDateText, setStartDateText] = (0, _react.useState)('');
  const [endDateText, setEndDateText] = (0, _react.useState)('');
  const [showDetail, setShowDetail] = (0, _react.useState)(false);
  const [time, setTime] = (0, _react.useState)({
    starttime: null,
    endtime: null
  });
  const {
    value,
    masktype,
    isEdit,
    required,
    interval,
    remainingRequirements,
    twelvehr,
    validminimum
  } = elementState;
  let showTwelveHr = twelvehr == 0 ? false : true;
  function setDateListElement(dateArray) {
    elementDispatch({
      type: 'SET_VALUES',
      values: {
        value: dateArray,
        datelist: dateArray
      }
    });
  }

  //Previously: The findErliestDate and findLatestDate were explicitly defined in the file,
  //Now: The function is moved to helpers/datetime/calulation

  // function findEarliestDate(data) {
  //   if (!data || data.length === 0) {
  //     return null; // Return null if the data array is empty or not provided
  //   }

  //   let earliest = new Date(data[0].date); // Assume the first date is the earliest

  //   for (let i = 1; i < data.length; i++) {
  //     const currentDate = new Date(data[i].date);
  //     if (currentDate < earliest) {
  //       earliest = currentDate;
  //     }
  //   }

  //   return earliest.toISOString(); // Return the earliest date as an ISO string
  // }

  //Herefordate
  // function findLatestDate(data) {
  //   if (!data || data.length === 0) {
  //     return null; // Return null if the data array is empty or not provided
  //   }

  //   let latest = new Date(data[0].date); // Assume the first date is the latest

  //   for (let i = 1; i < data.length; i++) {
  //     const currentDate = new Date(data[i].date);
  //     if (currentDate > latest) {
  //       latest = currentDate;
  //     }
  //   }

  //   return latest.toISOString(); // Return the latest date as an ISO string
  // }

  function _onSelect(data) {
    // let earliestDate = findEarliestDate(data);

    // if (dateTime?.startdate) {
    //     const earliestDateTime = new Date(earliestDate);
    //     const startDateTime = new Date(dateTime.startdate);

    //     if (earliestDateTime < startDateTime) {
    //         setDateTime({ ...dateTime, starttime: earliestDate });
    //     }
    // } else {
    //   // setDateTime({ ...dateTime, starttime: data[0] });

    // }

    // if (!dateTime?.startdate) {
    //   // set
    // }
    setDateListElement(data);
  }
  (0, _react.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value.length) === 0) {
      if (time !== null && time !== void 0 && time.starttime || time !== null && time !== void 0 && time.endtime) {
        setTime({
          starttime: null,
          endtime: null
        });
      }
    }
    let earliest = (0, _helpers.findEarliestDate)(value);
    if (earliest) {
      setStartDateText((0, _helpers.formatIsoStringToMMDDYY)(earliest));
    } else {
      setStartDateText('');
    }
    let latest = (0, _helpers.findLatestDate)(value);
    if (latest) {
      if (latest !== earliest) {
        setEndDateText((0, _helpers.formatIsoStringToMMDDYY)(latest));
      } else {
        setEndDateText('');
      }
    } else {
      setEndDateText('');
    }
  }, [value]);
  return isEdit ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DateRangeSelector.DateListSelector, {
    startDateText: startDateText,
    setStartDateText: setStartDateText,
    endDateText: endDateText,
    setEndDateText: setEndDateText,
    defaultValue: value.length ? value : [],
    dateArray: value,
    isEdit: isEdit,
    remainingRequirements: remainingRequirements,
    setDateArray: data => setDateListElement(data),
    masktype: masktype,
    timePerDate: time,
    twelvehr: showTwelveHr
  }), /*#__PURE__*/_react.default.createElement(_Calendar.Calendar, {
    masktype: masktype,
    twelvehr: showTwelveHr,
    validminimum: validminimum,
    onDetail: detail => {
      setShowDetail(detail);
    },
    styles: {
      width: '100%',
      height: '450px',
      position: 'relative'
    },
    onSelect: data => _onSelect(data),
    selected: value,
    dateTime: value,
    interval: interval ? interval : 0,
    timePerDate: time
  }), (masktype === null || masktype === void 0 ? void 0 : masktype.toLowerCase()) == 'datetime' && value.length > 0 && /*#__PURE__*/_react.default.createElement(_TimeRangeSelector.TimeRangeSelector, {
    twelvehr: showTwelveHr,
    showDetail: showDetail,
    interval: interval,
    setTime: setTime,
    time: time,
    value: value
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    },
    className: "DISPLAY-isEdit-0"
  }, value.length > 0 ? /*#__PURE__*/_react.default.createElement(_Display.DisplayDateList, {
    list: value,
    twelvehr: showTwelveHr
  }) : 'No Dates selected.');
};
exports.ElementTypeDatelistPicker = ElementTypeDatelistPicker;