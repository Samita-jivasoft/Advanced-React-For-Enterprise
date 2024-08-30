// export function handleGenericError (result) {
//   if (result !== null) {
//     setIsLoading(false)
//     setLoginError(
//       <AnimatedError
//         text={"We couldn't log you in right now. Please try again later."}
//       />
//     )
//   } else {
//     setIsLoading(false)
//   }
// }

//TODO: maybe use this boilerplate for adding artificial delays 
import axios from 'axios';

export const makeApiCall = async (config) => {
  try {
    return new Promise((resolve, reject) => {
      const delay = 3000; // Simulate a 3-second delay

      const timeoutId = setTimeout(async () => {
        try {
          const response = await axios(config);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }, delay);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout if the request completes before the delay
      };
    });
  } catch (error) {
    throw error;
  }
};

