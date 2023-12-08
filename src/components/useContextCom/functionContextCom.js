import React, { Fragment } from "react";
import { useTheme, useThemeUpdate } from "./themContext";

const FunctionContextCom = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <Fragment>
      <button onClick={toggleTheme}> Toggle theme</button>
      <div style={themeStyles}>Function theme</div>
    </Fragment>
  );
};

export default FunctionContextCom;
