"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _styles = require("./styles");
var _handlers = require("./handlers");
var _RecentlySelected = require("./RecentlySelected");
var _helpers = require("../../../app/helpers");
var _theme = require("app/theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ColorPicker = props => {
  const {
    defaultValue,
    getSelectedColor,
    getForeGroundColor,
    recentColors,
    getRecentlySelected
  } = props;
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [themeState] = (0, _data.useAppTheme)();
  const [themeColors, setThemeColors] = (0, _react.useState)();
  const [selectedColor, setSelectedColor] = (0, _react.useState)(defaultValue ? (0, _helpers.standardizeColor)(defaultValue) : '#FFFFFF');
  const [colorVariations, setColorVariations] = (0, _react.useState)(12);

  // console.log(recentlySelected)
  const [textColors, setTextColors] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    var _arrayOfObjects$filte;
    const arrayOfObjects = (0, _theme.themeConstants)();
    // console.log(arrayOfObjects)
    setThemeColors(arrayOfObjects.filter(obj => obj.colors)[0].colors);
    setTextColors((_arrayOfObjects$filte = arrayOfObjects.filter(obj => obj.colors)[0].colors) === null || _arrayOfObjects$filte === void 0 ? void 0 : _arrayOfObjects$filte.map(color => (color.name.toLowerCase().includes('light_text') || color.name.toLowerCase().includes('dark_text')) && color.value).filter(n => n));
  }, []);
  // console.log(textColors)

  const colorModes = ['base', 'text', 'light', 'dark'];
  const filterColorsByMode = mode => {
    const lowerCaseMode = mode.toLowerCase();
    return themeColors === null || themeColors === void 0 ? void 0 : themeColors.filter(color => {
      const lowerCaseName = color.name.toLowerCase();
      switch (lowerCaseMode) {
        case 'base':
          return !lowerCaseName.includes('light') && !lowerCaseName.includes('dark');
        case 'light':
        case 'dark':
          return lowerCaseName.includes(lowerCaseMode);
        case 'text':
          // console.log(lowerCaseName)
          return lowerCaseName.includes('light_' + lowerCaseMode) || lowerCaseName.includes('dark_' + lowerCaseMode);
        default:
          return false;
      }
    });
  };

  //TODO: create other functions and set them here
  const [switcher, setSwitcher] = (0, _react.useState)('');
  function handleSwitcher(selected) {
    // console.log(selected)
    setSwitcher(selected);
  }
  const [bestForegroundColor, setBestForegroundColor] = (0, _react.useState)(themeState.currentTheme.text);
  (0, _react.useEffect)(() => {
    // console.log(selectedColor)

    //set parent states
    getSelectedColor && getSelectedColor(selectedColor);
    const bestforeground = (0, _theme.getBestContrastColor)(selectedColor, textColors);
    setBestForegroundColor(bestforeground);
    getForeGroundColor && getForeGroundColor(bestforeground);
  }, [selectedColor]);
  const [recentlySelected, setRecentlySelected] = (0, _react.useState)((recentColors === null || recentColors === void 0 ? void 0 : recentColors.length) > 0 ? recentColors : [...Array(8)]);
  (0, _react.useEffect)(() => {
    getRecentlySelected && getRecentlySelected(recentlySelected);
  }, [recentlySelected]);

  // Adjust colorVariations based on the number of ColorContainers
  const colorGroupRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    var _colorGroupRef$curren, _colorGroupRef$curren2;
    // console.log(colorVariations)
    const colorGroupWidth = (_colorGroupRef$curren = colorGroupRef === null || colorGroupRef === void 0 || (_colorGroupRef$curren2 = colorGroupRef.current) === null || _colorGroupRef$curren2 === void 0 ? void 0 : _colorGroupRef$curren2.clientWidth) !== null && _colorGroupRef$curren !== void 0 ? _colorGroupRef$curren : 200;
    const colorContainerWidth = 24;
    const maxColorContainers = Math.floor(colorGroupWidth / colorContainerWidth);
    setColorVariations(Math.floor(maxColorContainers)); // Assuming 6 shades per ColorRange
  }, [viewWidth, viewHeight]);
  return /*#__PURE__*/_react.default.createElement(_styles.ColorPickerContainer, {
    selectedColor: selectedColor
  }, /*#__PURE__*/_react.default.createElement(_styles.ColorPreview, {
    background: selectedColor,
    color: bestForegroundColor
  }, selectedColor.toUpperCase()), /*#__PURE__*/_react.default.createElement(_styles.ColorsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ColorGroupContainer, null, switcher.id === 'themes' && 'site colors'.toUpperCase(), switcher.id === 'themes' && (colorModes === null || colorModes === void 0 ? void 0 : colorModes.map((mode, index) => {
    var _filterColorsByMode;
    return themeState.currentTheme.id == 'light' && mode !== 'dark' && /*#__PURE__*/_react.default.createElement(_styles.ColorGroup, {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    }, (_filterColorsByMode = filterColorsByMode(mode)) === null || _filterColorsByMode === void 0 ? void 0 : _filterColorsByMode.map(color => /*#__PURE__*/_react.default.createElement(_styles.ColorContainer, {
      color: color.value,
      key: 'theme_' + color.name,
      onClick: () => (0, _handlers.handleColorSelection)(color.value, setRecentlySelected, setSelectedColor)
    }))));
  })), /*#__PURE__*/_react.default.createElement(_styles.ColorGroup, {
    ref: colorGroupRef,
    style: {
      justifyContent: 'space-between',
      flexWrap: 'nowrap'
    }
  }, (0, _theme.generateHSLColorVariations)(colorVariations).map((color, index) => /*#__PURE__*/_react.default.createElement(_styles.ColorRange, {
    key: index + '_' + color
  }, (0, _theme.generateColorShades)(color, 6).map(shade => /*#__PURE__*/_react.default.createElement(_styles.ColorContainer, {
    color: shade,
    key: 'theme_' + shade,
    onClick: () => (0, _handlers.handleColorSelection)(shade, setRecentlySelected, setSelectedColor)
  })))))), /*#__PURE__*/_react.default.createElement(_RecentlySelected.RecentlySelected, {
    selectedColor: selectedColor,
    setSelectedColor: setSelectedColor,
    recentlySelected: recentlySelected,
    setRecentlySelected: setRecentlySelected
  })));
};
exports.ColorPicker = ColorPicker;