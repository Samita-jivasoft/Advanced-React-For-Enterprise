import { StringInput } from "components"
import { IntegerInput } from "components/Generic"
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
      return <IntegerInput element={element}/>
    case 'date':
      return <DateTime element={element}/>
    case 'time':
      return <DateTime element={element}/>
    case 'datetime':
      return <DateTime element={element}/>
    case 'boolean':
      return <IntegerInput element={element}/>
  }
  return false
}