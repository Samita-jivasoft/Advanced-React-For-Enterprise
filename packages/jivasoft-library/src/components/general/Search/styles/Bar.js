import { DEFAULT_UI_BORDERRADIUS, DEFAULT_UI_PADDING } from 'app/theme';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

export const StyledSearchBar = styled.input`
  display: flex;
  min-width: ${props => props.minWidth ? props.minWidth+'px' : '400px'};
  width: ${props =>props.width ? props.width : '100%'};
  flex-grow: 1;
  padding-left: ${DEFAULT_UI_PADDING};
  padding-right: ${DEFAULT_UI_PADDING};
  padding:10px !important;
  border: 0px;
  border-radius: ${DEFAULT_UI_BORDERRADIUS} !important;
  ${({ theme }) => theme.neoEmbedPanela3};
  align-items: center;
  -webkit-appearance: none; /* add this */

  @media (max-width: 600px) {
    width: 90%;
    min-width: 100px;

  }
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
  color: ${({ theme }) => theme.text};
`
export const StyledSearchBarBackground = styled.div`
  display: flex;
  width: ${(props) => props.viewWidth >= 1000 && '500px' || props.viewWidth >= 800 && '450px' || props.viewWidth >= 600 && '350px' || props.viewWidth >= 400 && '200px'};
  //min-width: 200px;
  //max-width: 450px;
  height:100%;
  column-gap: 10px;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
`

export const StyledSearchBarDiv = styled.div`
  display: flex;
  padding: ${DEFAULT_UI_PADDING};
  border: 0px;
  border-radius: 100px;
  ${({ theme }) => theme.panela1};
  align-items: center;

  // padding-left:40px;
  // padding-right:40px;
  color: ${({ theme }) => theme.text};;
  font-weight:bold;
`

export const StyledExpandBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: auto;
  //border: solid 1px blue;
`

export const StyledMultipleItemsDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.viewWidth > 500 ? 'row' : 'column'};
  align-items: center;
  justify-content: flex-start;
  column-gap: 5px;
  row-gap: 10px;
  height: ${(props) => props.viewWidth > 700 ?  '65px' : '40px'};
  width: ${(props) => props.viewWidth > 900 ? 'auto' : props.viewWidth-200+'px' };
  ${({ theme }) => theme.panela1};
  //max-height: 65px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 700px;
  padding: 5px 5px 10px 5px;
  overflow: scroll;
  //overflow-x: scroll
  flex-shrink: 1;
  //overflow-y: scroll;
  flex-flow: ${(props) => props.viewWidth > 500 ? 'row wrap' : 'none'};
  //flex-flow: row wrap;
  //flex-wrap: wrap;

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
 ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  transition: 0.5s;

  &:hover{
    cursor: pointer;
    ${({ theme }) => theme.panela3};
    border-radius: 10px;
    padding: 5px 5px 10px 5px;
  }

`

export const StyledItemTagDiv = styled.div`
  display: flex;
  background: ${({theme}) => theme.bgb1};
  padding: 5px;
  border-radius: 10px;
  height: auto;
  //margin-left: 1%;
  //margin-right: auto;
  column-gap: 3px;
  font-size: .75rem;
  box-shadow: 0px 6px 10px 1px grey;
  white-space: nowrap;

  &:hover{
    cursor: default;
    pointer-events: all;
  }
`

export const StyledExpandDiv = styled.div`
  display: flex;
  min-height: 50px;
  max-height: 400px;
  ${({ theme }) => theme.panela1};
  width: ${(props) => props.viewWidth > 700 ? 'auto' : '250px'};
  min-width: ${(props) => props.viewWidth > 700 ? '600px' : '200px'};
  max-width: 610px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`


export const StyledItemSelect = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  ${({ theme }) => theme.panela1};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-color: black;
  padding-top: 5px;
  padding-bottom : 5px;
  white-space: nowrap;
  &:hover{
    background : ${({ theme }) => theme.bgb1};
    cursor: pointer;
  }
`



export const StyledTagCrossMark = styled(IoMdClose)`
  font-size: 1rem;
  &:hover {
    transition: 0.5s;
    font-size: 1.2rem;
    cursor: pointer;
  }
`
