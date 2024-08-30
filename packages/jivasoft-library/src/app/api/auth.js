import {
  LOGIN,
  FORGOT,
  VALIDATECODE,
  REQUIREMENTS,
  NEWPASSWORD,
  GETUSERCONTEXT
} from '.'
import cryptojs from 'crypto-js'
import { cookies } from 'app/data'
import axios from 'axios'

export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export async function loginGetSalt(username) {
  const apiResponse = await axios
    .post(LOGIN, {
      emailaddress: username,
      passwordsalt: ''
    })
    .then(response => {
      let salt = JSON.parse(response.data.payload).passwordsalt
      return {
        error: null,
        apiData: salt
      }
    })
    .catch(function (error) {
      console.log(LOGIN, error)
      cookies.remove('token')
      return {
        error: error.toJSON(),
        apiData: null
      }
    })

  return apiResponse
}
export async function authenticateHash(username, password, salt) {
  var hash = cryptojs.SHA256(password + salt)
  var hashStr = hash.toString()

  const apiResponse = await axios
    .put(LOGIN, {
      emailaddress: username,
      passwordhash: hashStr
    })
    .then(response => {
      console.log(response.data)
      // unusualSignInNotifcation(username);
      cookies.set('token', response.data.payload.token)
      //   dispatch({type:'LOGIN_SUCCESS'})
      return { error: null, apiData: response.data.payload.token }
    })
    .catch(error => {
      cookies.remove('token')
      console.log(error)
      return {
        error: isJsonString(error) ? error.toJSON() : error,
        apiData: null
      }
    })
  return apiResponse
}

export async function resetPassword(email) {
  const apiResponse = await axios
    .post(FORGOT, {
      emailaddress: email,
      passwordhash: '',
      passwordsalt: ''
    })

    .then(function (response) {
      return {
        error: null,
        apiData: true
      }
      // return(response.data.message)
    })

    .catch(function (error) {
      console.log(FORGOT, error.message)
      return {
        error: isJsonString(error) ? error.toJSON() : error,
        apiData: null
      }
    })
  return apiResponse
}
export async function validateCode(email, code) {
  console.log({
    emailaddress: email,
    passwordcode: parseInt(code)
  })
  const apiResponse = await axios
    .post(VALIDATECODE, {
      emailaddress: email,
      passwordcode: parseInt(code)
    })

    .then(function (response) {
      console.log(response.data)
      return {
        error: null,
        apiData: response.data
      }
    })

    .catch(function (error) {
      console.log(VALIDATECODE, error.message)

      return {
        error: isJsonString(error) ? error.toJSON() : error,
        apiData: null
      }
    })
  return apiResponse
}
export async function getPasswordRequirements(email, password) {
  return await axios
    .get(REQUIREMENTS)
    .then(function (response) {
      console.log(response)
      return response
    })
    .catch(function (error) {
      return error
    })
}
export async function setNew(email, paswordhash, passwordsalt) {
  console.log({
    email: email,
    passwordhash: paswordhash,
    passwordsalt: passwordsalt
  })
  const apiResponse = await axios
    .post(NEWPASSWORD, {
      emailaddress: email,
      passwordhash: paswordhash,
      passwordsalt: passwordsalt
    })
    .then(function (response) {
      console.log(response.data)
      return {
        error: null,
        apiData: response.data
      }
    })
    .catch(function (error) {
      return {
        error: isJsonString(error) ? error.toJSON() : error,
        apiData: null
      }
    })
  return apiResponse
}

export async function getUserContext(token) {
  var config = {
    method: 'get',
    url: GETUSERCONTEXT,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    }
  }
  const apiResponse = await axios(config)
    .then(response => {
      // console.log(response.data.payload)
      // setUserState(JSON.parse(response.data.payload));
      return {
        error: null,
        apiData: JSON.parse(response.data.payload).usercontext
      }
    })
    .catch(error => {
      //   setUserState()

      console.log(GETUSERCONTEXT, isJsonString(error))
      return {
        error: isJsonString(error) ? error.toJSON() : error,
        apiData: null
      }
    })
  return apiResponse
}

// export async function login (username, password) {
//   var response = {
//     error: null,
//     apiData: null
//   }

//   async function authenticateHash (salt) {
//     console.log('salt',salt)
//     var hash = cryptojs.SHA256(password + salt)
//     var hashStr = hash.toString()
//     axios
//       .put(LOGIN, {
//         emailaddress: username,
//         passwordhash: hashStr
//       })
//       .then(response => {
//         console.log(response.data.payload.token)
//         // unusualSignInNotifcation(username);
//         cookies.set('token', response.data.payload.token)

//         return response.data.payload.token
//       })
//       .catch(error => {
//         cookies.remove('token')
//         console.log(error)
//         return error
//       })
//   }

//   getSalt().then((salt)=>{
//     authenticateHash(salt).then((authedHash)=>{
//       return authedHash
//     })

//   })

// }
//   const url = LOGIN;
//   async function getSalt() {
//     return axios
//       .post(url, {
//         emailaddress: username,
//         //passwordhash: "",
//         passwordsalt: ""
//       })
//       .then(response => {
//         console.log("generating salt")

//         let salt = JSON.parse(response.data.payload).passwordsalt;
//         return authenticateHash(salt);
//       //	var hash = cryptojs.SHA256(password + salt);
//         //					await authenticateHash()

//         //setAuthState(null);
//       //	console.log(salt);
//       //	console.log(hash.toString());
//       })
//       .catch(function(error) {
//         setAuthState();
//         cookies.remove("token");
//         //callback();
//         console.log(error)

//         return error;
//         console.log(error);
//         jwt = null;
//         return authState;
//       });
//   }

//   function authenticateHash(salt) {
//     var hash = cryptojs.SHA256(password + salt);
//     var hashStr = hash.toString();
//     axios
//       .put(url, {
//         emailaddress: username,
//         passwordhash: hashStr,
//       })
//       .then(response => {
//         console.log("generating salt")
//         console.log(response.data.payload.token)

//         unusualSignInNotifcation(username);
//         setAuthState(response.data.payload.token);
//         cookies.set("token", response.data.payload.token);

//         return response;
//       })
//       .catch(error => {
//         setAuthState();
//         cookies.remove("token");
//         console.log(error);
//         callback();

//         return error;
//       });
//   }

//   let jwt;
//   const salt = await getSalt();
// }
