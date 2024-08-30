import styled, { keyframes } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'

  export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const InnerWrapper = styled.div`
  position: absolute;
  height: 0px;
  bottom: 0px;
  width: 100%;
  border-bottom: 2.6px solid
    ${({ theme, element }) =>
      element?.remainingRequirements?.length == 0
        ? theme.successColor
        : theme.dangerColor} !important;
  transform-origin: center;
  transform: scaleX(0);
  opacity: 0;
  transition: transform 0.1s;
`
export const EditContainerStyled = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .inputfield {
    ${({ theme, element }) =>
      element?.masktype !== 'signature'
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

  border-bottom: 1px solid ${({ theme, element }) => (element?.remainingRequirements?.length==0 ? theme.successColor : theme.dangerColor)} !important;
  &:focus + ${InnerWrapper} {
    ${({ theme }) => theme?.animation?.emphasis?.focus};
  }

  color: ${({ theme }) => theme.text};

  &:focus {
    border-bottom: 0px !important;
    ${({ element, theme }) => element?.masktype !== 'signature' ? theme.neoEmbedPanela2 : null};
  }

  &:hover {
    background: ${({ theme, masktype }) => masktype !== 'signature' ? theme.bga2 : null};
  }
  ${({ element }) => element?.masktype == 'signature' && `font-family: 'Brush Script MT', cursive !important;
  font-size: 24px !important;`}

  }
  ${({ css }) => css};
`
export const EditStyled = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 5px;
  &: hover {
    pointer: cursor;
  }
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg0};
`

export const DecoratorStyled = styled.div`
  margin: 3px;
  // display: flex;
  align-items: center;
  justify-content: center;
`
