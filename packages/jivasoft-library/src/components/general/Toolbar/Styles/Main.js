import styled from 'styled-components'
export const StyledToolbarItem = styled.div`
  &:hover {
    cursor: ${({ selected }) => (selected ? null : 'pointer')};
    border-radius: 14px;

    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: ${({ theme, selected }) =>
      selected ? null : theme?.animation?.path?.shake};
    /* When the animation is finished, start again */
    animation-iteration-count: 1;
    background: ${({ selected, theme }) => (selected ? null : theme.bg0)};
  }
`
export const StyledToolbarMenu = styled.div`
  color: ${({ theme }) => theme.text};
  ${({ theme }) => theme.pane0};
  padding: 0px !important;
`

export const StyledToolbarMenuBody = styled.div`
  padding: 10px;
`
export const StyledToolbarMenuBodyItem = styled.div`
  ${({ theme }) => theme.panela1};

  padding: 10px;
`
