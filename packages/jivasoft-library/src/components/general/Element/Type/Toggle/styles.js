import styled, { css, keyframes } from 'styled-components'


export const Label = styled.label`

`;

export const ToggleDisplayContainerStyled = styled.div`
font-weight:${({ canedit,value}) =>value.length === 0 ? canedit === 1 ? null : '800' : '800'} !important ;

width:100%;
font-size:${({ canedit}) => canedit? '.9rem': '1.1rem'} !important ;
// padding-top:5px;
`