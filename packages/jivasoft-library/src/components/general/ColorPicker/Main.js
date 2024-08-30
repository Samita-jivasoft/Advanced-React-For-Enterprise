import React, { useEffect, useRef, useState } from 'react'
import { useAppTheme, useViewport } from 'app/data'
import {
  ColorContainer,
  ColorGroup,
  ColorGroupContainer,
  ColorPickerContainer,
  ColorPreview,
  ColorRange,
  ColorsContainer
} from './styles'
import { handleColorSelection } from './handlers'
import { RecentlySelected } from './RecentlySelected'
import { standardizeColor } from '../../../app/helpers'
import {
  generateColorShades,
  generateHSLColorVariations,
  getBestContrastColor,
  themeConstants
} from 'app/theme'

export const ColorPicker = props => {
  const {
    defaultValue,
    getSelectedColor,
    getForeGroundColor,
    recentColors,
    getRecentlySelected
  } = props
  const { viewWidth, viewHeight } = useViewport()
  const [themeState] = useAppTheme()
  const [themeColors, setThemeColors] = useState()
  const [selectedColor, setSelectedColor] = useState(
    defaultValue ? standardizeColor(defaultValue) : '#FFFFFF'
  )
  const [colorVariations, setColorVariations] = useState(12)

  // console.log(recentlySelected)
  const [textColors, setTextColors] = useState([])
  useEffect(() => {
    const arrayOfObjects = themeConstants()
    // console.log(arrayOfObjects)
    setThemeColors(arrayOfObjects.filter(obj => obj.colors)[0].colors)
    setTextColors(
      arrayOfObjects
        .filter(obj => obj.colors)[0]
        .colors?.map(
          color =>
            (color.name.toLowerCase().includes('light_text') ||
              color.name.toLowerCase().includes('dark_text')) &&
            color.value
        )
        .filter(n => n)
    )
  }, [])
  // console.log(textColors)

  const colorModes = ['base', 'text', 'light', 'dark']
  const filterColorsByMode = mode => {
    const lowerCaseMode = mode.toLowerCase()
    return themeColors?.filter(color => {
      const lowerCaseName = color.name.toLowerCase()
      switch (lowerCaseMode) {
        case 'base':
          return (
            !lowerCaseName.includes('light') && !lowerCaseName.includes('dark')
          )
        case 'light':
        case 'dark':
          return lowerCaseName.includes(lowerCaseMode)
        case 'text':
          // console.log(lowerCaseName)
          return (
            lowerCaseName.includes('light_' + lowerCaseMode) ||
            lowerCaseName.includes('dark_' + lowerCaseMode)
          )
        default:
          return false
      }
    })
  }

  //TODO: create other functions and set them here
  const [switcher, setSwitcher] = useState('')
  function handleSwitcher (selected) {
    // console.log(selected)
    setSwitcher(selected)
  }

  const [bestForegroundColor, setBestForegroundColor] = useState(
    themeState.currentTheme.text
  )
  useEffect(() => {
    // console.log(selectedColor)

    //set parent states
    getSelectedColor && getSelectedColor(selectedColor)

    const bestforeground = getBestContrastColor(selectedColor, textColors)
    setBestForegroundColor(bestforeground)
    getForeGroundColor && getForeGroundColor(bestforeground)
  }, [selectedColor])

  const [recentlySelected, setRecentlySelected] = useState(
    recentColors?.length > 0 ? recentColors : [...Array(8)]
  )
  useEffect(() => {
    getRecentlySelected && getRecentlySelected(recentlySelected)
  }, [recentlySelected])

  // Adjust colorVariations based on the number of ColorContainers
  const colorGroupRef = useRef(null)
  useEffect(() => {
    // console.log(colorVariations)
    const colorGroupWidth = colorGroupRef?.current?.clientWidth ?? 200
    const colorContainerWidth = 24
    const maxColorContainers = Math.floor(colorGroupWidth / colorContainerWidth)
    setColorVariations(Math.floor(maxColorContainers)) // Assuming 6 shades per ColorRange
  }, [viewWidth, viewHeight])

  return (
    <ColorPickerContainer selectedColor={selectedColor}>
      <ColorPreview background={selectedColor} color={bestForegroundColor}>
        {selectedColor.toUpperCase()}
      </ColorPreview>
      <ColorsContainer>
        {/* <DynamicSwitcher
        // backgroundColor={'none'}
        // selectedColor
        // color={themeState.currentTheme.text}
        // width
        // height
        items={[
          {
            // icon: <IconEdsLogo />,
            id: 'standard',
            func: () => {},
            // width: '50px',
            // height: '50px',
            label: 'Basic'
          },
          {
            // icon: <IconEdsLogo />,
            id: 'themes',
            func: () => {},
            // width: '50px',
            // height: '50px',
            label: 'Themes'
          }
        ]}
        handleParent={handleSwitcher}
        defaultValue={'standard'}
        // column=true/false
        // onClick
      /> */}
        <ColorGroupContainer>
          {switcher.id === 'themes' && 'site colors'.toUpperCase()}
          {switcher.id === 'themes' &&
            colorModes?.map(
              (mode, index) =>
                themeState.currentTheme.id == 'light' &&
                mode !== 'dark' && (
                  <ColorGroup key={index}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {filterColorsByMode(mode)?.map(color => (
                        <ColorContainer
                          color={color.value}
                          key={'theme_' + color.name}
                          onClick={() =>
                            handleColorSelection(
                              color.value,
                              setRecentlySelected,
                              setSelectedColor
                            )
                          }
                        />
                      ))}
                    </div>
                  </ColorGroup>
                )
            )}
          <ColorGroup
            ref={colorGroupRef}
            style={{
              justifyContent: 'space-between',
              flexWrap: 'nowrap'
            }}
          >
            {generateHSLColorVariations(colorVariations).map((color, index) => (
              <ColorRange key={index + '_' + color}>
                {generateColorShades(color, 6).map(shade => (
                  <ColorContainer
                    color={shade}
                    key={'theme_' + shade}
                    onClick={() =>
                      handleColorSelection(
                        shade,
                        setRecentlySelected,
                        setSelectedColor
                      )
                    }
                  />
                ))}
              </ColorRange>
            ))}
            {/* </div> */}
          </ColorGroup>
        </ColorGroupContainer>
        <RecentlySelected
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          recentlySelected={recentlySelected}
          setRecentlySelected={setRecentlySelected}
        />
      </ColorsContainer>
      {/* <ThemePanel /> */}
    </ColorPickerContainer>
  )
}
