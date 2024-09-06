"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var _Main = require("./styles/Main");
var _DynamicSwitcher = require("../../DynamicSwitcher");
var _fa = require("react-icons/fa");
var _helpers = require("app/helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Tabs = props => {
  const {
    groups,
    linear = false,
    setSelected,
    selected,
    form
  } = props;
  (0, _react.useEffect)(() => {
    setSelected && setSelected(groups === null || groups === void 0 ? void 0 : groups[0]);
  }, []);
  let sortedGroups = groups.sort((a, b) => {
    const sequenceA = 'sequence' in a ? a.sequence : Infinity;
    const sequenceB = 'sequence' in b ? b.sequence : Infinity;
    const isGroupAOther = a.groupid.toLowerCase() === 'other';
    const isGroupBOther = b.groupid.toLowerCase() === 'other';
    const isGroupAAdvanced = a.groupid.toLowerCase() === 'advanced settings' || a.advancedsetting === 1;
    const isGroupBAdvanced = b.groupid.toLowerCase() === 'advanced settings' || b.advancedsetting === 1;

    // Check for "Advanced Settings" and "Other" groups
    if (isGroupAAdvanced && !isGroupBAdvanced) return 1;
    if (isGroupBAdvanced && !isGroupAAdvanced) return -1;
    if (isGroupAOther && !isGroupBOther) return 1;
    if (isGroupBOther && !isGroupAOther) return -1;

    // Sort by sequence
    if (sequenceA !== sequenceB) {
      return sequenceA - sequenceB;
    }

    // If there's no sequence number, sort alphabetically by groupid
    return a.groupid.localeCompare(b.groupid);
  });
  function getGroupName(group) {
    var _group$groupid;
    if (group !== null && group !== void 0 && (_group$groupid = group.groupid) !== null && _group$groupid !== void 0 && (_group$groupid = _group$groupid.toString()) !== null && _group$groupid !== void 0 && _group$groupid.toLowerCase().includes('advanced settings') || (group === null || group === void 0 ? void 0 : group.advancedsetting) === 1) {
      return /*#__PURE__*/_react.default.createElement(_fa.FaCog, null);
    } else {
      var _capitalize, _group$groupid2, _group$groupid3;
      return (_capitalize = (0, _helpers.capitalize)(group === null || group === void 0 || (_group$groupid2 = group.groupid) === null || _group$groupid2 === void 0 ? void 0 : _group$groupid2.toString())) !== null && _capitalize !== void 0 ? _capitalize : group === null || group === void 0 || (_group$groupid3 = group.groupid) === null || _group$groupid3 === void 0 ? void 0 : _group$groupid3.toString();
    }
  }

  //check to see if the current tab has elements that are required to be filled before the user can go to other tabs
  function CheckSelect(group) {
    var selectedIndex = groups.findIndex(item => item.groupid === selected.groupid);
    var groupIndex = groups.findIndex(item => item.groupid === group.groupid);

    //loop from the current tab to the tab selected by the user
    for (var j = selectedIndex; j < groupIndex; j++) {
      //if the tab has elements that are required to be filled
      if (groups[j].requiredbygroup.length > 0) {
        var _groups$j;
        //get the elements that have the required and canedit property set to 1
        const requiredElements = (_groups$j = groups[j]) === null || _groups$j === void 0 ? void 0 : _groups$j.elements.filter(item => (item === null || item === void 0 ? void 0 : item.required) === 1 && item.canedit === 1);
        for (var i = 0; i < (requiredElements === null || requiredElements === void 0 ? void 0 : requiredElements.length); i++) {
          var _formRequiredElement$;
          //get the element individually and check if they have any requirements left and if so return
          var formRequiredElement = form.filter(item => item.id === requiredElements[i].id);
          if (((_formRequiredElement$ = formRequiredElement[0]) === null || _formRequiredElement$ === void 0 || (_formRequiredElement$ = _formRequiredElement$.remainingRequirements) === null || _formRequiredElement$ === void 0 ? void 0 : _formRequiredElement$.length) > 0) {
            return;
          }
        }
      }
    }

    //if they dont have any requirements left, change the tabs
    setSelected(group);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Main.TabsHeaderStyled, null, sortedGroups.map((group, index) => {
    return /*#__PURE__*/_react.default.createElement(_Main.TabItemStyled, {
      linear: linear,
      onClick: () => setSelected(group),
      selected: selected === group,
      key: index + (group === null || group === void 0 ? void 0 : group.groupid)
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, getGroupName(group)), /*#__PURE__*/_react.default.createElement("div", null, group.elements.filter(item => item.required === 1 && item.canedit === 1).length > 0 && form.filter(item => {
      var _item$groupid, _group$groupid4;
      return ((_item$groupid = item.groupid) === null || _item$groupid === void 0 ? void 0 : _item$groupid.toLowerCase()) === ((_group$groupid4 = group.groupid) === null || _group$groupid4 === void 0 ? void 0 : _group$groupid4.toLowerCase()) && (item === null || item === void 0 ? void 0 : item.remainingRequirements.length) > 0;
    }).length > 0 && (selected === group ? /*#__PURE__*/_react.default.createElement(_Main.RequiredBadgeStyled, {
      selected: selected === group ? true : false
    }, selected === group && group.elements.filter(item => item.required === 1 && item.canedit === 1).length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, form.filter(item => {
      var _item$groupid2, _selected$groupid;
      return ((_item$groupid2 = item.groupid) === null || _item$groupid2 === void 0 ? void 0 : _item$groupid2.toLowerCase()) === ((_selected$groupid = selected.groupid) === null || _selected$groupid === void 0 ? void 0 : _selected$groupid.toLowerCase()) && (item === null || item === void 0 ? void 0 : item.remainingRequirements.length) > 0;
    }).length) : null) : /*#__PURE__*/_react.default.createElement(_Main.RequiredAsteriskStyled, {
      shakeoffset: index
    }))), /*#__PURE__*/_react.default.createElement("div", null));
  })));
};

// Tabs.defaultProps = {
//   linear: false
// }
exports.Tabs = Tabs;