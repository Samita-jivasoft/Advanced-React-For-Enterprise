"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurationReducer = configurationReducer;
exports.initialConfiguration = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialConfiguration = exports.initialConfiguration = {};
function configurationReducer(state, action) {
  const tableconfiguration = state.tableconfiguration;
  const excludedBEFields = ['crudid', 'crudlistitems', 'crudlistitems', 'excludedsearchresults', 'searchresults', 'tableconfiguration', 'childid', 'childobjname', 'nextsp', 'nextstructtype', 'parentid', 'parentobjname', 'reviewrequired', 'stepid', 'selection', 'initialcrudlistitems', 'showtablesettingsmodal', 'showfiltersmodal', 'crudaction'];
  const excludedFields = ['crudid', 'childid', 'childobjname', 'nextsp', 'nextstructtype', 'parentid', 'parentobjname', 'reviewrequired', 'stepid', 'crudlistitems', 'crudlistitems', 'searchresults', 'excludedsearchresults', 'initialcrudlistitems', 'showtablesettingsmodal', 'showfiltersmodal', 'crudaction'];
  switch (action.type) {
    case 'RESET_STATE':
      return action.payload;
    case 'INITIALIZE_DATA':
      // console.log('here', action.configurations)
      // state['tableconfiguration'] = action.configurations
      return _objectSpread(_objectSpread({}, state), action.configurations);
    case 'ADD_CONFIGURATION':
      // console.log(state)
      if (tableconfiguration && tableconfiguration !== false) {
        // console.log(action.currentListState)
        // console.log(action.currentConfigLabel)
        const newconfig = Object.fromEntries(Object.entries(action.currentListState).filter(_ref => {
          let [key] = _ref;
          return !excludedBEFields.includes(key);
        }));
        newconfig['configurationlabel'] = action.currentConfigLabel;
        newconfig['configurationid'] = action.currentConfigLabel;
        newconfig['setconfig'] = true;
        const listExists = (tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.length) > 0 && (tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.some(list => list.listid === action.currentListState.crudlistid));
        if (listExists) {
          // Configuration exists, update its savedconfigs
          const configExists = tableconfiguration.filter(list => list.listid === action.currentListState.crudlistid)[0].savedconfigs.some(config => config.configurationid === newconfig.configurationid);
          if (!configExists) {
            const updatedTableConfig = tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.map(list => {
              var _action$currentListSt;
              if ((list === null || list === void 0 ? void 0 : list.listid) === (action === null || action === void 0 || (_action$currentListSt = action.currentListState) === null || _action$currentListSt === void 0 ? void 0 : _action$currentListSt.crudlistid)) {
                const configs = JSON.parse(JSON.stringify(list.savedconfigs));
                configs.unshift(newconfig);
                return _objectSpread(_objectSpread({}, list), {}, {
                  savedconfigs: configs.map(config => config.configurationid === action.currentConfigLabel ? _objectSpread(_objectSpread({}, config), {}, {
                    setconfig: true
                  }) : _objectSpread(_objectSpread({}, config), {}, {
                    setconfig: false
                  }))
                });
              }
              return list;
            });
            state['tableconfiguration'] = updatedTableConfig;
          }
        } else {
          // Configuration does not exist, add a new entry
          state['tableconfiguration'] = [...tableconfiguration, {
            listid: action.currentListState.crudlistid,
            savedconfigs: [newconfig]
          }];
        }
      }
      return _objectSpread({}, state);
    case 'SET_CONFIGURATION':
      const selectedconfig = action.currentConfiguration;
      var updatedTableConfig = tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.map(list => {
        if ((list === null || list === void 0 ? void 0 : list.listid) === (selectedconfig === null || selectedconfig === void 0 ? void 0 : selectedconfig.crudlistid)) {
          const configs = JSON.parse(JSON.stringify(list.savedconfigs));
          // console.log(configs)
          return _objectSpread(_objectSpread({}, list), {}, {
            savedconfigs: configs === null || configs === void 0 ? void 0 : configs.map(config => (config === null || config === void 0 ? void 0 : config.configurationid) === (selectedconfig === null || selectedconfig === void 0 ? void 0 : selectedconfig.configurationid) ? _objectSpread(_objectSpread({}, config), {}, {
              setconfig: true
            }) : _objectSpread(_objectSpread({}, config), {}, {
              setconfig: false
            }))
          });
        }
        return list;
      });
      state['tableconfiguration'] = updatedTableConfig;
      return _objectSpread({}, state);
    case 'CLEAR_CONFIGURATIONS':
      var updatedTableConfig = tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.map(list => {
        if ((list === null || list === void 0 ? void 0 : list.listid) === (action === null || action === void 0 ? void 0 : action.listid)) {
          const configs = JSON.parse(JSON.stringify(list.savedconfigs));
          // console.log(configs)
          return _objectSpread(_objectSpread({}, list), {}, {
            savedconfigs: configs === null || configs === void 0 ? void 0 : configs.map(config => _objectSpread(_objectSpread({}, config), {}, {
              setconfig: false
            }))
          });
        }
        return list;
      });
      state['tableconfiguration'] = updatedTableConfig;
      return _objectSpread({}, state);
    case 'UPDATE_CONFIGURATION':
      var update = action.currentList;
      // console.log('updating config', update)
      const defaultconfig = {
        crudlistid: 'D40B8DFE-2C2E-4416-AB3A-41C85F169F19',
        label: 'Details',
        idcolumn: 'DetailID',
        type: 'fromlist',
        layout: 'tabs',
        configurationid: 'DEFAULT',
        setconfig: true
      };
      const newconfig = Object.fromEntries(Object.entries(update).filter(_ref2 => {
        let [key] = _ref2;
        return !excludedFields.includes(key);
      }));
      newconfig['setconfig'] = true;
      // console.log('newconfig', newconfig)
      // console.log('tableconfig before', tableconfiguration)

      var updatedTableConfig = tableconfiguration === null || tableconfiguration === void 0 ? void 0 : tableconfiguration.map(list => {
        // console.log('list', list)
        if (list.listid === update.crudlistid) {
          var _list$savedconfigs;
          // console.log('update here')
          return _objectSpread(_objectSpread({}, list), {}, {
            savedconfigs: list === null || list === void 0 || (_list$savedconfigs = list.savedconfigs) === null || _list$savedconfigs === void 0 ? void 0 : _list$savedconfigs.map(obj => obj.configurationid === update.configurationid ? newconfig : obj)
          });
        }
        return list;
      });
      // state.getTableConfiguration(updatedTableConfig)
      state['tableconfiguration'] = updatedTableConfig;
      return _objectSpread({}, state);
    case 'DELETE_CONFIGURATION':
      // var currList = action.listid
      // var currConfig = action.configid
      // console.log('tableconfiguration', tableconfiguration)
      var updatedTableConfig = tableconfiguration.map(list => {
        var _action$currentList;
        if ((list === null || list === void 0 ? void 0 : list.listid) === (action === null || action === void 0 || (_action$currentList = action.currentList) === null || _action$currentList === void 0 ? void 0 : _action$currentList.crudlistid)) {
          var _list$savedconfigs2;
          if ((list === null || list === void 0 || (_list$savedconfigs2 = list.savedconfigs) === null || _list$savedconfigs2 === void 0 ? void 0 : _list$savedconfigs2.length) > 0) {
            return _objectSpread(_objectSpread({}, list), {}, {
              savedconfigs: list.savedconfigs.filter(config => config.configurationid !== action.currentList.configurationid)
            });
          }
        }
        return list;
      });
      state['tableconfiguration'] = updatedTableConfig;
      return _objectSpread({}, state);
    case 'UPDATE_PARENT':
      console.log(action.sendToParent);
      return _objectSpread(_objectSpread({}, state), {}, {
        getTableConfiguration: action.sendToParent
      });
    default:
      return state;
  }
}