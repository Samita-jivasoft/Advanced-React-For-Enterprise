import React from 'react'
import { DisplayDatetime } from './Datetime'

export const DisplayDateList = ({ list,twelvehr }) => {
  return (
    <div
      className='DATELIST'
      style={{
        // border: '1px solid red',
        display: 'flex',
        width: '100%',
        overflowX: 'auto',
        padding: '20px 0px 20px 0px'
      }}
    >
      {list.map((datetime, index) => {
        return (
          <DisplayDatetime
          twelvehr={twelvehr}
            key={index + '_' + datetime.date}
            // remove={remove}
            datetime={datetime}
          />
        )
      })}
    </div>
  )
}
