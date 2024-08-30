import styled from 'styled-components'

export const StyledSideBarLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.overlayDimmest};
  height: 100vh;
  min-width: 100%;

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    //background: red;
    min-width: 100%;
    height: auto;
  }

  p {
    height: 45px;
    width: 45px;
    border-radius: 8px;
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.overlayNeutral},
        ${({ theme }) => theme.overlayBrightest} 50%,
        ${({ theme }) => theme.overlayNeutral} 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 80px 100px;
    background-position: 0 0;
    ${({ theme }) => theme?.animation?.emphasis?.lowShine};
  }
`
