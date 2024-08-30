import styled from "styled-components";
import {FaArrowAltCircleLeft, FaBackspace, FaBars, FaTimes} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { motion } from "framer-motion";
import { GoChevronLeft } from "react-icons/go";
import { MdMenuOpen,MdMenu } from "react-icons/md";

export const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 20%;
    // background-color:red;
    //position:absolute;
    //z-index:100;
    justify-content: flex-start;
    align-items: center;
`

export const StyledSideMenuBar = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 95%;
    background: midnightblue;
    font-size: 150%;
    gap: 3%;
`
export const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    border: 0;
    background: ${props => props.background || 'white'};
    border-radius: 8px;
    font-size: 100%;
    padding: 5% 8% 5% 8%;
    border-radius:4px;
    margin-top: ${props => props.marginTop};

    &: hover{
        cursor: pointer;
        color: black;
    }
`
export const StyledBarsIcon = styled(MdMenu)`
    // background-color: ${({theme})=>theme.text};
    font-size:25px;
    transition: 0.5s;
    margin-top: 10px;
    &: hover{
        cursor: pointer;
        // font-size:2.2rem;
        // color: red;
    }
`

export const StyledBarsCloseIcon = styled(GoChevronLeft)`
background-color: ${({theme})=>theme.text};
font-size:25px;
color: red;

transition: 0.5s;
margin-top: 10px;
&: hover{
    cursor: pointer;
    // font-size:2.2rem;
}
`

export const StyledCloseIcon = styled(FaTimes)`
// background-color: ${({theme})=>theme.text};
font-size: 120%;
text-align:left;
    transition: 0.5s;
    margin-top: 10px;

    &: hover{
        cursor: pointer;
        color: red;
    }
`

