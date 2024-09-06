"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractMonthYear = void 0;
exports.fillDates = fillDates;
exports.findEarliestDate = findEarliestDate;
exports.findLatestDate = findLatestDate;
exports.getCorrespondingVariables = getCorrespondingVariables;
exports.getDisplayTime = getDisplayTime;
exports.getMinDays = getMinDays;
exports.isToday = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
// Returns an object containing the month and year extracted from the date,
// both based on UTC time
const extractMonthYear = dateStr => {
  const date = new Date(dateStr);
  return {
    month: date.getUTCMonth(),
    year: date.getUTCFullYear()
  };
};

//Checks whether a given date (day) is the same as the current date (today)
exports.extractMonthYear = extractMonthYear;
const isToday = day => {
  const today = new Date();
  return day.getDate() === today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear();
};

//Finds the earliest date from an array of objects containing date strings, and return this earliest
//date in ISO 8601 string format
exports.isToday = isToday;
function findEarliestDate(data) {
  if (!data || data.length === 0) {
    return null; // Return null if the data array is empty or not provided
  }
  let earliest = new Date(data[0].date); // Assume the first date is the earliest
  for (let i = 1; i < data.length; i++) {
    const currentDate = new Date(data[i].date);
    if (currentDate < earliest) {
      earliest = currentDate;
    }
  }
  return earliest.toISOString(); // Return the earliest date as an ISO string
}

//Finds the latest date from an array of objects containing date strings, and return this latest
//date in ISO 8601 string format
function findLatestDate(data) {
  if (!data || data.length === 0) {
    return null; // Return null if the data array is empty or not provided
  }
  let latest = new Date(data[0].date); // Assume the first date is the latest
  for (let i = 1; i < data.length; i++) {
    const currentDate = new Date(data[i].date);
    if (currentDate > latest) {
      latest = currentDate;
    }
  }
  return latest.toISOString(); // Return the latest date as an ISO string
}
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

//Generates a series of objects that each represent a day, spanning from a isostart
//(start) date to an isoEnd (end) date
function fillDates(isoStart, isoEnd, timePerDate) {
  const startDate = new Date(isoStart);
  let endDate;
  if (isoEnd && !isNaN(new Date(isoEnd).getTime())) {
    endDate = new Date(isoEnd);
  } else {
    return [{
      date: startDate.toISOString(),
      startdate: startDate.toISOString(),
      enddate: startDate.toISOString(),
      starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
      endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
    }];
  }
  let objArr = [];
  const endDateStr = endDate.toISOString().split('T')[0];
  while (startDate.toISOString().split('T')[0] <= endDateStr) {
    objArr.push({
      date: startDate.toISOString(),
      startdate: startDate.toISOString(),
      enddate: startDate.toISOString(),
      starttime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.starttime,
      endtime: timePerDate === null || timePerDate === void 0 ? void 0 : timePerDate.endtime
    });
    startDate.setDate(startDate.getDate() + 1);
  }
  return objArr;
}

//Calculates a date that is a specified number of days prior to today's date, returning this date
//with the time set to the start of the day (midnight)
function getMinDays(days) {
  const currentDate = new Date(); // Get the current date and time
  // Reset hours, minutes, seconds, and milliseconds to make it start of the day
  currentDate.setHours(0, 0, 0, 0);
  if (days) {
    currentDate.setDate(currentDate.getDate() - days); // Subtract the days
  } else {
    return new Date(0); // This sets the date to January 1, 1970, UTC.
  }
  return currentDate;
}
function getCorrespondingVariables(interval, times, hoursArr, hoursRef, minArr, hours, minutes) {
  var _times$map;
  // console.log('func',e.target.value)
  const h_ = interval ? times === null || times === void 0 ? void 0 : times.map(i => i[0][0]) : hoursArr === null || hoursArr === void 0 ? void 0 : hoursArr.map(i => i[0][0]);
  const _h = interval ? times === null || times === void 0 ? void 0 : times.map(i => hours === i[0][0] ? i[0][1] : null).filter(n => n) : hoursArr === null || hoursArr === void 0 ? void 0 : hoursArr.map(i => hours === i[0][0] ? i[1][0] : null).filter(n => n);
  const m_ = interval ? times === null || times === void 0 || (_times$map = times.map(i => {
    var _hoursRef$current;
    return (hoursRef === null || hoursRef === void 0 || (_hoursRef$current = hoursRef.current) === null || _hoursRef$current === void 0 ? void 0 : _hoursRef$current.value) === i[0] ? i[1][0] : null;
  })) === null || _times$map === void 0 ? void 0 : _times$map.filter(n => n) : minArr === null || minArr === void 0 ? void 0 : minArr.map(i => i[0][0]);
  const _m = interval ? times === null || times === void 0 ? void 0 : times.map(i => minutes === i[1][0] && hoursRef.current.value === i[0] ? i[1][1] : null).filter(n => n) : minArr === null || minArr === void 0 ? void 0 : minArr.map(i => i[1][0]);
  return {
    h_,
    _h,
    m_,
    _m
  };
}