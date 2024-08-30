export const getIdentifier = (i, id) => {
  return Object.entries(i)
    .map(i => (id.includes(i[0]) ? i[1] : null))
    .filter(n => n)[0]
}

export function highlight (getAllDivs, value) {
  // console.log('highlighting divs', getAllDivs)
  // console.log('search input:',value)
  getAllDivs.map(
    i =>
      (i[0].innerHTML = value
        ? i[0].textContent.replace(
            new RegExp('(' + value + ')', 'gi'),
            '<span style="background-color:yellow">$1</span>'
          )
        : i[0].textContent)
  )
}