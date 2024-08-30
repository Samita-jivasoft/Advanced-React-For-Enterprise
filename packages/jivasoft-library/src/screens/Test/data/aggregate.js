import { getBreakpoint } from 'app/helpers'
import {
  MenuContextProvider,
  StepContextProvider,
  SuspendContextProvider,
  useAppTheme,
  useViewport
} from 'app/data'
import {
  initialMenuState,
  initialStepState,
  initialSuspendState,
  menuReducer,
  stepReducer,
  suspendReducer
} from 'app/data/reducers'
import { useEffect, useRef } from 'react'
import { AccessTokenProvider } from 'app/data/context/AccessTokenContext'

export const TestbedContextAggregate = ({ children }) => {
  const { viewWidth } = useViewport()
  const [themeState, themeDispatch] = useAppTheme()
  const oldbreakpoint = useRef(getBreakpoint(viewWidth))

  useEffect(() => {
    themeDispatch({ type: 'setTypographyScale', currentViewWidth: viewWidth })
  }, [viewWidth, themeDispatch])

  useEffect(() => {
    const breakpoint = getBreakpoint(viewWidth)
    if (oldbreakpoint.current !== breakpoint) {
      themeDispatch({
        type: 'setTypographyScale',
        currentViewWidth: viewWidth
      })
      oldbreakpoint.current = breakpoint
    }
  })

  const tokens = {
    mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
  }

  return (
    <AccessTokenProvider tokens={tokens}>
      <MenuContextProvider
        initialState={initialMenuState}
        reducer={menuReducer}
      >
        <StepContextProvider
          initialState={initialStepState}
          reducer={stepReducer}
        >
          <SuspendContextProvider
            initialState={initialSuspendState}
            reducer={suspendReducer}
          >
            {children}
          </SuspendContextProvider>
        </StepContextProvider>
      </MenuContextProvider>
    </AccessTokenProvider>
  )
}
