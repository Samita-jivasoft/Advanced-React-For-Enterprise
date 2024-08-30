import styled from "styled-components"
export const StyledDisplayDate = styled.div`
  display: flex;
  flex: 1 0 21%; 
  flex-direction: column;
  border-radius:20px;
  flex: 1 0 21%;
text-align:center;
  @media (max-width: 600px) {
    border-radius:100px;

  }
  border:1px solid ${({theme})=>theme.overlayNeutral};

  align-items: center;
  justify-content: center;

  //color:${({theme})=>theme.text};
  // color: ${({selected}) => selected ? ({theme})=>theme.text :  ({theme})=>theme.textDarkest};
  max-height:150px;
  max-width:100px;
  padding:10px;
  background-color: ${({selected}) => selected ? ({theme})=>theme.overlayBrightest :  ({theme})=>theme.overlayDim};
 
  
`