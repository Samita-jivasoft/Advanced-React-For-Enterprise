import React from 'react'
/**
 * Converts a geographic coordinate to DMS (degrees, minutes, seconds) format.
 *
 * @param {number} coordinate - The coordinate to convert.
 * @param {string} type - The type of coordinate ('lat' or 'lng').
 * @returns {string} The coordinate in DMS format.
 */
const convertToDMS = (coordinate, type) => {
  const absCoordinate = Math.abs(coordinate)
  const degrees = Math.floor(absCoordinate)
  const minutes = Math.floor((absCoordinate - degrees) * 60)
  const seconds = ((absCoordinate - degrees - minutes / 60) * 3600).toFixed(2)
  const direction =
    coordinate >= 0 ? (type === 'lat' ? 'N' : 'E') : type === 'lat' ? 'S' : 'W'
  return `${degrees}° ${minutes}' ${seconds}" ${direction}`
}

/**
 * Formats a location object for display based on the mask type.
 *
 * @param {Object} location - The location object containing address and geographic information.
 * @param {string} masktype - The type of formatting to apply. Can be 'coordinate', 'zip', or 'address'.
 * @returns {Object} An object with `display` and `value` properties formatted according to the mask type.
 */
export const formatLocationForDisplay = (location, masktype) => {
  const {
    position, // The geographic coordinates (latitude and longitude)
    housenumber, // House number of the address
    road, // Road or street name
    city, // City name
    state, // State name
    postcode, // Postal code
    county, // County name
    country, // Country name
    features // Array of Additional features from Mapbox, such as POIs
  } = location
  const { lat, lng } = position

  // Variables to hold different types of features extracted from the features array
  let featureAddress,
    featurePOI,
    featureNeighborhood,
    featurePostcode,
    featurePlace,
    featureDistrict,
    featureRegion,
    featureCountry

  // If features are provided, map them to specific feature types
  if (features) {
    /**
     * Array of feature IDs to map
     * @type {Array<string>}
     */
    const ids = [
      'address',
      'neighborhood',
      'postcode',
      'place',
      'district',
      'region',
      'country',
      'poi'
    ]
    const featuresMap = {}

    // Iterate through each feature and match it to the corresponding id
    features.forEach(feature => {
      ids.forEach(id => {
        if (feature.id.includes(id)) {
          featuresMap[id] = feature
        }
      })
    })

    // Assign mapped features to respective variables
    featureAddress = featuresMap['address']
    featurePOI = featuresMap['poi']
    featureNeighborhood = featuresMap['neighborhood']
    featurePostcode = featuresMap['postcode']
    featurePlace = featuresMap['place']
    featureDistrict = featuresMap['district']
    featureRegion = featuresMap['region']
    featureCountry = featuresMap['country']
  }

  // Switch case to handle different mask types
  switch (masktype.toLowerCase()) {
    case 'coordinate':
      // Convert position (latitude and longitude) to DMS format
      const formattedLat = convertToDMS(lat, 'lat')
      const formattedLng = convertToDMS(lng, 'lng')
      return {
        display: `${formattedLat}, ${formattedLng}`,
        value: lat + ',' + lng + '|' + `${formattedLat}, ${formattedLng}`
      }

    case 'zip':
      // Handle zip mask type, extract postcode or relevant feature text
      let zipValue
      if (featurePostcode || featurePOI) {
        zipValue =
          featurePostcode?.text ??
          featurePOI?.context?.filter(
            feature => feature?.id?.includes('postcode') && feature
          )[0].text
      } else {
        zipValue =
          typeof postcode === 'string' && /^\d{5}$/.test(postcode)
            ? postcode
            : 'N/A'
      }
      return {
        display: zipValue,
        value: lat + ',' + lng + '|' + zipValue
      }

    case 'address':
      // Handle address mask type, format address string from features or components
      let addressString
      if (featureAddress || featurePOI || featurePlace || featureNeighborhood) {
        addressString =
          featureAddress?.place_name ??
          featurePOI?.place_name ??
          featureNeighborhood?.place_name ??
          featurePlace?.place_name
      } else {
        const addressComponents = [
          housenumber?.trim(),
          road?.trim(),
          city?.trim(),
          state?.trim(),
          postcode?.trim(),
          county?.trim(),
          country?.trim()
        ]

        const validAddressComponents = addressComponents?.filter(
          component => component !== ''
        )

        if (validAddressComponents?.length > 0) {
          if (housenumber && road) {
            // If both house number and road are present, concatenate them without a comma
            addressString = `${housenumber} ${road}, ${validAddressComponents
              .slice(2)
              .join(', ')}`
          } else {
            // Otherwise, join the non-empty components with a comma
            addressString = validAddressComponents?.join(', ')
          }

          const googleMapsLink = `https://www.google.com/maps?q=${addressString?.replace(
            /\s+/g,
            '+'
          )}`
        }
      }
      return {
        display: (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {addressString}
            {/* <a
              href={googleMapsLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              View on Map
            </a> */}
          </div>
        ),
        value: lat + ',' + lng + '|' + addressString
      }
      break
    default:
      return { display: location, value: lat + ',' + lng + '|' + location }
  }
}
