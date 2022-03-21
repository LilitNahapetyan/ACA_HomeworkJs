import React from "react";
import Layout from "./Layout";
import { themes } from "./helper/theme";
import useTheme from "./hooks/useTheme";
import "./App.css";

export const ThemeContext = React.createContext();

function App() {
  const [theme, themeToggler] = useTheme(themes.darkTheme);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={themeToggler}>change</button>
        <Layout />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
