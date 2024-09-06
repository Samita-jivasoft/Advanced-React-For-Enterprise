"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _MessageContext = require("../data/context/MessageContext");
var _helpers = require("app/helpers");
function useSetErrorMessage() {
  const [messageState, messageDispatch] = (0, _MessageContext.useMessages)();
  const setErrorMessage = error => {
    console.log('The error', error);
    let status = error === null || error === void 0 ? void 0 : error.status;
    let message = {
      type: 'errorBanner',
      formelements: [{
        label: 'Error',
        id: (0, _helpers.generateUUID)(),
        status: 'error',
        message: ''
      }],
      duration: null,
      id: (0, _helpers.generateUUID)()
    };
    switch (status) {
      case 406:
        message.formelements[0].message = "We couldn't find an account with that email address. Please check and Try again.";
        break;
      case 401:
        message.formelements[0].message = 'Incorrect Password. Try again with the correct password or Reset your password below. ';
        break;
      default:
        message.formelements[0].message = "We couldn't log you in right now. Please try again later.";
        break;
    }
    messageDispatch({
      type: 'ADD_MESSAGE',
      message
    });
  };
  return setErrorMessage;
}
var _default = exports.default = useSetErrorMessage;