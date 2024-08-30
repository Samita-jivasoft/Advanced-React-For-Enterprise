import styled from 'styled-components'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  // height: 10%;
  width: 94%;
  padding: 0 2% 0 2%;
  background: ${({ theme }) => theme.overlayBright};
  border-radius: 5px;
  margin-top: 3%;
  // overflow-x: scroll;
`

export const HeaderDiv = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  // height: auto;
  min-width: 100%;
  border-radius: 5px;
  font-size: calc(${props => props.fontRem + 'rem'} + 0.75vmin);
  // font-weight: bold;
  // flex-shrink: 0;
  flex-wrap:wrap;
  padding:1%;

`

export const GeneralInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // height: ${props => props.height + '%'};
  width: 98%;
`

export const TitleDiv = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  // height: 20%;
  //background: green;
  font-size: calc(${props => props.fontRem + 'rem'} + 1vmin);
  font-weight: bold;
  margin: 0% 0 0 3%;
  // margin-right: auto;
  // margin-left: 5%;
`

export const DescTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: ${props => props.height };
    // min-height: 30%;
    width: 98%;
    // color: black;
    background: ${({ theme }) => theme.overlayNeutral};
    padding:${props => props.height==='0px'?'0%':'3%' };
    border-radius:5px;
    justify-content: flex-start;
    font-size: calc(${props => props.fontRem + 'rem'} + 1vmin);
    //border: solid .5px black;
    //overflow-y: ${props => props.textOverflow};
    overflow: auto;
    text-overflow: ellipsis;
    transition: 0.2s ease;
`

export const ExpandDiv = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  // margin-top: auto;
  margin: 0% 0 0 5%;

  // background: blue;
  // height: 30px;
  width: 100%;
  opacity: 100%;
  color: ${({ theme }) => theme.textDarkest};
  //  background: ${({ theme }) => theme.overlayBrightest};
  font-size: .8rem;
`

export const DownArrowIcon = styled(BsFillArrowDownSquareFill)`
  transition: 0.25s;
  // color:red;

  // padding: 2% 5% 2% 5%;
  &: hover {
    opacity: 0.9;
    color: red;
  }
`

export const UpArrowIcon = styled(BsFillArrowUpSquareFill)`
// color:red;
  transition: 0.25s;
  // padding: 2% 5% 2% 5%;
  &: hover {
    opacity: 0.9;
    color: red;
  }
`

export const WildCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25%;
  width: 95%;
  max-height: 35%;
  //border-top: solid 1px black;
  font-size: calc(0.5em + 1vmin);
  flex: 1 0 0;
`

export const TextWildCardDIv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 98%;
  font-size: calc(0.5em + 1vmin);
  flex: 1 0 0;
  //background: purple;
`

export const ImageWildCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 98%;
  //border-top: solid 1px black;
  font-size: calc(0.5em + 1vmin);
  flex: 1 0 0;
  //background: green;
`

export const ContainerTagDiv = styled.div`
display: flex;
margin-top: auto;

flex-direction: row;
align-items: center;
justify-content: flex-start;
// height: 30%;
// width: 94%;
// background: ${({ theme }) => theme.overlayNeutral};
border-radius: 5px;
// margin-top: 3%;
gap:5px;
padding:3%;
flex-wrap:wrap;
overflow-x: scroll;
`

export const TagDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.overlayDimmest};
  // min-width: 90%;
  max-width:100%;
  // height: 10%;
  // height: 100%;
  // overflow-y: hidden;
  overflow-wrap: wrap;
  padding: 1% 5% 1% 5%;
  
  border-radius: 10rem;
  flex-shrink: 0;
  font-size: calc(${props => props.fontRem + 'rem'} + 0.75vmin);
`
export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
// height: 10%;
width: 94%;
padding: 0 2% 0 2%;
background: ${({ theme }) => theme.overlayBright};
border-radius: 5px;
margin-top: 3%;
// overflow-x: scroll;
`

export const FooterDiv = styled.div`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
// height: auto;
min-width: 100%;
border-radius: 5px;
// border-top:1px solid black;
font-size: calc(${props => props.fontRem + 'rem'} + 0.75vmin);
// font-weight: bold;
// flex-shrink: 0;
flex-wrap:wrap;
padding:1%;
`

export const ColumnButtondDiv = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 10%;
    width: 95%;
    margin-top: auto;
    //border-top: solid 1px black;
    padding: 2% 0 2% 0;
    font-size: .5em;
    gap:5%
    position: fixed;
`

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(2em + 1vmin);
  width: calc(2em + 1vmin);
  border-radius: 2rem;
  font-size: calc(0.1rem + 0.85vmin);
  font-weight: bold;
  background: ${props => props.background};

  : hover {
    cursor: pointer;
  }
`
