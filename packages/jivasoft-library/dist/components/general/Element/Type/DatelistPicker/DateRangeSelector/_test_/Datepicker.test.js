"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _Datepicker = require("../Datepicker");
var _data = require("app/data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//Test cases
//Unit test
//Integration Test
//Onclick should render calendar component
//clicked outside 
//clicked inside
//Valid result on Calendar navigation

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
describe('DatetimePicker Integration Test', () => {
  const setup = () => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Datepicker.DatetimePicker, {
      dateTime: new Date().toISOString(),
      setDateTime: jest.fn(),
      label: "Select Date",
      warning: false,
      mode: "guided-input",
      format: "MM/DD/YY",
      validminimum: 0,
      validmaximum: 365,
      date: new Date(),
      setDate: jest.fn()
    }));
  };
});