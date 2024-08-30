import {
  DEFAULT_UI_BORDERRADIUS,
  MOBILE_UI_BORDERRADIUS
} from 'app/globalStyles'
import styled, { keyframes } from 'styled-components'
import { fadeInAnimation } from '@jivasoft/jivasoft-lib/dist/app/theme/constants/animation'

export const StepTypeMainStyled = styled.div`
  animation: ${fadeInAnimation} forwards 0.5s;

  box-sizing: border-box;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  wrap: flex-warp;
  align-items: center;
`
