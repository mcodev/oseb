import React, { useState, useEffect, useContext, createContext } from "react";
import { language } from "../constants/device";

const AppContext = createContext();
// PROVIDER that holds all data and wraps them in top screen
function AppProvider(props) {
  const [test, setTest] = useState("works");
  const [test2, setTest2] = useState(null);

  return (
    <AppContext.Provider
      value={{
        test,
        test2,
        language,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

// CONSUMER that exports the values / states
function useAppContext() {
  return useContext(AppContext);
}

export { useAppContext, AppProvider };

// USE in screens
// import { useAppContext } from "../config/AppContext";
// const { value1, value2 } = useAppContext();
