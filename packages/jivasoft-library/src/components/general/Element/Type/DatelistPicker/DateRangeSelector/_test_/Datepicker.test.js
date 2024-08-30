
//Test cases
//Unit test
//Integration Test
//Onclick should render calendar component
//clicked outside 
//clicked inside
//Valid result on Calendar navigation

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DatetimePicker } from '../Datepicker';
import { useAppTheme, useViewport } from 'app/data';


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


describe('DatetimePicker Integration Test', () => {
  const setup = () => {
    render(
      <DatetimePicker
        dateTime={new Date().toISOString()}
        setDateTime={jest.fn()}
        label="Select Date"
        warning={false}
        mode="guided-input"
        format="MM/DD/YY"
        validminimum={0}
        validmaximum={365}
        date={new Date()}
        setDate={jest.fn()}
      />);
  };

});
