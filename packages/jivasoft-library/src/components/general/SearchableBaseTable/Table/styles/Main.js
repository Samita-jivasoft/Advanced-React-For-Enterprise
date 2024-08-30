import BaseTable, { Column } from 'react-base-table'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .BaseTable.active-col-${props => props.column} [data-col-idx="${props =>
  props.column}"] {
      // box-shadow: 0px 2px 4px 2px #eeeeee;
      // background: rgba(229,229,229, .5);
      border-left: 2px dashed #777;
      border-right: 2px dashed #777;
    }
  .BaseTable.column-drop-zone-${props => props.column} [data-col-idx="${props =>
  props.column}"] {
        background: red;
      }
  `
export const StyledTable = styled(BaseTable)`
  .BaseTable__header {
    overflow: ${({ data }) =>
      data?.length > 0 ? 'hidden' : 'auto'} !important;
  }
  .BaseTable__header-row {
    background-color: ${props => props.themeColor};
    color: ${({ textColor, theme }) => (textColor ? textColor : theme.text)};
    font-size: ${props => props.textSize};
  }
  .BaseTable__header-cell {
    // border: 1px solid red;
    border-right: ${props =>
      props.showVerticalGridLines && '1px solid #eeeeee'};
    background-color: ${props => props.themeColor};
    display: flex;
  }
  .BaseTable__expand-icon {
    padding: none;
    margin: none;
  }
  .BaseTable__body {
    background-color: ${({ theme }) =>
      theme.id === 'light' ? null : theme.bgb3};
    color: ${({ theme }) => theme.text};
    font-size: ${props => props.textSize};
    // ${({ theme }) => theme.scrollable};
    ::-webkit-scrollbar {
      -webkit-appearance: none !important;
      background-color: #e3e3e3 !important;
    }

    ::-webkit-scrollbar:vertical {
      width: 10px !important;
    }

    ::-webkit-scrollbar:horizontal {
      height: 10px !important;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      border: 2px solid #e3e3e3 !important;
      background-color: ${props => props.themeColor} !important;

      &:hover {
        background-color: #666 !important;
      }
    }
    ::-webkit-resizer {
      display: none !important;
    }
  }

  .BaseTable__row {
    background-color: ${({ theme }) =>
      theme.id === 'light' ? null : theme.bgb3};
    cursor: ${props => (props.detailView ? 'pointer' : null)};
    &:hover,
    &--hovered {
      filter: ${({ theme }) =>
        theme.id === 'light' ? 'brightness(95%)' : 'brightness(70%)'};
    }
  }

  .BaseTable__row-cell {
    border-right: ${props =>
      props.showVerticalGridLines && '1px solid #eeeeee'};
  }
  .row-index {
    padding: 0px !important;
  }
  .expanding-row {
    // background: red;
    border-right: none !important;
  }
  .row-selected {
    background-color: #e3e3e3;
    border: 1px solid green;
  }
  .row-excluded {
    opacity: 0.3;
  }
  .row-status-assigned {
    background-color: ${({ theme }) => theme.assigned};
  }
  .row-status-pending {
    background-color: ${({ theme }) => theme.pending};
  }
  .row-status-drafts {
    background-color: ${({ theme }) => theme.drafts};
  }
  .row-status-flags {
    background-color: ${({ theme }) => theme.cutoff};
  }
  .row-status-incomplete {
    background-color: ${({ theme }) => theme.incomplete};
  }

  .dragging {
    // background: rgba(229,229,229, .5);
    margin-right: 10px;
    width: 100px;
  }
  .dropzone.dragover {
    background-color: ${({ theme }) => theme.bgb3};
    border-left: 5px solid ${({ theme }) => theme.successColorBase};
    // flex: none;
    // width: 7.5px;
    // height: 100%;

    // &::before {
    //   content: '';
    //   border-left: 4px dotted #ccc;
    //   display: block;
    //   height: 20px;
    //   margin: 15px 3px;
    // }

    // &:hover::before {
    //   border-color: #888;
    // }
  }
`
export const TableContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  width: 100%;
  height: 85%;
  column-gap: 2%;
  margin-bottom: 20px;
`
export const HeaderAndTableContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: ${props => (props.showDetailView ? '50%' : '100%')};
  height: 100%;
`
export const AutoResizerWrapper = styled.div`
  ${({ theme }) => (theme.id === 'light' ? theme.panela3 : theme.panelb3)};
  padding: 0px !important;
  margin: 0px !important;
  border-radius: 5px;
  overflow: hidden;
  border: none !important;
  width: 100%;
  height: 100%;
`
export const TableElementWrapper = styled.div`
  //add ellipsis??
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  // border: 1px solid blue;
  padding: 0px !important;
  margin: 0px !important;
  font-size: ${props => props.fontSize}!important;

  .element-main * {
    // border: 1px solid red;
    font-weight: normal !important;
    padding: 0px !important;
    margin: 0px !important;
    font-size: ${props => props.fontSize}!important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  // .element *{
  //   // transform: scale(90%);
  //   font-weight: normal !important;
  //   padding: 0px !important;
  //   margin: 0px !important;
  // }
`
export const ExpadingCell = styled.div`
  // border: 1px solid red;
  white-space: nowrap;
  position: absolute;
`
export const RegularCell = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
`
export const Empty = styled.div`
  ${({ theme }) => (theme.id === 'light' ? null : theme.bgb3)};
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
`
export const Loading = styled.div`
  // border: 1px solid red;
  // width:40%;
  // display: flex;
  justify-content: center;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  color: ${({ theme }) => theme.text};
`
