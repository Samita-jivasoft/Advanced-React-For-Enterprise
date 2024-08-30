export const initialLists = {
  layout: '',
  idcolumns: [],
  columns: [],
  changeditems: [],
  fromlists: [],
  tolists: []
}

export function listsReducer (state, action) {
  let idcol =
    [...state.fromlists]?.[0]?.idcolumn?.toLowerCase() ??
    [...state.tolists]?.[0]?.idcolumn?.toLowerCase() ??
    'idcol'
  const excludeExtraBEFields = [
    'childid',
    'childobjname',
    'nextsp',
    'nextstructtype',
    'parentid',
    'parentobjname',
    'reviewrequired',
    'stepid',
    'selection'
  ]
  const excludefields = [
    'crudid',
    'crudlistitems',
    'crudlistitems',
    'excludedsearchresults',
    'searchresults',
    'tableconfiguration'
  ]
  var changedItemObj = {
    formelements: [
      {
        saveparam: idcol,
        datatype: 'string',
        value: ''
      },
      {
        saveparam: 'CRUDListID',
        datatype: 'string',
        value: ''
      }
    ]
  }

  // console.log(currList.map(i => i.crudlistid))
  switch (action.type) {
    case 'INITIALIZE_DATA':
      //TODO: Inject data if there are columns that exists with no fields (YzanBadData.js) Inv. # column has no data
      const data = action?.data
      // console.log('data', data)

      state['tolists'] = data
        ? data?.crudlist
            ?.filter((list, index) => list.type === 'tolist' && list)
            ?.map((list, index) =>
              index == 0 ? { ...list, activetab: 1 } : { ...list, activetab: 0 }
            )
        : []
      state['fromlists'] = data
        ? data?.crudlist
            ?.filter((list, index) => list.type === 'fromlist' && list)
            ?.map((list, index) =>
              index == 0 ? { ...list, activetab: 1 } : { ...list, activetab: 0 }
            )
        : []

      state['layout'] =  data?.layout ?? []
      state['columns'] = data
        ? data?.crudcolumn?.map(x => {
            x.id = x?.crudcolumnid?.toLowerCase()
            return x
          })
        : []

      state['idcolumns'] =
        data && data?.crudlist && data?.crudlist?.length > 0
          ? data.crudlist.map(i => i.idcolumn.toLowerCase())
          : 'idcolumn'
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
      return { ...state }

    /* CRUD ACTIONS */
    case 'UPDATE_LISTS':
      state['lists'] = action.currentLists
      return { ...state }
    case 'UPDATE_COLUMNS':
      state['columns'] = action.currentColumns
      return { ...state }
    case 'REMOVE_FROM_LIST':
      const modifiedtableitems = [...action.cruditems]
      const selectedItems = [...action.selected]
      const listtype = action.list

      const resultList = modifiedtableitems.filter(
        item => !selectedItems.find(obj => obj?.[idcol] === item?.[idcol])
      )

      //update list item is being removed from
      const updateRemoved = state[listtype].map(obj => {
        if (obj.crudlistid === action.listid) {
          return { ...obj, crudlistitems: resultList }
        }
        return obj
      })

      return { ...state, [listtype]: updateRemoved }
    case 'SET_REMOVE_IN_CHANGEDITEMS':
      const newChangedItems = [...state.changeditems]

      for (var i = 0; i < action.selected.length; i++) {
        var found = newChangedItems.some(item =>
          item.formelements.some(
            obj =>
              obj.saveparam === idcol &&
              obj.value === action.selected[i]?.[idcol]
          )
        )
        if (found) {
          var index = -1
          for (var j = 0; j < newChangedItems.length; j++) {
            var item = newChangedItems[j]
            if (
              item.formelements.some(
                obj =>
                  obj.saveparam === idcol &&
                  obj.value === action.selected[i]?.[idcol]
              )
            ) {
              index = j
            }
          }

          if (index !== -1) {
            var newChangedItemObj = newChangedItems[index]
            var removeFormElement = {
              saveparam: 'action',
              type: 'string',
              value: 'remove'
            }
            newChangedItemObj.formelements.push(removeFormElement)
            newChangedItems.splice(index, 1, newChangedItemObj)
          }
        } else {
          var newChangedItemObj = JSON.parse(JSON.stringify(changedItemObj))

          var newChangedFormelements = changedItemObj.formelements.map(obj => {
            if (obj.saveparam === idcol) {
              return { ...obj, value: action.selected[i]?.[idcol] }
            } else if (obj.saveparam === 'CRUDListID') {
              return { ...obj, value: action.listid }
            }
            return obj
          })
          newChangedItemObj.formelements = newChangedFormelements

          var removeFormElement = {
            saveparam: 'action',
            type: 'string',
            value: 'remove'
          }
          newChangedItemObj.formelements.push(removeFormElement)
          newChangedItems.push(newChangedItemObj)
        }
      }

      return { ...state, changeditems: newChangedItems }
    case 'ADD_TO_LIST':
      if (state['fromlists'].length > 1 || state['tolists'].length > 1) {
        const fromList = state['fromlists'].find(
          list => list.crudlistid === action.moveto
        )?.crudlistitems
        const toList = state['tolists'].find(
          list => list.crudlistid === action.moveto
        )?.crudlistitems
        // console.log(fromList, toList)

        const newChangedItems = [...state.changeditems]
        //IDColumn is possibly unique for each item - use as identifier
        for (var i = 0; i < action.selected.length; i++) {
          var found = newChangedItems.some(item =>
            item.formelements.some(
              obj =>
                obj.saveparam === idcol &&
                obj.value === action.selected[i]?.[idcol]
            )
          )

          //if one of the items selected is found in the changeditems array
          if (found) {
            var index = -1
            for (var j = 0; j < newChangedItems.length; j++) {
              var item = newChangedItems[j]
              if (
                item.formelements.some(
                  obj =>
                    obj.saveparam === idcol &&
                    obj.value === action.selected[i]?.[idcol]
                )
              ) {
                index = j
              }
            }

            //if the index is not -1, update the crudlistid
            if (index !== -1) {
              var newChangedItemObj = JSON.parse(
                JSON.stringify(newChangedItems[index])
              )
              var newChangedFormelements = newChangedItems[
                index
              ].formelements.map(obj => {
                if (obj.saveparam === 'CRUDListID') {
                  return { ...obj, value: action.moveto }
                }
                return obj
              })

              newChangedItemObj.formelements = newChangedFormelements
              newChangedItems.splice(index, 1, newChangedItemObj)
            }
          } else {
            var newChangedItemObj = JSON.parse(JSON.stringify(changedItemObj))
            var newChangedFormelements = changedItemObj.formelements.map(
              obj => {
                if (obj.saveparam === idcol) {
                  return { ...obj, value: action.selected[i]?.[idcol] }
                } else if (obj.saveparam === 'CRUDListID') {
                  return { ...obj, value: action.moveto }
                }
                return obj
              }
            )
            newChangedItemObj.formelements = newChangedFormelements
            newChangedItems.push(newChangedItemObj)
          }
        }

        if (fromList) {
          const updatedFromList = [
            ...new Set([...fromList, ...action.selected])
          ]
          const newFromLists = state['fromlists'].map(list => {
            if (list.crudlistid === action.moveto) {
              return { ...list, crudlistitems: updatedFromList }
            }
            return list
          })

          return {
            ...state,
            fromlists: newFromLists,
            changeditems: newChangedItems
          }
        } else {
          const updatedToList = [...new Set([...toList, ...action.selected])]
          const newToLists = state['tolists'].map(list => {
            if (list.crudlistid === action.moveto) {
              return { ...list, crudlistitems: updatedToList }
            }
            return list
          })
          return {
            ...state,
            tolists: newToLists,
            changeditems: newChangedItems
          }
        }
      }
      return state

    /* LAYOUT ACTIONS */
    case 'TOGGLE_TABS':
      return { ...state, layout: action.layout }
    case 'SET_ACTIVE_FROM_TAB':
      var selectedList = action.selected
      state['fromlists'] = state.fromlists.map(list => {
        if (list?.crudlistid == selectedList?.crudlistid)
          return { ...list, activetab: 1 }
        else return { ...list, activetab: 0 }
      })
      return { ...state }
    case 'SET_ACTIVE_TO_TAB':
      var selectedList = action.selected
      state['tolists'] = state.tolists.map(list => {
        if (list?.crudlistid == selectedList?.crudlistid)
          return { ...list, activetab: 1 }
        else return { ...list, activetab: 0 }
      })
      return { ...state }
    default:
      return state
  }
}
