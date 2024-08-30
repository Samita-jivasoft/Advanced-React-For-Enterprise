import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled from 'styled-components'

export const MainContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px !important;
  font-weight: bold;
  padding: 2px !important;
  overflow: hidden;
  color: ${props => props.labelTextColor ?? 'rgba(255, 255, 255, 0.5)'};
  flex-direction: ${props => (props.column ? 'column' : null)};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor
      ? backgroundColor === 'none'
        ? null
        : backgroundColor
      : theme.bgb3};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  cursor: pointer;
`

export const StyledUnorderedList = styled.ul`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%; //important
  line-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  overflow-y: ${props =>
    props.check ? (!props.column ? 'hidden' : 'auto') : null};
  overflow-x: ${props =>
    props.check ? (props.column ? 'hidden' : 'auto') : null};
  ::-webkit-scrollbar {
    display: none;
  }
`

export const StyledListItem = styled.li`
  // border: 1px solid white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; // important
  height: 100%; // important
  padding-left: ${props => (props.column ? null : '10px')};
  padding-right: ${props => (props.column ? null : '10px')};
  // color: rgba(255, 255, 255, 0.5);
`

export const Item = styled.div`
  // border: 1px solid red;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${({ column, item }) =>
    column && item?.label ? 'flex-start' : 'center'};
  padding: 0 10px;
  width: ${({ itemWidth }) => itemWidth ?? '100%'}; // important
  height: ${({ itemHeight }) => itemHeight ?? '100%'}; // important
  color: ${({ theme, item, selected, color }) =>
    selected?.id === item?.id
      ? color && color !== 'none'
        ? color
        : theme.text
      : null};

  &: hover {
    // overflow: hidden;
    border-radius: 4px;
    color: ${({ color, theme }) => color ?? theme.text};
    background: ${({ themeColor, theme, item, selected }) => {
      const isSelected = item?.id === selected?.id
      if (themeColor === 'none' || isSelected) {
        return null
      }
      return LightenDarkenColor(standardizeColor(themeColor), -50) || theme.bgb2
    }};
`
