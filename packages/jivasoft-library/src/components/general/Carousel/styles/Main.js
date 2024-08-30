import styled from "styled-components";

export const StyledMainDiv = styled.div`
    display:flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height:${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    padding:3%;
    // row-gap: 3vw;
    // min-width: 350px;
    // min-height: 650px;
`

export const StyledSlideShowDiv = styled.div`
    display:flex;
    flex-direction:row;
    background-color: blue;
    align-items:center;
    justify-content: space-evenly;
    height:100%;
    width:100%;
`

