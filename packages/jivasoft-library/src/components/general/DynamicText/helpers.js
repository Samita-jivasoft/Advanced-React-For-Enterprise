import React from 'react'

export function highlightText (highlight, text) {
  // Get segments that match the highlight
  const regex = new RegExp(`(${highlight})`, 'gi')
  const segments = text?.split(regex)

  // Wrap matches in <mark> element
  const highlightedText = segments.map((segment, i) =>
    regex.test(segment) ? <mark key={i}>{segment}</mark> : segment
  )

  return highlightedText
}

//get HTML tag based on variant - good for SEO & accessibility features in the future
//Unsure if this is effective or just unecessary abstraction, time will tell...
export function getTag (variant) {
  const variantToTagMap = {
    header1: 'h1',
    header2: 'h2',
    header3: 'h3',
    subheader1: 'h4',
    subheader2: 'h5',
    subheader3: 'h6',
    body1: 'p',
    body2: 'p',
    body3: 'p'
  }

  return variantToTagMap[variant]
}
