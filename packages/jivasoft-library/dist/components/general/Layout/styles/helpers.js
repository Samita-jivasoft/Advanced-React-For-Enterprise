"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArchetypeStyles = getArchetypeStyles;
exports.getCommonStatus = getCommonStatus;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _theme = require("app/theme");
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function getCommonStatus(props, themeState) {
  let {
    elements
  } = props;
  if (elements.length > 0 && elements !== null && elements !== void 0 && elements.every(element => {
    var _element$status, _element$masktype;
    return (element === null || element === void 0 || (_element$status = element.status) === null || _element$status === void 0 || (_element$status = _element$status.toLowerCase()) === null || _element$status === void 0 ? void 0 : _element$status.includes('error')) || (element === null || element === void 0 || (_element$masktype = element.masktype) === null || _element$masktype === void 0 ? void 0 : _element$masktype.includes('error'));
  })) {
    var _themeState$currentTh;
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: none;\n      .FORM * {\n        background: ", ";\n        color: white;\n        border-radius: 0px 0px ", " ", ";\n        max-width: none;\n      }\n    "])), themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.dangerColor, _theme.DEFAULT_UI_BORDERRADIUS, _theme.DEFAULT_UI_BORDERRADIUS);
  }
  if (elements.length > 0 && elements !== null && elements !== void 0 && elements.every(element => {
    var _element$status2, _element$masktype2;
    return (element === null || element === void 0 || (_element$status2 = element.status) === null || _element$status2 === void 0 ? void 0 : _element$status2.includes('warning')) || (element === null || element === void 0 || (_element$masktype2 = element.masktype) === null || _element$masktype2 === void 0 ? void 0 : _element$masktype2.includes('warning'));
  })) {
    var _themeState$currentTh2;
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      .FORM * {\n        background: ", ";\n        color: white;\n      }\n    "])), themeState === null || themeState === void 0 || (_themeState$currentTh2 = themeState.currentTheme) === null || _themeState$currentTh2 === void 0 ? void 0 : _themeState$currentTh2.warnColor);
  }
  return '';
}
function getArchetypeStyles(props, themeState) {
  let {
    layout,
    mode
  } = props;
  function getLayoutStyles() {
    var _themeState$currentTh3;
    return layout !== null && layout !== void 0 && layout.includes('message') ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          .FORM {\n            ", ";\n          }\n          z-index: ", ";\n          box-sizing: border-box;\n          position: relative;\n          overflow-y: auto;\n          display: flex;\n          flex-direction: column;\n          display: flex;\n          width: 100%;\n          background: ", ";\n\n          .element * {\n            display: flex;\n            align-items: center !important;\n            font-size: 12px !important;\n          }\n        "])), _ref => {
      var _theme$animation;
      let {
        theme
      } = _ref;
      return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.entrance) === null || _theme$animation === void 0 ? void 0 : _theme$animation.flash;
    }, _theme.MAX_Z_INDEX, themeState === null || themeState === void 0 || (_themeState$currentTh3 = themeState.currentTheme) === null || _themeState$currentTh3 === void 0 ? void 0 : _themeState$currentTh3.bga3) : '';
  }
  function getModeStyles() {
    return '';
    // return mode === 'modal'
    //   ? css `
    //     height:100%;
    //     width:100%;
    //     background:red;
    //     display:flex;
    //     position:fixed;
    //     bottom:0;
    //     right:0;
    //     flex-direction:column;
    //     align-items:center;
    //     justify-content:center;
    //     .FORM {
    //       position:absolute !important;
    //       height:500px;
    //       width:500px;
    //     }
    //   `
    //   : '';
  }
  const layoutStyles = getLayoutStyles();
  const modeStyles = getModeStyles();

  // Combining the styles
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), layoutStyles, modeStyles);
}