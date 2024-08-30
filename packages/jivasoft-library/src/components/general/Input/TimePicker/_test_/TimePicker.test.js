import { TimePicker } from "../Main";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";

import { useAppTheme, useViewport } from "app/data";

//Mock for global context
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

describe("Initial Render", () => {
  test("renders correctly with label prop", () => {
    const props = { label: "Pick a time" };
    render(<TimePicker {...props} />);
    const label = screen.getByText("Pick a time");
    expect(label).toBeInTheDocument();
  });

  test.skip("renders correctly with canedit prop", () => {
    const props = { canedit: 0 };
    render(<TimePicker {...props} />);
    const hoursArrow = screen.getByTestId("hours-arrow");
    const minutesArrow = screen.getByTestId("minutes-arrow");
    expect(hoursArrow).not.toBeInTheDocument();
    expect(minutesArrow).not.toBeInTheDocument();
  });
  test("renders correctly with twelvehr prop", () => {
    const props = { twelvehr: true };
    render(<TimePicker {...props} />);
    const period = screen.getByText(/AM|PM/);
    expect(period).toBeInTheDocument();
  });

  test("renders correctly with defaultValue prop", async () => {
    const props = { defaultValue: "2024-06-20T10:00:00Z" };
    render(<TimePicker {...props} />);
    const hoursInput = screen.getAllByPlaceholderText("--")[0];
    const minutesInput = screen.getAllByPlaceholderText("--")[1];
    expect(hoursInput.value).toBe("10");
    expect(minutesInput.value).toBe("00");
  });

  test("renders correctly with interval prop", () => {
    // const props = { interval: 15 };
    // render(<TimePicker {...props} />);
    // const hoursInput = screen.getAllByPlaceholderText("--")[0];
    // const minutesInput = screen.getAllByPlaceholderText("--")[1];
    // //fireEvent.change(hoursInput, { target: { value: "10" } });
    // fireEvent.change(minutesInput, { target: { value: "15" } });
    // expect(minutesInput.value).toBe("15");
  });
  test("renders correctly with inlineLabel prop", () => {
    // const props = { inlineLabel: true, label: "Pick a time" };
    // render(<TimePicker {...props} />);
    // // screen.logTestingPlaygroundURL()
    // const label = screen.getByText("Pick a time");
    // expect(label).toBeInTheDocument();
  });
  test("renders correctly with duration prop", () => {
    const props = { duration: true };
    render(<TimePicker {...props} />);
    const durationTextHr = screen.getByText("hrs");
    const durationTextMin = screen.getByText("mins");
    expect(durationTextHr).toBeInTheDocument();
    expect(durationTextMin).toBeInTheDocument();
  });
});

