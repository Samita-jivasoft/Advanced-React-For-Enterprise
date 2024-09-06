"use strict";

require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _components = require("components");
var _data = require("app/data");
var _gi = require("react-icons/gi");
var _fa = require("react-icons/fa");
var _helpers = require("components/general/DynamicIcon/helpers");
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock("app/data", () => ({
  useAppTheme: jest.fn()
}));
jest.mock("react-icons/gi", () => ({
  GiNotebook: () => /*#__PURE__*/_react.default.createElement("svg", {
    title: "notebook-icon"
  })
}));
jest.mock("react-icons/md", () => ({
  MdListAlt: () => /*#__PURE__*/_react.default.createElement("svg", {
    title: "crud-icon"
  }),
  MdEdit: () => /*#__PURE__*/_react.default.createElement("svg", {
    title: "edit-icon"
  }),
  MdEditOff: () => /*#__PURE__*/_react.default.createElement("svg", {
    title: "editoff-icon"
  })
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
describe("DynamicIcon", () => {
  beforeEach(() => {
    _data.useAppTheme.mockReturnValue([mockThemeState]);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("Test for components", () => {
    test("Initial Render", () => {
      const renderedComponent = (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, null));
      const iconWrapper = renderedComponent.getByTestId("icon-wrapper");
      //console.log(renderedComponent)
      expect(iconWrapper).toBeInTheDocument();
      //console.log("TestDone 1")
    });
    describe("Props Handling", () => {
      test('for checking type, should render the correct icon for "form" type', () => {
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          type: "form"
        }));
        const icon = _react2.screen.getByTitle("notebook-icon");
        expect(icon).toBeInTheDocument();
        //console.log("TestDone 2")
      });
      test('for checking type, should render the correct icon for "crud" type', () => {
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          type: "crud"
        }));
        const icon = _react2.screen.getByTitle("crud-icon");
        expect(icon).toBeInTheDocument();
        //console.log("TestDone 3")
      });
      test('for checking type,[failing test]]', () => {
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          type: "crud"
        }));
        const icon = _react2.screen.queryByTitle("edit-icon");
        expect(icon).not.toBeInTheDocument();
      });
      test("for the badge", () => {
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          badge: {
            position: "top-right",
            background: "red",
            label: "10"
          }
        }));
        const badge = _react2.screen.getByText("10");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveStyle("background-color: red");
        expect(badge).toHaveStyle("transform: translate(100%,-90%)");
        //console.log("TestDone 4")
      });
      test("for the initials when showInitials prop is true", () => {
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          label: "Schedule Details",
          showInitials: true
        }));
        const initials = _react2.screen.getByText("SD");
        expect(initials).toBeInTheDocument();
        //console.log("TestDone 5")
      });
      test("for missing or invalid props", () => {
        const consoleErrorMock = jest.fn();
        console.error = consoleErrorMock;
        // console.log("In console",console.error)
        (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_components.DynamicIcon, {
          type: "invalid",
          status: "invalid"
        }));
        expect(consoleErrorMock).not.toHaveBeenCalled();
      });
    });
  });

  //Test for helpers
  describe("Test for getIcon", () => {
    test("for form, should return GiNotebook", () => {
      const icon = (0, _helpers.getIcon)("form");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_gi.GiNotebook, null));
    });
    test("for crud, should return MDListAlt", () => {
      const icon = (0, _helpers.getIcon)("crud");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_md.MdListAlt, null));
    });
    test("for report, should return RiPieChartBoxLine", () => {
      const icon = (0, _helpers.getIcon)("report");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_ri.RiPieChartBoxLine, null));
    });
    test("for unknown, should return null", () => {
      const icon = (0, _helpers.getIcon)("null");
      expect(icon).toEqual(null);
    });
  });
  describe("Test for useGetStatus", () => {
    test("for create", () => {
      const icon = (0, _helpers.useGetStatus)("create");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_fa.FaPlus, {
        style: {
          color: '#E4E4E4'
        }
      }));
    });
    test("for read", () => {
      const icon = (0, _helpers.useGetStatus)("read");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_fa.FaBookOpen, {
        style: {
          color: '#E4E4E4'
        }
      }));
    });
    test("for report", () => {
      const icon = (0, _helpers.useGetStatus)("update");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_fa.FaPen, {
        style: {
          color: '#E4E4E4'
        }
      }));
    });
    test("for delete", () => {
      const icon = (0, _helpers.useGetStatus)("delete");
      expect(icon).toEqual(/*#__PURE__*/_react.default.createElement(_fa.FaTrashAlt, {
        style: {
          color: '#E4E4E4'
        }
      }));
    });
    test("for null", () => {
      const icon = (0, _helpers.useGetStatus)("any");
      expect(icon).toEqual(null);
    });
  });
  describe('Test for useGetBackground', () => {
    test('for background color based on type and status', () => {
      const background = (0, _helpers.useGetBackground)('form', true, 'create');
      expect(background).toBe('#e8f3f3');
    });
    test('returns transparent when background is false', () => {
      const background = (0, _helpers.useGetBackground)('form', false, 'create');
      expect(background).toBe('transparent');
    });
  });
  describe('Test for useGetFillColorByTypeOrStatus', () => {
    test('when both type and status is passed, type takes precedence', () => {
      const background = (0, _helpers.useGetFillColorByTypeOrStatus)('form', 'create');
      expect(background).toBe('#008079');
    });
    test('when only status is passed', () => {
      const background = (0, _helpers.useGetFillColorByTypeOrStatus)('create');
      expect(background).toBe('#5FD3FF');
    });
    test('when only type is passed', () => {
      const background = (0, _helpers.useGetFillColorByTypeOrStatus)('form');
      expect(background).toBe('#008079');
    });
    test('when unknown value is passed', () => {
      const background = (0, _helpers.useGetFillColorByTypeOrStatus)('unknown');
      expect(background).toBe('#5FD3FF');
    });
  });
  describe('getBadgePositionStyles', () => {
    test(' for top-right position', () => {
      const styles = (0, _helpers.getBadgePositionStyles)('top-right');
      expect(styles.trim()).toBe('transform: translate(100%, -90%);');
    });
    test('for bottom-right position', () => {
      const styles = (0, _helpers.getBadgePositionStyles)('bottom-right');
      expect(styles.trim()).toBe('transform: translate(30%, 90%);');
    });
    test('for top-left position', () => {
      const styles = (0, _helpers.getBadgePositionStyles)('top-left');
      expect(styles.trim()).toBe('transform: translate(-30%, -100%);');
    });
    test('for bottom-left position', () => {
      const styles = (0, _helpers.getBadgePositionStyles)('bottom-left');
      expect(styles.trim()).toBe('transform: translate(-30%, 90%);');
    });
    test('for unknown position', () => {
      const styles = (0, _helpers.getBadgePositionStyles)('unknown');
      expect(styles.trim()).toBe('transform: translate(60%, -90%);');
    });
  });
});