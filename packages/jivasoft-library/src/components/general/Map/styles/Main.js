import styled from 'styled-components'

export const MapWrapper = styled.div`
  ${({ theme }) => theme.panela3};
  // border: 1px solid red;
  margin: 0px;
  width: fit-container;
  height: 400px;
  max-height: 600px;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .leaflet-div-icon {
    background: unset !important;
    border: unset !important;
  }

  .info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .info h4 {
    margin: 0 0 5px;
    color: #777;
  }
`

export const Marker = styled.div`
  color: white;
  background: grey;
  padding: 15px 10px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translate(-50%, -50%);
`
