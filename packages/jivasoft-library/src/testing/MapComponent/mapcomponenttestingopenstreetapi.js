export const handleMapAPISearch = async (search, setItems) => {
  console.log('search', search)
  const position = {
    lat: 29.5412075,
    lng: -98.553174
  } // Example coordinates
  // const url = `https://overpass-api.de/api/interpreter?data=node(52.520008,13.404954);out;`
  // const url `https://nominatim.openstreetmap.org/search?format=json&q=New+York,New+York,USA&bounded=10`
  // const url = `https://nominatim.openstreetmap.org/ui/details.html?osmtype=W&osmid=688098691&class=building`

  //this link returns good
  // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}&q=${search}`
  // const url = `https://nominatim.openstreetmap.org/reverse?format=json&q=${search},San+Antonio,Texas`
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&q=Walmart,San+Antonio,Texas`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log('data', data)
    setItems(data)
  } catch (error) {
    console.error('Error fetching data from API:', error)
  }
}
