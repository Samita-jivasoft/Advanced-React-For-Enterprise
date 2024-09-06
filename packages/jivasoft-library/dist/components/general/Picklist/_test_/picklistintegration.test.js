"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _components = require("components");
var _data = require("app/data");
var _AppContext = require("app/data/context/AppContext");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Parent component

// Mocking global state
jest.mock("app/data", () => ({
  useAppTheme: jest.fn(),
  useViewport: jest.fn()
}));
jest.mock("app/data/context/AppContext", () => ({
  useApp: jest.fn()
}));
jest.mock("axios");
const mockThemeState = {
  currentTheme: {
    successColor: "#008079",
    infoColor: "#B8DAFF",
    warnColor: "#FFB753",
    dangerColor: "#FF5353",
    secondaryColor: "#5FD3FF",
    bgSolid: "#E4E4E4"
  }
};
const mockitems = [{
  id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
  name: "apple"
}, {
  id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
  name: "banana"
}, {
  id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
  name: "mango"
}, {
  id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
  name: "orange"
}];
// Setup and teardown functions
beforeEach(() => {
  _AppContext.useApp.mockReturnValue([{
    validState: true
  }, jest.fn()]);
  _data.useAppTheme.mockReturnValue([mockThemeState]);
  _data.useViewport.mockReturnValue({
    viewWidth: 1000,
    viewHeight: 768
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

// Integration Test for Picklist
// Parent Component ==> SearchBar, child component ==>  Picklist
describe("Picklist Integration Test", () => {
  test("renders SearchBar and Picklist, handles interactions correctly", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.Search, {
      items: mockitems,
      placeholder: "Search",
      idIdentifier: "id",
      identifierKey: ["name"],
      defaultValues: [],
      allowAlphabetical: true,
      showDefaultOverlay: true,
      allowMultipleSelect: true
    }));
    const inputElement = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "ap"
      }
    });
    expect(inputElement.value).toBe("ap");
    // Verify only filtered items are shown
    expect(_react2.screen.queryByText("apple")).toBeInTheDocument();
    expect(_react2.screen.queryByText("banana")).not.toBeInTheDocument();
    expect(_react2.screen.queryByText("orange")).not.toBeInTheDocument();
    const itemElements = _react2.screen.getByText("apple");
    _react2.fireEvent.click(itemElements);
    const selectedItem = _react2.screen.getByTestId("selected-item");
    expect((0, _react2.within)(selectedItem).getByText("apple")).toBeInTheDocument();
    expect((0, _react2.within)(selectedItem).queryByText("mango")).not.toBeInTheDocument();
  });
  test("selects all items with selectAll button", () => {
    const {
      container
    } = (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.Search, {
      items: mockitems,
      placeholder: "Search",
      idIdentifier: "id",
      identifierKey: ["name"],
      defaultValues: [],
      allowAlphabetical: true,
      showDefaultOverlay: true,
      allowMultipleSelect: true
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

    //console.log(container.innerHTML);
    //Find the selectAll from the HTML container
    const selectAllButton = _react2.screen.getByText("Select All");
    _react2.fireEvent.click(selectAllButton);

    //Verify that all items are selected
    const selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(4);
    expect((0, _react2.within)(selectedItems[0]).getByText(/apple/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText(/banana/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[2]).getByText(/mango/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[3]).getByText(/orange/)).toBeInTheDocument();
  });
  test("clears selection with clear button", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.Search, {
      items: mockitems,
      placeholder: "Search",
      idIdentifier: "id",
      identifierKey: ["name"],
      defaultValues: [],
      allowAlphabetical: true,
      showDefaultOverlay: true,
      allowMultipleSelect: true
    }));
    _react2.fireEvent.click(_react2.screen.getByText("apple"));
    _react2.fireEvent.click(_react2.screen.getByText("banana"));
    _react2.fireEvent.click(_react2.screen.getByText("mango"));

    //Verify the initial selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(3);
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

    //Find and click the clear button
    const clearButton = _react2.screen.getByTestId("clear-button");
    _react2.fireEvent.click(clearButton);

    //Verify that the selection is cleared
    selectedItems = _react2.screen.queryAllByTestId("selected-item");
    expect(selectedItems.length).toBe(0);
  });
  test("selects item on click and deselects an item when clicked the selected item", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.Search, {
      items: mockitems,
      placeholder: "Search",
      idIdentifier: "id",
      identifierKey: ["name"],
      defaultValues: [],
      allowAlphabetical: true,
      showDefaultOverlay: true,
      allowMultipleSelect: true
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);
    //Select multiple items
    _react2.fireEvent.click(_react2.screen.getByText("banana"));
    _react2.fireEvent.click(_react2.screen.getByText("mango"));
    //Verify selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    expect((0, _react2.within)(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText("mango")).toBeInTheDocument();
    _react2.fireEvent.click((0, _react2.within)(selectedItems[0]).getByText("banana"));
    selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(1);
    expect((0, _react2.within)(selectedItems[0]).getByText("mango")).toBeInTheDocument();
  });
});