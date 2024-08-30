export function formatToSentenceCase(inputString) {
  if (typeof inputString !== 'string') {
    return '';
  }

  const trimmedString = inputString.trim();

  if (trimmedString === '') {
    return '';
  }

  // Capitalize the first letter
  const formattedString =
    trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);

  // Check if the string ends with sentence-ending punctuation
  if (/[.!?]$/.test(formattedString)) {
    return formattedString;
  }

  // Check if the string ends with a question mark
  if (formattedString.endsWith('?')) {
    return formattedString;
  }

  // If neither sentence-ending punctuation nor question mark, add a period
  return formattedString + '.';
}
export function capitalize(inputString) {
  if (typeof inputString !== 'string') {
    return '';
  }

  const trimmedString = inputString.trim();

  if (trimmedString === '') {
    return '';
  }

  // Capitalize the first letter
  const formattedString =
    trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);

 
  return formattedString ;
}


export function getIconInitials (string) {
  const regex = /((?:\s|^)\w)/g
  const matchStr =string?.match(regex)

  // Handle the case where there's only one match
  if (matchStr?.length === 1) {
    return matchStr?.[0]?.trim()
  }

  // Extract the first and last characters and trim any whitespace
  const initials = [matchStr?.[0], matchStr?.[matchStr?.length - 1]]?.map(s =>
    s?.trim()
  )

  return initials?.join('')?.toUpperCase()
}