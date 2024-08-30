import styled from "styled-components";
import {
  DEFAULT_UI_BORDERRADIUS,
  DEFAULT_UI_PADDING,
} from "app/theme/constants";
import { getBadgePositionStyles } from "./helpers";
import { LightenDarkenColor } from "app/theme";
import { css } from "styled-components";
import { getShadows } from "app/theme";

export const DynamicIconStyled = styled.div`
  position: relative;
  ${({ theme, background }) =>
    background &&
    `
  width: ${theme?.typography?.scalevalue?.sc10};
  height: ${theme?.typography?.scalevalue?.sc10};
`}
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${DEFAULT_UI_PADDING};
  ${({ theme, background }) => background && theme.selectable};
  ${({ background}) => background && css`
    box-shadow: ${getShadows(' ', 'neumorphic-overlay')};
`}

  border-radius: ${DEFAULT_UI_PADDING};
  .icon-background-svg {
    border-radius: ${DEFAULT_UI_PADDING};
    position: absolute;
    z-index: ${({ theme }) => theme?.zIndexes?.workflow};
    aspect-ratio: 1/1;

    rect {
      width: ${({ theme }) => theme?.typography?.scalevalue?.sc11};
      height: ${({ theme }) => theme?.typography?.scalevalue?.sc11};
      fill: ${({ backgroundColor }) => backgroundColor};
      
    }
  }

  .icon-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .main-icon {
    z-index: ${({ theme }) => theme?.zIndexes?.workflow};
    font-size: ${({ theme }) => theme?.typography?.scalevalue?.sc5};
    color: ${({ iconFill }) => iconFill};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
        }
  }
  .icon-badge {
    position: absolute;
    ${({ badgePosition }) => getBadgePositionStyles(badgePosition)}
    background-color: ${({ badgeContent, badgeBackgroundColor }) =>
      badgeContent ? badgeBackgroundColor : "none"};
   
    ${({ badgeContent, background,type, status, backgroundColor }) =>
      badgeContent && (type ||status)
        ? `border: ${DEFAULT_UI_BORDERRADIUS} solid ${
            background ? backgroundColor : "white"
          };`
        : "border: none;"}
    
    border-radius: ${({ badgeContent }) =>
      badgeContent && badgeContent.length === 1 ? "50%" : "1.25em"};
    ${({ theme }) => theme.iconBadge};
  }
  
  
    

  .icon-status {
    position: absolute;
    transform: translate(100%, 70%);
    z-index: ${({ theme }) => theme?.zIndexes?.workflowOverlay};
    font-weight: bolder;
    width: ${({ theme }) => theme?.typography?.body?.b6};
    height: ${({ theme }) => theme?.typography?.body?.b6};   
    padding: ${DEFAULT_UI_BORDERRADIUS};
    background-color: ${(props) => props.iconFill};
    border: ${DEFAULT_UI_BORDERRADIUS} solid
      ${({ background, backgroundColor }) =>
        background ? backgroundColor : "white"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    
  }

  .icon-initials {
    position: absolute;
    display: flex; 
    z-index: ${({ theme }) => theme?.zIndexes?.workflowOverlay};
  
    padding: ${DEFAULT_UI_BORDERRADIUS};
    border-radius: ${DEFAULT_UI_BORDERRADIUS};
    font-weight: bold;
    color: ${({ iconFill }) => LightenDarkenColor(iconFill, -70)} ;
    min-width: 2rem;
    min-height: 2rem;
    justify-content: center; 
    align-items: center; 
    font-size: ${({ theme }) => theme?.typography?.body?.b6};

    ${({ theme, type, status, iconLabel }) =>
      iconLabel
        ? !type && !status
          ? `
         ${theme.iconInitialAlt}
        color: ${theme?.text};
        &:hover {
          color: ${theme?.grey700Base};
          };
        }
      `
          : theme.iconInitial
        : `
          " "
        `}
  
`;
