import { GradientLinearToTop, DEFAULT_UI_MARGIN, GradientLinearToBottom } from 'app/globalStyles'
import styled from 'styled-components'
import { fadeInAnimation } from '@jivasoft/jivasoft-lib/dist/app/theme/constants/animation'
// These are Mario's styles from the old app. They are mysterious.

export const StyledAuthContainer = styled.section`
  ${GradientLinearToBottom}
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const StyledAuthWrapper = styled.section`
  display:flex;
  flex-direction:${props=>props.flexDirection};
  width: ${props=>props.width};
  border-radius:10px;
  justify-content:center;
  height:${props=>props.height};
  align-items:${props=>props.flexDirection=='column'?'center':null};
  animation: ${fadeInAnimation} 0.5s ease-in;
  animation-delay: -0.3s;
`