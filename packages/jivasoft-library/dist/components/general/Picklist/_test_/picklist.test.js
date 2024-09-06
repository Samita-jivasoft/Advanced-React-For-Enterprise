"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Wrapper = require("../Wrapper");
var _data = require("app/data");
var _testing = require("testing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**======================================Mocking global state======================================*/
jest.mock("app/data", () => ({
  useAppTheme: jest.fn(),
  useViewport: jest.fn()
}));
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

//Setup and teardown functions
beforeEach(() => {
  _data.useAppTheme.mockReturnValue([mockThemeState]);
  _data.useViewport.mockReturnValue({
    viewWidth: 1000,
    viewHeight: 768
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});
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

/*======================================Initial Render==============================================*/
describe("Initial Render", () => {
  test("renders the component without any props", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, null));
    expect(_react2.screen.getByTestId("picklist-input")).toBeInTheDocument();
  });
});

/*======================================Props handling===============================================*/
describe("Props Handling", () => {
  test("renders plus button, allowAddingItems = true", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      allowAddingItems: true
    }));
    const plusButton = _react2.screen.getByTestId("plus-icon");
    expect(plusButton).toBeInTheDocument();
  });

  /* Failing Test */
  test("does not render plus button when allowAddingItems = false", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      allowAddingItems: false
    }));
    const plusButton = _react2.screen.queryByTestId("plus-icon");
    expect(plusButton).not.toBeInTheDocument();
  });

  /* Placeholder test [with item] */
  test("return correct placeholder, with item", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      placeholder: "Search for"
    }));
    const inputElement = _react2.screen.getByPlaceholderText("Search for");
    expect(inputElement).toBeInTheDocument();
  });

  /* Placeholder test [without item] */
  test("returns default placeholder with no items", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [],
      placeholder: "Search for",
      allowAddingItems: true
    }));
    const inputElement = _react2.screen.getByPlaceholderText("Search for");
    expect(inputElement).toBeInTheDocument();
  });

  /* Disable = true */
  test("selection is disabled with 'disable = true' ", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label", "other"],
      fieldsSeperator: ["-"],
      disable: true,
      placeholder: "Search for",
      allowMultipleSelections: true,
      allowAddingItems: true,
      validMinimum: 0,
      validMaximum: 5
    }));
    const inputElement = _react2.screen.getByPlaceholderText("No options available");
    expect(inputElement).toBeInTheDocument();
  });

  /* AllowMultipleSelections = true */
  test(" allows selections of multiple items with 'allowMultipleSelections = true'", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [{
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: true
    }));
    const selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
  });

  //Other props handling are tested in state management test suites as there were state updates.
});

/**======================================Event handling===============================================*/
describe("Event Handling", () => {
  /* Dropdown Test */
  test("shows chevron down icon  when dropdown is collapsed", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true
    }));
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    expect(chevronDownIcon).toBeInTheDocument();
  });

  /* Click Event for dropdown */
  test("renders chevron up icon when dropdown is expanded", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true
    }));
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);
    const chevronUpIcon = _react2.screen.getByTestId("chevron-up-icon");
    expect(chevronUpIcon).toBeInTheDocument();
  });

  /* allowMultipleSelections = false, check with event */
  test("does not allow multiple selections when allowMultipleSelections is false", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: false
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

    //Make sure the items are visible
    const item1 = _react2.screen.getByText("apple");
    const item2 = _react2.screen.getByText("banana");
    const item3 = _react2.screen.getByText("mango");
    const item4 = _react2.screen.getByText("orange");
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    expect(item4).toBeInTheDocument();

    //Simulate select with click event
    _react2.fireEvent.click(item2);
    _react2.fireEvent.click(item3);

    //Verify only one item is selected
    const inputElement = _react2.screen.getByTestId("picklist-input");
    expect(inputElement.value).toBe("banana");

    //Verify that the  other items are not selected
    expect(inputElement.value).not.toBe("apple");
    expect(inputElement.value).not.toBe("mango");
    expect(inputElement.value).not.toBe("orange");
  });
});

