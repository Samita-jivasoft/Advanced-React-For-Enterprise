export function getItems (listState) {
  return (listState.columns || [])
    .map(
      ({
        id,
        crudcolumnid,
        formelement,
        formelementid,
        crudid,
        iscolumn,
        isfilter,
        label
      }) => ({
        id,
        crudcolumnid,
        formelement: [
          {
            ...formelement[0],
            required: 0,
            canedit: 1
          }
        ],
        formelementid,
        crudid,
        iscolumn,
        isfilter,
        label,
        required: 0
      })
    )
    .filter(({ isfilter }) => isfilter)
}

export function filterData (filters, array) {
  const arr = array
  var matchesFilter,
    matches = [],
    notMatches = [],
    count
  matchesFilter = function (item) {
    count = 0
    // console.log(filters)
    for (var n = 0; n < filters?.length; n++) {
      // console.log(
      //   'searchString - ',
      //   item[filters[n]['Field'].toLowerCase()].toString().toLowerCase()
      // )
      // console.log('searchvalues - ', filters[n]['Values'])
      if (
        filters[n]['Values'].some(value =>
          item[filters[n]['Field'].toLowerCase()]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        ) === true &&
        item[filters[n]['Field'].toLowerCase()] !== ''
      ) {
        count++
      }
    }
    return count == filters?.length
  }
  // Loop through each item in the array
  for (var i = 0; i < arr?.length; i++) {
    // Determine if the current item matches the filter filters
    // console.log(arr[i])
    if (matchesFilter(arr[i])) {
      matches.push(arr[i])
    } else {
      notMatches.push(arr[i])
    }
  }
  // Give us a new array containing the objects matching the filter filters
  return matches
}

export function setFilters (listState, listDispatch, filter, value) {
  // console.log('filter', filter)
  let input = value
  // console.log('input', input, input.split('T'))
  // console.log(filter)
  if (filter?.formelement[0]?.datatype === 'datetime') {
    input = value
  }
  if (filter?.formelement[0]?.masktype === 'date') {
    input = value.split('T')[0]
  }

  // if field already exists add value to Values list
  if (listState.filters.some(item => item.Field === filter.crudcolumnid)) {
    // if value doesn't already exist add it to values list else do nothing
    if (
      !listState.filters.some(item =>
        item.Values.includes(input.toString().toLowerCase())
      )
    ) {
      const field = listState.filters.filter(
        item => item.Field === filter.crudcolumnid
      )
      const fieldIndex = listState.filters.findIndex(
        e => e.Field === filter.crudcolumnid
      )
      let newArray = [...listState.filters]
      newArray[fieldIndex] = {
        ...newArray[fieldIndex],
        Values: field[0].Values.concat(input.toString())
      }
      listDispatch({
        type: 'SET_MODIFIED_TABLE',
        currentFilters: newArray,
        currentSearchColumns: listState.searchcolumns,
        currentSearchInput: listState.searchinput,
        currentSearchingState: listState.searching
      })
    }
  } else {
    // else if field doesn't exsist add new field and value to filter
    const newFilters = [
      ...listState.filters,
      {
        Field: filter.crudcolumnid,
        Values: [input.toString()],
        Label: filter.label
      }
    ]
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newFilters,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    })
    // console.log('not already in creteria')
  }
  // console.log('filter added')
}

export function removeFilter (filter, value, listState, listDispatch) {
  const id = filter.Field
  let newValues
  listState &&
    listState.filters &&
    listState.filters.map(item => {
      if (item.Field === id) {
        newValues = item.Values.filter(val => val !== value)
      }
    })

  // console.log(filter, value)
  // console.log(newValues)
  //if there are no values for the field just remove obj
  if (newValues?.length === 0) {
    const newFilters = listState.filters.filter(field => field.Field !== id)
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newFilters,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    })
  } else {
    // set new values
    let newArray = [...listState.filters]
    // get matching field
    const fieldIndex = listState.filters.findIndex(item => item.Field === id)
    // update values for that field
    newArray[fieldIndex] = {
      ...newArray[fieldIndex],
      Values: newValues
    }
    listDispatch({
      type: 'SET_MODIFIED_TABLE',
      currentFilters: newArray,
      currentSearchColumns: listState.searchcolumns,
      currentSearchInput: listState.searchinput,
      currentSearchingState: listState.searching
    })
  }
}
