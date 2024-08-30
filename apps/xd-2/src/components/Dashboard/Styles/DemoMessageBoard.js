import styled from 'styled-components'
import { DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING } from "app/globalStyles";

export const DemoMessageBoardStyled = styled.div`
padding:${DEFAULT_UI_PADDING};
display:flex;
align-items:center;
overflow:scroll;
justify-content:center;height:100%;
@media (max-width: 800px) {
    justify-content:flex-start;

}
flex-direction:column;

 `

export const DemoMessagePanelStyled = styled.div`
${({ theme }) => theme.pane0};
display:flex;
max-width:650px;
align-items:center;
flex-direction:column;
border-radius:20px;
margin:${DEFAULT_UI_MARGIN}
overflow-y:auto;


 `
export const DemoMessagePostStyled = styled.div`
${({ theme }) => theme.pane0};
display:flex;
width:80%;
padding:25px;
flex-direction:column;
margin:${DEFAULT_UI_MARGIN}

 `