import React from 'react'
import { months } from 'app/constants'
import { StyledDisplayDate } from './styles'
import { FaTimes, FaTrash } from 'react-icons/fa'
import { useAppTheme } from 'app/data'

export const DisplayDatetime = ({ datetime, remove,twelvehr }) => {
  const date = new Date(datetime.date).toUTCString()
  function padTo2Digits(num) {
    return String(num).padStart(2, '0')
  }
  const [themeState,] = useAppTheme()
  return (
    <StyledDisplayDate
    // selected={item.selected}
    >
      {remove && <div
        onClick={() => {
          remove()
        }}
        style={{ position: 'absolute', right: -5, top: -5, background: themeState?.currentTheme?.dangerColor, padding: 5, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 25, borderRadius: 100 }} ><FaTrash color={'white'} /></div>}
      {datetime.date && (
        <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {months[new Date(date).getUTCMonth()].slice(0, 3).toUpperCase()}
        </div>
      )}
      {datetime.date && (
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {new Date(date).getUTCDate()}
        </div>
      )}
      {datetime.date && (
        <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {new Date(date).getUTCFullYear()}
        </div>
      )}

      {/* {datetime.date && <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{new Date(datetime.date).toLocaleString('default',{month:'short'})}</div>} */}
      {/* {datetime.date && <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{new Date(datetime.date).getDate()}</div>}
        {datetime.date && <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{new Date(datetime.date).getFullYear()}</div>} */}
      {datetime.date && datetime.starttime && (
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'white',
            marginTop: 5,
            marginBottom: 5
          }}
        />
      )}
      {datetime.starttime && (
        twelvehr ? <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
        { (new Date(datetime.starttime).getUTCHours() + 24) % 12 || 12}:
          {padTo2Digits(new Date(datetime.starttime).getUTCMinutes())}
          {new Date(datetime.starttime).getUTCHours()>11? 'PM':'AM'}
        </div> : <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {new Date(datetime.starttime).getUTCHours()}:
          {padTo2Digits(new Date(datetime.starttime).getUTCMinutes())}
        </div>
      )}
      {datetime.endtime && (
        twelvehr?<div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
        { (new Date(datetime.endtime).getUTCHours() + 24) % 12 || 12}:
        {padTo2Digits(new Date(datetime.endtime).getUTCMinutes())}
        {new Date(datetime.endtime).getUTCHours()>11? 'PM':'AM'}

      </div>:<div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {new Date(datetime.endtime).getUTCHours()}:
          {padTo2Digits(new Date(datetime.endtime).getUTCMinutes())}
        </div>
      )}

      {/* <div>to</div>
        <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.endtime : null}</div> */}
    </StyledDisplayDate>
  )
}
