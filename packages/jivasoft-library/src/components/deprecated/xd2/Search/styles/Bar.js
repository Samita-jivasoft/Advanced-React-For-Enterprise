import { DEFAULT_UI_PADDING, DEFAULT_UI_BORDERRADIUS} from 'app/theme'
import styled from 'styled-components'

export const StyledSearchBar = styled.input`
  display: flex;2
  width: 100%;
  min-width: 400px;
  padding-left: ${DEFAULT_UI_PADDING};
  padding-right: ${DEFAULT_UI_PADDING};
  padding:10px !important;
  border: 0px;
  border-radius: ${DEFAULT_UI_BORDERRADIUS} !important;
  ${({ theme }) => theme.neoEmbedPanela3};
  align-items: center;
  -webkit-appearance: none; /* add this */

  @media (max-width: 600px) {
    width: 90%;
    min-width: 100px;

  }
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
  color: ${({ theme }) => theme.text};
`
export const StyledSearchBarDiv = styled.div`
  display: flex;

  padding: ${DEFAULT_UI_PADDING};
  border: 0px;
  border-radius: 100px;
  ${({ theme }) => theme.panela1};
  align-items: center;

  // padding-left:40px;
  // padding-right:40px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`
