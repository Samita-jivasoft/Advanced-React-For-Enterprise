// Returns an object containing the month and year extracted from the date,
// both based on UTC time
export const extractMonthYear = dateStr => {
  const date = new Date(dateStr)
  return { month: date.getUTCMonth(), year: date.getUTCFullYear() }
}

//Checks whether a given date (day) is the same as the current date (today)
export const isToday = day => {
  const today = new Date()
  return (
    day.getDate() === today.getDate() &&
    day.getMonth() === today.getMonth() &&
    day.getFullYear() === today.getFullYear()
  )
}

//Finds the earliest date from an array of objects containing date strings, and return this earliest
//date in ISO 8601 string format
export function findEarliestDate (data) {
  if (!data || data.length === 0) {
    return null // Return null if the data array is empty or not provided
  }
  let earliest = new Date(data[0].date) // Assume the first date is the earliest
  for (let i = 1; i < data.length; i++) {
    const currentDate = new Date(data[i].date)
    if (currentDate < earliest) {
      earliest = currentDate
    }
  }
  return earliest.toISOString() // Return the earliest date as an ISO string
}

//Finds the latest date from an array of objects containing date strings, and return this latest
//date in ISO 8601 string format
export function findLatestDate (data) {
  if (!data || data.length === 0) {
    return null // Return null if the data array is empty or not provided
  }
  let latest = new Date(data[0].date) // Assume the first date is the latest
  for (let i = 1; i < data.length; i++) {
    const currentDate = new Date(data[i].date)
    if (currentDate > latest) {
      latest = currentDate
    }
  }
  return latest.toISOString() // Return the latest date as an ISO string
}



export function getDisplayTime (value, masktype, datatype) {
  let date = new Date(value.replace(/-/g, '/').replace(/T.+/, ''))

  const time = new Date(value).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC'
  })
  date.setHours(time?.split(':')[0], time.split(':')[1], 0)

  if (masktype !== 'time' && datatype !== 'time') {
    if (time?.split(':')[0] == '24' || time?.split(':')[0] == '00') {
      date.setDate(date.getDate() - 1)
    }
  }
  return time
}

//Generates a series of objects that each represent a day, spanning from a isostart
//(start) date to an isoEnd (end) date
export function fillDates (isoStart, isoEnd, timePerDate) {
  const startDate = new Date(isoStart)
  let endDate

  if (isoEnd && !isNaN(new Date(isoEnd).getTime())) {
    endDate = new Date(isoEnd)
  } else {
    return [
      {
        date: startDate.toISOString(),
        startdate: startDate.toISOString(),
        enddate: startDate.toISOString(),
        starttime: timePerDate?.starttime,
        endtime: timePerDate?.endtime
      }
    ]
  }

  let objArr = []
  const endDateStr = endDate.toISOString().split('T')[0]

  while (startDate.toISOString().split('T')[0] <= endDateStr) {
    objArr.push({
      date: startDate.toISOString(),
      startdate: startDate.toISOString(),
      enddate: startDate.toISOString(),
      starttime: timePerDate?.starttime,
      endtime: timePerDate?.endtime
    })

    startDate.setDate(startDate.getDate() + 1)
  }

  return objArr
}

//Calculates a date that is a specified number of days prior to today's date, returning this date
//with the time set to the start of the day (midnight)
export function getMinDays (days) {
  const currentDate = new Date() // Get the current date and time
  // Reset hours, minutes, seconds, and milliseconds to make it start of the day
  currentDate.setHours(0, 0, 0, 0)
  if (days) {
    currentDate.setDate(currentDate.getDate() - days) // Subtract the days
  } else {
    return new Date(0) // This sets the date to January 1, 1970, UTC.
  }
  return currentDate
}

export function getCorrespondingVariables (
  interval,
  times,
  hoursArr,
  hoursRef,
  minArr,
  hours,
  minutes
) {
  // console.log('func',e.target.value)
  const h_ = interval ? times?.map(i => i[0][0]) : hoursArr?.map(i => i[0][0])
  const _h = interval
    ? times?.map(i => (hours === i[0][0] ? i[0][1] : null)).filter(n => n)
    : hoursArr?.map(i => (hours === i[0][0] ? i[1][0] : null)).filter(n => n)

  const m_ = interval
    ? times
        ?.map(i => (hoursRef?.current?.value === i[0] ? i[1][0] : null))
        ?.filter(n => n)
    : minArr?.map(i => i[0][0])
  const _m = interval
    ? times
        ?.map(i =>
          minutes === i[1][0] && hoursRef.current.value === i[0]
            ? i[1][1]
            : null
        )
        .filter(n => n)
    : minArr?.map(i => i[1][0])

  return { h_, _h, m_, _m }
}
