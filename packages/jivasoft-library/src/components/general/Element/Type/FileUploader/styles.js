import styled, { css, keyframes } from 'styled-components'

//MAIN.JS
export const MainContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`

//DISPLAYFILES.JS
export const DisplayFilesContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const PreviewArea = styled.div`
  // border: 1px dashed red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; // consider center??
`
export const FilePreviewContainer = styled.a`
  ${({ theme }) => theme.selectable};
  border: 1px solid ${({ theme }) => theme.bga3};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 0px 10px 0px !important;
  margin-right: ${({ isEdit }) => (isEdit ? '20px' : null)};
  margin-bottom: ${({ isEdit }) => (isEdit ? '20px' : null)};
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  .removeIcon {
    ${({ theme }) => theme.selectable};
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 10px;
  }
`

export const FilePreview = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
`
export const FileLink = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 10px;
  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`
const iconSize = '100%'
export const DefaultFileIconContainer = styled.div`
  // border: 1px solid red;
  color: ${({ theme, color }) => (color ? color : theme.bg0)};
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: ${iconSize};
    height: ${iconSize};
  }
`
