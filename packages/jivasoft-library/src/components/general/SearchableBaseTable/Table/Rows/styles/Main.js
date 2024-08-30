import { generateElement } from 'app/theme'
import { LightenDarkenColor, standardizeColor } from 'app/helpers'
import styled from 'styled-components'

export const HeaderRow = styled.div`
  // border: 1px solid yellow;
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const StyledRow = styled.div`
  // border: 1px solid red;
  display: flex;
  font-weight: bold;
  align-items: center;
  padding: 0px 0px 5px 0px;
`
export const StyledRightSide = styled.div`
  // border: 1px solid red;
  display: flex;
  margin-left: auto;
  align-items: center;
  // margin:10px;
  // height: 100%;
`

export const DetailViewContainer = styled.div`
  border: 1px solid pink;
  ${({ themeColor, theme }) =>
    themeColor
      ? theme.id === 'light'
        ? generateElement({
            type: 'panel',
            color1: themeColor,
            color2: LightenDarkenColor(standardizeColor(themeColor), 40),
            border: LightenDarkenColor(standardizeColor(themeColor), -10),
            transparency: 0.5
          })
        : theme.panelb3
      : theme.id === 'light'
      ? theme.panela3
      : theme.panelb3};
  color: ${({ textColor }) => textColor};
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 0px !important;
  // margin: 0px 0px 0px 0px !important;
  box-sizing: border-box;
  z-index: 2;
`
export const DetailViewContentContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  // margin: 10px;
`
export const DetailViewHeader = styled.div`
  // border: 1px solid red;
  font-weight: bold;
  box-sizing: border-box;
  display: flex;
  z-index: 2;
  align-items: center;
  width: 100%;
  padding: 10px;
`
export const DetailViewBody = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  overflow: auto;
  margin-bottom: 20px;
  // height: 100%;
`
