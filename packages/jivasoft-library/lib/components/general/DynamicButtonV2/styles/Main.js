import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled from 'styled-components'

export const StyledDynamicButtonV2 = styled.div`
    // all buttons
    cursor:pointer;
    ${
        (props)=>{
            if(props.disabled){
                
                return  `

                background-color: ${props.backgroundColor};`

            } else{
                 return `
                 background: -webkit-linear-gradient(45deg,${ props.backgroundColor},${LightenDarkenColor(standardizeColor(props.backgroundColor),60)});`

            }
        }
    };
    // background: ${props => props.backgroundColor};
    // background: -moz-linear-gradient(45deg,${props => props.backgroundColor},(45deg,${props => props.backgroundColor},${props => LightenDarkenColor(standardizeColor(props.backgroundColor),20)});); 
    // background: -webkit-linear-gradient(45deg,${props => props.backgroundColor},(45deg,${props => props.backgroundColor},${props => LightenDarkenColor(standardizeColor(props.backgroundColor),20)}););
    // background: linear-gradient(45deg,${props => props.backgroundColor},(45deg,${props => props.backgroundColor},${props => LightenDarkenColor(standardizeColor(props.backgroundColor),20)}););
    width:${props=>props.width?props.width:null};

    color: ${props => props.color} !important;
        // filter: brightness(125%);
        // color: ${props=>LightenDarkenColor(standardizeColor(props.backgroundColor),-300)} !important;

    // border:${props=>props.disabled?'2px solid black':null};
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    max-width:150px;
    // default styles
    border-radius: ${props => props.mobile||props.type==='circle' ? "2rem" : ".2rem" };
    font-weight: ${props => props.mobile ? "bold" : "normal" };

    // based on size
    padding: ${props => props.mobile ? "0 1rem" : "0 0.5rem"};
    height: ${props => props.mobile ? "2.6em" : "1.8rem" };
    // line-height: ${props => props.mobile ? "2.6rem" : "1.8rem" };
    font-size: ${props => props.mobile ? "1.2" : "0.8rem" };


    &:hover {
        filter: brightness(85%);

        // color: ${props => LightenDarkenColor(standardizeColor(props.color),20)};
        // background-color: ${props => LightenDarkenColor(standardizeColor(props.backgroundColor),20)};
        //   box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
        //   cursor: pointer;

      }
`

export const DefaultLG  = {
    padding:'0 1.5rem',
    height: '2.8rem',
    lineHeight:'2.8rem',
    fontSize: '1.4rem',
}

export const DefaultXL = {
    padding: '0 2.5rem',
    height: '5.8rem',
    lineHeight: '5.8rem',
    fontSize: '1.8rem',
}