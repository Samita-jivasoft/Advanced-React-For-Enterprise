import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledDynamicHeader = styled(motion.section)`
    // border: 2px solid maroon;
    //display: ${props => props.display ? 'flex' : 'none'};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%; 
    height: ${props => props.height};
    //top: ${props => props.top ? '0' : '-100px'};
    //bottom:0;
    // height:5vh;
    // min-height:50px;
    padding : 0 10px 0 10px;
    position:relative;
    justify-content:center;
    box-sizing:border-box;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    transition: height .25s ease-in-out;
    '
`
export const StyledBanner = styled.div`
    // border: 2px solid pink;
    flex-direction: column;
    position:relative;
    display: flex;
    // padding: 5px;
`
export const StyledTitleBox = styled.div`
// border: 2px solid red;
display: flex;
justify-content:center;
// padding:5px;
flex:1;
`
export const CenterItemsStyled = styled.div`
    // border: 2px solid teal;
    font-size: 0.8rem;
    flex:1;
    // width:50%;
`
export const ItemsContainer = styled.div`
    // border: 2px solid green;
    display: flex;
    justify-content:center;
    // padding:5px;
    align-items:center;
    flex:1;
    flex-wrap:wrap;
    overflow-x:auto;
    gap: .5rem;
`
export const ItemsContainerWrapper = styled.div`
padding-bottom:10px;
@media (max-width:600px){
    position:fixed;
    bottom:0;z-index:99;
    background:${({ theme }) => theme.bgb3};width:100%;left:0;

}
`