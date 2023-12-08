import React, { Fragment } from "react";
import FunctionContextCom from "./functionContextCom";
import ClassContextCom from "./classContextCom";
import ThemeProvider from "./themContext";


const UseContextCom = () => {

  return (
    <Fragment>
      <ThemeProvider>
        <FunctionContextCom />
        <ClassContextCom />
      </ThemeProvider>
    </Fragment>
  );
};

export default UseContextCom;
