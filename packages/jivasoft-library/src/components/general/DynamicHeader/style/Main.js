import styled from 'styled-components'

export const StyledDynamicHeader = styled.section`
  // border: 2px solid maroon;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.height ? props.height : null)}
  bottom: 0;
  position: relative;
  color: ${props => props.color};
  background-color: ${props => props.headerColor};
  padding: 10px;
  z-index: 1;
`
export const StyledBanner = styled.div`
  // border: 2px solid pink;
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  align-items: center;
`
export const StyledTitleBox = styled.div`
  // border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.direction};
  z-index: 1;
`
export const StyledCenterTitleBox = styled.div`
  // border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`
export const CenterTitleBox = styled.div`
  // border: 1px solid white;
  display: flex;
  // justify-content:center;
  width: 100%;
`
export const TitleBoxItem = styled.div`
  // border: 1px solid pink;
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  overflow: auto;
`
export const CenterItemsStyled = styled.div`
  display: flex;
  // border: 1px solid teal;
  width: 100%;
  font-size: 0.8rem;
  align-items: center;
  justify-content: ${props => (props.condensed === 'true' ? null : 'center')};
  flex-wrap: ${props => (props.condensed === 'true' ? null : 'wrap')};
  overflow: auto;
  flex-grow: 1;
`
export const ItemsContainer = styled.div`
  // border: 2px solid green;
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-wrap: ${props => (props.condensed === 'true' ? null : 'wrap')};
  overflow-x: ${props => (props.condensed === 'true' ? 'auto' : null)};
  direction: ${props => (props.direction === 'flex-start' ? 'rtl' : 'ltr')};
  align-items: center;
`
export const MobileItemsContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

export const MobileItems = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  overflow-x: auto;
  direction: rtl;
`
export const ItemsContainerWrapper = styled.div`
  // border: 1px solid red;
  width: 100%;
  // padding-bottom: 10px;
  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    z-index: 2;
    background: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : ({ theme }) => theme.bgb3};
    width: 100%;
    left: 0;
  }
`
