import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { DynamicButtonV2 } from '../../../DynamicButtonV2'
import { Tooltip } from '../../../Tooltip'
import { useList, useLists } from '../../data'
import { useViewport } from 'app/data'

export const RowTracker = props => {
  const { tableRef } = props
  const [listsState] = useLists()
  const [listState] = useList()
  const { crudlistitems, viewableRows } = listState

  const getTableLength = items => {
    let count = 0

    items?.forEach(item => {
      count += 1 // Count the current item
      if (item?.children && item?.children?.length > 0) {
        count += getTableLength(item?.children) // Recursively count children
      }
    })

    return count
  }

  return (
    (viewableRows?.end > 0 || crudlistitems?.length > 0) && (
      <div
        className='row_tracker'
        style={{
          display: 'flex',
          // border: '1px solid red',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize:'16px'
          width: '100%'
        }}
      >
        <div>
          Showing Rows {viewableRows?.start} to {viewableRows?.end} of{' '}
          {getTableLength(crudlistitems)}
        </div>

        <div
          style={{
            // border: '1px solid black',
            width: 'fit-content',
            height: 'fit-content'
          }}
        >
          <Tooltip
            headerColor={listState.themecolor}
            themeColor={listState.themecolor}
            textColor={listState.textcolor}
            direction={'bottom'}
            content={'Click to scroll to the top'}
          >
            <DynamicButtonV2
              // color={listState.themecolor}
              icon={<FaChevronUp />}
              onClick={() => tableRef?.current?.scrollToTop(0)}
            />
          </Tooltip>
        </div>
      </div>
    )
  )
}
