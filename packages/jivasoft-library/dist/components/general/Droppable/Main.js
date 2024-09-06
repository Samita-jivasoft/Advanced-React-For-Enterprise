"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Droppable = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Droppable = _ref => {
  let {
    children,
    propFunction = 'null'
  } = _ref;
  function _onDragStart(e) {
    var objData = JSON.parse(e.dataTransfer.getData('application/json'));
    const draggableElement = document.getElementById(objData.id);
    //draggableElement.style.positon = 'relative'
    const dropzone = e.target;
    dropzone.removeChild(draggableElement);
  }
  function _onDrop(e) {
    var objData = JSON.parse(e.dataTransfer.getData('application/json'));
    //const draggableElement = document.getElementById(objData.id);
    //draggableElement.style.positon = 'relative'
    //const dropzone = e.target;
    // dropzone.appendChild(draggableElement);

    if (typeof propFunction === 'function') {
      propFunction(objData);
    }
    e.dataTransfer.clearData();
  }
  function _onDragOver(e) {
    e.preventDefault();
    //e.dataTransfer.dropEffect = "move";
  }
  return /*#__PURE__*/_react.default.createElement(_.DropZoneWrapper, {
    onDragStart: e => _onDragStart(e),
    onDragOver: e => _onDragOver(e),
    onDrop: e => _onDrop(e)
  }, children);
};

// Droppable.defaultProps = {
//   propFunction : 'null'
// }
exports.Droppable = Droppable;