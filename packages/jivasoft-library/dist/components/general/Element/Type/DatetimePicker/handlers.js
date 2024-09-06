"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISO8601ToDayMonthYear = ISO8601ToDayMonthYear;
exports.formatIsoStringToMMDDYYYY = formatIsoStringToMMDDYYYY;
exports.generateDefaultValue = generateDefaultValue;
exports.getDisplayTime = getDisplayTime;
exports.getTime = getTime;
exports.handleDateChange = handleDateChange;
exports.handleDateChangeHTML = handleDateChangeHTML;
exports.handleDateChangeOriginal = handleDateChangeOriginal;
exports.handleTimePickerParent = handleTimePickerParent;
exports.setLocalISO = setLocalISO;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
function ISO8601ToDayMonthYear(date) {
  // console.log('iso8601 date', date, date.split('T')[0])
  if (date) {
    const getDate = date === null || date === void 0 ? void 0 : date.split('T')[0];
    const parts = getDate === null || getDate === void 0 ? void 0 : getDate.split('-');
    const rearrangedDate = "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
    return rearrangedDate;
  }
}
function formatIsoStringToMMDDYYYY(date) {
  // console.log('iso8601 date', date, date.split('T')[0])
  if (date) {
    const getDate = date === null || date === void 0 ? void 0 : date.split('T')[0];
    const parts = getDate === null || getDate === void 0 ? void 0 : getDate.split('-');
    const rearrangedDate = "".concat(parts[1], "-").concat(parts[2], "-").concat(parts[0]);
    return rearrangedDate;
  }
}
function getTime(date) {
  // console.log('in getTime date', date)
  return setLocalISO(date).match(/T(.*)$/)[1];
}
function generateDefaultValue(value, datatype) {
  switch (datatype) {
    case 'datetime':
      return value;
    case 'time':
      const time = new Date(value).toLocaleTimeString('en', {
        timeStyle: 'short',
        hour12: false,
        timeZone: 'UTC'
      });
      return time;
    default:
      return value;
  }
}
function setLocalISO(date) {
  let currDate = new Date(date);
  // console.log('currDate', currDate)
  // console.log('here', currDate.getTime())
  // console.log('here', currDate.getTimezoneOffset() * 60000)
  var isoDateTime = new Date(currDate.getTime() - currDate.getTimezoneOffset() * 60000).toISOString();
  return isoDateTime;
}

// export function setLocalISO (date) {
//   // Parse the input date string
//   let inputDate = new Date(date)

//   // Get the timezone offset of the user's browser in minutes
//   let timezoneOffset = inputDate.getTimezoneOffset()

//   // Adjust the date by adding the timezone offset
//   let adjustedDate = new Date(inputDate.getTime() - timezoneOffset * 60000)

//   // Convert the adjusted date to ISO string
//   let isoDateTime = adjustedDate.toISOString().split('T')[0] // Extracting only the date part

//   return isoDateTime
// }

// export function setLocalISO (date) {
//   // Parse the input date string
//   let inputDate = new Date(date)

//   // Get the timezone offset of the user's browser in minutes
//   let timezoneOffset = inputDate.getTimezoneOffset()

//   // Adjust the date by adding the timezone offset (instead of subtracting)
//   let adjustedDate = new Date(inputDate.getTime() + timezoneOffset * 60000)

//   // Convert the adjusted date to ISO string
//   let isoDateTime = adjustedDate.toISOString().split('T')[0] // Extracting only the date part

//   return isoDateTime
// }

// function toLocalISOString(date) {
//   // Get the timezone offset in minutes, then convert it to milliseconds
//   const offset = date.getTimezoneOffset() * 60000;

//   // Subtract the offset from the date's time
//   const localISOTime = new Date(date - offset).toISOString();

//   // Slice off the 'Z' since it's not in UTC anymore
//   return localISOTime.slice(0, -1);
// }

function getDisplayTime(value, masktype, datatype) {
  let date = new Date(value.replace(/-/g, '/').replace(/T.+/, ''));
  const time = new Date(value).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC'
  });
  date.setHours(time === null || time === void 0 ? void 0 : time.split(':')[0], time.split(':')[1], 0);
  if (masktype !== 'time' && datatype !== 'time') {
    if ((time === null || time === void 0 ? void 0 : time.split(':')[0]) == '24' || (time === null || time === void 0 ? void 0 : time.split(':')[0]) == '00') {
      date.setDate(date.getDate() - 1);
    }
  }
  return time;
}
function handleDateChangeOriginal(value, dateValue, setDateValue, masktype) {
  let date = new Date(value.replace(/-/g, '/').replace(/T.+/, ''));
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
  setDateValue(setLocalISO(date).toString());
}

