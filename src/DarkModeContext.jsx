import { createContext, useState, useEffect } from "react";

// Create the DarkModeContext
export const DarkModeContext = createContext();

// DarkModeProvider component that wraps around children components
export const DarkModeProvider = ({ children }) => {
  // Initialize dark mode state from localStorage if it exists, otherwise default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true";
  });

  // Effect to update localStorage whenever darkMode changes
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode ? "true" : "false");
  // }, [darkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
