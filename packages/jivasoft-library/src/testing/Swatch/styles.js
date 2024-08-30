import styled from 'styled-components'

export const SwatchTestStyled = styled.div`
  ${({ theme }) => theme.panel0};
  height: 300px;
  width: 300px;
`
export const SwatchTestEmbedStyled = styled.div`
  ${({ theme }) => theme.neoEmbedPanel0};
  height: 100px;
  width: 100px;
`
export const SwatchTestOverlayStyled = styled.div`
  ${({ theme }) => theme.neoOverlayPanel0};
  height: 100px;
  width: 100px;
`