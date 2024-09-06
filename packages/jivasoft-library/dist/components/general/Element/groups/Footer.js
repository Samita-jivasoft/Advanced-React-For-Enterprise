"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementFooter = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../data/ElementContext");
var _Main = require("../styles/Main");
var _string = require("../../../../app/helpers/string");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementFooter = _ref => {
  let {
    offset
  } = _ref;
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    isEdit,
    remainingRequirements,
    label,
    maxcharacters,
    canedit,
    masktype,
    maximumvalue,
    validmaximum,
    value,
    datatype
  } = elementState;
  const [timerId, setTimerId] = (0, _react.useState)(null);

  // TODO: make text lighter
  const [valid, setValid] = (0, _react.useState)(false);
  const RemainingRequirements = () => {
    return /*#__PURE__*/_react.default.createElement(_Main.RemainingRequirementsStyled, {
      key: 'remaining-requirements'
    }, masktype == 'password' ? remainingRequirements.map((requirement, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: requirement !== null && requirement !== void 0 ? requirement : index,
        style: {
          alignItems: 'center',
          display: 'flex',
          margin: 3
        }
      }, /*#__PURE__*/_react.default.createElement(_Main.RequirementIconStyled, null), " ", requirement);
    }) : remainingRequirements.map((requirement, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: requirement !== null && requirement !== void 0 ? requirement : index,
        style: {
          alignItems: 'center',
          display: 'flex',
          margin: 3
        }
      }, /*#__PURE__*/_react.default.createElement(_Main.RequirementIconStyled, null), " ", requirement);
    })[0]);
  };

  //TODO: maybe in the future implement a counter for ints / floats
  function showValueLimits() {
    return (datatype == 'int' || datatype == 'float' || datatype == 'picklist') && (value === null || value === void 0 ? void 0 : value.length) > 0;
  }
  function showCharacterLimits(datatype, masktype) {
    // add a other specific cases to exclude from showing character limit counter
    switch (masktype) {
      case 'phone':
      case 'email':
        return false;
      default:
        return (datatype === 'string' || datatype === '' || datatype === null) && typeof maxcharacters == 'number' && maxcharacters != 0;
    }
  }
  const MasktypeRequirements = () => {
    return showCharacterLimits(datatype, masktype) && /*#__PURE__*/_react.default.createElement(_Main.MasktypeRequirementsStyled, null, (0, _string.getCharacterCountWithNewLines)(value) + '/' + maxcharacters);
  };
  const renderedBody = (0, _react.useMemo)(() => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RemainingRequirements, null), /*#__PURE__*/_react.default.createElement(MasktypeRequirements, null));
  }, [remainingRequirements, value]);
  return /*#__PURE__*/_react.default.createElement(_Main.ElementFooterStyled, {
    className: 'element-footer'
  }, (canedit == 1 || canedit == 2) && renderedBody);
};
exports.ElementFooter = ElementFooter;