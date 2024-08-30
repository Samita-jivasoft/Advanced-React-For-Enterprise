export function filterData (filters, array) {
  const arr = array
  var matchesFilter,
    matches = [],
    count
  matchesFilter = function (item) {
    count = 0
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

      if (
        item[filters[n]['Field'].toLowerCase()]
          .toString()
          .toLowerCase()
          .includes(filters[n]['Values']) === true &&
        item[filters[n]['Field'].toLowerCase()] !== ''
      ) {
        count++
      }
    }
    return count == filters.length
  }
  // Loop through each item in the array
  for (var i = 0; i < arr.length; i++) {
    // Determine if the current item matches the filter criteria
    // console.log(arr[i])
    if (matchesFilter(arr[i])) {
      matches.push(arr[i])
    }
  }
  // Give us a new array containing the objects matching the filter criteria
  return matches
}

export function setFilters (filter, input, criteria, setCriteria) {
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
    if (
      !criteria.some(item =>
        item.Values.toLowerCase().includes(
          input[input.length - 1].value.toString().toLowerCase()
        )
      )
    ) {
      const field = criteria.filter(item => item.Field === filter.crudcolumnid)
      const fieldIndex = criteria.findIndex(
        e => e.Field === filter.crudcolumnid
      )
      let newArray = [...criteria]
      newArray[fieldIndex] = {
        ...newArray[fieldIndex],
        Values: field[0].Values.concat(input[input.length - 1].value.toString())
      }
      setCriteria(newArray)
    }
  } else {
    // else if field doesn't exsist add new field and value to filter
    // console.log('here?')
    setCriteria([
      ...criteria,
      {
        Field: filter.crudcolumnid,
        Values: [input[input.length - 1].value.toString()],
        Label: filter.label
      }
    ])
    // console.log('not already in creteria')
  }
  console.log('filter added')
}
