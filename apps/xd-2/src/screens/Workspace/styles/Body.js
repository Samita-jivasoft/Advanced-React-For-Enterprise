import {DEFAULT_UI_PADDING,DEFAULT_UI_MARGIN,DEFAULT_UI_BORDERRADIUS } from "app/globalStyles"
import styled from "styled-components"
export const StyledWorkspaceBodyContainer = styled.div`
  display: flex;
  background-color:${({theme})=>theme.base};
  height:100%;
  margin-right:${DEFAULT_UI_MARGIN};
  margin-bottom:${DEFAULT_UI_MARGIN};

`
export const StyledWorkspaceBody = styled.div`
  display: flex;
  width:100%;
  padding:${DEFAULT_UI_PADDING};
  -webkit-box-shadow: ${({theme})=>theme.navShade};
  box-shadow: ${({theme})=>theme.navShade};
  border-radius: ${DEFAULT_UI_BORDERRADIUS}
`