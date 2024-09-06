"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormReviewElement = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _general = require("../../../general");
var _Main = require("../../FormElement/Main");
var _Main2 = require("../../FormElement/styles/Main");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Datetime = require("./Datetime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FormReviewElement = props => {
  const [themeState] = (0, _data.useAppTheme)();
  const [isEditing, setIsEditing] = (0, _react.useState)();
  const {
    element
  } = props;
  const [isValid, setIsValid] = (0, _react.useState)(element.isValid);
  function getReviewElement() {
    const curEl = props.parentState.find(e => {
      return e.formelementid === element.element.formelementid;
    });
    // setIsValid(curEl.isValid)

    let datatype = element.element.datatype;
    let value = element.value;
    let masktype = element.element.masktype;
    switch (datatype) {
      case 'picklist':
      case 'float':
      case 'int':
      case 'string':
        element.element.defaultvalue = curEl.value;
        return element.value ? /*#__PURE__*/_react.default.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, element.value) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            textAlign: 'center',
            color: themeState.currentTheme.warnColor
          }
        }, "This field is empty...");
      case 'date':
        return /*#__PURE__*/_react.default.createElement(_Datetime.ReviewElementDatetime, {
          type: masktype
        });
      case 'datelist':
        return /*#__PURE__*/_react.default.createElement(_Datetime.ReviewElementDatetime, {
          value: value,
          type: datatype
        });
      default:
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            textAlign: 'center',
            color: themeState.currentTheme.warnColor
          }
        }, "This field is empty...");
    }
  }
  // const [disabled,setDisabled] = useState(element.isValid?false:true)
  (0, _react.useEffect)(() => {
    const curEl = props.parentState.find(e => {
      return e.formelementid === element.element.formelementid;
    });
    setIsValid(curEl.isValid);
    // if(isEditing){
    //     // console.log(curEl)
    //     element.element.defaultvalue=curEl.value
    // }
  }, [props.parentState]);
  return !isEditing ? /*#__PURE__*/_react.default.createElement(_Main2.InputContainerStyled, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 5
    }
  }, element.label), getReviewElement()), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '20%'
    }
  }, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.overlayNeutral,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPen, null),
    onClick: () => {
      setIsEditing(true);
    },
    color: themeState.currentTheme.text
  }))) : /*#__PURE__*/_react.default.createElement(_Main2.InputContainerStyled, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.FormElement, {
    parentState: props.parentState
    //  thing={true}
    ,
    setParentState: props.setFormState,
    element: element.element
  }), "            "), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '20%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, isValid ? /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.successColorBase,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null),
    disabled: false,
    onClick: () => {
      props.updateForm();
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  }) : /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.successColorBase,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null),
    disabled: true,
    onClick: () => {
      props.updateForm();
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.dangerColorBase,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    onClick: () => {
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  }))));
};
exports.FormReviewElement = FormReviewElement;