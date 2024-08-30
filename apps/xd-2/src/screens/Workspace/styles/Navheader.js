import { LIGHT_BACKGROUND,DEFAULT_UI_PADDING,DEFAULT_UI_MARGIN } from "app/globalStyles"
import styled from "styled-components"
export const StyledWorkspaceNavheader = styled.div`
  display: flex;
  flex-direction:row;
  padding:${DEFAULT_UI_PADDING};
  // background-color:${({theme})=>theme.overlay};
  width:calc(100% - ${DEFAULT_UI_PADDING+DEFAULT_UI_PADDING});
  margin-top:${DEFAULT_UI_MARGIN};
  margin-right:${DEFAULT_UI_MARGIN};

  // z-index:1;
  align-items:center;
  justify-content:space-between;
`