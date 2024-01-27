import ThemeContext from "./themeContext";

const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
