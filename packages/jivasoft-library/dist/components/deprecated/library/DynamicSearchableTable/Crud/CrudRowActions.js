"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrudRowActions = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DynamicButtonV = require("../../DynamicButtonV2");
var _data = require("app/data");
var _ri = require("react-icons/ri");
var _gr = require("react-icons/gr");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CrudRowActions = props => {
  const {
    list,
    row,
    crudfunctions
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  function getCrudIcon(row, action, idcolumn) {
    var Icon;
    switch (action.type) {
      case -1:
        Icon = _ri.RiDeleteBin6Line;
        break;
      case 0:
        Icon = _gr.GrDocumentUpdate;
        break;
      case 2:
        break;
      case 4:
        break;
      case 5:
        Icon = _ri.RiInboxArchiveLine;
        break;
      default:
      // body of default
    }
    return /*#__PURE__*/_react.default.createElement(Icon, {
      cursor: 'pointer',
      onClick: () => crudfunctions && crudfunctions(row, action, idcolumn)
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      // padding: '0px 0px 0px 10px',
      // width: '100%',
      justifyContent: 'end'
    }
  }, row && row.crudaction && row.crudaction.map(action => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: 'button' + list.crudlistid + action.crudactionid,
      style: {
        // border: '1px solid red',
        padding: false ? '2px 10px 2px 0px' : '0px 10px 0px 0px'
      }
    }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      text: action.label,
      backgroundColor: themeState.currentTheme.bg0,
      color: themeState.currentTheme.text,
      type: "default",
      width: 'fit-content',
      onClick: () => crudfunctions && crudfunctions(row, action, list.idcolumn)
    }));
  }), list.crudaction && list.crudaction.length > 0 && list.crudaction.map(action => {
    if (action.peritem || action.peritem === '1') return /*#__PURE__*/_react.default.createElement("div", {
      key: 'button' + list.crudlistid + action.crudactionid,
      style: {
        // border: '1px solid red',
        padding: false ? '2px 10px 2px 0px' : '0px 10px 0px 0px'
      }
    }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
      text: action.label,
      backgroundColor: themeState.currentTheme.bg0,
      color: themeState.currentTheme.text,
      type: "default",
      width: 'fit-content',
      onClick: () => crudfunctions && crudfunctions(row, action, list.idcolumn)
    }));
  }));
};
exports.CrudRowActions = CrudRowActions;