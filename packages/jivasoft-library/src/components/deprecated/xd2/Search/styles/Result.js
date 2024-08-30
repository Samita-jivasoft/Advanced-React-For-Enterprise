import styled from "styled-components";
import {BsPinAngleFill} from 'react-icons/bs'


export const StyledSearchResult = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: center;
    overflow:hidden;
    text-align:center;   
    cursor: pointer;
    row-gap: .5rem;
    font-size: .8rem;
    font-weight: bold;
    font-family: sans-serif;
    border: 0;
    border-radius: 5px;
    height: 8rem;
    width: 9rem;
    padding: 0 2% 0 2%;
    border:1px solid ${props => props.color === 'fire' ? "#ad1f0c" : props.theme.materiala1};
    background: ${props => props.color === 'fire' ? "#ad1f0c" : props.theme.materialb1};
    color: ${props => props.color=== 'fire' ? "black" : props.theme.text};
    // color:white;
    transition: 0.5s;

    &: hover{
        border: 1px solid white;
    }
`;

export const StyledResultItem = styled.div`
${props => props.theme.panela2};
max-width:650px;
width:100%;
transition: 0.25s;

`
export const StyledSearchResultList = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: auto;
    padding-top: 10px;
    font-size : 1rem;
    font-weight: 500;
    &:hover{
        cursor: pointer;

    }
    &:hover ${StyledResultItem} {
        ${props => props.theme.panela3};
         font-size : calc(1rem + .1vmin);  }
  
`

export const StyledPinDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 5px;
    width: 100%;
    height: 25%;
`

export const StyledIconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%;
`

export const StyledPinIcon = styled(BsPinAngleFill)`
    height: 80%;
    width: 80%;
    color: ${props => props.theme.text || 'lightgreen'};
    transition: 0.5s;
    padding: 10%;
    
    &: hover{
        padding: 0;
        border-radius: 100%;
    }
`
 