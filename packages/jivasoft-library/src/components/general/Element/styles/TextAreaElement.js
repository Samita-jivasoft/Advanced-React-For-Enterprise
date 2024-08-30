import styled from 'styled-components'

export const TextAreaStyled = styled.textarea`
  position: relative;
  border: 1px solid ${(props) => props.isValid? props.theme.successColor:props.theme.dangerColor} !important;
  color:${(props) => props.isValid? props.theme.successColor:props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // color: isMatch;
  padding:15;
  max-width:100%;
  resize: ${(props)=>props.canEdit}; 
  height:120px;
  font-weight:bold;
  white-space: pre-wrap;
  // -ms-overflow-style: none;  /* Internet Explorer 10+ */
  // scrollbar-width: none;  /* Firefox */
  // ::-webkit-scrollbar { 
  //   display: none;  /* Safari and Chrome */
  // }
  ${({ theme }) => theme.neoEmbedPanelb1}
`