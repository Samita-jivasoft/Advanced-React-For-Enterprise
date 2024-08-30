import axios from "axios"
import { META, METAGETSEARCHCONFIG, METASAVESEARCHCONFIG, METAUNAUTH } from "./endpoints"


export async function putMeta(token, data,signal) {
  var config = {
    method: 'put',
    url: token ? META:METAUNAUTH,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    data: data,
    signal:signal
  }
  console.log('submitted data:', data)
  console.log('response pending...')

  const apiResponse = await axios(config)
    .then(response => {
      try {
        const result = JSON.parse(response.data.payload).step[0]
        // setUserState(JSON.parse(response.data.payload));
        console.log('received: ', result)

        return {
          error: null,
          apiData: result
        }
      } catch {

        try {
          let message = JSON.parse(response.data.message);
          console.log('received: ', message)

          return {
            message: message,
            error: null,
            apiData: null
          }
        } catch {
          return {
            message: null,
            error: {message:'We encountered an Error...'},
            apiData: null
          }
        }

      }


    })
    .catch(error => {
      //   setUserState()

      if (axios.isCancel(error)) {
        console.log('Request was cancelled');
        return {
          message:null,
          cancelled: true, // Indicate that request was cancelled
          error: true,
          apiData: null
        };
      } else {
        console.log(META + error)
        return {
          error: error.toJSON ? error.toJSON() : { message: error.toString() },
          apiData: null
        }
      }
     
    })
  return apiResponse
}

export async function getMetaConfig(token, data,feconfig) {
  var config = {
    method: 'put',
    url: METAGETSEARCHCONFIG,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    data: data
  }

  const apiResponse = await axios(config)
    .then(response => {
      const result = response.data.payload

      return result
    })
    .catch(error => {
      console.log(META + error)
      return {
        error: error.toJSON ? error.toJSON() : { message: error.toString() },
        apiData: null
      }
    })
  return apiResponse
}

export async function saveMetaConfig(token, data) {
  var config = {
    method: 'post',
    url: METASAVESEARCHCONFIG,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    data: data // {workflowid:'',stepid:'', :'', value starttime:'',endtime:''}
  }
  const apiResponse = await axios(config)
    .then(response => {
      const result = response.data.payload
      console.log('save config result: ', result)

      return {
        error: null,
        apiData: result
      }
    })
    .catch(error => {
      //   setUserState()

      console.log(META + error)
      return {
        error: error.toJSON ? error.toJSON() : { message: error.toString() },
        apiData: null
      }
    })
  return apiResponse
}