import React, { useState, useEffect } from 'react'
import { useApp, useUI } from 'app/data'
import { useHeader, useViewport } from 'app/data'
import { MenuGroupBorder, RightIcon, WorkflowPinIcon } from '.'
import { sm } from 'app/constants'
import { setUIStates } from 'app/helpers'

export const MobileGroupItem = ({
  menuItem,
  setMenuData,
  setExtendBar,
  setSelectedItem,
  handleReturnList
}) => {
  const [pin, setPin] = useState(false)
  const [appState, appDispatch] = useApp()
  const [uiState, uiDispatch] = useUI()
  const [, headerDispatch] = useHeader()
  const { viewWidth } = useViewport()
  const arrItem = handleReturnList(menuItem)

  useEffect(() => {
    if (appState.pinnedWorkflows && appState.pinnedWorkflows.length > 0) {
      if (
        appState.pinnedWorkflows.find(
          item => item.workflowid === menuItem.workflowid
        )
      ) {
        setPin(true)
      }
    }
  }, [])

  useEffect(() => {
    //console.log(appState.pinnedWorkflows)
  }, [appState.pinnedWorkflows])

  useEffect(() => {
    if (menuItem.hasOwnProperty('workflowid')) {
      if (pin) {
        appDispatch({ type: 'ADD_PINNED_WORKFLOW', workflow: menuItem })
      } else if (pin === false && appState.pinnedWorkflows.length > 0) {
        appDispatch({ type: 'REMOVE_PINNED_WORKFLOW', workflow: menuItem })
      }
    }
  }, [pin])

  return (
    <>
      {/* {arrItem &&  */}
      <MenuGroupBorder
        draggable
        onClick={e => {
          if (menuItem.hasOwnProperty('workflowid')) {
            // setMenuData([])
            // setBarSelect(false)
            setMenuData([])
            setSelectedItem([])
            //UI UPDATES
            setUIStates(uiDispatch, viewWidth, appState.currentWorkflow, null)

            if (appState?.currentWorkflow) {
              appDispatch({ type: 'UNSELECT_WORKFLOW' })
              headerDispatch({ type: 'RESET_HEADER' })
            }
            //console.log(menuItem)
            if (appState.currentWorkflow) {
              appDispatch({ type: 'UNSELECT_WORKFLOW' })
              headerDispatch({ type: 'RESET_HEADER' })
              setTimeout(() => {
                appDispatch({
                  type: 'SELECT_WORKFLOW',
                  currentWorkflow: menuItem,
                  isSuspended: false
                })
                if (menuItem.modal !== 1) {
                  headerDispatch({
                    type: 'SET_HEADER',
                    title: menuItem?.friendlyname ? menuItem?.friendlyname : ''
                    // items:
                    // size:'normal'
                  })
                }
              }, '0')
            } else {
              appDispatch({
                type: 'SELECT_WORKFLOW',
                currentWorkflow: menuItem,
                isSuspended: false
              })
              if (menuItem.modal !== 1) {
                headerDispatch({
                  type: 'SET_HEADER',
                  title: menuItem?.friendlyname ? menuItem?.friendlyname : ''
                  // items:
                  // size:'normal'
                })
              }
            }
          } else {
            if (arrItem) {
              setMenuData(menuData => [...menuData, menuItem])
              setSelectedItem(selectedItem => [...selectedItem, menuItem])
            }
            //check if workflow
            //set context
          }
        }}
      >
        {menuItem.friendlyname}
        <RightIcon />
      </MenuGroupBorder>
      {menuItem.hasOwnProperty('workflowid') ? (
        <WorkflowPinIcon
          color={pin ? 'lightgreen' : 'white'}
          onClick={() => setPin(pin => !pin)}
        />
      ) : null}
    </>
  )
}
