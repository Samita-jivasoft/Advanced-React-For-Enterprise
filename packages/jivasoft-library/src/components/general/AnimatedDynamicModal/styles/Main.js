import styled from 'styled-components'

export const Background = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height:100vh;
    //background: lime;
    z-index:999

`
export const PopUp = styled.div`
    display:flex;
    width:60%;
    height:60%;
    background-color: white;
    flex-direction: column;
    border: 2px solid ${props => props.themeColor};
    border-radius:10px;
    overflow:hidden;
`
export const ContentWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    //background-color: red;
    height:100%;
    width: 100%;
    justify-content:space-between;
    z-index:0;
`
export const MiddleContainer = styled.div`
    // border:2px solid red;
    display:flex;
    align-items: center;
    justify-content:center;
    background: white;
    flex-direction:column;
    ${({theme})=>theme.pane0};

    overflow-y:scroll;
   //padding:30px;
    height:100%;
    width: 100%
`
export const BodyItems = styled.div`
    // border:2px solid green;
    display:flex;
    flex-direction:column;
    align-items:center;
    // height:100%;
    // width:100%;
`

export const Banner = styled.div`
    // border:2px solid green;
    display:flex;
    flex-direction:column;
    // position:sticky;
    // top:0;
    background-color: ${props => props.themeColor};
    color:white;
`

// styles for bottom sheet
export const Container = styled.div`
    border:5px solid blue;
    position: fixed;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: rgba(0,0,0,${props => props.opacity});
    visibility:${props => props.visibility}
    // transform: ${props => props.visibility === 'hidden' ? `translateY(0%)` : `translateY(100%)`};
`
export const SheetList = styled.div`
    // border:5px solid pink;
    display:flex;
    flex-direction: column;
    background-color: white;
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: translateY(${props => props.translate}%);
`