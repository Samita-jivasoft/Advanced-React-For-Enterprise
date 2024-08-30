import React, { createRef, useState } from 'react'
import { useEffect } from 'react'
import { SearchableTableContainer } from './styles'
import { useViewport } from 'app/data'
import { Crud } from './Crud'
import { useConfiguration, useList, useLists } from './data'
import { Table, calculateColumnWidths } from './Table'

export const SearchableTable = props => {
  const {
    list,
    children,
    setTableConfiguration,
    getTableConfiguration,
    tableConfiguration,
    selection,
    search,
    filters,
    detailView,
    grouping,
    refresh
  } = props
  const { viewWidth, viewHeight } = useViewport()
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()
  const [configurationState, configurationDispatch] = useConfiguration()
  const tableRef = createRef()

  useEffect(() => {
    // console.log('{ ...list, ...tableConfiguration }', {
    //   ...list,
    //   ...tableConfiguration
    // })
    listDispatch({
      type: 'INITIALIZE_DATA',
      // configuration: currentConfig,
      currentListProps: { ...list, ...tableConfiguration } ?? [],
      selection: selection,
      search: search,
      filters: filters,
      detailView: detailView,
      grouping: grouping,
      refresh: refresh
    })
  }, [list, setTableConfiguration])

  useEffect(() => {
    // console.log('SEARCHABLETABLE.js configurationState', configurationState.tableconfiguration)
    // console.log('SEARCHABLETABLE.js listState', listState)
    if (configurationState?.allowconfigurations) {
      configurationDispatch({
        type: 'UPDATE_CONFIGURATION',
        currentList: listState
      })
    }
  }, [listState, listsState])

  useEffect(() => {
    // console.log('configurationState', configurationState)
    if (
      configurationState?.allowconfigurations &&
      configurationState.getTableConfiguration
    ) {
      // getTableConfiguration(configurationState?.tableconfiguration)
      configurationState.getTableConfiguration(
        configurationState?.tableconfiguration
      )
    }
  }, [configurationState])

  useEffect(() => {
    if (tableRef?.current && listState.setrowposition === 1) {
      tableRef.current.scrollToRow(listState.viewableRows, 'start')
      listDispatch({
        type: 'RESET_ROW_POSITION',
        currentSetRowPosition: 0
      })
    }
    listDispatch({
      type: 'SET_COLUMNS',
      columns: listState?.columns.map(col => {
        return {
          ...col,
          _width: calculateColumnWidths(tableRef, listState, listsState)
        }
      })
    })
  }, [viewWidth, viewHeight, listState.setrowposition, listState.crudlistitems])

  return (
    <SearchableTableContainer
      horizontal={true}
      className={'table-container'}
      // padding={
      //   listIndex !== listsState?.lists?.length - 1 &&
      //   listsState.layout != 'tabs'
      // }
      //TODO: fix padding in respect to the number of to and from lists
    >
      <Table tableRef={tableRef} />
      <Crud children={children} />
    </SearchableTableContainer>
  )
}
