import {
  generateElement,
  generateColorShades,
  getBestContrastColor
} from 'app/theme'
import { LightenDarkenColor } from 'app/helpers'
import styled from 'styled-components'

export const StyledColorPicker = styled.div`
  ${({ themeColor, theme }) =>
    themeColor
      ? generateElement({
          type: 'pane',
          color1: themeColor,
          color2: LightenDarkenColor(themeColor, 40),
          border: LightenDarkenColor(themeColor, -10),
          transparency: 0.9
        })
      : theme.neoOverlayPanel0};
  width: fit-content;
`
//TODO: when generating themes add it here
// selectedColor
//   ? generateElement({
//       type: 'panel',
//       color1: getBestContrastColor(
//         selectedColor,
//         generateColorShades(selectedColor, 6)
//       ),
//       color2: LightenDarkenColor(
//         getBestContrastColor(
//           selectedColor,
//           generateColorShades(selectedColor, 6)
//         ),
//         40
//       ),
//       border: LightenDarkenColor(
//         getBestContrastColor(
//           selectedColor,
//           generateColorShades(selectedColor, 6)
//         ),
//         -10
//       ),
//       // transparency: 0.9
//       shadowType: 'neumorphic-overlay',

//     })
//   :

export const ColorPickerContainer = styled.div`
  // border: 1px solid red;
  ${({ theme, selectedColor }) =>
    theme.id == 'dark' ? theme.panelb3 : theme.panela3}
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding: 0px !important;
`
export const ColorPreview = styled.div`
  // border: 1px solid red;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  // justify-content: space-between;
  padding: 20px;
`
export const ColorsContainer = styled.div`
  // border: 1px solid red;
  // background: white;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding: 10px;
`
export const ColorGroupContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding: 0px 0px 10px 0px;
`
export const ColorGroup = styled.div`
  // border: 1px solid red;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`
export const ColorRange = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
`
export const ColorContainer = styled.div`
  ${({ theme }) => theme.selectable}
  // border: 1px solid red;
  display: flex;
  width: 20px;
  height: 20px;
  background: ${({ color }) => color};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.bg0};
  cursor: pointer;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`
export const RecentlySelectedContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  // justify-content: center;
`
export const ThemePanel = styled.div`
  ${({ theme }) => theme.panel0}
  width:50px;
  height: 50px;
`
