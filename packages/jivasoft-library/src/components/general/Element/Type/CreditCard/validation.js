import { addRequirements } from "../../helpers";

const validateFormat = (inputValue, format) => {
  const isPipeDelimitedString = typeof format === 'string' && format.includes('|');
  const formats = isPipeDelimitedString ? format.split('|') : [format];
  // Remove any non-digit characters from the input value
  const cleanedValue = inputValue.replace(/\D/g, "");

  for (const format of formats) {
    let valueIndex = 0;
    let isValid = true;

    // Loop through each character in the format and check if it matches the input value
    for (let i = 0; i < format.length; i++) {
      const formatChar = format[i];

      if (formatChar === "#") {
        if (!/\d/.test(cleanedValue[valueIndex])) {
          isValid = false;
          break;
        }
        valueIndex++;
      } else if (cleanedValue[valueIndex - 1] === "-" && formatChar === "-") {
        continue;
      } else if (formatChar === "-") {
        if (inputValue[i] !== formatChar) {
          isValid = false;
          break;
        }
      }
    }

    // Check if there are any extra characters in the cleaned value beyond the format length
    if (cleanedValue.slice(valueIndex).length > 0) {
      isValid = false;
    }

    if (isValid) {
      return false; // Return false when the input value matches the format
    }
  }
  return formats?.length === 1 ? `Must be ${formats[0]}` : `Must be one of ${formats.join(",  ")}`;
};

export function getCreditCardValidation({ datatype, mincharacters, maxcharacters, validminimum, validmaximum, masktype, value, }) {

  switch (value?.[0]) {
    case '3':
      return validateFormat(value, "####-######-#####")
    default:
      return validateFormat(value, "####-####-####-####")
      break


  }


}