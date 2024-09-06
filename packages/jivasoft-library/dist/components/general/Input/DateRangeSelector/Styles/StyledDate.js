"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopSelectDiv = exports.TimeDiv = exports.TimeBackground = exports.SelectLabel = exports.SelectDiv = exports.SelectButton = exports.HeaderMonthDiv = exports.EditOffIcon = exports.EditIcon = exports.DisplayTime = exports.DetailDateObj = exports.DetailDateContainer = exports.DateWrapper = exports.DateObj = exports.DateContainer = exports.CloseIconDiv = exports.CloseIcon = exports.ButtonDiv = exports.BottomSelectDiv = exports.BorderDiv = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _md = require("react-icons/md");
var _fa = require("react-icons/fa");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const DateWrapper = exports.DateWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  //height: 60%;\n  width: 100%;\n  margin: 0;\n  //padding: 10px 0 10px 0;\n  //border: solid 2px black;\n  //background: palevioletred;\n  font-size: 0;\n"])));
const HeaderMonthDiv = exports.HeaderMonthDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  //background: blue;\n  height: 10%;\n  min-height: 20px;\n  font-weight: bold;\n  min-width: 100%;\n  color: ", ";\n\n"])), _ref => {
  let {
    theme
  } = _ref;
  return theme.text;
});
const CloseIconDiv = exports.CloseIconDiv = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  //height: ", ";\n  //min-width: ", ";\n  width:100%;\n  // margin-top:10px;\n  // margin-bottom:10px;\n\n  border-radius:5px;\n  font-size: calc(", " + 1.5vmin);\n  color:  ", ";\n  background-color: ", ";\n"])), props => props.justify, props => props.height + '%', props => props.width + '%', props => props.fontRem + 'rem', _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}, _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.materialb2;
});
const BorderDiv = exports.BorderDiv = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nbackground-color: ", ";\n  min-height:5px;\n  min-width: 100%;\n"])), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.materialb1;
});
const DateContainer = exports.DateContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  //margin-top: 10%;\n  height: 100%;\n  width: 100%;  \n  color:", ";\n  font-weight: bold;\n  font-size: calc(", " + ", ");\n  //background: orange;\n"])), _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
}, props => props.fontRem + 'rem', props => props.fontVMin + 'vmin');
const DetailDateContainer = exports.DetailDateContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius:30px;\n  @media (max-width: 600px) {\n    border-radius:100px;\n\n  }\n  border:1px solid ", ";\n\n  align-items: center;\n  justify-content: center;\n  border-radius:100px !important;\n\n  //color:", ";\n  color: ", ";\n  height: calc(1rem + 20vmin);\n  width: calc(1rem + 20vmin);\n  ", ";\n\n"])), _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.overlayNeutral;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text;
}, _ref8 => {
  let {
    selected
  } = _ref8;
  return selected ? _ref9 => {
    let {
      theme
    } = _ref9;
    return theme.text;
  } : _ref10 => {
    let {
      theme
    } = _ref10;
    return theme.textDarkest;
  };
}, _ref11 => {
  let {
    selected
  } = _ref11;
  return selected ? _ref12 => {
    let {
      theme
    } = _ref12;
    return theme.panela1;
  } : _ref13 => {
    let {
      theme
    } = _ref13;
    return theme.neoEmbedPanelb1;
  };
});
const DateObj = exports.DateObj = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  height: calc(1rem + 7vmin);\n  width: calc(1rem + 7vmin);\n  background:", ";\n  //background: lightgreen;\n font-size: calc(", " + ", ");\nborder-radius:100px;\n\n\nborder:1px solid ", ";\n@media (max-width: 600px) {\n  border-radius:100px;\n\n}\n  //color: ", ";\n  margin-top: auto;\n\n  &: hover{\n    cursor: pointer;\n  }\n"])), _ref14 => {
  let {
    selected
  } = _ref14;
  return selected ? _ref15 => {
    let {
      theme
    } = _ref15;
    return theme.panela1;
  } : _ref16 => {
    let {
      theme
    } = _ref16;
    return theme.neoEmbedPanelb1;
  };
}, props => props.fontRem + 'rem', props => props.fontVMin + 'vmin', _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.overlayNeutral;
}, _ref18 => {
  let {
    selected
  } = _ref18;
  return selected ? _ref19 => {
    let {
      theme
    } = _ref19;
    return theme.primaryTintBase;
  } : _ref20 => {
    let {
      theme
    } = _ref20;
    return theme.text;
  };
});
const DetailDateObj = exports.DetailDateObj = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  // height: calc(1rem + 7vmin);\n  // width: calc(1rem + 7vmin);\n  background-color: ", ";\n\n  //background: lightgreen;\n //font-size: calc(", " + ", ");\nborder-radius:5px;\n@media (max-width: 600px) {\n  border-radius:100px;\n\n}\n  //color: ", ";\n  margin-top: auto;\n\n  &: hover{\n    cursor: pointer;\n  }\n"])), _ref21 => {
  let {
    selected
  } = _ref21;
  return selected ? _ref22 => {
    let {
      theme
    } = _ref22;
    return theme.overlayBrightest;
  } : _ref23 => {
    let {
      theme
    } = _ref23;
    return theme.overlayDim;
  };
}, props => props.fontRem + 'rem', props => props.fontVMin + 'vmin', _ref24 => {
  let {
    selected
  } = _ref24;
  return selected ? _ref25 => {
    let {
      theme
    } = _ref25;
    return theme.primaryTintBase;
  } : _ref26 => {
    let {
      theme
    } = _ref26;
    return theme.text;
  };
});
const TimeBackground = exports.TimeBackground = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  // position: absolute;\n  // top: 0;\n  // left: 0;\n  // background: rgb(255,255,255,0);\n  // backdrop-filter: blur(15px);\n  // ::-webkit-backdrop-filter: blue(15px);\n  // &: hover{\n  //   cursor: pointer;\n  // }\n"])));
const CloseIcon = exports.CloseIcon = (0, _styledComponents.default)(_fa.FaArrowLeft)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-left: 15px;\n  transition: 0.5s;\n  margin:10px;\n // font-size: ", ";\n &: hover{\n   background: red;\n }\n"])), props => props.size);
const TimeDiv = exports.TimeDiv = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  //background: red;\n"])));
const SelectDiv = exports.SelectDiv = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 50%;\n  width: 100%;\n // background: aliceblue;\n//  background-color: ", ";\n color: ", ";\n\n  &: hover{\n    cursor: default;\n  }\n"])), _ref27 => {
  let {
    theme
  } = _ref27;
  return theme.overlayDim;
}, _ref28 => {
  let {
    theme
  } = _ref28;
  return theme.text;
});
const TopSelectDiv = exports.TopSelectDiv = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  // height: 50%;\n  padding:10px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  // padding: 0 10% 0 10%;\n  //background: #68BBE3;\n"])));
const BottomSelectDiv = exports.BottomSelectDiv = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  height: 50%;\n  width: 100%;\n  //max-width:500px;\n  align-items: center;\n  justify-content: center;\n  //background: lightgreen;\n  @media (max-width: 600px) {\n    //flex-direction: column;\n    align-items: flex-start;\n    overflow: auto;\n  }\n"])));
const SelectLabel = exports.SelectLabel = _styledComponents.default.label(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(1.5rem + 2vmin);\n  font-weight: bold;\n  background: red;\n  height: 50%;\n "])));
const ButtonDiv = exports.ButtonDiv = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  width: 100%;\n  //background: orange;\n "])));
const SelectButton = exports.SelectButton = _styledComponents.default.button(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 30%;\n  font-size: calc(.5rem + 3vmin);\n  border: none;\n  border-radius: 8px;\n  background: ", ";\n  color: ", ";\n  transition: 0.5s;\n\n  &: hover{\n    cursor: pointer;\n    background: #055C9D;\n  }\n "])), _ref29 => {
  let {
    selected
  } = _ref29;
  return selected ? '#055C9D' : 'white';
}, _ref30 => {
  let {
    selected
  } = _ref30;
  return selected ? 'white' : 'black';
});
const DisplayTime = exports.DisplayTime = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex; \n  flex-direction: ", ";\n  align-items: center;\n  justify-Content: center;\n  //background: purple;\n  font-size: calc(.25rem + 1vmin);\n  padding: ", "; \n  margin: ", ";\n  //padding-top: 10px;\n  //height: 50%;\n  width: 100%;   \n "])), props => props.viewWidth > 1200 ? 'row' : 'column', props => props.viewWidth > 600 ? 5 : 0, props => props.viewWidth > 600 ? 5 : 0);
const EditIcon = exports.EditIcon = (0, _styledComponents.default)(_md.MdEdit)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["  \n  font-size: calc(0.5rem + 1vmin);\n  transition: 0.5s;\n  margin-right: 5px;\n  //color: green;\n  &: hover{\n    cursor: pointer;\n    color: red;\n  }\n"])));
const EditOffIcon = exports.EditOffIcon = (0, _styledComponents.default)(_md.MdEditOff)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  font-size: calc(0.5rem + 1vmin);\n  margin-right: 5px;\n  &: hover{\n    cursor:not-allowed;\n  }\n"])));