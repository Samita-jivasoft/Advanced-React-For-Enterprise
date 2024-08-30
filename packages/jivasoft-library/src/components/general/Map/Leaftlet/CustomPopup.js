import React from 'react'
import { Popup as LeafletPopup } from 'react-leaflet'
import { getGoogleMapsLink } from '../helpers'

export const CustomPopup = props => {
  const { marker, currentLocation } = props
  // console.log(marker, currentLocation)
  return (
    <LeafletPopup>
      <div>
        <b>Address</b>:
        {marker.name && (
          <>
            <br />
            {marker.name}
          </>
        )}
        <a
          href={getGoogleMapsLink(marker, currentLocation)}
          target='_blank'
          rel='noopener noreferrer'
        >
          {(marker.housenumber || marker.road) && (
            <>
              <br />
              {marker.housenumber} {marker.road}
            </>
          )}
          {(marker.city || marker.state || marker.postcode) && (
            <>
              <br />
              {marker.city && marker.city + ', '}
              {marker.state && marker.state + ', '}
              {marker.postcode && marker.postcode}
            </>
          )}
          {(marker.county || marker.country) && (
            <>
              <br />
              {marker.county && marker.county + ', '}
              {marker.country && marker.country}
            </>
          )}
        </a>
        <br />
        <b>Lat</b>: {marker?.position?.lat} <br />
        <b>Lng</b>: {marker?.position?.lng} <br />
      </div>
    </LeafletPopup>
  )
}

export default CustomPopup
