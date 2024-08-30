import { generateElement } from 'app/theme'
import { LightenDarkenColor } from 'app/helpers'
import styled from 'styled-components'

export const Settings = styled.div`
  ${({ themeColor, theme }) =>
    themeColor
      ? generateElement({
          type: 'panel',
          color1: themeColor,
          color2: LightenDarkenColor(themeColor, 40),
          border: LightenDarkenColor(themeColor, -10),
          transparency: 0.5
        })
      : theme.neoOverlayPanel0};
  // padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: normal; !important;
  font-size: 14; !important;
`
export const Section = styled.div`
  padding: 0px 0px 10px 0px;
`
export const SettingsHeader = styled.div`
  // border: 1px solid red;
  font-weight: bold;
  font-size: 25;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 10px;
`
export const SortableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`
export const ColumnRow = styled.li`
  ${({ themeColor, theme }) =>
    themeColor
      ? generateElement({
          type: 'panel',
          color1: themeColor,
          color2: LightenDarkenColor(themeColor, 40),
          border: LightenDarkenColor(themeColor, -10),
          transparency: 0.5
        })
      : theme.panel0};
  // ${({ theme }) => theme.selectable};
  // width: 100%;
  cursor: move;
  display: flex;
  padding: 5px !important;

  
  .draggable {
    padding: 1rem;
    background-color: white;
    border: 1px solid black;
    cursor: move;
  }

  .draggable.dragging {
    opacity: 0.5;
  }
`
export const RowDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
