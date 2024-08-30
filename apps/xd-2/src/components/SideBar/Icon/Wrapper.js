import React from 'react';
import styled, { css } from 'styled-components';
import { StyledContainer, StyledLabel } from './styles';

export const IconWrapper = ({ expanded, label, children,background, pinnedWF }) => {


  return (
    <StyledContainer 
    background={background}
    expanded={expanded}
    pinnedWF={pinnedWF}>
      {children}
      {expanded && <StyledLabel title={label}>{label}</StyledLabel>}
    </StyledContainer>
  );
};

export default IconWrapper;
