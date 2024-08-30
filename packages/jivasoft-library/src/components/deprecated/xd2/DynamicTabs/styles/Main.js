import { LightenDarkenColor } from 'app/helpers'
import styled from 'styled-components'

export const TabsMainStyled = styled.div`


`
export const TabsHeaderStyled = styled.div`
display:flex;
align-items:flex-end;
flex-drection:column;
// border-radius:4px 4px 0px 0px !important;
padding:0px !important;
overflow-x:auto;
@media (max-width: 600px) {
  max-width:100vw;

}
  
-ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
 ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
max-width:60vw;
max-height:35px;
position:sticky;
`
export const TabsBodyStyled = styled.div`
display:flex;
flex-drection:column;
border-radius:0px 0px 4px 4px !important;
// overflow-y:auto !important;
// max-height:100vh;
`
export const TabItemStyled = styled.div`
position:relative;
font-size:12px;
height:35px;
align-items:center;


  border-radius:0px !important;
  border: 0px solid red !important;
  border-bottom-width:${({ theme, selected }) => selected ? '3px' : '0px'}  !important;
 border-bottom-color:${({ theme, selected }) => selected ? theme.successColorBase : null} !important;
display:flex;
color:${({ theme, selected }) => selected ? theme.successColorBase : theme.id=='light'?LightenDarkenColor(theme.text,100): LightenDarkenColor(theme.text,-100)};
padding-right:10px !important;
padding-left:10px !important;
&: hover{
    
    cursor: ${({ selected, linear }) => (!selected && linear) ? 'not-allowed' : 'pointer'};
   
    background: ${({ theme, selected }) => theme.materiala1};
  
}
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