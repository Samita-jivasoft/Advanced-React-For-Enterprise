import React from 'react'
import { useEffect, useState } from 'react'
import { useConfiguration, useList } from '../data'
import { TransferItems } from './TransferItems'
import { DynamicButtonV2 } from '../../../general'
import { CrudListActions } from './CrudListActions'
import { CrudActionsContainer } from './styles'

export const Crud = props => {
  const { children, headerColor, bodyColor, textColor, selected } = props
  const [listState, listDispatch] = useList()
  const [configurationState, configurationDispatch] = useConfiguration()

  //TODO: handle selected items
  const [selecteditems, setSelecteditems] = useState([])
  useEffect(() => {
    if (listState?.crudlistitems) {
      setSelecteditems([
        ...listState.crudlistitems.filter(row => row._selected === true)
      ])
    }
  }, [listState.crudlistitems])

  const [settingsModified, setSettingsModified] = useState(false)
  useEffect(() => {
    if (configurationState.allowconfigurations) {
      let modified = false

      // if current table config doesn't match the current list
      if (configurationState?.tableconfiguration?.savedconfigs) {
        configurationState?.tableconfiguration?.savedconfigs?.map(config => {
          if (config.setconfig) {
            // check if current config is any different than listState
            for (let key in config.tableconfig) {
              if (config.tableconfig[key] !== listState[key]) {
                modified = true
              }
            }
            // check if current columns is any different than listState
            if (
              JSON.stringify(listState.columns) !==
              JSON.stringify(config.configurationcolumns)
            )
              modified = true
          }
        })
      }

      // // check listState against all configs available
      // configurationState.tableconfiguration.savedconfigs.map(config => {
      //   // check if current config is any different than listState
      //   for (let key in config.tableconfig) {
      //     if (config.tableconfig[key] !== listState[key]) {
      //       modified = true
      //     }
      //   }
      //   // check if current columns is any different than listState
      //   if (
      //     JSON.stringify(listState.columns) !==
      //     JSON.stringify(config.configurationcolumns)
      //   )
      //     modified = true
      // })
      // console.log(listState)

      if (modified) {
        setSettingsModified(true)
      } else {
        setSettingsModified(false)
      }
    }
  }, [listState])

  return (
    ((listState.crudaction && listState.crudaction.length > 0) ||
      (children && children.length > 0) ||
      (selecteditems && selecteditems.length > 0)) && (
      <CrudActionsContainer>
        {selecteditems && selecteditems.length > 0 && <TransferItems />}
        {listState.crudaction && listState.crudaction.length > 0 && (
          <CrudListActions />
        )}
        {false &&
          configurationState.tableconfiguration !== false &&
          settingsModified && (
            <DynamicButtonV2
              text={'Save Table Configurations'}
              backgroundColor={listState.buttoncolor}
              color={listState.textcolor}
              onClick={() =>
                listDispatch({
                  type: 'SET_SHOW_TABLE_SETTINGS',
                  currentTableSettings: 1
                })
              }
            />
          )}
        {children && children.length > 0 && children}
      </CrudActionsContainer>
    )
  )
}
