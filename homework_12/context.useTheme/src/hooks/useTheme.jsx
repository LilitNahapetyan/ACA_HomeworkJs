import { themes } from "../helper/theme";
import { useState } from "react";

const useTheme = (initialTheme) => {
  const [theme, setTheme] = useState(initialTheme);
  const themeToggler = () => {
    theme === themes.lightTheme
      ? setTheme(themes.darkTheme)
      : setTheme(themes.lightTheme);
  };
  return [theme, themeToggler];
};

export default useTheme;
