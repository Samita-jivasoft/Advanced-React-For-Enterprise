"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortElement = SortElement;
exports.searchSort = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// returns sorted array in accending or decending order
function SortElement(sortBy, a, b) {
  var _a$sortBy$key, _b$sortBy$key, _a$sortBy$key2, _b$sortBy$key2;
  const order = (sortBy === null || sortBy === void 0 ? void 0 : sortBy.order) === 'asc' ? 1 : -1;
  if (sortBy !== null && sortBy !== void 0 && sortBy.key) {
    var _sortBy$column;
    if (sortBy !== null && sortBy !== void 0 && (_sortBy$column = sortBy.column) !== null && _sortBy$column !== void 0 && _sortBy$column.formelement) {
      var _sortBy$column2;
      // console.log(sortBy?.column.title, sortBy?.column?.formelement[0]?.datatype)
      switch (sortBy === null || sortBy === void 0 || (_sortBy$column2 = sortBy.column) === null || _sortBy$column2 === void 0 || (_sortBy$column2 = _sortBy$column2.formelement[0]) === null || _sortBy$column2 === void 0 ? void 0 : _sortBy$column2.datatype) {
        case 'datetime':
        case 'date':
        case 'time':
          return a[sortBy.key] && b[sortBy.key] ? new Date(a[sortBy.key]).getTime() > new Date(b[sortBy.key]).getTime() ? order : -order : 0;
        case 'int':
        case 'integer':
        case 'number':
          const intA = parseInt(a[sortBy.key]) || 0;
          const intB = parseInt(b[sortBy.key]) || 0;
          return intA > intB ? order : intA < intB ? -order : 0;
        case 'money':
          const moneyA = parseFloat(((_a$sortBy$key = a[sortBy.key]) === null || _a$sortBy$key === void 0 ? void 0 : _a$sortBy$key.replace(/\$/g, '')) || 0);
          const moneyB = parseFloat(((_b$sortBy$key = b[sortBy.key]) === null || _b$sortBy$key === void 0 ? void 0 : _b$sortBy$key.replace(/\$/g, '')) || 0);
          return moneyA > moneyB ? order : moneyA < moneyB ? -order : 0;
        default:
          // Handle sorting strings that might contain money values with '$'
          const valueA = (_a$sortBy$key2 = a[sortBy.key]) === null || _a$sortBy$key2 === void 0 ? void 0 : _a$sortBy$key2.toString();
          const valueB = (_b$sortBy$key2 = b[sortBy.key]) === null || _b$sortBy$key2 === void 0 ? void 0 : _b$sortBy$key2.toString();
          const hasDollarSignA = valueA === null || valueA === void 0 ? void 0 : valueA.includes('$');
          const hasDollarSignB = valueB === null || valueB === void 0 ? void 0 : valueB.includes('$');
          if (hasDollarSignA || hasDollarSignB) {
            const moneyA = parseFloat((valueA === null || valueA === void 0 ? void 0 : valueA.replace(/\$/g, '')) || 0);
            const moneyB = parseFloat((valueB === null || valueB === void 0 ? void 0 : valueB.replace(/\$/g, '')) || 0);
            return moneyA > moneyB ? order : moneyA < moneyB ? -order : 0;
          }
          return valueA > valueB ? order : valueA < valueB ? -order : 0;
      }
    } else {
      return a[sortBy.key] && b[sortBy.key] ? a[sortBy.key] > b[sortBy.key] ? order : -order : 0;
    }
  } else {
    return 0;
  }
}

// returns sorted array based on value
const searchSort = (array, searchColumns, value, sortInfo) => {
  // console.log('initi', array, searchColumns, value, sortInfo)
  function results(res) {
    return array.map(row => {
      const isMatch = searchColumns.some(column => {
        var _row$column;
        return (_row$column = row[column]) === null || _row$column === void 0 || (_row$column = _row$column.toString()) === null || _row$column === void 0 || (_row$column = _row$column.toLowerCase()) === null || _row$column === void 0 ? void 0 : _row$column.includes(value === null || value === void 0 ? void 0 : value.toLowerCase());
      }) || value == '';
      return _objectSpread(_objectSpread({}, row), {}, {
        _searchresult: isMatch ? true : false
      });
    }).filter(row => res && row._searchresult || !res && !row._searchresult);
  }
  const searchResults = results(1).sort((a, b) => SortElement(sortInfo, a, b));
  const exclude = results(0).sort((a, b) => SortElement(sortInfo, a, b));
  return [searchResults, exclude];
};
exports.searchSort = searchSort;