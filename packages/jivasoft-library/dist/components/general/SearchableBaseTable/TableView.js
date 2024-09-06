"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableView = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _DynamicSwitcher = require("../DynamicSwitcher");
var _data = require("./data");
var _styles = require("./styles");
var _data2 = require("app/data");
var _DynamicButtonV = require("../DynamicButtonV2");
var _theme = require("app/theme");
var _helpers = require("app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableView = props => {
  var _listType$find2;
  const {
    type,
    listType,
    setListType
  } = props;
  const [themeState] = (0, _data2.useAppTheme)();
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [configurationState] = (0, _data.useConfiguration)();
  const [currentThemeColor, setCurrentThemeColor] = (0, _react.useState)();
  const [currentTextColor, setCurrentTextColor] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    // console.log('configurationState', configurationState)
    setListType(type === 'tolist' ? listsState.tolists : listsState.fromlists);
    if (configurationState !== null && configurationState !== void 0 && configurationState.allowconfigurations) {
      var _listType$find, _findConfigWithSetCon, _findConfigWithSetCon2, _getBestContrastColor;
      function findListById(listId) {
        var _configurationState$t;
        return configurationState === null || configurationState === void 0 || (_configurationState$t = configurationState.tableconfiguration) === null || _configurationState$t === void 0 ? void 0 : _configurationState$t.find(list => (list === null || list === void 0 ? void 0 : list.listid) === listId);
      }
      function findConfigWithSetConfig(list, setConfigValue) {
        var _list$savedconfigs;
        return list === null || list === void 0 || (_list$savedconfigs = list.savedconfigs) === null || _list$savedconfigs === void 0 ? void 0 : _list$savedconfigs.find(config => (config === null || config === void 0 ? void 0 : config.setconfig) === setConfigValue);
      }
      const selectedList = findListById(listType === null || listType === void 0 || (_listType$find = listType.find(item => item.activetab === 1)) === null || _listType$find === void 0 ? void 0 : _listType$find.crudlistid);
      setCurrentThemeColor(((_findConfigWithSetCon = findConfigWithSetConfig(selectedList, true)) === null || _findConfigWithSetCon === void 0 ? void 0 : _findConfigWithSetCon.themecolor) || themeState.currentTheme.bg0);
      const normalizeColor = (0, _helpers.standardizeColor)((_findConfigWithSetCon2 = findConfigWithSetConfig(selectedList, true)) === null || _findConfigWithSetCon2 === void 0 ? void 0 : _findConfigWithSetCon2.themecolor);
      const textColor = (_getBestContrastColor = (0, _theme.getBestContrastColor)(normalizeColor !== null && normalizeColor !== void 0 ? normalizeColor : themeState.currentTheme.bg0, (0, _theme.generateColorShades)(normalizeColor !== null && normalizeColor !== void 0 ? normalizeColor : themeState.currentTheme.bg0, 6))) !== null && _getBestContrastColor !== void 0 ? _getBestContrastColor : 'black';
      // console.log('textColor', textColor)
      if (textColor != '#FFFFFF') setCurrentTextColor(textColor);else setCurrentTextColor('black');
    }
  }, [configurationState, listsState]);
  return listType.length > 1 && /*#__PURE__*/_react.default.createElement(_styles.TabsToolbar, null, (listsState === null || listsState === void 0 ? void 0 : listsState.layout) === 'tabs' && /*#__PURE__*/_react.default.createElement(_DynamicSwitcher.DynamicSwitcher, {
    backgroundColor: 'none',
    labelTextColor: currentTextColor,
    color: currentTextColor //TODO: set items individual colors in Dynamic Switcher
    ,
    selectedColor: currentThemeColor,
    width: 'fit-content',
    height: '100%',
    items: listType,
    itemKey: 'crudlistid',
    defaultValue: (_listType$find2 = listType.find(item => item.activetab === 1)) === null || _listType$find2 === void 0 ? void 0 : _listType$find2.crudlistid,
    handleParent: selected => listsDispatch({
      type: 'SET_ACTIVE_FROM_TAB',
      selected: selected
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      width: 'fit-content',
      position: 'absolute',
      // top: 0,
      right: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    text: 'Toggle Tabs',
    backgroundColor: themeState.currentTheme.bg0,
    onClick: e => {
      listsDispatch({
        type: 'TOGGLE_TABS',
        layout: listsState.layout == 'tabs' ? 'columns' : 'tabs'
      });
    }
    // disabled
  })));
};
exports.TableView = TableView;