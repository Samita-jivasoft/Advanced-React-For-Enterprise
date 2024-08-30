import React from 'react'
import { useEffect, useState } from 'react'
import { useConfiguration, useList, useLists } from '../../../data'
import { SearchButton } from '../../../Searching'
import { FilterButton, QuickFiltersButton } from '../../../Filtering'
import { GroupingButton } from '../../../Grouping'
import { SaveSettingsButton } from '../TableSettings'
import { TableSettingsButton } from '../TableSettings/TableSettingsButton'
import { RefreshListButton } from '../../../Crud'
import { Modal } from '../../TableView'

export const TableActionButtons = props => {
  const { tableRef, refresh } = props
  // show quickFilters
  const [listState] = useList()
  const [listsState] = useLists()
  const [configurationState, configurationDispatch] = useConfiguration()
  const [quickFilters, setQuickFilters] = useState(true)

  //TODO: remove !listState.grouping when grouping plays well with searching and filtering
  return (
    <>
      {!listState?.searching && !listState?.grouping?.showgroups && (
        <SearchButton tableRef={tableRef} />
      )}
      {!quickFilters && false && (
        <QuickFiltersButton setQuickFilters={setQuickFilters} />
      )}
      {listState?.filters && !listState?.grouping?.showgroups && (
        <FilterButton />
      )}
      {listState?.grouping &&
        listState?.searching != 1 &&
        listState?.showfiltersmodal != 1 && <GroupingButton />}
      {listState?.refresh && <RefreshListButton />}
      <TableSettingsButton tableRef={tableRef} />
      {configurationState?.onSave && (
        <SaveSettingsButton
          themeColor={listState.themecolor}
          textColor={listState.textcolor}
        />
      )}
      {false && <Modal tableRef={tableRef} />}
    </>
  )
}
