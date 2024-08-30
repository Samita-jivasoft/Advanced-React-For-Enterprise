import React, { useEffect, useState } from 'react'

import { getFormProps, getLayout, getLayoutProps } from './helpers'
import { LayoutStyles } from './styles'
import { LayoutContextProvider, layoutReducer } from './data'
import { getArchetypeStyles, getCommonStatus } from './styles/helpers'
import { Form } from './layout'
import { useAppTheme } from 'app/data'
import { FormContextProvider, formReducer } from './layout/Form/data'

export const Layout = props => {
  const { parentState } = props
  const [themeState] = useAppTheme()
  const [layoutProps, setLayoutProps] = useState(() => getLayoutProps(props))
  let { css, elements, layout } = layoutProps
  useEffect(() => {
    setLayoutProps(getLayoutProps(props))
  }, [props])
  return (
    <LayoutContextProvider initialState={layoutProps} reducer={layoutReducer}>
      <LayoutStyles
        archetypeStyles={getArchetypeStyles(layoutProps, themeState)}
        commonStatusStyles={getCommonStatus(layoutProps, themeState)}
        css={css}
      >
        <FormContextProvider initialState={props} reducer={formReducer}>
          <Form {...layoutProps} className={'layout-container'} />
        </FormContextProvider>
      </LayoutStyles>
    </LayoutContextProvider>
  )
}
