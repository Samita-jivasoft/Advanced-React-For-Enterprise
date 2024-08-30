import React from 'react'
import { SelectedItemStyled } from './styles'
import { FaTimes } from 'react-icons/fa'
import { useList } from './data'
import { removeItem } from './helpers'

export const SelectedItems = props => {
  const [listState, listDispatch] = useList()
  const {
    items,
    selectedItems,
    showList,
    showFields,
    fieldsSeperator,
    identifier,
    allowSelections
  } = listState

  return (
    allowSelections &&
    selectedItems?.length > 0 &&
    selectedItems?.map((item, index) => {
      return (
        <SelectedItemStyled
          data-testid= 'selected-item'
          className='selected-item'
          key={item[identifier] ? item[identifier] + index : index}
          onClick={e => {
            e.stopPropagation()
            // console.log(selectedItems, show)
            // console.log('pressed', item)
            removeItem(item, listState, listDispatch)
            listDispatch({
              type: 'SET_ONFOCUS',
              focus: true
            })
          }}
        >
          <FaTimes style={{ marginRight: '6px' }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {showFields.map(
              (field, i) =>
                item[field] !== '' && (
                  <React.Fragment key={i}>
                    {i !== 0 && ' - '}
                    {item[field]}
                  </React.Fragment>
                )
            )}
          </div>
        </SelectedItemStyled>
      )
    })
  )
}
