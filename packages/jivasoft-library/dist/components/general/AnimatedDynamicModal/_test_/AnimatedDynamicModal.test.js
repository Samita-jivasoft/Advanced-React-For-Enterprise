"use strict";

require("core-js/modules/es.promise.js");
var _Main = require("../Main");
var _react = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
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
describe("Initial Test", () => {
  test("Initial Render", () => {
    const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, null));
    const itemsContainer = container.getByTestId("items-container");
    expect(itemsContainer).toBeInTheDocument();
  });
});
describe("Props Handling", () => {
  describe("Check for Type Prop", () => {
    test("Renders correctly with type as modal", () => {
      const props = {
        type: "modal"
      };
      const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, props));
      const itemsContainer = container.getByTestId("items-container");
      expect(itemsContainer).toBeInTheDocument();
    });
    test("Renders correctly with type as banner  ", () => {
      const props = {
        type: "banner"
      };
      const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, props));
      const itemsContainer = container.getByTestId("animated-banner");
      expect(itemsContainer).toBeInTheDocument();
    });
    test("Renders correctly  with the type as fullscreen", () => {
      const props = {
        type: "fullscreen"
      };
      const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, props));
      const itemsContainer = container.getByTestId("animated-full");
      expect(itemsContainer).toBeInTheDocument();
    });
    test("Renders correctly with the type as bottom sheet", () => {
      const props = {
        type: "bottom sheet"
      };
      const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, props));
      const itemsContainer = container.getByTestId("animated-bottom-sheet");
      expect(itemsContainer).toBeInTheDocument();
    });
  });
  describe("Check for headerColor prop", () => {
    test("Renders correctly and apply the headerColor", () => {
      const props = {
        type: "modal",
        headerColor: "red",
        headerText: "Sample Header",
        fontColor: "blue",
        backgroundColor: "lightgray",
        height: "400px",
        width: "200px"
      };
      const container = (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, props));
      const itemsContainer = container.getByTestId("container");
      expect(itemsContainer).toBeInTheDocument();
      const headerElement = container.getByTestId("dynamic-header");
      expect(headerElement).toBeInTheDocument();
      expect(headerElement).toHaveStyle({
        backgroundColor: "red",
        color: "blue"
      });
      expect(itemsContainer).toHaveStyle({
        height: "400px",
        width: "200px"
      });
    });
  });
});
describe("Event handling", () => {
  test("Dismisses the modal after the specified delay", async () => {
    const onClose = jest.fn();
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, {
      type: "modal",
      delay: 1000,
      onClose: onClose
    }));
    await (0, _react.waitFor)(() => expect(onClose).toHaveBeenCalled(), {
      timeout: 2000
    });
  });
  test("Dissmissed the modal when close button (X) is clicked", () => {
    const onClose = jest.fn();
    (0, _react.render)(/*#__PURE__*/React.createElement(_Main.AnimatedDynamicModal, {
      type: "modal",
      headerColor: "blue",
      fontColor: "white",
      headerText: "Sample Header",
      dismissable: true,
      onClose: onClose
    }));
    const closeButton = _react.screen.getByTestId("close-button");
    _react.fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});