"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateHash = authenticateHash;
exports.getPasswordRequirements = getPasswordRequirements;
exports.getUserContext = getUserContext;
exports.isJsonString = isJsonString;
exports.loginGetSalt = loginGetSalt;
exports.resetPassword = resetPassword;
exports.setNew = setNew;
exports.validateCode = validateCode;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
var _ = require(".");
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _data = require("app/data");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
async function loginGetSalt(username) {
  const apiResponse = await _axios.default.post(_.LOGIN, {
    emailaddress: username,
    passwordsalt: ''
  }).then(response => {
    let salt = JSON.parse(response.data.payload).passwordsalt;
    return {
      error: null,
      apiData: salt
    };
  }).catch(function (error) {
    console.log(_.LOGIN, error);
    _data.cookies.remove('token');
    return {
      error: error.toJSON(),
      apiData: null
    };
  });
  return apiResponse;
}
async function authenticateHash(username, password, salt) {
  var hash = _cryptoJs.default.SHA256(password + salt);
  var hashStr = hash.toString();
  const apiResponse = await _axios.default.put(_.LOGIN, {
    emailaddress: username,
    passwordhash: hashStr
  }).then(response => {
    console.log(response.data);
    // unusualSignInNotifcation(username);
    _data.cookies.set('token', response.data.payload.token);
    //   dispatch({type:'LOGIN_SUCCESS'})
    return {
      error: null,
      apiData: response.data.payload.token
    };
  }).catch(error => {
    _data.cookies.remove('token');
    console.log(error);
    return {
      error: isJsonString(error) ? error.toJSON() : error,
      apiData: null
    };
  });
  return apiResponse;
}
async function resetPassword(email) {
  const apiResponse = await _axios.default.post(_.FORGOT, {
    emailaddress: email,
    passwordhash: '',
    passwordsalt: ''
  }).then(function (response) {
    return {
      error: null,
      apiData: true
    };
    // return(response.data.message)
  }).catch(function (error) {
    console.log(_.FORGOT, error.message);
    return {
      error: isJsonString(error) ? error.toJSON() : error,
      apiData: null
    };
  });
  return apiResponse;
}
async function validateCode(email, code) {
  console.log({
    emailaddress: email,
    passwordcode: parseInt(code)
  });
  const apiResponse = await _axios.default.post(_.VALIDATECODE, {
    emailaddress: email,
    passwordcode: parseInt(code)
  }).then(function (response) {
    console.log(response.data);
    return {
      error: null,
      apiData: response.data
    };
  }).catch(function (error) {
    console.log(_.VALIDATECODE, error.message);
    return {
      error: isJsonString(error) ? error.toJSON() : error,
      apiData: null
    };
  });
  return apiResponse;
}
async function getPasswordRequirements(email, password) {
  return await _axios.default.get(_.REQUIREMENTS).then(function (response) {
    console.log(response);
    return response;
  }).catch(function (error) {
    return error;
  });
}
async function setNew(email, paswordhash, passwordsalt) {
  console.log({
    email: email,
    passwordhash: paswordhash,
    passwordsalt: passwordsalt
  });
  const apiResponse = await _axios.default.post(_.NEWPASSWORD, {
    emailaddress: email,
    passwordhash: paswordhash,
    passwordsalt: passwordsalt
  }).then(function (response) {
    console.log(response.data);
    return {
      error: null,
      apiData: response.data
    };
  }).catch(function (error) {
    return {
      error: isJsonString(error) ? error.toJSON() : error,
      apiData: null
    };
  });
  return apiResponse;
}
async function getUserContext(token) {
  var config = {
    method: 'get',
    url: _.GETUSERCONTEXT,
    headers: {
      Authorization: "Bearer ".concat(token),
      'Content-type': 'application/json'
    }
  };
  const apiResponse = await (0, _axios.default)(config).then(response => {
    // console.log(response.data.payload)
    // setUserState(JSON.parse(response.data.payload));
    return {
      error: null,
      apiData: JSON.parse(response.data.payload).usercontext
    };
  }).catch(error => {
    //   setUserState()

    console.log(_.GETUSERCONTEXT, isJsonString(error));
    return {
      error: isJsonString(error) ? error.toJSON() : error,
      apiData: null
    };
  });
  return apiResponse;
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