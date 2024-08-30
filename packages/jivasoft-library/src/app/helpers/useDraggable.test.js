import useDraggable from "app/helpers/useDraggable";
import { renderHook, act } from "@testing-library/react";

/*==============Initial State Test=====================*/
describe("Initial State Test", () => {
  test("Initial State", () => {
    const { result } = renderHook(() => useDraggable());
    expect(result.current.isDragging).toBeFalsy();
    expect(result.current.dragStart).toBeNull();
    expect(result.current.position).toEqual({ x: 0, y: 0 });
  });
});

/*==============Event Test===========================*/
describe("Event Test", () => {
  test("MouseDown Event", () => {
    const { result } = renderHook(() => useDraggable());
    act(() => {
      result.current.draggableProps.onMouseDown({ clientX: 100, clientY: 100 });
    });
    expect(result.current.isDragging).toBeTruthy();
  });
  test("MouseMove Event", () => {
    const { result } = renderHook(() => useDraggable());
    act(() => {
      result.current.draggableProps.onMouseDown({ clientX: 100, clientY: 100 });
    });
    act(() => {
      result.current.draggableProps.onMouseMove({ clientX: 150, clientY: 150 });
    });
    expect(result.current.position).toEqual({ x: 50, y: 50 });
  });

  test("MouseUp Event", () => {
    const { result } = renderHook(() => useDraggable());
    act(() => {
      result.current.draggableProps.onMouseDown({ clientX: 100, clientY: 100 });
    });
    act(() => {
      result.current.draggableProps.onMouseMove({ clientX: 150, clientY: 150 });
    });
    act(() => {
      result.current.draggableProps.onMouseUp();
    });
    expect(result.current.isDragging).toBeFalsy();
  });
});
