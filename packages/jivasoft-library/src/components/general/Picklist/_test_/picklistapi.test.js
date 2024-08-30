// import React from "react";
// import {
//   render,
//   screen,
//   waitFor,
// } from "@testing-library/react";
// import { Picklist } from "components";
// import { useAppTheme, useViewport } from "app/data";
// import { useApp } from "app/data/context/AppContext";
// import axios from "axios";

// // Mocking global state
// jest.mock("app/data", () => ({
//   useAppTheme: jest.fn(),
//   useViewport: jest.fn(),
// }));

// jest.mock("app/data/context/AppContext", () => ({
//   useApp: jest.fn(),
// }));

// jest.mock('axios')

// const mockThemeState = {
//   currentTheme: {
//     successColor: "#008079",
//     infoColor: "#B8DAFF",
//     warnColor: "#FFB753",
//     dangerColor: "#FF5353",
//     secondaryColor: "#5FD3FF",
//     bgSolid: "#E4E4E4",
//   },
// };

// // Setup and teardown functions
// beforeEach(() => {
//   useApp.mockReturnValue([{ validState: true }, jest.fn()]);
//   useAppTheme.mockReturnValue([mockThemeState]);
//   useViewport.mockReturnValue({ viewWidth: 1000, viewHeight: 768 });
// });

// afterEach(() => {
//   jest.restoreAllMocks();
// });

// // API Testing
// describe("API Testing", () => {
//     test('should fetch data and display it correctly', async () => {
//       // const mockItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
//       // axios.get.mockResolvedValueOnce({ data: mockItems });
//       // render(<Picklist/>);
//       // // Wait for API call and insert expected assertions
//       // expect(axios.get).toHaveBeenCalledTimes(1);
//       // await waitFor(() => {
//       //   mockItems.forEach(item => {
//       //     expect(screen.getByText(item.name)).toBeInTheDocument();
//       //   });
//       // });
//     });
// });
