import styled from 'styled-components'

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
export const CrudActionsContainer = styled.div`
  // border: 1px solid red;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  // height: '30%;
  overflow: auto;
`

export const CrudItemsContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  justifycontent: ${props => (props.listType === 'tolist' ? 'flex-end' : null)};
  padding-bottom: 10px;
`
export const CrudItem = styled.div`
  margin-right: 5px;
`
