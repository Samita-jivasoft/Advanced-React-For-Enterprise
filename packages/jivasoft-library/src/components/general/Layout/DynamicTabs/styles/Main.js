import { LightenDarkenColor } from '../../../../../app/helpers'
import { FaAsterisk } from 'react-icons/fa';
import styled, { keyframes, css } from 'styled-components'
import { shakeAnimation } from '../../../../../app/theme/constants/animation';

export const TabsMainStyled = styled.div`


`
export const StackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;  // Adds depth perception
`;

export const TabsHeaderStyled = styled.div`
display:flex;
flex-drection:column;
// border-radius:4px 4px 0px 0px !important;
padding:0px !important;
overflow-x:auto;
-ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
 ::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

width:100%;
height:100%;

align-items:flex-end;
position:sticky;
`
export const TabsBodyStyled = styled.div`
display:flex;
flex-drection:column;
border-radius:0px 0px 4px 4px !important;
// overflow-y:auto !important;
// max-height:100vh;
`
const textSlideIn = keyframes`
0% {
  transform: translateX(-5%);
  opacity: 0;
}
100% {
  transform: translateX(0);
  opacity: 1;
}
height:100%;
`

export const TabItemStyled = styled.div`
position:relative;
margin-right:2px !important;
padding-right:${({ selected }) => selected ? '30px' : null} !important;
padding-left:${({ selected }) => selected ? '30px' : null} !important;
user-select:none;
align-items:center;
justify-content:center;
@media (max-width: 600px) {

  }
  border-top-right-radius:4px !important;
  border-top-left-radius:4px !important;

  // border: 0px solid red !important;

 background:${({ theme, selected }) => selected ? 'white' : null} !important;
display:flex;
color:${({ theme, selected }) => selected ? theme.text : theme.id == 'light' ? LightenDarkenColor(theme.text, 100) : LightenDarkenColor(theme.text, -100)};
padding-left:15px;
padding-right:15px;

font-size:1rem;
font-weight:bold;
height:90%;
white-space:no-wrap !important;
border-radius-top-right:10px;
${({ selected }) => selected ? css`
animation: ${textSlideIn} 0.7s forwards 0s;

`: null};
&: hover{
    cursor: ${({ selected, linear }) => (!selected && linear) ? 'not-allowed' : 'pointer'};
    background:${({ theme }) => theme.bga1};
}
min-height:35px;
`

export const RequiredBadgeStyled = styled.div`
  height:20px;
  width:20px;
  align-items:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  background: ${({theme})=>theme.dangerColor};
  margin-left:10px;
  border-radius: 50%;
  color:white;
  font-size:.8rem;
  animation: ${(props) => !props.selected ? css`2s ${shakeAnimation} infinite` : null};

`
export const RequiredAsteriskStyled = styled(FaAsterisk)`
color: ${({theme})=>theme.dangerColor};
  font-size:.5rem;
  margin-left:10px;

`

export const TabItemNotificationStyled = styled.div`
background-color:${({ theme }) => theme.dangerColor};;
position:absolute;
right:3px;
top:1px;
color:white;
padding-right:5px;
padding-left:5px;
border-radius:100px;
font-weight:bold;
font-size:10px;
`