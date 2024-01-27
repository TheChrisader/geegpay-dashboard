// ThemeProvider.js
// import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children, theme }) => {
  //   const [theme, setTheme] = useState("light");

  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   };

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