/**======================================State Management=============================================*/
describe("Initial State", () => {
  /* Initial State check */
  test(" verifies initial state is set up correctly", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true
    }));

    //Verify that the initial state matches the props
    const inputElement = _react2.screen.getByTestId("picklist-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  /* Selects, the deselects when clicked the same item */
  test("selects item on click and deselects an item when clicked the selected item", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      fieldsSeperator: ["-"],
      disable: false,
      placeholder: "Search for",
      allowMultipleSelections: true,
      allowAddingItems: true,
      validMinimum: 0,
      validMaximum: 5
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

    //Select multiple items
    _react2.fireEvent.click(_react2.screen.getByText("banana"));
    //console.log("Clicked on banana");
    _react2.fireEvent.click(_react2.screen.getByText("mango"));
    //console.log("Clicked on mango");

    //Verify selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    //console.log("Selected items after selection:");
    selectedItems.forEach((item, index) => {
      //console.log(`Selected item ${index}: `, item.innerHTML);
    });
    expect(selectedItems.length).toBe(2);
    expect((0, _react2.within)(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText("mango")).toBeInTheDocument();

    //Deselect an item
    _react2.fireEvent.click((0, _react2.within)(selectedItems[0]).getByText("banana"));

    //Verify item is deselected
    selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(1);
    expect((0, _react2.within)(selectedItems[0]).getByText("mango")).toBeInTheDocument();
  });

  //Test for search and filter
  test("updates search term and filters items", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true
    }));
    const inputElement = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "ap"
      }
    });
    expect(inputElement.value).toBe("ap");

    //Verify only filtered items are shown
    expect(_react2.screen.queryByText("apple")).toBeInTheDocument();
    expect(_react2.screen.queryByText("banana")).not.toBeInTheDocument();
    expect(_react2.screen.queryByText("orange")).not.toBeInTheDocument();
  });

  /* Closes dropdown when clicking outside */
  test("closes dropdown when clicking outside", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: true
    }), /*#__PURE__*/_react.default.createElement("div", {
      "data-testid": "outside-element"
    }, "Outside Element")));
    const inputElement = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.focus(inputElement);

    //Verify that the dropdown is expanded
    expect(_react2.screen.getByTestId("chevron-up-icon")).toBeInTheDocument();

    //Click outside the component
    const outsideElement = _react2.screen.getByTestId("outside-element");
    _react2.fireEvent.mouseDown(outsideElement);

    //Verify the dropdown is closed
    expect(_react2.screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
  });

  /*Test for clear button  */
  test("clears selection with clear button", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: mockitems,
      identifier: "id",
      selectedItems: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: true
    }));
    //Verify the initial selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

    //Find and click the clear button
    const clearButton = _react2.screen.getByTestId("clear-button");
    _react2.fireEvent.click(clearButton);

    //Verify that the selection is cleared
    selectedItems = _react2.screen.queryAllByTestId("selected-item");
    expect(selectedItems.length).toBe(0);
  });

  /*Select All selects all items */
  test("selects all items with selectAll button", () => {
    const {
      container
    } = (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label", "other"],
      fieldsSeperator: ["-"],
      disable: false,
      placeholder: "Search for",
      allowMultipleSelections: true,
      allowAddingItems: true,
      validMinimum: 0,
      validMaximum: 5
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);

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
});

/**======================================Boundary Testing=============================================*/
describe("Boundary Testing", () => {
  test("handles empty state and displays appropriate message", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: true,
      placeholder: "No items available"
    }));

    //Verify that the placeholder shows no items are available
    const inputElement = _react2.screen.getByPlaceholderText("No items available");
    expect(inputElement).toBeInTheDocument();
  });

  //validmax should bound the max number of items selected
  test("disables additional selection when validMaximum is reached", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      fieldsSeperator: ["-"],
      disable: false,
      placeholder: "Search for",
      allowMultipleSelections: true,
      allowAddingItems: true,
      validMinimum: 0,
      validMaximum: 2
    }));

    //Expand dropdown
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);
    //Select multiple items
    _react2.fireEvent.click(_react2.screen.getByText("banana"));
    //console.log("Clicked on banana");
    _react2.fireEvent.click(_react2.screen.getByText("mango"));
    //console.log("Clicked on mango");
    _react2.fireEvent.click(_react2.screen.getByText("apple"));
    //console.log("Clicked on apple");

    //Verify selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    expect((0, _react2.within)(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText("apple")).toBeInTheDocument(); //Replaces the last one as the valid max is 2
  });
  //For validMinimum
});

