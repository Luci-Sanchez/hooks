import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
