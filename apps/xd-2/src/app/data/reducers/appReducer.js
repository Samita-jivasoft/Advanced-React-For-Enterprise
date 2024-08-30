import { login } from 'app/api'
import { theme } from 'app/globalStyles'
import { useState } from 'react'
import { steptypes } from '@jivasoft/jivasoft-lib/dist/app/constants/stepTypes'

// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'

export const initialAppState = {
  user: { name: '', friendlyname: '', email: '' },

  steptypes: steptypes,

  isSuspended: false,

  modal: null,

  apps: [],
  currentApp: null,

  modules: [],
  currentModule: null,

  menus: [],
  currentMenu: null,
  buildnumber: null,
  menuGroups: [],
  currentWorkflow: null,
  //bandaid for modal-type workflows
  currentWorkflowModal: null,
  currentWorkflowType: null,
  pinnedWorkflows: [],

  agencies: [],
  currentAgencies: [],
  currentAgency: null,
  pinnedAgencies: []
}

export function appReducer (state, action) {
  switch (action.type) {
    case 'UNSET_MODAL':
      state['modal'] = null
      return { ...state }
    case 'SET_MODAL':
      state['modal'] = action.currentModal
      return { ...state }
    case 'SELECT_WORKFLOW':
      if (action.isSuspended === undefined) {
        state['isSuspended'] = false
      } else {
        state['isSuspended'] = action.isSuspended
      }
      state.currentWorkflowType = action.currentWorkflowType
      state.currentWorkflow = action.currentWorkflow
      return {
        ...state,
        currentWorkflow: action.currentWorkflow,
        currentWorkflowType: action.currentWorkflowType
      }
    case 'SET_WORKFLOW_MODAL':
      state['currentWorkflowModal'] = action.currentWorkflow
      return { ...state }
    case 'UNSET_WORKFLOW_MODAL':
      state['currentWorkflowModal'] = null
      state['currentWorkflowType'] = null
      return { ...state }
    case 'UNSELECT_WORKFLOW':
      // state.currentWorkflow = action.currentWorkflow
      state['currentworkflow'] = null
      state['currentWorkflowType'] = null
      if (state['currentWorkflowModal']) {
        state['currentWorkflowModal'] = null
      }
      return { ...state, currentWorkflow: null }
    case 'SELECT_AGENCY':
      state.currentAgency = action.currentAgency
      return { ...state, currentAgency: action.currentAgency }
    case 'UNSELECT_AGENCY':
      state.currentAgency = null
      return { ...state, currentAgency: null }
    case 'ADD_PINNED_AGENCY':
      return {
        ...state,
        pinnedAgencies: [...state.pinnedAgencies, action.agency]
      }
    case 'REMOVE_PINNED_AGENCY':
      var agencyItem = action.agency
      var copyPinnedAgencies = state.pinnedAgencies
      var index = copyPinnedAgencies.findIndex(
        item => item.agencyid === agencyItem.agencyid
      )
      if (index !== -1) {
        copyPinnedAgencies.splice(index, 1)
      }
      return { ...state, pinnedAgencies: [...copyPinnedAgencies] }
    case 'ADD_PINNED_WORKFLOW':
      return {
        ...state,
        pinnedWorkflows: [...state.pinnedWorkflows, action.workflow]
      }
    case 'REMOVE_PINNED_WORKFLOW':
      var workflowItem = action.workflow
      var copyPinnedWorkflows = state.pinnedWorkflows
      var index = copyPinnedWorkflows.findIndex(
        item => item.workflowid === workflowItem.workflowid
      )
      if (index !== -1) {
        copyPinnedWorkflows.splice(index, 1)
      }
      return { ...state, pinnedWorkflows: [...copyPinnedWorkflows] }
    case 'APPSTATE_INIT':
      const usercontext = action.usercontext[0]
      const apps = usercontext.applications ? usercontext.applications : []
      //for every app, for every module
      const agencies = []
      const modules = []
      const menus = []
      const menuGroups = []
      const workflows = []
      const startupworkflow = usercontext?.startupworkflow?.[0]
      const buildnumber = usercontext?.buildnumber
      const user = {
        name: usercontext?.name,
        friendlyname: usercontext?.friendlyname,
        email: usercontext?.email
      }
      if (apps.length > 0) {
        apps.map(app => {
          if (app.modules) {
            app.modules.map(module => {
              app.modules.length > 0 && modules.push(module)
              if (module.agencies) {
                module.agencies.length > 0 && agencies.push(module.agencies)
              }
              if (module.menus) {
                module.menus.map(menu => {
                  menus.push(menu)
                  if (menu.menugroups) {
                    menu.menugroups.map(menugroup => {
                      menuGroups.push(menugroup)
                      if (menugroup.workflows) {
                        menugroup.workflows.map((workflow, index) => {
                          workflows.push({
                            ...workflow,
                            dashboardSequence: index
                          })
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
      //console.log(workflows)
      return {
        ...state,
        apps: apps.flat(1),
        agencies: agencies.flat(1),
        modules: modules.flat(1),
        menus: menus.flat(1),
        menuGroups: menuGroups.flat(1),
        workflows: workflows
          .flat(1)
          .filter(
            workflow =>
              workflow.workflowid !== '11DF4062-28FA-4886-A7B4-F918BED2E4C7' &&
              workflow.workflowid !== '22BBB007-2360-43C2-911E-5F1D1D0358FE'
          ),
        user: user,
        profile: workflows?.find(
          workflow =>
            workflow?.workflowid === '11DF4062-28FA-4886-A7B4-F918BED2E4C7'
        ),
        submitfeedback: workflows?.find(
          workflow =>
            workflow?.workflowid === '22BBB007-2360-43C2-911E-5F1D1D0358FE'
        ),

        startupworkflow: startupworkflow,
        buildnumber: buildnumber
      }
    case 'RESET_APP':
      state['user'] = { name: '', friendlyname: '', email: '' }
      state['steptypes'] = steptypes
      state['isSuspended'] = false
      state['modal'] = null
      state['apps'] = []
      state['currentApp'] = null
      state['modules'] = []
      state['currentModule'] = null
      state['menus'] = []
      state['currentMenu'] = null
      state['menuGroups'] = []
      state['currentWorkflow'] = null
      state['currentModalWorkflow'] = null
      state['currentWorkflowType'] = null
      state['pinnedWorkflows'] = []
      state['agencies'] = []
      state['currentAgencies'] = []
      state['currentAgency'] = null
      state['pinnedAgencies'] = []
      return { ...state }
    default:
      console.log('context error')
      return { ...state }
  }
}
