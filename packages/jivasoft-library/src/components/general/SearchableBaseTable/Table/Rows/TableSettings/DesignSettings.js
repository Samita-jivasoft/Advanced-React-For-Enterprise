import React, { useEffect, useState } from 'react'
import { MdCalendarViewDay, MdViewDay, MdViewHeadline } from 'react-icons/md'
import { DynamicButtonV2 } from '../../../../DynamicButtonV2'
import { useList } from '../../../data'
import { useLists } from '../../../data'
import { useAppTheme } from 'app/data'
import { Section, Settings, SettingsHeader } from './styles'
import { ColorPicker } from '../../../../ColorPicker'

export const DesignSettings = props => {
  const [themeState] = useAppTheme()
  const [listState, listDispatch] = useList()
  const [listsState, listsDispatch] = useLists()

  function getFontSize () {
    var x = listState.headerheight
    switch (true) {
      case x < 35:
        return '10px'
      case x >= 35 && x < 56:
        return '13px'
      case x >= 56 && x < 150:
        return '17px'
      case x >= 150 && x < 300:
        return '21px'
      case x >= 300:
        return '30px'
      default:
        return '13px'
    }
  }

  const presetSizes = [
    {
      id: 'Default',
      icon: <MdViewDay size={20} />,
      rowHeight: 75,
      headerHeight: 80,
      textSize: '17px'
    },
    {
      id: 'Comfortable',
      icon: <MdCalendarViewDay size={20} />,
      rowHeight: 50,
      headerHeight: 55,
      textSize: '13px'
    },
    {
      id: 'Compact',
      icon: <MdViewHeadline size={20} />,
      rowHeight: 25,
      headerHeight: 35,
      textSize: '13px'
    }
  ]

  const handleRowIndicies = () =>
    listDispatch({
      type: 'SET_SHOW_ROW_INDEX_COL',
      showrowindex: !listState.showrowindex
    })

  const handleVertivalGridlines = () =>
    listDispatch({
      type: 'SET_SHOW_VERTICAL_GRIDLINES',
      showverticalgridlines: !listState.showverticalgridlines
    })

  const [selectedColor, setSelectedColor] = useState(listState.themecolor)
  const [foreGroundColor, setForeGroundColor] = useState(
    themeState.currentTheme.text
  )
  // console.log(arrayOfObjects)

  useEffect(() => {
    if (selectedColor) {
      listDispatch({
        type: 'SET_THEME',
        currentThemeColor: selectedColor,
        currentThemeText: foreGroundColor
      })
    }
  }, [selectedColor, foreGroundColor])

  return (
    <Settings themeColor={listState.themecolor}>
      <h2>Appearance</h2>
      {/* GENERAL */}
      <Section>
        <SettingsHeader>General:</SettingsHeader>
        <div style={{ display: 'flex' }}>
          <input
            type='checkbox'
            checked={listState.showrowindex}
            onChange={handleRowIndicies}
          />
          <div onClick={handleRowIndicies}>Row Indecies</div>
        </div>
        <div style={{ display: 'flex' }}>
          <input
            type='checkbox'
            checked={listState.showverticalgridlines}
            onChange={handleVertivalGridlines}
          />
          <div onClick={handleVertivalGridlines}>Vertical Gridlines</div>
        </div>
      </Section>
      {/* LAYOUT */}
      {/* {listsState.lists.length > 1 && (
        <Section>
          <SettingsHeader>Layout:</SettingsHeader>
          <div style={{ display: 'flex' }}>
            <input
              type='checkbox'
              checked={listState.showrowindex}
              onChange={handleRowIndicies}
            />
            <div onClick={handleRowIndicies}>Row Indecies</div>
          </div>
          <div style={{ display: 'flex' }}>
            <input
              type='checkbox'
              checked={listState.showverticalgridlines}
              onChange={handleVertivalGridlines}
            />
            <div onClick={handleVertivalGridlines}>Vertical Gridlines</div>
          </div>
        </Section>
      )} */}
      {/* DENSITY */}
      <Section>
        <SettingsHeader>Density:</SettingsHeader>
        <div
          style={{
            // border: '1px solid red',
            display: 'flex'
            // justifyContent: 'center'
          }}
        >
          {/* PRESETS */}
          <div
            style={{
              // border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              marginRight: '30px'
              // paddingRight: '50px'
            }}
          >
            {presetSizes.map((view, index) => (
              <div
                key={'div_preset_sizes' + index}
                style={{
                  // border: '1px solid red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '5px'
                }}
              >
                {/* <input type='radio'></input> */}
                {view.id}
                <DynamicButtonV2
                  backgroundColor={listState.buttoncolor}
                  color={listState.textcolor}
                  key={'preset_sizes' + index}
                  icon={view.icon}
                  // text={view.id}
                  width={'fit-content'}
                  onClick={() => {
                    listDispatch({
                      type: 'SET_ROW_HEIGHT',
                      currentRowHeight: view.rowHeight
                    })
                    listDispatch({
                      type: 'SET_HEADER_HEIGHT',
                      currentHeaderHeight: view.headerHeight
                    })
                    listDispatch({
                      type: 'SET_TEXT_SIZE',
                      currentFontSize: view.textSize
                    })
                  }}
                />
              </div>
            ))}
          </div>
          {/* SLIDER */}
          <div
            style={{
              // border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              width: '50%'
              // justifyContent: 'space-between'
            }}
          >
            {/* RANGE */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '5px'
                // border: '1px solid red'
              }}
            >
              <div>Slide to change density</div>
              <input
                id='size'
                name='Table Density'
                type='range'
                min={35}
                max={300}
                step={5}
                value={listState.headerheight}
                onChange={e => {
                  listDispatch({
                    type: 'SET_ROW_HEIGHT',
                    currentRowHeight: parseInt(e.target.value - 10)
                  })
                  listDispatch({
                    type: 'SET_HEADER_HEIGHT',
                    currentHeaderHeight: parseInt(e.target.value)
                  })
                  listDispatch({
                    type: 'SET_TEXT_SIZE',
                    currentFontSize: getFontSize()
                  })
                }}
              />
            </div>
            {/* FONTSIZE */}
            <div
              style={{
                // border: '1px solid red',
                display: 'flex'
                // justifyContent: 'center',
                // alignItems: 'center'
              }}
            >
              Font Size:
              <input
                type='number'
                value={listState.textsize.split('px')[0]}
                min={8}
                max={30}
                onChange={e =>
                  listDispatch({
                    type: 'SET_TEXT_SIZE',
                    currentFontSize: e.target.value + 'px'
                  })
                }
              />
              px
            </div>
          </div>
        </div>
      </Section>
      {/* THEME COLORS */}
      <Section>
        <SettingsHeader>Theme:</SettingsHeader>
        {/* <div>Theme Colors:</div> */}
        <div
          style={{
            // border: '1px solid red',
            // padding: '0px 0px 10px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ColorPicker
            defaultValue={listState?.themecolor}
            getSelectedColor={state => setSelectedColor(state)}
            getForeGroundColor={color => setForeGroundColor(color)}
          />
        </div>
      </Section>
      {/* RESET */}
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <DynamicButtonV2
          backgroundColor={listState.buttoncolor}
          color={listState.textcolor}
          type='default'
          text={'Reset to Default'}
          // icon={<FaPlus />}
          onClick={() => {
            listDispatch({
              type: 'CLEAR_THEME'
            })
          }}
        />
      </div>
    </Settings>
  )
}
