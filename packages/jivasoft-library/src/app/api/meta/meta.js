import axios from 'axios'

export async function putMeta (endpoint, token, data, signal) {
  var config = {
    method: 'put',
    url: endpoint,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    data: data,
    signal: signal
  }
  const apiResponse = await axios(config)
    .then(response => {
      const result = JSON.parse(response.data.payload).step[0]
      // setUserState(JSON.parse(response.data.payload));
      console.log(JSON.parse(response.data.payload).step[0])
      return {
        error: null,
        apiData: result
      }
    })
    .catch(error => {
      //   setUserState()

      console.log(endpoint + error)
      return {
        error: error.toJSON ? error.toJSON() : { message: error.toString() },
        apiData: null
      }
    })
  return apiResponse
}
