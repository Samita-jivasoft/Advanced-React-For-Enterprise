import React, { useEffect, useState } from 'react'
import { SortSearchableTables } from './SortSearchableTables'
import {
  ConfigurationProvider,
  ListsProvider,
  configurationReducer,
  initialLists,
  listsReducer
} from './data'
import { getInitialConfigurations } from './helpers'

export const SearchableBaseTable = props => {
  const {
    data,
    setTableConfiguration,
    getTableConfiguration,
    onSave,
    filters = true,
    selection = false,
    search = true,
    refresh = false,
    detailView = true
  } = props
  // console.log('MAIN.js setTableConfiguration', setTableConfiguration)
  // console.log(
  //   'MAIN.js initialconfig',
  //   getInitialConfigurations(
  //     setTableConfiguration,
  //     data,
  //     getTableConfiguration
  //   )
  // )
  // console.log('data', data)

  return (
    <ListsProvider initialState={initialLists} reducer={listsReducer}>
      <ConfigurationProvider
        initialState={getInitialConfigurations(
          setTableConfiguration,
          data,
          getTableConfiguration,
          onSave
        )}
        reducer={configurationReducer}
      >
        <SortSearchableTables
          {...props}
          tableConfiguration={getInitialConfigurations(
            setTableConfiguration,
            data,
            getTableConfiguration,
            onSave
          )}
        />
      </ConfigurationProvider>
    </ListsProvider>
  )
}
