import React from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt
} from 'react-icons/fa'
import { useLists } from '../data'
import { handleSorting, searchSort } from './SortingFunctions'

export const ColumnSorting = props => {
  const {
    column,
    tableData,
    setTableData,
    sortInfo,
    searchColumn,
    openSearch,
    setSortInfo
  } = props
  const [listsState] = useLists()
  const crudcolumnid = column.crudcolumnid.toLowerCase()

  // console.log('searchColumn', searchColumn)

  const handleSortingChange = column => {
    // console.log(column, sortInfo.sortField)
    const sortOrder = sortInfo.sortOrder === 'asc' ? 'desc' : 'asc'
    setSortInfo({
      sortField: column,
      sortOrder: sortOrder
    })
    // if search is open sort two lists else sort entire table based on column
    if (openSearch) {
      let [results, exclude] = searchSort(
        tableData,
        searchColumn,
        listsState.searchInput,
        column,
        sortOrder
      )
      // console.log('column sorting results', results)
      setTableData(results.concat(exclude))
      // console.log('setting tableData in ColumnSorting, sorting', tableData)
    } else {
      setTableData(handleSorting(tableData, column, sortOrder))
      // console.log('setting tableData in ColumnSorting, no sorting', tableData)
    }
  }

  const SortedAlpha =
    sortInfo.sortOrder === 'asc' && crudcolumnid === sortInfo.sortField
      ? FaSortAlphaDownAlt
      : FaSortAlphaDown
  const SortedNumeric =
    sortInfo.sortOrder === 'asc' && crudcolumnid === sortInfo.sortField
      ? FaSortNumericDownAlt
      : FaSortNumericDown

  switch (
    column.formelement && column.formelement.length > 0
      ? column.formelement[0].datatype
      : 'other'
  ) {
    case 'string':
      return (
        <SortedAlpha
          size={15}
          style={{
            cursor: 'pointer',
            strokeWidth: 1,
            paddingRight: '5px',
            resize: 'none',
            size: 15
          }}
          onClick={e => {
            e.stopPropagation()
            handleSortingChange(crudcolumnid)
          }}
        />
      )

    case 'int':
      return (
        <SortedNumeric
          size={15}
          style={{
            cursor: 'pointer',
            strokeWidth: 1,
            paddingRight: '5px',
            size: 15
          }}
          onClick={e => {
            e.stopPropagation()
            handleSortingChange(crudcolumnid)
          }}
        />
      )
    default:
      return (
        <BiSortAlt2
          size={15}
          style={{
            cursor: 'pointer',
            strokeWidth: 1,
            paddingRight: '5px',
            size: 15
          }}
          onClick={e => {
            e.stopPropagation()
            handleSortingChange(crudcolumnid)
          }}
        />
      )
  }
}
