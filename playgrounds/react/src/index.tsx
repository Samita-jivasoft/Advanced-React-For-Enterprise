import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@jivasoft/jivasoft-lib/lib/components/atoms/Button"; 

const rootElement = document.getElementById('root');

if (rootElement) {
    
    const root = createRoot(rootElement);
    root.render(<Button/>);
} else {
    console.error("Root element not found.");
}
