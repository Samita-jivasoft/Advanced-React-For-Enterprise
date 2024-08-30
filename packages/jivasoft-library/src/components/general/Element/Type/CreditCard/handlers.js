export const enforceCustomFormat = (value, formatOrFormats, cursorPosition) => {
    const isPipeDelimitedString = typeof formatOrFormats === 'string' && formatOrFormats.includes('|');
    const formats = isPipeDelimitedString ? formatOrFormats.split('|') : [formatOrFormats];
    // Sort formats by length
    const sortedFormats = [...formats].sort((a, b) => a.length - b.length);
  
    let bestFit = { formattedValue: "", score: -1, format: "" };
  
    sortedFormats.forEach((format) => {
      let formattedValue = "";
      let valueIndex = 0;
      let score = 0;
      const formatCharacters = Array.from(format).filter((char) => char !== "#");
  
      for (let i = 0; i < format.length; i++) {
        const formatChar = format[i];
        const isDelimiter = formatCharacters.includes(formatChar);
  
        if (formatChar === "#") {
          if (valueIndex < value.length) {
            formattedValue += value[valueIndex];
            valueIndex++;
            score++;
          }
        } else if (isDelimiter) {
          if (
            (formattedValue[valueIndex - 1] !== formatChar || formattedValue[valueIndex] !== formatChar) &&
            valueIndex < value.length
          ) {
            formattedValue += formatChar;
            if (value[valueIndex] === formatChar) {
              score++;
            }
          }
        } else {
          formattedValue += formatChar;
        }
      }
  
      if (score > bestFit.score) {
        bestFit = { formattedValue, score, format };
      }
    });
  
    // Cursor position adjustment logic
    if (
      cursorPosition > 0 &&
      cursorPosition <= bestFit.formattedValue.length &&
      !Array.from(bestFit.formattedValue).filter((char) => char !== "#").includes(bestFit.formattedValue[cursorPosition - 1])
    ) {
      cursorPosition++;
    }
  
    return { formattedValue: bestFit.formattedValue, currentFormat: bestFit.format };
  };