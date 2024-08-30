import styled from "styled-components";

export const StyledDotDiv = styled.div`
    border-radius: 50%;
    width: 1.75vh;
    height: 1.75vh;
    background-color: ${props => props.active ?  '#0000FF' : '#A0A0A0'};
    cursor:pointer;
`

export const StyledStepperDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    width:100%;
    height:5%;
    padding:3%;
    border-radius:5px;
    column-gap:3%;
`