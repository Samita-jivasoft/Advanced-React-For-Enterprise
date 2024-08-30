import styled, { css } from 'styled-components'

export const SpinnerStyled = styled.div`
  ${({ theme, size }) => css`
    border-radius: 50%;
    box-sizing: border-box;
    border: ${size * 0.2}px solid ${theme.bgb3};
    border-top: ${size * 0.2}px solid ${theme.bga3};
    width: ${size}px;
    height: ${size}px;
    ${theme?.animation?.emphasis?.spin}
  `}
`
