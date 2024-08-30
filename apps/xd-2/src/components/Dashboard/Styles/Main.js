import styled from 'styled-components'

export const DashboardMainStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 0;
  align-items: center;
  // justify-content: center;
  flex-direction: row;
  box-sizing: border-box;
  // padding: 10px;
  @media (max-width: 600px) {
    flex-direction: column;

  }
`
export const DashboardHeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  wbox-sizing: border-box;
  // background: green;
`
export const DashboardBodyStyled = styled.div`
  display: flex;

  height: 100%;
  width: 40%;
  flex: 10;
  padding:3rem;
  gap: 0.6rem;
  box-sizing: border-box;
  align-items: center;
  column-gap: 5px;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1300px) {
    padding:6.3rem;

  }
  @media (max-width: 750px) {
    padding:1rem;

  }
  @media (max-width: 600px) {
    width: 100%;
    padding:1rem;

  }
`
