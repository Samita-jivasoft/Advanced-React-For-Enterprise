import { months } from 'app/constants'
import { StyledDisplayDate } from './styles'

export const DisplayDatetime = ({ datetime }) => {
  const date = new Date(datetime.date).toUTCString()
  function padTo2Digits (num) {
    return String(num).padStart(2, '0')
  }
  return (
    <StyledDisplayDate
    // selected={item.selected}
    >
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
        <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {new Date(datetime.starttime).getUTCHours()}:
          {padTo2Digits(new Date(datetime.starttime).getUTCMinutes())}
        </div>
      )}
      {datetime.endtime && (
        <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>
          {new Date(datetime.endtime).getUTCHours()}:
          {padTo2Digits(new Date(datetime.endtime).getUTCMinutes())}
        </div>
      )}

      {/* <div>to</div>
        <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item ? item.endtime : null}</div> */}
    </StyledDisplayDate>
  )
}
