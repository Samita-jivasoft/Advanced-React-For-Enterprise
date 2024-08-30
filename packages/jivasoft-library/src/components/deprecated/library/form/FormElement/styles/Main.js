import { DANGER_COLOR, DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING } from 'app/theme'
import styled from 'styled-components'
import { FixedSizeList as List } from 'react-window'

export const CheckStyled = styled.div`
 background: ${({ theme }) => theme.successColor};

`
export const SearchDropdownInput = styled.input`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
// color: isMatch;
width: 95%;
padding:15;
font-weight:bold;
// background-color: themeState.currentTheme.bgb3 
`

export const SelectedItemStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${DEFAULT_UI_PADDING};
  font-weight:bold;
  color:${({theme})=>theme.successColor};
  margin:5px;
  &: hover{
    cursor: pointer;
  }
  border: 1px solid ${({theme})=>theme.successColor} !important; 
  background:${({ theme }) => theme.panela1};

  `
export const InputContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  // padding: ${DEFAULT_UI_PADDING};
  // margin: ${DEFAULT_UI_MARGIN};
  flex-direction: column;
  // flex-basis:30%;
  width:95%;
  max-width:650px;
 @media (min-width:900px){
  width:48%;

 }
 @media (max-width:600px){
  // border-radius:40px;

 }
 ${({ theme }) => theme.panel0};
//  border-radius:5px;
//  background: ${({ theme }) => theme.bg0};
margin:.4%;
 // border:2px solid green;


  input{
    // -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    // box-shadow: 5px 5px 15px 5px #000000;
    align-self:center;
    justify-self:center;
    border: 1px solid ${(props) => props.isValid? props.theme.successColor:props.theme.dangerColor} !important;
    // background-color: ${({ theme }) => theme.bgb3};
    color:${(props) => props.isValid? props.theme.successColor:props.theme.text};
    ${(props) => props.value? props.theme.panela1:props.theme.neoEmbedPanelb1};

    ::placeholder{
    color: grey;
    opacity: 1;

  }
  font-weight:bold;
  :hover{
    background:${({ theme }) => theme.neoEmbedPanelb1};
    // padding:15px;
  }
  :focus {
    ${({ theme }) => theme.neoEmbedPanelb1};

    // background-color: ${({ theme }) => theme.bg0};
    outline: none !important;
    // box-shadow: 0 0 10px  ${({ theme }) => theme.bgb2};
  }

    // border-radius:5px;
    width:100%;
  
    @media (max-width: 600px) { border-radius: 40px; }
      margin:1%;
  }

  label {
    color: ${({ theme }) => theme.textDarkest};
    font-weight: bold;
    font-size:1rem;
  }
`

export const RemainingRecsStyled = styled.div`
  font-size: 0.8rem;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  margin:.5rem;
  

  color:  ${({theme})=>theme.dangerColor};
  overflow-y: wrap;
  
`

export const CompletedRecsStyled = styled.div`
  font-size: 0.8rem;
  flex-direction: row;
  display: flex;
   color: ${({ theme }) => theme.successColor};

`

export const DropdownStyled = styled(List)`
height:${({ height }) => height};
padding:20px;
z-index:200;


  color: ${({ theme }) => theme.text};
 ${({ theme }) => theme.panea2};

`

export const RowStyled = styled.div`
text-align:center;
background:${({ theme,active }) => active?theme.bga3:null};

  color: ${({ theme }) => theme.text};
  &: hover{
    cursor: pointer;
    background:${({ theme }) => theme.bga3};
  }
`
