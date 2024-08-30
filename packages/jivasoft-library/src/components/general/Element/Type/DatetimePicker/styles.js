import { DEFAULT_UI_PADDING } from 'app/theme'
import styled from 'styled-components'
export const DatetimePickerMain = styled.div`
  // border: 1px solid red;
  flex-direction: row;
  display: flex;
  width: 100%;
  // margin-top: 5px;
`
export const DateTimeElementContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.duration ? 'column' : 'row')};
  border-radius: 4px;
  padding: ${props => (props.isEdit ? '10px' : '0px')};
  background: ${({ theme, isEdit }) =>
    isEdit ? (theme.id === 'light' ? theme.bga2 : theme.bg1) : null};
  border-bottom: ${({ isEdit }) => (isEdit ? 1 : 0)}px solid
    ${({ remainingRequirements, theme }) =>
      remainingRequirements?.length > 0
        ? theme.dangerColor
        : theme.successColor} !important;
  &: hover {
    background: ${({ theme, isEdit, value }) =>
      !value && isEdit
        ? theme.id === 'light'
          ? theme.bga2
          : theme.bga1
        : null};

    cursor: ${({ isEdit, value }) => (isEdit ? 'pointer' : null)};
  }
  justify-content: ${props => (props.isEdit ? 'center' : 'flex-start')};
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  margin-right: ${({ showTimePicker }) => (showTimePicker ? '10px' : '0px')};
`
export const DatetimeDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.duration ? 'column' : 'row')};
  border-radius: 4px;
  width: 100%;
  justify-content: flex-start;
  // border-bottom-right-radius:0px !important;
  // border-bottom-left-radius:0px !important;
  margin-top: 5px;
`

export const SelectedItemStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${DEFAULT_UI_PADDING};
  font-weight: bold;
  color: ${({ theme }) => theme.successColor};
  margin: 5px;
  &: hover {
    cursor: pointer;
  }
  border: 1px solid ${({ theme }) => theme.successColor} !important;
  background: ${({ theme }) => theme.panela1};
`
export const DateInput = styled.input`
  /* Reset default styles */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;

  /* Add your custom styles */
  font-family: Arial, sans-serif;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  /* Style the calendar icon for date input */
  &::-webkit-calendar-picker-indicator {
    /* Add your custom icon here, e.g., an SVG */
    content: '📅';
    font-size: 14px;
    padding: 4px;
    color: #666;
    cursor: pointer;
  }

  /* Style for when the input is focused */
  &:focus {
    border-color: #007bff;
  }
`

export const CalendarContainer = styled.div`
  background: ${({ theme, isEdit }) =>
    theme.id === 'light' ? theme.panela3 : theme.bg1};
  display: flex;
  position: absolute;
  top: 100%;
  z-index: 999999999999;
`
