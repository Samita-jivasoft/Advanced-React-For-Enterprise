import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  AppContextProvider,
  ViewPortProvider,
  ThemeContextProvider,
} from "app/data";
import {
  initialAppState,
  appReducer,
  initialThemeState,
  themeReducer,
} from "app/data/reducers";
import { TestbedContextAggregate } from "screens/Test";
import { ErrorBoundary } from "components";
import { ScrollContextProvider } from "app/data/context/ScrollContext";
import { initialScrollState } from "app/data/reducers/scrollReducer";
import { scrollReducer } from "app/data/reducers/scrollReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={() => <div>Oops!</div>}>
      <ThemeContextProvider
        initialState={initialThemeState}
        reducer={themeReducer}
      >
        <AppContextProvider initialState={initialAppState} reducer={appReducer}>
          <ViewPortProvider>
            <ScrollContextProvider
              initialState={initialScrollState}
              reducer={scrollReducer}
            >
              <TestbedContextAggregate>
                <App />
              </TestbedContextAggregate>
            </ScrollContextProvider>
          </ViewPortProvider>
        </AppContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
