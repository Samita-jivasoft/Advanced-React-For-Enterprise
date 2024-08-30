import React, { useState } from 'react'

export const GoogleMaps = props => {
  const [selectedLocation, setSelectedLocation] = useState({
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  })

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }} //requires api key
        defaultCenter={selectedLocation.center}
        defaultZoom={selectedLocation.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={59.955413} lng={30.337844}>
          'Hello'
        </Marker>
      </GoogleMapReact>
      {/* <iframe
        width='600'
        height='450'
        // style='border:0'
        loading='lazy'
        allowfullscreen
        referrerpolicy='no-referrer-when-downgrade'
        src='https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA'
      ></iframe> */}
    </MapContainer>
  )
}
