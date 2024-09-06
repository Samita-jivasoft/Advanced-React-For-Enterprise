"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignSettings = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _md = require("react-icons/md");
var _DynamicButtonV = require("../../../../DynamicButtonV2");
var _data = require("../../../data");
var _data2 = require("app/data");
var _styles = require("./styles");
var _ColorPicker = require("../../../../ColorPicker");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DesignSettings = props => {
  const [themeState] = (0, _data2.useAppTheme)();
  const [listState, listDispatch] = (0, _data.useList)();
  const [listsState, listsDispatch] = (0, _data.useLists)();
  function getFontSize() {
    var x = listState.headerheight;
    switch (true) {
      case x < 35:
        return '10px';
      case x >= 35 && x < 56:
        return '13px';
      case x >= 56 && x < 150:
        return '17px';
      case x >= 150 && x < 300:
        return '21px';
      case x >= 300:
        return '30px';
      default:
        return '13px';
    }
  }
  const presetSizes = [{
    id: 'Default',
    icon: /*#__PURE__*/_react.default.createElement(_md.MdViewDay, {
      size: 20
    }),
    rowHeight: 75,
    headerHeight: 80,
    textSize: '17px'
  }, {
    id: 'Comfortable',
    icon: /*#__PURE__*/_react.default.createElement(_md.MdCalendarViewDay, {
      size: 20
    }),
    rowHeight: 50,
    headerHeight: 55,
    textSize: '13px'
  }, {
    id: 'Compact',
    icon: /*#__PURE__*/_react.default.createElement(_md.MdViewHeadline, {
      size: 20
    }),
    rowHeight: 25,
    headerHeight: 35,
    textSize: '13px'
  }];
  const handleRowIndicies = () => listDispatch({
    type: 'SET_SHOW_ROW_INDEX_COL',
    showrowindex: !listState.showrowindex
  });
  const handleVertivalGridlines = () => listDispatch({
    type: 'SET_SHOW_VERTICAL_GRIDLINES',
    showverticalgridlines: !listState.showverticalgridlines
  });
  const [selectedColor, setSelectedColor] = (0, _react.useState)(listState.themecolor);
  const [foreGroundColor, setForeGroundColor] = (0, _react.useState)(themeState.currentTheme.text);
  // console.log(arrayOfObjects)

  (0, _react.useEffect)(() => {
    if (selectedColor) {
      listDispatch({
        type: 'SET_THEME',
        currentThemeColor: selectedColor,
        currentThemeText: foreGroundColor
      });
    }
  }, [selectedColor, foreGroundColor]);
  return /*#__PURE__*/_react.default.createElement(_styles.Settings, {
    themeColor: listState.themecolor
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Appearance"), /*#__PURE__*/_react.default.createElement(_styles.Section, null, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "General:"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: listState.showrowindex,
    onChange: handleRowIndicies
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleRowIndicies
  }, "Row Indecies")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: listState.showverticalgridlines,
    onChange: handleVertivalGridlines
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleVertivalGridlines
  }, "Vertical Gridlines"))), /*#__PURE__*/_react.default.createElement(_styles.Section, null, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Density:"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex'
      // justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      marginRight: '30px'
      // paddingRight: '50px'
    }
  }, presetSizes.map((view, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: 'div_preset_sizes' + index,
    style: {
      // border: '1px solid red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '5px'
    }
  }, view.id, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    key: 'preset_sizes' + index,
    icon: view.icon
    // text={view.id}
    ,
    width: 'fit-content',
    onClick: () => {
      listDispatch({
        type: 'SET_ROW_HEIGHT',
        currentRowHeight: view.rowHeight
      });
      listDispatch({
        type: 'SET_HEADER_HEIGHT',
        currentHeaderHeight: view.headerHeight
      });
      listDispatch({
        type: 'SET_TEXT_SIZE',
        currentFontSize: view.textSize
      });
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      flexDirection: 'column',
      width: '50%'
      // justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '5px'
      // border: '1px solid red'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "Slide to change density"), /*#__PURE__*/_react.default.createElement("input", {
    id: "size",
    name: "Table Density",
    type: "range",
    min: 35,
    max: 300,
    step: 5,
    value: listState.headerheight,
    onChange: e => {
      listDispatch({
        type: 'SET_ROW_HEIGHT',
        currentRowHeight: parseInt(e.target.value - 10)
      });
      listDispatch({
        type: 'SET_HEADER_HEIGHT',
        currentHeaderHeight: parseInt(e.target.value)
      });
      listDispatch({
        type: 'SET_TEXT_SIZE',
        currentFontSize: getFontSize()
      });
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex'
      // justifyContent: 'center',
      // alignItems: 'center'
    }
  }, "Font Size:", /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    value: listState.textsize.split('px')[0],
    min: 8,
    max: 30,
    onChange: e => listDispatch({
      type: 'SET_TEXT_SIZE',
      currentFontSize: e.target.value + 'px'
    })
  }), "px")))), /*#__PURE__*/_react.default.createElement(_styles.Section, null, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Theme:"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      // padding: '0px 0px 10px 0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_ColorPicker.ColorPicker, {
    defaultValue: listState === null || listState === void 0 ? void 0 : listState.themecolor,
    getSelectedColor: state => setSelectedColor(state),
    getForeGroundColor: color => setForeGroundColor(color)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    text: 'Reset to Default'
    // icon={<FaPlus />}
    ,
    onClick: () => {
      listDispatch({
        type: 'CLEAR_THEME'
      });
    }
  })));
};
exports.DesignSettings = DesignSettings;