import { PRIMARY_COLOR, DEFAULT_UI_BORDERRADIUS } from 'app/globalStyles'
import styled from 'styled-components'

export const StyledAuthHeader = styled.header`
  box-sizing:border-box;
  display: flex;
  color: white;
  text-align: center;
  background-color: ${props=>props.backgroundColor};
  border-top-left-radius: ${DEFAULT_UI_BORDERRADIUS};
  border-bottom-left-radius: ${DEFAULT_UI_BORDERRADIUS};
  // border-top-right-radius: 0rem;
  // border-top-left-radius: 3rem;
  // border-bottom-left-radius: 3rem;
width:${props=>props.width};
  }
`
