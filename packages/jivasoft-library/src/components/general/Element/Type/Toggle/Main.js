import { ToggleSwitch } from '../../../../general'
import { useEffect, useState } from 'react'
import React from 'react'
import { useElement } from '../../data/ElementContext'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import { useAppTheme } from 'app/data'
import { ElementTypeToggleDisplay } from './Display'

export const ElementTypeToggle = props => {
  const [elementState, elementDispatch] = useElement()
  const {
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision
  } = elementState
  //   const [checked, setChecked] = useState(
  //     defaultvalue ? (defaultvalue ==1 ? true : false) : false
  //   )

  //   useEffect(() => {
  //     var value
  //     if (checked) {
  //       value = 1
  //     } else {
  //       value = 0
  //     }
  //   }, [checked])
  // console.log(remainingRequirements)
  const [themeState] = useAppTheme()
  return isEdit ? (
    <div style={{ width: '100%', display: 'flex' }}>
      <ToggleSwitch
        id={'switch-' + id}
        // label='Switch' //optional
        checked={value == 0 ? false : true} //required
        onChange={e => {
          elementDispatch({ type: 'SET_VALUE', value: e === true ? '1' : '0' })
        }} //required
        optionLabels={['yes', 'no']}
        onColor={themeState.currentTheme.successColor} //optional
        // offColor={'#bbb'} //optional
        // color={'white'} //optional
        disabled={canedit == 0 ? true : false} //optional
      />
    </div>
  ) : (
    <ElementTypeToggleDisplay />
  )
}
