import styled from 'styled-components'

export const MapboxContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .marker {
    cursor: pointer;
  }

  .mapboxgl-ctrl {
    // cursor: pointer;
    // margin: 10px;
    // padding: 5px;
    // background-color: #fff;
    // border-radius: 4px;
    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`
export const CenterTracker = styled.div`
  background-color: rgb(35 55 75 / 90%);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`
