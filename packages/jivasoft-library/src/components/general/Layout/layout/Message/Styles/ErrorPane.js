import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MAX_Z_INDEX } from 'app/theme'

export const MessagePaneStyled = styled.div`
z-index:${MAX_Z_INDEX};
box-sizing:border-box;
position:relative;
overflow-y:auto;
display:flex;
flex-direction:column;
${({theme})=>theme.panela3};
display:flex;
width:100%;

${({css})=>css};

.element * {
    display:flex;
    align-items:center !important;
    font-size:12px !important;
};
`
export const ErrorExitStyled = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:flex-end;
z-index:${MAX_Z_INDEX};

`