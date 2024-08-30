import React from "react";
import { TestbedBodyStyled } from "./styles";
import { useApp } from "app/data/context/AppContext";

export const Testbed = ({ children }) => {
  const [appState] = useApp();
  return (
    <TestbedBodyStyled onDragOver={(e) => e.preventDefault()}>
      {children}
    </TestbedBodyStyled>
  );
};
