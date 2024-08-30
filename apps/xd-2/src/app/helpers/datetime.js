// // The datetime functions are now imported from jivasoft library
// export function formatDate(date, format) {
//     let datetime = new Date(date);

//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     const daysOfWeekCondensed = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//     var months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//     ];
//     switch (format) {
//         case 'year':
//             return datetime?.getUTCFullYear();
//         case 'month':
//             return months?.[datetime.getUTCMonth()];
//         case 'daysOfWeekCondensed':
//             return daysOfWeekCondensed?.[datetime.getUTCDay()];
//         case 'dayOfWeek':
//             return daysOfWeek?.[datetime.getUTCDay()];
//         case 'date':
//             return datetime.getUTCDate();
//         default:
//             return null;
//     }
// }

// export function formatIsoStringToMMDDYY(isoString) {
//     const date = new Date(isoString);

//     let month = '' + (date.getUTCMonth() + 1); // getUTCMonth() returns 0-11
//     let day = '' + date.getUTCDate();
//     let year = date.getUTCFullYear().toString().slice(-2); // Get last two digits of year

//     if (month.length < 2)
//         month = '0' + month;
//     if (day.length < 2)
//         day = '0' + day;

//     return [month, day, year].join('/');
// }
// export function boundDates(dateValue, validMinimum, validMaximum) {
//     const currentDate = new Date();
//     const validMinimumDate = new Date(currentDate);
//     validMinimumDate.setDate(currentDate.getDate() - validMinimum);

//     const validMaximumDate = new Date(currentDate);
//     validMaximumDate.setDate(currentDate.getDate() + validMaximum);

//         if (isNaN(dateValue.getTime()) || dateValue < validMinimumDate || dateValue > validMaximumDate) {
//             // If the date is not valid, or is outside the range of validMinimum and validMaximum
//             return validMinimumDate.toISOString();
//         } else {
//             return dateValue.toISOString();
//         }
    
// }
// export function isValidISODate(dateString) {
//     const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}:\d{2})?$/;
//     return regex.test(dateString);
// }

// export function getUTCTime(isoString, is12HourFormat = false) {
//     var date = new Date(isoString);

//     var hour = date.getUTCHours();
//     var minute = date.getUTCMinutes();

//     var ampm = '';
//     if (is12HourFormat) {
//         ampm = hour >= 12 ? ' PM' : ' AM';
//         hour = hour % 12;
//         hour = hour ? hour : 12; // the hour '0' should be '12'
//     }

//     var formattedHour = hour.toString().padStart(2, '0');
//     var formattedMinute = minute.toString().padStart(2, '0');

//     // Constructing the desired output
//     var formattedTimeString = formattedHour + ':' + formattedMinute + ampm;
// //HH:MM or HH:MM AM/PM in UTC
//     return formattedTimeString; 
// }
