"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crud = void 0;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _TransferItems = require("./TransferItems");
var _general = require("../../../general");
var _CrudListActions = require("./CrudListActions");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Crud = props => {
  const {
    children,
    headerColor,
    bodyColor,
    textColor,
    selected
  } = props;
  const [listState, listDispatch] = (0, _data.useList)();
  const [configurationState, configurationDispatch] = (0, _data.useConfiguration)();

  //TODO: handle selected items
  const [selecteditems, setSelecteditems] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (listState !== null && listState !== void 0 && listState.crudlistitems) {
      setSelecteditems([...listState.crudlistitems.filter(row => row._selected === true)]);
    }
  }, [listState.crudlistitems]);
  const [settingsModified, setSettingsModified] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (configurationState.allowconfigurations) {
      var _configurationState$t;
      let modified = false;

      // if current table config doesn't match the current list
      if (configurationState !== null && configurationState !== void 0 && (_configurationState$t = configurationState.tableconfiguration) !== null && _configurationState$t !== void 0 && _configurationState$t.savedconfigs) {
        var _configurationState$t2;
        configurationState === null || configurationState === void 0 || (_configurationState$t2 = configurationState.tableconfiguration) === null || _configurationState$t2 === void 0 || (_configurationState$t2 = _configurationState$t2.savedconfigs) === null || _configurationState$t2 === void 0 || _configurationState$t2.map(config => {
          if (config.setconfig) {
            // check if current config is any different than listState
            for (let key in config.tableconfig) {
              if (config.tableconfig[key] !== listState[key]) {
                modified = true;
              }
            }
            // check if current columns is any different than listState
            if (JSON.stringify(listState.columns) !== JSON.stringify(config.configurationcolumns)) modified = true;
          }
        });
      }

      // // check listState against all configs available
      // configurationState.tableconfiguration.savedconfigs.map(config => {
      //   // check if current config is any different than listState
      //   for (let key in config.tableconfig) {
      //     if (config.tableconfig[key] !== listState[key]) {
      //       modified = true
      //     }
      //   }
      //   // check if current columns is any different than listState
      //   if (
      //     JSON.stringify(listState.columns) !==
      //     JSON.stringify(config.configurationcolumns)
      //   )
      //     modified = true
      // })
      // console.log(listState)

      if (modified) {
        setSettingsModified(true);
      } else {
        setSettingsModified(false);
      }
    }
  }, [listState]);
  return (listState.crudaction && listState.crudaction.length > 0 || children && children.length > 0 || selecteditems && selecteditems.length > 0) && /*#__PURE__*/_react.default.createElement(_styles.CrudActionsContainer, null, selecteditems && selecteditems.length > 0 && /*#__PURE__*/_react.default.createElement(_TransferItems.TransferItems, null), listState.crudaction && listState.crudaction.length > 0 && /*#__PURE__*/_react.default.createElement(_CrudListActions.CrudListActions, null), false && configurationState.tableconfiguration !== false && settingsModified && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    text: 'Save Table Configurations',
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    onClick: () => listDispatch({
      type: 'SET_SHOW_TABLE_SETTINGS',
      currentTableSettings: 1
    })
  }), children && children.length > 0 && children);
};
exports.Crud = Crud;