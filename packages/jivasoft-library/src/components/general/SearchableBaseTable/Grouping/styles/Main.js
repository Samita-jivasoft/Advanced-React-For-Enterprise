import styled from 'styled-components'
export const StyledSelectableText = styled.div`
  // border: 1px solid red;
  display: flex;
  cursor: pointer;
  text-decoration: underline;
  ${({ theme }) => theme?.interaction?.shiftUpOnHover};
`
