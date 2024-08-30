import { getIdentifier } from '../HelperFunctions'

export const initialState = {
  lists: [],
  idcolumns: [],
  columns: [],
  searchInput: ''
}

export function listsReducer (state, action) {
  const currList = [...state.lists]
  // console.log(currList.map(i => i.crudlistid))
  switch (action.type) {
    case 'SET_SEARCH_INPUT':
      state['searchInput'] = action.input
      return { ...state }
    case 'INITIALIZE_DATA':
      state['lists'] = action.currentLists
      state['idcolumns'] = action.currentIdColumns
      state['columns'] = action.currentColumns
      return { ...state }
    case 'UPDATE_LISTS':
      state['lists'] = action.currentLists
      return { ...state }
    case 'REMOVE_FROM_LIST':
      const fromList = currList.find(
        id => id.crudlistid === action.listid
      ).crudlistitems

      action.selected.map(i => {
        if (
          fromList.findIndex(
            x =>
              getIdentifier(x, state.idcolumns) ===
              getIdentifier(i, state.idcolumns)
          ) !== -1
        ) {
          fromList.splice(
            fromList.findIndex(
              x =>
                getIdentifier(x, state.idcolumns) ===
                getIdentifier(i, state.idcolumns)
            ),
            1
          )
        }
      })

      const updateRemoved = currList.map(obj => {
        if (obj.crudlistid === action.listid) {
          return { ...obj, crudlistitems: fromList }
        }
        return obj
      })
      return { ...state, lists: updateRemoved }
    case 'ADD_TO_LIST':
      if (state['lists'].length > 1) {
        // console.log(currList)
        console.log(
          currList.find(id => id.crudlistid === action.moveto.crudcanmovetoid)
        )

        const toList = currList.find(
          id => id.crudlistid === action.moveto.crudcanmovetoid
        ).crudlistitems

        const updatedToList = toList.concat(action.selected)
        const newLists = currList.map(obj => {
          if (obj.crudlistid === action.moveto.crudcanmovetoid) {
            return { ...obj, crudlistitems: updatedToList }
          }
          return obj
        })
        return { ...state, lists: newLists }
      }
      return state
    case 'UPDATE_COLUMNS':
      state['columns'] = action.currentColumns
      return { ...state }
    default:
      return state
  }
}
