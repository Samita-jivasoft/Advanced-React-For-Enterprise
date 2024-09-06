"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemDate = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _general = require("../../../../../general");
var _Styles = require("./Styles");
var _data = require("app/data");
var _Datetimepicker = require("./Styles/Datetimepicker");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ToggleComponent = _ref => {
  let {
    item,
    handleSelecting,
    masktype
  } = _ref;
  const [checked, setChecked] = (0, _react.useState)(item.selected);
  (0, _react.useEffect)(() => {
    if (item.selected !== checked) {
      handleSelecting(item.index, masktype);
    }
  }, [checked]);
  return /*#__PURE__*/_react.default.createElement(_general.ToggleSwitch, {
    id: 'switch',
    label: "Select this Date" //optional
    ,
    checked: checked //required
    ,
    onChange: setChecked //required
    // optionLabels={['long yes', 'long no']} //optional
    //  optionLabels={['YES', 'NO']}
    ,
    onColor: '#060' //optional
    ,
    offColor: '#bbb' //optional
    // color={'#fff'} //optional
    // small //optional
    // disabled //optional
  });
};
const ItemDate = _ref2 => {
  let {
    item,
    tempArr,
    dateRows,
    masktype,
    timeFormat,
    handleSelecting,
    handleTimeChange
  } = _ref2;
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const [show, setShow] = (0, _react.useState)(false);
  const [mName, setMName] = (0, _react.useState)('');
  const [warn, setWarn] = (0, _react.useState)(false);
  const [dateHold, setDateHold] = (0, _react.useState)({
    starttime: item.starttime,
    endtime: item.endtime
  });
  var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let mNum;
  function handleIconClick(masktype) {
    handleSelecting(item.index, masktype);
  }
  (0, _react.useEffect)(() => {}, [timeFormat]);

  //determines if month name should be shown on top of the date
  (0, _react.useEffect)(() => {
    if (item) {
      const day = new Date(item.date);
      var dateNum = parseInt(item.date.slice(8, 10));
      if (item.index === 0) {
        mNum = parseInt(item.date.slice(5, 7));
        setMName(mL[mNum - 1]);
      } else if (dateNum === 1 && item.index !== 0) {
        mNum = parseInt(item.date.slice(5, 7));
        setMName(mL[mNum - 1]);
      } else {
        setMName('');
      }
    }
  }, [dateRows]);
  (0, _react.useEffect)(() => {
    if (dateHold.starttime >= dateHold.endtime) {
      setWarn(true);
    } else {
      setWarn(false);
    }
  }, [dateHold]);
  const [themeState] = (0, _data.useAppTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_.HeaderMonthDiv, null, mName ? /*#__PURE__*/_react.default.createElement(_.CloseIconDiv, {
    justify: 'center',
    height: 50,
    width: 90,
    fontRem: 0.15,
    bg: '#B8B8B8'
  }, /*#__PURE__*/_react.default.createElement("div", null, mName)) : /*#__PURE__*/_react.default.createElement(_.CloseIconDiv, null, /*#__PURE__*/_react.default.createElement(_.BorderDiv, null))), /*#__PURE__*/_react.default.createElement(_.DateContainer, {
    onClick: () => handleIconClick(masktype),
    selected: item.selected,
    fontRem: .1,
    fontVMin: 2
  }, masktype === 'datetime' && item.selected ? /*#__PURE__*/_react.default.createElement(_.EditIcon, {
    onClick: event => {
      item.selected && setShow(true);
      event.stopPropagation();
    },
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }) : /*#__PURE__*/_react.default.createElement(_.EditOffIcon, {
    onClick: event => {
      item.selected && setShow(true);
      event.stopPropagation();
    },
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }), /*#__PURE__*/_react.default.createElement(_.DateObj, {
    fontRem: .2,
    fontVMin: 2,
    item: item ? true : false,
    color: !item ? 'white' : null
  }, item.date.slice(8, 10), item && /*#__PURE__*/_react.default.createElement(_.DisplayTime, {
    viewWidth: viewWidth
  }, /*#__PURE__*/_react.default.createElement("div", null, item.starttime), /*#__PURE__*/_react.default.createElement("div", null, item.endtime))))), show && /*#__PURE__*/_react.default.createElement(_general.AnimatedDynamicModal, {
    type: 'bottom sheet',
    headerText: new Date(item.date).toLocaleDateString(),
    onClose: () => setShow(false),
    themeColor: themeState.currentTheme.bg0,
    fontColor: themeState.currentTheme.text,
    backgroundColor: themeState.currentTheme.bg0,
    dismissable: true
  }, /*#__PURE__*/_react.default.createElement(_.TimeBackground, null, /*#__PURE__*/_react.default.createElement(_.SelectDiv, {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: .7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "START TIME"), /*#__PURE__*/_react.default.createElement(_Datetimepicker.DatetimePickerStyled, null, /*#__PURE__*/_react.default.createElement(_general.TimePicker, {
    twelvehr: true,
    handleParent: value => {
      if (value) {
        let time = value.match(/\d\d:\d\d/);
        handleTimeChange(item.index, 0, time[0]);
        setDateHold(_objectSpread(_objectSpread({}, dateHold), {}, {
          starttime: time[0]
        }));
        // handleTimeChange(item.index, 0, time[0]); setDateHold({...dateHold,starttime:time[0]})}
        // setTimeVal({ ...timeVal, endtime: time[0] })
      }
    },
    canedit: 1
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 10
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: .7,
      fontWeight: 550,
      fontSize: '.66rem'
    }
  }, "END TIME"), /*#__PURE__*/_react.default.createElement(_Datetimepicker.DatetimePickerStyled, null, /*#__PURE__*/_react.default.createElement(_general.TimePicker, {
    twelvehr: true,
    handleParent: value => {
      if (value) {
        let time = value.match(/\d\d:\d\d/);
        handleTimeChange(item.index, 1, time[0]);
        setDateHold(_objectSpread(_objectSpread({}, dateHold), {}, {
          endtime: time[0]
        }));
        // handleTimeChange(item.index, 0, time[0]); setDateHold({...dateHold,starttime:time[0]})}
        // setTimeVal({ ...timeVal, endtime: time[0] })
      }
    },
    canedit: 1
  })))))));
};
exports.ItemDate = ItemDate;