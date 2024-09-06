"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _useDroppable = _interopRequireDefault(require("app/helpers/useDroppable"));
var _react = require("@testing-library/react");
var _react2 = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
//Using mock component
const initialItems = [{
  id: 1,
  text: 'Item 1'
}, {
  id: 2,
  text: 'Item 2'
}, {
  id: 3,
  text: 'Item 3'
}];
const MockComponent = _ref => {
  let {
    initialItems
  } = _ref;
  const [items, setItems] = (0, _react2.useState)(initialItems);
  const {
    droppableProps,
    draggedIndex
  } = (0, _useDroppable.default)(items, setItems);
  return /*#__PURE__*/React.createElement("div", null, items.map((item, index) => /*#__PURE__*/React.createElement("div", _extends({
    key: item.id,
    "data-idx": index
  }, droppableProps), item.text)));
};
describe('useDroppable Test', () => {
  test('Initial State Test', () => {
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useDroppable.default)([], () => {}));
    expect(result.current.droppableProps).toEqual({
      draggable: true,
      onDragStart: expect.any(Function),
      onDragOver: expect.any(Function),
      onDragEnter: expect.any(Function),
      onDragLeave: expect.any(Function),
      onDrop: expect.any(Function)
    });
  });
});
describe('Event Test', () => {
  test('for Drag and Drop Event test', () => {
    const {
      getAllByText
    } = (0, _react.render)(/*#__PURE__*/React.createElement(MockComponent, {
      initialItems: initialItems
    }));
    const [item1, item2, item3] = getAllByText(/Item \d/); //matches the elemtn that start with Item and followed by digit

    // drag start => item 1
    _react.fireEvent.dragStart(item1);
    // drop => 3
    _react.fireEvent.drop(item3);
    const updatedItems = getAllByText(/Item \d/);
    expect(updatedItems[0].textContent).toBe('Item 2');
    expect(updatedItems[1].textContent).toBe('Item 3');
    expect(updatedItems[2].textContent).toBe('Item 1');
  });
  test('for drop on the same position', () => {
    const {
      getAllByText
    } = (0, _react.render)(/*#__PURE__*/React.createElement(MockComponent, {
      initialItems: initialItems
    }));
    const [item1] = getAllByText(/Item \d/);
    // drag start => item 1
    _react.fireEvent.dragStart(item1);
    // drop on => same item
    _react.fireEvent.drop(item1);
    const updatedItems = getAllByText(/Item \d/);
    expect(updatedItems[0].textContent).toBe('Item 1');
    expect(updatedItems[1].textContent).toBe('Item 2');
    expect(updatedItems[2].textContent).toBe('Item 3');
  });
  test('for a prop Handling for custom handlers', () => {
    const customHandleStart = jest.fn();
    const customHandleDrop = jest.fn();
    const {
      getAllByText
    } = (0, _react.render)(/*#__PURE__*/React.createElement(MockComponent, {
      initialItems: initialItems,
      customHandleStart: customHandleStart,
      customHandleDrop: customHandleDrop
    }));
  });
  test('for handling duplicate items', () => {
    const initialItemsWithDuplicates = [{
      id: 1,
      text: 'Item 1'
    }, {
      id: 2,
      text: 'Item 2'
    }, {
      id: 3,
      text: 'Item 1'
    } // Duplicate item
    ];
    const {
      getAllByText
    } = (0, _react.render)(/*#__PURE__*/React.createElement(MockComponent, {
      initialItems: initialItemsWithDuplicates
    }));
    const [item1, item2, duplicateItem1] = getAllByText(/Item \d/);
    _react.fireEvent.dragStart(item1);
    _react.fireEvent.drop(duplicateItem1);
    const updatedItems = getAllByText(/Item \d/);
    expect(updatedItems[0].textContent).toBe('Item 2');
    expect(updatedItems[1].textContent).toBe('Item 1');
    expect(updatedItems[2].textContent).toBe('Item 1');
  });
});