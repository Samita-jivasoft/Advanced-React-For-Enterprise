import useDroppable from "app/helpers/useDroppable";
import {renderHook,render, fireEvent} from "@testing-library/react";
import { useState } from "react";

//Using mock component
const initialItems= [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
 ]
const MockComponent = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const { droppableProps, draggedIndex } = useDroppable(items, setItems);
  
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          data-idx={index}
          {...droppableProps}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

describe('useDroppable Test', ()=>{
  test('Initial State Test', ()=>{
    const {result}= renderHook(()=> useDroppable([],()=>{}))
    expect(result.current.droppableProps).toEqual({
        draggable: true,
        onDragStart: expect.any(Function),
        onDragOver: expect.any(Function),
        onDragEnter: expect.any(Function),
        onDragLeave: expect.any(Function),
        onDrop: expect.any(Function),
      });
});
})

describe('Event Test', ()=>{
 test('for Drag and Drop Event test', () => {
  const { getAllByText } = render(<MockComponent initialItems={initialItems} />);
  const [item1, item2, item3] = getAllByText(/Item \d/); //matches the elemtn that start with Item and followed by digit

  // drag start => item 1
  fireEvent.dragStart(item1);
  // drop => 3
  fireEvent.drop(item3);
  const updatedItems = getAllByText(/Item \d/);
  expect(updatedItems[0].textContent).toBe('Item 2');
  expect(updatedItems[1].textContent).toBe('Item 3');
  expect(updatedItems[2].textContent).toBe('Item 1');
});

test('for drop on the same position', () => {
  const { getAllByText } = render(<MockComponent initialItems={initialItems} />);
  const [item1] = getAllByText(/Item \d/);
  // drag start => item 1
  fireEvent.dragStart(item1);
  // drop on => same item
  fireEvent.drop(item1);

  const updatedItems = getAllByText(/Item \d/);
  expect(updatedItems[0].textContent).toBe('Item 1');
  expect(updatedItems[1].textContent).toBe('Item 2');
  expect(updatedItems[2].textContent).toBe('Item 3');
});

test('for a prop Handling for custom handlers', () => {
  const customHandleStart = jest.fn();
  const customHandleDrop = jest.fn();
  const { getAllByText } = render(
    <MockComponent
      initialItems={initialItems}
      customHandleStart={customHandleStart}
      customHandleDrop={customHandleDrop}
    />
)});

test('for handling duplicate items', () => {
  const initialItemsWithDuplicates = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 1' }, // Duplicate item
  ];

  const { getAllByText } = render(<MockComponent initialItems={initialItemsWithDuplicates} />);
  const [item1, item2, duplicateItem1] = getAllByText(/Item \d/);
  fireEvent.dragStart(item1);
  fireEvent.drop(duplicateItem1);

  const updatedItems = getAllByText(/Item \d/);
  expect(updatedItems[0].textContent).toBe('Item 2');
  expect(updatedItems[1].textContent).toBe('Item 1');
  expect(updatedItems[2].textContent).toBe('Item 1');
});

})