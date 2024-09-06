"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateSelector = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _data = require("app/data");
var _components = require("@jivasoft/jivasoft-lib/dist/components");
var _AppContext = require("app/data/context/AppContext");
var _Display = require("components/Generic/Display");
var _helpers = require("@jivasoft/jivasoft-lib/dist/app/helpers");
var _ = require(".");
var _Generic = require("components/Generic");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //import { DynamicButtonV2 } from "@jivasoft/jivasoft-lib";
const DateSelector = _ref => {
  let {
    timeFormat,
    masktype,
    dateArray,
    setDateArray,
    defaultValue
  } = _ref;
  //State to store the dates and time input
  const [open, setOpen] = (0, _react.useState)(false);
  const [showRow, setShowRow] = (0, _react.useState)(false);

  //State to store the array of dates: dateArray to represent the data being sent back and tempArr used in functions and to show
  const [disable, setDisable] = (0, _react.useState)(true);
  const [dateTime, setDateTime] = (0, _react.useState)({
    startdate: null,
    enddate: null,
    starttime: null,
    endtime: null
  });
  const [dateWarning, setDateWarning] = (0, _react.useState)(false);
  const [timeWarning, setTimeWarning] = (0, _react.useState)(false);
  const [dtArray, setDtArray] = (0, _react.useState)([]);
  //const [masktype, setMaskType] = useState('')

  const [, appDispatch] = (0, _AppContext.useApp)();
  var timeout;
  (0, _react.useEffect)(() => {
    if (defaultValue.length > 0 && defaultValue !== undefined) {
      setDtArray([...defaultValue]);
    }
  }, []);
  (0, _react.useEffect)(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (dateTime.startdate && dateTime.enddate) {
        if (dateTime.startdate > dateTime.enddate) {
          //alert('Start Date is later than or equal to End Date, Not Allowed!')
          setDateWarning(true);
          return;
        } else {
          setDateWarning(false);
        }
      } else {
        setDateWarning(false);
      }

      // if (masktype !== "date") {
      //   if (dateTime.starttime && dateTime.endtime) {
      //     if (dateTime.starttime >= dateTime.endtime) {
      //       //alert('Start Time is later than or equal to End Time, Not Allowed!')
      //       setTimeWarning(true)
      //       return;
      //     }
      //     else {
      //       setTimeWarning(false)
      //     }
      //   }
      //   else {
      //     setTimeWarning(false)
      //   }
      // }

      //If all the input fields are filled populate the dateArray and tempArr
      if (masktype === "datetime" && dateTime.startdate && dateTime.enddate && dateTime.starttime && dateTime.endtime) {
        if (dateTime.startdate <= dateTime.enddate) {
          setDisable(false);
          const dateMove = (0, _helpers.formatDatePart)(dateTime.startdate);
          const startdate = (0, _helpers.formatDatePart)(dateTime.startdate, dateTime.starttime);
          const enddate = (0, _helpers.formatDatePart)(dateTime.startdate, dateTime.endtime);
          let strDate = dateTime.startdate;
          let objArr = [];
          let modObject = [];
          while (strDate <= dateTime.enddate) {
            strDate = dateMove.toISOString();
            var strTimeDate = startdate.toISOString();
            var endTimeDate = enddate.toISOString();
            objArr.push({
              date: strDate,
              startdate: strDate,
              enddate: strDate,
              starttime: strTimeDate,
              endtime: endTimeDate
            });
            // modObject.push({
            //   date: strDate.slice(0, 10),
            //   starttime: dateTime.starttime,
            //   endtime: dateTime.endtime,
            //   selected: true,
            //   day: day.getDay(),
            // });
            dateMove.setDate(dateMove.getDate() + 1);
            startdate.setDate(startdate.getDate() + 1);
            enddate.setDate(enddate.getDate() + 1);
          }
          setDtArray(objArr);
          setShowRow(true);
          //setTempArr(modObject);
        } else {
          setShowRow(false);
          setDisable(true);
          setDtArray([]);
          // setTempArr([])
        }
      } else if (masktype === "date" && dateTime.startdate && dateTime.enddate) {
        if (dateTime.startdate <= dateTime.enddate) {
          setDisable(false);
          const dateMove = (0, _helpers.formatDatePart)(dateTime.startdate);
          let strDate = dateTime.startdate;
          let objArr = [];
          let modObject = [];
          while (strDate <= dateTime.enddate) {
            strDate = dateMove.toISOString();
            const day = (0, _helpers.formatDatePart)(strDate);
            objArr.push({
              date: strDate,
              startdate: strDate,
              enddate: strDate
            });
            // modObject.push({
            //   date: strDate.slice(0, 10),
            //   selected: true,
            //   day: day.getDay(),
            // });
            dateMove.setDate(dateMove.getDate() + 1);
          }
          setDtArray(objArr);
          setShowRow(true);
          //setTempArr(modObject);
        } else {
          setDisable(true);
          setDtArray([]);
          setShowRow(false);
          //setTempArr([])
          //setDateWarning(false)
          setTimeWarning(false);
        }
      }
    }, 1000);
  }, [dateTime]);

  //if the user removes all the dates in the modal, show the picker and clear out the datetime values
  (0, _react.useEffect)(() => {
    if (dtArray.length === 0) {
      setShowRow(false);
      setDateTime({
        startdate: null,
        enddate: null,
        starttime: null,
        endtime: null
      });
    } else {
      setShowRow(true);
    }
    setDateArray([...dtArray]);
  }, [dtArray]);

  //formats the dates 
  //This function is now imported from jivasoft library
  // function formatDate(dateVar, timeVar) {
  //   var mL = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   var year = dateVar.slice(0, 4);
  //   var month = dateVar.slice(5, 7);
  //   month = parseInt(month) - 1;
  //   var day = dateVar.slice(8, 10);
  //   var dateString = "";

  //   if (timeVar) {
  //     dateString = "January " + 1 + ", " + year + " " + timeVar + ' UTC';
  //   } else {
  //     var dummyTime = "16:00:00";
  //     dateString = mL[month] + " " + day + ", " + year + " " + dummyTime + " UTC";
  //   }
  //   const dateObj = new Date(dateString);
  //   var gmtHours = -dateObj.getTimezoneOffset() / 60

  //   return dateObj;
  // }

  //handles the state that determines if the modal should be opened
  function handleOpenModal() {
    if ((defaultValue.length > 0 || dtArray.length > 0) && showRow) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  (0, _react.useEffect)(() => {
    appDispatch({
      type: "SET_MODAL",
      currentModal: open && /*#__PURE__*/React.createElement(_.DateRange
      //tempArr={tempArr}
      , {
        setOpen: setOpen,
        masktype: masktype,
        dtArray: dtArray
        //setTempArr={setTempArr}
        ,
        timeFormat: timeFormat,
        formatDate: _helpers.formatDatePart,
        defaultValue: defaultValue,
        setDtArray: setDtArray
      })
    });
  }, [open]);
  (0, _react.useEffect)(() => {
    appDispatch({
      type: "SET_MODAL",
      currentModal: open && /*#__PURE__*/React.createElement(_.DateRange
      // tempArr={tempArr}
      , {
        setOpen: setOpen,
        masktype: masktype,
        dtArray: dtArray,
        timeFormat: timeFormat
        // setTempArr={setTempArr}
        ,
        formatDate: _helpers.formatDatePart,
        defaultValue: defaultValue,
        setDtArray: setDtArray
      })
    });
  }, [open]);
  const [themeState] = (0, _data.useAppTheme)();
  return /*#__PURE__*/React.createElement(_.MainContainer, null, dtArray.length > 0 && showRow && /*#__PURE__*/React.createElement(_Display.DisplayDateList, {
    list: dtArray
  }), !showRow && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_.LabelDiv, {
    height: 45,
    width: 100
  }, /*#__PURE__*/React.createElement(_.InputDiv, {
    height: 90,
    width: 45
  }, /*#__PURE__*/React.createElement(_.NameDiv, null, "Start Date"), /*#__PURE__*/React.createElement(_.DateInput, {
    type: "date",
    id: "startingdate",
    value: dateTime.startdate || "",
    onChange: e => setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
      startdate: e.target.value
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4px 0 4px'
    }
  }, "to"), /*#__PURE__*/React.createElement(_.InputDiv, {
    height: 90,
    width: 45
  }, /*#__PURE__*/React.createElement(_.NameDiv, null, "End Date", dateWarning ? /*#__PURE__*/React.createElement(_.XIcon, null) : null), /*#__PURE__*/React.createElement(_.DateInput, {
    bg: dateWarning ? '#FF2E2E' : null,
    type: "date",
    id: "startingdate",
    value: dateTime.enddate || "",
    onChange: e => setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
      enddate: e.target.value
    }))
  }))), masktype !== "date" && /*#__PURE__*/React.createElement(_.LabelDiv, {
    height: 45,
    width: 100
  }, /*#__PURE__*/React.createElement(_.InputDiv, {
    height: 90,
    width: 45
  }, /*#__PURE__*/React.createElement(_Generic.TimePicker, {
    handleParent: value => {
      if (value) {
        let time = value.match(/\d\d:\d\d/);
        setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
          starttime: time[0]
        }));
      }
    },
    label: 'Start Time',
    canedit: 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4px 0 4px'
    }
  }, "to"), /*#__PURE__*/React.createElement(_.InputDiv, {
    height: 90,
    width: 45
  }, /*#__PURE__*/React.createElement(_Generic.TimePicker, {
    handleParent: value => {
      if (value) {
        let time = value.match(/\d\d:\d\d/);
        setDateTime(_objectSpread(_objectSpread({}, dateTime), {}, {
          endtime: time[0]
        }));
      }
    },
    label: 'End Time',
    canedit: 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    text: "Tap to Adjust",
    backgroundColor: themeState.currentTheme.bgb2,
    color: themeState.currentTheme.text,
    onClick: () => handleOpenModal(),
    disabled: defaultValue.length > 0 ? false : disable
  })));
};
exports.DateSelector = DateSelector;
DateSelector.defaultProps = {
  masktype: "date",
  dateArray: [],
  setDateArray: () => {
    console.log('I need a Set data function!');
  },
  timeFormat: true,
  defaultValue: []
};