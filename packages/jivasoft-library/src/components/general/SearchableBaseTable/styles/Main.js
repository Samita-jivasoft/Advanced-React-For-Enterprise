import { generateElement } from 'app/theme'
import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled from 'styled-components'

// SortSearchableTables.js
export const MainContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
`
export const TablesContainer = styled.div`
  // border: 1px solid blue;
  display: flex;
  width: 100%;
  height: 100%;
`
export const TableTypeWrapper = styled.div`
  // border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const TabsToolbar = styled.div`
  // border: 1px solid pink;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
`
export const TablesWrapper = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'column' : 'row')};
  // overflow: ${props => (props.horizontal ? 'auto' : null)};
  width: 100%;
  height: 100%;
  gap: 20px;
`
export const ArrowsContainer = styled.div`
  // border: 1px solid black;
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
  // border: 1px solid yellow;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: ${props => (props.padding ? '20px' : null)};
  color: ${props =>
    props.textColor ? props.textColor : ({ theme }) => theme.text};
`

// SearchTable.js Filter.js Groups.js
export const StyledHeaderButton = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
  padding: ${props => (props.padding ? props.padding : '0px 0px 0px 15px')};
`
export const StyledIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme?.interaction?.shiftUpOnHover};
`;
export const StyledHeaderText = styled.div`
  text-decoration: underline;
  padding: 0px 0px 0px 5px;
`
