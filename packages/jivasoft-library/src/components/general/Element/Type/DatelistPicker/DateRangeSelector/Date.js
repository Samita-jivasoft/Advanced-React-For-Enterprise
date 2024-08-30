import React from 'react'
import { useEffect, useState } from "react";
import {
  XIcon,
  DateObj,
  TimeDiv,
  DateDiv,
  LabelDiv,
  EditIcon,
  InputDiv,
  ButtonDiv,
  SelectDiv,
  BorderDiv,
  TimeInput,
  CloseIcon,
  EditOffIcon,
  DisplayTime,
  DateWrapper,
  TopSelectDiv,
  CloseIconDiv,
  SelectButton,
  DateContainer,
  HeaderMonthDiv,
  TimeBackground,
  BottomSelectDiv,
  StyledTimePicker,
} from "."

import { TimePicker, ToggleSwitch } from "../../../../../general";
import { AnimatedDynamicModal } from "../../../../../general";
import { DetailDateContainer, DetailDateObj } from "./Styles";
import { useAppTheme, useViewport } from "app/data";
import { DatetimePickerStyled } from './Styles/Datetimepicker';

const ToggleComponent = ({ item, handleSelecting, masktype }) => {

  const [checked, setChecked] = useState(item.selected)
  useEffect(() => {
    if (item.selected !== checked) {
      handleSelecting(item.index, masktype)
    }
  }, [checked])

  return (
    <ToggleSwitch
      id={'switch'}
      label='Select this Date' //optional
      checked={checked} //required
      onChange={setChecked} //required
      // optionLabels={['long yes', 'long no']} //optional
      //  optionLabels={['YES', 'NO']}
      onColor={'#060'} //optional
      offColor={'#bbb'} //optional
    // color={'#fff'} //optional
    // small //optional
    // disabled //optional
    />
  )
}

export const ItemDate = ({
  item,
  tempArr,
  dateRows,
  masktype,
  timeFormat,
  handleSelecting,
  handleTimeChange,
}) => {

  const { viewWidth, } = useViewport()
  const [show, setShow] = useState(false)
  const [mName, setMName] = useState('')
  const [warn, setWarn] = useState(false)
  const [dateHold, setDateHold] = useState({ starttime: item.starttime, endtime: item.endtime })

  var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let mNum;

  function handleIconClick(masktype) {
    handleSelecting(item.index, masktype)
  }

  useEffect(() => {
  }, [timeFormat])

  //determines if month name should be shown on top of the date
  useEffect(() => {
    if (item) {
      const day = new Date(item.date)
      var dateNum = parseInt(item.date.slice(8, 10))

      if (item.index === 0) {
        mNum = parseInt(item.date.slice(5, 7))
        setMName(mL[mNum - 1])
      }
      else if (dateNum === 1 && item.index !== 0) {
        mNum = parseInt(item.date.slice(5, 7))
        setMName(mL[mNum - 1])
      }
      else {
        setMName('')
      }
    }
  }, [dateRows])

  useEffect(() => {

    if (dateHold.starttime >= dateHold.endtime) {
      setWarn(true)
    }
    else {
      setWarn(false)
    }
  }, [dateHold])

  const [themeState,] = useAppTheme()

  return (
    <>
      <DateWrapper>
        <HeaderMonthDiv>
          {mName ?
            <CloseIconDiv
              justify={'center'}
              height={50}
              width={90}
              fontRem={0.15}
              bg={'#B8B8B8'}
            >
              <div>{mName}</div>
            </CloseIconDiv>
            : <CloseIconDiv><BorderDiv /></CloseIconDiv>
          }
        </HeaderMonthDiv>
        <DateContainer
         onClick={() => handleIconClick(masktype)}
          selected={item.selected}
          fontRem={.1}
          fontVMin={2}
        >
{masktype === 'datetime' && item.selected ?
                  <EditIcon
                  onClick={(event) => {
                    item.selected && setShow(true)
                    event.stopPropagation();
                  }}
                   style={{position:'absolute',top:0,right:0}}
                  />
                  :
                  <EditOffIcon
                  onClick={(event) => {
                    item.selected && setShow(true)
                    event.stopPropagation();
                  }}
                  style={{position:'absolute',top:0,right:0}}

                  />
                }
          <DateObj
           
            fontRem={.2}
            fontVMin={2}
            item={item ? true : false}
            color={!item ? 'white' : null}
          >



            {item.date.slice(8, 10)}
            {item &&
              <DisplayTime
               

                viewWidth={viewWidth}
              >
                
                
                <div>
                  {item.starttime}
                </div>

    
                <div>
                  {item.endtime}
                </div>

              </DisplayTime>}
          </DateObj>
        </DateContainer>
      </DateWrapper>

      {show &&
        <AnimatedDynamicModal
          type={'bottom sheet'}
          headerText={new Date(item.date).toLocaleDateString()}
          onClose={() => setShow(false)}
          themeColor={themeState.currentTheme.bg0}
          fontColor={themeState.currentTheme.text}
          backgroundColor={themeState.currentTheme.bg0}
          dismissable
        >
          <TimeBackground>
            {/* <TimeDiv>
              <DetailDateContainer
                selected={item.selected}
                fontRem={1}
                fontVMin={7}
              >
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.starttime : null}</div>
                <div>to</div>
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.endtime : null}</div>

              </DetailDateContainer>
            </TimeDiv> */}

            <SelectDiv
              onClick={(e) => e.stopPropagation()}
            >
              {/* <TopSelectDiv>
                <ToggleComponent
                  item={item}
                  handleSelecting={handleSelecting}
                  masktype={masktype}
                />
              </TopSelectDiv> */}

              {/* <BottomSelectDiv> */}
              <div >
                <div style={{ opacity: .7, fontWeight: 550, fontSize: '.66rem' }}>
                  START TIME

                </div>
                <DatetimePickerStyled>
                  <TimePicker
                    twelvehr
                    handleParent={(value) => {
                      if (value) {
                        let time = value.match(/\d\d:\d\d/);
                        handleTimeChange(item.index, 0, time[0]); setDateHold({ ...dateHold, starttime: time[0] })
                        // handleTimeChange(item.index, 0, time[0]); setDateHold({...dateHold,starttime:time[0]})}
                        // setTimeVal({ ...timeVal, endtime: time[0] })
                      }
                    }}
                    canedit={1}
                  />
                </DatetimePickerStyled>
              </div>
              <div style={{margin:10}} />
              <div>
                <div style={{ opacity: .7, fontWeight: 550, fontSize: '.66rem' }}>
                  END TIME

                </div>
                <DatetimePickerStyled>
                  <TimePicker
                    twelvehr
                    handleParent={(value) => {
                      if (value) {
                        let time = value.match(/\d\d:\d\d/);
                        handleTimeChange(item.index, 1, time[0]); setDateHold({ ...dateHold, endtime: time[0] })
                        // handleTimeChange(item.index, 0, time[0]); setDateHold({...dateHold,starttime:time[0]})}
                        // setTimeVal({ ...timeVal, endtime: time[0] })
                      }
                    }}
                    canedit={1}
                  />
                </DatetimePickerStyled>
              </div>



              {/* </BottomSelectDiv> */}
            </SelectDiv>

          </TimeBackground>
        </AnimatedDynamicModal>
      }

    </>
  )
}