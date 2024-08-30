import React, { useState, useEffect } from 'react'
import { useStep, useSuspend, useAppTheme, useHeader } from 'app/data'
import { useApp } from 'app/data/context/AppContext'
import html2canvas from 'html2canvas'
import {
  WorkflowButton,
  OverlayDiv,
  ImgModal,
  ImgDiv,
  FooterDiv,
  LeftIcon,
  WorkflowCounterDiv,
  ModalButton,
  ScrollImgDiv,
  StickySideDiv,
  ModalDiv,
  StyledBsChevronRight
} from '.'
import { AnimatedDynamicModal } from '@jivasoft/jivasoft-lib/dist/components'
import { steptypes } from '@jivasoft/jivasoft-lib/dist/app/constants/stepTypes'

export const SuspendedWorkflow = () => {
  const [appState, appDispatch] = useApp()
  const { value, value2 } = useSuspend()
  const [stepState, stepDispatch] = useStep()
  const [themeState, dispatch] = useAppTheme()
  const [suspendState, suspendDispatch] = value
  const imageRef = value2
  const [showImgModal, setShowImgModal] = useState(true)
  const [showWorkflowModal, setShowWorkflowModal] = useState(true)
  const [, headerDispatch] = useHeader()

  useEffect(() => {
    if (suspendState.suspendState.length === 0) {
      setShowWorkflowModal(true)
      setShowImgModal(false)
    }
  }, [suspendState])

  function generateStepContext (stepDispatch, data) {
    const isStepType = Object.keys(data).filter(key => {
      return steptypes.includes(key)
    })
    //If there's one step type
    if (isStepType.length === 1) {
      stepDispatch({
        type: 'SET_STEP',
        stepstatus: null,
        steptype: null,
        stepstate: null,
        stepid: null,
        workflowid: null
      })
      let stepstatus = null
      switch (isStepType[0]) {
        //if that one type is a form...
        case 'form':
          if (data.form[0].reviewrequired === 1) {
            stepstatus = { isreview: false }
          }
          break
      }
      stepDispatch({
        type: 'SET_STEP',
        stepstatus: stepstatus,
        steptype: isStepType[0],
        stepstate: data,
        stepid: data.stepid,
        workflowid: data.workflowid
      })
    } else {
      //handle multiple steptypes
      // stepDispatch({ type: 'SET_STEP', steptype: null, stepstate: data, stepid: data.stepid, workflowid: data.workflowid })
    }
  }

  function GenerateID () {
    let id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
    return id
  }

  async function PushState (stepState) {
    var uniqueId = GenerateID()

    if (suspendState.suspendState.length != 0) {
      for (var i = 0; i < suspendState.suspendState.length; i++) {
        if (uniqueId === suspendState.suspendState[i].id) {
          while (uniqueId != suspendState.suspendState[i].id) {
            uniqueId = GenerateID()
          }
        }
      }
    }

    var imgResult = await GetScreenshot()

    var stateObject = {
      stepState: stepState,
      suspendStateWorkflow: appState.currentWorkflow,
      suspendStateAgency: appState.currentAgency,
      id: uniqueId,
      imageURI: imgResult
    }
    if (imgResult !== null) {
      suspendDispatch({ type: 'PUSH', payload: stateObject })
      setShowImgModal(true)
    } else {
      return
    }
  }

  async function GetScreenshot () {
    try {
      return await html2canvas(imageRef.current).then(function (canvas) {
        return canvas.toDataURL()
      })
    } catch (error) {
      return null
    }
  }

  function RepopulateWorkflow (suspendState, stateId) {
    if (suspendState.suspendState.length != 0 && stateId !== null) {
      var selectedSuspendState = suspendState.suspendState.find(
        item => item.id === stateId
      )
      var selectedStepState = selectedSuspendState.stepState
      var selectedStepStateIndex = suspendState.suspendState.findIndex(
        item => item.id === stateId
      )
      var selectedStepData = selectedStepState.stepdata

      if (selectedStepStateIndex < suspendState.suspendState.length - 1) {
        appDispatch({
          type: 'SET_MODAL',
          currentModal: (
            <AnimatedDynamicModal
              type={'modal'}
              dismissable={0}
              backgroundColor={themeState.currentTheme.bgSolid}
              themeColor={themeState.currentTheme.overlayDimmest}
              fontColor={themeState.currentTheme.text}
              headerText={
                'Are you sure you want to lose your progress on the previous workflows?'
              }
            >
              <ModalDiv>
                <ModalButton
                  onClick={() => {
                    PopulateDefaultValue(
                      selectedSuspendState,
                      selectedStepState,
                      selectedStepData,
                      selectedStepStateIndex
                    )
                    appDispatch({ type: 'UNSET_MODAL' })
                  }}
                >
                  Yes
                </ModalButton>

                <ModalButton
                  onClick={() => appDispatch({ type: 'UNSET_MODAL' })}
                >
                  Cancel
                </ModalButton>
              </ModalDiv>
            </AnimatedDynamicModal>
          )
        })
      } else if (
        selectedStepStateIndex ===
        suspendState.suspendState.length - 1
      ) {
        PopulateDefaultValue(
          selectedSuspendState,
          selectedStepState,
          selectedStepData,
          selectedStepStateIndex
        )
      } else {
        return
      }
    }
  }

  function PopulateDefaultValue (
    selectedSuspendState,
    selectedStepState,
    selectedStepData,
    selectedStepStateIndex
  ) {
    if (selectedStepState.steptype === 'form') {
      selectedStepState.stepstate.form[0].formelements.map(item => {
        var stepDataItem = selectedStepData.find(
          dataItem => dataItem.formelementid === item.formelementid
        )
        if (item.datatype === 'picklist') {
          if (
            stepDataItem.selectoptions &&
            stepDataItem.selectoptions.length != 0
          ) {
            item.defaultvalue = stepDataItem.selectoptions[0].id
          } else {
            item.defaultvalue = ''
          }
        } else {
          item.defaultvalue = stepDataItem.value
        }
      })
      //if last item in array, launch workflow
      //else'
      if (appState.currentWorkflow) {
        appDispatch({ type: 'UNSELECT_AGENCY' })
        stepDispatch({ type: 'CLEAR_STEP_DATA' })
        appDispatch({ type: 'UNSELECT_WORKFLOW' })
        headerDispatch({ type: 'RESET_HEADER' })
      }
      setTimeout(() => {
        appDispatch({
          type: 'SELECT_AGENCY',
          currentAgency: selectedSuspendState.suspendStateAgency
        })
        appDispatch({
          type: 'SELECT_WORKFLOW',
          currentWorkflow: selectedSuspendState.suspendStateWorkflow,
          isSuspended: true
        })
        if (selectedSuspendState?.suspendStateWorkflow?.modal !== 1) {
          headerDispatch({
            type: 'SET_HEADER',
            title: selectedSuspendState?.suspendStateWorkflow?.friendlyname
              ? selectedSuspendState?.suspendStateWorkflow?.friendlyname
              : ''
            // items:
            // size:'normal'
          })
        }
        generateStepContext(stepDispatch, selectedStepState.stepstate)
        suspendDispatch({
          type: 'REMOVE_STATE',
          payload: selectedStepStateIndex
        })
      }, '0')
    } else {
      return
    }
  }

  return (
    <OverlayDiv>
      <FooterDiv>
        <WorkflowButton
          onClick={() => {
            //takeScreenshot(imgRef.current);
            //setShowImgModal(true);
            PushState(stepState)
          }}
        >
          Suspend Workflow
        </WorkflowButton>

        <WorkflowButton
          onClick={() => {
            suspendDispatch({ type: 'DELETE_ALL' })
            setShowImgModal(false)
            setShowWorkflowModal(true)
          }}
        >
          Delete All Workflow
        </WorkflowButton>
      </FooterDiv>

      {showImgModal && (
        <OverlayDiv>
          <ImgModal width={showWorkflowModal ? '80' : '5'}>
            {!showWorkflowModal ? (
              <WorkflowCounterDiv>
                {suspendState.suspendState.length}
              </WorkflowCounterDiv>
            ) : null}

            {showWorkflowModal ? (
              <>
                <StickySideDiv>
                  <StyledBsChevronRight
                    onClick={() => setShowWorkflowModal(false)}
                  />
                </StickySideDiv>
                <ScrollImgDiv>
                  {suspendState.suspendState.map((item, idx) => {
                    return (
                      <ImgDiv
                        opacity={
                          idx === suspendState.suspendState.length - 1
                            ? 100
                            : 70
                        }
                      >
                        <img
                          width={'80%'}
                          height={'100%'}
                          src={item.imageURI}
                          alt={''}
                          onClick={() =>
                            RepopulateWorkflow(suspendState, item.id)
                          }
                        />
                      </ImgDiv>
                    )
                  })}
                </ScrollImgDiv>
              </>
            ) : (
              <>
                <LeftIcon onClick={() => setShowWorkflowModal(true)} />
              </>
            )}
          </ImgModal>
        </OverlayDiv>
      )}
    </OverlayDiv>
  )
}
