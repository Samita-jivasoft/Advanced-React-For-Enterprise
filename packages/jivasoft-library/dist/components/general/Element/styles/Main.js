"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedItemStyled = exports.RowStyled = exports.RequirementIconStyled = exports.RemainingRequirementsStyled = exports.RemainingRecsStyled = exports.PickerElementInput = exports.MasktypeRequirementsStyled = exports.InputContainerStyled = exports.ElementStyled = exports.ElementStatusValid = exports.ElementStatusStyled = exports.ElementStatusInvalid = exports.ElementHeaderStyled = exports.ElementHeaderAsterisk = exports.ElementFooterStyled = exports.ElementBodyStyled = exports.DropdownStyled = exports.CompletedRecsStyled = exports.CheckStyled = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _theme = require("app/theme");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactWindow = require("react-window");
var _ElementContext = require("../data/ElementContext");
var _helpers = require("../helpers");
var _react = require("react");
var _fa = require("react-icons/fa");
var _animation = require("../../../../app/theme/constants/animation");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function getMasktypeStyles(masktype) {
  if (masktype == 'error') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), _ref => {
      let {
        theme
      } = _ref;
      return theme.dangerColor;
    });
  } else if (masktype == 'warning') {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), _ref2 => {
      let {
        theme
      } = _ref2;
      return theme.warnColor;
    });
  } else {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "\n    "])), _ref3 => {
      let {
        theme
      } = _ref3;
      return theme.text;
    });
  }
}
const ElementStyled = exports.ElementStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: 650px;\n\n  position: relative;\n  display: ", ";\n  z-index: 100;\n\n  //TODO\n  width: 100%;\n  // width: ", ";\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  // background:", ";\n  // border: 1px solid orange;\n  padding: ", " !important;\n  margin: ", " !important;\n\n  border-radius: 4px;\n  // padding-bottom: 0px !important;\n  ", ";\n"])), _ref4 => {
  let {
    hidden
  } = _ref4;
  return hidden === 1 ? 'none' : 'flex';
}, _ref5 => {
  let {
    isEdit
  } = _ref5;
  return isEdit ? '100%' : null;
}, _ref6 => {
  let {
    canedit,
    isEdit,
    theme
  } = _ref6;
  return isEdit ? canedit == 1 ? theme.bga3 : null : null;
}, _ref7 => {
  let {
    theme,
    isEdit
  } = _ref7;
  return isEdit ? '5px' : '5px';
}, _ref8 => {
  let {
    theme,
    isEdit
  } = _ref8;
  return isEdit ? '10px' : '10px';
}, _ref9 => {
  let {
    css
  } = _ref9;
  return css;
});
const ElementBodyStyled = exports.ElementBodyStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // border: 1px solid pink;\n  // background:green;\n  display: flex;\n  flex-direction: row;\n  margin-top: 5px;\n  width: 100%;\n  // justify-content: space-around;\n  position: relative;\n  color: ", ";\n  ", ";\n"])), _ref10 => {
  let {
    masktype,
    status
  } = _ref10;
  return getMasktypeStyles(masktype || status);
}, _ref11 => {
  let {
    css
  } = _ref11;
  return css;
});
const CheckStyled = exports.CheckStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n"])), _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.successColor;
});
const PickerElementInput = exports.PickerElementInput = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  // color: isMatch;\n  width: 95%;\n  padding: 15;\n  font-weight: bold;\n  // background-color: themeState.currentTheme.bgb3\n"])));
const SelectedItemStyled = exports.SelectedItemStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  padding: ", ";\n  font-weight: bold;\n  color: ", ";\n  margin: 5px;\n  &: hover {\n    cursor: pointer;\n  }\n  border: 1px solid ", " !important;\n  background: ", ";\n"])), _theme.DEFAULT_UI_PADDING, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.successColor;
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.successColor;
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.panela1;
});
const RequirementIconStyled = exports.RequirementIconStyled = (0, _styledComponents.default)(_fa.FaExclamationCircle)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-right: 5px;\n"])), _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.dangerColor;
});
const RemainingRequirementsStyled = exports.RemainingRequirementsStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: ", ";\n  ", ";\n  opacity: 0;\n"])), _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.dangerColor;
}, _ref18 => {
  var _theme$animation;
  let {
    theme
  } = _ref18;
  return theme === null || theme === void 0 || (_theme$animation = theme.animation) === null || _theme$animation === void 0 || (_theme$animation = _theme$animation.entrance) === null || _theme$animation === void 0 ? void 0 : _theme$animation.textSlideIn;
});
const MasktypeRequirementsStyled = exports.MasktypeRequirementsStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  color: ", ";\n  opacity: 0.7;\n"])), _ref19 => {
  let {
    theme
  } = _ref19;
  return theme.text;
});
const ElementFooterStyled = exports.ElementFooterStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  // background:pink;\n  font-size: 0.7rem;\n  flex-direction: row;\n  justify-content: space-between;\n  box-sizing: border-box;\n"])));
const ElementHeaderAsterisk = exports.ElementHeaderAsterisk = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  animation: ", ";\n"])), _ref20 => {
  let {
    shake
  } = _ref20;
  return shake ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["2s ", " infinite"])), _animation.shakeAnimation) : null;
});
const ElementHeaderStyled = exports.ElementHeaderStyled = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  // background:orange;\n  // background:red;\n  display: flex;\n  opacity: 0.7;\n  font-weight: 550;\n  font-size: 0.82rem;\n  flex-direction: row;\n  align-items: flex-start;\n  position: relative;\n  div {\n    // position:absolute;\n    right: 100px;\n    font-size: 0.5rem;\n    padding-left: 5px;\n    color: ", ";\n  }\n  ", ";\n\n"])), _ref21 => {
  let {
    theme
  } = _ref21;
  return theme.dangerColor;
}, _ref22 => {
  let {
    css
  } = _ref22;
  return css;
});
const ElementStatusValid = exports.ElementStatusValid = (0, _styledComponents.default)(_fa.FaCheckCircle)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 10px;\n"])), _ref23 => {
  let {
    theme
  } = _ref23;
  return theme.successColor;
});
const ElementStatusInvalid = exports.ElementStatusInvalid = (0, _styledComponents.default)(_fa.FaCheckCircle)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), _ref24 => {
  let {
    theme
  } = _ref24;
  return theme.dangerColor;
});
const ElementStatusStyled = exports.ElementStatusStyled = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  // background:red;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n  display: flex;\n  padding: 10px;\n  color: ", ";\n"])), _ref25 => {
  let {
    valid,
    theme
  } = _ref25;
  return valid ? theme.successColor : theme.dangerColor;
});
const InputContainerStyled = exports.InputContainerStyled = _styledComponents.default.input(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  // width:100%;\n  flex: 100;\n  ", "\n  // border:1px solid ", " !important ;\n  background:", ";\n\n  &:hover {\n    background: ", ";\n\n    transition: background 0.3s ease;\n    transition-delay: 0.1.5s;\n    outline: none !important;\n  }\n  ", ";\n\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  color: ", ";\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  &:hover {\n    outline: none !important;\n  }\n\n  &:focus {\n    ", ";\n    // font-style:italic;\n    outline: 0px !important;\n  }\n"])), _ref26 => {
  let {
    theme
  } = _ref26;
  return theme.id === 'dark' ? theme.panelb2 : theme.panela3;
}, _ref27 => {
  let {
    theme
  } = _ref27;
  return theme.id === 'dark' ? theme.bga1 : theme.bga1;
}, _ref28 => {
  let {
    theme
  } = _ref28;
  return theme.id === 'dark' ? theme.bgb1 : 'white';
}, _ref29 => {
  let {
    theme
  } = _ref29;
  return theme.id === 'dark' ? theme.bgb1 : theme.bga2;
}, _ref30 => {
  let {
    theme
  } = _ref30;
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    remainingRequirements
  } = elementState;
  const [valid, setValid] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setValid((0, _helpers.isValid)(remainingRequirements));
  }, [remainingRequirements]);
  return !valid && (theme.id === 'dark' ? theme.neoEmbedPanelb3 : theme.neoEmbedPanela1);
}, props => props.isValid ? props.theme.successColor : props.theme.text, _ref31 => {
  let {
    theme
  } = _ref31;
  return theme.id === 'dark' ? theme.neoEmbedbgb2 : theme.neoEmbedPanela1;
});
const RemainingRecsStyled = exports.RemainingRecsStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  flex-direction: row;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0.5rem;\n\n  color: ", ";\n  overflow-y: wrap;\n"])), _ref32 => {
  let {
    theme
  } = _ref32;
  return theme.dangerColor;
});
const CompletedRecsStyled = exports.CompletedRecsStyled = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  flex-direction: row;\n  display: flex;\n  color: ", ";\n"])), _ref33 => {
  let {
    theme
  } = _ref33;
  return theme.successColor;
});
const DropdownStyled = exports.DropdownStyled = (0, _styledComponents.default)(_reactWindow.FixedSizeList)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  height: ", ";\n  padding: 20px;\n\n  color: ", ";\n  ", ";\n"])), _ref34 => {
  let {
    height
  } = _ref34;
  return height;
}, _ref35 => {
  let {
    theme
  } = _ref35;
  return theme.text;
}, _ref36 => {
  let {
    theme
  } = _ref36;
  return theme.panea2;
});
const RowStyled = exports.RowStyled = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  text-align: center;\n  background: ", ";\n\n  color: ", ";\n  &: hover {\n    cursor: pointer;\n    background: ", ";\n  }\n"])), _ref37 => {
  let {
    theme,
    active
  } = _ref37;
  return active ? theme.bga3 : null;
}, _ref38 => {
  let {
    theme
  } = _ref38;
  return theme.text;
}, _ref39 => {
  let {
    theme
  } = _ref39;
  return theme.bga3;
});