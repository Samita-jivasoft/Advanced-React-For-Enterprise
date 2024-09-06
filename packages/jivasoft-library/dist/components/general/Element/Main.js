"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementMain = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Main = require("./styles/Main");
var _Header = require("./groups/Header");
var _ElementContext = require("./data/ElementContext");
var _Footer = require("./groups/Footer");
var _validation = require("./validation");
var _Selector = require("./groups/Selector");
var _helpers = require("./helpers");
var _actions = require("./actions");
var _Modal = require("./groups/Modal");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementMain = _ref => {
  let {
    parentState,
    setParentState,
    isEdit
  } = _ref;
  //get datatype from context
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    value,
    id,
    required,
    remainingRequirements,
    datatype,
    canedit,
    hidden,
    elementmodal,
    css,
    style
  } = elementState;
  // console.log('ELEMENT MAIN elementState', elementState)

  //moved definition outside of useeffect; probably should go in some other file of functions
  //new; moved dispatches to context for changes in isEdit outside of the useEffect
  const toggleIsEdit = () => {
    // console.log(getEditStatus(canedit, isEdit), canedit, isEdit)
    elementDispatch({
      type: 'TOGGLE_ISEDIT',
      isEdit: (0, _helpers.getEditStatus)(canedit, isEdit)
    });
    if (isEdit) {
      elementDispatch({
        type: 'TOGGLE_ISREVIEW',
        isReview: isEdit
      });
    }
  };
  (0, _react.useEffect)(() => {
    var _elementState$action, _elementState$actions;
    // console.log('ELEMENT MAIN', elementState)
    const handleInputModeValidation = () => {
      if (canedit === 1 || canedit === 2) {
        elementDispatch({
          type: 'SET_REQUIREMENTS',
          requirements: (0, _validation.validateInput)(elementState)
        });
      }
    };
    const handleTriggerElement = () => {
      // console.log('outisde', parentState)
      // This function returns an array of changedObjects
      const changedObjects = (0, _actions.getChangedObjects)(elementState, parentState);
      // console.log('changedObjects', changedObjects)
      if (changedObjects.length > 0) {
        // console.log('changedObjects', changedObjects)
        (0, _actions.updateParentStateIfNeeded)(changedObjects, parentState, setParentState);
      }
    };
    const handleCopyAction = action => {
      if ((0, _actions.checkActiveAction)(action, parentState)) {
        const elementToUpdate = (0, _actions.getElementToUpdate)(action, elementState, parentState);
        if (elementToUpdate.isEdit === true) {
          elementToUpdate.value = elementState.value;
          const changedObject = [elementToUpdate];
          (0, _actions.updateParentStateIfNeeded)(changedObject, parentState, setParentState);
        }
      }
    };
    const handleActiveActions = () => {
      elementState.actions.forEach(action => {
        switch (action.actiontype.toLowerCase()) {
          case 'copy':
            handleCopyAction(action);
            break;
          default:
            break;
        }
      });
    };

    //If the element does not have any confirmation conditions blocking
    // if (!elementmodal) {

    // Initialize functions based on changing values
    if ((elementState === null || elementState === void 0 || (_elementState$action = elementState.action) === null || _elementState$action === void 0 ? void 0 : _elementState$action.length) > 0) handleTriggerElement();
    //TODO: Maybe check if the element's value/oldvalue has changed
    //Every time a element with actions is updated handleActiveActions
    if ((elementState === null || elementState === void 0 || (_elementState$actions = elementState.actions) === null || _elementState$actions === void 0 ? void 0 : _elementState$actions.length) > 0) handleActiveActions();

    //block inputvalidation until elementmodal is cleared (if modal requires 'confirmation')
    handleInputModeValidation();
    // }
  }, [value]);
  (0, _react.useEffect)(() => {
    toggleIsEdit();
  }, [isEdit]);

  // useEffect(() => {
  //   if (confirmationState?.length > 0) {
  //     let confirmInput = confirmationState.filter((element) => { return element?.id == 'confirmation' })[0]
  //     let code = confirmationState.filter((element) => { return element?.id == 'code' })[0]

  //     if (confirmInput?.value == code?.defaultvalue) {
  //       appDispatch({
  //         type: 'UNSET_MODAL',
  //       })

  //       handleInputModeValidation()
  //       elementDispatch({ type: 'SET_VALUE', value: elementmodal?.onconfirmationvalue })

  //     }
  //   }
  // }, [confirmationState])

  (0, _react.useEffect)(() => {
    // console.log(elementState)
    if (parentState && setParentState) {
      setParentState(state => [...state.filter(e => {
        return e.id !== id;
      }), elementState]);
    }
  }, [elementState]);
  return /*#__PURE__*/_react.default.createElement(_Main.ElementStyled, {
    css: css,
    style: style,
    hidden: hidden,
    value: value,
    canedit: canedit,
    isEdit: isEdit !== null && isEdit !== void 0 ? isEdit : true,
    elementState: elementState,
    className: 'element-main'
  }, /*#__PURE__*/_react.default.createElement(_Header.ElementHeader, null), /*#__PURE__*/_react.default.createElement(_Selector.ElementSelector, null), /*#__PURE__*/_react.default.createElement(_Footer.ElementFooter, null), /*#__PURE__*/_react.default.createElement(_Modal.ElementModal, null));
};
exports.ElementMain = ElementMain;