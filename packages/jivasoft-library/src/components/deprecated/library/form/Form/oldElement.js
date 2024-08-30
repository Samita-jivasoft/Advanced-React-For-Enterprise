import { getDataType } from "./helpers"

export const FormElement = props => {
    return getDataType(props.elementConfig)
  }
  