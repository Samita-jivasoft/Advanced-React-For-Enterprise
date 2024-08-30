import { LightenDarkenColor, generateElement } from 'app/theme'
import styled, { css, keyframes } from 'styled-components'
export const MainContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ isEdit }) => (isEdit ? 'center' : 'flex-start')};
`
export const Display = styled.div`
  width: fit-content;
  height: 100%;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ selection }) => (selection ? '0px 8px 0px' : null)};
  border-radius: 4px;
`
