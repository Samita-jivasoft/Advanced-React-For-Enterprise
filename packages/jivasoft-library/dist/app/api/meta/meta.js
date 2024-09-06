"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putMeta = putMeta;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function putMeta(endpoint, token, data, signal) {
  var config = {
    method: 'put',
    url: endpoint,
    headers: {
      Authorization: "Bearer ".concat(token),
      'Content-type': 'application/json'
    },
    data: data,
    signal: signal
  };
  const apiResponse = await (0, _axios.default)(config).then(response => {
    const result = JSON.parse(response.data.payload).step[0];
    // setUserState(JSON.parse(response.data.payload));
    console.log(JSON.parse(response.data.payload).step[0]);
    return {
      error: null,
      apiData: result
    };
  }).catch(error => {
    //   setUserState()

    console.log(endpoint + error);
    return {
      error: error.toJSON ? error.toJSON() : {
        message: error.toString()
      },
      apiData: null
    };
  });
  return apiResponse;
}