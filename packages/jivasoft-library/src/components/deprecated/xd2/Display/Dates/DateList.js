import { DisplayDatetime } from './Datetime'

export const DisplayDateList = ({ list }) => {
  return (
    <div style={{ display: 'flex', width: '90%', overflowX: 'auto' }}>
      {list.map(datetime => {
        return <DisplayDatetime datetime={datetime} />
      })}
    </div>
  )
}
