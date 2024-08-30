import styled from 'styled-components'
// SortSearchableTables.js
export const MainContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
`
export const ArrowsContainer = styled.div`
  // border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${props =>
    props.headerColor ? props.headerColor : ({ theme }) => theme.bga3};
`
// SearchableTable.js
export const SearchableTableContainer = styled.div`
  // border: 1px solid white;
  width: 100%;
  height: 100%;
  display: flex;
  color: ${props =>
    props.textColor ? props.textColor : ({ theme }) => theme.text};
`
export const TableAndActionsContainer = styled.div`
  // border: 1px solid green;
  width: ${props => (props.detailView ? '50%' : '100%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  // margin: '5px'
`
export const TableContainer = styled.div`
  // overflow: hidden;
  margin-bottom: 20px;
  height: 70%;
  // border: 1px solid blue;
`
export const TableContent = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const HeaderRow = styled.div`
  // border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 5px 0px;
`
export const StyledRow = styled.div`
  // border: 1px solid red;
  display: flex;
  font-weight: bold;
  padding: 0px 0px 5px 0px;
`
export const StyledRightSide = styled.div`
  // border: 1px solid red;
  display: flex;
  margin-left: auto;
  align-items: center;
  // margin:10px;
  // height: 100%;
`
export const ActionsContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // height: '30%;
  overflow: auto;
`
// Groups.js
export const GroupsContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
  padding: 0px 0px 0px 15px;
`

// SearchTable.js Filter.js Groups.js
export const StyledHeaderButton = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
  padding: 0px 0px 0px 15px;
`
export const StyledHeaderText = styled.div`
  text-decoration: underline;
  padding: 0px 0px 0px 5px;
`
// TransferItems.js
export const SelectedContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  width: 100%;
  // cursor:pointer;
`
export const TransferItemsContainer = styled.div`
  display: flex;
  align-items: center;
  // width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  white-space: no-wrap;
  overflow: hidden;
  cursor: pointer;
`
// DetailView.js
export const DetailViewContainer = styled.div`
  ${({ theme }) => theme.id === 'light' ? theme.panela3 : theme.panelb3};
  display: flex;
  // border:1px solid red;
  margin-left: 20px;
  position: ${props => (props.collapse ? 'absolute' : null)};
  z-index: 2;
`
export const DetailViewContentContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const DetailViewHeader = styled.div`
  // border: 1px solid red;
  font-weight: bold;
  display: flex;
  z-index: 2;
  align-items: center;
  padding-bottom: 10px;
`
export const DetailViewBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
`
