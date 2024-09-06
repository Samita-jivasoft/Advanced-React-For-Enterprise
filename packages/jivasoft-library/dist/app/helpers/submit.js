"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildResponse = buildResponse;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function buildResponse(appState, stepState, navItem) {
  var _stepState$stepstate, _stepState$stepstate2, _appState$currentWork, _stepState$stepdata;
  let formelements = [];
  let stepinputs = stepState !== null && stepState !== void 0 && (_stepState$stepstate = stepState.stepstate) !== null && _stepState$stepstate !== void 0 && _stepState$stepstate.stepinputs ? stepState === null || stepState === void 0 || (_stepState$stepstate2 = stepState.stepstate) === null || _stepState$stepstate2 === void 0 ? void 0 : _stepState$stepstate2.stepinputs : [];
  let putStepObj = {
    step: [{
      workflowid: stepState.workflowid,
      stepid: stepState === null || stepState === void 0 ? void 0 : stepState.stepid,
      navigation: [navItem],
      agencyids: (appState === null || appState === void 0 || (_appState$currentWork = appState.currentWorkflow) === null || _appState$currentWork === void 0 ? void 0 : _appState$currentWork.agencyrequired) == 2 ? appState.currentAgency ? appState.currentAgency.map(agency => agency.agencyid) : null : null,
      agencyid: appState.currentAgency ? appState.currentAgency[0].agencyid : null
    }]
  };
  switch (stepState.steptype) {
    case 'form':
      stepState === null || stepState === void 0 || (_stepState$stepdata = stepState.stepdata) === null || _stepState$stepdata === void 0 || _stepState$stepdata.forEach(item => {
        // Skip items with submit === 0
        if ((item === null || item === void 0 ? void 0 : item.submit) === 0) return;

        // console.log('in here', item)
        let submitData;
        switch (item.datatype.toLowerCase()) {
          // set element datatype specific fields
          case 'picklist':
            const submitselectoptions = Array.isArray(item.value) ? item.value.map(_ref => {
              let {
                id
              } = _ref;
              return {
                id: id,
                selected: 1
              };
            }) : [];
            submitData = {
              selectoptions: submitselectoptions
            };
            break;
          case 'datelist':
            submitData = {
              datelist: item.datelist
            };
            break;
          default:
            // Default case for other datatypes or if datatype is not provided
            // console.log('here', item.masktype)
            switch (item.masktype.toLowerCase()) {
              case 'password':
                submitData = {
                  hash: item.hash
                };
                break;
              default:
                submitData = {
                  value: item.value
                };
                break;
            }
            break;
        }

        // set elements that are globally element specific
        formelements.push(_objectSpread({
          datatype: item.datatype,
          saveparam: item.saveparam
        }, submitData));
        if (item.requiredbystep === navItem.navigationid) {
          stepinputs.push(_objectSpread({
            saveparam: item.fieldname,
            //required by BE for Step submission
            datatype: item.datatype
          }, submitData));
        }
      });

      // formelements
      putStepObj['step'][0]['form'] = [{
        formelements: formelements
      }];

      // stepinputs
      putStepObj['step'][0]['stepinputs'] = stepinputs;

      // let response = {
      //     "step": [
      //         {
      //             "workflowid": stepState.workflowid,
      //             "stepid": stepState.stepid,
      //             "navigation": [navItem],
      //             'agencyid': appState.currentAgency ? appState.currentAgency.agencyid : null,
      //             "form": [{
      //                 'formelements': formelements
      //             }]
      //         }
      //     ]
      // };
      // console.log('=============>>>>>',response)
      return putStepObj;
    case 'crud':
      putStepObj['step'][0]['crud'] = stepState.stepstate.crud;
      putStepObj['step'][0]['crud'][0]['changeditems'] = stepState.stepdata;
      return putStepObj;
    default:
      return putStepObj;
  }
}