import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { VscFilter } from 'react-icons/vsc'
import {
  ActionsContainer,
  HeaderRow,
  SearchableTableContainer,
  StyledHeaderButton,
  StyledHeaderText,
  StyledRightSide,
  StyledRow,
  TableAndActionsContainer,
  TableContainer,
  TableContent
} from './styles'
import { useLists } from './data/ListsContext'
import { getIdentifier, highlight } from './HelperFunctions'
import { TransferItems } from './TransferItems'
import { DetailView } from './DetailView'
import { Groups } from './Groups'
import { RefreshList } from './RefreshList'
import { Table } from './Table/Main'
import { CrudListActions } from './Crud'
import { Filter, filterData, Filters, QuickFilters } from './Filtering'
import { handleSorting, searchSort } from './Sorting'
import { SearchButton, SearchField } from './Searching'

export const SearchableTable = props => {
  const {
    headerColor,
    bodyColor,
    textColor,
    list,
    itemFrom,
    children,
    handleTransfer,
    filters = true,
    selection = true,
    search = true,
    detailView,
    groups,
    crudfunctions
  } = props

  //tablestate from context
  const [listsState] = useLists()

  // console.log(listsState.columns)
  const firstColumn =
    listsState.columns.length > 0 &&
    listsState.columns[0].crudcolumnid.toLowerCase()
  // console.log(listsState.columns[0].crudcolumnid)

  // sort information should be handled internally because we are clicking different fields
  // this means all lists have their own internal sortInfo state
  const [sortInfo, setSortInfo] = useState({
    sortField: firstColumn,
    sortOrder: 'asc'
  })

  // initialize sorted table
  const [tableData, setTableData] = useState(
    list.crudlistitems && list.crudlistitems.length > 0
      ? handleSorting(
          list.crudlistitems,
          sortInfo.sortField,
          sortInfo.sortOrder
        )
      : []
  )

  // handle searching
  const [openSearch, setOpenSearch] = useState(false)
  const [searchColumn, setSearchColumn] = useState([])

  // for highlighting only
  const columnRef = useRef([])
  const allColumns = columnRef.current
  const [activeColumn, setActiveColumn] = useState([])

  // handle checkboxes and selected items
  const [selected, setSelected] = useState([])
  const [checkAll, setCheckAll] = useState(false)
  useEffect(() => {
    // if selected is not equal to numb of items or there are no items, setCheckAll to false
    // this is to make sure that the checkall box is always accurate
    if (
      selected.length !== (list.crudlistitems && list.crudlistitems.length) ||
      (list.crudlistitems && list.crudlistitems.length === 0)
    ) {
      setCheckAll(false)
    }
    setTableData(tableData)
  }, [handleTransfer, itemFrom])

  // TODO: ADD filters to table reducer
  // handle filters based on criteria and current list
  const [criteria, setCriteria] = useState([])

  // if openSearch is active and seperate results and other entries
  // TODO: ADD searchResults to table Reducer
  // TODO: TEST with selected, handleTransder, itemFrom
  const [searchResults, setSearchResults] = useState({
    results: [],
    others: []
  })
  useEffect(() => {
    // console.log('searchInput', listsState.searchInput)
    // get search results and other list
    if (list.crudlistitems && list.crudlistitems.length > 0) {
      var filtered = filterData(criteria, list.crudlistitems)
      if (openSearch) {
        let [results, exclude] = searchSort(
          // if there are filters use tableData list else use og list: list.crudlistitems
          filtered,
          searchColumn,
          listsState.searchInput,
          sortInfo.sortField,
          sortInfo.sortOrder
        )
        // console.log('results', results)
        // console.log('exclude', exclude)
        setTableData(results.concat(exclude)) // has to be here because when you remove a search from a column
        setSearchResults({ results: results, exclude: exclude })
      } else {
        setTableData(filtered)
        setSearchResults({ results: [], exclude: [] })
      }
    }
  }, [
    // selected,
    // handleTransfer, // needed to update search list with transfered items
    // itemFrom, // needed to update search list with transfered items
    openSearch, // update tableData with search or not
    searchColumn, // for when a column is selected/deselected
    listsState.searchInput,
    list.crudlistitems,
    sortInfo,
    criteria
  ])

  useEffect(() => {
    tableData &&
      tableData.length > 0 &&
      document.getElementById('row' + tableData[0].detailid) &&
      document
        .getElementById('row' + tableData[0].detailid)
        .scrollIntoView({ behavior: 'auto', block: 'end' })
  }, [tableData])

  // TODO: FIX highlighting
  // useEffect(() => {
  //   // get fields of active columns
  //   // console.log(allColumns, searchColumn)
  //   // console.log('search Column', searchColumn)
  //   // console.log(allColumns)
  //   const columns = Object.entries(allColumns)
  //     .map(i =>
  //       searchColumn
  //         .map(x => {
  //           // console.log('searchColumn', x)
  //           // console.log('allcol', i[0])
  //           // console.log('matches', i[0].includes(x))
  //           return i[0].includes(x) ? i[1] : null
  //         })
  //         .filter(n => n)
  //     )
  //     .filter(e => e.length)
  //   // console.log('columns', columns)
  //   // make sure columns is always being updated
  //   setActiveColumn(columns)
  //   // function: higlights characters matched to searchInput based on active columns
  //   highlight(columns, listsState.searchInput)
  // }, [tableData, searchColumn])

  const [showDetailView, setShowDetailView] = useState(false) // show DetailView screen
  const [detail, setDetail] = useState({}) // set DetailView item
  const [measurements, setMeasurements] = useState({ height: '', width: '' })
  useEffect(() => {
    detailView &&
      list.crudlistitems &&
      list.crudlistitems.length > 0 &&
      setMeasurements({
        height:
          document.getElementById('table').clientHeight +
          document.getElementById('actionscontainer').clientHeight,
        width: document.getElementById('table').clientWidth
      })
  }, [])

  // show quickFilters
  const [quickFilters, setQuickFilters] = useState(true)
  return (
    <SearchableTableContainer>
      <TableAndActionsContainer
        id={'tableContainer'}
        detailView={
          detailView && Object.keys(detail).length > 0 && showDetailView
        }
      >
        <TableContainer id={'table'}>
          <TableContent>
            {(list.label || filters || search) && (
              <HeaderRow>
                <StyledRow>
                  <div>{list.label}</div>
                  <StyledRightSide>
                    {search && !openSearch && (
                      <SearchButton
                        list={list}
                        firstColumn={firstColumn}
                        setOpenSearch={setOpenSearch}
                        setSearchColumn={setSearchColumn}
                      />
                    )}
                    {!quickFilters && (
                      <StyledHeaderButton onClick={() => setQuickFilters(true)}>
                        <VscFilter size={'20px'} />
                        <StyledHeaderText>Quick Filters</StyledHeaderText>
                      </StyledHeaderButton>
                    )}
                    {filters && (
                      <Filter
                        criteria={criteria}
                        setCriteria={setCriteria}
                        parentState={''}
                      />
                    )}
                    {groups && <Groups />}
                    {true && <RefreshList />}
                  </StyledRightSide>
                </StyledRow>
                {openSearch && (
                  <SearchField
                    list={list}
                    openSearch={openSearch}
                    tableData={tableData}
                    sortInfo={sortInfo}
                    setTableData={setTableData}
                    allColumns={allColumns}
                    firstColumn={firstColumn}
                    searchColumn={searchColumn}
                    activeColumn={activeColumn}
                    setOpenSearch={setOpenSearch}
                    setSearchResults={setSearchResults}
                    setCheckAll={setCheckAll}
                    setSearchColumn={setSearchColumn}
                    setActiveColumn={setActiveColumn}
                  />
                )}
                {/* show quickfilters if there are quickfilters labeled in data */}
                {listsState.columns &&
                  listsState.columns.map(i => i.quickfilter).includes(true) && (
                    <QuickFilters
                      criteria={criteria}
                      setCriteria={setCriteria}
                      quickFilters={quickFilters}
                      setQuickFilters={setQuickFilters}
                    />
                  )}
                <Filters criteria={criteria} setCriteria={setCriteria} />
              </HeaderRow>
            )}
            <Table
              list={list}
              tableData={tableData}
              setTableData={setTableData}
              searchResults={searchResults}
              selection={selection}
              openSearch={openSearch}
              checkAll={checkAll}
              setCheckAll={setCheckAll}
              setSelected={setSelected}
              selected={selected}
              searchColumn={searchColumn}
              sortInfo={sortInfo}
              setSortInfo={setSortInfo}
              setSearchColumn={setSearchColumn}
              allColumns={allColumns}
              headerColor={headerColor}
              bodyColor={bodyColor}
              textColor={textColor}
              itemFrom={itemFrom}
              setDetail={setDetail}
              handleTransfer={handleTransfer}
              detailView={detailView}
              setShowDetailView={setShowDetailView}
              crudfunctions={crudfunctions}
            />
          </TableContent>
        </TableContainer>

        {((selected && selected.length !== 0) ||
          (list.crudaction && list.crudaction.length > 0) ||
          (children && children.length > 0)) && (
          <ActionsContainer id={'actionscontainer'}>
            {selected && selected.length > 0 && (
              <TransferItems
                headerColor={headerColor}
                bodyColor={bodyColor}
                textColor={textColor}
                list={list}
                selected={selected}
                itemFrom={itemFrom}
                handleTransfer={handleTransfer}
                setSelected={setSelected}
                setCheckAll={setCheckAll}
                setTableData={setTableData}
              ></TransferItems>
            )}
            {list.crudaction && list.crudaction.length > 0 && (
              <CrudListActions list={list} crudfunctions={crudfunctions} />
            )}
            {children && children.length > 0 && children}
          </ActionsContainer>
        )}
      </TableAndActionsContainer>

      {detailView && Object.keys(detail).length > 0 && showDetailView && (
        <DetailView
          list={list}
          detail={detail}
          setShowDetailView={setShowDetailView}
          measurements={measurements}
          crudfunctions={crudfunctions}
        />
      )}
    </SearchableTableContainer>
  )
}
