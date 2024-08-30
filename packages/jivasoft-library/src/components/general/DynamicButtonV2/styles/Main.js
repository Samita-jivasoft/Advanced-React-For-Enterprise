import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled, { css } from 'styled-components'

export const StyledDynamicButtonV2 = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 150px;
  cursor: pointer;
  width: ${props => (props.width ? props.width : null)};

  border: ${props => (props?.stroke ? '1px solid ' + props?.color : null)};
  // default styles
  border-radius: ${props => (props.mobile ? '2rem' : '.2rem')};
  font-weight: ${props => (props.mobile ? 'bold' : 'normal')};

  // based on size
  padding: ${props => (props.mobile ? '0 0.5rem' : '0 0.5rem')};
  height: ${props => (props.mobile ? '2.6rem' : '1.8rem')};
  font-size: ${props => (props.mobile ? '1.2' : '0.8rem')};
  color: ${({ disabled, color, theme }) =>
    disabled ? theme.grey600Base : color ?? theme.text} !important;
  background: ${({ disabled, backgroundColor, theme }) =>
    disabled
      ? theme.grey700Base
      : `-webkit-linear-gradient(45deg,${
          backgroundColor ?? null
        },${LightenDarkenColor(
          standardizeColor(backgroundColor ?? null),
          60
        )});`};

  ${({ theme, animate }) => animate && theme?.animation?.emphasis?.lowPulse};
  ${({ theme }) => theme.selectable}
`
