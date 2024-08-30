export const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
export function isJsonString (str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return 'false'
  }
  return 'true'
}
