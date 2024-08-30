import React, { useEffect, useState } from 'react'
import { StyledHeaderButton, StyledHeaderText, StyledIconWrapper } from '../../../styles'
import { useAppTheme, useViewport } from 'app/data'
import { useConfiguration, useList } from '../../../data'
import { FaSave } from 'react-icons/fa'
import { useLists } from '../../../data'
import { Tooltip } from '../../../../Tooltip'
import { LightenDarkenColor } from 'app/helpers'

export const SaveSettingsButton = props => {
  // const { themeColor, textColor } = props
  const { viewWidth, viewHeight } = useViewport()
  const [listState, listDispatch] = useList()
  const [listsState, listsDispatch] = useLists()
  const [configurationState, configurationDispatch] = useConfiguration()

  // console.log(listState)

  return (
    <StyledHeaderButton padding={'0px 0px 0px 10px'}>
      <Tooltip
        content={'Table Settings Saved!'}
        direction={'bottom'}
        headerColor={LightenDarkenColor(listState.themecolor, 20)}
        themeColor={LightenDarkenColor(listState.themecolor, 20)}
        textColor={listState.textcolor}
        delay={500}
        click
        // isMobile
      >
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={e => {
            configurationState?.onSave(configurationState?.tableconfiguration)
            configurationDispatch({
              type: 'UPDATE_CONFIGURATION',
              currentList: listState
            })
          }}
        >
          <StyledIconWrapper>
          <FaSave size={'17px'} />
          {listState.tablewidth > 750 && (
            <StyledHeaderText>Save Settings</StyledHeaderText>
          )}
          </StyledIconWrapper>
        </div>
      </Tooltip>
    </StyledHeaderButton>
  )
}
