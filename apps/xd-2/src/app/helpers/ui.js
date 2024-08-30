import { getBreakpoint } from '@jivasoft/jivasoft-lib/dist/app/helpers/ui.js'

export const detectScroll = (ref, value) => {
  let scrollvalue = 'none'

  if (ref.current) {
    const { scrollTop, scrollHeight, clientHeight } = ref.current
    // console.log(scrollTop,scrollHeight,clientHeight);
    if (scrollTop <= scrollHeight / 4) {
      console.log(scrollTop, scrollHeight / 4)
      scrollvalue = 'none'
    } else {
      scrollvalue = 'fourth'
    }

    // if (scrollTop + clientHeight === scrollHeight) {
    // }
  }
  return scrollvalue
}

/**
 * Sets the UI state based on the viewport width, current workflow, and optionally a custom configuration.
 *
 * @param {function} dispatch - The dispatch function to update the UI state.
 * @param {number} viewWidth - The current width of the viewport.
 * @param {string} currentWorkflow - The current workflow state.
 * @param {object} [customConfig=null] - An optional custom configuration object to override default settings.
 */
export const setUIStates = (
  dispatch,
  viewWidth,
  currentWorkflow,
  customConfig = null
) => {
  // Get the breakpoint based on the viewport width
  const breakpoint = getBreakpoint(viewWidth) 

  // If a custom configuration is provided, use it to set the UI state and return early
  if (customConfig) {
    dispatch({ type: 'SET_UI', ...customConfig })
    return
  }

  // Base state object for common properties
  const baseState = { type: 'SET_UI', showNav: true, navExpanded: false }

  // Set the UI state based on the calculated breakpoint
  switch (breakpoint) {
    case 'md':
    case 'mdscreen':
      // Medium screen: show navigation but do not expand it
      dispatch(baseState)
      break
    case 'lg':
    case 'xl':
    case 'ldscreen':
      // Large screen: expand navigation if no current workflow, otherwise collapse it
      dispatch({ ...baseState, navExpanded: !currentWorkflow })
      break
    default:
      // Small screen: hide navigation and collapse it
      dispatch({ type: 'SET_UI', showNav: false, navExpanded: false })
  }
}
