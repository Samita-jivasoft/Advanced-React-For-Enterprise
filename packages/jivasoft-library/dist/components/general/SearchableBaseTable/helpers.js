"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludedBEFields = void 0;
exports.getInitialConfigurations = getInitialConfigurations;
exports.setInitialState = setInitialState;
exports.showColumn = showColumn;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Main.js */
const excludedBEFields = exports.excludedBEFields = ["crudid", "crudlistitems", "initialcrudlistitems", "excludedsearchresults", "searchresults", "tableconfiguration", "childid", "childobjname", "nextsp", "nextstructtype", "parentid", "parentobjname", "reviewrequired", "stepid", "selection", "actionlabel", "crudfunctions"];
function getInitialConfigurations(setTableConfiguration, data, getTableConfiguration, onSave) {
  var _data$crudlist2;
  // console.log(getTableConfiguration, setTableConfiguration)
  if (getTableConfiguration && setTableConfiguration !== false) {
    var _data$crudlist;
    if (Array.isArray(setTableConfiguration) && setTableConfiguration.length > 0) {
      return {
        allowconfigurations: true,
        onSave: onSave,
        tableconfiguration: setTableConfiguration,
        getTableConfiguration
      };
    }
    if (setTableConfiguration === false || setTableConfiguration === undefined) {
      if (data.crudlist.length < 2) {
        return {
          allowconfigurations: false,
          tableconfiguration: false
        };
      }
    }

    // return a DEFAULT configuration
    return {
      allowconfigurations: true,
      onSave: onSave,
      tableconfiguration: data === null || data === void 0 || (_data$crudlist = data.crudlist) === null || _data$crudlist === void 0 ? void 0 : _data$crudlist.map(list => ({
        listid: list.crudlistid,
        savedconfigs: [Object.fromEntries([...Object.entries(list), ["configurationid", "DEFAULT"], ["setconfig", true]].filter(_ref => {
          let [key] = _ref;
          return !excludedBEFields.includes(key);
        }))]
      })),
      getTableConfiguration
    };
  } else if ((data === null || data === void 0 || (_data$crudlist2 = data.crudlist) === null || _data$crudlist2 === void 0 ? void 0 : _data$crudlist2.length) > 2) {
    var _data$crudlist3;
    return {
      allowconfigurations: true,
      onSave: onSave,
      tableconfiguration: data === null || data === void 0 || (_data$crudlist3 = data.crudlist) === null || _data$crudlist3 === void 0 ? void 0 : _data$crudlist3.map(list => ({
        listid: list.crudlistid,
        savedconfigs: [Object.fromEntries([...Object.entries(list), ["configurationid", "DEFAULT"], ["setconfig", true]].filter(_ref2 => {
          let [key] = _ref2;
          return !excludedBEFields.includes(key);
        }))]
      })),
      getTableConfiguration
    };
  } else return {
    allowconfigurations: false
  };
}

/* TableType.js */
function showColumn(column, listid) {
  var _column$crudlistids, _column$crudlistids2;
  return column.iscolumn && ((column === null || column === void 0 || (_column$crudlistids = column.crudlistids) === null || _column$crudlistids === void 0 ? void 0 : _column$crudlistids.some(id => id.crudlistid === listid)) || !(column !== null && column !== void 0 && column.crudlistids) || (column === null || column === void 0 || (_column$crudlistids2 = column.crudlistids) === null || _column$crudlistids2 === void 0 ? void 0 : _column$crudlistids2.length) === 0);
}
function setInitialState(listid, initialListState, configurationState, tableConfiguration, listsState, headerColor, themeState, textColor, crudfunctions) {
  var _listsState$columns;
  // console.log('----in set initial ---')
  // console.log('initialListState', initialListState)
  // console.log('tableConfiguration', tableConfiguration)
  // console.log('HELPERS.js configurationState', configurationState)
  const initialProps = {
    columns: listsState === null || listsState === void 0 || (_listsState$columns = listsState.columns) === null || _listsState$columns === void 0 || (_listsState$columns = _listsState$columns.filter(column => showColumn(column, listid))) === null || _listsState$columns === void 0 || (_listsState$columns = _listsState$columns.map(column => _objectSpread(_objectSpread({}, column), {}, {
      _width: 110,
      crudcolumnid: column.crudcolumnid.toLowerCase()
    }))) === null || _listsState$columns === void 0 ? void 0 : _listsState$columns.sort((a, b) => {
      const sequenceA = a === null || a === void 0 ? void 0 : a.sequence;
      const sequenceB = b === null || b === void 0 ? void 0 : b.sequence;
      return sequenceA - sequenceB;
    }),
    themecolor: headerColor !== null && headerColor !== void 0 ? headerColor : themeState.currentTheme.bg0,
    textcolor: textColor !== null && textColor !== void 0 ? textColor : themeState.currentTheme.text,
    buttoncolor: headerColor !== null && headerColor !== void 0 ? headerColor : themeState.currentTheme.bg0,
    crudfunctions: crudfunctions
  };
  const combinedProps = _objectSpread(_objectSpread({}, initialListState), initialProps);
  // console.log('combinedProps', combinedProps)

  if ((tableConfiguration === null || tableConfiguration === void 0 ? void 0 : tableConfiguration.tableconfiguration) != false && (configurationState === null || configurationState === void 0 ? void 0 : configurationState.tableconfiguration) != false) {
    var _tableConfiguration$t, _config$savedconfigs, _configurationState$t, _stateConfig$savedcon;
    const config = tableConfiguration === null || tableConfiguration === void 0 || (_tableConfiguration$t = tableConfiguration.tableconfiguration) === null || _tableConfiguration$t === void 0 ? void 0 : _tableConfiguration$t.filter(config => config.listid === listid && config)[0];
    // console.log('config', config)
    const currentConfig = config === null || config === void 0 || (_config$savedconfigs = config.savedconfigs) === null || _config$savedconfigs === void 0 ? void 0 : _config$savedconfigs.filter(config => (config === null || config === void 0 ? void 0 : config.setconfig) === true && config)[0];
    const stateConfig = configurationState === null || configurationState === void 0 || (_configurationState$t = configurationState.tableconfiguration) === null || _configurationState$t === void 0 ? void 0 : _configurationState$t.filter(config => config.listid === listid && config)[0];
    // console.log('config', config)
    const stateCurrentConfig = stateConfig === null || stateConfig === void 0 || (_stateConfig$savedcon = stateConfig.savedconfigs) === null || _stateConfig$savedcon === void 0 ? void 0 : _stateConfig$savedcon.filter(config => (config === null || config === void 0 ? void 0 : config.setconfig) === true && config)[0];
    // console.log(
    //   'HREE',
    //   { ...combinedProps, ...currentConfig },
    //   currentConfig,
    //   combinedProps
    // )
    return _objectSpread(_objectSpread(_objectSpread({}, combinedProps), stateCurrentConfig), currentConfig);
  } else return combinedProps;
}