import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import List from "./list";

const UseCallBackCom = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  // getItems 变化只针对number的变化而变化，与theme change无关
  // useCallback和useMemo相似，但useCallback返回是一个funcino可传参改变返回值，useMemo返回的是值，无法改变
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Button onClick={() => setDark((preDark) => !preDark)}>
        Toggle theme
      </Button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallBackCom;
