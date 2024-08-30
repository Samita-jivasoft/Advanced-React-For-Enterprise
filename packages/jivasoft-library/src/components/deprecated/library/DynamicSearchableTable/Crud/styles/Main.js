import styled from 'styled-components'

// CrudListActions.js
export const CrudItemsContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  justifycontent: ${props => (props.listType === 'tolist' ? 'flex-end' : null)};
`
export const CrudItem = styled.div`
  margin-right: 5px;
`