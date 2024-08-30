import styled, { css, keyframes } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex; /* Use flex to center the inner div */
  justify-content: center;
`
export const FieldDisplayContainerStyled = styled.div`
  font-weight: ${({ canedit, value }) =>
    value.length === 0 ? (canedit === 1 ? null : '800') : '800'} !important ;

  width: 100%;

  font-size: ${({ canedit }) => (canedit ? '.9rem' : '1.1rem')} !important ;
  // padding-top:5px;
`