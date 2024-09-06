"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementSelector = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var _ElementContext = require("../data/ElementContext");
var _react = _interopRequireWildcard(require("react"));
var _Main = require("../styles/Main");
var _helpers = require("../helpers");
var _Main2 = require("../Type/Field/Main");
var _Type = require("../Type");
var _styles = require("../styles");
var _fa = require("react-icons/fa");
var _styles2 = require("./styles");
var _general = require("../../../general");
var _data = require("app/data");
var _reactRouterDom = require("react-router-dom");
var _fa2 = require("react-icons/fa6");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementSelector = _ref => {
  let {
    children
  } = _ref;
  const [themeState] = (0, _data.useAppTheme)();
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    canedit,
    value,
    datatype,
    masktype,
    status,
    isEdit,
    isReview,
    oldvalue,
    remainingRequirements,
    link,
    defaultvalue,
    route,
    decorator,
    css
  } = elementState;
  // console.log('SELECTOR', elementState)

  //render appropriate base element
  const renderedComponent = (0, _react.useMemo)(() => {
    switch (datatype) {
      case 'datelist':
        // Code for 'datelist' datatype
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeDatelistPicker, null);
      case 'boolean':
      case 'checkbox':
        // Code for 'checkbox' datatype
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeToggle, null);
      case 'date':
      case 'time':
      case 'datetime':
        // Code for 'datetime' datatype
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeDatetimePicker, null);
      // case 'location':
      case 'picklist':
        // Code for 'picklist' datatype
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypePicklist, null);
      case 'colorpicker':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeColorPicker, null);
      case 'int':
      case 'float':
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Main2.ElementTypeField, null);
      case 'file':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypePDFViewer, null);
      case 'fileuploader':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeFileUploader, null);
      case 'creditcard':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeCreditCard, null);
      case 'systeminfo':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementSystemInfo, null);
      case 'button':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementButton, null);
      case 'location':
        return /*#__PURE__*/_react.default.createElement(_Type.ElementTypeMap, null);
      case '':
      case null:
      default:
        // Default case
        return /*#__PURE__*/_react.default.createElement(_Main2.ElementTypeField, null);
    }
  }, [datatype]);

  // const renderedBody = useMemo(() => {
  //   if (isEdit) {
  //       return renderedComponent
  //   } else {
  //     if(canedit ===1){
  //       //editable
  //     return <div style={{width:'100%',display:'flex',flexDirection:'row',position:'relative'}}><>{renderedComponent}</><FaPen style={{position:'absolute',right:0,top:0}} /></div>
  //     } else {
  //       //not editable
  //       return renderedComponent
  //     }
  //   }
  // }, [canedit, isEdit]);

  function getDecorators() {
    if (masktype !== null && masktype !== void 0 && masktype.includes('error') || status !== null && status !== void 0 && status.includes('error')) {
      return /*#__PURE__*/_react.default.createElement(_fa.FaExclamationCircle, null);
    }
    if (datatype !== null && datatype !== void 0 && datatype.includes('location') || status !== null && status !== void 0 && status.includes('location')) {
      return /*#__PURE__*/_react.default.createElement(_fa2.FaLocationDot, null);
    }
    if (decorator) {
      return decorator;
    }
  }

  // Function to validate URLS
  function isValidUrl(string) {
    try {
      new URL(string);
      return link;
    } catch (err) {
      return null;
    }
  }
  function showLink() {
    if (!defaultvalue && link) {
      if (datatype === 'string') return true;
      if (datatype === 'float') return true;
      if (datatype === 'int') return true;
      if (link && !datatype) return true;
    } else return false;
  }
  return /*#__PURE__*/_react.default.createElement(_Main.ElementBodyStyled, {
    className: 'element-body',
    status: masktype || status
  }, getDecorators() && /*#__PURE__*/_react.default.createElement(_styles2.DecoratorStyled, null, getDecorators()), (canedit === 1 || canedit === 2) && !isEdit ? /*#__PURE__*/_react.default.createElement(_styles2.EditContainerStyled, {
    element: elementState,
    className: 'canedit-1-isEdit-false'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'edit-container-styled',
    style: {
      // border: '1px solid red',
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      // marginTop: '5px'
    }
  }, renderedComponent, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    type: "chip",
    backgroundColor: themeState.currentTheme.bg0,
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPen, null),
    onClick: () => {
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: !isEdit
      });
      elementDispatch({
        type: 'SET_VALUES',
        values: {
          oldvalue: value
        }
      });
    }
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.EditContainerStyled, {
    element: elementState,
    className: 'canedit-0-isEdit-true'
  }, link && datatype !== 'file' && masktype !== 'pdf' ? /*#__PURE__*/_react.default.createElement("a", {
    style: {
      width: '100%'
    },
    href: isValidUrl(link),
    target: '_blank'
  }, showLink() ? link : renderedComponent) : renderedComponent, isReview && isEdit && /*#__PURE__*/_react.default.createElement("div", {
    className: "isReview-container",
    style: {
      // border: '1px solid red',
      display: 'flex'
    }
  }, remainingRequirements.length == 0 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2
  // type='chip'
  // backgroundColor={themeState.currentTheme.bg0}
  // color={themeState.currentTheme.successShadeBase}
  , {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null),
    onClick: () => {
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: !isEdit
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2
  // type='chip'
  // backgroundColor={themeState.currentTheme.bg0}
  , {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null),
    onClick: () => {
      elementDispatch({
        type: 'TOGGLE_ISEDIT',
        isEdit: !isEdit
      });
      elementDispatch({
        type: 'SET_VALUES',
        values: {
          value: oldvalue
        }
      });
    }
  }))));
};
exports.ElementSelector = ElementSelector;