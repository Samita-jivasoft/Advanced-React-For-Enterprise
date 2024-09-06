"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormReviewElement = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _components = require("@jivasoft/jivasoft-lib/dist/components");
var _Main = require("components/Generic/FormElement/Main");
var _Main2 = require("components/Generic/FormElement/styles/Main");
var _react = require("react");
var _fa = require("react-icons/fa");
var _Datetime = require("./Datetime");
//import { DynamicButtonV2 } from "@jivasoft/jivasoft-lib"

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
        return element.value ? /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, element.value) : /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            color: themeState.currentTheme.warnColor
          }
        }, "This field is empty...");
      case 'date':
        return /*#__PURE__*/React.createElement(_Datetime.ReviewElementDatetime, {
          type: masktype
        });
      case 'datelist':
        return /*#__PURE__*/React.createElement(_Datetime.ReviewElementDatetime, {
          value: value,
          type: datatype
        });
      default:
        return /*#__PURE__*/React.createElement("div", {
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
  return !isEditing ? /*#__PURE__*/React.createElement(_Main2.InputContainerStyled, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 5
    }
  }, element.label), getReviewElement()), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '20%'
    }
  }, /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.overlayNeutral,
    icon: /*#__PURE__*/React.createElement(_fa.FaPen, null),
    onClick: () => {
      setIsEditing(true);
    },
    color: themeState.currentTheme.text
  }))) : /*#__PURE__*/React.createElement(_Main2.InputContainerStyled, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%'
    }
  }, /*#__PURE__*/React.createElement(_Main.FormElement, {
    parentState: props.parentState
    //  thing={true}
    ,
    setParentState: props.setFormState,
    element: element.element
  }), "            "), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '20%'
    }
  }, /*#__PURE__*/React.createElement("div", null, isValid ? /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.successColorBase,
    icon: /*#__PURE__*/React.createElement(_fa.FaCheck, null),
    disabled: false,
    onClick: () => {
      props.updateForm();
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  }) : /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.successColorBase,
    icon: /*#__PURE__*/React.createElement(_fa.FaCheck, null),
    disabled: true,
    onClick: () => {
      props.updateForm();
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(_components.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.dangerColorBase,
    icon: /*#__PURE__*/React.createElement(_fa.FaTimes, null),
    onClick: () => {
      setIsEditing(false);
    },
    color: themeState.currentTheme.text
  }))));
};
exports.FormReviewElement = FormReviewElement;