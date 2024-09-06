"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveSettingsButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _data = require("app/data");
var _data2 = require("../../../data");
var _fa = require("react-icons/fa");
var _Tooltip = require("../../../../Tooltip");
var _helpers = require("app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SaveSettingsButton = props => {
  // const { themeColor, textColor } = props
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [listState, listDispatch] = (0, _data2.useList)();
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [configurationState, configurationDispatch] = (0, _data2.useConfiguration)();

  // console.log(listState)

  return /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderButton, {
    padding: '0px 0px 0px 10px'
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    content: 'Table Settings Saved!',
    direction: 'bottom',
    headerColor: (0, _helpers.LightenDarkenColor)(listState.themecolor, 20),
    themeColor: (0, _helpers.LightenDarkenColor)(listState.themecolor, 20),
    textColor: listState.textcolor,
    delay: 500,
    click: true
    // isMobile
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    onClick: e => {
      configurationState === null || configurationState === void 0 || configurationState.onSave(configurationState === null || configurationState === void 0 ? void 0 : configurationState.tableconfiguration);
      configurationDispatch({
        type: 'UPDATE_CONFIGURATION',
        currentList: listState
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledIconWrapper, null, /*#__PURE__*/_react.default.createElement(_fa.FaSave, {
    size: '17px'
  }), listState.tablewidth > 750 && /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, null, "Save Settings")))));
};
exports.SaveSettingsButton = SaveSettingsButton;