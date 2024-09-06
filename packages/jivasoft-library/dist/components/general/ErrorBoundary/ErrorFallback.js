"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorFallback = void 0;
var _ai = require("react-icons/ai");
var _bs = require("react-icons/bs");
var _fa = require("react-icons/fa");
const ErrorFallback = props => {
  const {
    title,
    message,
    button
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(0deg, rgba(0,21,44,1) 0%, rgba(0,0,0,1) 100%)',
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 'bold'
    }
  }, title ? title : 'Something went wrong'), button && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold'
    }
  }, button), message && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, "I keep seeing this error.")));
};
exports.ErrorFallback = ErrorFallback;