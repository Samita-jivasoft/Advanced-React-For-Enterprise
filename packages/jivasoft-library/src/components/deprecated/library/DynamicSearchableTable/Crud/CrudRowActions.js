import React from 'react'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useAppTheme } from 'app/data'
import { RiDeleteBin6Line, RiInboxArchiveLine } from 'react-icons/ri'
import { GrDocumentUpdate } from 'react-icons/gr'

export const CrudRowActions = props => {
  const { list, row, crudfunctions } = props
  const [themeState] = useAppTheme()

  function getCrudIcon (row, action, idcolumn) {
    var Icon
    switch (action.type) {
      case -1:
        Icon = RiDeleteBin6Line
        break
      case 0:
        Icon = GrDocumentUpdate
        break
      case 2:
        break
      case 4:
        break
      case 5:
        Icon = RiInboxArchiveLine
        break
      default:
      // body of default
    }
    return (
      <Icon
        cursor={'pointer'}
        onClick={() => crudfunctions && crudfunctions(row, action, idcolumn)}
      />
    )
  }

  return (
    <div
      style={{
        // border: '1px solid red',
        display: 'flex',
        // padding: '0px 0px 0px 10px',
        // width: '100%',
        justifyContent:'end'
      }}
    >
      {row &&
        row.crudaction &&
        row.crudaction.map(action => {
          return (
            <div
              key={'button' + list.crudlistid + action.crudactionid}
              style={{
                // border: '1px solid red',
                padding: false ? '2px 10px 2px 0px' : '0px 10px 0px 0px'
              }}
            >
              <DynamicButtonV2
                text={action.label}
                backgroundColor={themeState.currentTheme.bg0}
                color={themeState.currentTheme.text}
                type='default'
                width={'fit-content'}
                onClick={() =>
                  crudfunctions && crudfunctions(row, action, list.idcolumn)
                }
              />
              {/* {getCrudIcon(row, action, list.idcolumn)} */}
            </div>
          )
        })}
      {list.crudaction &&
        list.crudaction.length > 0 &&
        list.crudaction.map(action => {
          if (action.peritem || action.peritem === '1')
            return (
              <div
                key={'button' + list.crudlistid + action.crudactionid}
                style={{
                  // border: '1px solid red',
                  padding: false ? '2px 10px 2px 0px' : '0px 10px 0px 0px'
                }}
              >
                <DynamicButtonV2
                  text={action.label}
                  backgroundColor={themeState.currentTheme.bg0}
                  color={themeState.currentTheme.text}
                  type='default'
                  width={'fit-content'}
                  onClick={() =>
                    crudfunctions && crudfunctions(row, action, list.idcolumn)
                  }
                />
                {/* {getCrudIcon(row, action, list.idcolumn)} */}
              </div>
            )
        })}
    </div>
  )
}
