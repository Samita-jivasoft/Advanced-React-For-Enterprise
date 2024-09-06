"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialLists = void 0;
exports.listsReducer = listsReducer;
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/web.dom-collections.iterator.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialLists = exports.initialLists = {
  layout: '',
  idcolumns: [],
  columns: [],
  changeditems: [],
  fromlists: [],
  tolists: []
};
function listsReducer(state, action) {
  var _ref, _$idcolumn$toLowerCa, _ref2, _ref3, _data$crudlist, _data$crudlist2, _data$layout, _data$crudcolumn, _data$crudlist3;
  let idcol = (_ref = (_$idcolumn$toLowerCa = (_ref2 = [...state.fromlists]) === null || _ref2 === void 0 || (_ref2 = _ref2[0]) === null || _ref2 === void 0 || (_ref2 = _ref2.idcolumn) === null || _ref2 === void 0 ? void 0 : _ref2.toLowerCase()) !== null && _$idcolumn$toLowerCa !== void 0 ? _$idcolumn$toLowerCa : (_ref3 = [...state.tolists]) === null || _ref3 === void 0 || (_ref3 = _ref3[0]) === null || _ref3 === void 0 || (_ref3 = _ref3.idcolumn) === null || _ref3 === void 0 ? void 0 : _ref3.toLowerCase()) !== null && _ref !== void 0 ? _ref : 'idcol';
  const excludeExtraBEFields = ['childid', 'childobjname', 'nextsp', 'nextstructtype', 'parentid', 'parentobjname', 'reviewrequired', 'stepid', 'selection'];
  const excludefields = ['crudid', 'crudlistitems', 'crudlistitems', 'excludedsearchresults', 'searchresults', 'tableconfiguration'];
  var changedItemObj = {
    formelements: [{
      saveparam: idcol,
      datatype: 'string',
      value: ''
    }, {
      saveparam: 'CRUDListID',
      datatype: 'string',
      value: ''
    }]
  };

  // console.log(currList.map(i => i.crudlistid))
  switch (action.type) {
    case 'INITIALIZE_DATA':
      //TODO: Inject data if there are columns that exists with no fields (YzanBadData.js) Inv. # column has no data
      const data = action === null || action === void 0 ? void 0 : action.data;
      // console.log('data', data)

      state['tolists'] = data ? data === null || data === void 0 || (_data$crudlist = data.crudlist) === null || _data$crudlist === void 0 || (_data$crudlist = _data$crudlist.filter((list, index) => list.type === 'tolist' && list)) === null || _data$crudlist === void 0 ? void 0 : _data$crudlist.map((list, index) => index == 0 ? _objectSpread(_objectSpread({}, list), {}, {
        activetab: 1
      }) : _objectSpread(_objectSpread({}, list), {}, {
        activetab: 0
      })) : [];
      state['fromlists'] = data ? data === null || data === void 0 || (_data$crudlist2 = data.crudlist) === null || _data$crudlist2 === void 0 || (_data$crudlist2 = _data$crudlist2.filter((list, index) => list.type === 'fromlist' && list)) === null || _data$crudlist2 === void 0 ? void 0 : _data$crudlist2.map((list, index) => index == 0 ? _objectSpread(_objectSpread({}, list), {}, {
        activetab: 1
      }) : _objectSpread(_objectSpread({}, list), {}, {
        activetab: 0
      })) : [];
      state['layout'] = (_data$layout = data === null || data === void 0 ? void 0 : data.layout) !== null && _data$layout !== void 0 ? _data$layout : [];
      state['columns'] = data ? data === null || data === void 0 || (_data$crudcolumn = data.crudcolumn) === null || _data$crudcolumn === void 0 ? void 0 : _data$crudcolumn.map(x => {
        var _x$crudcolumnid;
        x.id = x === null || x === void 0 || (_x$crudcolumnid = x.crudcolumnid) === null || _x$crudcolumnid === void 0 ? void 0 : _x$crudcolumnid.toLowerCase();
        return x;
      }) : [];
      state['idcolumns'] = data && data !== null && data !== void 0 && data.crudlist && (data === null || data === void 0 || (_data$crudlist3 = data.crudlist) === null || _data$crudlist3 === void 0 ? void 0 : _data$crudlist3.length) > 0 ? data.crudlist.map(i => i.idcolumn.toLowerCase()) : 'idcolumn';
      //TODO: dynamically add table props
      // Object.entries(action.data)
      //   .filter(([key]) => !excludeExtraBEFields.includes(key))
      //   .forEach(([key, value]) => {
      //     if (key == 'crudcolumn') {
      //       state[key] = value.map(x => {
      //         x.id = x.crudcolumnid
      //         return x
      //       })
      //     }
      //     state[key] = value
      //   })
      return _objectSpread({}, state);

    /* CRUD ACTIONS */
    case 'UPDATE_LISTS':
      state['lists'] = action.currentLists;
      return _objectSpread({}, state);
    case 'UPDATE_COLUMNS':
      state['columns'] = action.currentColumns;
      return _objectSpread({}, state);
    case 'REMOVE_FROM_LIST':
      const modifiedtableitems = [...action.cruditems];
      const selectedItems = [...action.selected];
      const listtype = action.list;
      const resultList = modifiedtableitems.filter(item => !selectedItems.find(obj => (obj === null || obj === void 0 ? void 0 : obj[idcol]) === (item === null || item === void 0 ? void 0 : item[idcol])));

      //update list item is being removed from
      const updateRemoved = state[listtype].map(obj => {
        if (obj.crudlistid === action.listid) {
          return _objectSpread(_objectSpread({}, obj), {}, {
            crudlistitems: resultList
          });
        }
        return obj;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        [listtype]: updateRemoved
      });
    case 'SET_REMOVE_IN_CHANGEDITEMS':
      const newChangedItems = [...state.changeditems];
      for (var i = 0; i < action.selected.length; i++) {
        var found = newChangedItems.some(item => item.formelements.some(obj => {
          var _action$selected$i;
          return obj.saveparam === idcol && obj.value === ((_action$selected$i = action.selected[i]) === null || _action$selected$i === void 0 ? void 0 : _action$selected$i[idcol]);
        }));
        if (found) {
          var index = -1;
          for (var j = 0; j < newChangedItems.length; j++) {
            var item = newChangedItems[j];
            if (item.formelements.some(obj => {
              var _action$selected$i2;
              return obj.saveparam === idcol && obj.value === ((_action$selected$i2 = action.selected[i]) === null || _action$selected$i2 === void 0 ? void 0 : _action$selected$i2[idcol]);
            })) {
              index = j;
            }
          }
          if (index !== -1) {
            var newChangedItemObj = newChangedItems[index];
            var removeFormElement = {
              saveparam: 'action',
              type: 'string',
              value: 'remove'
            };
            newChangedItemObj.formelements.push(removeFormElement);
            newChangedItems.splice(index, 1, newChangedItemObj);
          }
        } else {
          var newChangedItemObj = JSON.parse(JSON.stringify(changedItemObj));
          var newChangedFormelements = changedItemObj.formelements.map(obj => {
            if (obj.saveparam === idcol) {
              var _action$selected$i3;
              return _objectSpread(_objectSpread({}, obj), {}, {
                value: (_action$selected$i3 = action.selected[i]) === null || _action$selected$i3 === void 0 ? void 0 : _action$selected$i3[idcol]
              });
            } else if (obj.saveparam === 'CRUDListID') {
              return _objectSpread(_objectSpread({}, obj), {}, {
                value: action.listid
              });
            }
            return obj;
          });
          newChangedItemObj.formelements = newChangedFormelements;
          var removeFormElement = {
            saveparam: 'action',
            type: 'string',
            value: 'remove'
          };
          newChangedItemObj.formelements.push(removeFormElement);
          newChangedItems.push(newChangedItemObj);
        }
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        changeditems: newChangedItems
      });
    case 'ADD_TO_LIST':
      if (state['fromlists'].length > 1 || state['tolists'].length > 1) {
        var _state$fromlists$find, _state$tolists$find;
        const fromList = (_state$fromlists$find = state['fromlists'].find(list => list.crudlistid === action.moveto)) === null || _state$fromlists$find === void 0 ? void 0 : _state$fromlists$find.crudlistitems;
        const toList = (_state$tolists$find = state['tolists'].find(list => list.crudlistid === action.moveto)) === null || _state$tolists$find === void 0 ? void 0 : _state$tolists$find.crudlistitems;
        // console.log(fromList, toList)

        const newChangedItems = [...state.changeditems];
        //IDColumn is possibly unique for each item - use as identifier
        for (var i = 0; i < action.selected.length; i++) {
          var found = newChangedItems.some(item => item.formelements.some(obj => {
            var _action$selected$i4;
            return obj.saveparam === idcol && obj.value === ((_action$selected$i4 = action.selected[i]) === null || _action$selected$i4 === void 0 ? void 0 : _action$selected$i4[idcol]);
          }));

          //if one of the items selected is found in the changeditems array
          if (found) {
            var index = -1;
            for (var j = 0; j < newChangedItems.length; j++) {
              var item = newChangedItems[j];
              if (item.formelements.some(obj => {
                var _action$selected$i5;
                return obj.saveparam === idcol && obj.value === ((_action$selected$i5 = action.selected[i]) === null || _action$selected$i5 === void 0 ? void 0 : _action$selected$i5[idcol]);
              })) {
                index = j;
              }
            }

            //if the index is not -1, update the crudlistid
            if (index !== -1) {
              var newChangedItemObj = JSON.parse(JSON.stringify(newChangedItems[index]));
              var newChangedFormelements = newChangedItems[index].formelements.map(obj => {
                if (obj.saveparam === 'CRUDListID') {
                  return _objectSpread(_objectSpread({}, obj), {}, {
                    value: action.moveto
                  });
                }
                return obj;
              });
              newChangedItemObj.formelements = newChangedFormelements;
              newChangedItems.splice(index, 1, newChangedItemObj);
            }
          } else {
            var newChangedItemObj = JSON.parse(JSON.stringify(changedItemObj));
            var newChangedFormelements = changedItemObj.formelements.map(obj => {
              if (obj.saveparam === idcol) {
                var _action$selected$i6;
                return _objectSpread(_objectSpread({}, obj), {}, {
                  value: (_action$selected$i6 = action.selected[i]) === null || _action$selected$i6 === void 0 ? void 0 : _action$selected$i6[idcol]
                });
              } else if (obj.saveparam === 'CRUDListID') {
                return _objectSpread(_objectSpread({}, obj), {}, {
                  value: action.moveto
                });
              }
              return obj;
            });
            newChangedItemObj.formelements = newChangedFormelements;
            newChangedItems.push(newChangedItemObj);
          }
        }
        if (fromList) {
          const updatedFromList = [...new Set([...fromList, ...action.selected])];
          const newFromLists = state['fromlists'].map(list => {
            if (list.crudlistid === action.moveto) {
              return _objectSpread(_objectSpread({}, list), {}, {
                crudlistitems: updatedFromList
              });
            }
            return list;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            fromlists: newFromLists,
            changeditems: newChangedItems
          });
        } else {
          const updatedToList = [...new Set([...toList, ...action.selected])];
          const newToLists = state['tolists'].map(list => {
            if (list.crudlistid === action.moveto) {
              return _objectSpread(_objectSpread({}, list), {}, {
                crudlistitems: updatedToList
              });
            }
            return list;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            tolists: newToLists,
            changeditems: newChangedItems
          });
        }
      }
      return state;

    /* LAYOUT ACTIONS */
    case 'TOGGLE_TABS':
      return _objectSpread(_objectSpread({}, state), {}, {
        layout: action.layout
      });
    case 'SET_ACTIVE_FROM_TAB':
      var selectedList = action.selected;
      state['fromlists'] = state.fromlists.map(list => {
        var _selectedList;
        if ((list === null || list === void 0 ? void 0 : list.crudlistid) == ((_selectedList = selectedList) === null || _selectedList === void 0 ? void 0 : _selectedList.crudlistid)) return _objectSpread(_objectSpread({}, list), {}, {
          activetab: 1
        });else return _objectSpread(_objectSpread({}, list), {}, {
          activetab: 0
        });
      });
      return _objectSpread({}, state);
    case 'SET_ACTIVE_TO_TAB':
      var selectedList = action.selected;
      state['tolists'] = state.tolists.map(list => {
        var _selectedList2;
        if ((list === null || list === void 0 ? void 0 : list.crudlistid) == ((_selectedList2 = selectedList) === null || _selectedList2 === void 0 ? void 0 : _selectedList2.crudlistid)) return _objectSpread(_objectSpread({}, list), {}, {
          activetab: 1
        });else return _objectSpread(_objectSpread({}, list), {}, {
          activetab: 0
        });
      });
      return _objectSpread({}, state);
    default:
      return state;
  }
}