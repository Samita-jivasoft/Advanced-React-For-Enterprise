import React, { useEffect, useState } from 'react'
import { DynamicSwitcher } from '../DynamicSwitcher'
import { useConfiguration, useLists } from './data'
import { TabsToolbar } from './styles'
import { useAppTheme } from 'app/data'
import { DynamicButtonV2 } from '../DynamicButtonV2'
import { generateColorShades, getBestContrastColor } from 'app/theme'
import { standardizeColor } from 'app/helpers'

export const TableView = props => {
  const { type, listType, setListType } = props
  const [themeState] = useAppTheme()

  const [listsState, listsDispatch] = useLists()
  const [configurationState] = useConfiguration()

  const [currentThemeColor, setCurrentThemeColor] = useState()
  const [currentTextColor, setCurrentTextColor] = useState()

  useEffect(() => {
    // console.log('configurationState', configurationState)
    setListType(type === 'tolist' ? listsState.tolists : listsState.fromlists)
    if (configurationState?.allowconfigurations) {
      function findListById (listId) {
        return configurationState?.tableconfiguration?.find(
          list => list?.listid === listId
        )
      }
      function findConfigWithSetConfig (list, setConfigValue) {
        return list?.savedconfigs?.find(
          config => config?.setconfig === setConfigValue
        )
      }

      const selectedList = findListById(
        listType?.find(item => item.activetab === 1)?.crudlistid
      )

      setCurrentThemeColor(
        findConfigWithSetConfig(selectedList, true)?.themecolor ||
          themeState.currentTheme.bg0
      )

      const normalizeColor = standardizeColor(
        findConfigWithSetConfig(selectedList, true)?.themecolor
      )

      const textColor =
        getBestContrastColor(
          normalizeColor ?? themeState.currentTheme.bg0,
          generateColorShades(normalizeColor ?? themeState.currentTheme.bg0, 6)
        ) ?? 'black'
      // console.log('textColor', textColor)
      if (textColor != '#FFFFFF') setCurrentTextColor(textColor)
      else setCurrentTextColor('black')
    }
  }, [configurationState, listsState])

  return (
    listType.length > 1 && (
      <TabsToolbar>
        {listsState?.layout === 'tabs' && (
          <DynamicSwitcher
            backgroundColor={'none'}
            labelTextColor={currentTextColor}
            color={currentTextColor} //TODO: set items individual colors in Dynamic Switcher
            selectedColor={currentThemeColor}
            width={'fit-content'}
            height={'100%'}
            items={listType}
            itemKey={'crudlistid'}
            defaultValue={
              listType.find(item => item.activetab === 1)?.crudlistid
            }
            handleParent={selected =>
              listsDispatch({
                type: 'SET_ACTIVE_FROM_TAB',
                selected: selected
              })
            }
          />
        )}
        <div
          style={{
            // border: '1px solid red',
            width: 'fit-content',
            position: 'absolute',
            // top: 0,
            right: 0
          }}
        >
          <DynamicButtonV2
            text={'Toggle Tabs'}
            backgroundColor={themeState.currentTheme.bg0}
            onClick={e => {
              listsDispatch({
                type: 'TOGGLE_TABS',
                layout: listsState.layout == 'tabs' ? 'columns' : 'tabs'
              })
            }}
            // disabled
          />
        </div>
      </TabsToolbar>
    )
  )
}
