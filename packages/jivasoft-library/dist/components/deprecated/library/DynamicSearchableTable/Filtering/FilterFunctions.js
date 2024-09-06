"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterData = filterData;
exports.setFilters = setFilters;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function filterData(filters, array) {
  const arr = array;
  var matchesFilter,
    matches = [],
    count;
  matchesFilter = function matchesFilter(item) {
    count = 0;
    for (var n = 0; n < filters.length; n++) {
      /* case sensative, match exactly and no blanks
          filters[n]['Values']
          .toString()
          .toLowerCase()
          .indexOf(item[filters[n]['Field'].toLowerCase()]) >
          -1 &&
          item[filters[n]['Field'].toLowerCase()] !== ''
       */

      // console.log('filters', filters[n]['Field'].toLowerCase())
      // console.log('values', filters[n]['Values'])
      // console.log('search string', item[filters[n]['Field'].toLowerCase()])
      // console.log(
      //   item[filters[n]['Field'].toLowerCase()]
      //     .toString()
      //     .toLowerCase()
      //     .includes(filters[n]['Values']) === true &&
      //     item[filters[n]['Field'].toLowerCase()] !== ''
      // )

      if (item[filters[n]['Field'].toLowerCase()].toString().toLowerCase().includes(filters[n]['Values']) === true && item[filters[n]['Field'].toLowerCase()] !== '') {
        count++;
      }
    }
    return count == filters.length;
  };
  // Loop through each item in the array
  for (var i = 0; i < arr.length; i++) {
    // Determine if the current item matches the filter criteria
    // console.log(arr[i])
    if (matchesFilter(arr[i])) {
      matches.push(arr[i]);
    }
  }
  // Give us a new array containing the objects matching the filter criteria
  return matches;
}
function setFilters(filter, input, criteria, setCriteria) {
  // console.log('filter', filter)
  // console.log('input', input)
  // console.log('criteria', criteria)
  // console.log(
  //   'here',
  //   criteria.some(
  //     obj =>
  //       obj.Field === filter.crudcolumnid &&
  //       obj.Values.includes(input[input.length - 1].value) &&
  //       obj.Label === filter.label
  //   )
  // )
  // if field already exists add value to Values list
  if (criteria.some(item => item.Field === filter.crudcolumnid)) {
    // if value doesn't already exist add it to values list else do nothing
    if (!criteria.some(item => item.Values.toLowerCase().includes(input[input.length - 1].value.toString().toLowerCase()))) {
      const field = criteria.filter(item => item.Field === filter.crudcolumnid);
      const fieldIndex = criteria.findIndex(e => e.Field === filter.crudcolumnid);
      let newArray = [...criteria];
      newArray[fieldIndex] = _objectSpread(_objectSpread({}, newArray[fieldIndex]), {}, {
        Values: field[0].Values.concat(input[input.length - 1].value.toString())
      });
      setCriteria(newArray);
    }
  } else {
    // else if field doesn't exsist add new field and value to filter
    // console.log('here?')
    setCriteria([...criteria, {
      Field: filter.crudcolumnid,
      Values: [input[input.length - 1].value.toString()],
      Label: filter.label
    }]);
    // console.log('not already in creteria')
  }
  console.log('filter added');
}