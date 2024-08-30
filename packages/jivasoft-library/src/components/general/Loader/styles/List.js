import { generateElement } from 'app/theme'
import { fadeInAnimation } from 'app/theme/constants/animation'
import styled, { css, keyframes } from 'styled-components'

export const StyledListLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: ${fadeInAnimation} 0.2s ease-out
    ${({ animated }) => (animated ? '.3s' : null)} forwards;

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) =>
      theme.id === 'light'
        ? generateElement({
            type: 'panel',
            color2: 'white',
            color1: 'white',
            border: '#f7f7f7',
            transparency: 0.5
          })
        : theme.panelb1};
    width: 96%;
    margin-top: 30px;
    height: 90%;
    overflow-y: hidden;
    border-radius: 5px;
    justify-content: space-evenly;
    //background: red;
  }

  .line {
    height: 40px;
    width: 90%;
    ${({ animated }) => {
      if (animated) {
        return css`
          opacity: 0.4;
          background: linear-gradient(
              to right,
              lightgrey,
              ${({ theme }) => theme.bga2},
              70%,
              white 100%
            ),
            lightgrey;
        `
      } else {
        return css`
          background: rgba(0, 0, 0, 0.1);
        `
      }
    }};
    background-repeat: repeat-y;
    border-radius: 5px;
    background-size: 300px 100px;
    background-border-radius: 10px;
    background-position: 0 0;
    ${({ theme }) => theme?.animation?.emphasis?.lowShine};
  }
`
