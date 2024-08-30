import React from "react";

import { render, screen, fireEvent, within } from "@testing-library/react";
import { Picklist } from "../Wrapper";
import { useViewport, useAppTheme } from "app/data";
import { SimpleParentComponent } from "testing";

/**======================================Mocking global state======================================*/
jest.mock("app/data", () => ({
  useAppTheme: jest.fn(),
  useViewport: jest.fn(),
}));

const mockThemeState = {
  currentTheme: {
    successColor: "#008079",
    infoColor: "#B8DAFF",
    warnColor: "#FFB753",
    dangerColor: "#FF5353",
    secondaryColor: "#5FD3FF",
    bgSolid: "#E4E4E4",
  },
};

//Setup and teardown functions
beforeEach(() => {
  useAppTheme.mockReturnValue([mockThemeState]);
  useViewport.mockReturnValue({ viewWidth: 1000, viewHeight: 768 });
});

afterEach(() => {
  jest.restoreAllMocks();
});
const mockitems = [
  {
    id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
    name: "apple",
  },
  {
    id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
    name: "banana",
  },
  {
    id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
    name: "mango",
  },
  {
    id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
    name: "orange",
  },
];

/*======================================Initial Render==============================================*/
describe("Initial Render", () => {
  test("renders the component without any props", () => {
    render(<Picklist />);
    expect(screen.getByTestId("picklist-input")).toBeInTheDocument();
  });
});

