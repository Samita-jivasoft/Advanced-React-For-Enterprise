import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@advanced-react-for-enterprise/react/lib"; 

import '@advanced-react-for-enterprise/scss/lib/Button.css'
const rootElement = document.getElementById('root');

if (rootElement) {
    
    const root = createRoot(rootElement);
    root.render(<Button label="Example Button" />);
} else {
    console.error("Root element not found.");
}
