import {
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_PADDING,
  MAX_Z_INDEX
} from 'app/globalStyles'
import { hexToRgbA } from 'app/helpers'
import styled, { css, keyframes } from 'styled-components'
const expandOutAnimation = keyframes`
  0% {
    scale:1;
    opacity: 1;
    diplay:flex;

  }
  100% {
    scale:.9;
    opacity: 0;
    display:none;
  }
`;
const expandInAnimation = keyframes`
  0% {
  
    scale:.9;
    opacity: 0;
    display:none;
  }
  100% {
    scale:1;
    opacity: 1;
    diplay:flex;
  }
`;
export const StyledWorkflow = styled.div`
width:100%;
${({ theme }) => theme?.animation?.entrance?.expandIn};
  height: 100%;
  box-sizing: border-box;
  display: flex;
  overflow-y:hidden;
  diplay:flex;

  flex-direction: column;
  // padding:10px;
  z-index:2;
  ${({ workflow }) => {
    if (!workflow) {
      return css`
      ${({ theme }) => theme?.animation?.exit?.expandOut};
  diplay:none;
  `}
  }}
  
`
export const StyledModalWorkflow = styled.div`
width:50%;
  height: 50%;
  position:absolute;
  box-sizing: border-box;
  display: flex;
  overflow-y:hidden;
  //background:green;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background-color: ${({ theme }) => hexToRgbA(theme.id === 'light' ? theme.bg0 : theme.bgb3, .6)};
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1em);
    -ms-filter: blur(1px);
  }
  flex-direction: column;
  // padding:10px;
  z-index:2;
  
`
export const StyledWorkflowHeader = styled.div`
display:flex;
right:0;
max-width:40vw;
padding:5px;
z-index:500;
@media (max-width: 800px) {
  bottom:0;
  max-width:100vw;

}
@media (min-width: 801px) {
  top:0;
  max-width:100vw;

}
justify-content:flex-end;
flex-direction:row;
> * {
  margin-right: 3px;
}

`
export const StyledWorkflowBody = styled.div`
  // flex:6;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // background-color: green;
`
