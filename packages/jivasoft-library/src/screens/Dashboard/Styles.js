import styled, { css } from 'styled-components'
import {
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_PADDING,
  DEFAULT_UI_BORDERRADIUS
} from 'app/theme'
import { generateElement } from 'app/theme'

// Styled container for the dashboard
export const DashboardStyled = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  padding: ${DEFAULT_UI_PADDING};
  margin-left: ${DEFAULT_UI_MARGIN};
  gap: ${DEFAULT_UI_PADDING};
  overflow: auto;
  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.scrollable}

`

// Styled individual widget ==> borrowed from XD2
export const WidgetStyled = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: ${DEFAULT_UI_MARGIN};
  margin-bottom: ${DEFAULT_UI_MARGIN};
  display: flex;
  flex-direction: column;
  border-radius:  ${DEFAULT_UI_BORDERRADIUS} !important;
  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.selectable};

  ${({ theme }) =>
    theme.id === 'light'
      ? generateElement({
          type: 'panel',
          color1: theme.bga2,
          border: 'white',
          transparency: 0.5
        })
      : theme.panelb1};

  &:hover {
    ${({ theme }) =>
      theme.id === 'light'
        ? generateElement({
            type: 'panel',
            color1: theme.bg0,
            border: theme.bga3,
            transparency: 0.5
          })
        : theme.panel0};

    cursor: pointer;
  }
`
