//This function is moved to app/helpers/calculation

// export function getMinDays(days) {
//     const currentDate = new Date(); // Get the current date and time
//     // Reset hours, minutes, seconds, and milliseconds to make it start of the day
//     currentDate.setHours(0, 0, 0, 0); 
//     if(days){
//       currentDate.setDate(currentDate.getDate() - days); // Subtract the days

//     } else{
//       return new Date(0); // This sets the date to January 1, 1970, UTC. 

//     }
//     return currentDate;
//   }