import React, { useEffect, useRef, useState } from 'react'
import {
  AppContextProvider,
  MenuContextProvider,
  HeaderContextProvider,
  StepContextProvider,
  SuspendContextProvider,
  useAppTheme,
  useUI,
  useViewport
} from './context'
import {
  appReducer,
  initialAppState,
  menuReducer,
  initialMenuState,
  stepReducer,
  initialStepState,
  suspendReducer,
  initialSuspendState,
  headerReducer,
  initialHeaderState
} from './reducers'
import { GlobalStyles } from 'app/globalStyles'
import { setUIStates } from 'app/helpers'
import { getBreakpoint } from '@jivasoft/jivasoft-lib/dist/app/helpers/ui.js'
import { MessageContextProvider } from '@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext'
import { ScrollContextProvider } from '@jivasoft/jivasoft-lib/dist/app/data/context/ScrollContext'
import { AccessTokenProvider } from '@jivasoft/jivasoft-lib/dist/app/data/context/AccessTokenContext'
import {
  messageReducer,
  initialMessageState
} from '@jivasoft/jivasoft-lib/dist/app/data/reducers/messageReducer.js'
import {
  scrollReducer,
  initialScrollState
} from '@jivasoft/jivasoft-lib/dist/app/data/reducers/scrollReducer.js'
import {
  ErrorBoundary,
  ErrorFallback
} from '@jivasoft/jivasoft-lib/dist/components'

export const WorkspaceContextAggregate = ({ children }) => {
  const { viewWidth, viewHeight } = useViewport() // Get the current viewport width
  const [themeState, themeDispatch] = useAppTheme() // State and dispatch for theme state
  const [uiState, uiDispatch] = useUI() // State and dispatch for ui state
  const [reload, setReload] = useState(false) // State to manage component reload

  // TODO: Define access tokens here to use in App
  const tokens = {
    mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    coreAccessToken: process.env.REACT_APP_CORE_ACCESS_TOKEN
  }

  // console.log('getBreakpoint()', getBreakpoint(viewWidth))
  const oldBreakpoint = useRef(getBreakpoint(viewWidth)) // Store the previous breakpoint
  useEffect(() => {
    // Set typography scale based on the initial viewport width
    themeDispatch({ type: 'setTypographyScale', currentViewWidth: viewWidth })
    // Set UI state based on initial viewport width
    setUIStates(uiDispatch, viewWidth, false, null)
  }, [])

  useEffect(() => {
    const breakpoint = getBreakpoint(viewWidth)
    if (oldBreakpoint.current !== breakpoint) {
      // Update typography scale if the breakpoint changes
      themeDispatch({
        type: 'setTypographyScale',
        currentViewWidth: viewWidth
      })
      oldBreakpoint.current = breakpoint
    }
  }, [viewWidth, viewHeight])

  return (
    <AccessTokenProvider tokens={tokens}>
      <StepContextProvider
        initialState={initialStepState}
        reducer={stepReducer}
      >
        <SuspendContextProvider
          initialState={initialSuspendState}
          reducer={suspendReducer}
        >
          <GlobalStyles />
          <ErrorBoundary key={reload} ErrorFallback={ErrorFallback}>
            <AppContextProvider
              initialState={initialAppState}
              reducer={appReducer}
            >
              <MenuContextProvider
                initialState={initialMenuState}
                reducer={menuReducer}
              >
                <MessageContextProvider
                  initialState={initialMessageState}
                  reducer={messageReducer}
                >
                  <ScrollContextProvider
                    initialState={initialScrollState}
                    reducer={scrollReducer}
                  >
                    <HeaderContextProvider
                      initialState={initialHeaderState}
                      reducer={headerReducer}
                    >
                      {children}
                    </HeaderContextProvider>
                  </ScrollContextProvider>
                </MessageContextProvider>
              </MenuContextProvider>
            </AppContextProvider>
          </ErrorBoundary>
        </SuspendContextProvider>
      </StepContextProvider>
    </AccessTokenProvider>
  )
}
