"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = void 0;
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _general = require("../../../general");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _io = require("react-icons/io5");
var _helpers = require("../../../../app/helpers");
var _Functions = require("./Functions");
var _Main = require("./styles/Main");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TimePicker = props => {
  const {
    label,
    handleParent,
    canedit = 1,
    twelvehr = false,
    defaultValue,
    interval,
    inlineLabel,
    duration
  } = props;
  const spanRef = (0, _react.useRef)();
  const hoursRef = (0, _react.useRef)();
  const colonRef = (0, _react.useRef)();
  const minutesRef = (0, _react.useRef)();
  const hourArrowsRef = (0, _react.useRef)();
  const [themeState] = (0, _data.useAppTheme)();
  const [showDropDown, setShowDropDown] = (0, _react.useState)(false);

  //if handleparent make sure parent state is set to value ^
  const milliseconds = twelvehr ? 43200000 : 86400000;
  var presets = {
    1: 60000,
    5: 300000,
    10: 600000,
    15: 900000,
    20: 1200000,
    25: 1500000,
    30: 1800000,
    35: 2100000,
    40: 2400000,
    45: 2700000,
    50: 3000000,
    55: 3300000,
    60: 3600000
  };
  var defaultTime = new Date(defaultValue).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: twelvehr ? true : false,
    timeZone: 'UTC'
  });
  const [hours, setHours] = (0, _react.useState)(defaultValue ? defaultTime.split(':')[0] === '24' ? '00' : defaultTime.split(':')[0].length === 1 ? '0' + defaultTime.split(':')[0] : defaultTime.split(':')[0] : '');
  // console.log('hours', hours)

  const [minutes, setMinutes] = (0, _react.useState)(defaultValue ? defaultTime.split(':')[1] === '0' ? '00' : defaultTime.split(':')[1].length === 1 ? '0' + defaultTime.split(':')[1] : defaultTime.split(':')[1].substring(0, 2) : '');
  // console.log('minutes', minutes)

  const [AMorPM, setAMorPM] = (0, _react.useState)(defaultValue ? defaultTime.split(':')[1].substring(3, 5) : 'AM');

  // Send ISOString to parent
  const [ISOString, setISOString] = (0, _react.useState)((0, _helpers.makeIsoString)(hours, minutes, AMorPM, twelvehr));
  (0, _react.useEffect)(() => {
    handleParent && handleParent(ISOString);
  }, [ISOString]);

  // INTERVAL times arrays
  const [customInterval, setCustomInterval] = (0, _react.useState)(presets.hasOwnProperty(interval) ? presets[interval] : interval * 60 * 1000);
  const times = Array.from(Array(interval ? interval < 61 ? Math.round(milliseconds / customInterval) : Math.round(milliseconds / interval) : null).keys()).map((i, index) => {
    let key = interval < 61 ? customInterval : interval;
    let hh = Math.floor(i * key / 1000 / 60 / 60);
    let mm = Math.round((i * key / 1000 / 60 / 60 - hh) * 60);
    mm < 10 ? mm = "0".concat(mm) : mm = mm;
    hh < 10 ? hh === 0 && twelvehr ? hh = 12 : hh = "0".concat(hh) : hh = hh;
    return [hh, mm].toString().split(',');
  });
  // console.log('times', times)

  const hoursArr = twelvehr ? Array.from(Array(12), (_, i) => i < 9 ? '0' + (i + 1) : i + 1).toString().split(',') : Array.from(Array(24), (_, i) => i < 10 ? '0' + i : i).toString().split(',');
  // console.log('hoursArr', hoursArr)

  const minArr = Array.from(Array(60), (_, i) => i < 10 ? '0' + i : i).toString().split(',');
  // console.log('minArr', minArr)

  const results = (0, _Functions.getCorrespondingVariables)(interval, times, hoursArr, hoursRef, minArr, hours, minutes);
  // console.log('results', results)

  const [step, setStep] = (0, _react.useState)(1);
  // console.log('step', step)

  const [arrowClicked, setArrowClicked] = (0, _react.useState)(false);
  const [maxIntervalVal, setMaxIntervalVal] = (0, _react.useState)(59);
  const [minIntervalVal, setMinIntervalVal] = (0, _react.useState)(0);
  const [sValidStep, setSValidStep] = (0, _react.useState)(times.map(i => hours === i[0] ? i[1] : '').filter(n => n));
  (0, _react.useEffect)(() => {
    var _getIntervals$;
    const getIntervals = times.map(i => hours === i[0] ? i[1] : '').filter(n => n);
    setSValidStep(getIntervals);
    // console.log(hours, sValidStep, getIntervals)
    if (interval && minutes == '') setMinutes((_getIntervals$ = getIntervals[0]) !== null && _getIntervals$ !== void 0 ? _getIntervals$ : '');else if (interval && arrowClicked) {
      var _getIntervals$2;
      setMinutes((_getIntervals$2 = getIntervals[0]) !== null && _getIntervals$2 !== void 0 ? _getIntervals$2 : '');
      setArrowClicked(!arrowClicked);
    } else setMinutes(minutes);
  }, [hours]);

  // console.log(times.map(i => (hours === i[0] ? i[1] : '')).filter(n => n))
  // console.log(sValidStep)
  (0, _react.useEffect)(() => {
    if (!duration) {
      var _sValidStep$;
      // console.log(hours, sValidStep)
      setISOString((0, _helpers.makeIsoString)(hours, minutes, AMorPM, twelvehr));
      setStep(sValidStep.length === 0 ? 1 : sValidStep.length === 1 ? sValidStep[0] : sValidStep[1] - sValidStep[0]);
      setMinIntervalVal((_sValidStep$ = sValidStep[0]) !== null && _sValidStep$ !== void 0 ? _sValidStep$ : '');
      setMaxIntervalVal(sValidStep[sValidStep.length - 1]);
    } else {
      handleParent && handleParent(hours + ':' + minutes);
    }
  }, [hours, minutes, AMorPM]);
  const handleHourChange = (currentValue, increment) => {
    const currentIndex = currentValue === '' ? increment ? -1 : 0 : hoursArr.indexOf(currentValue);
    const newIndex = (currentIndex + (increment ? 1 : -1) + hoursArr.length) % hoursArr.length;
    return hoursArr[newIndex === -1 ? hoursArr.length - 1 : newIndex];
  };
  const handleMinuteChange = (currentValue, increment) => {
    // console.log(currentValue)
    const arr = interval ? sValidStep : minArr;
    const currentIndex = currentValue === '' ? increment ? -1 : 0 : arr.indexOf(currentValue);
    const newIndex = (currentIndex + (increment ? 1 : -1) + arr.length) % arr.length;
    return arr[newIndex === -1 ? arr.length - 1 : newIndex];
  };
  const onClickUpHours = e => {
    setHours(handleHourChange(hours, true));
    setArrowClicked(true);
    setShowDropDown(false);
  };
  const onClickDownHours = e => {
    setHours(handleHourChange(hours, false));
    setArrowClicked(true);
    setShowDropDown(false);
  };
  const onCLickUpMinutes = e => {
    var _handleMinuteChange;
    setMinutes((_handleMinuteChange = handleMinuteChange(minutes, true)) !== null && _handleMinuteChange !== void 0 ? _handleMinuteChange : '');
    setShowDropDown(false);
  };
  const onClickDownMinutes = e => {
    var _handleMinuteChange2;
    setMinutes((_handleMinuteChange2 = handleMinuteChange(minutes, false)) !== null && _handleMinuteChange2 !== void 0 ? _handleMinuteChange2 : '');
    setShowDropDown(false);
  };

  // console.log(hours, minutes)

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "TIMEPICKER",
    "data-testid": "timepicker"
  }, !inlineLabel && label && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontStyle: 'italic'
    }
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "CENTER_WITH_DROPDOWN",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.StyledSpan, {
    className: "TIMEPICKER-SPAN",
    "data-testid": "timepicker-span",
    hours: hours,
    minutes: minutes,
    ref: spanRef
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: hoursRef,
    className: 'hours',
    type: 'text',
    value: hours,
    min: twelvehr ? 1 : 0,
    max: twelvehr ? 12 : 23,
    minLength: 2,
    maxLength: 2,
    placeholder: '--',
    onFocus: e => (0, _Functions.onFocus)(e, null, null),
    onChange: e => {
      setHours(e.target.value);
    },
    onBlur: e => (0, _helpers.leadingZeros)(e, setHours, setMinutes),
    onKeyUp: e => (0, _Functions.handleKeyUp)(e, colonRef, hourArrowsRef, results, twelvehr, interval),
    onKeyDown: e => (0, _Functions.handleKeyDown)(e, results),
    onInput: e => e.target.value = e.target.value.substring(0, 2),
    disabled: canedit === 0 ? 1 : 0
  }), duration && /*#__PURE__*/_react.default.createElement("div", {
    className: "hrs_duration",
    style: {
      fontWeight: 'bold'
    }
  }, 'hrs'), /*#__PURE__*/_react.default.createElement(_Main.IncreaseOrDecrease, {
    className: 'hours_arrows',
    ref: hourArrowsRef,
    "data-testid": 'hours-arrow'
  }, /*#__PURE__*/_react.default.createElement(_io.IoCaretUp, {
    "data-testid": 'up-hour',
    onClick: e => onClickUpHours(e)
  }), /*#__PURE__*/_react.default.createElement(_io.IoCaretDown, {
    "data-testid": 'down-hour',
    onClick: e => onClickDownHours(e)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "colon",
    ref: colonRef
  }, ":"), /*#__PURE__*/_react.default.createElement("input", {
    ref: minutesRef,
    className: 'minutes',
    type: 'text',
    value: minutes,
    step: interval ? step : 1,
    min: interval ? minIntervalVal : 0,
    max: interval ? maxIntervalVal : 59,
    minLength: 2,
    maxLength: 2,
    placeholder: '--',
    onChange: e => {
      setMinutes(e.target.value);
      // setShowDropDown(true)
    },
    onFocus: e => (0, _Functions.onFocus)(e, interval, minIntervalVal),
    onBlur: e => (0, _helpers.leadingZeros)(e, setHours, setMinutes),
    onKeyUp: e => (0, _Functions.handleKeyUp)(e, colonRef, hourArrowsRef, results, twelvehr, interval),
    onKeyDown: e => (0, _Functions.handleKeyDown)(e, results),
    onInput: e => e.target.value = e.target.value.substring(0, 2),
    disabled: canedit === 0 ? 1 : 0
  }), duration && /*#__PURE__*/_react.default.createElement("div", {
    className: "mins_duration",
    style: {
      fontWeight: 'bold'
    }
  }, 'mins'), /*#__PURE__*/_react.default.createElement(_Main.IncreaseOrDecrease, {
    className: 'minutes_arrows',
    "data-testid": "minutes-arrows"
  }, /*#__PURE__*/_react.default.createElement(_io.IoCaretUp, {
    "data-testid": 'up-minute',
    onClick: e => onCLickUpMinutes(e)
  }), /*#__PURE__*/_react.default.createElement(_io.IoCaretDown, {
    "data-testid": 'down-minute',
    onClick: e => onClickDownMinutes(e)
  })), twelvehr && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      setAMorPM(AMorPM === 'AM' ? 'PM' : 'AM');
    },
    style: {
      cursor: 'pointer',
      paddingRight: '5px',
      fontWeight: 'bold'
    }
  }, AMorPM), /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    onClick: e => setShowDropDown(!showDropDown),
    color: themeState.currentTheme.text,
    icon: showDropDown ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, {
      "data-testid": 'chevron-up-icon'
    }) : /*#__PURE__*/_react.default.createElement(_fa.FaClock, {
      "data-testid": 'clock-icon'
    })
  }))), showDropDown && /*#__PURE__*/_react.default.createElement(_Main.TimeDropdownStyled, {
    "data-testid": 'time-dropdown',
    className: "TIMEDROPDOWN",
    style: {
      width: spanRef.current.clientWidth
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid green',
      overflowY: 'auto',
      paddingLeft: interval ? hoursRef.current.clientWidth / 2 - 10 : null,
      paddingRight: interval ? hoursRef.current.clientWidth / 2 - 10 + hourArrowsRef.current.clientWidth : hourArrowsRef.current.clientWidth,
      width: interval ? (hoursRef.current.clientWidth / 2 + 10) * 2 + hourArrowsRef.current.clientWidth + colonRef.current.clientWidth : hoursRef.current.clientWidth
    }
  }, Array.from(Array(interval ? interval < 61 ? Math.round(milliseconds / customInterval) : Math.round(milliseconds / interval) : twelvehr ? 12 : 24).keys()).map((i, index) => {
    // for intervals
    let key = interval < 61 ? customInterval : interval;
    let hh = Math.floor(i * key / 1000 / 60 / 60);
    let mm = Math.round((i * key / 1000 / 60 / 60 - hh) * 60);
    mm < 10 ? mm = "0".concat(mm) : mm = "".concat(mm);
    hh < 10 ? hh === 0 && twelvehr ? hh = '12' : hh = "0".concat(hh) : hh = "".concat(hh);

    // for hours only
    var hour = twelvehr ? i + 1 : i;
    hour < 10 ? hour = "0".concat(hour) : hour = "".concat(hour);
    return /*#__PURE__*/_react.default.createElement(_Main.Time, {
      key: index + '_interval_' + i,
      interval: interval,
      onClick: e => {
        setHours(interval ? hh : hour);
        interval && setMinutes(mm);
      }
    }, interval ? hh : hour, interval && /*#__PURE__*/_react.default.createElement("div", null, mm));
  })), !interval && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid green',
      overflowY: 'auto',
      width: hoursRef.current.clientWidth,
      paddingLeft: colonRef.current.clientWidth,
      paddingRight: hourArrowsRef.current.clientWidth
    }
  }, Array.from(Array(60).keys()).map((minute, index) => {
    if (minute < 10) return /*#__PURE__*/_react.default.createElement("div", {
      key: index + '_minute_0' + minute,
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      onClick: e => setMinutes('0' + minute)
    }, '0' + minute);else return /*#__PURE__*/_react.default.createElement("div", {
      key: index + '_minute_' + minute,
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      onClick: e => setMinutes("".concat(minute))
    }, minute);
  })), twelvehr && /*#__PURE__*/_react.default.createElement(_Main.AMPM, null, /*#__PURE__*/_react.default.createElement(_Main.Selected, {
    onClick: e => setAMorPM('AM')
  }, "AM"), /*#__PURE__*/_react.default.createElement(_Main.Selected, {
    onClick: e => setAMorPM('PM')
  }, "PM"))));
};

// TimePicker.defaultProps = {
//   canedit: 1,
//   twelvehr: false // true or false, default to 24
// }
exports.TimePicker = TimePicker;