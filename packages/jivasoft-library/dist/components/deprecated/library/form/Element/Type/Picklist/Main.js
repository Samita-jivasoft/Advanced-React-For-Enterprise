"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementTypePicklist = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _data = require("app/data");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _styles = require("./styles");
require("./PickerElement.css");
var _CalendarIcon = require("../CalendarIcon");
var _general = require("../../../../general");
var _ElementContext = require("../../data/ElementContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementTypePicklist = () => {
  const [themeState] = (0, _data.useAppTheme)();
  const [elementState, elementDispatch] = (0, _ElementContext.useElement)();
  const {
    label,
    selectoptions = [],
    value,
    defaultvalue,
    allowmultiplepicklistselections,
    validmaximum,
    remainingRequirements
  } = elementState;
  const ItemsRef = (0, _react.useRef)(null);
  const [mode, setMode] = (0, _react.useState)('default');
  // setNames(current => [...current, 'Carl']);
  const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
  const [showList, setShowList] = (0, _react.useState)([]);
  const [searchTerm, setSearchTerm] = (0, _react.useState)('');
  const [isMatch, setIsMatch] = (0, _react.useState)(themeState.currentTheme.dangerColor);
  (0, _react.useEffect)(() => {
    // console.log('value:', value)
  }, [value]);
  function setValue(itemvalue) {
    if (itemvalue.length >= 1) {
      console.log("Hello2?");
      var dataObj = [];
      for (var i = 0; i < itemvalue.length; i++) {
        dataObj.push({
          id: itemvalue[i].id,
          selected: 1
        });
      }
      elementDispatch({
        type: 'SET_VALUE',
        value: dataObj
      });
    } else {
      if (value.length > 0 && allowmultiplepicklistselections === 1) {
        if (!value.find(item => item.id === itemvalue.id)) {
          elementDispatch({
            type: 'SET_VALUE',
            value: [...value, {
              id: itemvalue.id,
              selected: 1
            }]
          });
        } else {
          elementDispatch({
            type: 'SET_VALUE',
            value: value.filter(item => item.id !== itemvalue.id)
          });
        }
      } else {
        elementDispatch({
          type: 'SET_VALUE',
          value: [{
            id: itemvalue.id,
            selected: 1
          }]
        });
      }
    }
    // setSearchTerm('')
  }
  (0, _react.useEffect)(() => {
    const isDate = value => YYYY_MM_DD_HH_MM.test(value.label);
    if (selectoptions.length > 0) {
      // console.log(selectoptions)
      if (selectoptions.every(isDate)) {
        setMode('date');
      } else {
        setMode('default');
      }
    }
  }, [selectoptions]);
  (0, _react.useEffect)(() => {
    const component = ItemsRef.current;
    const handleScroll = () => {
      const componentRect = component.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const componentTop = componentRect.top + scrollTop;
      const componentBottom = componentTop + componentRect.height;
      if (componentTop < scrollTop || componentBottom > scrollTop + windowHeight) {
        const scrollOptions = {
          top: 10000,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const SelectedItems = _ref => {
    let {} = _ref;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, noData ? 'There are no options to select' : value.map((item, index) => {
      var _selectoptions$filter;
      return /*#__PURE__*/_react.default.createElement(_styles.SelectedItemStyled, {
        key: (item === null || item === void 0 ? void 0 : item.id) + index,
        onClick: e => {
          e.stopPropagation();

          // console.log(data.filter((listItem) => listItem.id !== item.id))
          // setData();
          elementDispatch({
            type: 'SET_VALUE',
            value: value.filter(listItem => listItem.id !== item.id)
          });
        }
      }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, {
        style: {
          marginRight: 5
        }
      }), selectoptions === null || selectoptions === void 0 || (_selectoptions$filter = selectoptions.filter(listItem => {
        return (listItem === null || listItem === void 0 ? void 0 : listItem.id) === (item === null || item === void 0 ? void 0 : item.id);
      })[0]) === null || _selectoptions$filter === void 0 ? void 0 : _selectoptions$filter.label);
    }));
  };
  function getMode(item) {
    if (YYYY_MM_DD_HH_MM.test(item)) {
      return 'date';
    } else {
      return 'default';
    }
  }
  const Row = _ref2 => {
    let {
      index,
      style
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_styles.RowStyled, {
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
  //TODO make this a generic helper function
  function useOutsideAlerter(ref) {
    (0, _react.useEffect)(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        // setShowList([])

        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");

          if (showList.length > 0) {
            setShowList([]);
          }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(menuRef);

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
      // setValue(match[0])
      // setSearchTerm(match[0].label)
      // setIsMatch(themeState.currentTheme.successColor)
      // setShowList([])
    } else {
      // setIsMatch(themeState.currentTheme.dangerColor)

      // setData([])
      // elementDispatch({ type: 'SET_VALUE', value: [] })
    }
  }
  const [noData, setNoData] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (noData) {
      elementDispatch({
        type: 'RESET_REQUIREMENTS'
      });
    }
  }, [noData]);
  //If there are defaultvalues, set them in the formelement
  (0, _react.useEffect)(() => {
    if (selectoptions.length === 0) {
      setNoData(true);
    }
    // console.log('test?',defaultvalue?true:false)
    if ((selectoptions === null || selectoptions === void 0 ? void 0 : selectoptions.length) > 0) {
      if (defaultvalue) {
        let newdefaultvalues = defaultvalue.split('|');
        if (newdefaultvalues.length === 1) {
          const defaultItem = selectoptions.filter(element => {
            return element.id == defaultvalue;
          });
          // setData(defaultItem[0])
          // setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
          // console.log(defaultItem[0])
          setValue(defaultItem);
          // setShowList([])
        } else {
          var dataValArray = [];
          for (var i = 0; i < newdefaultvalues.length; i++) {
            if (selectoptions.some(ele => ele.id === newdefaultvalues[i])) {
              dataValArray.push(selectoptions.find(ele => ele.id === newdefaultvalues[i]));
            }
          }
          if (allowmultiplepicklistselections) {
            setValue(dataValArray);
          } else if (!allowmultiplepicklistselections) {
            setValue(dataValArray[0]);
          }
        }
      } else {
        elementDispatch({
          type: 'SET_VALUE',
          value: []
        });
      }
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (searchTerm != '') {
      searchList(searchTerm, selectoptions);
    }
  }, [searchTerm]);
  (0, _react.useEffect)(() => {
    if (showList.length > 0) {
      setActive(0);
    }
  }, [showList]);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchContainerStyled, {
    value: value,
    remainingRequirements: remainingRequirements,
    expanded: showList.length === 0 ? false : true
  }, showList.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.DropdownButtonStyled, {
    value: value,
    onClick: e => {
      e.stopPropagation();
      setShowList(selectoptions);
    }
  }, value.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.DropDownItemsStyled, null, /*#__PURE__*/_react.default.createElement(SelectedItems, null)) : 'Select a ' + label, (selectoptions === null || selectoptions === void 0 ? void 0 : selectoptions.length) > 0 && /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, {
    style: {
      marginLeft: 5
    }
  })), showList.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.SearchContainerHeaderStyled, null, /*#__PURE__*/_react.default.createElement(_styles.PickerElementInput, {
    type: "text",
    disabled: noData,
    onFocus: () => {
      setShowList(selectoptions);
    },
    placeholder: 'Type to Search',
    onKeyDown: e => {
      if (e.key === 'ArrowDown') {
        if (showList.length <= 1 && searchTerm == '') {
          setShowList(selectoptions);
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
          setShowList([]);
        }
      }
      if (e.key === 'ArrowUp') {
        if (showList.length <= 1 && searchTerm == '') {
          setShowList(selectoptions);
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
        console.log('called here');
        setValue(showList[active]);
        setSearchTerm(showList[active].label);
        setShowList(showList[active]);
      }
      if (e.key === 'Backspace') {
        // if (isMatch === themeState.currentTheme.dangerColor) {
        // setSearchTerm('')
        // !allowmultiplepicklistselections && setData([])

        // }
        //setData('')
        //  setShowList(selectoptions)
      }
    },
    onChange: e => {
      setSearchTerm(e.target.value);
      if (showList.length == 0) {
        setShowList(selectoptions);
      }
    },
    value: searchTerm,
    maxLength: "60"
  }), /*#__PURE__*/_react.default.createElement(_general.DynamicButtonV2, {
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaChevronUp, null),
    onClick: () => {
      setShowList([]);
    },
    color: themeState.currentTheme.text
    // text={'Add'}
  })), showList.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    ref: menuRef,
    style: {
      width: '100%',
      position: 'relative',
      zIndex: 500,
      background: themeState.currentTheme.bga3,
      boxSizing: 'border-box'
    }
  }, value.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.DropDownItemsStyled, null, /*#__PURE__*/_react.default.createElement(SelectedItems, null)), mode === 'default' && /*#__PURE__*/_react.default.createElement(_styles.DropdownStyled
  // className="List"
  , {
    ref: ItemsRef,
    height: showList.length * 25 > 200 || showList.length * 25 < 100 ? 100 : showList.length * 25,
    itemCount: showList.length,
    itemSize: 30
    // width={500}
  }, Row), mode === 'date' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      padding: 10,
      background: themeState.currentTheme.bga2,
      boxSizing: 'border-box',
      justifyContent: selectoptions.length <= 4 ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '4px',
      overflow: 'scroll'
    }
  }, selectoptions.map((item, index) => {
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
// ElementTypePicklist.defaultProps = {
// 	selectoptions: [],
// 	data: '',
// 	validmaximum: 100,
// 	validMinimum: 0,
// 	setData: () => {
// 		console.log('I need a Set data function!')
// 	}
// }
exports.ElementTypePicklist = ElementTypePicklist;