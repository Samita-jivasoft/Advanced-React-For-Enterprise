import { formatDate } from '../../../app/helpers';
import React, { useEffect, useRef, useState } from 'react';

export const CalendarIcon = ({ 
  children, 
  label, 
  theme = 'gray', 
  date, 
  foregroundColor, 
  detailColor, 
  removable, 
  color = 'white', 
  height = 100, 
  width = 100, 
  onclick, 
  handleParent }) => {

  const [dateState, setDateState] = useState({
    dateDay: '',
    dayOfWeek: '',
    month: '',
    year: '',
  })
  const timepickerRef = useRef(null);
  const iconref = useRef(null);
  const [datetime, setDatetime] = useState(date ? date : new Date())

  useEffect(() => {
    handleParent && handleParent(datetime)

    setDateState({
      dateDay: formatDate(datetime, 'date'),
      dayOfWeek: formatDate(datetime, 'daysOfWeekCondensed'),
      month: formatDate(datetime, 'month'),
      year: formatDate(datetime, 'year'),
    })
  }, [datetime, date])

  return (
    <div
      ref={iconref}
      style={{ flexDirection: 'column', display: 'flex', position: 'relative' }}>
      {label && <div style={{ color: color, textAlign: 'center', fontSize: 11, padding: 5 }}>
        {label}
      </div>}

      <svg
        onClick={onclick ? () => onclick :
          () => { timepickerRef.current.showPicker() }
        }
        width={width} height={height} viewBox="0 0 250 300">

        <rect x="0" y="0" width="100%" height="100%" fill={'white'} />
        <text id="Start_Date" data-name="Start Date" transform="translate(806 203)" fill={color} font-size="26" font-family="Public Sans" font-weight="700"><tspan x="0" y="0">{label}</tspan></text>

        <rect x="0" y="0" width="100%" height="20%" fill={theme} />
        <text id="month" x='50%' y='12%' fill="#fff" font-size="32" font-family="Public Sans" text-anchor="middle" font-weight="700">{dateState?.month}</text>

        <text id="dayOfWeek" x='50%' y='35%' fill="black" font-size="32" font-family="Public Sans" text-anchor="middle" font-weight="700">{dateState?.dayOfWeek}</text>
        <text id="dayOfWeek" x='50%' y='65%' fill="black" font-size="72" font-family="Public Sans" text-anchor="middle" font-weight="700">{dateState?.dateDay}</text>
        <text id="dayOfWeek" x='50%' y='85%' fill="black" font-size="32" font-family="Public Sans" text-anchor="middle" font-weight="700">{dateState?.year}</text>


        {/* <defs>
        <filter id="Rectangle_352" x="50" y="50" width="231" height="251" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Group_557" data-name="Group 557" transform="translate(-436 -180)">
        <g id="Group_542" data-name="Group 542" transform="translate(-319 2)">
          <g id="Group_540" data-name="Group 540" transform="translate(494 -8)">
            <g id="Group_537" data-name="Group 537" transform="translate(-6 -5)">
              <g id="Group_494" data-name="Group 494" transform="translate(276 248)">
                <g id="Group_535" data-name="Group 535" transform="translate(0 0)">
                  <g id="Group_539" data-name="Group 539">
                    <g transform="matrix(1, 0, 0, 1, -9, -57)" filter="url(#Rectangle_352)">
                      <g id="Rectangle_352-2" data-name="Rectangle 352" transform="translate(9 57)" fill="#fff" stroke={theme} >
                        <rect width="213" height="233" rx="4" stroke="none"/>
                        <rect x="0.5" y="0.5" width="212" height="232" rx="3.5" fill="none"/>
                      </g>
                    </g>
                    <text id="_10" data-name="10" transform="translate(61 168)" fill="#162a3f" font-size="86" font-family="Public Sans" font-weight="700"><tspan x="0" y="0">{dateDay}</tspan></text>
                    <text id="November" transform="translate(47 80)" fill="#162a3f" font-size="25" font-family="Public Sans" font-weight="700"><tspan x="0" y="0">{dayOfWeek}</tspan></text>
                    <text id="_2022" data-name="2022" transform="translate(75 211)" fill="#162a3f" font-size="25" font-family="Public Sans" font-weight="700"><tspan x="0" y="0">{year}</tspan></text>
                  </g>
                </g>
              </g>
              <g id="Rectangle_352-3" data-name="Rectangle 352" transform="translate(276 246)" fill={theme}  stroke-width="1">
                <path d="M4,0H209a4,4,0,0,1,4,4V56a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z" stroke="none"/>
                <path d="M4,.5H209A3.5,3.5,0,0,1,212.5,4V55.5a0,0,0,0,1,0,0H.5a0,0,0,0,1,0,0V4A3.5,3.5,0,0,1,4,.5Z" fill="none"/>
              </g>
            </g>
            <text id="MON" transform="translate(337 280)" fill="#fff" font-size="32" font-family="Public Sans" text-anchor="middle" font-weight="700">{month}</text>
          </g>
          <text id="Start_Date" data-name="Start Date" transform="translate(806 203)" fill={color} font-size="26" font-family="Public Sans" font-weight="700"><tspan x="0" y="0">{label}</tspan></text>
        </g>
      </g> */}
      </svg>

      <input
        style={{ visibility: 'hidden', position: 'absolute' }}
        value={datetime}
        onChange={(e) => {

          setDatetime(e.target.value)
        }}
        ref={timepickerRef}

        type={'date'} />

      {children}
    </div>

  )

}
// CalendarIcon.defaultProps = {
//   height: 100,
//   width: 100,
//   color: "white",
//   theme: 'grey',
// }