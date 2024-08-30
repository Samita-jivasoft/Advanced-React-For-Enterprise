import { isValidISODate } from "../../../../../app/helpers";
import { addRequirements } from "../../helpers";
import { validateDates } from "../../../../../app/helpers";

export function getDatelistValidation(elementState) {
    const { value, masktype } = elementState;
    let requirements = []
    //em
    if (masktype === 'datetime') {
        addRequirements(validateDates(value), requirements)

    }
    return requirements.length > 0 ? requirements : false;

}


//Previously: The validateDates was explicitly defined in the file,
//Now: The function is moved to helpers/datetime/validation
   
// function validateDates(array) {
//     const isMissingTimes = array.some(item => !item.starttime || !item.endtime);

//     if (isMissingTimes) {
//         return "Enter start and end times for the selected dates";
//     }

//     return false;
// }
