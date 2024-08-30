import styled from 'styled-components'

export const TestbedBodyStyled = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  width:100vw;
  box-sizing: border-box;
  width: ${props => props.width};
  

  flex-direction: column;
  position: absolute;
  right: 0;
  //z-index:100;
`
