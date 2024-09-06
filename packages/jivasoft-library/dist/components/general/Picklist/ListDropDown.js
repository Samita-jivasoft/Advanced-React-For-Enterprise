"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDropDown = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _data = require("app/data");
var _styles = require("./styles");
var _helpers = require("./helpers");
var _data2 = require("./data");
var _CalendarIcon = require("../Element/Type/CalendarIcon");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListDropDown = props => {
  const {
    menuRef,
    active,
    setActive,
    ItemsRef
  } = props;
  const [listState, listDispatch] = (0, _data2.useList)();
  const {
    isDisabled,
    mode,
    focus,
    showList,
    selectedItems,
    items,
    showFields,
    fieldsSeperator,
    identifier,
    allowMultipleSelections,
    allowSelections,
    onSelect,
    onClick: _onClick,
    searchKeys,
    closeOnSelected,
    onChange
  } = listState;
  const [themeState] = (0, _data.useAppTheme)();
  function getPicklistMode(mode) {
    switch (mode) {
      case 'date':
        //TODO: backlog make this work with canedit:2
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "date-picklist",
          style: {
            width: '100%',
            padding: 10,
            background: themeState.currentTheme.bga2,
            boxSizing: 'border-box',
            justifyContent: (items === null || items === void 0 ? void 0 : items.length) <= 4 ? 'center' : 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '4px',
            overflow: 'scroll'
          }
        }, items === null || items === void 0 ? void 0 : items.map((item, index) => {
          return /*#__PURE__*/_react.default.createElement(_CalendarIcon.CalendarIcon, {
            key: (item === null || item === void 0 ? void 0 : item[identifier]) + index,
            onclick: () => {
              listDispatch({
                type: 'SET_SHOW_LIST',
                items: []
              });
            },
            date: item.label
          });
        }));
      default:
        return /*#__PURE__*/_react.default.createElement(_styles.DropdownStyled, {
          className: "default-picklist-ListDropDown",
          ref: ItemsRef,
          height: (showList === null || showList === void 0 ? void 0 : showList.length) * 30 > 200 ? 200 : Math.max((showList === null || showList === void 0 ? void 0 : showList.length) * 30, 100),
          itemCount: showList === null || showList === void 0 ? void 0 : showList.length,
          itemSize: 30
          // width={500}
        }, Row);
    }
  }
  const Row = _ref => {
    let {
      index,
      style
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_styles.RowStyled, {
      active: active == index ? true : false,
      option: showList[index],
      identifier: identifier,
      key: index,
      style: style
      // onClick={showList[index].onClick}
      ,
      onMouseEnter: () => {
        setActive(index);
        // console.log(showList[index])
        if (showList[index].onMouseEnter) {
          // console.log(showList[index])
          showList[index].onMouseEnter();
        }
      },
      newitem: showList[index].newitem,
      onClick: e => {
        var _showList$index, _showList$index2, _showList$index3;
        if (onSelect && (_showList$index = showList[index]) !== null && _showList$index !== void 0 && _showList$index.advancedflag && (_showList$index2 = showList[index]) !== null && _showList$index2 !== void 0 && _showList$index2.flag) {
          // console.log('onSelect', onSelect)
          onSelect(showList[index]);
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: false
          });
        } else {
          // console.log('here')
          (0, _helpers.validateSelection)(index, listState, listDispatch);
        }
        if (_onClick) {
          _onClick(showList[index]);
        }
        if ((_showList$index3 = showList[index]) !== null && _showList$index3 !== void 0 && _showList$index3.onClick) {
          var _showList$index4;
          (_showList$index4 = showList[index]) === null || _showList$index4 === void 0 || _showList$index4.onClick();
        }
        if (closeOnSelected) {
          listDispatch({
            type: 'SET_ONFOCUS',
            focus: false
          });
        }
      }
    }, showFields.map((field, i) => {
      var _showList$index$ident;
      return showList[index][field] !== '' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, i !== 0 && !((_showList$index$ident = showList[index][identifier]) !== null && _showList$index$ident !== void 0 && _showList$index$ident.includes('unselectable')) && ' ' + fieldsSeperator + ' ', showList[index].newitem && '-------- ', showList[index][field], showList[index].newitem && ' --------', showList[index].flag && ' - ' + (0, _helpers.truncateflag)(showList[index].flag));
    }));
  };
  return !isDisabled && focus && (showList === null || showList === void 0 ? void 0 : showList.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ListContainer, {
    className: 'list-container',
    ref: menuRef
  }, getPicklistMode(mode));
};
exports.ListDropDown = ListDropDown;