import { useAppTheme } from 'app/data'
import React, { useEffect, useTransition } from 'react'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { useLists } from '../data'
import { highlight } from '../HelperFunctions'
import { handleSorting, searchSort } from '../Sorting'
import { SearchFieldContainer } from './styles'

export const SearchField = props => {
  const {
    list,
    tableData,
    sortInfo,
    setTableData,
    activeColumn,
    setOpenSearch,
    setCheckAll,
    setSearchColumn
  } = props
  const [listsState, listsDispatch] = useLists()
  const [isPending, startTransition] = useTransition()
  const [themeState] = useAppTheme()

  const handleChange = e => {
    e.preventDefault()
    if (tableData.length > 0) {
      // console.log('in here')
      /* THIS SETS THE PRIORITY HIGHER TO UPDATE */
      startTransition(() => {
        listsDispatch({
          type: 'SET_SEARCH_INPUT',
          input: e.target.value
        })
      })

      /* THIS  MAKES SEARCH INPUT LAG BECAUSE UPDATING THE TABLE AND INPUT ARE THE SAME PRIORITY*/
      // listsDispatch({
      //   type: 'SET_SEARCH_INPUT',
      //   action: e.target.value
      // })
    }
  }

  const clearSearch = () => {
    setOpenSearch(false)
    if (tableData.length > 0) {
      setCheckAll(false)
      highlight(activeColumn, '')
      setSearchColumn([])
      startTransition(() => {
        listsDispatch({
          type: 'SET_SEARCH_INPUT',
          input: ''
        })
      })
      setTableData(
        handleSorting(tableData, sortInfo.sortField, sortInfo.sortOrder)
      )
    }
  }

  return (
    <SearchFieldContainer>
      <input
        id={'searchInput'}
        type={'search'}
        placeholder={'Search...'}
        style={{ width: '100%' }}
        onChange={e => handleChange(e)}
        autoFocus
      />
      <BsFillCaretUpFill
        style={{
          padding: '0px 0px 0px 5px',
          cursor: 'pointer'
        }}
        size={'24px'}
        onClick={() => clearSearch()}
      />
    </SearchFieldContainer>
  )
}
