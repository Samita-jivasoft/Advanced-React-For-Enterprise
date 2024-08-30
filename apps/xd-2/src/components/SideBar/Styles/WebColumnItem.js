import styled from "styled-components";
import {IoIosArrowForward} from 'react-icons/io';

export const StyledMenuItem = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background: ${({theme})=>theme.overlayDim};
    // border-radius: 0 0 0 0;
    border-bottom:1px solid ${({theme})=>theme.overlayDimmest};
    // border-top:1px solid black;
    // height: 5%;
    width: 100%;
    padding: 8%;
    align-items:center;
    justify-content:center;
    transition: 0.3s;
    &: hover {
        cursor: pointer;
        color:white;
        background: ${({theme})=>theme.primaryShadeBase};
    }
`

export const StyledRightIcon = styled(IoIosArrowForward)`
    font-size: 150%;
    color: blue;
`

//'#229756'