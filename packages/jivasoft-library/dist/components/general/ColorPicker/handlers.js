"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleColorSelection = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
const handleColorSelection = (colorValue, setRecentlySelected, setSelectedColor) => {
  setRecentlySelected(prevRecentlySelected => {
    const indexOfColor = prevRecentlySelected.indexOf(colorValue);

    // If the color is not in the array, find the first undefined slot or replace the first index
    if (indexOfColor === -1) {
      const firstEmptyIndex = prevRecentlySelected.findIndex(color => color === undefined);
      const updatedRecentlySelected = [...prevRecentlySelected];
      if (firstEmptyIndex !== -1) {
        updatedRecentlySelected[firstEmptyIndex] = colorValue;
      } else {
        updatedRecentlySelected.shift();
        updatedRecentlySelected.push(colorValue);
      }
      return updatedRecentlySelected;
    }

    // If the color is already in the array, just return the array as is
    return prevRecentlySelected;
  });
  setSelectedColor(colorValue);
};
exports.handleColorSelection = handleColorSelection;