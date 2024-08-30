import React from 'react'
import { SelectedItemStyled } from './styles'
import { FaTimes } from 'react-icons/fa'
import { useElement } from '../../data/ElementContext'

export const SelectedItems = props => {
  const { options, setOnFocus } = props
  const [elementState, elementDispatch] = useElement()
  const { value, isEdit, canedit, required } = elementState

  /* 
    when canedit:1
  item ={
   "id": "18F85129-3BA6-4B27-942F-7CE13012A955",
   "label": "Activity #",
   "flag": "Job Details",
   "formelementid": "8B834C12-F55A-4333-9F46-F66A2FCBA096",
   "nextstructtype": "",
   "nextsp": "",
   "parentobjname": "formelements",
   "childobjname": "selectoptions",
   "parentid": "formelementid",
   "childid": "formelementid",
   "selected": 1
}*/

  // console.log('selected items value', value)
  // console.log('selected items value', options)

  return value?.map((item, index) => {
    if (item?.label) {
      return (
        <SelectedItemStyled
          className='selected-item'
          isEdit={isEdit}
          key={item?.id ? item?.id + index : index}
          onClick={e => {
            e.stopPropagation()
            // console.log('pressed', item)
            if (isEdit) {
              elementDispatch({
                type: 'SET_VALUE',
                value: value.filter(listItem => listItem.id !== item.id)
              })
              required && setOnFocus(true)
            }
          }}
        >
          {(canedit == 1 || canedit == 2) && isEdit && (
            <FaTimes style={{ marginRight: 2 }} />
          )}
          {item?.label
            ? item?.label
            : options?.filter(listItem => {
                return listItem?.id === item
              })[0]?.label}
        </SelectedItemStyled>
      )
    }
  })
}
