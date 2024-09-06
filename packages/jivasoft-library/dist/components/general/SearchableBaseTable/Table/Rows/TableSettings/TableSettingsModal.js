"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSettingsModal = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _AnimatedDynamicModal = require("../../../../AnimatedDynamicModal");
var _data = require("app/data");
var _data2 = require("../../../data");
var _DynamicButtonV = require("../../../../DynamicButtonV2");
var _Filtering = require("../../../Filtering");
var _Searching = require("../../../Searching");
var _helpers = require("../../helpers");
var _DesignSettings = require("./DesignSettings");
var _helpers2 = require("app/helpers");
var _styles = require("./styles");
var _ColumnSettings = require("./ColumnSettings");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableSettingsModal = props => {
  var _configurationState$t;
  const {
    tableRef
  } = props;
  //TODO: create a UI that helps user know that they can customize the table
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const [themeState] = (0, _data.useAppTheme)();
  const [listState, listDispatch] = (0, _data2.useList)();
  const [listsState, listsDispatch] = (0, _data2.useLists)();
  const [configurationState, configurationDispatch] = (0, _data2.useConfiguration)();
  const [configLabel, setConfigLabel] = (0, _react.useState)('');
  const Columns = type => {
    // console.log(type.type)
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        // border: '1px solid red',
        display: 'flex',
        width: '100%',
        // alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }
    }, listState.columns.map(column => {
      var _column$crudlistids, _column$crudlistids2;
      return (column === null || column === void 0 ? void 0 : column.iscolumn) === 1 && ((column === null || column === void 0 || (_column$crudlistids = column.crudlistids) === null || _column$crudlistids === void 0 ? void 0 : _column$crudlistids.some(id => id.crudlistid === listState.crudlistid)) || !(column !== null && column !== void 0 && column.crudlistids) || (column === null || column === void 0 || (_column$crudlistids2 = column.crudlistids) === null || _column$crudlistids2 === void 0 ? void 0 : _column$crudlistids2.length) === 0) && /*#__PURE__*/_react.default.createElement("div", {
        key: column.crudcolumnid,
        style: {
          // border: '1px solid red',
          display: 'flex',
          width: 'fit-content',
          padding: '5px 10px'
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        checked: type.type === 'search' ? listState.searchcolumns.includes(column.crudcolumnid.toLowerCase()) : type.type === 'pinned' ? column._pinned === true : type.type === 'hidden' ? column._hidden === true : false,
        onChange: () => type.type === 'search' ? (0, _helpers.HandleSelectedSearchColumns)(column.crudcolumnid.toLowerCase(), listState, listDispatch) : type.type === 'pinned' ? (0, _helpers.HandlePinnedColumn)(column.crudcolumnid, listState, listDispatch) : type.type === 'hidden' ? (0, _helpers.HandleHiddenColumn)(column.crudcolumnid, listState, listDispatch) : false
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          paddingRight: '10px'
        }
      }, column.label));
    }));
  };
  return listState.showtablesettingsmodal === 1 && /*#__PURE__*/_react.default.createElement(_AnimatedDynamicModal.AnimatedDynamicModal, {
    type: 'modal',
    headerColor: listState.themecolor,
    themeColor: listState.themecolor,
    backgroundColor: (0, _helpers2.LightenDarkenColor)(listState.themecolor, 200),
    fontColor: listState.textcolor,
    headerText: 'Table Settings: ' + listState.label
    // headerItems={}
    // bodyText={}
    // bodyDropDown={true} //if true else no drop down
    ,
    footer: configurationState.allowconfigurations === false ? 0 : 1
    // footerText='Specifies the title for the footer'
    ,
    footerItems: [/*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingRight: viewWidth < 600 ? '0px' : '10px'
      }
    }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      backgroundColor: themeState.currentTheme.dangerColor,
      color: listState.textcolor,
      type: "default",
      text: 'Delete Configuration'
      // icon={<FaPlus></FaPlus>}
      ,
      onClick: () => {
        configurationDispatch({
          type: 'DELETE_CONFIGURATION',
          currentList: listState
        });
        // console.log('listState', listState, listsState)
        listDispatch({
          type: 'CLEAR_CONFIGURATIONS',
          initialcols: listState === null || listState === void 0 ? void 0 : listState.columns
        });
      }
    })), (configurationState === null || configurationState === void 0 ? void 0 : configurationState.onSave) && /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      backgroundColor: listState.buttoncolor,
      color: listState.textcolor,
      type: "default",
      text: 'Save Changes'
      // icon={<FaPlus></FaPlus>}
      ,

      onClick: () => {
        configurationState === null || configurationState === void 0 || configurationState.onSave(configurationState === null || configurationState === void 0 ? void 0 : configurationState.tableconfiguration);
        configurationDispatch({
          type: 'UPDATE_CONFIGURATION',
          currentList: listState
        });
        listDispatch({
          type: 'SET_SHOW_TABLE_SETTINGS',
          currentTableSettings: 0
        });
      }
    })],
    dismissable: true //true, false, 1, 0
    // delay={5000} //in milliseconds
    ,
    onClose: () => listDispatch({
      type: 'SET_SHOW_TABLE_SETTINGS',
      currentTableSettings: 0
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      width: viewWidth > 750 ? '60%' : '90%',
      height: '100%'
      // display:'flex',
      // flexDirection:'column'
    }
  }, /*#__PURE__*/_react.default.createElement(_DesignSettings.DesignSettings, {
    themeColor: listState.themecolor
  }), listState.filters && /*#__PURE__*/_react.default.createElement(_styles.Settings, {
    themeColor: listState.themecolor
  }, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Filters:"), /*#__PURE__*/_react.default.createElement(_Filtering.Filters, null), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    text: 'Add Filter',
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPlus, null),
    onClick: () => {
      listDispatch({
        type: 'SET_SHOW_TABLE_SETTINGS',
        currentTableSettings: 0
      });
      listDispatch({
        type: 'SET_SHOW_FILTERS_MODAL',
        currentFiltersModal: 1
      });
    }
  })), listState.searching == 1 && /*#__PURE__*/_react.default.createElement(_styles.Settings, {
    themeColor: listState.themecolor
  }, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Default Keyword:"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
      // border: '1px solid red'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      fontWeight: 'bold',
      paddingRight: '10px'
    }
  }, "Search For"), /*#__PURE__*/_react.default.createElement(_Searching.SearchField, {
    showcaret: false
    // setCheckAll={setCheckAll}
    // setActiveColumn={setActiveColumn}
    ,
    tableRef: tableRef
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      fontWeight: 'bold',
      paddingLeft: '10px'
    }
  }, "in")), listState.searchcolumns && /*#__PURE__*/_react.default.createElement(Columns, {
    type: 'search'
  }))), /*#__PURE__*/_react.default.createElement(_ColumnSettings.ColumnSettings, null), configurationState.allowconfigurations && /*#__PURE__*/_react.default.createElement(_styles.Settings, {
    themeColor: listState.themecolor
  }, /*#__PURE__*/_react.default.createElement(_styles.SettingsHeader, null, "Configurations:"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '10px'
    }
  }, "Create new configuration with current settings"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      paddingBottom: '10px'
      // border: '1px solid red'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    value: configLabel,
    onChange: e => setConfigLabel(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    onClick: () => {
      configLabel && configurationDispatch({
        type: 'ADD_CONFIGURATION',
        currentListState: listState,
        currentConfigLabel: configLabel
      });
      configLabel && listDispatch({
        type: 'ADD_CONFIGURATION',
        currentConfigLabel: configLabel
      });
      setConfigLabel('');
    },
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaPlus, null)
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingRight: '10px'
    }
  }), configurationState === null || configurationState === void 0 || (_configurationState$t = configurationState.tableconfiguration) === null || _configurationState$t === void 0 ? void 0 : _configurationState$t.map(list => list.listid === listState.crudlistid && list.savedconfigs.map((config, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index + '_' + config.configurationlabel + '_' + listState.crudlistid,
    style: {
      paddingRight: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: config.setconfig ? themeState.currentTheme.successColorBase : listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    text: config.configurationlabel,
    onClick: () => {
      listDispatch({
        type: 'SET_CONFIGURATION',
        currentConfiguration: config
      });
      configurationDispatch({
        type: 'SET_CONFIGURATION',
        currentConfiguration: config
      });
    }
    // icon={<FaPlus></FaPlus>}
  }))))), /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: listState.buttoncolor,
    color: listState.textcolor,
    type: "default",
    text: 'Clear Configuration'
    // icon={<FaPlus />}
    ,
    onClick: () => {
      listDispatch({
        type: 'CLEAR_CONFIGURATIONS',
        initialcols: listState === null || listState === void 0 ? void 0 : listState.columns
      });
      configurationDispatch({
        type: 'CLEAR_CONFIGURATIONS',
        listid: listState === null || listState === void 0 ? void 0 : listState.crudlistid
      });
    }
  }))));
};
exports.TableSettingsModal = TableSettingsModal;