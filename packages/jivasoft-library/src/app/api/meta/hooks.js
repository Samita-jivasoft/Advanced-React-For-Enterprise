import { useEffect, useState } from 'react'
import { putMeta } from './meta'

/**
 * A custom hook to handle the PUT request to the specified endpoint.
 *
 * This hook initiates a PUT request using the `putMeta` function and manages the
 * loading, result, and error states of the request.
 *
 * @param {Object} params - The parameters for the PUT request.
 * @param {string} params.endpoint - The API endpoint to send the request to.
 * @param {string} params.token - The authentication token for the request.
 * @param {Object} params.data - The data to be sent in the PUT request.
 * @param {AbortSignal} [params.signal] - An optional AbortSignal to cancel the request.
 * @return {Object} - An object containing the state of the request.
 * @return {Object|null} result - The result data from the PUT request, or null if the request has not been completed.
 * @return {boolean} loading - A boolean indicating if the request is in progress.
 * @return {Object|null} error - An error object if an error occurred during the request, or null if no error occurred.
 * @return {Function} fetchData - A function to manually trigger the PUT request.
 */
export function usePutMetaCall({ endpoint, token, data, signal }) {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)  // Initial state set to false

  const fetchData = async () => {
    setLoading(true)  // Start loading
    try {
      const response = await putMeta(endpoint, token, data, signal)
      if (response.error) {
        throw new Error(response.error.message)
      }
      setResult(response.apiData)  // Update result with the API data
    } catch (e) {
      setError(e)  // Set error
      console.error(e)  // Log the error
    } finally {
      setLoading(false)  // Stop loading
    }
  }

  useEffect(() => {
    fetchData()
    //TODO: Should data be a dependent here?
  }, [endpoint, token, signal])  // Re-fetch data when dependencies change

  return { result, loading, error, fetchData }
}
