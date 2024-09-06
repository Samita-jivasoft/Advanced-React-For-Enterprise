"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementModal = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _ElementContext = require("../../data/ElementContext");
var _AnimatedDynamicModal = require("../../../AnimatedDynamicModal");
var _Layout = require("../../../Layout");
var _AppContext = require("app/data/context/AppContext");
var _validation = require("../../validation");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementModal = () => {
  const [formState, setFormState] = (0, _react.useState)([]);
  const [, appDispatch] = (0, _AppContext.useApp)();
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    elementmodal,
    canedit
  } = elementState;
  const handleInputModeValidation = () => {
    if (canedit === 1 || canedit === 2) {
      elementDispatch({
        type: 'SET_REQUIREMENTS',
        requirements: (0, _validation.validateInput)(elementState)
      });
    }
  };
  (0, _react.useEffect)(() => {
    var _elementmodal$config;
    if ((elementmodal === null || elementmodal === void 0 || (_elementmodal$config = elementmodal.config) === null || _elementmodal$config === void 0 ? void 0 : _elementmodal$config.type) === 'confirmation') {
      let confirmInput = formState.filter(element => {
        return (element === null || element === void 0 ? void 0 : element.id) == 'input';
      })[0];
      let code = formState.filter(element => {
        return (element === null || element === void 0 ? void 0 : element.id) == 'confirm';
      })[0];
      if ((confirmInput === null || confirmInput === void 0 ? void 0 : confirmInput.value) == (code === null || code === void 0 ? void 0 : code.defaultvalue)) {
        var _elementmodal$config2;
        appDispatch({
          type: 'UNSET_MODAL'
        });
        handleInputModeValidation();
        elementDispatch({
          type: 'SET_VALUE',
          value: elementmodal === null || elementmodal === void 0 || (_elementmodal$config2 = elementmodal.config) === null || _elementmodal$config2 === void 0 ? void 0 : _elementmodal$config2.onconfirmationvalue
        });
      }
    }
  }, [formState]);
  (0, _react.useEffect)(() => {
    if (elementmodal) {
      appDispatch({
        type: 'SET_MODAL',
        currentModal: /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
          backgroundColor: 'white',
          type: "bottom sheet",
          dismissable: true,
          onClose: () => {
            handleInputModeValidation();
            elementDispatch({
              type: 'SET_MODAL',
              elementmodal: null
            });
            appDispatch({
              type: 'UNSET_MODAL'
            });
          }
        }, /*#__PURE__*/_react.default.createElement(_Layout.Layout, {
          label: elementmodal === null || elementmodal === void 0 ? void 0 : elementmodal.label,
          parentState: formState,
          setParentState: setFormState,
          css: {
            background: 'white'
          },
          isReview: true,
          elements: elementmodal === null || elementmodal === void 0 ? void 0 : elementmodal.elements
        }))
      });
    }
  }, [elementmodal]);
};
exports.ElementModal = ElementModal;