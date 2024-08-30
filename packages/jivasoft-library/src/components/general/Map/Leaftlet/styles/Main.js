import styled from 'styled-components'

export const StyledBottomController = styled.div`
  position: absolute;
  bottom: 20px;
  // top: 100px;
  right: 10px; 
  z-index: 1000;
  border: 2px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 4px;
  width: 30px;
  height: fit-content;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledControllerButton = styled.button`
  // z-index: 1000;
  background-color: white;
  border: 0px;
  width: 100%;
  height: 33px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
`
export const StyledSearch = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  // top: 10px;
  margin: 10px;
  z-index: 1000;
  border-radius: 6px;
  cursor: pointer !important;
  width: 100%;
  max-width: calc(100% - 70px); 

  &:hover {
    brightness: filter(50%);
  }
`
