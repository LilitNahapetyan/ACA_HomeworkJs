import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "./App";
import { themes } from "./helper/theme";

const Layout = () => {
  const [value, setValue] = useState("");
  const theme1 = useContext(ThemeContext);
  let theme2 = "";

  if (theme1 == themes.darkTheme) {
    theme2 = themes.lightTheme;
  } else {
    theme2 = themes.darkTheme;
  }
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={theme2}>
      <p>This is input</p>
      <input style={theme1} value={value} onChange={handleOnChange} />
    </div>
  );
};

export default Layout;
