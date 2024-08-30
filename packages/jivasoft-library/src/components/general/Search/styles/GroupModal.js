import styled from 'styled-components';

export const StyledGroupModalBackground = styled.div`
  display : flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const StyledGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: space-evenly;
  margin: auto;
  height: auto;
  width: 90%;
  padding-bottom: 10px;
  overflow-y: scroll;
  //border: solid 1px red;
`

export const StyledUserGroupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${(props) => props.viewWidth > 700 ? '65px' : '45px'};
  width: 80%;
  padding-left: 10px;
  font-size: calc(1rem + 1vmin);
  font-weight: bold;
  margin: 5px 0px 5px 0px;
  ${props => props.theme.panela1};
  border-radius: ${(props) => props.viewWidth > 700 ? '10px' : '30px'};

  &:hover{
    ${props => props.theme.panela3};
    border-radius: ${(props) => props.viewWidth > 700 ? '10px' : '30px'};
    cursor: ${(props) => props.notAllowed ? 'not-allowed' : 'pointer'};
  }
`
