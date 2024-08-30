import styled from 'styled-components'
export const ItemsContainer = styled.div`
  // border: 2px solid green;
  display: flex;
  overflow-x: auto;
  align-items: center;
`
export const ItemsContainerWrapper = styled.div`
  // border: 1px solid red;
  width: 100%;
  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    // z-index: 2;
    background: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : ({ theme }) => theme.bga3};
    width: 100%;
    left: 0;
  }
`
