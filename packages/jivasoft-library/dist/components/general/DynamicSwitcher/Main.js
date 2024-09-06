"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicSwitcher = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _io = require("react-icons/io5");
var _framerMotion = require("framer-motion");
var _styles = require("./styles");
var _data = require("app/data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DynamicSwitcher = props => {
  const {
    viewWidth,
    viewHeight
  } = (0, _data.useViewport)();
  const listRef = (0, _react.useRef)([]);
  const tabsRef = (0, _react.useRef)(null);
  const {
    id,
    backgroundColor,
    labelTextColor,
    color,
    selectedColor,
    selectedTextColor,
    width,
    height = 'auto',
    items = [{
      label: 'Button',
      id: 'button',
      func: () => {
        console.log('you selected the button!');
      }
    }],
    handleParent,
    itemKey,
    defaultValue,
    column,
    onClick,
    justifyItemContent,
    unselect,
    itemHeight,
    itemWidth
  } = props;
  items.map((item, index) => {
    if (!item.hasOwnProperty('id')) {
      item.id = index; // Use index as the ID
    }
    return item;
  });
  const [selected, setSelected] = (0, _react.useState)(defaultValue ? itemKey ? items.find(x => x[itemKey] === defaultValue) : items.find(x => x.id === defaultValue) : null);
  (0, _react.useEffect)(() => {
    unselect && setSelected(null);
  }, [unselect]);
  (0, _react.useEffect)(() => {
    handleParent && handleParent(selected);
  }, [selected]);
  const [isOverflowing, setIsOverflowing] = (0, _react.useState)(false);
  const [index, setIndex] = (0, _react.useState)(0);
  const [startIndex, setStartIndex] = (0, _react.useState)(0);
  const [themeState] = (0, _data.useAppTheme)();
  (0, _react.useEffect)(() => {
    const el = tabsRef.current;
    var curOverf = el.style.overflow;
    if (!curOverf || curOverf === 'visible') el.style.overflow = 'hidden';
    if (column) {
      var overflowing = el.clientHeight < el.scrollHeight;
    } else {
      var overflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    }
    el.style.overflow = curOverf;
    setIsOverflowing(overflowing);
    const clientWidths = listRef.current.map(i => i === null || i === void 0 ? void 0 : i.clientWidth);
    const clientHeights = listRef.current.map(i => i === null || i === void 0 ? void 0 : i.clientHeight);
    let index = column ? getHiddenIndex(clientHeights, tabsRef.current.clientHeight) - 1 : getHiddenIndex(clientWidths, tabsRef.current.clientWidth);
    setIndex(index);
    setStartIndex(index);
  }, [viewWidth, viewHeight]);
  const [resetClicked, setResetClicked] = (0, _react.useState)(false);
  const [stepClicked, setStepClicked] = (0, _react.useState)(false);
  const [endOfArray, setEndOfArray] = (0, _react.useState)(false);
  const onStepClick = e => {
    var _listRef$current;
    if (index < (listRef === null || listRef === void 0 || (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.length)) {
      var _listRef$current$inde;
      listRef === null || listRef === void 0 || (_listRef$current$inde = listRef.current[index]) === null || _listRef$current$inde === void 0 || _listRef$current$inde.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
      setStepClicked(true);
      setResetClicked(false);
    }
    if (index === listRef.current.length - 1) {
      setEndOfArray(true);
    }
    setIndex(count => count + 1);
  };
  const spring = (0, _react.useMemo)(() => ({
    type: 'spring',
    stiffness: 500,
    damping: 40
  }), []);
  const [atStartOfList, setAtStartOfList] = (0, _react.useState)(false);
  const [atEndOfList, setAtEndOfList] = (0, _react.useState)(false);
  const handleScroll = () => {
    const el = tabsRef === null || tabsRef === void 0 ? void 0 : tabsRef.current;
    const atEndOfVerticalScroll = el.scrollTop + el.clientHeight >= el.scrollHeight;
    const atEndOfHorizontalScroll = el.scrollLeft + el.clientWidth >= el.scrollWidth;
    setAtEndOfList(column ? atEndOfVerticalScroll : atEndOfHorizontalScroll);
    setAtStartOfList(column ? el.scrollTop > 0 : el.scrollLeft > 0);
  };
  const ResetIcon = column ? _io.IoCaretUp : _io.IoCaretBack;
  const StepIcon = column ? _io.IoCaretDown : _io.IoCaretForward;
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    id: id,
    backgroundColor: backgroundColor,
    labelTextColor: labelTextColor,
    color: color,
    width: width,
    height: height,
    column: column
  }, (isOverflowing && stepClicked && !resetClicked || atStartOfList) && /*#__PURE__*/_react.default.createElement(ResetIcon, {
    onClick: e => {
      var _listRef$current$;
      listRef === null || listRef === void 0 || (_listRef$current$ = listRef.current[0]) === null || _listRef$current$ === void 0 || _listRef$current$.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      setResetClicked(true);
      setAtStartOfList(true);
      setEndOfArray(false);
      setIndex(startIndex);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.StyledUnorderedList, {
    ref: tabsRef,
    check: isOverflowing,
    column: column,
    onScroll: handleScroll,
    style: {
      scrollPaddingRight: !column ? index === startIndex ? '15px' : null : null,
      scrollPaddingBottom: column ? index === startIndex ? '10px' : null : null
    }
  }, items.map((item, index) => {
    var _item$width, _item$height, _item$height2;
    return /*#__PURE__*/_react.default.createElement(_styles.StyledListItem, {
      key: itemKey ? item[itemKey] : item.id,
      ref: _ref => listRef.current[index] = _ref,
      color: color,
      column: column,
      selectedColor: selectedColor,
      onClick: () => {
        if (unselect && (itemKey ? item[itemKey] === selected[itemKey] : (item === null || item === void 0 ? void 0 : item.id) === (selected === null || selected === void 0 ? void 0 : selected.id))) setSelected(null);else setSelected(item);
      }
    }, selected && (itemKey ? selected[itemKey] === item[itemKey] : selected.id === item.id) && /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      key: itemKey ? item[itemKey] : item.id
      // layout
      ,
      layoutId: "outline",
      style: {
        // border: '1px solid red',
        position: 'absolute',
        width: '100%',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        borderRadius: '2px',
        background: selectedColor ? selectedColor === 'none' ? null : selectedColor : themeState.currentTheme.bgb1
      },
      initial: false,
      transition: spring
    }), /*#__PURE__*/_react.default.createElement(_styles.Item, {
      themeColor: selectedColor,
      color: color,
      itemWidth: (_item$width = item === null || item === void 0 ? void 0 : item.width) !== null && _item$width !== void 0 ? _item$width : itemWidth,
      itemHeight: (_item$height = item === null || item === void 0 ? void 0 : item.height) !== null && _item$height !== void 0 ? _item$height : itemHeight,
      onClick: item.func,
      item: item,
      selected: selected,
      column: column
    }, item.icon && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        // border: '1px solid red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: item.label && ((_item$height2 = item === null || item === void 0 ? void 0 : item.height) !== null && _item$height2 !== void 0 ? _item$height2 : itemHeight),
        height: '100%'
        // padding: '1.5px'
      }
    }, item.icon), item.label && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        paddingLeft: item.icon ? '3px' : null,
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, item.label)));
  })), isOverflowing && !endOfArray && !atEndOfList && /*#__PURE__*/_react.default.createElement(StepIcon, {
    onClick: e => onStepClick(e)
  }));
};

// DynamicSwitcher.defaultProps = {
//   // color: 'white',
//   // selectedColor: 'green',
//   height: 'auto',
//   items: [
//     {
//       label: 'Button',
//       id: 'button',
//       func: () => {
//         console.log('you selected the button!')
//       }
//     }
//   ]
// }
exports.DynamicSwitcher = DynamicSwitcher;
function getHiddenIndex(clientSizesArray, initialViewSize) {
  var hidden,
    sum = 0;
  clientSizesArray.some(function (a, i) {
    hidden = i;
    if (sum + a > initialViewSize) {
      return true;
    }
    sum += a;
  });
  return hidden;
}