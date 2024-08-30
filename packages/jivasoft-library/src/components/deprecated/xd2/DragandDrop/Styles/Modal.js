import styled from "styled-components";
import {AiFillCloseCircle} from 'react-icons/ai'

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255,255,255,0.01);
    backdrop-filter: blur(5px);
`
export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-Content: center;
    background: white;
    ${props =>{
        if(props.viewWidth < 800 && props.viewWidth >= 600){
            return `height: 60%; width: 60%;`
        } else if (props.viewWidth < 600 && props.viewWidth >=400) {
            return `height: 60%; width: 70%;` 
        } else if(props.viewWidth < 400){
            return `height: 60%; width: 80%;`
        }
        else{
            return `height: 60%; width: 60%;`
        }
    }}
    padding-bottom: 5%; 
    min-width: 40vw;
    background-color: rgba(14,62,108,0.9);
    border-radius: 1rem;
    border: solid 3px #1763AD;
    color: white;
    position: relative;
    font-size: calc(1rem + 1vmin);
    gap: 3%;
`

export const CloseIcon = styled(AiFillCloseCircle)`
    height: calc(1rem + 1vmin);
    width: calc(1rem + 1vmin);
    background: black;
    border-radius: 1rem;
    color: red;
    position: absolute;
    top: -10px;
    right: -10px;
    transition: 0.5s ease in;
    &: hover{
        height: calc(1.5rem + 1vmin);
        width: calc(1.5rem + 1vmin);
        top: -15px;
        right: -15px;
    }
`
