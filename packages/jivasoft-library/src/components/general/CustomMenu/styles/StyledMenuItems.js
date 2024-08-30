import styled from 'styled-components'
import { LightenDarkenColor } from 'app/helpers'

export const MenuLi = styled.div`
  // border: 2px solid red;
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 100%;
  padding: 5px;
  border-bottom: ${({ itemtype }) => (itemtype === 'string' ? '0px' : '1px')}
    solid ${({ theme }) => theme.bga2};
  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom: 0px;
  }
  box-sizing: border-box;
`

export const MenuLabel = styled.div`
  display: flex;
  //flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  border-radius: 4px;
  background: -webkit-linear-gradient(
    45deg,
    ${({ theme }) => theme.bgb1},
    ${({ theme }) => theme.bga2}
  );
  // background: red;
  border: solid 1px green;
  justify-content: space-between;
  padding: 8px 5px 8px 5px !important;
  &:hover {
    cursor: ${({ itemtype }) => (itemtype === 'string' ? null : 'pointer')};
    background: ${({ theme, itemtype }) =>
      itemtype == 'string' ? null : theme.bgb1};
  }
  box-sizing: border-box;
`
export const MenuJSX = styled.div`
  // border: 1px solid blue;
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 100%;
  width: 100%;
`
export const MenuStringStyled = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  padding: 8px !important;

  height: 30px;
  width: 100%;
  z-index: 210;
  font-weight: bold !important;
  text-align: center !important;
  white-space: nowrap;
  box-sizing: border-box;
`
