import React, { useState, useEffect, useContext, createContext } from "react";
import { language } from "../constants/device";

const AppContext = createContext();
// PROVIDER that holds all data and wraps them in top screen
function AppProvider(props) {
  const [bike, setBike] = useState("R_X_F_500");
  const [mKm, setMKm] = useState("Km");

  return (
    <AppContext.Provider
      value={{
        language,
        bike,
        mKm,
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
