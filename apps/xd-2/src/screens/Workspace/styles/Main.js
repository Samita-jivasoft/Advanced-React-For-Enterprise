import {
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_PADDING,
  LIGHT_BACKGROUND
} from 'app/globalStyles'
import styled from 'styled-components'
export const WorkspaceMainStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  touch-action:none;
  overlow: hidden;
  -webkit-overflow-scrolling: touch;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
// overflow:hidden;
  align-items: center;
  justify-content: center;
`
export const WorkspaceBodyStyled = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 1), transparent);
  //background: blue;
  height: 100%;
  box-sizing: border-box;
  width: ${props => props.width};
  
  // border: 1px solid red;

  flex-direction: column;
  position: absolute;
  right: 0;
  //z-index:100;
`

export const WorkspaceNavbarBufferStyled = styled.div`
  width: 60px;
  //height: 100%;
  // z-index: 400;
  position: absolute;
  @media (max-width: 600px) {
    width: 60px;
  }
  left: 0;
  box-sizing: border-box;
`
export const WorkspaceSearchBufferStyled = styled.div`
  width: 100%;
  //height:100%;
  //flex: .5;
  // height:100px;
  // height: 100%;
  z-index:98 !important;
  // position: absolute;
  // background:red;
  // @media (max-width: 600px) {
  //   width: 60px;
  //padding: 10px;
  // }
  // top: 0;
  border-radius: 0px !important;
  display: flex;
  background-color:${props => props.backgroundColor};
  justify-content: center;
  flex-direction: row;
  // background: orange;
  box-sizing: border-box;
`
export const WorkflowBufferStyled = styled.div`
  width: 100%;
  height: 100%;
  flex: 10;
  align-items:center;
  justify-content:center;
  z-index: 0;
  // position: absolute;
  // @media (max-width: 600px) {
  //   width: 60px;
  // }
  bottom: 0;
  overscroll-behavior: none;

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
  overflow-y:scroll;
  padding:${props => props.padding};
  // background: green;
  box-sizing: border-box;
`
export const WorkspaceHeaderStyled = styled.div`
  // width: 100%;
  height: 100%;
  display: flex;
  // background: green;
  box-sizing: border-box;
  align-items:center;
  justify-content:center;
`

export const StyledWorkspaceMainContainer = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
  left: 0;
  flex-direction: column;
  // z-index: 10;
`