//Event Handling
describe("Event Handling", () => {
  test(" ncrement and decrement hours and minutes arrows when clicked", () => {
    render(<TimePicker />);

    const hourInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".hours");
    const minuteInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".minutes");

    const hourUpArrow = screen.getByTestId("up-hour");
    const hourDownArrow = screen.getByTestId("down-hour");
    const minuteUpArrow = screen.getByTestId("up-minute");
    const minuteDownArrow = screen.getByTestId("down-minute");

    fireEvent.click(hourUpArrow);
    fireEvent.click(hourUpArrow);
    expect(hourInput.value).toBe("01");

    fireEvent.click(hourDownArrow);
    expect(hourInput.value).toBe("00");

    fireEvent.click(minuteUpArrow);
    fireEvent.click(minuteUpArrow);
    expect(minuteInput.value).toBe("01");

    fireEvent.click(minuteDownArrow);
    expect(minuteInput.value).toBe("00");

    fireEvent.change(hourInput, { target: { value: "23" } });
    fireEvent.click(hourUpArrow);
    expect(hourInput.value).toBe("00");

    fireEvent.change(hourInput, { target: { value: "00" } });
    fireEvent.click(hourDownArrow);
    expect(hourInput.value).toBe("23");

    fireEvent.change(minuteInput, { target: { value: "59" } });
    fireEvent.click(minuteUpArrow);
    expect(minuteInput.value).toBe("00");

    fireEvent.change(minuteInput, { target: { value: "00" } });
    fireEvent.click(minuteDownArrow);
    expect(minuteInput.value).toBe("59");
  });

  test("updates input when user types", () => {
    render(<TimePicker />);
    const hourInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".hours");
    fireEvent.change(hourInput, { target: { value: "14" } });
    expect(hourInput.value).toBe("14");
  });

  test("updates input when user types", () => {
    render(<TimePicker />);
    const minuteInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".minutes");
    fireEvent.change(minuteInput, { target: { value: "30" } });
    expect(minuteInput.value).toBe("30");
  });

  test("handles focus events on inputs'", () => {
    render(<TimePicker />);
    const hourInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".hours");
    const minuteInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".minutes");

    fireEvent.focus(hourInput);
    expect(document.activeElement).toBe(hourInput);

    fireEvent.focus(minuteInput);
    expect(document.activeElement).toBe(minuteInput);
  });

  test("opens dropdown when clock icon is clicked'", () => {
    render(<TimePicker />);
    const clockIcon = screen
      .getByTestId("timepicker-span")
      .querySelector(".btn_DEFAULT_DEFAULT");
    fireEvent.click(clockIcon);
    const firstOption = screen.getAllByText("00")[0];
    fireEvent.click(firstOption);
    const dropdown = screen.queryByTestId("TIMEDROPDOWN");
    expect(dropdown).not.toBeInTheDocument();
  });

  test("Closes when clicked the caret sign", () => {
    render(<TimePicker />);
    const clockIcon = screen.getByTestId("clock-icon");
    expect(clockIcon).toBeInTheDocument();

    fireEvent.click(clockIcon);
    const dropdownList = screen.getByTestId("time-dropdown");
    expect(dropdownList).toBeInTheDocument();

    const chevronUp = screen.getByTestId("chevron-up-icon");
    expect(chevronUp).toBeInTheDocument();

    fireEvent.click(chevronUp);
    expect(dropdownList).not.toBeInTheDocument();
  });
  //Doesnot support keyboard interaction
  //   test.skip(" handle arrow key navigation for hours", () => {
  //     render(<TimePicker />);
  //     const hourInput = screen.getAllByPlaceholderText("--")[0];
  //     fireEvent.focus(hourInput);
  //     // Arrow up  increment the hour
  //     fireEvent.keyDown(hourInput, { key: "ArrowUp" });
  //     expect(hourInput.value).toBe("01");
  //     // Arrow down  decrement the hour
  //     fireEvent.keyDown(hourInput, { key: "ArrowDown" });
  //     expect(hourInput.value).toBe("00");
  //   });
  //clicking on the clock  give list of possible time
  //Closing by clicking the up caret icon//
});

describe("state management", () => {
  test("toggles AM/PM when clicked (if 12-hour format)", () => {
    const timepicker = render(<TimePicker twelvehr={true} />);
    const amPmElement = timepicker.container.querySelector(
      'div[style*="cursor: pointer"]'
    );
    if (amPmElement) {
      expect(amPmElement.textContent).toBe("AM");
      fireEvent.click(amPmElement);
      expect(amPmElement.textContent).toBe("PM");
    }
  });

  test("should handle selecting a time from the dropdown correctly", () => {
    render(<TimePicker />);
    const clockIcon = screen.getByTestId("clock-icon");
    fireEvent.click(clockIcon); //opens up dropdown
    const dropdownOptionHr = screen.getAllByText("01")[0]; //search for the time from hour
    const dropdownOptionMin = screen.getAllByText("00")[1];
    fireEvent.click(dropdownOptionHr);
    fireEvent.click(dropdownOptionMin);

    const minuteInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".minutes");
    expect(minuteInput.value).toBe("00");
    const hrInput = screen
      .getByTestId("timepicker-span")
      .querySelector(".hours");
    expect(hrInput.value).toBe("01");
  });
});
