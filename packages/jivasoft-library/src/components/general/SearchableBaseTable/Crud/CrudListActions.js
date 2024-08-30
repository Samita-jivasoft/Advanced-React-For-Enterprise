import React from 'react'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useList } from '../data'
import { CrudItem, CrudItemsContainer } from './styles'

export const CrudListActions = props => {
  const [listState, listDispatch] = useList()

  return (
    <CrudItemsContainer listType={listState.type}>
      {listState?.crudaction?.map(action => {
        if (action.template !== false && action.peritem !== 1) {
          return (
            <CrudItem
              key={'button' + listState.crudlistid + action.crudactionid}
            >
              <DynamicButtonV2
                backgroundColor={listState.buttoncolor}
                color={listState.textcolor}
                type='default'
                text={action.label}
                // icon=''
                onClick={() =>
                  listState.crudfunctions &&
                  listState.crudfunctions(undefined, action, listState.idcolumn)
                }
                // iconPosition='left'
              />
            </CrudItem>
          )
        }
      })}
    </CrudItemsContainer>
  )
}
