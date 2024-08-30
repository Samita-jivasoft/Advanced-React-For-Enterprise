import { DEFAULT_UI_MARGIN, DEFAULT_UI_PADDING } from 'app/globalStyles'
import styled from 'styled-components'

export const InputContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${DEFAULT_UI_PADDING};
  // margin: ${DEFAULT_UI_MARGIN};
  flex-direction: column;
  border-radius: 10px;
  @media (max-width: 600px) {
    border-radius: 30px;

  }

  input{
    // -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    // box-shadow: 5px 5px 15px 5px #000000;
    border-radius: 5px;

    border:0px;
    @media (max-width: 600px) {
        border-radius: 40px;
      }
      padding:${DEFAULT_UI_PADDING};
      margin:10px;
  }

  label {
    color: ${({theme})=>theme.textDarkest};

    font-weight: bold;
  }
`
