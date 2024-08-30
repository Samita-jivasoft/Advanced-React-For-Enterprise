import styled from "styled-components";
import { motion } from "framer-motion";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

export const StyledSwitchDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 70vw;
    column-gap:5vh;
    background:beige;
    overflow:hidden;
`
export const StyledClearButton = styled.button`
    background-color: pink;
    display:flex;
    outline:none;
    align-items:center;
    justify-content:center;
    border:none;
    height: 20px;
    width: 20px;
`

export const StyledLeftIcon = styled(AiOutlineLeft)`
color: black;
font-size:100px;

// transitions: .4s;
padding:1%;
&: hover{
    cursor:pointer;
    color:red;
}
`

export const StyledRightIcon = styled(AiOutlineRight)`
    color: black;
    font-size:100px;

    // transitions: .4s;
    padding:1%;
    &: hover{
        cursor:pointer;
        color:red;
    }
`

