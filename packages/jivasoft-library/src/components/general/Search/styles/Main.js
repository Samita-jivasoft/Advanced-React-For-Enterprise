import styled,{keyframes} from 'styled-components'

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height:${props=>props.height};
  overflow:auto;
  align-items:center;
  position:${props => props.position};
  top:0;
  z-index:${props=>props.zIndex};
  right:0; 
  overflow: none;
  padding:${props=>props.padding};
  ${props => props.background};
  //border: solid 2px green;
`
export const StyledSearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  //height: 5vh;
  width: 100%;
  position: relative;
  //border: solid 1px blue;
  justify-content: center;
  align-items: center;
`
export const StyledSearchDivMobile = styled.div`
&:hover {

  cursor:pointer;
  border-radius:14px;


  /* Start the shake animation and make the animation last for 0.5 seconds */
  ${({ theme }) => theme?.animation?.path?.shakeX};

  /* When the animation is finished, start again */
  animation-iteration-count: 1;
  background:${({theme})=>theme.bg0 };
}

// @keyframes shake {
//   0% { transform: translate(4px, 0px) rotate(0deg); }
//   50% { transform: translate(-4px, 0px) rotate(0deg); }

// }

`
