import styled, { keyframes } from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa'
import { DEFAULT_UI_BORDERRADIUS } from 'app/globalStyles'
export const StyledMobileBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 5px;
  margin-bottom: 5px;

  ${({ theme }) => theme.pane0};
  border-radius: 10px !important;
  @media (max-width: 600px) {
    border-radius: 0px;
  }
  ${({ theme }) => theme?.animation?.entrance?.slideInScaled};
  // background: ${({ theme }) => theme.bgb3};
  position: relative;
  // @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  //     background-color: rgba(0, 0, 0, 0);
  //     -webkit-backdrop-filter: blur(30px);
  //     backdrop-filter: blur(2em);
  //     -ms-filter: blur(3px);
  //   }
  z-index: 100;
  color: ${({ theme }) => theme.text};
  overflow: scroll;
`
export const StyledMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  //background: yellow;
`
export const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  // position:absolute;

  height: 10%;
  color: ${({ theme }) => theme.text};
`

export const StyledBackArrow = styled(FaChevronLeft)`
  //background: white;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  margin-left: 5%;
  //border-radius: 70%;
  transition: 0.5s;

  &: hover {
    cursor: pointer;
    font-size: 2.2rem;
  }
`
