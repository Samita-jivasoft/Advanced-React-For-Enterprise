"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementButton = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _ = require("../../..");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _data = require("app/data");
var _Display = require("../Field/Display");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementButton = props => {
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    remainingRequirements,
    isEdit,
    masktype,
    datatype,
    validminimum,
    onClick: _onClick,
    canedit,
    value,
    defaultvalue,
    id,
    required,
    percision
  } = elementState;
  const [themeState] = (0, _data.useAppTheme)();
  async function getButtonFunctions() {
    if (datatype === 'button' || masktype === 'button') {
      // let
      switch (masktype) {
        case 'button':
        default:
          _onClick();
        // alert(label + ' Clicked')
        // follow the exact same rules that nav buttons
      }
    }
  }
  //TODO: determine isEdit behavior; for now defaulted to isEdit is always true

  return true ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      width: '100%',
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_.DynamicButtonV2, {
    backgroundColor: themeState.currentTheme.bg0,
    color: themeState.currentTheme.text,
    text: elementState.label,
    type: 'chip'
    // size={''}
    // icon={''}
    ,
    onClick: () => _onClick()
    // iconPosition={''}
    // disabled={''}
    // width={''}
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  });
};
exports.ElementButton = ElementButton;