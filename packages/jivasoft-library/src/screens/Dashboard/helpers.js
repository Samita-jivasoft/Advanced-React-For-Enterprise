
//From XD2 Dashboard Styling
/* Define screen size breakpoints */
const xs = 595;
const sm = 600;
const md = 768;
const lg = 889;
const xl = 1200;

/* Calculate the number of items per row based on screen size */
export const itemsPerRow = (screenWidth) => {
  if (screenWidth < xs) {
    return 1; // For extra small screens, only 1 item per row
  } else if (screenWidth < sm) {
    return 1; // For small screens, also 1 item per row
  } else if (screenWidth < md) {
    return 2; // For medium screens, 4 items per row
  } else if (screenWidth < lg) {
    return 3; // For big screens, 4 items per row
  } else if (screenWidth < xl) {
    return 4; // For extra big screens, 6 items per row
  } else if (screenWidth > xl && screenWidth < 1600) {
    return 4;
  } else if (screenWidth >= 1600) {
    return 5;

  }
};
export const itemsPerCol = (viewHeight, itemCount) => {
  const maxItemsPerCol = determineMaxItemsPerCol(viewHeight);

  // If there are fewer items than the maximum, scale the height of items
  if (itemCount < maxItemsPerCol) {
    return itemsPerRow;
  } else {
    return maxItemsPerCol;
  }
};

// Function to determine the maximum items per col based on screen height
export const determineMaxItemsPerCol = (viewHeight) => {
  if (viewHeight < xs) {
    return 2; // For extra small screens, maximum 2 items per col
  } else if (viewHeight < sm) {
    return 3; // For small screens, maximum 3 items per col
  } else if (viewHeight < md) {
    return 3; // For medium screens, maximum 4 items per col
  } else if (viewHeight < lg) {
    return 3; // For big screens, maximum 4 items per col
  } else if (viewHeight < xl) {
    return 4; // For extra big screens, maximum 5 items per col
  } else if (viewHeight > xl) {
    return 4; // For screens larger than xl, maximum 5 items per col
  } else {
    return 4; // Default maximum
  }
};


