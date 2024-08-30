import { lg, md, sm, xs } from 'app/constants';
import styled, { keyframes } from 'styled-components'

export const DemoDashboardContainerStyled = styled.div`
align-items:center;
display:flex;
color:${({ theme }) => theme.text};
flex-direction:column;
height:100%;
${({ theme }) => theme.scrollable}

 `
 export const DemoDashboardWrapperStyled = styled.div`
width:100%;
 @media (min-width: ${sm}px) {
  width: 90%;
}

@media (min-width: ${lg}px) {
  width: 85%;
}
  padding:10px;
  padding-top:20px;

  `

export const DemoWorkflowPickerContainerStyled = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
${({ theme }) => theme?.animation?.entrance?.slideIn};
height:100%;
flex-direction:column;

 `

export const DemoWorkflowScrollerContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap; /* Add this line to make it wrap */
`;