/*======================================Props handling===============================================*/
describe("Props Handling", () => {
  test("renders plus button, allowAddingItems = true", () => {
    render(<Picklist allowAddingItems={true} />);
    const plusButton = screen.getByTestId("plus-icon");
    expect(plusButton).toBeInTheDocument();
  });

  /* Failing Test */
  test("does not render plus button when allowAddingItems = false", () => {
    render(<Picklist allowAddingItems={false} />);
    const plusButton = screen.queryByTestId("plus-icon");
    expect(plusButton).not.toBeInTheDocument();
  });

  /* Placeholder test [with item] */
  test("return correct placeholder, with item", () => {
    render(<Picklist items={mockitems} placeholder={"Search for"} />);
    const inputElement = screen.getByPlaceholderText("Search for");
    expect(inputElement).toBeInTheDocument();
  });

  /* Placeholder test [without item] */
  test("returns default placeholder with no items", () => {
    render(
      <Picklist items={[]} placeholder={"Search for"} allowAddingItems={true} />
    );
    const inputElement = screen.getByPlaceholderText("Search for");
    expect(inputElement).toBeInTheDocument();
  });

  /* Disable = true */
  test("selection is disabled with 'disable = true' ", () => {
    render(
      <Picklist
        items={mockitems}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label", "other"]}
        fieldsSeperator={["-"]}
        disable={true}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={5}
      />
    );
    const inputElement = screen.getByPlaceholderText("No options available");
    expect(inputElement).toBeInTheDocument();
  });

  /* AllowMultipleSelections = true */
  test(" allows selections of multiple items with 'allowMultipleSelections = true'", () => {
    render(
      <Picklist
        items={mockitems}
        identifier={"id"}
        selectedItems={[
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },

          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
        allowMultipleSelections={true}
      />
    );

    const selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
  });

  //Other props handling are tested in state management test suites as there were state updates.
});

/**======================================Event handling===============================================*/
describe("Event Handling", () => {
  /* Dropdown Test */
  test("shows chevron down icon  when dropdown is collapsed", () => {
    render(
      <Picklist
        items={mockitems}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
      />
    );
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    expect(chevronDownIcon).toBeInTheDocument();
  });

  /* Click Event for dropdown */
  test("renders chevron up icon when dropdown is expanded", () => {
    render(
      <Picklist
        items={mockitems}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
      />
    );

    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);
    const chevronUpIcon = screen.getByTestId("chevron-up-icon");
    expect(chevronUpIcon).toBeInTheDocument();
  });

  /* allowMultipleSelections = false, check with event */
  test("does not allow multiple selections when allowMultipleSelections is false", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
        allowMultipleSelections={false}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //Make sure the items are visible
    const item1 = screen.getByText("apple");
    const item2 = screen.getByText("banana");
    const item3 = screen.getByText("mango");
    const item4 = screen.getByText("orange");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    expect(item4).toBeInTheDocument();

    //Simulate select with click event
    fireEvent.click(item2);
    fireEvent.click(item3);

    //Verify only one item is selected
    const inputElement = screen.getByTestId("picklist-input");
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
    render(
      <Picklist
        items={mockitems}
        identifier="id"
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
      />
    );

    //Verify that the initial state matches the props
    const inputElement = screen.getByTestId("picklist-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  /* Selects, the deselects when clicked the same item */
  test("selects item on click and deselects an item when clicked the selected item", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        fieldsSeperator={["-"]}
        disable={false}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={5}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //Select multiple items
    fireEvent.click(screen.getByText("banana"));
    //console.log("Clicked on banana");
    fireEvent.click(screen.getByText("mango"));
    //console.log("Clicked on mango");

    //Verify selected items
    let selectedItems = screen.getAllByTestId("selected-item");
    //console.log("Selected items after selection:");
    selectedItems.forEach((item, index) => {
      //console.log(`Selected item ${index}: `, item.innerHTML);
    });
    expect(selectedItems.length).toBe(2);
    expect(within(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText("mango")).toBeInTheDocument();

    //Deselect an item
    fireEvent.click(within(selectedItems[0]).getByText("banana"));

    //Verify item is deselected
    selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(1);
    expect(within(selectedItems[0]).getByText("mango")).toBeInTheDocument();
  });

  //Test for search and filter
  test("updates search term and filters items", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
      />
    );

    const inputElement = screen.getByTestId("picklist-input");
    fireEvent.change(inputElement, { target: { value: "ap" } });
    expect(inputElement.value).toBe("ap");

    //Verify only filtered items are shown
    expect(screen.queryByText("apple")).toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
    expect(screen.queryByText("orange")).not.toBeInTheDocument();
  });

  /* Closes dropdown when clicking outside */
  test("closes dropdown when clicking outside", () => {
    render(
      <div>
        <Picklist
          items={mockitems}
          identifier={"id"}
          selectedItems={[]}
          searchKeys={["label"]}
          showFields={["label"]}
          allowAddingItems={true}
          allowMultipleSelections={true}
        />
        <div data-testid="outside-element">Outside Element</div>
      </div>
    );

    const inputElement = screen.getByTestId("picklist-input");
    fireEvent.focus(inputElement);

    //Verify that the dropdown is expanded
    expect(screen.getByTestId("chevron-up-icon")).toBeInTheDocument();

    //Click outside the component
    const outsideElement = screen.getByTestId("outside-element");
    fireEvent.mouseDown(outsideElement);

    //Verify the dropdown is closed
    expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
  });

  /*Test for clear button  */
  test("clears selection with clear button", () => {
    render(
      <Picklist
        items={mockitems}
        identifier={"id"}
        selectedItems={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
        ]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
        allowMultipleSelections={true}
      />
    );
    //Verify the initial selected items
    let selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);

    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //Find and click the clear button
    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);

    //Verify that the selection is cleared
    selectedItems = screen.queryAllByTestId("selected-item");
    expect(selectedItems.length).toBe(0);
  });

  /*Select All selects all items */
  test("selects all items with selectAll button", () => {
    const { container } = render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label", "other"]}
        fieldsSeperator={["-"]}
        disable={false}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={5}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //Find the selectAll from the HTML container
    const selectAllButton = screen.getByText("Select All");
    fireEvent.click(selectAllButton);

    //Verify that all items are selected
    const selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(4);
    expect(within(selectedItems[0]).getByText(/apple/)).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText(/banana/)).toBeInTheDocument();
    expect(within(selectedItems[2]).getByText(/mango/)).toBeInTheDocument();
    expect(within(selectedItems[3]).getByText(/orange/)).toBeInTheDocument();
  });
});

