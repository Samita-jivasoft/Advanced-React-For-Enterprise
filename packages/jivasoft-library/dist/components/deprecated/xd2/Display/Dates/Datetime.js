"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayDatetime = void 0;
var _constants = require("app/constants");
var _styles = require("./styles");
const DisplayDatetime = _ref => {
  let {
    datetime
  } = _ref;
  const date = new Date(datetime.date).toUTCString();
  function padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  return /*#__PURE__*/React.createElement(_styles.StyledDisplayDate
  // selected={item.selected}
  , null, datetime.date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, _constants.months[new Date(date).getUTCMonth()].slice(0, 3).toUpperCase()), datetime.date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }
  }, new Date(date).getUTCDate()), datetime.date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(date).getUTCFullYear()), datetime.date && datetime.starttime && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 1,
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 5
    }
  }), datetime.starttime && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(datetime.starttime).getUTCHours(), ":", padTo2Digits(new Date(datetime.starttime).getUTCMinutes())), datetime.endtime && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  }, new Date(datetime.endtime).getUTCHours(), ":", padTo2Digits(new Date(datetime.endtime).getUTCMinutes())));
};
exports.DisplayDatetime = DisplayDatetime;