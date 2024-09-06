"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeProperties = normalizeProperties;
//Normalizes the properties of the object to lowercase
function normalizeProperties(item) {
  if (Array.isArray(item)) {
    item.forEach(element => normalizeProperties(element));
  } else if (typeof item === 'object' && item !== null) {
    Object.keys(item).forEach(key => {
      const lowerKey = key.toLowerCase();
      if (key !== lowerKey) {
        item[lowerKey] = item[key];
        delete item[key];
      }
      normalizeProperties(item[lowerKey] || item[key]);
    });
  }
}