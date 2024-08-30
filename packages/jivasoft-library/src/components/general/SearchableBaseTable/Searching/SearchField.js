import { useAppTheme } from 'app/data'
import React, { useEffect, useTransition } from 'react'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { SearchFieldContainer } from './styles'
import { useList } from '../data'
import { Element } from '../../Element'
import { css } from 'styled-components'

export const SearchField = props => {
  const { tableRef, showcaret } = props
  const [listState, listDispatch] = useList()

  const [isPending, startTransition] = useTransition()
  const handleChange = e => {
    e.preventDefault()
    tableRef?.current?.scrollToRow(0, 'start')
    if (listState.crudlistitems.length > 0) {
      // startTransition puts searching to top priority
      startTransition(() => {
        listDispatch({
          type: 'SET_MODIFIED_TABLE',
          currentFilters: listState.filters,
          currentSearchColumns: listState.searchcolumns,
          currentSearchInput: e.target.value,
          currentSearchingState: !showcaret ? 1 : listState.searching
        })
      })
    }
  }

  const clearSearch = () => {
    // highlight(activeColumn, '')
    startTransition(() => {
      listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: listState.filters,
        currentSearchColumns: [],
        currentSearchInput: '',
        currentSearchingState: 0
      })
    })
  }

  return (
    !showcaret && (
      <SearchFieldContainer showcaret={showcaret}>
        {/* <Element
          isReview={true}
          css={css`
            .element-main {
              padding: 0px !important;
              margin: 0px !important;
            }
            .element-header {
              // border: 1px solid red !important;
              // justify-content: center !important;
            }
            .element-body {
              width: 100%;
              padding: 0px !important;
              // justify-content: center !important;
            }
          `}
          element={{
            selectoptions: '',
            required: 0,
            // label: 'Search',
            masktype: '',
            datatype: 'string',
            canedit: 1,
            value: listState.searchinput
          }}
          setParentState={input => console.log(input)}
          parentState={[]}
        /> */}
        <input
          id={'searchInput'}
          type={'search'}
          placeholder={'Search...'}
          value={listState.searchinput}
          style={{ width: '100%' }}
          onChange={handleChange}
          autoFocus={showcaret !== false ? true : false}
        />
        {showcaret !== false && (
          <BsFillCaretUpFill
            style={{
              padding: '0px 0px 0px 5px',
              cursor: 'pointer'
            }}
            size={'24px'}
            onClick={() => clearSearch()}
          />
        )}
      </SearchFieldContainer>
    )
  )
}
