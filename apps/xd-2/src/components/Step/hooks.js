import { getMetaConfig, saveMetaConfig } from 'app/api'
import { useEffect, useState, useCallback } from 'react'

/**
 * A custom hook to fetch step configuration.
 *
 * @param {Object} authState - Authentication state containing the token.
 * @param {Object} stepState - State related to the current step and workflow.
 * @return {Object} simple containing loading status, data, and error information.
 */
export function useStepConfig (authState, stepState) {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    // Define the async function within the useEffect
    const fetchConfig = async () => {
      try {
        setLoading(true)
        const stepConfig = await getMetaConfig(
          authState.token,
          {
            step: [
              { workflowid: stepState?.workflowid, stepid: stepState?.stepid }
            ]
          },
          stepState?.stepstate?.feconfig
        )
       
        setConfig(JSON.parse(stepConfig)) // Assuming stepConfig is already in the desired format; parse it if necessary
      } catch (e) {
        setError(e)
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    // Call the fetch function if the required dependencies are present
    if (
      authState?.token &&
      stepState?.workflowid &&
      stepState?.stepid &&
      stepState?.stepstate?.feconfig == 1
    ) {
      fetchConfig()
    }
  }, [stepState?.workflowid, stepState?.stepid]) // Depend on authState and stepState to refetch when they change

  return { config, loading, error }
}

/**
 * A custom hook to save step configuration.
 *
 * @param {Object} authState - Authentication state containing the token.
 * @param {Object} stepState - State related to the current step and workflow.
 * @return {Function} A function to trigger the save operation, along with the operation's status.
 */
export function useSaveStepConfig (authState, stepState) {
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const saveConfig = useCallback(
    async config => {
      setIsSaving(true)
      setError(null)
      setSuccess(false)
      try {
        await saveMetaConfig(authState.token, {
          step: [
            {
              workflowid: stepState?.workflowid,
              stepid: stepState?.stepid,
              value: JSON.stringify(config)
            }
          ]
        })
       
        setSuccess(true)
      } catch (e) {
        setError(e)
        console.error(e)
      } finally {
        setIsSaving(false)
      }
    },
    [authState.token, stepState?.workflowid, stepState?.stepid]
  )

  return { saveConfig, isSaving, saveError, success }
}

export default useStepConfig
