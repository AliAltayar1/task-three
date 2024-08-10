import { createContext, useState } from "react";

export const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(
    localStorage.getItem("lang") === "ar"
  );

  const changeDirection = (lang) => {
    if (lang === "ar") {
      setIsArabic(true);
    } else {
      setIsArabic(false);
    }
  };

  return (
    <DirectionContext.Provider value={{ isArabic, changeDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};
