import { generateElement } from 'app/theme'
import { LightenDarkenColor } from '../../../../app/helpers'
import styled, { css } from 'styled-components'

export const MenuContextOverlay = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: ${props => props.top + 'px'};
  left: ${props => props.left + 'px'};
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  pointer-events: all;
  z-index: 998;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  //min-height: 350px;
  //min-width: 250px;
  width: auto;
  //background: red;
  //padding: 5px;
  z-index: 999;
  position: absolute;
  ${({ top, left }) => css`
    top: ${top};
    left: ${left};
  `}
`

export const MenuDiv = styled.div`
  border: 1px solid red;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 999;
  ${({ textColor, theme }) => (textColor ? textColor : theme.text)};
  ${({ backgroundColor, theme }) =>
    backgroundColor
      ? generateElement({
          type: 'pane',
          color1: backgroundColor,
          color2: LightenDarkenColor(backgroundColor, 100),
          border: LightenDarkenColor(backgroundColor, 200),
          transparency: 0.3
        })
      : theme.panea1};
  flex-wrap: wrap !important;
  padding: 0px !important;
  overflow-x: hide;
  font-size: 0.8rem;
  border-radius: 8px;
  width: fit-content;
  max-width: 250px;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
`
