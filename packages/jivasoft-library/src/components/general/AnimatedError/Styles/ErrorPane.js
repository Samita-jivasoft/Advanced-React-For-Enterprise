import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MAX_Z_INDEX } from 'app/theme'

export const ErrorPaneStyled = styled(motion.div)`
z-index:${MAX_Z_INDEX};
color: white;
font-weight:bold;
padding:.5rem;
// width:calc(100%-10px);
box-sizing:border-box;
position:absolute;
@media (max-width:600px){
    position:relative;

}
bottom:0;
display:flex;
margin:10px;
right:0;
color:${({theme})=>theme.dangerColor};
text-align;center;
border:1px solid ${({theme})=>theme.dangerColor} !important;
${({theme})=>theme.panea3};

`
export const ErrorExitStyled = styled(motion.div)`
// position:absolute;
// right:0;
margin-left:50px;
margin-right:10px;

`