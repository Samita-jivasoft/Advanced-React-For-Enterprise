import React from 'react'
import { Item } from './Item'
import { useAppTheme, useViewport } from 'app/data'
import { DynamicFlexHeader } from '@jivasoft/jivasoft-lib/dist/components'
import { EmptyGeneric } from 'components/Generic'
import { bgb3gradientbordered } from 'app/globalStyles'
import { DashboardBodyStyled } from './Styles/Main'
import { DashboardItemMainStyled } from './Styles/Item'
export function DashboardRow (props) {
  const { title, subText, preText, children, items, disableBackground } = props
  const [themeState, dispatch] = useAppTheme()
  const { viewWidth } = useViewport()
  return (
    <>
      {(title || preText || subText) && (
        <DynamicFlexHeader
          position={'center'}
          title={title}
          color={themeState.currentTheme.text} //    preText={'Xtra Duty > Eds Operations > Job Management > Job Intake'}
        />
      )}
      <DashboardItemMainStyled>
        {items.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: viewWidth > 600 ? 'row' : 'column',
              height: '100%',
              width: '100%',
              gap: '.5rem'
            }}
          >
            {items.map(item => {
              return <Item key={item} item={item} />
            })}
          </div>
        )}

        {children && children}
        {!children && items.length === 0 && <EmptyGeneric />}
      </DashboardItemMainStyled>
    </>
  )
}
DashboardRow.defaultProps = {
  items: []
}
