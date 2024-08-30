import styled from "styled-components";

export const StyledMobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content:center;
    overflow: scroll;
`

export const ParentFriendlyName = styled.div` 
    display: flex;
    align-items:center;
    position:absolute;
    top:0;
    // background:red;
    height:10%;
    justify-content: center;
    color: ${({theme}) => theme.text};
    font-size: 1rem;
    @media (max-width:600px){
        font-size:2rem
    }
    font-weight: bold;
    // height: 10%;
    pointer-events: none;
    width: 100%;
    //background: blue;
`

export const ChildColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        flex-direction: column;

      }
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    //background: orange;
    overflow-y: scroll;
`


