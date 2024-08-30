// returns sorted array in accending or decending order
export function SortElement (sortBy, a, b) {
  const order = sortBy?.order === 'asc' ? 1 : -1
  if (sortBy?.key) {
    if (sortBy?.column?.formelement) {
      // console.log(sortBy?.column.title, sortBy?.column?.formelement[0]?.datatype)
      switch (sortBy?.column?.formelement[0]?.datatype) {
        case 'datetime':
        case 'date':
        case 'time':
          return a[sortBy.key] && b[sortBy.key]
            ? new Date(a[sortBy.key]).getTime() >
              new Date(b[sortBy.key]).getTime()
              ? order
              : -order
            : 0
        case 'int':
        case 'integer':
        case 'number':
          const intA = parseInt(a[sortBy.key]) || 0
          const intB = parseInt(b[sortBy.key]) || 0
          return intA > intB ? order : intA < intB ? -order : 0
        case 'money':
          const moneyA = parseFloat(a[sortBy.key]?.replace(/\$/g, '') || 0)
          const moneyB = parseFloat(b[sortBy.key]?.replace(/\$/g, '') || 0)
          return moneyA > moneyB ? order : moneyA < moneyB ? -order : 0
        default:
          // Handle sorting strings that might contain money values with '$'
          const valueA = a[sortBy.key]?.toString()
          const valueB = b[sortBy.key]?.toString()
          const hasDollarSignA = valueA?.includes('$')
          const hasDollarSignB = valueB?.includes('$')
          if (hasDollarSignA || hasDollarSignB) {
            const moneyA = parseFloat(valueA?.replace(/\$/g, '') || 0)
            const moneyB = parseFloat(valueB?.replace(/\$/g, '') || 0)
            return moneyA > moneyB ? order : moneyA < moneyB ? -order : 0
          }
          return valueA > valueB ? order : valueA < valueB ? -order : 0
      }
    } else {
      return a[sortBy.key] && b[sortBy.key]
        ? a[sortBy.key] > b[sortBy.key]
          ? order
          : -order
        : 0
    }
  } else {
    return 0
  }
}

// returns sorted array based on value
export const searchSort = (array, searchColumns, value, sortInfo) => {
  // console.log('initi', array, searchColumns, value, sortInfo)
  function results (res) {
    return array
      .map(row => {
        const isMatch =
          searchColumns.some(column =>
            row[column]
              ?.toString()
              ?.toLowerCase()
              ?.includes(value?.toLowerCase())
          ) || value == ''

        return {
          ...row,
          _searchresult: isMatch ? true : false
        }
      })
      .filter(row => (res && row._searchresult) || (!res && !row._searchresult))
  }

  const searchResults = results(1).sort((a, b) => SortElement(sortInfo, a, b))
  const exclude = results(0).sort((a, b) => SortElement(sortInfo, a, b))

  return [searchResults, exclude]
}