/**======================================Edge Case handling===========================================*/
describe("Edge case Handling", () => {
  //test for case insensitibe search
  test("handles case insensitive search correctly", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      allowAddingItems: true,
      allowMultipleSelections: true
    }));
    const inputElement = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "AP"
      }
    });
    expect(inputElement.value).toBe("AP");

    //Verify only case-insensitive matching items are shown
    expect(_react2.screen.queryByText("apple")).toBeInTheDocument(); // matches this as search is case insensitive
    expect(_react2.screen.queryByText("banana")).not.toBeInTheDocument();
    expect(_react2.screen.queryByText("mango")).not.toBeInTheDocument();
    expect(_react2.screen.queryByText("orange")).not.toBeInTheDocument();
  });

  //Allows the duplicate addition of value
  // if we type the item that is not in the list it adds
});

/**======================================Integration Test==============================================*/
//Testing with simple parent component that has Picklist as the child component
//Actual integration test with actual parent componnent is in picklistintegration.test.js file
describe("Integration Testing", () => {
  test("should render parent component and child component coorrectly ", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_testing.SimpleParentComponent, null));
    expect(_react2.screen.queryByText("Parent component is rendered.")).toBeInTheDocument(); // making sure the rendering of the parent component.
    expect(_react2.screen.getByTestId("picklist-input")).toBeInTheDocument(); // Making sure that the picklist component is rendered.
  });
  test("should be able to perform picklist actions", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_testing.SimpleParentComponent, null));
    const plusButton = _react2.screen.getByTestId("plus-icon");
    expect(plusButton).toBeInTheDocument();
    const chevronDownIcon = _react2.screen.getByTestId("chevron-down-icon");
    _react2.fireEvent.click(chevronDownIcon);
    const chevronUpIcon = _react2.screen.getByTestId("chevron-up-icon");
    expect(chevronUpIcon).toBeInTheDocument();
    const selectAllButton = _react2.screen.getByText("Select All");
    _react2.fireEvent.click(selectAllButton);
    const selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(4);
    expect((0, _react2.within)(selectedItems[0]).getByText(/apple/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText(/banana/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[2]).getByText(/mango/)).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[3]).getByText(/orange/)).toBeInTheDocument();
  });
  test("should be able to perform picklist actions", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_testing.SimpleParentComponent, null));
    const inputElement = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "ap"
      }
    });
    expect(inputElement.value).toBe("ap");

    //Verify only filtered items are shown
    expect(_react2.screen.queryByText("apple")).toBeInTheDocument();
    expect(_react2.screen.queryByText("banana")).not.toBeInTheDocument();
    expect(_react2.screen.queryByText("orange")).not.toBeInTheDocument();
  });
});

/**======================================API Tsting=====================================================*/
// describe("API testing", () => {
//   test("Testing with axios", () => {});
// });

/*=============================Accessibilty Test=======================================================*/
describe("Accessibility Test", () => {
  test("handles keyboard navigation and selection", () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Wrapper.Picklist, {
      items: [{
        id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
        label: "apple"
      }, {
        id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
        label: "banana"
      }, {
        id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
        label: "mango"
      }, {
        id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
        label: "orange"
      }],
      identifier: "id",
      selectedItems: [],
      searchKeys: ["label"],
      showFields: ["label"],
      fieldsSeperator: ["-"],
      disable: false,
      placeholder: "Search for",
      allowMultipleSelections: true,
      allowAddingItems: true,
      validMinimum: 0,
      validMaximum: 5
    }));
    const input = _react2.screen.getByTestId("picklist-input");
    _react2.fireEvent.focus(input);

    // fireEvent.keyDown(input, { key: 'ArrowDown' })
    _react2.fireEvent.keyDown(input, {
      key: "Enter"
    });
    _react2.fireEvent.keyDown(input, {
      key: "ArrowDown"
    });
    _react2.fireEvent.keyDown(input, {
      key: "Enter"
    });

    //Verify selected items
    let selectedItems = _react2.screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    expect((0, _react2.within)(selectedItems[0]).getByText("apple")).toBeInTheDocument();
    expect((0, _react2.within)(selectedItems[1]).getByText("mango")).toBeInTheDocument();
  });
});