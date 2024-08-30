import styled, { keyframes } from 'styled-components'
import { fadeInAnimation } from '@jivasoft/jivasoft-lib/dist/app/theme/constants/animation';

const slidein = keyframes`
  0% {
    transform: translateY(1%);

  }
  100% {
    transform: translateY(0%);
  }
`;
export const StepContainerStyled = styled.div`

animation: ${slidein} .3s ease-out forwards, ${fadeInAnimation} .5s ease-out forwards;
display:flex;
flex-direction:column;
height:100%;
width:100%;
overflow-y:hidden;
background: ${({background,theme})=>background?background:theme.id=='light'?'white':theme.bgb1};
box-sizing:border-box;
`

