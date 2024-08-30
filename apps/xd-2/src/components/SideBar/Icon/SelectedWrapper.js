import React from 'react';
import styled, { css } from 'styled-components';
import { SelectedStyledContainer, SelectedStyledLabel, StyledLabel } from './styles';

export const SelectedIconWrapper = ({ expanded, label, children,background }) => {


  return (
    <SelectedStyledContainer 
    background={background}
    expanded={expanded}>
      {children}
      {expanded && <SelectedStyledLabel title={label}>{label}</SelectedStyledLabel>}
    </SelectedStyledContainer>
  );
};

export default SelectedIconWrapper;
