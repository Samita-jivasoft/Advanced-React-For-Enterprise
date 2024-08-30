import { generateElement } from 'app/theme'
import { LightenDarkenColor } from '../../../../app/helpers'
import styled from 'styled-components'

export const SubMenuDiv = styled.div`
  // border: solid 1px blue;
  display: ${props => props.display};
  position: ${props => props.position};
  left: ${props => props.left};
  display: flex;
  position: absolute;
  align-items: center;
  list-style: none;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 210;
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
  font-size: 0.8rem;
  border-radius: 8px;
  //border-bottom-left-radius: 0px;
  //border-top-left-radius: 0px;
  padding: 0px !important;
  max-width: 500px;
  // min-width: 150px;
  width: fit-content;
`