// export function handleDateChangeHTML (value, dateValue, setDateValue, masktype) {
//   let date = new Date(value.replace(/-/g, '/').replace(/T.+/, ''))

//   if (!masktype || masktype === 'datetime') {
//     // let date = new Date(datetime)
//     const time = new Date(dateValue).toLocaleTimeString('en', {
//       timeStyle: 'short',
//       hour12: false,
//       timeZone: 'UTC'
//     })
//     date.setHours(time?.split(':')[0], time.split(':')[1], 0)
//     if (
//       ((time?.split(':')[0] == '24' || time?.split(':')[0] == '00') &&
//         time?.split(':')[0] == '24') ||
//       time?.split(':')[0] == '00'
//     ) {
//       date.setDate(date.getDate() - 1)
//     }
//   }
//   setDateValue(setLocalISO(date).toString())
// }

function handleDateChangeHTML(value, dateValue, setDateValue, masktype) {
  let date = new Date(value.replace(/-/g, '/').replace(/T.+/, ''));
  // console.log('date', date)

  if (!masktype || masktype === 'datetime') {
    // let date = new Date(datetime)
    const time = new Date(dateValue).toLocaleTimeString('en', {
      timeStyle: 'short',
      hour12: false,
      timeZone: 'UTC'
    });
    // console.log('time', time)
    // date.setHours(time?.split(':')[0], time.split(':')[1], 0)
    // console.log('date here', date, setLocalISO(date).toString())
    // if (
    //   ((time?.split(':')[0] == '24' || time?.split(':')[0] == '00') &&
    //     time?.split(':')[0] == '24') ||
    //   time?.split(':')[0] == '00'
    // ) {
    // date.setDate(date.getDate())
    // }
    // setDateValue(setLocalISO(date).toString())
  }
  setDateValue(setLocalISO(date).toString());
}
function handleDateChange(value, dateValue, setDateValue, masktype, setShowCalendar) {
  const newDateValue = new Date(value); // Parse the input value directly into a Date object

  if (newDateValue.toISOString().split('T')[0] !== dateValue) {
    setShowCalendar(false);
  }

  // console.log('newDateValue', newDateValue)
  if (!masktype || masktype === 'datetime') {
    // let date = new Date(datetime)
    const time = new Date(dateValue).toLocaleTimeString('en', {
      timeStyle: 'short',
      hour12: false,
      timeZone: 'UTC'
    });
    // console.log('time', time)
    newDateValue.setHours(time === null || time === void 0 ? void 0 : time.split(':')[0], time.split(':')[1], 0);
    // if (
    //   ((time?.split(':')[0] == '24' || time?.split(':')[0] == '00') &&
    //     time?.split(':')[0] == '24') ||
    //   time?.split(':')[0] == '00'
    // ) {
    //   newDateValue.setDate(newDateValue.getDate() + 1)
    // }
  }
  // console.log(
  //   'setting',
  //   newDateValue,
  //   setLocalISO(newDateValue),
  //   newDateValue.toISOString()
  // )
  setDateValue(setLocalISO(newDateValue)); // Set the new date value
}
function handleTimePickerParent(value, duration, required, elementDispatch, dateValue, masktype, datatype, setDateValue) {
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
      // console.log('dateValue', dateValue)
      // console.log('value', value)
      let date = new Date(dateValue.replace(/-/g, '/').replace(/T.+/, ''));
      // console.log('unedited date', date)
      // Value is the actual time value that needs to be set
      const time = new Date(value).toLocaleTimeString('en', {
        timeStyle: 'short',
        hour12: false,
        timeZone: 'UTC'
      });
      // date.setTime(time)
      date.setHours(time === null || time === void 0 ? void 0 : time.split(':')[0], time.split(':')[1], 0);
      // console.log('get combined', setLocalISO(date))
      // console.log('get date', setLocalISO(date).replace(/T.*$/, ''))
      // console.log('get time', getTime(date))
      // setting the correct date directly so the time doesn't change the date values
      setDateValue(dateValue.split('T')[0] + 'T' + getTime(date));
    }
  }
}