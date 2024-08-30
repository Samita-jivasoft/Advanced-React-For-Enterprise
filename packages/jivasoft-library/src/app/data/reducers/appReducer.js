import { steptypes } from 'app/constants'

// export const CHANGE_THEME = 'APP/THEME/CHANGE_THEME'
export const initialAppState = {
  user: { name: '', friendlyname: '', email: '' },
  steptypes: steptypes,
  ui: { showNav: true, showSearch: true, navExpanded: false },

  header: {
    title: 'Home',
    items: [],
    rightIcons: [],
    subText: '',
    preText: '',
    size: 'normal'
  },
  modal: null,

  apps: [],
  currentApp: null,

  modules: [],
  currentModule: null,

  menus: [],
  currentMenu: null,

  menuGroups: [],
  currentWorkflow: null,

  agencies: [],
  currentAgencies: [],
  currentAgency: null
}

export function appReducer (state, action) {
  switch (action.type) {
    case 'UNSET_MODAL':
      state['modal'] = null
      return { ...state }
    case 'SET_MODAL':
      state['modal'] = action.currentModal
      return { ...state }
    case 'SET_HEADER':
      state['header'].title = action.title
        ? action.title
        : state['header'].title
      state['header'].items = action.items
        ? action.items
        : state['header'].items
      state['header'].rightIcons = action.rightIcons
        ? action.rightIcons
        : state['header'].rightIcons
      state['header'].subText = action.subText
        ? action.subText
        : state['header'].subText
      state['header'].preText = action.preText
        ? action.preText
        : state['header'].preText
      state['header'].size = action.size ? action.size : state['header'].size
      return { ...state }
    case 'SELECT_WORKFLOW':
      state.currentWorkflow = action.currentWorkflow
      return { ...state, currentWorkflow: action.currentWorkflow }
    case 'UNSELECT_WORKFLOW':
      // state.currentWorkflow = action.currentWorkflow
      let header = (state['header'] = {
        title: 'Home',
        items: [],
        rightIcons: [],
        subText: '',
        preText: ''
      })
      return { ...state, currentWorkflow: null, header: header }
    case 'SELECT_AGENCY':
      //console.log('agency selected')
      state.currentAgency = action.currentAgency
      return { ...state, currentAgency: action.currentAgency }
    case 'UNSELECT_AGENCY':
      //console.log('agency unselected')
      state.currentAgency = null
      return { ...state, currentAgency: null }
    case 'APPSTATE_HIDE_NAV':
      state['ui'].showNav = false
      state['ui'].navExpanded = false
      return { ...state }
    case 'APPSTATE_SHOW_NAV':
      state['ui'].showNav = true
      state['ui'].navExpanded = action.expanded
      return { ...state }
    case 'APPSTATE_HIDE_SEARCH':
      state['ui'].showSearch = false
      return { ...state }
    case 'APPSTATE_SHOW_SEARCH':
      state['ui'].showSearch = true
      return { ...state }
    case 'APPSTATE_INIT':
      const usercontext = action.usercontext[0]
      const apps = usercontext.applications ? usercontext.applications : []
      //for every app, for every module
      const agencies = []
      const modules = []
      const menus = []
      const menuGroups = []
      const workflows = []
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
                        menugroup.workflows.map(workflow => {
                          workflows.push(workflow)
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

      return {
        ...state,
        apps: apps.flat(1),
        agencies: agencies.flat(1),
        modules: modules.flat(1),
        menus: menus.flat(1),
        menuGroups: menuGroups.flat(1),
        workflows: workflows.flat(1)
      }

    default:
      console.log('context error')
      return { ...state }
  }
}
