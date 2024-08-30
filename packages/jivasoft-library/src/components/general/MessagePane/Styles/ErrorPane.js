import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MAX_Z_INDEX } from 'app/theme'

export const MessagePaneStyled = styled(motion.div)`
z-index:${MAX_Z_INDEX};
box-sizing:border-box;
overflow-y:auto;
display:flex;
flex-direction:column;
position:absolute;
@media (max-width:600px){
    position:absolute;
    top:0;
    width:100%;
    max-height:40%;
}
bottom:0;
display:flex;
right:0;
text-align;center;
${({theme})=>theme.panea3};

`
export const ErrorExitStyled = styled(motion.div)`
position:absolute;
right:0;
top:0;
z-index:${MAX_Z_INDEX};

`