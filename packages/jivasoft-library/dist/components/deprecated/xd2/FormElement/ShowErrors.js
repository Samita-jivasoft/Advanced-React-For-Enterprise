"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowErros = ShowErros;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _Main = require("./styles/Main");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ShowErros(_ref) {
  let {
    email,
    passwordSalt
  } = _ref;
  const [remainingRequirements, setRemainingRequirements] = (0, _react.useState)('');
  const [completedRequirements, setCompletedRequirements] = (0, _react.useState)('');
  const [reqs, setReqs] = (0, _react.useState)({
    minlength: element.validminimum,
    maxlength: element.validmaximum,
    required: element.required
  });
  (0, _react.useEffect)(() => {
    if (reqs) {
      formValidation();
    }
  }, [reqs]);
  function stringContainsSpecial(string) {
    return /[^A-Z a-z0-9]/.test(string);
  }
  function stringContainsLower(str) {
    return /[a-z]/.test(str);
  }
  function stringContainsUpper(str) {
    return /[A-Z]/.test(str);
  }
  function stringContainsNumber(string) {
    return /\d/.test(string);
  }
  function formValidation() {
    const remainingRequirements = [];
    const completedRequirements = [];
    if (password.length < reqs.minlength) {
      remainingRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/_react.default.createElement("b", null, reqs.minlength + ' or more characters')));
    } else {
      completedRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.CompletedRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/_react.default.createElement("b", null, reqs.minlength + ' or more characters')));
    }
    if (!stringContainsNumber(password)) {
      remainingRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one number")));
    } else {
      completedRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.CompletedRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one number")));
    }
    if (!stringContainsSpecial(password)) {
      remainingRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null), ' ', /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one special character e.g., ! @ # ? ]")));
    } else {
      completedRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.CompletedRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null), ' ', /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one special character e.g., ! @ # ? ]")));
    }
    if (!stringContainsLower(password)) {
      remainingRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one lower case character")));
    } else {
      completedRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.CompletedRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one lower case character")));
    }
    if (!stringContainsUpper(password)) {
      remainingRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.RemainingRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one upper case character")));
    } else {
      completedRequirements.push(/*#__PURE__*/_react.default.createElement(_Main.CompletedRecsStyled, null, /*#__PURE__*/_react.default.createElement(_fa.FaCheck, null), " ", /*#__PURE__*/_react.default.createElement("b", null, "Contains at least one upper case character")));
    }
    setRemainingRequirements(remainingRequirements);
    setCompletedRequirements(completedRequirements);
  }
  return !validPasswordMessage && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, remainingRequirements), /*#__PURE__*/_react.default.createElement("div", null, completedRequirements));
}
// use effect for main parent update
(0, _react.useEffect)(() => {
  // console.log(parseFloat(DefaultValue).toFixed(2).toString())
  // console.log('Form', formElementValue)
  // const parentCopy = [...parentState]
  // console.log('parentCopy',parentCopy)
  // const index = parentCopy.findIndex(
  //   obj => obj.formelementid === formElementValue.formelementid
  // )
  // if (index !== -1) {
  //   parentCopy[index].value = formElementValue.value
  // } else {
  //   parentCopy.push(formElementValue)
  // }
  // setParentState(parentCopy)
  setParentState(state => [...state.filter(e => {
    return e.formelementid !== formElementValue.formelementid;
  }), formElementValue]);
}, [formElementValue]);
//email
// value.includes('@')
// ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character @'}</b> </CompletedRecsStyled> )
// : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character @'}</b> </RemainingRecsStyled> )

// value.includes('.')
// ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character .'}</b> </CompletedRecsStyled> )
// : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character .'}</b> </RemainingRecsStyled> )

//phone
// !value.includes('(')
// ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains opening brace ('}</b> </RemainingRecsStyled> )
// : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains opening brace ('}</b> </CompletedRecsStyled> )

// !value.includes(')')
// ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains closing brace )'}</b> </RemainingRecsStyled> )
// : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains closing brace )'}</b> </CompletedRecsStyled>  )

// value.includes(')-') && value.replace(/[^-]/g, '').length !== 2
// ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character -'}</b>  </RemainingRecsStyled> )
// : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character -'}</b> </CompletedRecsStyled>  )

// !value.includes('-')
// ? remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains special character -'}</b> </RemainingRecsStyled> ) 
// : completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains special character -'}</b> </CompletedRecsStyled>  )

// RegExp(/[^a-zA-Z]+$/).test(value)
// ?  null 
// : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Invalid characters detected'}</b> </RemainingRecsStyled> )

//money
// (validCurrency.test(value)) 
// ? completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Valid format of 0.00'}</b> </CompletedRecsStyled>  )
// : remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Valid format of 0.00'}</b> </RemainingRecsStyled> ) 

//ints
// if(isNaN(value) && value)remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains invalid characters'}</b> </RemainingRecsStyled> )
// else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains valid characters'}</b> </CompletedRecsStyled>  )

// console.log(value)
// if((value - Math.floor(value)) !== 0 || value.includes('.')) remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Value is not an Integer'}</b> </RemainingRecsStyled> )
// else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Value is an Integer'}</b> </CompletedRecsStyled>  )  

//float

// if(isNaN(value) && value)remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Contains invalid characters'}</b> </RemainingRecsStyled> )
// else completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Contains valid characters'}</b> </CompletedRecsStyled>  )

// if(value.includes('.')) completedRequirements.push( <CompletedRecsStyled> <FaCheck/> <b>{'Value is valid'}</b> </CompletedRecsStyled>  ) 
// else remainingRequirements.push( <RemainingRecsStyled> <FaTimes/> <b>{'Value is invalid'}</b> </RemainingRecsStyled> )