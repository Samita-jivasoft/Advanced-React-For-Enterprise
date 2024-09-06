"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailView = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _ListsContext = require("./data/ListsContext");
var _styles = require("./styles");
var _data = require("app/data");
var _Crud = require("./Crud");
var _form = require("../../form");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DetailView = props => {
  const {
    list,
    detail,
    setShowDetailView,
    measurements,
    crudfunctions
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const [listsState, listsDispatch] = (0, _ListsContext.useLists)();
  const [collapse, setCollapse] = (0, _react.useState)(false);

  // get current FormElements based on detail that changes based on row clicked
  const [formElements, setFormElements] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const formelements = [];
    // console.log(detail)
    Object.entries(detail).map(el => listsState.columns.map(f => {
      if (el[0] === f.crudcolumnid.toLowerCase() && f.iscolumn && f.formelement && f.formelement.length > 0) {
        f.formelement[0]['defaultvalue'] = el[1];
        return formelements.push(f.formelement[0]);
      }
    }));
    setFormElements(formelements);
  }, [detail]);

  // needs to be a function to rerender formElements
  function FormComponent(props) {
    return /*#__PURE__*/_react.default.createElement(_form.Form, {
      formElements: props.formElements
    });
  }
  return /*#__PURE__*/_react.default.createElement(_styles.DetailViewContainer, {
    collapse: collapse,
    style: {
      width: collapse ? measurements.width - 30 : '50%',
      height: measurements.height
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailViewContentContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailViewHeader, null, "Detail View", /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, collapse ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, {
    onClick: () => setCollapse(false),
    style: {
      cursor: 'pointer'
    }
  }) : /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, {
    onClick: () => setCollapse(true),
    style: {
      cursor: 'pointer'
    }
  }), /*#__PURE__*/_react.default.createElement(_fa.FaTimesCircle, {
    style: {
      paddingLeft: '5px',
      cursor: 'pointer'
    },
    onClick: () => setShowDetailView(false)
  }))), /*#__PURE__*/_react.default.createElement(_styles.DetailViewBody, null, /*#__PURE__*/_react.default.createElement(FormComponent, {
    formElements: formElements
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // border: '1px solid red',
      display: 'flex',
      justifyContent: 'end',
      padding: '20px 0px 5px 0px'
    }
  }, list.crudaction && list.crudaction.length > 0 && list.crudaction.map(action => action.peritem).includes(1) && /*#__PURE__*/_react.default.createElement(_Crud.CrudRowActions, {
    list: list,
    row: detail,
    crudfunctions: crudfunctions
  })))));
};
exports.DetailView = DetailView;