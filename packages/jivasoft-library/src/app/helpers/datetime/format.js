//Formats the given date into various string representations based on the specified format type
export function formatDate (date, format) {
  let datetime = new Date(date)

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const daysOfWeekCondensed = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  switch (format) {
    case 'year':
      return datetime?.getUTCFullYear()
    case 'month':
      return months?.[datetime.getUTCMonth()]
    case 'daysOfWeekCondensed':
      return daysOfWeekCondensed?.[datetime.getUTCDay()]
    case 'dayOfWeek':
      return daysOfWeek?.[datetime.getUTCDay()]
    case 'date':
      return datetime.getUTCDate()
    default:
      return null
  }
}

//Converts an ISO date string into a MM/DD/YY format.
export function formatIsoStringToMMDDYY (isoString) {
  const date = new Date(isoString)

  let month = '' + (date.getUTCMonth() + 1) // getUTCMonth() returns 0-11
  let day = '' + date.getUTCDate()
  let year = date.getUTCFullYear().toString().slice(-2) // Get last two digits of year

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [month, day, year].join('/')
}

//Covernts ISO string into MM-DD-YYYY format.
export function formatIsoStringToMMDDYYYY (date) {
  // console.log('iso8601 date', date, date.split('T')[0])
  if (date) {
    const getDate = date?.split('T')[0]
    const parts = getDate?.split('-')
    const rearrangedDate = `${parts[1]}-${parts[2]}-${parts[0]}`
    return rearrangedDate
  }
}

//COnverts an ISO 8601 date-time string into a better readable time format,
export function getUTCTime (isoString, is12HourFormat = false) {
  var date = new Date(isoString)
  var hour = date.getUTCHours()
  var minute = date.getUTCMinutes()
  var ampm = ''
  if (is12HourFormat) {
    ampm = hour >= 12 ? ' PM' : ' AM'
    hour = hour % 12
    hour = hour ? hour : 12 // the hour '0' should be '12'
  }
  var formattedHour = hour.toString().padStart(2, '0')
  var formattedMinute = minute.toString().padStart(2, '0')
  // Constructing the desired output
  var formattedTimeString = formattedHour + ':' + formattedMinute + ampm
  //HH:MM or HH:MM AM/PM in UTC
  return formattedTimeString
}

//Checks if a given date is within a specified range relative to the current date
//and returns the date in ISO format or the lower bound date if outside the range.
export function boundDates (dateValue, validMinimum, validMaximum) {
  const currentDate = new Date()
  const validMinimumDate = new Date(currentDate)
  validMinimumDate.setDate(currentDate.getDate() - validMinimum)

  const validMaximumDate = new Date(currentDate)
  validMaximumDate.setDate(currentDate.getDate() + validMaximum)

  if (
    isNaN(dateValue.getTime()) ||
    dateValue < validMinimumDate ||
    dateValue > validMaximumDate
  ) {
    // If the date is not valid, or is outside the range of validMinimum and validMaximum
    return validMinimumDate.toISOString()
  } else {
    return dateValue.toISOString()
  }
}

//Validates if a given string matches the ISO 8601 date format.
export function isValidISODate (dateString) {
  const regex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}:\d{2})?$/
  return regex.test(dateString)
}

// format "YYYY-MM-DD" to the format "MM/DD/YYYY"
export function returnDate (dtVal) {
  var year = dtVal.slice(0, 4)
  var month = dtVal.slice(5, 7)
  var day = dtVal.slice(8, 10)

  var dtString = month + '/' + day + '/' + year

  return dtString
}

//Converts the date and optional time information  into a standardized date and time format
export function formatDatePart (dateVar, timeVar) {
  var mL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  var year = dateVar.slice(0, 4)
  var month = dateVar.slice(5, 7)
  month = parseInt(month) - 1
  var day = dateVar.slice(8, 10)
  var dateString = ''

  if (timeVar) {
    dateString = 'January ' + 1 + ', ' + year + ' ' + timeVar + ' UTC'
  } else {
    var dummyTime = '16:00:00'
    dateString = mL[month] + ' ' + day + ', ' + year + ' ' + dummyTime + ' UTC'
  }
  const dateObj = new Date(dateString)
  var gmtHours = -dateObj.getTimezoneOffset() / 60

  return dateObj
}

//Converts a specified time into an ISO 8601 formatted string representing that time on a fixed date
//allows for input in both 24-hour and 12-hour formats, and handles AM/PM distinctions.
export function makeIsoString (hours, minutes, AMorPM, twelvehr) {
  let hour = ''
  if (
    hours !== undefined &&
    minutes !== undefined &&
    hours.length !== 0 &&
    minutes.length !== 0
  ) {
    if (twelvehr) {
      if (hours === '12' && AMorPM === 'AM') hour = '00'
      else hour = hours
      if (AMorPM === 'PM' && hours !== '12') hour = parseInt(hours, 10) + 12
      return new Date(Date.UTC(2022, 1, 1, hour, minutes, 0)).toISOString()
    } else
      return new Date(Date.UTC(2022, 1, 1, hours, minutes, 0)).toISOString()
  } else return null
}

//Ensures that the single-digit hour and minute values are displayed with a leading zero when entered
//into input fields, HH:mm format
export const leadingZeros = (e, setHours, setMinutes) => {
  if (e.target.value < 10 && e.target.value.length === 1)
    e.target.value = '0' + e.target.value
  else e.target.value = e.target.value
  // console.log('here', e.target.value)
  if (e.target.className === 'hours') setHours(e.target.value)
  if (e.target.className === 'minutes') setMinutes(e.target.value)
}

//Generates a local time in the standard ISO format but without converting
//it to Coordinated Universal Time (UTC)
export function setLocalISO (date) {
  let currDate = new Date(date)
  var isoDateTime = new Date(
    currDate.getTime() - currDate.getTimezoneOffset() * 60000
  ).toISOString()
  return isoDateTime
}
