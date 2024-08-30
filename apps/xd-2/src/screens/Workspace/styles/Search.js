import { DEFAULT_UI_BORDERRADIUS,DEFAULT_UI_PADDING} from "app/globalStyles";
import styled from "styled-components";

export const StyledSearchbar = styled.div`
display:flex;
width:40%;
min-width:100px;
padding: ${DEFAULT_UI_PADDING};
border-radius: ${DEFAULT_UI_BORDERRADIUS};
background-color:${({theme})=>theme.overlay};
align-items:center;
color:${({theme})=>theme.textColorSecondary};

`