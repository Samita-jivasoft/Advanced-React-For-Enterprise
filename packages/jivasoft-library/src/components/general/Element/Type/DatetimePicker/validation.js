import { addRequirements } from "../../helpers";
const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?([Zz]|([\+-])(\d{2}):(\d{2}))$/;

export function getDatetimePickerValidation(elementState) {
    const { value,  masktype } = elementState;
    let requirements = []
    addRequirements(validateDatetime(value, masktype), requirements)

    // switch (masktype) {
    //   default:
    //   break;
    // }

    return requirements.length > 0 ? requirements : false;
}

export function validateDatetime(value, masktype ) {
    let requirements = []
    const isISO8601 = iso8601Regex.test(value);

    return isISO8601? false : 'Not a valid ' + masktype


}