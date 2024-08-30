import axios from 'axios'

/**
 * Fetches the user's IP address and location information.
 *
 * This function performs the following steps:
 * 1. Retrieves the user's IP address using the ipify API.
 * 2. Uses the retrieved IP address to fetch location data from the ipapi API.
 * 3. Returns the IP address and location coordinates (latitude and longitude) if available.
 * 4. Logs errors if any issues occur during the API requests.
 * 5. Returns `null` if there is an error or if the IP or location data is not available.
 *
 * @async
 * @function fetchIpInformation
 * @returns {Promise<{ ip: string, location: { lat: number, lng: number } } | null>}
 *   A promise that resolves to an object containing the IP address and location data, or `null` if an error occurs.
 *   - `ip`: The user's IP address.
 *   - `location`: An object with `lat` (latitude) and `lng` (longitude) properties representing the user's location.
 * @throws {Error} If there is an issue with fetching data from the APIs.
 */
export const fetchIpInformation = async () => {
  try {
    const ipResponse = await axios.get('https://api.ipify.org?format=json')
    // console.log('ipResponse', ipResponse)
    if (ipResponse.data && ipResponse.data.ip) {
      const ip = ipResponse.data.ip

      const locationResponse = await axios.get(`https://ipapi.co/${ip}/json/`)
      if (locationResponse.data) {
        const locationData = locationResponse.data
        const lat = locationData.latitude
        const lng = locationData.longitude

        // return any relavent information based on the ip
        return { ip, location: { lat, lng } }
      }
    }
  } catch (error) {
    console.error('Error fetching the IP or location:', error)
  }

  return null // Return null if there's an error
}
