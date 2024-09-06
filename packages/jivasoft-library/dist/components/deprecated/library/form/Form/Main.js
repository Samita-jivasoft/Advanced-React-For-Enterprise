"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _Form = require("./styles/Form");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _Main = require("../FormElement/Main");
var _ReviewElement = require("./ReviewElement");
var _general = require("../../general");
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Form = props => {
  var _tabState, _tabState2;
  const {
    formElements,
    formLabel,
    parentState,
    setParentState,
    isReview,
    setIsReview,
    onScroll: _onScroll,
    groups
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const [form, setForm] = (0, _react.useState)(parentState ? parentState : []);
  const [reviewForm, setReviewForm] = (0, _react.useState)([]);
  const [tabState, setTabs] = (0, _react.useState)();
  const formRef = (0, _react.useRef)();
  const [selected, setSelected] = (0, _react.useState)();
  function updateForm() {
    if (isReview) {
      setReviewForm(form);
    }
  }
  (0, _react.useEffect)(() => {
    // if (isReview) {
    //   setReviewForm(form)
    // }
    if (formElements) {
      getTabs();
    }
  }, [isReview, formElements]);
  function setFormState(state) {
    setForm(state);
  }
  (0, _react.useEffect)(() => {
    if (form.length > 0) {
      if (parentState) {
        setParentState(form);
      }
    }
  }, [form]);
  function generateGroupArray() {
    let hasGroupIds = false;
    const groupsMap = new Map();
    formElements.forEach(element => {
      const groupId = element.groupid;
      if (groupId) {
        hasGroupIds = true;
        if (!groupsMap.has(groupId)) {
          groupsMap.set(groupId, {
            formid: element.formId,
            groupid: groupId,
            sequence: 0,
            required: 0,
            // you may need to adjust this based on your requirements
            requiredbygroup: []
          });
        }
      } else {
        const otherGroupId = "Other";
        if (!groupsMap.has(otherGroupId)) {
          groupsMap.set(otherGroupId, {
            formid: element.formId,
            groupid: otherGroupId,
            sequence: 1,
            required: 0,
            // you may need to adjust this based on your requirements
            requiredbygroup: []
          });
        }
      }
    });
    if (!hasGroupIds) {
      return false;
    }
    const groups = Array.from(groupsMap.values()).sort((a, b) => a.sequence - b.sequence);
    setSelected(groups[0]);
    return groups;
  }
  function getTabs() {
    // there are groups
    if ((groups === null || groups === void 0 ? void 0 : groups.length) > 0) {
      const groupedElements = {};
      for (const element of formElements) {
        const groupId = element.groupid || 'Other';
        groupedElements[groupId] = groupedElements[groupId] || [];
        groupedElements[groupId].push(element);
      }

      // Sort groups by sequence and add form elements to each group
      const sortedGroups = groups.sort((a, b) => a.sequence - b.sequence);
      const finalGroups = sortedGroups.map(group => {
        const groupId = group.groupid || 'Other';
        const formElements = groupedElements[groupId] || [];
        return _objectSpread(_objectSpread({}, group), {}, {
          formElements
        });
      });

      // Add any form elements with undefined or null group ids to new group
      const otherElements = groupedElements['Other'] || [];
      if (otherElements.length > 0) {
        const otherGroup = {
          formgroupid: 'OTHER_GROUP_ID',
          formid: 'FORM_ID',
          groupid: 'Other',
          sequence: sortedGroups.length + 1,
          required: 0,
          requiredbygroup: [],
          formElements: otherElements
        };
        finalGroups.push(otherGroup);
      }
      setSelected(finalGroups[0]);
      setTabs(finalGroups);
    } else {
      setTabs(generateGroupArray());
    }

    // return formElements?.map(item => item.groupid ?? 'Other').filter((value, index, self) => self.indexOf(value) === index)
  }
  (0, _react.useEffect)(() => {
    // setTabs(getTabs())
    window.scrollTo(0, 0);
  }, [selected]);
  (0, _react.useEffect)(() => {
    let isSubscribed = true;
    // if (formElements) {
    //   getTabs()

    // }
    return () => isSubscribed = false;
  }, [formElements]);
  const renderedForm = (0, _react.useMemo)(() => {
    if (formElements) {
      return formElements.sort((a, b) => a.sequence > b.sequence ? 1 : -1).map(element => {
        var _element$groupid$toLo, _element$groupid, _selected$groupid;
        return /*#__PURE__*/_react.default.createElement("div", {
          key: element.formelementid,
          style: {
            width: '100%',
            justifyContent: 'center',
            display: (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 0 ? ((_element$groupid$toLo = element === null || element === void 0 || (_element$groupid = element.groupid) === null || _element$groupid === void 0 ? void 0 : _element$groupid.toLowerCase()) !== null && _element$groupid$toLo !== void 0 ? _element$groupid$toLo : 'other') != (selected === null || selected === void 0 || (_selected$groupid = selected.groupid) === null || _selected$groupid === void 0 ? void 0 : _selected$groupid.toLowerCase()) ? 'none' : 'flex' : 'flex'
          }
        }, /*#__PURE__*/_react.default.createElement(_general.Element, {
          isReview: isReview,
          isEdit: !isReview,
          key: element.formelementid,
          parentState: form,
          setParentState: setFormState,
          element: element
        }));
      });
    }
  }, [formElements, isReview, selected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Form.FormStyled, {
    ref: formRef,
    onScroll: e => {
      _onScroll && _onScroll(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_Form.FormStyledHeader, null, tabState && /*#__PURE__*/_react.default.createElement(_general.Tabs, {
    selected: selected,
    setSelected: setSelected,
    groups: tabState
  }), !selected && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 10
    }
  }, formLabel ? formLabel : 'Form')), renderedForm, tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) !== (tabState === null || tabState === void 0 ? void 0 : tabState.length) - 1 && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    text: (_tabState = tabState[tabState.indexOf(selected) + 1]) !== null && _tabState !== void 0 && _tabState.groupid ? (_tabState2 = tabState[tabState.indexOf(selected) + 1]) === null || _tabState2 === void 0 || (_tabState2 = _tabState2.groupid) === null || _tabState2 === void 0 ? void 0 : _tabState2.toUpperCase() : 'Next',
    onClick: () => {
      setSelected(tabState[tabState.indexOf(selected) + 1]);
    },
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null),
    iconPosition: 'right'
  }), tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) === (tabState === null || tabState === void 0 ? void 0 : tabState.length) - 1 && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    text: 'Back',
    onClick: () => {
      setSelected(tabState[tabState.indexOf(selected) - 1]);
    },
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, null)
  }), (!formElements || formElements.length === 0) && /*#__PURE__*/_react.default.createElement("div", null, "Nothing to show")));
};
exports.Form = Form;