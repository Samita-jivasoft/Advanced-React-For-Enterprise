"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypeFieldDisplay = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _ElementContext = require("../../data/ElementContext");
var _styles = require("./styles");
var _helpers = require("./helpers");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ElementTypeFieldDisplay = () => {
  const [elementState] = (0, _ElementContext.useElement)();
  const {
    value,
    canedit,
    masktype
  } = elementState;
  function DisplayTextArea(_ref) {
    let {
      value
    } = _ref;
    const segments = value.split("char(10)").map((segment, index, array) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, segment, index !== array.length - 1 && /*#__PURE__*/_react.default.createElement("br", null)));
    return /*#__PURE__*/_react.default.createElement("div", null, segments);
  }
  const renderContent = () => {
    var _masktype$toLowerCase, _masktype$toLowerCase2, _masktype$toLowerCase3;
    switch (true) {
      case value.length === 0 && canedit === 1:
        return "This field is empty";
      case value.length === 0 && canedit !== 1:
        return "";
      case masktype === null || masktype === void 0 || (_masktype$toLowerCase = masktype.toLowerCase()) === null || _masktype$toLowerCase === void 0 ? void 0 : _masktype$toLowerCase.includes("textarea"):
        return /*#__PURE__*/_react.default.createElement(DisplayTextArea, {
          value: value
        });
      case masktype === null || masktype === void 0 || (_masktype$toLowerCase2 = masktype.toLowerCase()) === null || _masktype$toLowerCase2 === void 0 ? void 0 : _masktype$toLowerCase2.includes("password"):
        return value.replace(/./g, "*");
      case masktype === null || masktype === void 0 || (_masktype$toLowerCase3 = masktype.toLowerCase()) === null || _masktype$toLowerCase3 === void 0 ? void 0 : _masktype$toLowerCase3.includes("html"):
        const sanitizedValue = (0, _helpers.sanitizeHTML)(value);
        //console.log("Sanitized HTML: \n", sanitizedValue);
        return /*#__PURE__*/_react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: sanitizedValue
          }
        });
      default:
        return value;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.FieldDisplayContainerStyled, {
    canedit: canedit,
    value: value
  }, renderContent());
};
exports.ElementTypeFieldDisplay = ElementTypeFieldDisplay;