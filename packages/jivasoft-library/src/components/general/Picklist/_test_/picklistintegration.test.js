import React from "react";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import { Search } from "components"; // Parent component
import { Picklist } from "components";
import { useAppTheme, useViewport } from "app/data";
import { useApp } from "app/data/context/AppContext";
import axios from "axios";

// Mocking global state
jest.mock("app/data", () => ({
  useAppTheme: jest.fn(),
  useViewport: jest.fn(),
}));

jest.mock("app/data/context/AppContext", () => ({
  useApp: jest.fn(),
}));

jest.mock("axios");

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
// Setup and teardown functions
beforeEach(() => {
  useApp.mockReturnValue([{ validState: true }, jest.fn()]);
  useAppTheme.mockReturnValue([mockThemeState]);
  useViewport.mockReturnValue({ viewWidth: 1000, viewHeight: 768 });
});

afterEach(() => {
  jest.restoreAllMocks();
});

// Integration Test for Picklist
// Parent Component ==> SearchBar, child component ==>  Picklist
describe("Picklist Integration Test", () => {
  test("renders SearchBar and Picklist, handles interactions correctly", () => {
    render(
      <Search
        items={mockitems}
        placeholder="Search"
        idIdentifier="id"
        identifierKey={["name"]}
        defaultValues={[]}
        allowAlphabetical={true}
        showDefaultOverlay={true}
        allowMultipleSelect={true}
      />
    );

    const inputElement = screen.getByTestId("picklist-input");
    fireEvent.change(inputElement, { target: { value: "ap" } });
    expect(inputElement.value).toBe("ap");
    // Verify only filtered items are shown
    expect(screen.queryByText("apple")).toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
    expect(screen.queryByText("orange")).not.toBeInTheDocument();

    const itemElements = screen.getByText("apple");
    fireEvent.click(itemElements);

    const selectedItem = screen.getByTestId("selected-item");
    expect(within(selectedItem).getByText("apple")).toBeInTheDocument();
    expect(within(selectedItem).queryByText("mango")).not.toBeInTheDocument();
  });
  test("selects all items with selectAll button", () => {
    const { container } = render(
      <Search
        items={mockitems}
        placeholder="Search"
        idIdentifier="id"
        identifierKey={["name"]}
        defaultValues={[]}
        allowAlphabetical={true}
        showDefaultOverlay={true}
        allowMultipleSelect={true}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //console.log(container.innerHTML);
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
  test("clears selection with clear button", () => {
    render(
      <Search
        items={mockitems}
        placeholder="Search"
        idIdentifier="id"
        identifierKey={["name"]}
        defaultValues={[]}
        allowAlphabetical={true}
        showDefaultOverlay={true}
        allowMultipleSelect={true}
      />
    );

    fireEvent.click(screen.getByText("apple"));
    fireEvent.click(screen.getByText("banana"));
    fireEvent.click(screen.getByText("mango"));

    //Verify the initial selected items
    let selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(3);

    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);

    //Find and click the clear button
    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);

    //Verify that the selection is cleared
    selectedItems = screen.queryAllByTestId("selected-item");
    expect(selectedItems.length).toBe(0);
  });
  test("selects item on click and deselects an item when clicked the selected item", () => {
    render(
      <Search
        items={mockitems}
        placeholder="Search"
        idIdentifier="id"
        identifierKey={["name"]}
        defaultValues={[]}
        allowAlphabetical={true}
        showDefaultOverlay={true}
        allowMultipleSelect={true}
      />
    );

    //Expand dropdown
    const chevronDownIcon = screen.getByTestId("chevron-down-icon");
    fireEvent.click(chevronDownIcon);
    //Select multiple items
    fireEvent.click(screen.getByText("banana"));
    fireEvent.click(screen.getByText("mango"));
    //Verify selected items
    let selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(2);
    expect(within(selectedItems[0]).getByText("banana")).toBeInTheDocument();
    expect(within(selectedItems[1]).getByText("mango")).toBeInTheDocument();
    fireEvent.click(within(selectedItems[0]).getByText("banana"));
    selectedItems = screen.getAllByTestId("selected-item");
    expect(selectedItems.length).toBe(1);
    expect(within(selectedItems[0]).getByText("mango")).toBeInTheDocument();
  });
});

