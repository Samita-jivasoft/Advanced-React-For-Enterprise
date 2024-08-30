import { bgb3gradientbordered } from 'app/globalStyles'
import styled from 'styled-components'

export const DashboardItemMainStyled = styled.div`
width: 100%;
padding:1rem;
flex: 1;
// background:red;
${({theme})=>theme.panel0};
display: flex;
flex-direction:column;
box-sizing: border-box,
align-items:center;
justify-content: center;
// border-radius:viewWidth>600 ?'5px':'30px',
color:${({theme})=>theme.text};



`
export const DashboardSubItemMainStyled = styled.div`
width: 100%;
padding:1rem;
flex: 1;
// background:red;
${({theme})=>theme.panela1};
display: flex;
&: hover{
    cursor:pointer;
    ${({theme})=>theme.panela2};

}
flex-direction:column;
box-sizing: border-box,
align-items:center;
justify-content: center;

`