import { putMeta } from 'app/api'
import { PRIMARY_COLOR } from 'app/globalStyles'
import { FaChevronRight } from 'react-icons/fa'
import { buildResponse } from '@jivasoft/jivasoft-lib/dist/app/helpers/submit'
import {
  APIModal,
  DynamicButtonV2
} from '@jivasoft/jivasoft-lib/dist/components'
import {
  getButton,
  handleApiCall,
  determineButtonStyle,
  createCancelButton,
  categorizeAndSortButtons
} from './helper/navHelper'

//getComponentNavigation
export function getComponentNavigation (
  appDispatch,
  stepState,
  stepDispatch,
  apiNavigation
) {
  const nav = [] //Stores the generated nav buttons
  switch (stepState.steptype) {
    case 'form':
      if (stepState.stepstatus) {
        if (stepState.stepstatus.isreview !== undefined) {
          if (stepState.stepstatus.isreview) {
            break
          } else {
            if (apiNavigation) {
              //Find and Remove Submit button
              var submit = apiNavigation.find(
                navItem => navItem.label === 'Submit'
              )
              if (submit) {
                apiNavigation.splice(apiNavigation.indexOf(submit), 1)
              }
            }
            nav.push({
              disabled: !stepState.stepisvalid,
              label: 'Review',
              icon: <FaChevronRight />,
              backgroundColor: PRIMARY_COLOR,
              color: 'white',
              iconPosition: 'right',
              animate: stepState.stepisvalid,
              buttonFunc: () => {
                // console.log('button clicked', stepState)
                stepDispatch({
                  type: 'MODIFY_STEP_STATUS',
                  stepstatus: { isreview: true }
                })
                getComponentNavigation(appDispatch, stepState, stepDispatch)
              },
              animate: stepState.stepisvalid
            })
          }
        }
      }
      break
    default:
      // console.log('error!')
      // nav.push(<DynamicButtonV2
      // color={'white'}
      // backgroundColor={'red'}
      //     onClick={() => {
      //       appDispatch({ type: 'UNSELECT_WORKFLOW' })
      //     }}
      //     text={'Cancel'}
      //   />)
      break
  }
  return nav
}

//getApiNavigation
export function getApiNavigation (
  stepNavigation,
  appState,
  stepState,
  stepDispatch,
  token,
  appDispatch,
  messageDispatch,
  createController,
  cancelController,
  submitButtonDisabled,
  disableSubmitButton,
  enableSubmitButton,
  headerDispatch
) {
  // IF navigationid === NULL
  // buttonFunc = () => {
  //     stepDispatch({ type: 'CLEAR_STEP_DATA' })
  //     appDispatch({ type: 'UNSELECT_WORKFLOW' })

  // }
  const nav = stepNavigation.map(navItem => {
    let {
      icon,
      iconPosition,
      backgroundColor,
      color,
      stroke,
      isSubmit,
      disabled
    } = determineButtonStyle(navItem, submitButtonDisabled)

    let buttonFunc = () => {
      return null
    }

    //Determine whether or not the button can navigate to a new step
    if (getButton(navItem)) {
      buttonFunc = () => {
        navItem['selected'] = 1
        const response = buildResponse(appState, stepState, navItem)
        // Disable the submit button
        disableSubmitButton()
        appDispatch({
          type: 'SET_MODAL',
          currentModal: (
            <APIModal
              duration={15000}
              cancel={() => {
                if (cancelController) {
                  cancelController()
                }
              }}
              message={'This is taking longer than expected.'}
            />
          )
        })
        const controller = createController ? createController() : null
        putMeta(token, response, controller?.signal).then(result => {
          // Enable the submit button after processing
          enableSubmitButton()
          // console.log(result)
          handleApiCall(result, navItem, {
            stepDispatch,
            appDispatch,
            headerDispatch,
            messageDispatch
          })
        })
      }
    } else {
      buttonFunc = () => {
        /*   {
        //     "navigationid": "",
        //     "agencyrequired": "0",
        //     "validationrequired": 0,
        //     "runsaveproc": 0,
        //     "sequence": 0,
        //     "priority": 0,
        //     "apicall": 0,
        //     "apicallwithstep": 0,
        //     "type": "",
        //     "refreshusercontext": 1,
        // }
        TODO: TEST: if button has refreshusercontext, refresh the app to render current wfs*/
        if (navItem?.refreshusercontext) {
          window.location.reload()
        }
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      }
    }
    // console.log('HEREERE', submitButtonDisabled)
    return {
      disabled: disabled,
      navigationid: navItem?.navigationid,
      label: navItem?.label,
      icon: icon,
      color: color ? color : 'white',
      stroke: stroke,
      iconPosition: iconPosition,
      backgroundColor: backgroundColor,
      runsaveproc: navItem?.runsaveproc,
      buttonFunc: buttonFunc,
      isSubmit: isSubmit
    }
  })
  return nav
}
export function getNavigation (
  stepNavigation,
  appState,
  stepState,
  stepDispatch,
  token,
  appDispatch,
  messageDispatch,
  createController,
  cancelController,
  submitButtonDisabled,
  disableSubmitButton,
  enableSubmitButton,
  headerDispatch
) {
  //HERE
  // console.log('submitButtonDisabled', submitButtonDisabled)
  let apiNavigation = getApiNavigation(
    stepNavigation,
    appState,
    stepState,
    stepDispatch,
    token,
    appDispatch,
    messageDispatch,
    createController,
    cancelController,
    submitButtonDisabled,
    disableSubmitButton,
    enableSubmitButton,
    headerDispatch
  )

  let componentNavigation = getComponentNavigation(
    appDispatch,
    stepState,
    stepDispatch,
    apiNavigation
  )
  // Mark component navigation items
  componentNavigation.forEach(item => {
    item.isComponentNav = true
  })
  // Concatenate componentNavigation and apiNavigation
  let returnNav = componentNavigation.concat(apiNavigation)
  const hasCancel = returnNav.some(
    item => item?.label?.toLowerCase() === 'cancel'
  )
  let cancelButton = createCancelButton(
    appState,
    stepState,
    stepDispatch,
    appDispatch,
    headerDispatch,
    hasCancel
  )
  returnNav.push(cancelButton)
  // Get the buttons categorized and then sort them within their categories
  let sortedNav = categorizeAndSortButtons(returnNav)
  // Generate navigation components
  let navigation = sortedNav.map((buttonData, index) => {
    // console.log('buttonData', buttonData)
    return (
      <DynamicButtonV2
        key={buttonData?.label + 'button' + index}
        disabled={buttonData?.disabled}
        text={buttonData?.label}
        icon={buttonData?.icon}
        color={buttonData?.color ? buttonData?.color : 'white'}
        iconPosition={buttonData?.iconPosition}
        backgroundColor={buttonData?.backgroundColor}
        stroke={buttonData?.stroke}
        isRunSaveProc={buttonData?.runsaveproc}
        isComponentNav={buttonData?.isComponentNav}
        isSubmit={buttonData?.isSubmit}
        onClick={buttonData.buttonFunc}
        animate={buttonData.animate}
      />
    )
  })
  return navigation
}
