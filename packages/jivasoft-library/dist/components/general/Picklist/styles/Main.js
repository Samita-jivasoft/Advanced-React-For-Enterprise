"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItemsUneditable = exports.SelectedItemsAndInputContainer = exports.SelectedItemStyled = exports.SelectAllStyled = exports.SearchContainerStyled = exports.SearchContainerHeaderStyled = exports.RowStyled = exports.PickerElementInput = exports.MainInputContainer = exports.ListContainer = exports.FlagContainerStyled = exports.DropdownStyled = exports.Actions = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactWindow = require("react-window");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// const slideUp = keyframes`
// 0% {
//   transform: translateY(-10%);
//   opacity: 0;
// }
// 100% {
//   transform: translateX(0);
//   opacity: 1;
// }
// `
const SearchContainerHeaderStyled = exports.SearchContainerHeaderStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid red;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  transition: width 0.2s ease;\n  align-items: center;\n"])));
const SearchContainerStyled = exports.SearchContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  // border: 1px solid red !important;\n  font-size: 12px !important;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  outline: none;\n  transition: width 0.2s ease;\n\n  color: ", ";\n  border-bottom: ", "px solid\n    ", " !important;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
}, _ref2 => {
  let {
    expanded
  } = _ref2;
  return expanded ? 0 : 1;
}, _ref3 => {
  let {
    remainingRequirements,
    expanded,
    theme
  } = _ref3;
  return (remainingRequirements === null || remainingRequirements === void 0 ? void 0 : remainingRequirements.length) > 0 ? theme.dangerColor : theme.successColor;
});
const getPanelStyle = _ref4 => {
  let {
    theme,
    focus,
    disable
  } = _ref4;
  const panelStyle = theme.id === 'light' ? theme.panela2 : theme.panelb1;
  // console.log(value?.length > 0, options?.length > 0, canedit)
  return disable ? null : focus ? theme.neoEmbedPanela2 : panelStyle;
};
const MainInputContainer = exports.MainInputContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  }};\n\n  display: flex;\n  min-height: 34px;\n  transition: border-color 0.2s ease;\n  padding: 0px !important;\n\n  border-radius: ", " !important;\n  border: ", " !important;\n\n  ", "\n"])), _ref5 => {
  let {
    theme,
    focus,
    disable,
    selectedItems
  } = _ref5;
  // console.log(disable, focus)
  const panelStyle = getPanelStyle({
    theme,
    focus,
    disable
  });
  if (selectedItems && selectedItems.length > 0) {
    return '';
  } else {
    // Return panelStyle if it's not empty
    return panelStyle ? panelStyle : '';
  }
}, _ref6 => {
  let {
    focus,
    theme
  } = _ref6;
  return focus ? '4px 4px 4px 4px' : '4px 4px 0px 0px';
}, _ref7 => {
  let {
    focus,
    theme
  } = _ref7;
  return focus ? '1px solid ' + theme.infoShadeBase : 'none';
}, _ref8 => {
  let {
    theme,
    disable,
    value,
    selectedItems
  } = _ref8;
  // console.log(disable)
  if (disable) {
    return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: null;\n          cursor: no-drop;\n        }\n      "])), theme.disabledBackground, theme.disabledText);
  } else {
    return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        background: null;\n        color: ", ";\n        &:hover {\n          background: ", ";\n          cursor: pointer;\n        }\n      "])), theme.text, selectedItems && selectedItems.length > 0 ? 'null' : theme.bga2);
  }
});
const ListContainer = exports.ListContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  z-index: 500;\n  background: ", ";\n  box-sizing: border-box;\n  border-radius: 5px;\n"])), _ref9 => {
  let {
    theme
  } = _ref9;
  return theme.bga3;
});
const SelectedItemsAndInputContainer = exports.SelectedItemsAndInputContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n  max-height: 100px;\n  overflow: auto;\n"])));
const Actions = exports.Actions = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
const PickerElementInput = exports.PickerElementInput = _styledComponents.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 10px;\n  &:hover {\n    cursor: ", ";\n  }\n"])), _ref10 => {
  let {
    theme,
    disabled
  } = _ref10;
  return disabled ? 'no-drop' : 'pointer';
});
const SelectedItemsUneditable = exports.SelectedItemsUneditable = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  // align-items: center;\n  padding-left: ", " !important;\n"])), _ref11 => {
  let {
    isEdit
  } = _ref11;
  return isEdit ? '10px' : '0px';
});
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n ", ";\n  // border:1px solid red !important;\n  display: flex;\n  box-sizing: border-box;\n  padding: 6px 8px !important;\n  margin: 2px !important;\n  font-weight: bold;\n  color:", ";\n  align-items: center;\n  justify-content: center;\n\n  //this was already here\n  font-size: 10px;\n\n  box - sizing: border - box;\n    &: hover{\n    cursor: pointer;\n  }\n"])), _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.panela2;
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.text;
});
const DropdownStyled = exports.DropdownStyled = (0, _styledComponents.default)(_reactWindow.FixedSizeList)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", ";\n  ", "\n  height: ", ";\n  ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 100%;\n  color: ", ";\n"])), _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.panea2;
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.scrollable;
}, _ref16 => {
  let {
    height
  } = _ref16;
  return height;
}, _ref17 => {
  var _theme$animation;
  let {
    theme
  } = _ref17;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.entrance) === null || _theme$animation === void 0 ? void 0 : _theme$animation.slideDown;
}, _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.text;
});
const SelectAllStyled = exports.SelectAllStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: auto;\n"])));
const pulse = (0, _styledComponents.keyframes)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.25);\n  }\n  100% {\n    transform: scale(1);\n  }\n"])));
const pulseWithSpin = (0, _styledComponents.keyframes)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(1.5) rotate(0deg);\n  }\n  50% {\n    transform: scale(0.2) rotate(180deg);\n  }\n  100% {\n    transform: scale(1.5) rotate(360deg);\n  }\n"])));
const RowStyled = exports.RowStyled = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  // border: 1px solid red;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  position: relative;\n\n  background: ", ";\n  color: ", ";\n  font-style: ", ";\n\n  &: hover {\n    cursor: pointer;\n    background: ", ";\n    border-radius: 2px;\n  }\n\n  ", "\n"])), _ref19 => {
  let {
    theme,
    active
  } = _ref19;
  return active ? theme.bga1 : null;
}, _ref20 => {
  var _option$identifier;
  let {
    theme,
    option,
    identifier
  } = _ref20;
  return (_option$identifier = option[identifier]) !== null && _option$identifier !== void 0 && _option$identifier.includes('unselectable') ? theme.disabledText : theme.text;
}, _ref21 => {
  let {
    theme,
    option,
    newitem,
    identifier
  } = _ref21;
  return (option[identifier].includes('unselectable') || newitem) && 'italic';
}, _ref22 => {
  let {
    theme,
    option,
    identifier
  } = _ref22;
  return option[identifier].includes('unselectable') ? null : theme.bgb1;
}, _ref23 => {
  let {
    newitem
  } = _ref23;
  if (newitem) {
    return (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        ", ";\n      "])), _ref24 => {
      var _theme$animation2;
      let {
        theme
      } = _ref24;
      return theme === null || theme === void 0 || (_theme$animation2 = theme.animation) === null || _theme$animation2 === void 0 || (_theme$animation2 = _theme$animation2.emphasis) === null || _theme$animation2 === void 0 ? void 0 : _theme$animation2.pulse;
    });
  }
});
const fadeIn = (0, _styledComponents.keyframes)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
const FlagContainerStyled = exports.FlagContainerStyled = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  // width: 90%;\n  background-color: ", ";\n  ", ";\n  animation-delay: 0.4s; // Delay of 2 seconds\n  opacity: 0;\n"])), _ref25 => {
  let {
    theme
  } = _ref25;
  return theme.panel0;
}, _ref26 => {
  var _theme$animation3;
  let {
    theme
  } = _ref26;
  return theme === null || theme === void 0 || (_theme$animation3 = theme.animation) === null || _theme$animation3 === void 0 || (_theme$animation3 = _theme$animation3.entrance) === null || _theme$animation3 === void 0 ? void 0 : _theme$animation3.fadeIn;
});