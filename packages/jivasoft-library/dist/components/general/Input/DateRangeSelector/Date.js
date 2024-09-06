"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemDate = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _ToggleSwitch = require("../ToggleSwitch");
var _general = require("../../../general");
var _Styles = require("./Styles");
var _data = require("app/data");
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
  return /*#__PURE__*/_react.default.createElement(_ToggleSwitch.ToggleSwitch, {
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
    selected: item.selected,
    fontRem: .1,
    fontVMin: 2
  }, item && /*#__PURE__*/_react.default.createElement(_.DisplayTime, {
    viewWidth: viewWidth
  }, masktype === 'datetime' && item.selected ? /*#__PURE__*/_react.default.createElement(_.EditIcon, {
    onClick: () => item.selected && setShow(true)
  }) : /*#__PURE__*/_react.default.createElement(_.EditOffIcon, null), /*#__PURE__*/_react.default.createElement("div", null, item.starttime), /*#__PURE__*/_react.default.createElement("div", null, viewWidth > 1200 && '-'), /*#__PURE__*/_react.default.createElement("div", null, item.endtime)), /*#__PURE__*/_react.default.createElement(_.DateObj, {
    selected: item.selected,
    onClick: () => handleIconClick(masktype),
    fontRem: .2,
    fontVMin: 2,
    item: item ? true : false,
    color: !item ? 'white' : null
  }, item.date.slice(8, 10)))), show && /*#__PURE__*/_react.default.createElement(_general.AnimatedDynamicModal, {
    type: 'bottom sheet',
    headerText: new Date(item.date).toLocaleDateString(),
    onClose: () => setShow(false),
    themeColor: themeState.currentTheme.bg0,
    fontColor: themeState.currentTheme.text,
    backgroundColor: themeState.currentTheme.bg0,
    dismissable: true
  }, /*#__PURE__*/_react.default.createElement(_.TimeBackground, null, /*#__PURE__*/_react.default.createElement(_.TimeDiv, null, /*#__PURE__*/_react.default.createElement(_Styles.DetailDateContainer, {
    selected: item.selected,
    fontRem: 1,
    fontVMin: 7
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: 'bold'
    }
  }, item ? item.starttime : null), /*#__PURE__*/_react.default.createElement("div", null, "to"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: 'bold'
    }
  }, item ? item.endtime : null))), /*#__PURE__*/_react.default.createElement(_.SelectDiv, {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement(_.TopSelectDiv, null, /*#__PURE__*/_react.default.createElement(ToggleComponent, {
    item: item,
    handleSelecting: handleSelecting,
    masktype: masktype
  })), /*#__PURE__*/_react.default.createElement(_.BottomSelectDiv, null, /*#__PURE__*/_react.default.createElement(_.LabelDiv, {
    height: 50,
    width: 80,
    color: 'red'
  }, /*#__PURE__*/_react.default.createElement(_.InputDiv, {
    height: 90,
    width: 40
  }, "Start Time  \xA0", /*#__PURE__*/_react.default.createElement(_.StyledTimePicker, {
    value: item.starttime || '',
    onChange: value => {
      handleTimeChange(item.index, 0, value);
      setDateHold(_objectSpread(_objectSpread({}, dateHold), {}, {
        starttime: value
      }));
    },
    format: timeFormat ? "HH:mm" : '',
    disableClock: true,
    disabled: !item.selected
  })), "to", /*#__PURE__*/_react.default.createElement(_.InputDiv, {
    height: 90,
    width: 40
  }, /*#__PURE__*/_react.default.createElement("div", null, "End Time  \xA0", warn ? /*#__PURE__*/_react.default.createElement(_.XIcon, null) : null), /*#__PURE__*/_react.default.createElement(_.StyledTimePicker, {
    value: item.endtime || '',
    onChange: value => {
      handleTimeChange(item.index, 1, value);
      setDateHold(_objectSpread(_objectSpread({}, dateHold), {}, {
        endtime: value
      }));
    },
    format: timeFormat ? "HH:mm" : '',
    disableClock: true,
    disabled: !item.selected,
    selected: item.selected
  }))))))));
};
exports.ItemDate = ItemDate;