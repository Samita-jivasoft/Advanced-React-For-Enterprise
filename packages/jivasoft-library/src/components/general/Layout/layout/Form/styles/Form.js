import {
  DEFAULT_UI_BORDERRADIUS,
  DEFAULT_UI_MARGIN,
  DEFAULT_UI_PADDING,
  MOBILE_UI_BORDERRADIUS,
  generateElement
} from 'app/theme'
import { LightenDarkenColor, standardizeColor } from 'app/helpers';
import styled, { css,keyframes } from 'styled-components'

export const FormStyledHeader = styled.div`

  z-index: 300;
  padding: 0px !important;
  border: 0px !important;
  border-radius: 0px !important;
  color: ${({ theme }) => theme.text};
  top: 0;
  position: sticky;
  font-weight: 900;
  text-align: flex-start;
  align-items:flex-end;
  justify-content:center;
display:flex;
flex-direction:row;
  //border-top-left-radius:${DEFAULT_UI_BORDERRADIUS};
  // border-top-right-radius:${DEFAULT_UI_BORDERRADIUS};
  ${({ theme,tabstate }) => tabstate>0?theme.neoEmbedPanela3:null};
  width: 100%;
  height:20%
  max-height:35px;
  font-size: 0.8rem;
border-bottom:${({ layout,tabstate}) => layout==='message'? '0px':tabstate?.length>0 ?'10px':'0px'} solid white !important;


`

export const CloseIconStyled = styled.div`
  position: absolute;
  top:0;
  right:0;

`;

export const StackContainer = styled.div`
  position: relative;
  width: 100%;  // Set to the width of a single form
  height:100%;
  overlow-y:hidden;
  perspective: 1000px;
`;

export const FormNavigationButtonStyled = styled.div`
${({ backgroundColor }) => generateElement({
  type: 'panel',
  color1: backgroundColor,
  color2: LightenDarkenColor(standardizeColor(backgroundColor), 40),
  border: LightenDarkenColor(standardizeColor(backgroundColor), -10),
  transparency: 0.5
})};
color:${({ color, theme }) => color ? color :'grey'};
font-weight:800;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
font-size:.9rem !important;
&:hover {
  cursor: pointer;
  filter: brightness(.85);
}
margin:5px;
@media (max-width: 600px) {
  width:100%;
}
.next {

  ${({ theme }) => theme?.animation?.path?.bounce};
}

`
export const FormRequiredStyled = styled.div`
width:100%;
align-items:center;
justify-content:center;
display:flex;
`
export const FormNavigationStyled = styled.div`
 margin: 10px;
 box-sizing:border-box;
  display:flex;
  max-width:650px;
  width:100%;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
  ${({ theme }) => theme?.animation?.entrance?.slideFromBottom};

`
export const FormStepperStyled = styled.div`
${({ theme }) => theme.panela3};
 padding:0px !important;
 margin: 10px;
  display:flex;
  flex-direction:row;

`
export const FormContainerStyled = styled.div`
height:100%;
width:100%
`
export const ScrollDownStyled = styled.div`
color: ${({ theme }) => theme.bga3};
position:absolute;
right:15px;
${({ theme }) => theme?.animation?.entrance?.slideFromBottom};

bottom:10px;
background:${({ theme }) => theme.bgb3};
border-radius:100px !important;
&:hover {
  cursor: pointer;

}
border:1px solid ${({ theme }) => theme.bga3};
height:30px;
width:30px;

display:flex;
z-index:150;
align-items:center;
justify-content:center;
`

export const FormStyled = styled.form`
display:flex;
${({theme})=>theme.scrollable};
border-radius:4px;
// margin-top:100px;
color: ${({ theme }) => theme.text};
// padding-bottom:20px;
//  border:2px solid ${({ theme }) => theme.bga3};
box-sizing:border-box;
// padding:${DEFAULT_UI_PADDING};
position:relative;
height:100%;
width:100%;
// background:white;
// display: flex;
flex-direction: column;
// flex-wrap: wrap;
// border-radius:${DEFAULT_UI_BORDERRADIUS};
// border-bottom-left-radius:${DEFAULT_UI_BORDERRADIUS};
// border-bottom-right-radius:${DEFAULT_UI_BORDERRADIUS};
// box-shadow: ${({ theme }) => theme.navShade};
overflow-y:scroll;
overflow-x:hidden;
// flex-wrap:column wrap;
align-items:center;
// justify-content:center;


  // overflow:auto;
// display:flex;
// flex-direction:column;
// wrap:flex-wrap;
// justify-content:center;
// align-items:center;

}
/* existing styles */
// position: absolute;
// top: 0;
// left: 0;
// z-index: ${({ index }) => 100 - index};  // Higher index forms will be at the back
// transform: ${({ index }) => `translateY(${index * 20}px) translateZ(-${index * 20}px)`};
// height:100%;
// width:100%;
// background-color: ${({ index, theme }) => `rgba(255,255,255, ${1 - index * 0.1})`};



`