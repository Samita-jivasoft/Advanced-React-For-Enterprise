import styled, { css } from "styled-components";
import { DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING } from "app/theme";
import { generateElement } from "app/theme";


const genericBG = css`
  background: ${({ theme }) =>
    `linear-gradient(110deg, ${theme.bga3} 8%, ${theme.bga2} 18%, ${theme.bga1} 33%)`};
  border-radius: 5px;
`;

export const GenericLoaderWrapper = styled.div`
  .background {
    min-width: 100px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    ${({ theme }) =>
      theme.id === "light"
        ? generateElement({
            type: "panel",
            color2: "white",
            color1: "white",
            border: "#f7f7f7",
            transparency: 0.5,
          })
        : theme.panelb1};

    div {
      border-radius: 5px;
    }
  }

  .foreground {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,span {
      ${genericBG};
      background-size: 200% 100%;
      min-height: 30px;
      min-width: 10px;
      margin-bottom: ${DEFAULT_UI_MARGIN};
      ${({ theme }) => theme?.animation?.emphasis?.shineX};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme?.disabledText};
      font-size: ${({ theme }) => theme?.typography?.body?.b7};
      padding-left: ${DEFAULT_UI_MARGIN};
      padding-right: ${DEFAULT_UI_MARGIN};
    }
  }
`;
