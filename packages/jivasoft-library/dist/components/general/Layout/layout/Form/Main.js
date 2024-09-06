"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _Form = require("./styles/Form");
var _react = _interopRequireWildcard(require("react"));
var _data = require("app/data");
var _general = require("../../../../general");
var _fa = require("react-icons/fa");
var _data2 = require("../../data");
var _helpers = require("app/helpers");
var _data3 = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Form = props => {
  const {
    formElements,
    elements,
    formLabel,
    onClose,
    label,
    parentState,
    setParentState,
    isReview,
    setIsReview,
    onScroll: _onScroll,
    groups,
    children,
    actions
  } = props;
  const [themeState] = (0, _data.useAppTheme)();
  const {
    viewWidth
  } = (0, _data.useViewport)();
  const [formState, formDispatch] = (0, _data3.useForm)();
  // console.log('formState', formState)

  const [form, setForm] = (0, _react.useState)(parentState ? parentState : []);
  // useEffect(() => {
  //   setForm(form)
  // }, [form])
  const [reviewForm, setReviewForm] = (0, _react.useState)([]);
  const [tabState, setTabs] = (0, _react.useState)();
  const formRef = (0, _react.useRef)();
  const [selected, setSelected] = (0, _react.useState)();
  const [layoutState] = (0, _data2.useLayout)();
  const {
    layout
  } = layoutState;
  // console.log('layoutState', layoutState)
  //reconciling inconsistent prop names accross layout types
  let layoutlabel = formLabel || label;
  function updateForm() {
    if (isReview) {
      setReviewForm(form);
    }
  }
  const navref = (0, _react.useRef)(null);

  // State to track visibility
  const [isAtBottom, setIsAtBottom] = (0, _react.useState)(false);
  const scrollDown = () => {
    const scrollableView = document.getElementById('form-nav');
    if (scrollableView) {
      scrollableView.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }
  };
  const handleScroll = e => {
    const element = e.target;
    const margin = 10; // Adjust the margin as needed

    const isAtBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= margin;
    if (isAtBottom) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };
  (0, _react.useEffect)(() => {
    // if (isReview) {
    //   setReviewForm(form)
    // }
    if (elements) {
      getTabs();
    }
  }, [isReview, elements, groups]);
  (0, _react.useEffect)(() => {
    // console.log('---------- FORM UPDATE ----------')
    // form.map(el => {
    //   console.log(el.label, '- value:', el.value, 'default:', el.defaultvalue)
    // })
    if (form.length > 0) {
      if (parentState) {
        setParentState(form);
      }
    }
  }, [form]);
  function generateGroupArray() {
    // console.log('in generateGroupArray')
    let hasGroupIds = false;
    const groupsMap = new Map();
    elements.forEach(element => {
      var _element$groupid;
      const groupId = (_element$groupid = element.groupid) === null || _element$groupid === void 0 ? void 0 : _element$groupid.toLowerCase();
      const sequence = element.sequence;
      const required = element.required;
      if (groupId) {
        hasGroupIds = true;
        if (!groupsMap.has(groupId)) {
          groupsMap.set(groupId, {
            formid: element.formId,
            groupid: groupId,
            sequence: sequence,
            required: required,
            // you may need to adjust this based on your requirements
            requiredbygroup: [],
            elements: [element] // Initialize with the current element
          });
        } else {
          // Append the current element to the existing list
          groupsMap.get(groupId).elements.push(element);
        }
      } else {
        const otherGroupId = 'other';
        if (!groupsMap.has(otherGroupId)) {
          groupsMap.set(otherGroupId, {
            formid: element.formId,
            groupid: otherGroupId,
            sequence: sequence,
            required: required,
            // you may need to adjust this based on your requirements
            requiredbygroup: [],
            elements: [element] // Initialize with the current element
          });
        } else {
          // Append the current element to the existing list
          groupsMap.get(otherGroupId).elements.push(element);
        }
      }
    });
    if (!hasGroupIds) {
      return false;
    }
    const groups = Array.from(groupsMap.values()).sort((a, b) => a.sequence - b.sequence);
    setSelected(groups[0]);
    // console.log('groups', groups)
    return groups;
  }
  function getTabs() {
    // console.log('in getTabs groups', groups)
    if ((groups === null || groups === void 0 ? void 0 : groups.length) > 0) {
      var _groupedElements$othe;
      const groupedElements = {};
      // Group elements, including hidden ones
      for (const element of form) {
        var _element$groupid2;
        const groupId = ((_element$groupid2 = element.groupid) === null || _element$groupid2 === void 0 ? void 0 : _element$groupid2.toLowerCase()) || 'other';
        groupedElements[groupId] = groupedElements[groupId] || [];
        groupedElements[groupId].push(element);
      }
      const sortedGroups = groups.sort((a, b) => a.sequence - b.sequence);
      const finalGroups = sortedGroups.reduce((acc, group) => {
        var _group$groupid;
        const groupId = ((_group$groupid = group.groupid) === null || _group$groupid === void 0 ? void 0 : _group$groupid.toLowerCase()) || 'other';
        const elements = groupedElements[groupId] || [];

        // Check if not all elements in the group are hidden
        const hasVisibleElements = elements.some(element => element.hidden !== 1);
        if (hasVisibleElements) {
          acc.push(_objectSpread(_objectSpread({}, group), {}, {
            elements
          }));
        }
        return acc;
      }, []);

      // Handle "other" group, if not all elements are hidden
      if ((_groupedElements$othe = groupedElements['other']) !== null && _groupedElements$othe !== void 0 && _groupedElements$othe.some(element => element.hidden !== 1)) {
        const otherElements = groupedElements['other'];
        const otherGroup = {
          formgroupid: 'OTHER_GROUP_ID',
          formid: 'FORM_ID',
          groupid: 'Other',
          sequence: finalGroups.length + 1,
          required: 0,
          requiredbygroup: [],
          elements: otherElements
        };
        finalGroups.push(otherGroup);
      }

      // Update states based on finalGroups content
      if (finalGroups.length > 0) {
        setSelected(finalGroups[0]);
        setTabs(finalGroups);
      } else {
        setTabs(generateGroupArray()); // Fallback if no visible groups
      }
    } else {
      setTabs(generateGroupArray());
    }
  }
  (0, _react.useEffect)(() => {
    // setTabs(getTabs())
    // window.scrollTo(0, 0)
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end'
      });
    }
    if (!isAtBottom) {
      setIsAtBottom(true);
    }
  }, [selected]);
  (0, _react.useEffect)(() => {
    let isSubscribed = true;
    // if (elements) {
    //   getTabs()

    // }
    return () => isSubscribed = false;
  }, [elements]);
  const renderedForm = (0, _react.useMemo)(() => {
    // console.log('chagned form', form)
    // console.log('in renderedForm form', form)
    // console.log('in renderedForm elements', elements)
    // console.log(formState.length > 0 ? 'formState' : 'elements')
    if (elements) {
      var _elements$sort;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        ref: formRef
      }), (_elements$sort = elements.sort((a, b) => (a === null || a === void 0 ? void 0 : a.sequence) > (b === null || b === void 0 ? void 0 : b.sequence) ? 1 : -1)) === null || _elements$sort === void 0 ? void 0 : _elements$sort.map(element => {
        var _element$id, _element$groupid$toSt, _element$groupid3, _selected$groupid, _element$id2;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "ELEMENT",
          key: (_element$id = element === null || element === void 0 ? void 0 : element.id) !== null && _element$id !== void 0 ? _element$id : element === null || element === void 0 ? void 0 : element.formelementid,
          style: {
            width: '100%',
            justifyContent: 'center',
            display: (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 0 ? ((_element$groupid$toSt = element === null || element === void 0 || (_element$groupid3 = element.groupid) === null || _element$groupid3 === void 0 || (_element$groupid3 = _element$groupid3.toString()) === null || _element$groupid3 === void 0 ? void 0 : _element$groupid3.toLowerCase()) !== null && _element$groupid$toSt !== void 0 ? _element$groupid$toSt : 'other') != (selected === null || selected === void 0 || (_selected$groupid = selected.groupid) === null || _selected$groupid === void 0 || (_selected$groupid = _selected$groupid.toString()) === null || _selected$groupid === void 0 ? void 0 : _selected$groupid.toLowerCase()) ? 'none' : 'flex' : 'flex'
          }
        }, /*#__PURE__*/_react.default.createElement(_general.Element, {
          isReview: isReview,
          isEdit: !isReview,
          key: (_element$id2 = element === null || element === void 0 ? void 0 : element.id) !== null && _element$id2 !== void 0 ? _element$id2 : element === null || element === void 0 ? void 0 : element.formelementid,
          parentState: form,
          setParentState: state => {
            // console.log('STATE', typeof state, state)
            if (typeof state == 'object') {
              // console.log(state)
              formDispatch({
                type: 'SET_ELEMENTS',
                elements: state
              });
            }
            setForm(state);
          },
          element: element
        }));
      }));
    }
  }, [elements, formElements, isReview, selected, actions, form]);
  const FormNavigation = (0, _react.useMemo)(() => {
    var _themeState$currentTh, _tabState, _formatToSentenceCase, _tabState2, _tabState3, _formatToSentenceCase2, _tabState4, _themeState$currentTh2;
    return /*#__PURE__*/_react.default.createElement(_Form.FormNavigationStyled, {
      id: 'form-nav',
      ref: navref,
      key: (tabState === null || tabState === void 0 ? void 0 : tabState.length) + (selected === null || selected === void 0 ? void 0 : selected.groupid)
    }, tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) > 0 && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
      backgroundColor: themeState === null || themeState === void 0 || (_themeState$currentTh = themeState.currentTheme) === null || _themeState$currentTh === void 0 ? void 0 : _themeState$currentTh.bg0,
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, null),
      text: viewWidth > 600 && (_tabState = tabState[tabState.indexOf(selected) - 1]) !== null && _tabState !== void 0 && _tabState.groupid ? (_formatToSentenceCase = (0, _helpers.formatToSentenceCase)((_tabState2 = tabState[tabState.indexOf(selected) - 1]) === null || _tabState2 === void 0 ? void 0 : _tabState2.groupid)) === null || _formatToSentenceCase === void 0 ? void 0 : _formatToSentenceCase.slice(0, -1) : 'Back',
      onClick: () => {
        setSelected(tabState[tabState.indexOf(selected) - 1]);
      }
    }), tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) !== (tabState === null || tabState === void 0 ? void 0 : tabState.length) - 1 && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
      iconPosition: 'right',
      onClick: () => {
        setSelected(tabState[tabState.indexOf(selected) + 1]);
      },
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, {
        className: 'next'
      }),
      text: viewWidth > 600 && (_tabState3 = tabState[tabState.indexOf(selected) + 1]) !== null && _tabState3 !== void 0 && _tabState3.groupid ? (_formatToSentenceCase2 = (0, _helpers.formatToSentenceCase)((_tabState4 = tabState[tabState.indexOf(selected) + 1]) === null || _tabState4 === void 0 ? void 0 : _tabState4.groupid)) === null || _formatToSentenceCase2 === void 0 ? void 0 : _formatToSentenceCase2.slice(0, -1) : 'Next',
      backgroundColor: themeState === null || themeState === void 0 || (_themeState$currentTh2 = themeState.currentTheme) === null || _themeState$currentTh2 === void 0 ? void 0 : _themeState$currentTh2.bg0
    }), ((tabState === null || tabState === void 0 ? void 0 : tabState.length) > 0 && (tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) === (tabState === null || tabState === void 0 ? void 0 : tabState.length) - 1 || !tabState) && (actions === null || actions === void 0 ? void 0 : actions.map(action => {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginRight: 5
        }
      }, action);
    })));
  }, [tabState, selected, actions]);
  const FormStepper = () => {
    return /*#__PURE__*/_react.default.createElement(_Form.FormStepperStyled, null, tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
      color: themeState.currentTheme.text,
      onClick: () => {
        if ((tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) > 0) {
          setSelected(tabState[tabState.indexOf(selected) - 1]);
        }
      },
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronLeft, null)
    }), tabState && (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2
    // Conditionally applying a glowing style
    , {
      color: themeState.currentTheme.text,
      onClick: () => {
        if ((tabState === null || tabState === void 0 ? void 0 : tabState.indexOf(selected)) < (tabState === null || tabState === void 0 ? void 0 : tabState.length) - 1) {
          setSelected(tabState[tabState.indexOf(selected) + 1]);
        }
      },
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null)
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, layout !== 'message' && /*#__PURE__*/_react.default.createElement(_Form.FormStyledHeader, {
    tabstate: tabState === null || tabState === void 0 ? void 0 : tabState.length,
    className: "HEADER"
  }, tabState && /*#__PURE__*/_react.default.createElement(_general.Tabs, {
    selected: selected,
    setSelected: setSelected,
    groups: tabState,
    form: form
  }), layoutlabel && !selected && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 10
    }
  }, layoutlabel ? layoutlabel : null), (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && /*#__PURE__*/_react.default.createElement(FormStepper, null), onClose && /*#__PURE__*/_react.default.createElement(_Form.CloseIconStyled, null, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    onClick: () => {
      onClose && onClose();
    },
    type: 'circle',
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null)
  }))), /*#__PURE__*/_react.default.createElement(_Form.FormStyled, {
    index: 0,
    key: 0,
    onSubmit: e => e.preventDefault(),
    className: "FORM",
    onScroll: e => {
      _onScroll && _onScroll(e);
      handleScroll(e);
    }
  }, layout === 'message' && /*#__PURE__*/_react.default.createElement(_Form.FormStyledHeader, {
    layout: layout,
    className: "HEADER"
  }, layoutlabel && !selected && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 10
    }
  }, layoutlabel ? layoutlabel : null), onClose && /*#__PURE__*/_react.default.createElement(_Form.CloseIconStyled, null, /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    onClick: () => {
      onClose && onClose();
    },
    type: 'circle',
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null)
  }))), renderedForm, !children && (!elements || elements.length === 0) && /*#__PURE__*/_react.default.createElement("div", null, "Nothing to show"), children, (tabState === null || tabState === void 0 ? void 0 : tabState.length) > 1 && FormNavigation), !isAtBottom && /*#__PURE__*/_react.default.createElement(_Form.ScrollDownStyled, {
    className: "scroll-to-top",
    onClick: scrollDown
  }, /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, null)));
};
exports.Form = Form;