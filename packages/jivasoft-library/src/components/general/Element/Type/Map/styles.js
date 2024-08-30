import styled, { css, keyframes } from 'styled-components'
import { FixedSizeList as List } from 'react-window'


const focusAnimation = keyframes`
  0% {
    opacity:0;
    transform: scaleX(0);
  }
  100% {
    opacity:1;
    transform: scaleX(1);
  }
`
export const FieldDisplayContainerStyled = styled.div`
  font-weight: ${({ canedit, value }) =>
    value.length === 0 ? (canedit === 1 ? null : '800') : '800'} !important ;
  width: 100%;
  font-size: ${({ canedit }) => (canedit ? '.9rem' : '1.1rem')} !important ;
  // padding-top:5px;
`
export const DropdownStyled = styled(List)`
  ${({ theme }) => theme.panea2};
  ${({ theme }) => theme.scrollable}
  height: ${({ height }) => height};

  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`
export const RowStyled = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;

  box-sizing: border-box;
  .ListItemSelected {
    background: red !important;
  }

  background: ${({ theme, active }) => (active ? theme.bga3 : null)};
  color: ${({ theme, option }) =>
    option.id === 'no_results' ? theme.disabledText : theme.text};
  font-style: ${({ theme, option }) => option.id === 'no_results' && 'italic'};
  color: ${({ theme, option }) =>
    option.id === 'no_results' && theme.disabledText};

  &: hover {
    cursor: pointer;
    background: ${({ theme, option }) =>
      option.id === 'no_results' ? null : theme.bgb1};
    border-radius: 2px;
  }
`
export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 500;
  background: ${({ theme }) => theme.bga3};
  box-sizing: border-box;
  border-radius: 5px;
`
