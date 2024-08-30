import styled from 'styled-components'
import {
  DEFAULT_UI_PADDING,
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_BORDERRADIUS,
  LIGHT_NAV_BACKGROUND,
  GradientLinearToTop
} from 'app/globalStyles'

export const StyledApp = styled.div`

  display: flex;
  flex-direction: row;
  border-radius:30.5% !important;
  align-items: center;
    justify-content: center;
    ${({ theme }) => theme.neoEmbedPanelb2};
   filter:brightness(90%);
  height: 100%-${DEFAULT_UI_PADDING};
 
  min-height: 15px;
  min-width: 15px;
  padding: ${DEFAULT_UI_PADDING};
 
  font-weight:bold;
`
export const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30.5%;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 10px;
  height: 100%-${DEFAULT_UI_PADDING};
  padding: ${DEFAULT_UI_PADDING};
`
export const StyledListItem = styled.div`
  display: flex;
  border-radius:5px;
 

  flex-direction: row;
  width: 100%;
  justify-content:space-between;
  align-items: center;
  ${({ theme }) => theme.neoEmbedPanelb2};

  min-height: 15px;
  :hover {
    ${({ theme }) => theme.neoEmbedPanela2};

  }
  padding: ${DEFAULT_UI_PADDING};
`
export const StyledAppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  height: 6%;
  max-height: 50px;
  cursor: pointer;
  width: 100%;
  &:hover ${StyledApp} {
    ${({ theme }) => theme.panel0};
    filter:brightness(110%);

  }
  font-size: 0.8rem;
`
