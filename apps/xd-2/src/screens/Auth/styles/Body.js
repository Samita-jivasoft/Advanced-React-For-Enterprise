import styled from 'styled-components'
import {
  PRIMARY_SHADE,
  COLOR_WHITE,
  DEFAULT_UI_BORDERRADIUS
} from 'app/globalStyles'

export const StyledAuthBody = styled.main`
	box-sizing:border-box;
	height:${props=>props.height};

    width:${props=>props.width};
	min-width:300px;
	padding: 1.5rem 0rem 0rem 0rem;
	color: ${COLOR_WHITE};
	/* border-bottom-right-radius: ${DEFAULT_UI_BORDERRADIUS};
	border-bottom-left-radius: ${DEFAULT_UI_BORDERRADIUS}; */
	border-top-right-radius: ${DEFAULT_UI_BORDERRADIUS};
	border-bottom-right-radius: ${DEFAULT_UI_BORDERRADIUS};
	border-top-left-radius: ${props=>props.width=='90%'?DEFAULT_UI_BORDERRADIUS:null};
	border-bottom-left-radius: ${props=>props.width=='90%'?DEFAULT_UI_BORDERRADIUS:null};
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-content: center;
		align-items: center;
		padding: 0rem 3rem 0rem 3rem;
		color: ${PRIMARY_SHADE};
		background-color:white;
		// border-top-right-radius: 3rem;
		// border-bottom-right-radius: 3rem;
		// border-bottom-left-radius: 0rem;
	
`
