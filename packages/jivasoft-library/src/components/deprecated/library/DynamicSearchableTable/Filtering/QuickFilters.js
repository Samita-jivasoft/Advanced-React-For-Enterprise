import React from 'react'
import { useLists } from '../data'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useState } from 'react'
import { setFilters } from './FilterFunctions'
import { BsCaretUp } from 'react-icons/bs'
import { StyledHeaderText } from '../styles'

export const QuickFilters = props => {
  const {
    criteria,
    setCriteria,
    quickFilters,
    setQuickFilters
  } = props
  //tablestate from context
  const [listsState, listsDispatch] = useLists()
  const [buttonColor, setButtonColor] = useState(false)

  const [input, setInput] = useState()
  function handleSetParent (element) {
    setInput(element)
  }

  const applyQuickFilter = filter => {
    // setButtonColor(true)
    console.log(filter)
    setFilters(
      filter,
      input,
      criteria,
      setCriteria
    )
    //TODO: set table data to filter quickfilter
  }

  return (
    quickFilters && (
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {listsState &&
          listsState.columns &&
          listsState.columns.map(i =>
            i.quickfilter ? (
              <div key={i.crudcolumnid} style={{ padding: '0px 5px 5px 0px' }}>
                <DynamicButtonV2
                  backgroundColor={buttonColor ? 'dimgray' : 'whitesmoke'}
                  // color={themeState.currentTheme.text}
                  type='default'
                  text={i.label}
                  // icon={<FaTimes></FaTimes>}
                  onClick={() => applyQuickFilter(i)}
                  iconPosition='left'
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
