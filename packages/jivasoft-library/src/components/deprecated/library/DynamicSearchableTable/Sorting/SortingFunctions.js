// returns sorted array in accending or decending order
export const handleSorting = (array, sortField, sortOrder) => {
  // console.log('here',array)
  return array.sort((a, b) => {
    if (a[sortField] === null) return 1
    if (b[sortField] === null) return -1
    if (a[sortField] === null && b[sortField] === null) return 0
    // console.log('sort', sortField, sortOrder)
    // console.log(
    //   a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
    //     numeric: true
    //   }) * (sortOrder === 'asc' ? 1 : -1)
    // )
    // console.log('a', a[sortField].toString())
    // console.log('b', b[sortField].toString())

    return (
      a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
        numeric: true
      }) * (sortOrder === 'asc' ? 1 : -1)
    )
  })
}

// returns sorted array based on value
export const searchSort = (
  array,
  searchColumn,
  value,
  sortField,
  sortOrder
) => {
  // console.log("searching!")
  function results (res) {
    // console.log(
    //   array.some(row => searchColumn.filter(col => row[col].toString().includes(value)))
    // )
    return array
      .map(x =>
        searchColumn
          .map(i => x[i].toString().includes(value))
          .some(element => element === true)
          ? res
            ? x
            : null
          : res
          ? null
          : x
      )
      .filter(n => n)
  }
  // console.log(results)
  const searchResults = handleSorting(results(1), sortField, sortOrder)
  const exclude = handleSorting(results(0), sortField, sortOrder)
  return [searchResults, exclude]
}
