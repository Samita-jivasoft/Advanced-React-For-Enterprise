import { useAppTheme } from 'app/data'
import { useElement } from '../../data/ElementContext'
import { Display, MainContainer } from './styles'
import React, { useEffect, useState } from 'react'
import { standardizeColor, themeConstants } from 'app/theme'
import { ColorPicker } from '../../../ColorPicker'
import { FaPalette } from 'react-icons/fa'

export const ElementTypeColorPicker = () => {
  const [themeState, themeDispatch] = useAppTheme()
  const [elementState, elementDispatch] = useElement()
  const {
    label,
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    validmaximum,
    allowmultiplefiles,
    allowmultiplepicklistselections,
    // files,
    onClick,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision,
    setParentState
  } = elementState

  const [selectedColor, setSelectedColor] = useState(
    typeof elementState.value == 'object' &&
      elementState.value !== null &&
      Object.keys(elementState.value).length > 0
      ? elementState.value
      : elementState.value
      ? {
          background: standardizeColor(elementState.value),
          foreground: themeState.currentTheme.text
        }
      : {
          background: null,
          foreground: themeState.currentTheme.text
        }
  )

  useEffect(() => {
    // console.log('here', elementState.value)
    // console.log('selectedColor', selectedColor)
    if (isEdit) {
      elementDispatch({
        type: 'SET_VALUE',
        value: selectedColor
      })
    }
  }, [isEdit, selectedColor])

  return (
    <MainContainer isEdit={isEdit}>
      {isEdit ? (
        <div style={{ width: '50%' }}>
          <ColorPicker
            defaultValue={selectedColor?.background}
            getSelectedColor={color => {
              setSelectedColor(prevColor => ({
                ...prevColor,
                background: color
              }))
            }}
            getForeGroundColor={color => {
              setSelectedColor(prevColor => ({
                ...prevColor,
                foreground: color
              }))
            }}
            // recentColors={}
            getRecentlySelected={colors => {
              setSelectedColor(prevColor => ({
                ...prevColor,
                recents: colors
              }))
            }}
          />
        </div>
      ) : (
        <Display
          selection={selectedColor?.background ? true : false}
          background={selectedColor?.background}
          color={selectedColor?.foreground}
        >
          <FaPalette style={{ padding: '0px 4px 0px 0px' }} />
          {selectedColor?.background
            ? selectedColor?.background?.toUpperCase()
            : 'No color selected'}
        </Display>
      )}
    </MainContainer>
  )
}
