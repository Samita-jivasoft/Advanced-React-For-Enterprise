import React from 'react'
import { useEffect } from 'react'
import { MainContainer, TablesContainer } from './styles'
import { SearchableTable } from './SearchableTable'
import {
  ListProvider,
  initialListState,
  listReducer,
  useConfiguration,
  useLists
} from './data'
import { TableType } from './TableType'
import { Seperator } from './Seperator'

export const SortSearchableTables = props => {
  const {
    width,
    height,
    data,
    handleParent,
    getChangedItems,
    tableConfiguration,
    setTableConfiguration,
    getTableConfiguration,
  } = props

  //dispatch to global state with lists
  const [listsState, listsDispatch] = useLists()
  const [configurationState, configurationDispatch] = useConfiguration()
  useEffect(() => {
    listsDispatch({
      type: 'INITIALIZE_DATA',
      data: data
    })
  }, [data])

  useEffect(() => {
    // console.log('configurationState', configurationState)
    // console.log('tableConfig', tableConfiguration)
    if (configurationState?.allowconfigurations)
      configurationDispatch({
        type: 'INITIALIZE_DATA',
        configurations: tableConfiguration
      })
  }, [setTableConfiguration])

  useEffect(() => {
    if (getChangedItems) {
      getChangedItems(listsState?.changeditems)
    }
  }, [listsState.changeditems])

  return (
    <MainContainer className={'main-container'} width={width} height={height}>
      {data ? (
        <TablesContainer>
          <TableType {...props} type={'fromlist'} />
          <Seperator {...props} />
          <TableType {...props} type={'tolist'} />
        </TablesContainer>
      ) : (
        <ListProvider
          key={'default'}
          initialState={initialListState}
          reducer={listReducer}
        >
          <SearchableTable {...props} key={'default'} list={''} />
        </ListProvider>
      )}
    </MainContainer>
  )
}
