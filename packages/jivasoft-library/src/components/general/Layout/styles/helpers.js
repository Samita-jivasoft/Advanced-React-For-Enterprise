
import { MAX_Z_INDEX, DEFAULT_UI_BORDERRADIUS} from 'app/theme'
import { keyframes, css } from 'styled-components'

export function getCommonStatus (props, themeState) {
  let { elements } = props
  if (
    elements.length > 0 &&
    elements?.every(
      element =>
        element?.status?.toLowerCase()?.includes('error') ||
        element?.masktype?.includes('error')
    )
  ) {
    return css`
    background: none;
      .FORM * {
        background: ${themeState?.currentTheme?.dangerColor};
        color: white;
        border-radius: 0px 0px ${DEFAULT_UI_BORDERRADIUS} ${DEFAULT_UI_BORDERRADIUS};
        max-width: none;
      }
    `
  }

  if (
    elements.length > 0 &&
    elements?.every(
      element =>
        element?.status?.includes('warning') ||
        element?.masktype?.includes('warning')
    )
  ) {
    return css`
      .FORM * {
        background: ${themeState?.currentTheme?.warnColor};
        color: white;
      }
    `
  }
  return ''
}

export function getArchetypeStyles (props, themeState) {
  let { layout, mode } = props
  function getLayoutStyles () {
    return layout?.includes('message')
      ? css`
          .FORM {
            ${({ theme }) => theme?.animation?.entrance?.flash};
          }
          z-index: ${MAX_Z_INDEX};
          box-sizing: border-box;
          position: relative;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          display: flex;
          width: 100%;
          background: ${themeState?.currentTheme?.bga3};

          .element * {
            display: flex;
            align-items: center !important;
            font-size: 12px !important;
          }
        `
      : ''
  }
  function getModeStyles () {
    return ''
    // return mode === 'modal'
    //   ? css `
    //     height:100%;
    //     width:100%;
    //     background:red;
    //     display:flex;
    //     position:fixed;
    //     bottom:0;
    //     right:0;
    //     flex-direction:column;
    //     align-items:center;
    //     justify-content:center;
    //     .FORM {
    //       position:absolute !important;
    //       height:500px;
    //       width:500px;
    //     }
    //   `
    //   : '';
  }
  const layoutStyles = getLayoutStyles()
  const modeStyles = getModeStyles()

  // Combining the styles
  return css`
    ${layoutStyles}
    ${modeStyles}
  `
}
