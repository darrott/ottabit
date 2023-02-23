import React, { useState, createContext, useContext } from "react";

const themeStateContext = createContext();
const useTheme = useContext(themeStateContext);

const ThemeStateProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  return (
    <themeStateContext.Provider value={[theme, setTheme]}>
      {children}
    </themeStateContext.Provider>
  );
};

export default ThemeStateProvider;
