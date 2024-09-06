"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuspendedWorkflow = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _AppContext = require("app/data/context/AppContext");
var _html2canvas = _interopRequireDefault(require("html2canvas"));
var _ = require(".");
var _components = require("components");
var _constants = require("app/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SuspendedWorkflow = () => {
  const [appState, appDispatch] = (0, _AppContext.useApp)();
  const {
    value,
    value2
  } = (0, _data.useSuspend)();
  const [stepState, stepDispatch] = (0, _data.useStep)();
  const [themeState, dispatch] = (0, _data.useAppTheme)();
  const [suspendState, suspendDispatch] = value;
  const imageRef = value2;
  const [showImgModal, setShowImgModal] = (0, _react.useState)(true);
  const [showWorkflowModal, setShowWorkflowModal] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (suspendState.suspendState.length === 0) {
      setShowWorkflowModal(true);
      setShowImgModal(false);
    }
  }, [suspendState]);
  function generateStepContext(stepDispatch, data) {
    const isStepType = Object.keys(data).filter(key => {
      return _constants.steptypes.includes(key);
    });
    //If there's one step type
    if (isStepType.length === 1) {
      stepDispatch({
        type: 'SET_STEP',
        stepstatus: null,
        steptype: null,
        stepstate: null,
        stepid: null,
        workflowid: null
      });
      let stepstatus = null;
      switch (isStepType[0]) {
        //if that one type is a form...
        case 'form':
          console.log("reviewrequired =", data.form[0].reviewrequired);
          if (data.form[0].reviewrequired === 1) {
            stepstatus = {
              isreview: false
            };
          }
          break;
      }
      console.log('dispatching...setstep');
      stepDispatch({
        type: 'SET_STEP',
        stepstatus: stepstatus,
        steptype: isStepType[0],
        stepstate: data,
        stepid: data.stepid,
        workflowid: data.workflowid
      });
    } else {
      //handle multiple steptypes
      // stepDispatch({ type: 'SET_STEP', steptype: null, stepstate: data, stepid: data.stepid, workflowid: data.workflowid })
    }
  }
  function GenerateID() {
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return id;
  }
  async function PushState(stepState) {
    var uniqueId = GenerateID();
    if (suspendState.suspendState.length != 0) {
      for (var i = 0; i < suspendState.suspendState.length; i++) {
        if (uniqueId === suspendState.suspendState[i].id) {
          while (uniqueId != suspendState.suspendState[i].id) {
            uniqueId = GenerateID();
          }
        }
      }
    }
    var imgResult = await GetScreenshot();
    var stateObject = {
      stepState: stepState,
      suspendStateWorkflow: appState.currentWorkflow,
      suspendStateAgency: appState.currentAgency,
      id: uniqueId,
      imageURI: imgResult
    };
    if (imgResult !== null) {
      suspendDispatch({
        type: 'PUSH',
        payload: stateObject
      });
      setShowImgModal(true);
    } else {
      return;
    }
  }
  async function GetScreenshot() {
    try {
      return await (0, _html2canvas.default)(imageRef.current).then(function (canvas) {
        return canvas.toDataURL();
      });
    } catch (error) {
      return null;
    }
  }
  function RepopulateWorkflow(suspendState, stateId) {
    if (suspendState.suspendState.length != 0 && stateId !== null) {
      var selectedSuspendState = suspendState.suspendState.find(item => item.id === stateId);
      var selectedStepState = selectedSuspendState.stepState;
      var selectedStepStateIndex = suspendState.suspendState.findIndex(item => item.id === stateId);
      var selectedStepData = selectedStepState.stepdata;
      if (selectedStepStateIndex < suspendState.suspendState.length - 1) {
        appDispatch({
          type: 'SET_MODAL',
          currentModal: /*#__PURE__*/_react.default.createElement(_components.AnimatedDynamicModal, {
            type: 'modal',
            dismissable: 0,
            backgroundColor: themeState.currentTheme.bgSolid,
            themeColor: themeState.currentTheme.overlayDimmest,
            fontColor: themeState.currentTheme.text,
            headerText: 'Are you sure you want to lose your progress on the previous workflows?'
          }, /*#__PURE__*/_react.default.createElement(_.ModalDiv, null, /*#__PURE__*/_react.default.createElement(_.ModalButton, {
            onClick: () => {
              PopulateDefaultValue(selectedSuspendState, selectedStepState, selectedStepData, selectedStepStateIndex);
              appDispatch({
                type: 'UNSET_MODAL'
              });
            }
          }, "Yes"), /*#__PURE__*/_react.default.createElement(_.ModalButton, {
            onClick: () => appDispatch({
              type: 'UNSET_MODAL'
            })
          }, "Cancel")))
        });
      } else if (selectedStepStateIndex === suspendState.suspendState.length - 1) {
        PopulateDefaultValue(selectedSuspendState, selectedStepState, selectedStepData, selectedStepStateIndex);
      } else {
        return;
      }
    }
  }
  function PopulateDefaultValue(selectedSuspendState, selectedStepState, selectedStepData, selectedStepStateIndex) {
    if (selectedStepState.steptype === 'form') {
      selectedStepState.stepstate.form[0].formelements.map(item => {
        var stepDataItem = selectedStepData.find(dataItem => dataItem.formelementid === item.formelementid);
        if (item.datatype === 'picklist') {
          if (stepDataItem.selectoptions && stepDataItem.selectoptions.length != 0) {
            item.defaultvalue = stepDataItem.selectoptions[0].id;
          } else {
            item.defaultvalue = "";
          }
        } else {
          item.defaultvalue = stepDataItem.value;
        }
      });
      //if last item in array, launch workflow
      //else'
      if (appState.currentWorkflow) {
        appDispatch({
          type: 'UNSELECT_AGENCY'
        });
        stepDispatch({
          type: 'CLEAR_STEP_DATA'
        });
        appDispatch({
          type: 'UNSELECT_WORKFLOW'
        });
      }
      setTimeout(() => {
        appDispatch({
          type: 'SELECT_AGENCY',
          currentAgency: selectedSuspendState.suspendStateAgency
        });
        appDispatch({
          type: 'SELECT_WORKFLOW',
          currentWorkflow: selectedSuspendState.suspendStateWorkflow,
          isSuspended: true
        });
        generateStepContext(stepDispatch, selectedStepState.stepstate);
        suspendDispatch({
          type: 'REMOVE_STATE',
          payload: selectedStepStateIndex
        });
      }, '0');
    } else {
      return;
    }
  }
  return /*#__PURE__*/_react.default.createElement(_.OverlayDiv, null, /*#__PURE__*/_react.default.createElement(_.FooterDiv, null, /*#__PURE__*/_react.default.createElement(_.WorkflowButton, {
    onClick: () => {
      //takeScreenshot(imgRef.current);
      //setShowImgModal(true);
      PushState(stepState);
    }
  }, "Suspend Workflow"), /*#__PURE__*/_react.default.createElement(_.WorkflowButton, {
    onClick: () => {
      suspendDispatch({
        type: 'DELETE_ALL'
      });
      setShowImgModal(false);
      setShowWorkflowModal(true);
    }
  }, "Delete All Workflow")), showImgModal && /*#__PURE__*/_react.default.createElement(_.OverlayDiv, null, /*#__PURE__*/_react.default.createElement(_.ImgModal, {
    width: showWorkflowModal ? '80' : '5'
  }, !showWorkflowModal ? /*#__PURE__*/_react.default.createElement(_.WorkflowCounterDiv, null, suspendState.suspendState.length) : null, showWorkflowModal ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.StickySideDiv, null, /*#__PURE__*/_react.default.createElement(_.RightIcon, {
    onClick: () => setShowWorkflowModal(false)
  })), /*#__PURE__*/_react.default.createElement(_.ScrollImgDiv, null, suspendState.suspendState.map((item, idx) => {
    return /*#__PURE__*/_react.default.createElement(_.ImgDiv, {
      opacity: idx === suspendState.suspendState.length - 1 ? 100 : 70
    }, /*#__PURE__*/_react.default.createElement("img", {
      width: '80%',
      height: '100%',
      src: item.imageURI,
      alt: '',
      onClick: () => RepopulateWorkflow(suspendState, item.id)
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.LeftIcon, {
    onClick: () => setShowWorkflowModal(true)
  })))));
};
exports.SuspendedWorkflow = SuspendedWorkflow;