import styled from "styled-components"

export const DroppableDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    height: 95%;
    min-height: 200px;
    width: 98%;
    padding: 5% 0 5% 0;
    gap: 1%;
    overflow: ${props => props.overflow};
`

export const OverflowDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    padding: 5% 0 5% 0;
    gap: 3%;
    overflow: ${props => props.overflow};
    //background: pink;
`

export const DraggableDiv = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // min-height: 35%;
    pointer-events: auto;

    
    // max-height: 50%;
    width: 90%;
    min-width: 100px;
    background: ${({theme}) => theme.overlayBrightest};
    border-radius: 5px;
    // border: solid 1px ${({theme}) => theme.highlight};
    color: ${({theme}) => theme.text};
    gap: 10px;
    -webkit-box-shadow: ${({theme})=>theme.navShade};
    box-shadow: ${({theme})=>theme.navShade};
    : hover{
      background: ${({theme}) => theme.overlayBright};
      //border: solid 3px white;

    }
`

export const CardDiv = styled.div`
  display: flex;
      background:red;

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  
  height: 100%;
  width: 100%;
  gap: 2%;
`