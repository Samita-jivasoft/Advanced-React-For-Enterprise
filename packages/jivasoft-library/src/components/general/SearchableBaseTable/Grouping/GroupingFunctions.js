export function groupBy (array, func) {
  var groups = {}
  array.forEach(function (item) {
    var group = func(item)
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return groups
}

function organizeData (data) {
  const root = []
  for (const [index, item] of data.entries()) {
    let currentNode = root
    // console.log('here', item[0])
    for (const [depth, label] of item[0].entries()) {
      // console.log('depth', depth)
      // console.log('label', label)

      const existingNode = currentNode.find(node => node.label === label)
      const id = `row-${index}${depth > 0 ? `-sub-${depth - 1}` : ''}`

      if (existingNode) {
        // console.log('existingNode', existingNode)
        currentNode = existingNode.children
      } else {
        // console.log('currentNode', currentNode)
        // console.log(item, depth)
        const newNode = {
          id,
          rowKey: id,
          detailid: id,
          parentId: currentNode === root ? null : currentNode.id,
          label: label,
          children: item[0].length - 1 === depth ? item[1] : [],
          level: depth,
          _searchresult: true
        }
        currentNode.push(newNode)
        currentNode = newNode.children
      }
    }
  }
  return root
}

function sortNestedArraysByEmployer (arr) {
  arr.sort((a, b) => {
    const employerA = a[0][0].split(':')[1].trim()
    const employerB = b[0][0].split(':')[1].trim()

    if (employerA < employerB) {
      return -1
    }
    if (employerA > employerB) {
      return 1
    }
    return 0
  })
}

export function groupTable (groupedData) {
  // console.log(groupedData)
  const configureddata = []
  Object.entries(groupedData).map((group, index) => {
    const inputString = group[0]
    const parts = inputString.split(',')
    // Creating a new array with key-value pairs
    const transformedArray = []
    for (let i = 0; i < parts.length; i += 2) {
      transformedArray.push(`${parts[i]}: ${parts[i + 1]}`)
    }
    configureddata.push([transformedArray, group[1]])
  })
  // console.log(configureddata)
  sortNestedArraysByEmployer(configureddata)
  return organizeData(configureddata)
}
