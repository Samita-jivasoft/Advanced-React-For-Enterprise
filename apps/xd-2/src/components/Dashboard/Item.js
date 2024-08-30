import { useAppTheme, useViewport } from 'app/data'
import React from 'react'
import { DashboardSubItemMainStyled } from './Styles/Item'
export function Item ({ item }) {

    const [themeState, dispatch] = useAppTheme()
  const {viewWidth} = useViewport()
  return (
    <DashboardSubItemMainStyled>
      {item}
    </DashboardSubItemMainStyled>
  )
}
