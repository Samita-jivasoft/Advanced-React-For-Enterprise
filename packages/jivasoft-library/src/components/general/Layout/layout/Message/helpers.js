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
export function Capitalize(inputString) {
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
