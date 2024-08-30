import { TimePicker } from "../../..//Input"
import { DynamicButtonV2 } from "../../../DynamicButtonV2"
import { areAllTimesSame } from "./Main"
import React from "react"
export const TimeRangeSelector = (
    {
        showDetail,
        interval,setTime,time,value,twelvehr
    }
) => {


    return (
        <div
          className='TIMEPICKERS'
          style={{
            opacity: showDetail ? 0 : 1,
            pointerEvents: showDetail ? 'none' : null,
            // border: '1px solid red',
            flexDirection: 'row',
            display: 'flex',
            marginTop: '20px',
            width: '100%',
            justifyContent: 'space-around'
          }}
        >
          <div

          >
            <div
              style={{

                opacity: 0.7, fontWeight: 550, fontSize: '.66rem'
              }}
            >
              Start Time
            </div>
            <TimePicker
              twelvehr={twelvehr}
              interval={interval ? interval : 0}

              handleParent={value => {
                if (value) {
                  setTime({ ...time, starttime: value })
                }
              }}
              canedit={1}
            />
          </div>

          <div>
            <div
              style={{ opacity: 0.7, fontWeight: 550, fontSize: '.66rem' }}
            >
              End Time
            </div>
            <TimePicker
              twelvehr={twelvehr}
              interval={interval ? interval : 0}

              handleParent={value => {
                if (value) {

                  setTime({ ...time, endtime: value })
                }
              }}
              canedit={1}
            />
          </div>
          <div style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            {!areAllTimesSame(value) && (time?.starttime && time?.endtime) && <DynamicButtonV2
              backgroundColor={'#007AFF'}
              color={'white'}
              onClick={() => {
                setTime({ starttime: time?.starttime, endtime: time?.endtime })

              }}
              text={'Set All'}
            />}
           
          </div>

        </div>
    )
}