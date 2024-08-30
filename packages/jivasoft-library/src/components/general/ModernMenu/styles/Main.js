import styled from "styled-components";

export  const Wrapper =styled.div`
  border:2px solid purple;
  display: flex;
  flex-direction:column;
  // align-items: space-between;
  // justify-content: center;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
`
export const RowContainer = styled.div`
border: 1px solid black;
  justify-content: center;
  // position:absolute;
  display: flex;
  height: 80px;
  width: 100%;
`
export const ColumnContainer = styled.div`
  border:2px solid blue;
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 80px;
`
export const ContentWrapper = styled.div`
  border: 2px solid green;
  z-index: 100;
  padding: 20px;
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:move;
`
export const DraggableParent = styled.div`
  background: red;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action:none;
`
export const MenuStyledRow = styled.div`
  column-gap: 10px;
  height: 50px;
  width:fit-content;
  font-size: 25px;
  box-shadow:5px 5px 15px 5px rgba(0,0,0,0.32);
  background:#e5e5e5;
  padding-left:15px;
  padding-right:15px;
  border-radius: 200px;
  align-items: center;
  justify-content:center;
  display:flex;
  flex-direction:row;
  cursor:default;
  touch-action:none;
`

export const MenuStyledColumn = styled.div`
  row-gap: 10px;
  height: fit-content;
  font-size: 25px;
  box-shadow:5px 5px 15px 5px rgba(0,0,0,0.32);
  background:#e5e5e5;
  padding-left:15px;
  padding-right:15px;
  padding-top:15px;
  padding-bottom:15px;
  border-radius: 200px;
  align-items: center;
  justify-content:center;
  display:flex;
  flex-direction:column;
  cursor:default;
  touch-action:none;
`
export const VerticalLineStyled = styled.div`
  height:50%;
  width:1px;
  background-color:grey;
`
export const HorizontalLineStyled = styled.div`
  height:1px;
  width:100%;
  background-color:grey;
`