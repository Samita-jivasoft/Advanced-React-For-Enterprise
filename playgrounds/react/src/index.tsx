import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@advanced-react-for-enterprise/react/lib";

// Find the root element in the DOM
const rootElement = document.getElementById('root');

// Create a root and render the component
const root = createRoot(rootElement);
root.render(<Button label="Example Button" />);
