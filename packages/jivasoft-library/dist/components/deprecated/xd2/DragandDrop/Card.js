"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _ = require(".");
var _react = require("react");
const Card = _ref => {
  let {
    item,
    index,
    column,
    columns,
    SelectIcon,
    handleCardPlacement,
    canMoveToOrigin
  } = _ref;
  const [fields, setFields] = (0, _react.useState)(item.fields && Object.entries(item.fields).filter(item => item[1] !== 0 && item[1] !== ''));
  (0, _react.useEffect)(() => {}, []);
  const [buttons, setButtons] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const buttonColIds = [];
    const itemCanMoveTo = [];
    if (canMoveToOrigin) {
      if (item.canmoveto) {
        !item.canmoveto.includes({
          columnsorterelementid: column.columnid
        }) && item.canmoveto.push({
          columnsorterelementid: column.columnid
        });
      } else {
        item.canmoveto = [{
          columnsorterelementid: column.columnid
        }];
      }
    }
    if (item.canmoveto && item.canmoveto.length > 0) {
      item.canmoveto.map(idItem => {
        if (!buttonColIds.includes(Object.values(idItem)[0])) {
          buttonColIds.push(Object.values(idItem)[0]);
        }
      });
      // buttonColIds.push(
      //   ...item.canmoveto.map(idItem => Object.values(idItem)[0])
      // )
    }
    if (column.canmoveto && column.canmoveto.length > 0) {
      column.canmoveto.map(idItem => {
        if (!buttonColIds.includes(Object.values(idItem)[0])) {
          buttonColIds.push(Object.values(idItem)[0]);
        }
      });
      // buttonColIds.push(
      //   ...column.canmoveto.map(idItem => Object.values(idItem)[0])
      // )
    }
    const buttonColumns = columns.filter(columnItem => buttonColIds.includes(columnItem.columnid));
    setButtons(buttonColumns);
  }, [columns]);
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_.HeaderContainer, null, /*#__PURE__*/React.createElement(_.HeaderDiv, {
    fontRem: 0.5
  }, item.header)), /*#__PURE__*/React.createElement(_.GeneralInfoDiv, {
    height: open ? 50 : 25
  }, true && /*#__PURE__*/React.createElement(_.TitleDiv, {
    fontRem: 0.5
  }, item.title), item.description && /*#__PURE__*/React.createElement(_.DescTextDiv, {
    height: open ? '100%' : '0px'
    //textOverflow={open ? 'scroll' : 'hidden'}
    ,
    fontRem: 0.4
  }, item.description), item.description && item.description.length > 35(/*#__PURE__*/React.createElement(_.ExpandDiv, {
    onClick: e => e.stopPropagation(),
    fontRem: 0.85
  }, open ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open)
  }, "Hide") : /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open)
  }, "Show Description")))), !open && false && /*#__PURE__*/React.createElement(_.WildCardDiv, null, false && /*#__PURE__*/React.createElement(_.TextWildCardDIv, null, "textwildcard"), false && /*#__PURE__*/React.createElement(_.ImageWildCardDiv, null, "imagewildcard")), fields && /*#__PURE__*/React.createElement(_.ContainerTagDiv, null, fields.map(item => {
    return item[1].defaultvalue && /*#__PURE__*/React.createElement(_.TagDiv, null, item[1].defaultvalue);
  })), item.footer && /*#__PURE__*/React.createElement(_.FooterContainer, null, /*#__PURE__*/React.createElement(_.FooterDiv, {
    fontRem: 0.5
  }, item.footer)), /*#__PURE__*/React.createElement(_.ColumnButtondDiv, {
    onClick: e => e.stopPropagation()
  }, buttons.map(buttonItem => {
    return buttonItem.columnid !== column.columnid && /*#__PURE__*/React.createElement(_.ButtonDiv, {
      onClick: e => handleCardPlacement(index, column, buttonItem, columns)
    }, /*#__PURE__*/React.createElement(SelectIcon, {
      seqNum: buttonItem.sequence
    }));
  })));
};
exports.Card = Card;