import { PRIMARY_COLOR, PRIMARY_TINT, SECONDARY_SHADE, SECONDARY_TINT } from 'app/globalStyles'
import styled, { css } from 'styled-components'

export const HelperButtonSizeXS = styled.button`
  padding: 0 0.5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background-color:${PRIMARY_TINT};

  ${({ theme }) => theme?.interaction?.opacityToLowHover};  
  color:white;
  border: 0;
  border-radius: .2rem;
  font-size: 0.8rem;
`

export const helperButtonSizeSM = css`
  padding: 0 1rem;
  height: 2.6rem;
  line-height: 2.6rem;

  font-size: 1.2rem;
`

export const HelperButtonSizeSM = styled.button`
	padding: 0 1rem;
	height: 2.6rem;
	line-height: 2.6rem;
	font-size: 1.2rem;
	border-radius:100rem;
	border 0px;
	font-weight:bold;
`

export const HelperButtonSizeREG = styled.button`
  padding: 0 1.5rem;
  height: 2.8rem;
  color: red;
  line-height: 2.8rem;
  font-size: 1.4rem;
`

export const helperButtonSizeMD = css`
  padding: 0 2rem;
  height: 4.2rem;
  line-height: 4.2rem;
  font-size: 1.4rem;
`

export const HelperButtonSizeLG = styled.button`
  padding: 0 2.5rem;
  height: 5.8rem;
  line-height: 5.8rem;
  font-size: 1.8rem;
`
export const helperButtonSizeLG = css`
  padding: 0 2.5rem;
  height: 5.8rem;
  line-height: 5.8rem;
  font-size: 1.8rem;
`
