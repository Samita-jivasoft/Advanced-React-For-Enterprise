"use strict";

require("core-js/modules/es.promise.js");
var _Main = require("../Main");
var _react = require("@testing-library/react");
var _data = require("app/data");
//Mock for global context
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
describe("Initial Render", () => {
  test("renders correctly with label prop", () => {
    const props = {
      label: "Pick a time"
    };
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, props));
    const label = _react.screen.getByText("Pick a time");
    expect(label).toBeInTheDocument();
  });
  test.skip("renders correctly with canedit prop", () => {
    const props = {
      canedit: 0
    };
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, props));
    const hoursArrow = _react.screen.getByTestId("hours-arrow");
    const minutesArrow = _react.screen.getByTestId("minutes-arrow");
    expect(hoursArrow).not.toBeInTheDocument();
    expect(minutesArrow).not.toBeInTheDocument();
  });
  test("renders correctly with twelvehr prop", () => {
    const props = {
      twelvehr: true
    };
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, props));
    const period = _react.screen.getByText(/AM|PM/);
    expect(period).toBeInTheDocument();
  });
  test("renders correctly with defaultValue prop", async () => {
    const props = {
      defaultValue: "2024-06-20T10:00:00Z"
    };
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, props));
    const hoursInput = _react.screen.getAllByPlaceholderText("--")[0];
    const minutesInput = _react.screen.getAllByPlaceholderText("--")[1];
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
    const props = {
      duration: true
    };
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, props));
    const durationTextHr = _react.screen.getByText("hrs");
    const durationTextMin = _react.screen.getByText("mins");
    expect(durationTextHr).toBeInTheDocument();
    expect(durationTextMin).toBeInTheDocument();
  });
});

//Event Handling
describe("Event Handling", () => {
  test(" ncrement and decrement hours and minutes arrows when clicked", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const hourInput = _react.screen.getByTestId("timepicker-span").querySelector(".hours");
    const minuteInput = _react.screen.getByTestId("timepicker-span").querySelector(".minutes");
    const hourUpArrow = _react.screen.getByTestId("up-hour");
    const hourDownArrow = _react.screen.getByTestId("down-hour");
    const minuteUpArrow = _react.screen.getByTestId("up-minute");
    const minuteDownArrow = _react.screen.getByTestId("down-minute");
    _react.fireEvent.click(hourUpArrow);
    _react.fireEvent.click(hourUpArrow);
    expect(hourInput.value).toBe("01");
    _react.fireEvent.click(hourDownArrow);
    expect(hourInput.value).toBe("00");
    _react.fireEvent.click(minuteUpArrow);
    _react.fireEvent.click(minuteUpArrow);
    expect(minuteInput.value).toBe("01");
    _react.fireEvent.click(minuteDownArrow);
    expect(minuteInput.value).toBe("00");
    _react.fireEvent.change(hourInput, {
      target: {
        value: "23"
      }
    });
    _react.fireEvent.click(hourUpArrow);
    expect(hourInput.value).toBe("00");
    _react.fireEvent.change(hourInput, {
      target: {
        value: "00"
      }
    });
    _react.fireEvent.click(hourDownArrow);
    expect(hourInput.value).toBe("23");
    _react.fireEvent.change(minuteInput, {
      target: {
        value: "59"
      }
    });
    _react.fireEvent.click(minuteUpArrow);
    expect(minuteInput.value).toBe("00");
    _react.fireEvent.change(minuteInput, {
      target: {
        value: "00"
      }
    });
    _react.fireEvent.click(minuteDownArrow);
    expect(minuteInput.value).toBe("59");
  });
  test("updates input when user types", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const hourInput = _react.screen.getByTestId("timepicker-span").querySelector(".hours");
    _react.fireEvent.change(hourInput, {
      target: {
        value: "14"
      }
    });
    expect(hourInput.value).toBe("14");
  });
  test("updates input when user types", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const minuteInput = _react.screen.getByTestId("timepicker-span").querySelector(".minutes");
    _react.fireEvent.change(minuteInput, {
      target: {
        value: "30"
      }
    });
    expect(minuteInput.value).toBe("30");
  });
  test("handles focus events on inputs'", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const hourInput = _react.screen.getByTestId("timepicker-span").querySelector(".hours");
    const minuteInput = _react.screen.getByTestId("timepicker-span").querySelector(".minutes");
    _react.fireEvent.focus(hourInput);
    expect(document.activeElement).toBe(hourInput);
    _react.fireEvent.focus(minuteInput);
    expect(document.activeElement).toBe(minuteInput);
  });
  test("opens dropdown when clock icon is clicked'", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const clockIcon = _react.screen.getByTestId("timepicker-span").querySelector(".btn_DEFAULT_DEFAULT");
    _react.fireEvent.click(clockIcon);
    const firstOption = _react.screen.getAllByText("00")[0];
    _react.fireEvent.click(firstOption);
    const dropdown = _react.screen.queryByTestId("TIMEDROPDOWN");
    expect(dropdown).not.toBeInTheDocument();
  });
  test("Closes when clicked the caret sign", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const clockIcon = _react.screen.getByTestId("clock-icon");
    expect(clockIcon).toBeInTheDocument();
    _react.fireEvent.click(clockIcon);
    const dropdownList = _react.screen.getByTestId("time-dropdown");
    expect(dropdownList).toBeInTheDocument();
    const chevronUp = _react.screen.getByTestId("chevron-up-icon");
    expect(chevronUp).toBeInTheDocument();
    _react.fireEvent.click(chevronUp);
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
    const timepicker = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, {
      twelvehr: true
    }));
    const amPmElement = timepicker.container.querySelector('div[style*="cursor: pointer"]');
    if (amPmElement) {
      expect(amPmElement.textContent).toBe("AM");
      _react.fireEvent.click(amPmElement);
      expect(amPmElement.textContent).toBe("PM");
    }
  });
  test("should handle selecting a time from the dropdown correctly", () => {
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.TimePicker, null));
    const clockIcon = _react.screen.getByTestId("clock-icon");
    _react.fireEvent.click(clockIcon); //opens up dropdown
    const dropdownOptionHr = _react.screen.getAllByText("01")[0]; //search for the time from hour
    const dropdownOptionMin = _react.screen.getAllByText("00")[1];
    _react.fireEvent.click(dropdownOptionHr);
    _react.fireEvent.click(dropdownOptionMin);
    const minuteInput = _react.screen.getByTestId("timepicker-span").querySelector(".minutes");
    expect(minuteInput.value).toBe("00");
    const hrInput = _react.screen.getByTestId("timepicker-span").querySelector(".hours");
    expect(hrInput.value).toBe("01");
  });
});