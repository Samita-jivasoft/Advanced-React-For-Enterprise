import { addRequirements } from "../../helpers";

export function getFileUploaderValidation({validminimum, validmaximum, files }) {
    let requirements = []
    addRequirements(validateMinMaxFiles(files?.length, validminimum, validmaximum), requirements)
    return requirements.length > 0 ? requirements : false;

}
export function validateMinMaxFiles(
    files,
    validminimum,
    validmaximum,
  ) {

    if (validminimum === undefined && validmaximum === undefined) {
      return false;
    } else if (validminimum === undefined && validmaximum && files > validmaximum) {
      return 'Cannot upload greater than ' + validmaximum + ' files'
    } else if (validminimum === undefined && validmaximum && files < validminimum) {
      return 'Must upload between ' + validminimum + ' and ' + validmaximum + ' files'
    } else if (files < validminimum) {
      return `Must upload at least ${validminimum} file${validminimum!=1 ?'s':''} `;
    } else if (files > validmaximum) {
      return 'Cannot upload greater than ' + validmaximum + ' files';
    } else {
      return false;
    }
  
  }