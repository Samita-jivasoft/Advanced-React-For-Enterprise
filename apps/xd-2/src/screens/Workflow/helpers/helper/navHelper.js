import { PRIMARY_COLOR } from 'app/globalStyles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { generateStepContext } from '../step'
import { generateUUID } from 'app/helpers'
import {
  AnimatedErrorPane,
  LoaderSpinner
} from '@jivasoft/jivasoft-lib/dist/components'

// Function to determine if a button should be displayed based on navigationid and runsaveproc properties
export function getButton (navItem) {
  if (navItem?.navigationid !== undefined && navItem?.navigationid !== '') {
    return true
  } else if (navItem?.runsaveproc == 1) {
    return true
  } else {
    return false
  }
}

// Function to create a "Cancel" button with specific behavior based on the appState and stepState
export function createCancelButton (
  appState,
  stepState,
  stepDispatch,
  appDispatch,
  headerDispatch,
  hasCancel
) {
  if (
    !hasCancel &&
    appState?.currentWorkflowType !== 'startup' &&
    stepState?.stepstate?.nocancel != 1
  ) {
    return {
      label: 'Cancel',
      backgroundColor: 'maroon',
      buttonFunc: () => {
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      }
    }
  }
  return null
}

// Function to sort navigation buttons by their sequence property
export function sortNavigationButtons (buttons) {
  return buttons.sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
}

// Function to categorize buttons and then sort them within their categories
export function categorizeAndSortButtons (buttons) {
  // Remove null or undefined entries first
  buttons = buttons.filter(item => item !== null && item !== undefined)

  // Then proceed with categorizing and sorting
  let cancelButtons = buttons.filter(
    item => item?.label?.toLowerCase() === 'cancel'
  )
  let runSaveProcButtons = buttons.filter(item => item.runsaveproc === 1)
  let componentNavButtons = buttons.filter(item => item.isComponentNav)
  let remainingButtons = buttons.filter(
    item =>
      !item.isComponentNav &&
      item.runsaveproc !== 1 &&
      item?.label?.toLowerCase() !== 'cancel'
  )

  runSaveProcButtons = sortNavigationButtons(runSaveProcButtons)
  componentNavButtons = sortNavigationButtons(componentNavButtons)
  remainingButtons = sortNavigationButtons(remainingButtons)

  return [
    ...remainingButtons,
    ...componentNavButtons,
    ...runSaveProcButtons,
    ...cancelButtons
  ]
}

// Function to handle API calls and execute different actions based on the result
export function handleApiCall (result, navItem, dispatchers) {
  const { stepDispatch, appDispatch, headerDispatch, messageDispatch } =
    dispatchers

  if (result.error !== null) {
    //sad path
    console.log('sad')
    appDispatch({
      type: 'SET_MODAL',
      currentModal: (
        <AnimatedErrorPane
          onClose={() => {
            appDispatch({ type: 'UNSET_MODAL' })
          }}
          text={`Error with this step. Please try again later.`}
          detail={result.error.message}
        />
      )
    })
  } else if (result.message) {
    appDispatch({ type: 'UNSET_MODAL' })
    result?.message?.messages?.map(message => {
      if (message?.formelements?.length > 0) {
        var copyMessage = JSON.parse(JSON.stringify(message))
        copyMessage.duration = null
        copyMessage.id = generateUUID()
        messageDispatch({ type: 'ADD_MESSAGE', message: copyMessage })
      }
    })
  } else {
    //unset loader...
    appDispatch({ type: 'UNSET_MODAL' })

    //If the apicall has .then()'d, and not returned an error... AND refreshusercontext is 1:
    if (navItem?.refreshusercontext == 1) {
      //just reload
      // TODO: enable this when a testable case is available.
      // window.location.reload()
    } else {
      //otherwise, behave normally
      if (!navItem?.navigationid) {
        // TODO: Does this case ever run?; getButton() seems to prevent this case from happening...

        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      } else {
        generateStepContext(stepDispatch, result.apiData)
      }
    }
  }
}

// Function to determine the button style based on its label and state
export function determineButtonStyle (navItem, submitButtonDisabled) {
  const baseStyle = {
    icon: null,
    iconPosition: 'left',
    backgroundColor: null,
    label: navItem?.label,
    runsaveproc: navItem?.runsaveproc,
    color: false,
    stroke: false,
    isSubmit: null,
    disabled: false
  }
  switch (navItem?.label.toLowerCase()) {
    case 'next':
      return {
        ...baseStyle,
        icon: <FaChevronRight />,
        iconPosition: 'right',
        backgroundColor: PRIMARY_COLOR
      }

    case 'submit':
      const submitNavItem = {
        selected: 1,
        navigationid: navItem?.navigationid,
        validationrequired: navItem?.validationrequired,
        currentstepid: navItem?.currentstepid
      }
      return {
        ...baseStyle,
        disabled: submitButtonDisabled,
        iconPosition: 'left',
        backgroundColor: PRIMARY_COLOR,
        icon: submitButtonDisabled ? <LoaderSpinner size={2} /> : null,
        isSubmit: true,
        submitNavItem: submitNavItem
      }
    case 'back':
      return {
        ...baseStyle,
        icon: <FaChevronLeft />,
        backgroundColor: PRIMARY_COLOR
      }
    case 'cancel':
      return {
        ...baseStyle,
        backgroundColor: 'maroon'
      }
    default:
      return {
        ...baseStyle,
        stroke: true,
        color: PRIMARY_COLOR,
        stroke: true
      }
  }
}
