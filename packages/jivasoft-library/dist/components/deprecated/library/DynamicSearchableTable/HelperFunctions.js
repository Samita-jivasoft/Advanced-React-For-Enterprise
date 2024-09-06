"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIdentifier = void 0;
exports.highlight = highlight;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
const getIdentifier = (i, id) => {
  return Object.entries(i).map(i => id.includes(i[0]) ? i[1] : null).filter(n => n)[0];
};
exports.getIdentifier = getIdentifier;
function highlight(getAllDivs, value) {
  // console.log('highlighting divs', getAllDivs)
  // console.log('search input:',value)
  getAllDivs.map(i => i[0].innerHTML = value ? i[0].textContent.replace(new RegExp('(' + value + ')', 'gi'), '<span style="background-color:yellow">$1</span>') : i[0].textContent);
}