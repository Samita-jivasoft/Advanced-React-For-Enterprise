export const initialConfiguration = {}

export function configurationReducer (state, action) {
  const tableconfiguration = state.tableconfiguration
  const excludedBEFields = [
    'crudid',
    'crudlistitems',
    'crudlistitems',
    'excludedsearchresults',
    'searchresults',
    'tableconfiguration',
    'childid',
    'childobjname',
    'nextsp',
    'nextstructtype',
    'parentid',
    'parentobjname',
    'reviewrequired',
    'stepid',
    'selection',
    'initialcrudlistitems',
    'showtablesettingsmodal',
    'showfiltersmodal',
    'crudaction'
  ]

  const excludedFields = [
    'crudid',
    'childid',
    'childobjname',
    'nextsp',
    'nextstructtype',
    'parentid',
    'parentobjname',
    'reviewrequired',
    'stepid',
    'crudlistitems',
    'crudlistitems',
    'searchresults',
    'excludedsearchresults',
    'initialcrudlistitems',
    'showtablesettingsmodal',
    'showfiltersmodal',
    'crudaction'
  ]

  switch (action.type) {
    case 'RESET_STATE':
      return action.payload
    case 'INITIALIZE_DATA':
      // console.log('here', action.configurations)
      // state['tableconfiguration'] = action.configurations
      return { ...state, ...action.configurations }
    case 'ADD_CONFIGURATION':
      // console.log(state)
      if (tableconfiguration && tableconfiguration !== false) {
        // console.log(action.currentListState)
        // console.log(action.currentConfigLabel)
        const newconfig = Object.fromEntries(
          Object.entries(action.currentListState).filter(
            ([key]) => !excludedBEFields.includes(key)
          )
        )
        newconfig['configurationlabel'] = action.currentConfigLabel
        newconfig['configurationid'] = action.currentConfigLabel
        newconfig['setconfig'] = true
        const listExists =
          tableconfiguration?.length > 0 &&
          tableconfiguration?.some(
            list => list.listid === action.currentListState.crudlistid
          )
        if (listExists) {
          // Configuration exists, update its savedconfigs
          const configExists = tableconfiguration
            .filter(
              list => list.listid === action.currentListState.crudlistid
            )[0]
            .savedconfigs.some(
              config => config.configurationid === newconfig.configurationid
            )
          if (!configExists) {
            const updatedTableConfig = tableconfiguration?.map(list => {
              if (list?.listid === action?.currentListState?.crudlistid) {
                const configs = JSON.parse(JSON.stringify(list.savedconfigs))
                configs.unshift(newconfig)
                return {
                  ...list,
                  savedconfigs: configs.map(config =>
                    config.configurationid === action.currentConfigLabel
                      ? {
                          ...config,
                          setconfig: true
                        }
                      : {
                          ...config,
                          setconfig: false
                        }
                  )
                }
              }
              return list
            })
            state['tableconfiguration'] = updatedTableConfig
          }
        } else {
          // Configuration does not exist, add a new entry
          state['tableconfiguration'] = [
            ...tableconfiguration,
            {
              listid: action.currentListState.crudlistid,
              savedconfigs: [newconfig]
            }
          ]
        }
      }
      return { ...state }
    case 'SET_CONFIGURATION':
      const selectedconfig = action.currentConfiguration
      var updatedTableConfig = tableconfiguration?.map(list => {
        if (list?.listid === selectedconfig?.crudlistid) {
          const configs = JSON.parse(JSON.stringify(list.savedconfigs))
          // console.log(configs)
          return {
            ...list,
            savedconfigs: configs?.map(config =>
              config?.configurationid === selectedconfig?.configurationid
                ? {
                    ...config,
                    setconfig: true
                  }
                : {
                    ...config,
                    setconfig: false
                  }
            )
          }
        }
        return list
      })
      state['tableconfiguration'] = updatedTableConfig
      return { ...state }
    case 'CLEAR_CONFIGURATIONS':
      var updatedTableConfig = tableconfiguration?.map(list => {
        if (list?.listid === action?.listid) {
          const configs = JSON.parse(JSON.stringify(list.savedconfigs))
          // console.log(configs)
          return {
            ...list,
            savedconfigs: configs?.map(config => ({
              ...config,
              setconfig: false
            }))
          }
        }
        return list
      })
      state['tableconfiguration'] = updatedTableConfig
      return { ...state }
    case 'UPDATE_CONFIGURATION':
      var update = action.currentList
      // console.log('updating config', update)
      const defaultconfig = {
        crudlistid: 'D40B8DFE-2C2E-4416-AB3A-41C85F169F19',
        label: 'Details',
        idcolumn: 'DetailID',
        type: 'fromlist',
        layout: 'tabs',
        configurationid: 'DEFAULT',
        setconfig: true
      }

      const newconfig = Object.fromEntries(
        Object.entries(update).filter(([key]) => !excludedFields.includes(key))
      )
      newconfig['setconfig'] = true
      // console.log('newconfig', newconfig)
      // console.log('tableconfig before', tableconfiguration)

      var updatedTableConfig = tableconfiguration?.map(list => {
        // console.log('list', list)
        if (list.listid === update.crudlistid) {
          // console.log('update here')
          return {
            ...list,
            savedconfigs: list?.savedconfigs?.map(obj =>
              obj.configurationid === update.configurationid ? newconfig : obj
            )
          }
        }
        return list
      })
      // state.getTableConfiguration(updatedTableConfig)
      state['tableconfiguration'] = updatedTableConfig
      return { ...state }
    case 'DELETE_CONFIGURATION':
      // var currList = action.listid
      // var currConfig = action.configid
      // console.log('tableconfiguration', tableconfiguration)
      var updatedTableConfig = tableconfiguration.map(list => {
        if (list?.listid === action?.currentList?.crudlistid) {
          if (list?.savedconfigs?.length > 0) {
            return {
              ...list,
              savedconfigs: list.savedconfigs.filter(
                config =>
                  config.configurationid !== action.currentList.configurationid
              )
            }
          }
        }
        return list
      })
      state['tableconfiguration'] = updatedTableConfig
      return { ...state }
    case 'UPDATE_PARENT':
      console.log(action.sendToParent)
      return { ...state, getTableConfiguration: action.sendToParent }
    default:
      return state
  }
}
