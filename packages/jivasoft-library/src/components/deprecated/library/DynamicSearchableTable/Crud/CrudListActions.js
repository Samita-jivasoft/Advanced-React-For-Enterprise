import React from 'react'
import { CrudItem, CrudItemsContainer } from './styles'
import { DynamicButtonV2 } from '../../DynamicButtonV2'
import { useAppTheme } from 'app/data'

export const CrudListActions = props => {
  const { list, crudfunctions } = props
  const [themeState] = useAppTheme()

  //TODO: add hardcoded functions depending on what crud item is selected
  return (
    <CrudItemsContainer listType={list.type}>
      {list.crudaction &&
        list.crudaction.length > 0 &&
        list.crudaction.map(action => {
          if (action.template !== false) {
            return (
              <CrudItem key={'button' + list.crudlistid + action.crudactionid}>
                <DynamicButtonV2
                  backgroundColor={themeState.currentTheme.bg0}
                  color={themeState.currentTheme.text}
                  type='default'
                  text={action.label}
                  // icon=''
                  onClick={() =>
                    crudfunctions &&
                    crudfunctions(undefined, action, list.idcolumn)
                  } // filter -
                  // iconPosition='left'
                />
              </CrudItem>
            )
          }
        })}
    </CrudItemsContainer>
  )
}
