//Checks an array of objects for missing start or end times within each object, ensuring that all
//required time data is provided for dates.
export function validateDates (array) {
  const isMissingTimes = array.some(item => !item.starttime || !item.endtime)

  if (isMissingTimes) {
    return 'Enter start and end times for the selected dates'
  }

  return false
}

//Validates parts of a date string formatted as "MM/DD" to check if they are valid months and days
export function isValidPart (dateStr) {
  const parts = dateStr.split('/')

  if (parts[0]) {
    if (parts[0].length === 1 && !/^[0-1]$/.test(parts[0])) return false
    if (parts[0].length === 2 && !/^(0[1-9]|1[0-2])$/.test(parts[0]))
      return false
    if (parts[0].length > 2) return false // Ensure month part doesn't exceed two digits
  }

  if (parts[1]) {
    if (parts[1].length === 1 && !/^[0-3]$/.test(parts[1])) return false
    if (parts[1].length === 2) {
      const day = parseInt(parts[1], 10)
      if (day < 1 || day > 31) return false

      if (parts[0].length === 2) {
        const month = parseInt(parts[0], 10)
        if (month === 2 && day > 29) return false // Simplistic February check
        if (day === 31 && ![1, 3, 5, 7, 8, 10, 12].includes(month)) return false
      }
    }
    if (parts[1].length > 2) return false // Ensure day part doesn't exceed two digits
  }

  // No need to validate year part for partial inputs like "MM/DD"

  return true
}
