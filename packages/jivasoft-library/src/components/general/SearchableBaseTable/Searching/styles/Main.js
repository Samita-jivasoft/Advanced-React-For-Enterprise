import styled from 'styled-components'
//SearchTable.js
export const SearchFieldContainer = styled.div`
  // border: 1px solid red;
  padding: ${props => (props.showcaret === false ? '0px' : '0px 0px 5px 0px')};
  display: flex;
  align-items: center;
  font-weight: normal;
`
