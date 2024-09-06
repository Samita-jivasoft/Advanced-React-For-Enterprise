"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickFilters = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("../data");
var _DynamicButtonV = require("../../DynamicButtonV2");
var _FilterFunctions = require("./FilterFunctions");
var _bs = require("react-icons/bs");
var _styles = require("../styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const QuickFilters = props => {
  const {
    criteria,
    setCriteria,
    quickFilters,
    setQuickFilters
  } = props;
  //tablestate from context
  const [listsState, listsDispatch] = (0, _data.useLists)();
  const [buttonColor, setButtonColor] = (0, _react.useState)(false);
  const [input, setInput] = (0, _react.useState)();
  function handleSetParent(element) {
    setInput(element);
  }
  const applyQuickFilter = filter => {
    // setButtonColor(true)
    console.log(filter);
    (0, _FilterFunctions.setFilters)(filter, input, criteria, setCriteria);
    //TODO: set table data to filter quickfilter
  };
  return quickFilters && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      alignItems: 'center'
    }
  }, listsState && listsState.columns && listsState.columns.map(i => i.quickfilter ? /*#__PURE__*/_react.default.createElement("div", {
    key: i.crudcolumnid,
    style: {
      padding: '0px 5px 5px 0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_DynamicButtonV.DynamicButtonV2, {
    backgroundColor: buttonColor ? 'dimgray' : 'whitesmoke'
    // color={themeState.currentTheme.text}
    ,
    type: "default",
    text: i.label
    // icon={<FaTimes></FaTimes>}
    ,
    onClick: () => applyQuickFilter(i),
    iconPosition: "left"
  })) : null), /*#__PURE__*/_react.default.createElement(_styles.StyledHeaderText, {
    style: {
      marginLeft: 'auto',
      cursor: 'pointer'
    },
    onClick: () => setQuickFilters(false)
  }, "Hide Filters"));
};
exports.QuickFilters = QuickFilters;