import styled, { css, keyframes } from 'styled-components'
import { isValid } from '../../helpers'
import { LightenDarkenColor } from 'app/helpers'
import { fadeInAnimation } from '../../../../../app/theme/constants/animation'

export const FieldDisplayContainerStyled = styled.div`
  font-weight: ${({ canedit, value }) =>
    value.length === 0 ? (canedit === 1 ? null : '800') : '800'} !important ;
  width: 100%;
  font-size: ${({ canedit }) => (canedit ? '.9rem' : '1.1rem')} !important ;
  // padding-top:5px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const CurrentFormatContainerStyled = styled.div`
  font-size: 0.8rem;
  font-weight: light;
  font-decoration: italic;
  opacity: 0.8;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex; /* Use flex to center the inner div */
  justify-content: center;
`
export const OuterWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text} !important ;
  transform-origin: center;
  transform: scaleX(0);
  opacity: 0;
  border-radius: 5px;

  transition: transform 0.3s;
`
export const InnerWrapper = styled.div`
  position: absolute;
  height: 0px;
  bottom: 0px;
  width: 100%;
  border-bottom: 2.6px solid
    ${({ theme, valid }) => (valid ? theme.successColor : theme.dangerColor)} !important ;
  transform-origin: center;
  transform: scaleX(0);
  opacity: 0;
  transition: transform 0.1s;
`

export const InputField = styled.input`
  ${({ theme, valid, masktype }) =>
    masktype !== 'signature'
      ? theme.id === 'light'
        ? theme.panela2
        : theme.panelb1
      : null};

  width: 100%;
  font-size: 12px;
  border: 1px !important;
  border-radius: 4px 4px 0 0 !important;

  outline: none;
  transition: border-color 0.2s ease;

  border-bottom: 1px solid
    ${({ theme, valid }) => (valid ? theme.successColor : theme.dangerColor)} !important;
  color: ${({ theme }) => theme.text};

  &:focus {
    border-bottom: 0px !important;
    ${({ masktype, theme }) =>
      masktype !== 'signature' ? theme.neoEmbedPanela2 : null};
  }
  &:focus + ${InnerWrapper} {
    ${({ theme }) => theme?.animation?.emphasis?.focus};
  }
  &:hover {
    background: ${({ theme, masktype }) =>
      masktype !== 'signature' ? theme.bga2 : null};
  }
  ${({ masktype }) =>
    masktype == 'signature' &&
    `font-family: 'Brush Script MT', cursive !important;
  font-size: 24px !important;`}
`

export const TextArea = styled.textarea`
  ${({ theme, valid }) =>
    theme.id === 'light' ? theme.panela2 : theme.panelb1};

  //textarea
  resize: vertical;
  height: 120px;
  min-height: 50px;
  max-height: 150px;
  white-space: pre-wrap;
  //

  width: 100%;
  font-size: 12px;
  border: 1px !important;
  border-radius: 4px 4px 0 0 !important;

  outline: none;
  transition: border-color 0.2s ease;

  border-bottom: 1px solid
    ${({ theme, valid }) => (valid ? theme.successColor : theme.dangerColor)} !important;
  color: ${({ theme }) => theme.text};

  &:focus {
    border-bottom: 0px !important;
    ${({ theme }) => theme.neoEmbedPanela2};
  }
  &:focus + ${InnerWrapper} {
    ${({ theme }) => theme?.animation?.emphasis?.focus};
  }
  &:hover {
    background: ${({ theme }) => theme.bga2};
  }
`

export const Label = styled.label`
  font-size: 16px;
  top: -10px;
  position: absolute;
  color: ${({ hasValue }) => (hasValue ? '#009688' : '#999')};
  animation: ${({ hasValue }) =>
      hasValue &&
      css`
        ${fadeInAnimation} .23s ease-in-out forwards;
      `}
    ${({ hasValue }) => !hasValue && css``};
`
