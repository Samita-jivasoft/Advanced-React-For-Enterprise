"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchDropdown = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _components = require("@jivasoft/jivasoft-lib/dist/components");
var _useOutsideAlerter = require("@jivasoft/jivasoft-lib/dist/app/helpers/useOutsideAlerter.js");
var _Tooltip = _interopRequireDefault(require("components/Toolbar/Tooltip"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _reactWindow = require("react-window");
var _CalendarIcon = require("./CalendarIcon");
var _Main = require("./styles/Main");
require("./styles/searchdropdown.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//import { DynamicButtonV2 } from '@jivasoft/jivasoft-lib'

const SearchDropdown = _ref => {
  let {
    list,
    data,
    setData,
    defaultValue,
    allowmultiplepicklistselections
  } = _ref;
  const [themeState] = (0, _data.useAppTheme)();
  const [mode, setMode] = (0, _react.useState)('default');
  // setNames(current => [...current, 'Carl']);
  const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
  const [showList, setShowList] = (0, _react.useState)([]);
  const [searchTerm, setSearchTerm] = (0, _react.useState)('');

  // useEffect(()=>{
  // 	console.log('data',data)
  // },[data])
  const [isMatch, setIsMatch] = (0, _react.useState)(themeState.currentTheme.dangerColor);
  function setValue(value) {
    if (data.length > 0 && allowmultiplepicklistselections) {
      if (!data.find(item => item.id === value.id)) {
        setData([...data, {
          id: value.id,
          selected: 1
        }]);
      } else {
        setData(data.filter(item => item.id !== value.id));
      }
    } else {
      setData([{
        id: value.id,
        selected: 1
      }]);
    }
    setSearchTerm('');
  }
  (0, _react.useEffect)(() => {
    const isDate = value => YYYY_MM_DD_HH_MM.test(value.label);
    if (list.length > 0) {
      // console.log(list)
      if (list.every(isDate)) {
        setMode('date');
      } else {
        setMode('default');
      }
    }
  }, [list]);
  const SelectedItem = _ref2 => {
    let {} = _ref2;
    return /*#__PURE__*/_react.default.createElement(_Main.SelectedItemStyled, null);
  };
  function getMode(item) {
    if (YYYY_MM_DD_HH_MM.test(item)) {
      return 'date';
    } else {
      return 'default';
    }
  }
  const Row = _ref3 => {
    let {
      index,
      style
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_Main.RowStyled, {
      active: active == index ? true : false,
      key: index
      // className={index == active ? 'ListItemSelected' : 'ListItem'}
      ,
      style: style,
      onMouseEnter: () => {
        setActive(index);
      },
      onClick: () => {
        // setData(data.length > 0 ? data => [...data, showList[index]] : [showList[index]]);
        setValue(showList[index]);
        // setData(showList[index])
        // setSearchTerm(showList[index].label)
        setShowList([]);
      }
    }, showList[index].label !== '' && showList[index].label, showList[index].flag && ' - ' + showList[index].flag);
  };
  const menuRef = (0, _react.useRef)(null);
  (0, _useOutsideAlerter.useOutsideAlerter)([menuRef], () => {
    if ((showList === null || showList === void 0 ? void 0 : showList.length) > 0) {
      setShowList([]);
    }
  });

  // const [data, setData] = useState('')
  const [placeholder, setPlaceholder] = (0, _react.useState)('Type to search');
  const [active, setActive] = (0, _react.useState)(0);
  function searchList(searchTerm, searchList) {
    // console.log('searching...')

    const match = searchList.filter(element => element.label.toLowerCase().includes(searchTerm.toLowerCase()));
    if (match.length > 0) {
      setIsMatch(themeState.currentTheme.successColor);
    } else {
      setIsMatch(themeState.currentTheme.dangerColor);
    }
    setShowList(match);
    if (match.length === 1) {
      // setData(match[0])
      // console.log(match[0])
      // setData(data.length > 0 ? data => [...data, match[0]] : [match[0]]);
      setValue(match[0]);
      setSearchTerm(match[0].label);
      setIsMatch(themeState.currentTheme.successColor);
      setShowList([]);
    } else {
      // setIsMatch(themeState.currentTheme.dangerColor)

      // setData([])
    }
  }
  const [noData, setNoData] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (list.length === 0) {
      setNoData(true);
    }
    // console.log('test?',defaultValue?true:false)
    if (defaultValue) {
      const defaultItem = list.filter(element => {
        return element.id == defaultValue;
      });
      if (defaultItem.length === 1) {
        // setData(defaultItem[0])
        // setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
        setValue(defaultItem[0]);
        setSearchTerm(defaultItem[0].label);
        setShowList([]);
      }
    } else {
      setData([]);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (searchTerm != '') {
      searchList(searchTerm, list);
    }
  }, [searchTerm]);
  (0, _react.useEffect)(() => {
    if (showList.length > 0) {
      setActive(0);
    }
  }, [showList]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      //	backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative'

      //	padding: 10,
      //	minWidth: 400,
    }
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    content: noData ? 'There are no selectable options' : null,
    direction: 'right'
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_Main.SearchDropdownInput, {
    type: "text",
    disabled: noData,
    onFocus: () => {
      setShowList(list);
    },
    placeholder: placeholder,
    onKeyDown: e => {
      if (e.key === 'ArrowDown') {
        if (showList.length <= 1 && searchTerm == '') {
          setShowList(list);
        }
        if (active < showList.length - 1) {
          setActive(active + 1);
        } else {
          setActive(0);
        }
        if (e.key === 'Enter') {
          setSearchTerm(showList[active]);
          // setData(showList[active])
          // setData(data.length > 0 ? data => [...data, showList[active]] : [showList[active]]);
          setValue(showList[active]);
          setShowList(showList[active]);
        }
      }
      if (e.key === 'ArrowUp') {
        if (showList.length <= 1 && searchTerm == '') {
          setShowList(list);
        }
        if (active > 0) {
          setActive(active - 1);
        } else {
          setActive(showList.length - 1);
        }
      }
      if (e.key === 'Enter' && showList[active] !== undefined) {
        // setData(showList[active])
        // setData(data.length > 0 ? data => [...data, showList[active]] : [showList[active]]);
        setValue(showList[active]);
        setSearchTerm(showList[active].label);
        setShowList(showList[active]);
      }
      if (e.key === 'Backspace') {
        // if (isMatch === themeState.currentTheme.dangerColor) {
        setSearchTerm('');
        // !allowmultiplepicklistselections && setData([])

        // }
        //setData('')
        //  setShowList(list)
      }
    },
    onChange: e => {
      setSearchTerm(e.target.value);
      if (showList.length == 0) {
        setShowList(list);
      }
    },
    value: searchTerm,
    maxLength: "60"
    // style={{
    // 	position: 'relative',
    // 	display: 'flex',
    // 	flexDirection: 'row',
    // 	alignItems: 'center',
    // 	justifyContent: 'space-between',
    // 	color: isMatch,
    // 	width: '95%',
    // 	padding: 15,
    // 	fontWeight: 'bold',
    // 	backgroundColor: themeState.currentTheme.bgb3 
    // }}
  }), showList.length > 0 ? /*#__PURE__*/_react.default.createElement(_components.DynamicButtonV2, {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, null),
    onClick: () => {
      setShowList([]);
    },
    color: themeState.currentTheme.text,
    backgroundColor: themeState.currentTheme.bga1
    // text={'Add'}
  }) : /*#__PURE__*/_react.default.createElement(_components.DynamicButtonV2, {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, null),
    onClick: () => {
      setShowList(list);
    },
    color: themeState.currentTheme.text,
    backgroundColor: themeState.currentTheme.bga1
    // text={'Add'}
  })), data.length > 0 && /*#__PURE__*/_react.default.createElement("div", null, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_Main.SelectedItemStyled, {
      key: (item === null || item === void 0 ? void 0 : item.id) + index,
      onClick: () => {
        // console.log(data.filter((listItem) => listItem.id !== item.id))
        setData(data.filter(listItem => listItem.id !== item.id));
      }
    }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
      style: {
        marginRight: 5
      }
    }), list.filter(listItem => {
      return listItem.id === item.id;
    })[0] && list.filter(listItem => {
      return listItem.id === item.id;
    })[0].label);
  }))), showList.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    ref: menuRef,
    style: {
      width: '100%',
      top: 50,
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '.8rem',
      padding: 10,
      background: themeState.currentTheme.bga2,
      color: themeState.currentTheme.text
    }
  }, "Click or Tap an item to select. ", allowmultiplepicklistselections && "You may select multiple."), mode === 'default' && /*#__PURE__*/_react.default.createElement(_Main.DropdownStyled
  // className="List"
  , {
    height: showList.length * 25 > 200 ? 200 : showList.length * 25,
    itemCount: showList.length,
    itemSize: 30
    // width={500}
  }, Row), mode === 'date' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      padding: 10,
      background: themeState.currentTheme.bga2,
      boxSizing: 'border-box',
      justifyContent: list.length <= 4 ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '4px',
      overflow: 'scroll'
    }
  }, list.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_CalendarIcon.CalendarIcon, {
      key: (item === null || item === void 0 ? void 0 : item.id) + index,
      onclick: () => {
        setValue(item);
        setShowList([]);
      },
      date: item.label
    });
  }))));
};
exports.SearchDropdown = SearchDropdown;
SearchDropdown.defaultProps = {
  list: [],
  data: '',
  setData: () => {
    console.log('I need a Set data function!');
  }
};