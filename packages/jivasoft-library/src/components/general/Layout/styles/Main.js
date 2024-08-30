import styled from 'styled-components'
import React from 'react'

export const LayoutStyles = styled.div`
  height:100%;
  width:100%;
  
  ${({ themeStyles }) =>  themeStyles };
  ${({ archetypeStyles }) => archetypeStyles };
  ${({ commonStatusStyles }) =>  commonStatusStyles };
  ${({ statusStyles }) => statusStyles };
  ${({ css }) =>  css };
 
  `
