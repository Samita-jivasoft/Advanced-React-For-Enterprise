import React, { createContext, useContext, useState } from 'react';

const AbortControllerContext = createContext();

export const useAuthAbortController = () => useContext(AbortControllerContext);

export const AuthAbortControllerProvider = ({ children }) => {
  const [abortController, setAbortController] = useState(null);

  const cancelCurrentController = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  const createController = () => {
    //Kill Exisiting Controller
    cancelCurrentController()

    //Create new Controller
    const newController = new AbortController();
    setAbortController(newController);
    return newController;
  };

  const cancelController = () => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
    }
  };

  return (
    <AbortControllerContext.Provider value={{ createController, cancelController }}>
      {children}
    </AbortControllerContext.Provider>
  );
};
