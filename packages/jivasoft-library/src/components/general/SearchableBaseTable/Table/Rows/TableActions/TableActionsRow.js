import React from 'react'
import { useList } from '../../../data'
import { Filters, QuickFilters } from '../../../Filtering'
import { SearchAll, SearchField } from '../../../Searching'
import { GroupingDropZone } from '../../../Grouping'

export const TableActionsRow = props => {
  const { tableRef, setQuickFilters } = props
  const [listState, listDispatch] = useList()
  return (
    <>
      {/* TODO: show quickfilters if there are quickfilters labeled in data
    Need to update Switcher to show these quickfilters
  */}
      <QuickFilters setQuickFilters={setQuickFilters} />
      {listState.searching === 1 && <SearchField tableRef={tableRef} />}
      <SearchAll />
      <Filters />
      {listState?.grouping?.showgroups && <GroupingDropZone />}
    </>
  )
}
