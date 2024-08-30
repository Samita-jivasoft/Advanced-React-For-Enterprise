import styled from "styled-components";
import { DEFAULT_UI_MARGIN } from "app/globalStyles";

export const WorkflowMessageContainerStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0px;
  margin: ${DEFAULT_UI_MARGIN};
  min-width: 250px;
  right: 0px;
  box-sizing: border-box;
  overflow: auto;
  max-width: 650px;

  ${(props) => {
    const { type } = props;
    if (typeof type === "string") {
      if (type === "errorBanner") {
        return `
          max-width: none;
          top: 0 !important;
          left: 0 !important;
          margin: 0 !important;
          height: 30%;
          align-items: center;
         
        `;
      }
    } else if (typeof type === "object") {
      // Object type handling can be done here
    }
  }}
`;
