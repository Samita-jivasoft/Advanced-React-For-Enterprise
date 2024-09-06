"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterData = filterData;
exports.getItems = getItems;
exports.removeFilter = removeFilter;
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
function getItems(listState) {
  return (listState.columns || []).map(_ref => {
    let {
      id,
      crudcolumnid,
      formelement,
      formelementid,
      crudid,
      iscolumn,
      isfilter,
      label
    } = _ref;
    return {
      id,
      crudcolumnid,
      formelement: [_objectSpread(_objectSpread({}, formelement[0]), {}, {
        required: 0,
        canedit: 1
      })],
      formelementid,
      crudid,
      iscolumn,
      isfilter,
      label,
      required: 0
    };
  }).filter(_ref2 => {
    let {
      isfilter
    } = _ref2;
    return isfilter;
  });
}
function filterData(filters, array) {
  const arr = array;
  var matchesFilter,
    matches = [],
    notMatches = [],
    count;
  matchesFilter = function matchesFilter(item) {
    count = 0;
    // console.log(filters)
    for (var n = 0; n < (filters === null || filters === void 0 ? void 0 : filters.length); n++) {
      // console.log(
      //   'searchString - ',
      //   item[filters[n]['Field'].toLowerCase()].toString().toLowerCase()
      // )
      // console.log('searchvalues - ', filters[n]['Values'])
      if (filters[n]['Values'].some(value => item[filters[n]['Field'].toLowerCase()].toString().toLowerCase().includes(value.toLowerCase())) === true && item[filters[n]['Field'].toLowerCase()] !== '') {
        count++;
      }
    }
    return count == (filters === null || filters === void 0 ? void 0 : filters.length);
  };
  // Loop through each item in the array
  for (var i = 0; i < (arr === null || arr === void 0 ? void 0 : arr.length); i++) {
    // Determine if the current item matches the filter filters
    // console.log(arr[i])
    if (matchesFilter(arr[i])) {
      matches.push(arr[i]);
    } else {
      notMatches.push(arr[i]);
    }
  }
  // Give us a new array containing the objects matching the filter filters
  return matches;
}
function setFilters(listState, listDispatch, filter, value) {
  var _filter$formelement$, _filter$formelement$2;
  // console.log('filter', filter)
  let input = value;
  // console.log('input', input, input.split('T'))
  // console.log(filter)
  if ((filter === null || filter === void 0 || (_filter$formelement$ = filter.formelement[0]) === null || _filter$formelement$ === void 0 ? void 0 : _filter$formelement$.datatype) === 'datetime') {
    input = value;
  }
  if ((filter === null || filter === void 0 || (_filter$formelement$2 = filter.formelement[0]) === null || _filter$formelement$2 === void 0 ? void 0 : _filter$formelement$2.masktype) === 'date') {
    input = value.split('T')[0];
  }

  // if field already exists add value to Values list
  if (listState.filters.some(item => item.Field === filter.crudcolumnid)) {
    // if value doesn't already exist add it to values list else do nothing
    if (!listState.filters.some(item => item.Values.includes(input.toString().toLowerCase()))) {
      const field = listState.filters.filter(item => item.Field === filter.crudcolumnid);
      const fieldIndex = listState.filters.findIndex(e => e.Field === filter.crudcolumnid);
      let newArray = [...listState.filters];
      newArray[fieldIndex] = _objectSpread(_objectSpread({}, newArray[fieldIndex]), {}, {
        Values: field[0].Values.concat(input.toString())
      });
      listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: newArray,
        currentSearchColumns: listState.searchcolumns,
        currentSearchInput: listState.searchinput,
        currentSearchingState: listState.searching
      });
    }
  } else {
    // else if field doesn't exsist add new field and value to filter
    const newFilters = [...listState.filters, {
      Field: filter.crudcolumnid,
      Values: [input.toString()],
      Label: filter.label
    }];
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newFilters,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    });
    // console.log('not already in creteria')
  }
  // console.log('filter added')
}
function removeFilter(filter, value, listState, listDispatch) {
  var _newValues;
  const id = filter.Field;
  let newValues;
  listState && listState.filters && listState.filters.map(item => {
    if (item.Field === id) {
      newValues = item.Values.filter(val => val !== value);
    }
  });

  // console.log(filter, value)
  // console.log(newValues)
  //if there are no values for the field just remove obj
  if (((_newValues = newValues) === null || _newValues === void 0 ? void 0 : _newValues.length) === 0) {
    const newFilters = listState.filters.filter(field => field.Field !== id);
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newFilters,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    });
  } else {
    // set new values
    let newArray = [...listState.filters];
    // get matching field
    const fieldIndex = listState.filters.findIndex(item => item.Field === id);
    // update values for that field
    newArray[fieldIndex] = _objectSpread(_objectSpread({}, newArray[fieldIndex]), {}, {
      Values: newValues
    });
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newArray,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    });
  }
}