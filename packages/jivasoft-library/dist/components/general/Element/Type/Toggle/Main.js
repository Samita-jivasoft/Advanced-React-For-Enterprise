"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeToggle = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _general = require("../../../../general");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _utils = require("@testing-library/user-event/dist/utils");
var _data = require("app/data");
var _Display = require("./Display");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypeToggle = props => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision
  } = elementState;
  //   const [checked, setChecked] = useState(
  //     defaultvalue ? (defaultvalue ==1 ? true : false) : false
  //   )

  //   useEffect(() => {
  //     var value
  //     if (checked) {
  //       value = 1
  //     } else {
  //       value = 0
  //     }
  //   }, [checked])
  // console.log(remainingRequirements)
  const [themeState] = (0, _data.useAppTheme)();
  return isEdit ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_general.ToggleSwitch, {
    id: 'switch-' + id
    // label='Switch' //optional
    ,
    checked: value == 0 ? false : true //required
    ,
    onChange: e => {
      elementDispatch({
        type: 'SET_VALUE',
        value: e === true ? '1' : '0'
      });
    } //required
    ,
    optionLabels: ['yes', 'no'],
    onColor: themeState.currentTheme.successColor //optional
    // offColor={'#bbb'} //optional
    // color={'white'} //optional
    ,
    disabled: canedit == 0 ? true : false //optional
  })) : /*#__PURE__*/_react.default.createElement(_Display.ElementTypeToggleDisplay, null);
};
exports.ElementTypeToggle = ElementTypeToggle;