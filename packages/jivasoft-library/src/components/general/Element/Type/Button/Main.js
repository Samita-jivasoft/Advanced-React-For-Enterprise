import { DynamicButtonV2, ToggleSwitch } from '../../..'
import { useEffect, useState } from 'react'
import React from 'react'
import { useElement } from '../../data/ElementContext'
import { useAppTheme } from 'app/data'
import { ElementTypeFieldDisplay } from '../Field/Display'

export const ElementButton = props => {
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    onClick,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision
  } = elementState
  const [themeState] = useAppTheme()

  async function getButtonFunctions () {
    if (datatype === 'button' || masktype === 'button') {
      // let
      switch (masktype) {
        case 'button':
        default:
          onClick()
        // alert(label + ' Clicked')
        // follow the exact same rules that nav buttons
      }
    }
  }
//TODO: determine isEdit behavior; for now defaulted to isEdit is always true

  return true ? (
    <div
      style={{
        // border: '1px solid red',
        width: '100%',
        display: 'flex'
      }}
    >
      <DynamicButtonV2
        backgroundColor={themeState.currentTheme.bg0}
        color={themeState.currentTheme.text}
        text={elementState.label}
        type={'chip'}
        // size={''}
        // icon={''}
        onClick={() => onClick()}
        // iconPosition={''}
        // disabled={''}
        // width={''}
      />
    </div>
  ) : (
    <div style={{ width: '100%' }}></div>
  )
}
