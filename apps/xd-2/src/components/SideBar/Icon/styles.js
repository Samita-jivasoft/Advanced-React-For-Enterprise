import styled, { css, keyframes } from "styled-components";
import { DEFAULT_UI_MARGIN } from "app/globalStyles";
import { fadeInScaledAnimation } from "app/theme/constants/animation";


export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  animation: none;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props?.background};

  ${(props) =>
    props.expanded
      ? css`
          &:hover {
            ${props.pinnedWF ? "" : `background: rgba(255, 255, 255, 0.1);`}
            ${({ theme }) => (props.pinnedWF ? "" : theme?.selectable)};
          }

          width: 220px;
          animation: ${fadeInScaledAnimation} 0.7s ease-out; /* Apply animation if isAnimating prop is true */
          max-height: 2.8rem;
          padding: 10px;
          justify-content: flex-start;
          border-radius: 8px;
        `
      : css`
      margin: ${DEFAULT_UI_MARGIN}
        `}
`;

export const StyledContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  animation: none;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props?.background};

  ${(props) =>
    props.expanded
      ? css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            ${({ theme }) => theme?.selectable};
          }

          width: 220px;
          animation: ${fadeInScaledAnimation} 0.7s ease-out; /* Apply animation if isAnimating prop is true */
       
          padding: 10px;
          justify-content: flex-start;
          border-radius: 8px;
        `
      : null}
`;

export const SelectedStyledContainer = styled.div`
  ${({ theme }) => theme?.animation?.entrance?.selected}; /* Apply animation if isAnimating prop is true */

  display: flex;
  flex-direction: row;
  animation: none;

  position: relative;
  width: 60px;
  padding-top: 10px;
  padding-bottom: 10px;

  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgb3};

  ${(props) =>
    props.expanded
      ? css`
          width: 220px;
          animation: ${fadeInScaledAnimation} 0.7s ease-out; /* Apply animation if isAnimating prop is true */
          padding: 10px;
          justify-content: flex-start;
          border-radius: 8px;
        `
      : null}
`;

export const SelectedStyledLabel = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.7;
  color: black !important;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  margin-left: 16px; /* Add space between children and label */
`;
export const StyledLabel = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.7;
  color: white !important;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  margin-left: 16px; /* Add space between children and label */

    &:hover {
      opacity: 0.9; 
    }
  }
`;
