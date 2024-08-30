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

import { ToggleSwitch } from "../ToggleSwitch";
import { AnimatedDynamicModal } from "../../../general";
import { DetailDateContainer, DetailDateObj } from "./Styles";
import { useAppTheme, useViewport } from "app/data";

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
  handleTimeChange
}) => {  
  
  const {viewWidth,} = useViewport()
  const [show, setShow] = useState(false)
  const [mName, setMName] = useState('')
  const [warn, setWarn] = useState(false)
  const [dateHold, setDateHold] = useState({starttime:item.starttime,endtime:item.endtime})

  var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let mNum;

  function handleIconClick(masktype)
  {
    handleSelecting(item.index,masktype)
  }
  
  useEffect(()=>{
  },[timeFormat])

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
      else{
        setMName('')
      }
    }
  }, [dateRows])

  useEffect(()=>{

    if(dateHold.starttime >= dateHold.endtime)
    {
      setWarn(true)
    }
    else{
      setWarn(false)
    }
  },[dateHold])

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
          selected={item.selected}
          fontRem={.1}
          fontVMin={2}
        >
          {item && 
            <DisplayTime
              viewWidth={viewWidth}
            >
                { masktype==='datetime' && item.selected ? 
                  <EditIcon
                    onClick={()=> item.selected && setShow(true)}
                  /> 
                  :
                  <EditOffIcon/>
                }

              <div>
                {item.starttime} 
              </div>

              <div>
                {viewWidth>1200 &&'-'} 
              </div>

              <div>
                {item.endtime}
              </div>

            </DisplayTime>}
          <DateObj
            selected={item.selected}
            onClick={() => handleIconClick(masktype)}
            fontRem={.2}
            fontVMin={2}
            item={item ? true : false}
            color={!item ? 'white' : null}
          >
            {/* {masktype === 'datetime' && item ? (iconState ? item.date.slice(8, 10) : <div style={{ fontSize: 'calc(.25rem + 1vmin)', }}>{item.starttime}<br />{item.endtime}</div>) : null}
            {masktype === 'date' && item.date.slice(8, 10)} */}
            {item.date.slice(8,10)}
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
            <TimeDiv>
              <DetailDateContainer
                selected={item.selected}
                fontRem={1}
                fontVMin={7}
              >
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.starttime : null}</div>
                <div>to</div>
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.endtime : null}</div>

              </DetailDateContainer>
            </TimeDiv>

            <SelectDiv
              onClick={(e) => e.stopPropagation()}
            >
              <TopSelectDiv>
                {/* Unselected */}
                <ToggleComponent
                  item={item}
                  handleSelecting={handleSelecting}
                  masktype={masktype}
                />
              </TopSelectDiv>

              <BottomSelectDiv>
                <LabelDiv
                  height={50}
                  width={80}
                  color={'red'}
                >
                  <InputDiv
                    height={90}
                    width={40}
                  >
                    Start Time  &nbsp;
                    {/* <TimeInput type='time' value={item.starttime || ''} selected={item.selected} onChange={(e) => item.selected && handleTimeChange(item.index, 0, e.target.value)} /> */}
                    <StyledTimePicker
                      value={item.starttime || ''}
                      onChange={(value) => {handleTimeChange(item.index, 0, value); setDateHold({...dateHold,starttime:value})}}
                      format= {timeFormat ? "HH:mm" : ''}
                      disableClock={true}
                      disabled={!item.selected}
                    />
                  </InputDiv>
                  to
                  <InputDiv
                    height={90}
                    width={40}
                  >
                    <div>
                      End Time  &nbsp;
                      {warn ? <XIcon/> : null}
                    </div>
                    {/* <TimeInput type='time' value={item.endtime || ''} selected={item.selected} onChange={(e) => item.selected && handleTimeChange(item.index, 1, e.target.value)} /> */}
                    <StyledTimePicker
                      value={item.endtime || ''}
                      onChange={(value) => {handleTimeChange(item.index, 1, value); setDateHold({...dateHold,endtime:value})}}
                      format= {timeFormat ? "HH:mm" : ''}
                      disableClock={true}
                      disabled={!item.selected}
                      selected={item.selected}
                    />

                   </InputDiv>

                </LabelDiv>
              </BottomSelectDiv>
            </SelectDiv>

          </TimeBackground>
        </AnimatedDynamicModal>
      }

    </>
  )
}