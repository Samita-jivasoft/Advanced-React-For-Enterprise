"use strict";

var _useDraggable = _interopRequireDefault(require("app/helpers/useDraggable"));
var _react = require("@testing-library/react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*==============Initial State Test=====================*/
describe("Initial State Test", () => {
  test("Initial State", () => {
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useDraggable.default)());
    expect(result.current.isDragging).toBeFalsy();
    expect(result.current.dragStart).toBeNull();
    expect(result.current.position).toEqual({
      x: 0,
      y: 0
    });
  });
});

/*==============Event Test===========================*/
describe("Event Test", () => {
  test("MouseDown Event", () => {
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useDraggable.default)());
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseDown({
        clientX: 100,
        clientY: 100
      });
    });
    expect(result.current.isDragging).toBeTruthy();
  });
  test("MouseMove Event", () => {
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useDraggable.default)());
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseDown({
        clientX: 100,
        clientY: 100
      });
    });
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseMove({
        clientX: 150,
        clientY: 150
      });
    });
    expect(result.current.position).toEqual({
      x: 50,
      y: 50
    });
  });
  test("MouseUp Event", () => {
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useDraggable.default)());
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseDown({
        clientX: 100,
        clientY: 100
      });
    });
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseMove({
        clientX: 150,
        clientY: 150
      });
    });
    (0, _react.act)(() => {
      result.current.draggableProps.onMouseUp();
    });
    expect(result.current.isDragging).toBeFalsy();
  });
});