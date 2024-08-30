import {
  SwatchTestEmbedStyled,
  SwatchTestOverlayStyled,
  SwatchTestStyled
} from './styles'

export const SwatchTest = () => {
  return (
    <SwatchTestStyled>
      <SwatchTestOverlayStyled />
      <SwatchTestEmbedStyled />
    </SwatchTestStyled>
  )
}
