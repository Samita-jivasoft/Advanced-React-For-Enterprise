import { StringInput } from "components"
import { DateTime } from "../InputTypes/DateTime"

export function getMaskType () {
  //more specific rules
  //email
  //phone number
}
export function getDataType (element) {
  switch (element.datatype) {
    case 'string':
      return <StringInput element={element} />
    case 'int':
    case 'date':
      return <DateTime element={element}/>
    case 'time':
      return <DateTime element={element}/>
    case 'datetime':
      return <DateTime element={element}/>
    case 'boolean':
  }
  return false
}

export function formSubmissionFormatter(elementState) {
  const { datatype, saveparam, value } = elementState;
  switch (datatype) {
      case 'picklist':
          return { datatype: datatype, saveparam: saveparam, selectoptions: value }
      case 'datelist':
          return { datatype: datatype, saveparam: saveparam, datelist: value }
      default:
          return { datatype: datatype, saveparam: saveparam, value: value }
  }
}