import {
  DEFAULT_UI_BORDERRADIUS,
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_PADDING,
  MOBILE_UI_BORDERRADIUS
} from 'app/globalStyles'
import styled from 'styled-components'
export const FormStyledHeader = styled.div`
z-index:2;
border:0px !important;
border-radius:0px !important;
${({ theme }) => theme.paneb1};
color: ${({ theme }) => theme.text};
top:0;
position:sticky;
font-weight:900;
text-align:center;

 //border-top-left-radius:${DEFAULT_UI_BORDERRADIUS};
// border-top-right-radius:${DEFAULT_UI_BORDERRADIUS};

width:100%;
 font-size:1rem; 
`
export const FormStyled = styled.form`
display:flex;
// margin-top:100px;
color: ${({ theme }) => theme.text};
// padding-bottom:20px;
//  border:1px solid ${({ theme }) => theme.bg0};
box-sizing:border-box;
// padding:${DEFAULT_UI_PADDING};
position:relative;
height:100%;
width:100%;

// display: flex;
flex-direction: column;
// flex-wrap: wrap;
// max-height: 1000px;
// border-radius:${DEFAULT_UI_BORDERRADIUS};
// border-bottom-left-radius:${DEFAULT_UI_BORDERRADIUS};
// border-bottom-right-radius:${DEFAULT_UI_BORDERRADIUS};

// box-shadow: ${({ theme }) => theme.navShade};
overflow-y:scroll;
overflow-x:hidden;
// flex-wrap:column wrap;
align-items:center;
// justify-content:center;
  @media (max-width: 600px) {
      // border-bottom-left-radius: 40px;
      // border-bottom-right-radius: 40px;
      // border-radius:${MOBILE_UI_BORDERRADIUS};
    }
  
  // overflow:auto;
// display:flex;
// flex-direction:column;
// wrap:flex-wrap;
// justify-content:center;
// align-items:center;
  
}
`
