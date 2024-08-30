import styled from "styled-components";
import { BsX } from "react-icons/bs";

export const DesignerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  width: 100%;
  background: red;
`

export const HeaderRow = styled.div`
  display:flex;
  height: auto;
  width: 100%;
  padding: 10px 0 10px 5px;
  background: ${({theme}) => theme.bga1};
`

export const DesignModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5) !important;
  z-index: 1000;
`

export const DesignModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25%;
  max-height: 40%;
  width: 40%;
  padding-left: 10px;
  padding-right: 10px;
  background: #F0F3F4;
  border-radius : 1%;
`
export const DesignModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  //background: red;
  height: 35%;
  width: 90%;
  font-size: 1.25rem;
  font-weight: semi-bold;
  padding: 5% 5% 0% 5%;
  align-items: center;
  justify-content: space-between;
`


export const DesignModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  max-height: 50%;
  width: 95%;
  //background: red;
  padding: 10px 0% 5px 5%;
  align-items: flex-start;
  border-top: solid 1px #ccd3d2;
  border-bottom: solid 1px #ccd3d2;
  font-size: 1rem;
  font-weight: bold;
`

export const ReportScrollDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  //row-gap: 5px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  //background: green;
  height: auto;
`

export const ReportTemplateButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 50px;
  padding-left: 15px;
  border: solid grey;
  border-width: thin;
`

export const DesignModalFooter = styled.div`
  display: flex;
  height: 35%;
  width: 90%;
  padding: 5% 5% 0% 5%;
  align-items: flex-start;
  justify-content: flex-end;
  //background: purple;
`

export const DesignButtonHeaderClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: transparent;
  border: none;
`

export const DesignCloseSymbol = styled(BsX)`
  font-size: 2rem;
  color: #9c9a9a;
  &: hover{
    cursor : pointer;
    color: #363636;
  }	
`

export const DesignButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 4px;
  color: #262d2c;
  border: 1px solid #ccd3d2;
  &: hover{
    cursor:pointer;
    background: #262d2c;
    color: #e5eceb;
  }
`

export const HeaderRowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 15px 5px 15px;
  border: 1px solid ${({theme})=>theme.bgb1};
  border-radius: 5px;
  color: ${({theme})=>theme.text};
  &: hover{
    cursor:pointer;
    background: #262d2c;
    color: #e5eceb;
  }
`