import styled from 'styled-components'
export const TestbedBodyStyled = styled.div`
  display: flex;

  transition: font-size 0.1s;

  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  flex-direction: column;
  position: absolute;
  right: 0;
  //z-index:100;
`
export const StyledPropFooter = styled.div`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  padding: 1%;
  display: flex;
  overflow-y: scroll;
  flex-direction: row;
  background-color: grey;
  color: black;
  opacity: 0.65;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  z-index: 2;
`