/**======================================Boundary Testing=============================================*/
describe("Boundary Testing", () => {
  test("handles empty state and displays appropriate message", () => {
    render(
      <Picklist
        items={[]}
        identifier="id"
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
        allowMultipleSelections={true}
        placeholder="No items available"
      />
    );

    //Verify that the placeholder shows no items are available
    const inputElement = screen.getByPlaceholderText("No items available");
    expect(inputElement).toBeInTheDocument();
  });

  //validmax should bound the max number of items selected
  test("disables additional selection when validMaximum is reached", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        fieldsSeperator={["-"]}
        disable={false}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={2}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);
    //Select multiple items
    fireEvent.click(screen.getByText("banana"));
    //console.log("Clicked on banana");
    fireEvent.click(screen.getByText("mango"));
    //console.log("Clicked on mango");
    fireEvent.click(screen.getByText("apple"));
    //console.log("Clicked on apple");

    //Verify selected items
    let selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    expect(within(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText("apple")).toBeInTheDocument(); //Replaces the last one as the valid max is 2
  });
  //For validMinimum
});

/**======================================Edge Case handling===========================================*/
describe("Edge case Handling", () => {
  //test for case insensitibe search
  test("handles case insensitive search correctly", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier="id"
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        allowAddingItems={true}
        allowMultipleSelections={true}
      />
    );

    const inputElement = screen.getByTestId("picklist-input");
    fireEvent.change(inputElement, { target: { value: "AP" } });
    expect(inputElement.value).toBe("AP");

    //Verify only case-insensitive matching items are shown
    expect(screen.queryByText("apple")).toBeInTheDocument(); // matches this as search is case insensitive
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
    expect(screen.queryByText("mango")).not.toBeInTheDocument();
    expect(screen.queryByText("orange")).not.toBeInTheDocument();
  });

  //Allows the duplicate addition of value
  // if we type the item that is not in the list it adds
});

/**======================================Integration Test==============================================*/
//Testing with simple parent component that has Picklist as the child component
//Actual integration test with actual parent componnent is in picklistintegration.test.js file
describe("Integration Testing", () => {
  test("should render parent component and child component coorrectly ", () => {
    render(<SimpleParentComponent />);
    expect(
      screen.queryByText("Parent component is rendered.")
    ).toBeInTheDocument(); // making sure the rendering of the parent component.
    expect(screen.getByTestId("picklist-input")).toBeInTheDocument(); // Making sure that the picklist component is rendered.
  });

  test("should be able to perform picklist actions", () => {
    render(<SimpleParentComponent />);
    const plusButton = screen.getByTestId("plus-icon");
    expect(plusButton).toBeInTheDocument();
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);
    const chevronUpIcon = screen.getByTestId("chevron-up-icon");
    expect(chevronUpIcon).toBeInTheDocument();
    const selectAllButton = screen.getByText("Select All");
    fireEvent.click(selectAllButton);

    const selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(4);

    expect(within(selectedItems[0]).getByText(/apple/)).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText(/banana/)).toBeInTheDocument();
    expect(within(selectedItems[2]).getByText(/mango/)).toBeInTheDocument();
    expect(within(selectedItems[3]).getByText(/orange/)).toBeInTheDocument();
  });
  test("should be able to perform picklist actions", () => {
    render(<SimpleParentComponent />);
    const inputElement = screen.getByTestId("picklist-input");
    fireEvent.change(inputElement, { target: { value: "ap" } });
    expect(inputElement.value).toBe("ap");

    //Verify only filtered items are shown
    expect(screen.queryByText("apple")).toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
    expect(screen.queryByText("orange")).not.toBeInTheDocument();
  });
});

/**======================================API Tsting=====================================================*/
// describe("API testing", () => {
//   test("Testing with axios", () => {});
// });

/*=============================Accessibilty Test=======================================================*/
describe("Accessibility Test", () => {
  test("handles keyboard navigation and selection", () => {
    render(
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        fieldsSeperator={["-"]}
        disable={false}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={5}
      />
    );

    const input = screen.getByTestId("picklist-input");
    fireEvent.focus(input);
   

    // fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    //Verify selected items
    let selectedItems = screen.getAllByTestId("selected-item");

    expect(selectedItems.length).toBe(2);
    expect(within(selectedItems[0]).getByText("apple")).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText("mango")).toBeInTheDocument();

  });
});


