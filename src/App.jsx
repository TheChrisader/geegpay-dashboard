import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import ThemeProvider from "./context/themeProvider";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={`flex bg-screenBg`}>
        <Sidebar
          toggle={() => {
            document.body.classList.toggle("dark");
            setDarkTheme(!darkTheme);
          }}
        />
        <div className="w-full bg-screenBg mb-2">
          <Header />
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
