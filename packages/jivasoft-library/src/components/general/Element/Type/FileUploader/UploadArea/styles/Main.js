import styled, { css, keyframes } from 'styled-components'

export const UploadAreaContainer = styled.div`
  border: 2px dashed ${({ theme }) => theme.bg0};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: ${({ horizontal }) => (horizontal ? '20px' : 'none')};
  padding-bottom: 20px;
  color: ${({ theme }) => theme.text};

  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  ${({ isDragging }) =>
    isDragging &&
    css`
      border-color: ${({ theme }) => theme.bgb3};
      background-color: ${({ theme }) => theme.bga3};
    `}
`
export const FileTypesString = styled.div`
  // margin-top: 8px;
  font-size: 10px;
`
