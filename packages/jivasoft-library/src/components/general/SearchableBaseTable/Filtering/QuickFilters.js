import React, { useEffect } from 'react'
import { useLists } from '../data'
import { useState } from 'react'
import { removeFilter, setFilters } from './FilterFunctions'
import { BsCaretUp } from 'react-icons/bs'
import { StyledHeaderButton, StyledHeaderText } from '../styles'
import { useList } from '../data'
import { useAppTheme, useViewport } from 'app/data'
import { DynamicSwitcher } from '../../DynamicSwitcher'
import { LightenDarkenColor } from 'app/helpers'

export const QuickFilters = props => {
  const { criteria, setCriteria, quickFilters, setQuickFilters } = props
  //tablestate from context
  const [listsState, listsDispatch] = useLists()
  const [listState, listDispatch] = useList()
  const [themeState] = useAppTheme()

  const [filterColumn, setFilterColumn] = useState({})
  useEffect(() => {
    // console.log(filterColumn)
    if (filterColumn.filter) {
      // console.log(filterColumn)
      if (filterColumn.filter.id[0] === '1') {
        setFilters(listState, listDispatch, filterColumn.column, '1')
        // removeFilter(filterColumn.column, '0', listState, listDispatch)
      }
      if (filterColumn.filter.id[0] === '0') {
        // removeFilter(filterColumn.column, '1', listState, listDispatch)
        setFilters(listState, listDispatch, filterColumn.column, '0')
      }
    }
  }, [filterColumn])

  // const addFilter = (colid, column) => {
  // }

  return (
    false &&
    quickFilters &&
    listsState.columns &&
    listsState.columns.map(i => i.quickfilter).includes(1) && (
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {listsState &&
          listsState.columns &&
          listsState.columns.map(column =>
            column.quickfilter ? (
              <div
                key={column.crudcolumnid}
                style={{
                  padding: '0px 5px 5px 0px'
                  // border: '1px solid red'
                }}
              >
                <DynamicSwitcher
                  backgroundColor={LightenDarkenColor(
                    listState.themecolor,
                    -50
                  )}
                  color={themeState.currentTheme.text}
                  selectedColor={themeState.currentTheme.successColorBase}
                  width={'auto'}
                  height={'20px'}
                  items={[
                    { id: '1-' + column.crudcolumnid, label: 'filled' },
                    { id: '0-' + column.crudcolumnid, label: 'unfilled' }
                  ]}
                  handleParent={filter =>
                    setFilterColumn({ filter: filter, column: column })
                  }
                  // defaultValue={'1a'}
                  // column
                />
              </div>
            ) : null
          )}
        <StyledHeaderText
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => setQuickFilters(false)}
        >
          Hide Filters
        </StyledHeaderText>
      </div>
    )
  )
}
